<template>
  <q-layout view="hHh Lpr fFf" class="">

     <div style="margin: 0 auto; max-width: 1920px;" >
        <HeaderComponent
          v-if="showHeader"
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
import { mapGetters } from 'vuex';
import HeaderComponent from 'src/common/components/HeaderComponent.vue';
import FooterComponent from 'src/common/components/FooterComponent.vue';

export default {
  name: 'MainLayout',

  components: {
    HeaderComponent,
    FooterComponent,
  },

  // Local para definir as variáveis da página
  data() {
    return {
      showHeader: true,
    };
  },

  updated() {
    this.showHeaderClient();
  },

  computed: {
    ...mapGetters('login', ['getLogado', 'getUser']),
  },

  methods: {
    showHeaderClient() {
      if (this.getLogado) {
        if (this.getUser.userType === 3) {
          this.showHeader = true;
        } else {
          this.showHeader = false;
        }
      } else {
        this.showHeader = true;
      }
    },
  },

};
</script>
