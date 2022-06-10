// //////////////////////////////////////////////////////
const addNewAdmin = async ({ commit }, payload) => {
  commit('LOADING', true);

  commit('INSERT_NEW_ADMIN', payload);

  commit('LOADING', false);
};
// //////////////////////////////////////////////////////

const changeAdmin = async ({ commit }, payload) => {
  commit('LOADING', true);

  commit('CHANGE_ADMIN', payload);

  commit('LOADING', false);
};
// //////////////////////////////////////////////////////

const deleteAdmin = async ({ commit }, payload) => {
  commit('LOADING', true);

  commit('DELETE_ADMIN', payload);

  commit('LOADING', false);
};
// //////////////////////////////////////////////////////

export {
  addNewAdmin,
  changeAdmin,
  deleteAdmin,
};
