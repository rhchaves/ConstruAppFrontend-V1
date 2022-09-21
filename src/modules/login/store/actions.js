import HttpClient from 'src/common/boot/HttpClient';

// //////////////////////////////////////////////////////
const login = async ({ commit }, payload) => {
  commit('LOADING', true);
  console.log('está logado');
  commit('LOGAR', true);
  commit('LOGIN_USER', payload);

  commit('LOADING', false);
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
