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
  setTimeout(() => {
    HttpClient.get('/product').then((response) => {
      const products = response.data;

      products.forEach((item) => {
        item.image = `/image/${item.image}`;
        console.log('Erro item', item);
      // item.image = `/image/originais/${item.name}.jpg`;
      });
      commit('INSERT_LIST_PRODUCTS', products);
      return products;
    }).catch((error) => {
      console.log('Erro na requisição da lista', error);
    }).finally(() => {
      commit('LOADING', false);
    });
  }, 1000);
};

// //////////////////////////////////////////////////////
const listAllFilteredProducts = async ({ commit }, payload) => {
  commit('LOADING', true);

  setTimeout(() => {
    HttpClient.get(`/categories/${payload.id}/products`).then((response) => {
      const categoryProducts = response.data.categories;
      categoryProducts.forEach((item) => {
        item.image = `/image/${item.image}`;
        // item.image = `/image/originais/${item.name}.jpg`;
      });
      commit('LIST_FILTER_PRODUCTS', categoryProducts);
    }).catch((error) => {
      console.log('Erro na requisição da lista', error);
    }).finally(() => {
      commit('LOADING', false);
    });
  }, 1000);
};

// //////////////////////////////////////////////////////
const listTopSellingProducts = async ({ commit, state }) => {
  commit('LOADING', true);
  commit('CLEAR_TOP_SELLING_PRODUCTS');
  const productsList = state.products;
  productsList.filter((item) => {
    if (item.id <= 8) {
      commit('TOP_SELLER_PRODUCTS', item);
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
const resetCategoryProduct = async ({ commit }) => {
  commit('LOADING', true);
  setTimeout(() => {
    commit('CLEAR_LIST_FILTER_PRODUCTS');
    commit('LOADING', false);
    listAllProducts();
  }, 1000);
};

// //////////////////////////////////////////////////////

export {
  addNewProduct,
  listAllProducts,
  listAllFilteredProducts,
  listTopSellingProducts,
  updateProduct,
  deleteProduct,
  resetCategoryProduct,
};
