const LOADING = (state, payload) => {
  state.searching = payload;
};

const USER_ADDRESS = (state, payload) => {
  state.address = payload;
};

export {
  LOADING,
  USER_ADDRESS,
};
