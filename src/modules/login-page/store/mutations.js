const LOADING = (state, payload) => {
  state.loading = payload;
};

const LOGAR = (state, payload) => {
  state.logado = payload;
};

const LOGIN_USER = (state, payload) => {
  state.user.email = payload.email;
  state.user.password = payload.password;
};

export {
  LOADING,
  LOGAR,
  LOGIN_USER,
};
