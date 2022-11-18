import HttpClient from 'src/common/boot/HttpClient';

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
const blockSeller = async ({ commit }, payload) => {
  commit('LOADING', true);

  const seller = payload[0];

  if (seller.status === 0) {
    seller.status = 1;
  } else {
    seller.status = 0;
  }

  console.log('blockSeller', payload);

  return HttpClient.put(`/seller/${payload[0].id}`, seller).then((response) => {
    console.log('response.data', response.data);
    // commit('BLOCK_SELLER', seller);
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
  blockSeller,
};
