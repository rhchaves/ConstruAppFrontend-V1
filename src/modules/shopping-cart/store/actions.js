import HttpClient from 'src/common/boot/HttpClient';
import Swal from 'sweetalert2';

const shoppingCart = {};
// //////////////////////////////////////////////////////
const listProductCart = async ({ commit }, payload) => {
  commit('LOADING', true);
  // commit('DELETE_CART');
  console.log('payload', payload);
  setTimeout(async () => {
    const user = payload;
    let cart = {};
    if (user.userType === 3) {
      await HttpClient.get('/shopping_cart').then(async (shopping) => {
        shopping.data.filter((item) => {
          if (item.user_id === user.id) {
            cart = item;
          }
          return shoppingCart;
        });
        console.log('shoppingCart', cart);

        await HttpClient.get(`/shopping_cart/${cart.id}/items`).then((response) => {
          console.log('shoppingCart itens', response.data.shopping_cart_items);
          const data = response.data.shopping_cart_items;
          data.forEach((item) => {
            item.image = `/image/${item.image}`;
          });
          commit('ADD_PRODUCT_CART', data);
          return response;
        });
        return shopping;
      });
    }
  }, 1000);

  //   return response;
  // }).catch((error) => {
  //   console.log('Erro na requisição', error);
  // }).finally(() => {
  commit('LOADING', false);
};

// //////////////////////////////////////////////////////
const updateProductsCart = async ({ commit }, payload) => {
  commit('LOADING', true);
  // state.productList = [];
  setTimeout(() => {
    const productList = payload;
    const cartList = payload;
    // const cartList = state.cartProductList;

    // console.log('productList no update', productList);
    // console.log('cartList no update', cartList);

    cartList.forEach((item) => {
      // console.log('item', item);
      // return item;
      productList.forEach((product) => {
        if (item.product_id === product.id) {
          // console.log('Entrou', product);
          commit('UPDATE_PRODUCTS_CART', product);
        }
      });
    });
  }, 2000);

  commit('LOADING', false);
};

// //////////////////////////////////////////////////////
const deleteCart = async ({ commit }) => {
  commit('LOADING', true);

  // await HttpClient.delete(`/shopping_cart/${shoppingCart.id}`).then((response) => {
  //   console.log('Delete shoppingCart', response);
  commit('DELETE_CART');
  Swal.fire({
    icon: 'success',
    title: 'Concluído',
    text: 'Itens removidos com sucesso',
    showConfirmButton: false,
    timer: 3000,
  });
  //   return response;
  // }).catch((error) => {
  //   console.log('Erro na requisição', error);
  // }).finally(() => {
  //   commit('LOADING', false);
  // });
  commit('LOADING', false);
};

// //////////////////////////////////////////////////////
const addProductCart = async ({ commit, state }, payload) => {
  commit('LOADING', true);

  const user = state.productList;

  console.log('user', user);
  console.log('payload', payload);

  commit('ADD_PRODUCT_CART', payload);

  commit('LOADING', false);
};

// //////////////////////////////////////////////////////
const removeProductCart = async ({ commit }, payload) => {
  commit('LOADING', true);
  console.log('entrou');
  // await HttpClient.delete(`/shopping_cart_items/${payload}`);

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
