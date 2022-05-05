<template>
  <q-page>
    <CategoriesComponent />

    <h3>Página de Principal</h3>

    <LoginPage />
    <AddressPage v-if="!logado"/>
    <ContentMainPage />
  </q-page>
</template>

<script>

import LoginPage from 'src/components/LoginPage.vue';
import CategoriesComponent from 'src/components/CategoriesComponent.vue';
import AddressPage from 'src/modules/address-page/pages/AddressPage.vue';
import ContentMainPage from 'src/modules/main-page/components/ContentMainPage.vue';

export default {
  name: 'MainPage',

  components: {
    LoginPage,
    CategoriesComponent,
    AddressPage,
    ContentMainPage,
  },

  data() {
    return {
      search: '',
      logado: false,

      // Lista de itens para teste

    };
  },

};

</script>
