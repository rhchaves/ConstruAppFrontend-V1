import HttpClient from 'src/boot/HttpClient';

// //////////////////////////////////////////////////////

const changeClient = async ({ commit }, payload) => {
  commit('LOADING', true);

  commit('CHANGE_CLIENT', payload);

  commit('LOADING', false);
};
// //////////////////////////////////////////////////////

const listAllClients = async ({ commit }) => {
  commit('LOADING', true);

  HttpClient.get('/client').then((response) => {
    commit('INSERT_LIST_CLIENTS', response.data);
    console.log('LISTA DE CLIENTES AQUI', response.data);
    return response;
  }).catch((error) => {
    console.log('Erro na requisição da lista', error);
  }).finally(() => {
    commit('LOADING', false);
  });
};
// //////////////////////////////////////////////////////

export {
  changeClient,
  listAllClients,
};
