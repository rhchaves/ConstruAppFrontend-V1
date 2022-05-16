const LOADING = (state, payload) => {
  state.searching = payload;
};

const USER_ADDRESS = (state, payload) => {
  state.userAddress = payload;
};

const SEARCHED_ADDRESS = (state, payload) => {
  state.searchedAddress = payload;
};

export {
  LOADING,
  USER_ADDRESS,
  SEARCHED_ADDRESS,
};
