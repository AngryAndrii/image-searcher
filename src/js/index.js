'use strict';

import axios from 'axios';
// key - твій унікальний ключ доступу до API.
// q - термін для пошуку. Те, що буде вводити користувач.
// image_type - тип зображення. На потрібні тільки фотографії, тому постав значення photo.
// orientation - орієнтація фотографії. Постав значення horizontal.
// safesearch - фільтр за віком. Постав значення true.

const BASE_URL = 'https://pixabay.com/api/?';
const myApiKey = '38146382-d0cd2611e4be2665aae5df53b';
const url = `${BASE_URL}key=${myApiKey}`;
// fetch(`${BASE_URL}key=${myApiKey}`)
//   .then(response => {
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//   });

// const showImages = async url => {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(response.status);
//     }

//     return await response.json();
// };
const showImages = async () => axios.get(url);

const loader = async () => {
  try {
    console.log(await showImages(url));
  } catch {
    console.log('an arror happened');
  }
};

loader();
