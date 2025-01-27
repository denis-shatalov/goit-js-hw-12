import axios from 'axios';

export const searchPhoto = (query, currentPage) => {
  const axiosOptions = {
    params: {
      key: `25786434-348adb767e319176b4ad356ea`,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: currentPage,
      per_page: 15,
    },
  };
  return axios.get(`https://pixabay.com/api/`, axiosOptions);
};