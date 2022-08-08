import AdminPageRoute from '../modules/admin-page/routes';
import MainPageRoute from '../modules/main-page/routes';
import ProductPageRoute from '../modules/product-page/routes';
import AddressPageRoute from '../modules/address-page/routes';
import CartPageRoute from '../modules/cart-page/routes';
import LoginPageRoute from '../modules/login-page/routes';
import ManageAdmin from '../modules/manage-admin/routes';
import ManageProduct from '../modules/manage-product/routes';
import ManageSeller from '../modules/manage-seller/routes';
import ManageClient from '../modules/manage-client/routes';

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/modules/address-page/pages/AddressPage.vue') },
      ...AdminPageRoute,
      ...MainPageRoute,
      ...ProductPageRoute,
      ...AddressPageRoute,
      ...CartPageRoute,
      ...LoginPageRoute,
      ...ManageAdmin,
      ...ManageProduct,
      ...ManageSeller,
      ...ManageClient,
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
