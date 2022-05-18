import Vue from 'vue';
import Vuex from 'vuex';

// import example from './module-example'

Vue.use(Vuex);

import adminPage from '../modules/admin-page/store';
import mainPage from '../modules/main-page/store';
import productPage from '../modules/product-page/store';
import registerProduct from '../modules/register-product/store';
import registerClient from '../modules/register-client/store';
import registerSeller from '../modules/resgister-seller/store';
import addressPage from '../modules/address-page/store';
import cartPage from '../modules/cart-page/store';
import loginPage from '../modules/login-page/store';
import manageAdmin from '../modules/manage-admin/store';
import manageProduct from '../modules/manage-product/store';
import manageSeller from '../modules/manage-seller/store';

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
      registerClient,
      registerSeller,
      addressPage,
      cartPage,
      loginPage,
      manageAdmin,
      manageProduct,
      manageSeller,
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEBUGGING,
  });

  return Store;
}
