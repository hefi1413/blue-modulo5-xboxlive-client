import axios from 'axios';
import { baseURL } from 'assets/env.js';

const api = axios.create({
  baseURL: baseURL
})

// intercepta o que vai as chamadas para o backend.
api.interceptors.request.use((config: any) => {
  try {
    const token = localStorage.getItem('token');
    if(token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  } catch (error: any) {
    console.log(error);
  }
})

export default api;