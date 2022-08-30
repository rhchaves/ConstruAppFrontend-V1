const LOADING = (state, payload) => {
  state.loading = payload;
};

const INSERT_PRODUCT_PAGE = (state, payload) => {
  state.productPage = payload;
};

export {
  LOADING,
  INSERT_PRODUCT_PAGE,
};
