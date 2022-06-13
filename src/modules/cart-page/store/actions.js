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
// //////////////////////////////////////////////////////

export {
  addProductCart,
  removeProductCart,
};
