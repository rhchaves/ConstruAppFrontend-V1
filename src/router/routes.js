import AdministratorRoute from '../modules/administrator/routes';
import DeliveryAddressRoute from '../modules/delivery-address/routes';
import LoginRoute from '../modules/login/routes';
import MainRoute from '../modules/main/routes';
import ManageAdminRoute from '../modules/manage-admin/routes';
import ManageClientRoute from '../modules/manage-client/routes';
import ManageProductRoute from '../modules/manage-product/routes';
import ManageSellerRoute from '../modules/manage-seller/routes';
import ProductRoute from '../modules/product/routes';
import RegisterClientRoute from '../modules/register-client/routes';
import RegisterSellerRoute from '../modules/register-seller/routes';
import ShoppingCartRoute from '../modules/shopping-cart/routes';

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/modules/delivery-address/pages/DeliveryAddressPage.vue') },
      ...AdministratorRoute,
      ...DeliveryAddressRoute,
      ...LoginRoute,
      ...MainRoute,
      ...ManageAdminRoute,
      ...ManageClientRoute,
      ...ManageProductRoute,
      ...ManageSellerRoute,
      ...ProductRoute,
      ...RegisterClientRoute,
      ...RegisterSellerRoute,
      ...ShoppingCartRoute,
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
