import HttpClient from 'src/common/boot/HttpClient';

// //////////////////////////////////////////////////////
const listProductCart = async ({ commit }) => {
  commit('LOADING', true);

  HttpClient.get('/shopping_cart').then((response) => {
    console.log('listProductCart', response.data);
    commit('ADD_PRODUCT_CART', response.data);
    return response;
  }).catch((error) => {
    console.log('Erro na requisição', error);
  }).finally(() => {
    commit('LOADING', false);
  });
};

// //////////////////////////////////////////////////////
const addProductCart = async ({ commit }, payload) => {
  commit('LOADING', true);

  commit('ADD_PRODUCT_CART', payload);

  commit('LOADING', false);
};

// //////////////////////////////////////////////////////
const removeProductCart = async ({ commit }, payload) => {
  commit('LOADING', true);

  commit('REMOVE_PRODUCT_CART', payload);

  commit('LOADING', false);
};

// //////////////////////////////////////////////////////
const addQtdCart = async ({ commit }, { payload, qtd }) => {
  commit('LOADING', true);

  console.log('Payload', payload);
  console.log('qtd', qtd);

  // commit('ADD_QTD_PRODUCT', payload, qtd);

  commit('LOADING', false);
};
// //////////////////////////////////////////////////////

export {
  listProductCart,
  addProductCart,
  removeProductCart,
  addQtdCart,
};
