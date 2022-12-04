const LOADING = (state, payload) => {
  state.loading = payload;
};

const ADD_PRODUCT_CART = (state, payload) => {
  state.cartProductList = payload;
};

const REMOVE_PRODUCT_CART = (state, payload) => {
  state.cartProductList = state.cartProductList.filter((item) => item.id !== payload.id);
};

const ADD_QTD_PRODUCT = (state, payload, qtd) => {
  state.cartProductList = state.cartProductList.map((item) => {
    if (item.id === payload.id) {
      item.qtdForSale = qtd;
    }
    return item;
  });
};

const DELETE_CART = (state) => {
  state.cartProductList = [];
};

const UPDATE_PRODUCTS_CART = (state, payload) => {
  state.productList.push(payload);
};

export {
  LOADING,
  ADD_PRODUCT_CART,
  REMOVE_PRODUCT_CART,
  ADD_QTD_PRODUCT,
  DELETE_CART,
  UPDATE_PRODUCTS_CART,
};
