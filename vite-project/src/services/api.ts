import axios from 'axios';

export const api = axios.create({
  baseURL: 'localhost:5000',
});

export default api;
