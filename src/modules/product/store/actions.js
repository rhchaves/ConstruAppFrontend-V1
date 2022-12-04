import HttpClient from 'src/boot/HttpClient';

// //////////////////////////////////////////////////////
const insertProductPage = async ({ commit }, payload) => {
  commit('LOADING', true);
  console.log('payload', payload);

  commit('INSERT_PRODUCT_PAGE', payload);

  commit('LOADING', false);
};

// //////////////////////////////////////////////////////
const filterProduct = async ({ commit }) => {
  commit('LOADING', true);

  commit('CLEAR_PRODUCT_PAGE');

  const filter = '?filtro=label:=:Cabo Coaxial Rg';
  HttpClient.get(`/product${filter}`).then((response) => {
    console.log('filterProduct', response.data[13]);
    commit('INSERT_PRODUCT_PAGE', response.data[13]);
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
