const LOADING = (state, payload) => {
  state.loading = payload;
};

const LIST_ADMIN = (state, payload) => {
  state.admins = payload;
};

const TYPE_ADMIN = (state, payload) => {
  state.typeAdmin = payload;
};

export {
  LOADING,
  LIST_ADMIN,
  TYPE_ADMIN,
};
