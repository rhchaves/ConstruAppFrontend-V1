import axios from 'axios';
import { LocalStorage } from 'quasar';

const HttpClient = axios.create({
  baseURL: 'http://localhost:8000/api/', // 'http://localhost:8000/api'
});

HttpClient.interceptors.request.use((request) => {
  if (!request.url.endsWith('login')) {
    request.headers.common.Authorization = `Bearer ${LocalStorage.getItem('construapp_user_token')}`;
  }
  return request;
});

export default HttpClient;
