import HttpClient from 'src/common/boot/HttpClient';
import Swal from 'sweetalert2';

let shoppingCart = {};
// //////////////////////////////////////////////////////
const listProductCart = async ({ commit }, payload) => {
  commit('LOADING', true);

  const user = payload;
  HttpClient.get('/shopping_cart').then((shopping) => {
    shopping.data.filter((item) => {
      if (item.user_id === user.id) {
        shoppingCart = item;
      }
      return shoppingCart;
    });
    console.log('shoppingCart', shoppingCart);

    HttpClient.get(`/shopping_cart/${shoppingCart.id}/items`).then((response) => {
      console.log('shoppingCart itens', response.data.shopping_cart_items);
      const data = response.data.shopping_cart_items;
      commit('ADD_PRODUCT_CART', data);
      return response;
    });
    return shopping;
  });

  //   return response;
  // }).catch((error) => {
  //   console.log('Erro na requisição', error);
  // }).finally(() => {
  commit('LOADING', false);
};

// //////////////////////////////////////////////////////
const deleteCart = async ({ commit }) => {
  commit('LOADING', true);

  HttpClient.delete(`/shopping_cart/${shoppingCart.id}`).then((response) => {
    console.log('Delete shoppingCart', response);
    commit('RESET_CART');
    Swal.fire({
      icon: 'success',
      title: 'Concluído',
      text: 'Itens removidos com sucesso',
      showConfirmButton: false,
      timer: 3000,
    });
    return response;
  }).catch((error) => {
    console.log('Erro na requisição', error);
  }).finally(() => {
    commit('LOADING', false);
  });
};

// //////////////////////////////////////////////////////
const updateProductsCart = async ({ commit, state }, payload) => {
  commit('LOADING', true);
  state.productList = [];
  setTimeout(() => {
    const productList = payload;
    const cartList = state.cartProductList;

    console.log('productList no update', productList);
    console.log('cartList no update', cartList);

    cartList.forEach((item) => {
      console.log('item', item);
      // return item;
      productList.forEach((product) => {
        if (item.product_id === product.id) {
          console.log('Entrou', product);
          commit('UPDATE_PRODUCTS_CART', product);
        }
      });
    });
  }, 2000);

  commit('LOADING', false);
};

// //////////////////////////////////////////////////////
const addProductCart = async ({ commit }, payload) => {
  commit('LOADING', true);

  commit('ADD_PRODUCT_CART', payload);

  commit('LOADING', false);
};

// //////////////////////////////////////////////////////
const removeProductCart = async ({ commit }, payload) => {
  commit('LOADING', true);

  commit('REMOVE_PRODUCT_CART', payload);

  commit('LOADING', false);
};

// //////////////////////////////////////////////////////
const addQtdCart = async ({ commit }, { payload, qtd }) => {
  commit('LOADING', true);

  console.log('Payload', payload);
  console.log('qtd', qtd);

  // commit('ADD_QTD_PRODUCT', payload, qtd);

  commit('LOADING', false);
};
// //////////////////////////////////////////////////////

export {
  listProductCart,
  addProductCart,
  removeProductCart,
  addQtdCart,
  deleteCart,
  updateProductsCart,
};
