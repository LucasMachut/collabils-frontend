import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://backendcollabils.local/wp-json/wp/v2',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    timeout: 10000
});

export default {
    async findAll() {
        const response = await apiClient.get('/signes?_embed');
        return response.data;
    }
}
