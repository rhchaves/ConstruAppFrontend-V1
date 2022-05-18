<template>
  <q-page>
    <CategoriesComponent />

    <h3>Página de Principal</h3>

    <ContentMainPage />
  </q-page>
</template>

<script>

import CategoriesComponent from 'src/common/CategoriesComponent.vue';
import ContentMainPage from 'src/modules/main-page/components/ContentMainPage.vue';

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
      showPage: false,

      // Lista de itens para teste

    };
  },

  created() {
    this.showPageFunc();
  },

  updated() {
    this.showPageFunc();
  },

  computed: {
    ...mapGetters('addressPage', ['getUserAddress']),
    ...mapGetters('loginPage', ['getLogado']),

  },

  methods: {
    ...mapActions('addressPage', ['searchAddress', 'saveAddress']),

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
