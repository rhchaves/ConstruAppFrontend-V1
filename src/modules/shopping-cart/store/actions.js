// //////////////////////////////////////////////////////
const addProductCart = async ({ commit }, payload) => {
  commit('LOADING', true);

  commit('ADD_PRODUCT_CART', payload);

  commit('LOADING', false);
};

const removeProductCart = async ({ commit }, payload) => {
  commit('LOADING', true);

  commit('REMOVE_PRODUCT_CART', payload);

  commit('LOADING', false);
};

const addQtdCart = async ({ commit }, { payload, qtd }) => {
  commit('LOADING', true);

  console.log('Payload', payload);
  console.log('qtd', qtd);

  // commit('ADD_QTD_PRODUCT', payload, qtd);

  commit('LOADING', false);
};
// //////////////////////////////////////////////////////

export {
  addProductCart,
  removeProductCart,
  addQtdCart,
};
