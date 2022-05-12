<template>
  <q-layout view="hHh Lpr fFf" class="">

     <div style="margin: 0 auto; max-width: 1920px;" >
        <HeaderComponent
          :visibleSearchField="true"
          :visibleMenu="true"
          :visibleLogin="true"
        />
      </div>

    <!-- Conteúdo principal da página -->
    <q-page-container>
      <!-- router-view é responsável por chamar a rota da página que será exibida -->
      <router-view />
    </q-page-container>

    <FooterComponent />

  </q-layout>
</template>

<script>

import HeaderComponent from 'src/common/HeaderComponent.vue';
import FooterComponent from 'src/common/FooterComponent.vue';

export default {
  name: 'MainLayout',

  components: {
    HeaderComponent,
    FooterComponent,
  },

  // Local para definir as variáveis da página
  data() {
    return {

    };
  },

};
</script>
