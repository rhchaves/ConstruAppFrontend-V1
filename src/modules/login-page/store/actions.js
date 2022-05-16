// //////////////////////////////////////////////////////
const login = async ({ commit }, payload) => {
  commit('LOADING', true);
  console.log('está logado');
  commit('LOGAR', true);
  commit('LOGIN_USER', payload);

  commit('LOADING', false);
};
// //////////////////////////////////////////////////////
const logout = async ({ commit }) => {
  commit('LOADING', true);
  commit('LOGAR', false);
  commit('LOADING', false);
};
// //////////////////////////////////////////////////////

export {
  login,
  logout,
};
