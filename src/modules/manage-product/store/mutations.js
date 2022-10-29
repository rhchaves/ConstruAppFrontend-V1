const LOADING = (state, payload) => {
  state.loading = payload;
};

const INSERT_NEW_PRODUCT = (state, payload) => {
  state.products.push(payload);
};

const INSERT_LIST_PRODUCTS = (state, payload) => {
  state.products = payload;
};

const CHANGE_PRODUCT = (state, payload) => {
  state.products = state.products.map((products) => {
    if (products.id === payload.id) {
      return payload;
    }
    return products;
  });
};

const DELETE_PRODUCT = (state, payload) => {
  state.products = state.products.filter((products) => products.id !== payload.id);
};

export {
  LOADING,
  INSERT_NEW_PRODUCT,
  INSERT_LIST_PRODUCTS,
  CHANGE_PRODUCT,
  DELETE_PRODUCT,
};
