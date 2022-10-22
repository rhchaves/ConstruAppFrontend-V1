import axios from 'axios';
import { LocalStorage } from 'quasar';

// const avoid = 'highways';
// const origin = '08390322';
// const destination = '09780130';
// const mode = 'driving';
// const passwordKey = 'AIzaSyB7sxgJ2yklNl9ghL6Lf2PgNjvagu7mrQk';
// const basicAuth = window.btoa(`${passwordKey}`);

// const HttpClient = axios.create({
//   method: 'get',
//   baseURL: `https://maps.googleapis.com/maps/api/directions/json?
//             avoid=${avoid}&
//             destination=${destination}&
//             mode=${mode}&
//             origin=${origin}&
//             key=${passwordKey}`,
// });

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
