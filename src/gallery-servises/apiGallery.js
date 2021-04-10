import axios from 'axios';

const AUTH_TOKEN = '2778632-0d9f36dba3e3cb8ecea612bcf';

axios.defaults.baseURL = 'https://pixabay.com/api';

export const fetchGallery = (queue, pageNumber) => {
  return axios
    .get(
      `/?key=${AUTH_TOKEN}&q=${queue}&page=${pageNumber}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(res => res.data.hits).catch(err=>console.log(err));
};
