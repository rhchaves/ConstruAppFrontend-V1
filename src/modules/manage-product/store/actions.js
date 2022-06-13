// //////////////////////////////////////////////////////
const addNewProduct = async ({ commit }, payload) => {
  commit('LOADING', true);

  commit('INSERT_NEW_PRODUCT', payload);

  commit('LOADING', false);
};
// //////////////////////////////////////////////////////

const changeProduct = async ({ commit }, payload) => {
  commit('LOADING', true);

  commit('CHANGE_PRODUCT', payload);

  commit('LOADING', false);
};
// //////////////////////////////////////////////////////

const deleteProduct = async ({ commit }, payload) => {
  commit('LOADING', true);

  commit('DELETE_PRODUCT', payload);

  commit('LOADING', false);
};
// //////////////////////////////////////////////////////

export {
  addNewProduct,
  changeProduct,
  deleteProduct,
};
