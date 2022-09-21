import axios from 'axios';
import router from 'src/router';
import criarToast from './ToastsHandler';
import { recuperarCookie } from './CookiesHandler';

const HttpClient = axios.create({
  baseURL: process.env.VUE_APP_ROOT_API, // 'http://localhost:8000/api/v1'
});

HttpClient.interceptors.request.use((request) => {
  if (!request.url.endsWith('login')) {
    request.headers.common.Authorization = `Bearer ${recuperarCookie('sgp-token')}`;
  }
  return request;
});

HttpClient.interceptors.response.use((response) => {
  if (response.config.method !== 'get' && response.data.message?.success) {
    response.data.message.success.forEach((message) => {
      criarToast({
        tipo: 'success',
        mensagem: message,
      });
    });
  }

  return response;
}, (error) => {
  if (error.response?.status === 401) {
    if (router.history.current.name === 'login') {
      return Promise.reject(error);
    }
    criarToast({
      tipo: 'error',
      mensagem: 'Por favor, faça login novamente!',
    });
    router.push('/login');
    return Promise.reject(error);
  }

  if (error.response?.data) {
    let dataErrors = error.response.data.message?.errors;

    if (dataErrors) {
      dataErrors.map((err) => {
        if (typeof err === 'string') {
          criarToast({
            tipo: 'error',
            mensagem: err,
          });
        } else {
          const errorKeys = Object.keys(err);

          errorKeys.forEach((key) => {
            err[key].forEach((message) => {
              criarToast({
                tipo: 'error',
                mensagem: message,
              });
            });
          });
        }
        return dataErrors;
      });
    } else {
      // esse else serve para pegar o problema de padronização no retorno das mensagens de erro
      dataErrors = error.response.data.mensagem;
      dataErrors.forEach((msg) => {
        criarToast({
          tipo: 'error',
          mensagem: msg,
        });
      });
    }
  }

  if (error.response?.status === 500) {
    criarToast({
      tipo: 'error',
      mensagem: 'Houve um erro com o servidor, tente novamente e se o erro persistir, contate o suporte.',
    });
  }

  return Promise.reject(error);
});

export default HttpClient;
