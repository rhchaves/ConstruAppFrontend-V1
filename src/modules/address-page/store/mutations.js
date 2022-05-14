const SEARCHING = (state, payload) => {
  state.searching = payload;
};

const USER_ADDRESS = (state, payload) => {
  state.address = payload;
};

export {
  SEARCHING,
  USER_ADDRESS,
};
