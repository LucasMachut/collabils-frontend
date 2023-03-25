import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://backendcollabils.local/wp-json/wp/v2",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export default {
  async getAllCategories() {
    const response = await apiClient.get("/categories");
    return response.data;
  },

  async getCategoryById(categoryId) {
    const response = await apiClient.get(`/categories/${categoryId}`);
    return response.data;
  },

  async getSignsByCategoryId(categoryId) {
    const response = await apiClient.get(`/signes/?categories=${categoryId}&_embed`);
    return response.data;
  },

  async getSignById(signId) {
    const response = await apiClient.get(`/signes/${signId}?_embed&meta_key=_signe_date,_signe_context,_signe_video`);
    return response.data;
  },

  async getAllSignes() {
    const response = await apiClient.get("/signes");
    return response.data;
  },
};
