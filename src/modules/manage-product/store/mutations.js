const LOADING = (state, payload) => {
  state.loading = payload;
};

const INSERT_NEW_PRODUCT = (state, payload) => {
  state.products.push(payload);
};

const INSERT_LIST_PRODUCTS = (state, payload) => {
  // state.products = payload;
  state.products.push(payload);
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

const TOP_SELLER_PRODUCTS = (state, payload) => {
  state.topSellingProducts.push(payload);
};

const LIST_FILTER_PRODUCTS = (state, payload) => {
  state.filteredProducts.push(payload);
};

const CLEAR_LIST_FILTER_PRODUCTS = (state) => {
  state.filteredProducts = [];
};

const CLEAR_TOP_SELLING_PRODUCTS = (state) => {
  state.topSellingProducts = [];
};

export {
  LOADING,
  INSERT_NEW_PRODUCT,
  INSERT_LIST_PRODUCTS,
  CHANGE_PRODUCT,
  DELETE_PRODUCT,
  TOP_SELLER_PRODUCTS,
  LIST_FILTER_PRODUCTS,
  CLEAR_LIST_FILTER_PRODUCTS,
  CLEAR_TOP_SELLING_PRODUCTS,
};
