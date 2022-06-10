// //////////////////////////////////////////////////////

const changeSeller = async ({ commit }, payload) => {
  commit('LOADING', true);

  commit('CHANGE_SELLER', payload);

  commit('LOADING', false);
};
// //////////////////////////////////////////////////////

export {
  changeSeller,
};
