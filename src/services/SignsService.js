import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://collabils.local/wp-json/wp/v2',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    timeout: 10000
});

export default {
    // Recupere la liste de toutes les recettes avec les metadonnées
    async findAll() {
        const response = await apiClient.get('/posts?_embed');
        return response.data;
    }
}
