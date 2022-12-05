<template>
  <q-page>
    <CategoriesComponent
      @categoriesEmit="filterCategories"
    />
    <ContentMainPage />

    <BlockPageComponent
      v-if="getStatusUser.status === 'inativo'"
    />
  </q-page>
</template>

<script>

import CategoriesComponent from 'src/common/components/CategoriesComponent.vue';
import ContentMainPage from 'src/modules/main/components/ContentMainPage.vue';
import BlockPageComponent from 'src/common/components/BlockPageComponent.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'MainPage',

  components: {
    CategoriesComponent,
    ContentMainPage,
    BlockPageComponent,
  },

  data() {
    return {
      search: '',
      showPage: true,
    };
  },

  created() {
    this.showPageFunc();
    this.listProductCart(this.getUser);
    // this.updateProductsCart(this.getListProducts);
  },

  updated() {
    this.showPageFunc();
  },

  computed: {
    ...mapGetters('deliveryAddress', ['getUserAddress']),
    ...mapGetters('login', ['getLogado', 'getUser', 'getStatusUser']),
    ...mapGetters('administrator', ['getStatusUser']),
    ...mapGetters('shoppingCart', ['getCartList', 'getShoppingCartList']),
    ...mapGetters('manageProduct', ['getListProducts']),

  },

  methods: {
    ...mapActions('deliveryAddress', ['searchAddress', 'saveAddress']),
    ...mapActions('manageProduct', ['listAllFilteredProducts']),
    ...mapActions('shoppingCart', [
      'listProductCart',
      'updateProductsCart',
    ]),

    showPageFunc() {
      if (this.getUserAddress) {
        this.showPage = true;
      }
      if (!this.showPage && !this.getLogado) {
        this.showPage = true;
        this.$router.push('/');
      } else {
        this.showPage = false;
      }
    },

    filterCategories(categories) {
      this.listAllFilteredProducts(categories);
    },

  },

};

</script>
