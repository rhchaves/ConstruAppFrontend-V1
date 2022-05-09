import AdminPageRoute from '../modules/admin-page/routes';
import MainPageRoute from '../modules/main-page/routes';
import ProductPageRoute from '../modules/product-page/routes';
import RegisterProductRoute from '../modules/register-product/routes';
import RegisterUserRoute from '../modules/register-user/routes';
import LoginPageRoute from '../modules/login/routes';
import AddressPageRoute from '../modules/address-page/routes';
import CartPageRoute from '../modules/cart-page/routes';

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/modules/main-page/pages/MainPage.vue') },
      ...AdminPageRoute,
      ...MainPageRoute,
      ...ProductPageRoute,
      ...RegisterProductRoute,
      ...RegisterUserRoute,
      ...LoginPageRoute,
      ...AddressPageRoute,
      ...CartPageRoute,
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
