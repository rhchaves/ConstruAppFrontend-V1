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

export default {
  name: 'MainPage',

  components: {
    CategoriesComponent,
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
