<template>
  <q-page>
    <CategoriesComponent />
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

      // /////////////////////////////////////////////////////////
      // Alterar a exibição da página
      // showPage: false,
      showPage: true,
      // /////////////////////////////////////////////////////////
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

    showPageFunc() {
      console.log('Show page', this.showPage);
      if (this.getUserAddress) {
        this.showPage = true;
      }

      if (this.showPage === false && !this.getLogado) {
        this.showPage = true;
        this.$router.push('/');
      } else {
        this.showPage = false;
      }
    },

  },

};

</script>
