import HttpClient from 'src/boot/HttpClient';
import { LocalStorage } from 'quasar';
import Swal from 'sweetalert2';

// //////////////////////////////////////////////////////
const login = async ({ commit }, payload) => {
  commit('LOADING', true);
  try {
    const loginData = await HttpClient.post('login', payload);
    LocalStorage.set('user', loginData.data.user);
    LocalStorage.set('construapp_user_token', loginData.data.token);
    commit('LOGIN_USER', loginData.data.user);
    commit('SETAR_TOKEN', loginData.data.token);
  } catch (error) {
    console.log('Este erro', error.message);

    if (error.message === 'Request failed with status code 403') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Usuário ou senha incorreto',
        showConfirmButton: false,
        timer: 3000,
      });
    }
  } finally {
    commit('LOADING', false);
  }
};
// //////////////////////////////////////////////////////
const logout = async ({ commit }) => {
  commit('LOADING', true);
  commit('LOGAR', false);
  commit('LOADING', false);
};
// //////////////////////////////////////////////////////
const createAccountClient = async ({ commit }, payload) => {
  commit('LOADING', true);
  console.log('Print createAccountClient', payload);

  return HttpClient.post('/client', payload).then((response) => {
    console.log('response.data', response.data);

    commit('INSERT_NEW_CLIENT', response.data);
    return response;
  }).catch((error) => {
    console.log('Erro na requisição', error);
  }).finally(() => {
    commit('LOADING', false);
  });
};
// //////////////////////////////////////////////////////

export {
  login,
  logout,
  createAccountClient,
};
