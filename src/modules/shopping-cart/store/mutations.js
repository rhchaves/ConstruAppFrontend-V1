const LOADING = (state, payload) => {
  state.loading = payload;
};

const ADD_PRODUCT_CART = (state, payload) => {
  state.cartProductList.push(payload);
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

export {
  LOADING,
  ADD_PRODUCT_CART,
  REMOVE_PRODUCT_CART,
  ADD_QTD_PRODUCT,
};
