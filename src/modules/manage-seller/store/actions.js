import HttpClient from 'src/boot/HttpClient';

// //////////////////////////////////////////////////////

const changeSeller = async ({ commit }, payload) => {
  commit('LOADING', true);

  commit('CHANGE_SELLER', payload);

  commit('LOADING', false);
};
// //////////////////////////////////////////////////////

const listAllSellers = async ({ commit }) => {
  commit('LOADING', true);

  HttpClient.get('/seller').then((response) => {
    commit('INSERT_LIST_SELLERS', response.data);
    console.log('LISTA DE VENDEDORES AQUI', response.data);
    return response;
  }).catch((error) => {
    console.log('Erro na requisição da lista', error);
  }).finally(() => {
    commit('LOADING', false);
  });
};
// //////////////////////////////////////////////////////
const deleteSeller = async ({ commit }, payload) => {
  commit('LOADING', true);

  console.log('deleteSeller', payload);

  return HttpClient.delete(`/seller/${payload[0].id}`).then((response) => {
    commit('DELETE_SELLER', payload[0]);
    return response;
  }).finally(() => {
    commit('LOADING', false);
  });
};
// //////////////////////////////////////////////////////

export {
  changeSeller,
  listAllSellers,
  deleteSeller,
};
