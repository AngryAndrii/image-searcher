import { fetchPhotos } from './js/PixabayAPI';

const form = document.querySelector('#search-form');
const gallery = document.querySelector('#gallery');
const loadMoreBtn = document.querySelector('#loadMoreBtn');

async function LoadImgs() {
  const loadedImages = await fetchPhotos();

  showImgs(loadedImages);
}

async function showImgs(lddImgs) {
  const images = lddImgs.hits;
  console.log(images);
  const markUp = images
    .map(el => {
      return `<div class="gallery-item">
    <img class="gallery-image" src="${el.webformatURL}" alt="" />
    <div class="info-block">
      <ul>
        <li>
        <p class= "descr">likes</p>
        <p class="likes">${el.likes}</p>
        </li>
        <li>
        <p class= "descr">comments</p>
        <p class="comments">${el.comments}</p>
        </li>
        <li>
        <p class= "descr">views</p>
        <p class="views">${el.views}</p>
        </li>
        <li>
        <p class= "descr">downloads</p>
        <p class="downloads">${el.downloads}</p>
        </li>
      </ul>
    </div>
  </div>`;
    })
    .join('');
  gallery.insertAdjacentHTML('beforeend', markUp);
}

LoadImgs();
