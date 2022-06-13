const LOADING = (state, payload) => {
  state.loading = payload;
};

const ADD_PRODUCT_CART = (state, payload) => {
  state.cartProductList.push(payload);
};

const REMOVE_PRODUCT_CART = (state, payload) => {
  state.cartProductList = state.cartProductList.filter((item) => item.id !== payload.id);
};

export {
  LOADING,
  ADD_PRODUCT_CART,
  REMOVE_PRODUCT_CART,
};
