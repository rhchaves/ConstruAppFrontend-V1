import Vue from 'vue';
import Vuex from 'vuex';

// import example from './module-example'

Vue.use(Vuex);

import adminPage from '../modules/admin-page/store';
import mainPage from '../modules/main-page/store';
import productPage from '../modules/product-page/store';
import registerProduct from '../modules/register-product/store';
import registerUser from '../modules/register-user/store';
import addressPage from '../modules/address-page/store';

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
      adminPage,
      mainPage,
      productPage,
      registerProduct,
      registerUser,
      addressPage,
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEBUGGING,
  });

  return Store;
}
