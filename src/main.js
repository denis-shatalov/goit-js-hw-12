import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';
import axios from 'axios';
import { imagesCardTemplate } from './js/render-functions';
import { searchPhoto } from './js/pixabay-api';

const searchForm = document.querySelector('.js-search-form');
const formInput = document.querySelector('.js-search-input');
const formBtn = document.querySelector('.search-btn');
const imagesListEl = document.querySelector('.gallery');

const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.js-btn-load');

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

let page = 1;
let query = '';

loadMoreBtn.classList.add('is-hidden');

const onSearchFormSubmit = async event => {
  try {
    event.preventDefault();
    query = formInput.value.trim();

    if (!query) {
      iziToast.warning({
        message: 'Please enter a search term.',
        position: 'topRight',
      });
      return;
    }
    page = 1;

    loadMoreBtn.classList.add('is-hidden');
  
    imagesListEl.innerHTML = '';

    loader.classList.add('active');

    const response = await searchPhoto(query, page);

    loader.classList.remove('active');

    if (response.data.total === 0) {
      iziToast.info({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return;
    }
    imagesListEl.insertAdjacentHTML(
      'beforeend',
      imagesCardTemplate(response.data.hits)
    );

    loadMoreBtn.classList.remove('is-hidden');

    lightbox.refresh();
    if (page * 15 >= response.data.totalHits) {
      loadMoreBtn.classList.add('is-hidden');
      loadMoreBtn.removeEventListener('click', onLoadMoreBtnClick);
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    } else {
      loadMoreBtn.classList.remove('is-hidden');
      loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);
    }
  } catch (error) {
    loader.classList.remove('active');
    iziToast.error({
      message: 'Something went wrong, please try again later.',
      position: 'topRight',
    });
    console.error('Error fetching data:', error);
  }
};

const onLoadMoreBtnClick = async () => {
  try {
    page++;
    loader.classList.add('active');
    const response = await searchPhoto(query, page);
    loader.classList.remove('active');
    imagesListEl.insertAdjacentHTML(
      'beforeend',
      imagesCardTemplate(response.data.hits)
    );
    lightbox.refresh();
    if (page * 15 >= response.data.totalHits) {
      loadMoreBtn.classList.add('is-hidden');
      loadMoreBtn.removeEventListener('click', onLoadMoreBtnClick);
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    } else {
      loadMoreBtn.classList.remove('is-hidden');
      loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);
    }
    const cardHeight = document
      .querySelector('.gallery-card')
      .getBoundingClientRect().height;

    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
  } catch (err) {
    console.log(err);
  }
};

searchForm.addEventListener('submit', onSearchFormSubmit);
loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);