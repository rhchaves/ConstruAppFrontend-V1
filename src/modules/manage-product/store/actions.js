import HttpClient from 'src/boot/HttpClient';

// //////////////////////////////////////////////////////
const addNewProduct = async ({ commit }, payload) => {
  commit('LOADING', true);

  commit('INSERT_NEW_PRODUCT', payload);

  commit('LOADING', false);
};

// //////////////////////////////////////////////////////
const listAllProducts = async ({ commit }) => {
  commit('LOADING', true);

  HttpClient.get('/product').then((response) => {
    commit('INSERT_LIST_PRODUCTS', response.data);
    console.log('listAllProducts', response.data);
    return response;
  }).catch((error) => {
    console.log('Erro na requisição da lista', error);
  }).finally(() => {
    commit('LOADING', false);
  });
};

// //////////////////////////////////////////////////////
const listAllFilteredProducts = async ({ commit, state }, payload) => {
  commit('LOADING', true);
  commit('CLEAR_LIST_FILTER_PRODUCTS');
  const productsList = state.products;
  productsList.filter((item) => {
    if (item.category === payload) {
      commit('LIST_FILTER_PRODUCTS', item);
    }
    return item;
  });
  commit('LOADING', false);
};

// //////////////////////////////////////////////////////
const updateProduct = async ({ commit }, payload) => {
  commit('LOADING', true);

  commit('CHANGE_PRODUCT', payload);

  commit('LOADING', false);
};

// //////////////////////////////////////////////////////
const deleteProduct = async ({ commit }, payload) => {
  commit('LOADING', true);

  console.log('deleteProduct', payload);

  return HttpClient.delete(`/product/${payload[0].id}`).then((response) => {
    commit('DELETE_PRODUCT', payload[0]);
    return response;
  }).finally(() => {
    commit('LOADING', false);
  });
};

// //////////////////////////////////////////////////////

export {
  addNewProduct,
  listAllProducts,
  listAllFilteredProducts,
  updateProduct,
  deleteProduct,
};
