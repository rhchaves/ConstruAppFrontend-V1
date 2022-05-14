const LOADING = (state, payload) => {
  state.loading = payload;
};

const IS_LOGGED_IN = (state, payload) => {
  state.isLoggedIn = payload;
};

const LOGIN_USER = (state, payload) => {
  state.user.email = payload.email;
  state.user.password = payload.password;
};

export {
  LOADING,
  IS_LOGGED_IN,
  LOGIN_USER,
};
