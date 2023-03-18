import axios from 'axios';

const BASE_URL = 'http://collabils.local/wp-json/wp/v2/';

export default {
  getCategories() {
    return axios.get(`${BASE_URL}categories`);
  },
};
