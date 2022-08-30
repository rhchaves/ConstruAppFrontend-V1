<template>
  <div>

    <!-- Inicio do cabeçalho -->
    <q-header
      class="bg-white text-grey-8 q-py-xs"
      height-hint="58"
      style="border-bottom: solid 1px #ccc;"
    >

      <q-toolbar class="" >
        <!-- Título do header -->
        <q-toolbar-title shrink class="row items-center no-wrap">
          <router-link to="/main" class="router-link" >
            <span class="q-ml-sm" v-if="getUserAddress || getLogado">ConstruApp </span>
          </router-link>
        </q-toolbar-title>
        <!-- Verificar se vamos deixar o endereço disponivel aqui -->
        {{getUserAddress.street}} -->
        {{getUserAddress.number}}
        <q-space />

        <!-- Input de pesquisa -->
        <div class="row items-center no-wrap" v-if="getUserAddress || getLogado">
          <q-input
            outlined
            v-model="search"
            placeholder="O que você procura?"
            dense
          >
            <!-- <template v-slot:prepend> -->
              <q-btn flat @click="searchProduct(search)">
                <q-icon name="search" />
              </q-btn>
            <!-- </template> -->
          </q-input>
        </div>

        <q-space />

        <!-- Icones lateral direita -->
        <div class="q-gutter-sm row items-center no-wrap">

          <div class="btnAmber rounded-item row items-center no-wrap" >

            <!-- Conta do usuário -->
            <div v-if="getLogado">

            <q-avatar class="q-ml-sm q-mr-sm" v-if="getLogado" size="26px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <!-- alterar para nome do usuário -->
            {{ getUser.email }}

            </div>
            <q-btn flat to="/login" v-if="!getLogado">
              Entrar
            </q-btn>

            <!-- Menu retrátil (icone de 3 riscos) -->
            <q-btn
              v-if="getLogado"
              flat
              @click="toggleLeftDrawer"
              icon="menu"
            >
              <q-menu class="">
                <q-list class="btnAmber" style="min-width: 100px">
                  <q-item clickable v-close-popup>
                    <q-item-section >Minhas compras</q-item-section>
                  </q-item>
                  <q-item clickable v-close-popup>
                    <q-item-section>Alterar dados</q-item-section>
                  </q-item>
                  <q-separator />
                  <q-item clickable v-close-popup>
                    <q-item-section @click="clickLogout">Sair</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>

            </q-btn>
            <!-- Término da listagem dos itens no menu retrátil -->

          </div>

          <!-- Carrinho -->
          <q-btn
            flat
            icon="shopping_cart"
            to="shopping-cart"
            v-if="getUserAddress || getLogado">
            <q-badge rounded class="q-mr-sm q-mt-xs" color="red" text-color="white" floating>
              <!-- alterar para retorno da quantidade de itens no carrinho -->
              {{ shoppingCartValue }}
            </q-badge>
          </q-btn>

          <!-- Notificações -->
          <q-btn
            round
            dense
            flat
            color="grey-8"
            icon="notifications"
            v-if="getUserAddress || getLogado"
          >
            <q-badge rounded color="red" text-color="white" floating>
              2
            </q-badge>
            <q-tooltip>Notifications</q-tooltip>
          </q-btn>

        </div>

      </q-toolbar>

    </q-header>
    <!-- Término do cabeçalho -->

  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'HeaderComponent',

  // Local para definir as variáveis da página
  data() {
    return {
      search: '',
      shoppingCartValue: 2,
    };
  },

  computed: {
    ...mapGetters('login', ['getLogado', 'getUser']),
    ...mapGetters('deliveryAddress', ['getUserAddress']),
  },

  // Funções
  methods: {
    ...mapActions('login', ['logout']),

    // abrir e fechar o menu lateral esquerdo
    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen;
    },

    // enviar palavra chave da pesquisa
    searchProduct(item) {
      console.log('Clicou em pesquisar o item: ', item);
      this.search = '';
    },

    // função para realizar o logout do usuário
    clickLogout() {
      console.log('Deslogar');
      // 'função' carregada do mapActions
      this.logout();
    },
  },
};
</script>
