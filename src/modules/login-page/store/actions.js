// //////////////////////////////////////////////////////
const checkLogin = async ({ commit }, payload) => {
  commit('LOADING', true);
  console.log('está logado');
  commit('IS_LOGGED_IN', true);
  commit('LOGIN_USER', payload);

  commit('LOADING', false);
};
// //////////////////////////////////////////////////////

export {
  checkLogin,
};
