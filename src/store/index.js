import Vue from 'vue';
import Vuex from 'vuex';

// import example from './module-example'

Vue.use(Vuex);

import administrator from '../modules/administrator/store';
import main from '../modules/main/store';
import product from '../modules/product/store';
import deliveryAddress from '../modules/delivery-address/store';
import shoppingCart from '../modules/shopping-cart/store';
import login from '../modules/login/store';
import manageAdmin from '../modules/manage-admin/store';
import manageProduct from '../modules/manage-product/store';
import manageSeller from '../modules/manage-seller/store';
import manageClient from '../modules/manage-client/store';

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      administrator,
      main,
      product,
      deliveryAddress,
      shoppingCart,
      login,
      manageAdmin,
      manageProduct,
      manageSeller,
      manageClient,
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEBUGGING,
  });

  return Store;
}
