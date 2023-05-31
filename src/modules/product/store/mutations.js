const LOADING = (state, payload) => {
  state.loading = payload;
};

const INSERT_PRODUCT_PAGE = (state, payload) => {
  state.productPage = payload;
};

const CLEAR_PRODUCT_PAGE = (state) => {
  state.productPage = [];
};

export {
  LOADING,
  INSERT_PRODUCT_PAGE,
  CLEAR_PRODUCT_PAGE,
};
