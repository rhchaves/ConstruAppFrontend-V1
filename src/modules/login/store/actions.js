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
  const dataUser = {
    name: payload.name,
    cpf: payload.cpf,
    email: payload.email,
    password: payload.password,
    userType: 3,
  };

  await HttpClient.post('/user', dataUser).then((response) => {
    console.log('response.data', response.data);

    // commit('INSERT_NEW_CLIENT', response.data);
    return response;
  }).catch((error) => {
    console.log('Erro na requisição', error);
  });
  let userId = 0;
  await HttpClient.get('/user').then((response) => {
    console.log('response.data', response.data);
    userId = response.data.length;
    return response;
  }).catch((error) => {
    console.log('Erro na requisição', error);
  });

  const dataUserEndereco = {
    user_id: userId,
    full_name: payload.name,
    cpf: payload.cpf,
    phone: payload.phone,
    street: payload.street,
    number: payload.number,
    zip: payload.cep,
    complement: payload.complement,
    district: payload.district,
    city: payload.city,
    state: payload.state,
  };
  console.log('dataUserEndereco', dataUserEndereco);

  setTimeout(async () => {
    await HttpClient.post('/client', dataUserEndereco).then((response) => {
      console.log('response.data', response.data);

      // commit('INSERT_NEW_CLIENT', response.data);
      return response;
    }).catch((error) => {
      console.log('Erro na requisição', error);
    }).finally(() => {
      Swal.fire({
        icon: 'success',
        title: 'Sucesso...',
        text: 'Usuário cadastrado com sucesso',
        showConfirmButton: false,
        timer: 3000,
      });
      commit('LOADING', false);
    });
  }, 2000);
};
// //////////////////////////////////////////////////////

export {
  login,
  logout,
  createAccountClient,
};
