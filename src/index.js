import { fetchPhotos } from './js/PixabayAPI';

const form = document.querySelector('#search-form');
const gallery = document.querySelector('#gallery');
const loadMoreBtn = document.querySelector('#loadMoreBtn');

async function LoadImgs(q) {
  gallery.innerHTML = '';
  const loadedImages = await fetchPhotos(q);
  showImgs(loadedImages);
}

async function showImgs(lddImgs) {
  const images = lddImgs.hits;
  console.log(images);
  const markUp = images
    .map(({ webformatURL, likes, comments, views, downloads }) => {
      return `<div class="gallery-item">
    <img class="gallery-image" src="${webformatURL}" alt="" />
    <div class="info-block">
      <ul>
        <li>
        <p class= "descr">likes</p>
        <p class="likes">${likes}</p>
        </li>
        <li>
        <p class= "descr">comments</p>
        <p class="comments">${comments}</p>
        </li>
        <li>
        <p class= "descr">views</p>
        <p class="views">${views}</p>
        </li>
        <li>
        <p class= "descr">downloads</p>
        <p class="downloads">${downloads}</p>
        </li>
      </ul>
    </div>
  </div>`;
    })
    .join('');
  gallery.insertAdjacentHTML('beforeend', markUp);
}

async function handleSearchForm(event) {
  event.preventDefault();
  let currentQuery = form.firstElementChild.value;
  LoadImgs(currentQuery);
}

form.addEventListener('submit', handleSearchForm);
