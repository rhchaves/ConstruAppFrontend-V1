import HttpClient from 'src/common/boot/HttpClient';

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
const deleteClient = async ({ commit }, payload) => {
  commit('LOADING', true);

  console.log('deleteClient', payload);

  return HttpClient.delete(`/client/${payload[0].id}`).then((response) => {
    commit('DELETE_CLIENT', payload[0]);
    return response;
  }).finally(() => {
    commit('LOADING', false);
  });
};
// //////////////////////////////////////////////////////
const blockClient = async ({ commit }, payload) => {
  commit('LOADING', true);

  console.log('blockClient', payload);

  return HttpClient.put(`/client/${payload[0].id}`, payload).then((response) => {
    commit('DELETE_CLIENT', payload[0]);
    return response;
  }).finally(() => {
    commit('LOADING', false);
  });
};
// //////////////////////////////////////////////////////

export {
  changeClient,
  listAllClients,
  deleteClient,
  blockClient,
};
