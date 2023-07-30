'use strict';

import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/?';
const KEY = '38146382-d0cd2611e4be2665aae5df53b';

q = null;
page = 1;

async function fetchPhotos() {
  const response = await fetch(`${BASE_URL}key=${KEY}&&q=${q}&page=${page}`);
  if (!response.ok) {
    throw new Error(response.status);
  }
  return response.json();
}

export { fetchPhotos };
