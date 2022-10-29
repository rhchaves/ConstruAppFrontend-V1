// //////////////////////////////////////////////////////
const insertProductPage = async ({ commit }, payload) => {
  commit('LOADING', true);

  commit('INSERT_PRODUCT_PAGE', payload);

  commit('LOADING', false);
};
// //////////////////////////////////////////////////////

export {
  insertProductPage,
};
