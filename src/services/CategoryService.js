import axios from 'axios';

const BASE_URL = 'http://collabils.local/wp-json/wp/v2/';

export default {
  getCategories() {
    return axios.get(`${BASE_URL}categories`);
  },
  getCategorySlug(categoryId) {
    // Remarque : vous devez remplacer https://votre-site-wordpress.com par l'URL de votre propre site WordPress
    return axios.get(`https://votre-site-wordpress.com/wp-json/wp/v2/categories/${categoryId}`)
      .then(response => {
        return response.data.slug
      })
      .catch(error => {
        console.log(error)
      })
  },
  getPostsByCategory(category) {
    return axios.get(`${BASE_URL}/posts?categories=${category}`)
  }

};
