import HttpClient from 'src/boot/HttpClient';

// //////////////////////////////////////////////////////
const insertProductPage = async ({ commit }, payload) => {
  commit('LOADING', true);
  commit('INSERT_PRODUCT_PAGE', payload);
  commit('LOADING', false);
};

// //////////////////////////////////////////////////////
const filterProduct = async ({ commit }, payload) => {
  commit('LOADING', true);

  // commit('CLEAR_PRODUCT_PAGE');

  const filter = '?mark=&name&label=';
  HttpClient.get(`/products${filter + payload}`).then((response) => {
    console.log('filterProduct', response.data.data);
    // commit('INSERT_PRODUCT_PAGE', response.data[13]);
    return response;
  }).catch((error) => {
    console.log('Erro na requisição da lista', error);
  }).finally(() => {
    commit('LOADING', false);
  });
};
// //////////////////////////////////////////////////////

export {
  insertProductPage,
  filterProduct,
};
