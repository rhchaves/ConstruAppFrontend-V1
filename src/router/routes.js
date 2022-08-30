import AdministratorRoute from '../modules/administrator/routes';
import MainRoute from '../modules/main/routes';
import ProductRoute from '../modules/product/routes';
import DeliveryAddressRoute from '../modules/delivery-address/routes';
import ShoppingCartRoute from '../modules/shopping-cart/routes';
import LoginRoute from '../modules/login/routes';
import ManageAdmin from '../modules/manage-admin/routes';
import ManageProduct from '../modules/manage-product/routes';
import ManageSeller from '../modules/manage-seller/routes';
import ManageClient from '../modules/manage-client/routes';

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/modules/delivery-address/pages/DeliveryAddressPage.vue') },
      ...AdministratorRoute,
      ...MainRoute,
      ...ProductRoute,
      ...DeliveryAddressRoute,
      ...ShoppingCartRoute,
      ...LoginRoute,
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
