import axios from 'axios';

const API_URL = 'https://collabils.local/wp-json/wp/v2';

export default {
  getPostsByCategory(categoryId) {
    return axios.get(`${API_URL}/posts?categories=${categoryId}`);
  },
};
