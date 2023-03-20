import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://collabils.local/wp-json',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        // Cette syntaxe permet d'effectuer une requete qui necessite d'etre connecté
        //Authorization: 'Bearer ' + sessionStorage.getItem('token') + ''
    },
    timeout: 10000
});

export default {
    // permet de créer un nouvel utlisateur
    async register(params) {
        try {
            const response = await apiClient.post('/wp/v2/users/register', params);
            return response.data
        } catch(error) {
            return error.response.data
        }
    },
    async login(params) {
        try {
            const response = await apiClient.post('/jwt-auth/v1/token', params);
            return response.data;
        } catch(error) {
            return error.response.data
        }
    },
    async getRoles(id) {
        try {
            apiClient.defaults.headers.common['Authorization'] = 'Bearer ' + sessionStorage.getItem('token') + '';
            const role = await apiClient.get('/wp/v2/users/' + id + '?context=edit');
            return role.data
        } catch(error) {
            return error.response.data
        }
        
    }
}