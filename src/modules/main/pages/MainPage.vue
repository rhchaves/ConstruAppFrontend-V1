<template>
  <q-page>
    <CategoriesComponent
      @categoriesEmit="filterCategories"
    />
    <ContentMainPage />
  </q-page>
</template>

<script>

import CategoriesComponent from 'src/common/components/CategoriesComponent.vue';
import ContentMainPage from 'src/modules/main/components/ContentMainPage.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'MainPage',

  components: {
    CategoriesComponent,
    ContentMainPage,
  },

  data() {
    return {
      search: '',
      showPage: true,
    };
  },

  created() {
    this.showPageFunc();
  },

  updated() {
    this.showPageFunc();
  },

  computed: {
    ...mapGetters('deliveryAddress', ['getUserAddress']),
    ...mapGetters('login', ['getLogado']),

  },

  methods: {
    ...mapActions('deliveryAddress', ['searchAddress', 'saveAddress']),
    ...mapActions('manageProduct', ['listAllFilteredProducts']),

    showPageFunc() {
      if (this.getUserAddress) {
        this.showPage = true;
        console.log('Show page', this.showPage);
      }

      if (!this.showPage && !this.getLogado) {
        this.showPage = true;
        this.$router.push('/');
        console.log('Show page', this.showPage);
      } else {
        this.showPage = false;
        console.log('Show page', this.showPage);
      }
    },

    filterCategories(categories) {
      this.listAllFilteredProducts(categories);
    },

  },

};

</script>
