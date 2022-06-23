const LOADING = (state, payload) => {
  state.loading = payload;
};

const CHANGE_SELLER = (state, payload) => {
  state.sellers = state.sellers.map((sellers) => {
    if (sellers.id === payload.id) {
      return payload;
    }
    return sellers;
  });
};

const INSERT_LIST_SELLERS = (state, payload) => {
  state.sellers = payload;
};

export {
  LOADING,
  CHANGE_SELLER,
  INSERT_LIST_SELLERS,
};
