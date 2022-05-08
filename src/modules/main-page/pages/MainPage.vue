<template>
  <q-page>
    <CategoriesComponent />

    <h3>Página de Principal</h3>

    <AddressPage v-if="!logado"/>
    <ContentMainPage />
  </q-page>
</template>

<script>

import CategoriesComponent from 'src/components/CategoriesComponent.vue';
import AddressPage from 'src/modules/address-page/pages/AddressPage.vue';
import ContentMainPage from 'src/modules/main-page/components/ContentMainPage.vue';

export default {
  name: 'MainPage',

  components: {
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
