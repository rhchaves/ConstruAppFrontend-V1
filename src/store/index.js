import Vue from 'vue';
import Vuex from 'vuex';

// import example from './module-example'

Vue.use(Vuex);

import administrator from '../modules/administrator/store';
import deliveryAddress from '../modules/delivery-address/store';
import login from '../modules/login/store';
import main from '../modules/main/store';
import manageAdmin from '../modules/manage-admin/store';
import manageClient from '../modules/manage-client/store';
import manageProduct from '../modules/manage-product/store';
import manageSeller from '../modules/manage-seller/store';
import product from '../modules/product/store';
import registerClient from '../modules/register-client/store';
import registerSeller from '../modules/register-seller/store';
import seller from '../modules/seller/store';
import shoppingCart from '../modules/shopping-cart/store';

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
      deliveryAddress,
      login,
      main,
      manageAdmin,
      manageClient,
      manageProduct,
      manageSeller,
      product,
      registerClient,
      registerSeller,
      seller,
      shoppingCart,
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEBUGGING,
  });

  return Store;
}
