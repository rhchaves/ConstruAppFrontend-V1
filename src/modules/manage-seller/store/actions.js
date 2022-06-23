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

export {
  changeSeller,
  listAllSellers,
};
