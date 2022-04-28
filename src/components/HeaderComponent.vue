<template>
  <div>

    <!-- Inicio do cabeçalho -->
    <q-header
      class="bg-white text-grey-8 q-py-xs"
      height-hint="58"
      style="border-bottom: solid 1px #ccc;"
    >

      <!-- Icone do menu retrátil lateral esquerdo icone de 3 riscos (=) -->
      <q-toolbar class="">
        <q-btn
          flat
          @click="toggleLeftDrawer"
          icon="menu"
        />

        <!-- Título do header -->
        <q-toolbar-title shrink class="row items-center no-wrap">
          <router-link to="/main-page" class="router-link" >
            <span class="q-ml-sm">ConstruApp</span>
          </router-link>
        </q-toolbar-title>

        <q-space />

        <!-- Input de pesquisa -->
        <div class="">
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

           <!-- Conta do usuário -->
          <router-link to="/login-page" class="router-link" >
            <q-btn color="amber" text-color="black">
              <span v-if="!logado" class="q-ml-sm">Entrar</span>
              <q-avatar v-else size="26px">
                <img src="https://cdn.quasar.dev/img/boy-avatar.png">
              </q-avatar>
              <q-tooltip>Nome do Usuário</q-tooltip>
            </q-btn>
          </router-link>

          <!-- Carrinho -->
          <router-link to="/cart-page" class="router-link" >
            <q-btn flat icon="shopping_cart" class="" >
              <q-badge rounded class="q-mr-sm q-mt-xs" color="red" text-color="white" floating>
                {{ shoppingCartValue }}
              </q-badge>
            </q-btn>
          </router-link>

          <!-- Notificações -->
          <q-btn round dense flat color="grey-8" icon="notifications">
            <q-badge rounded color="red" text-color="white" floating>
              2
            </q-badge>
            <q-tooltip>Notifications</q-tooltip>
          </q-btn>

        </div>

      </q-toolbar>

    </q-header>
    <!-- Término do cabeçalho -->

    <!-- Início da listagem dos itens no menu retrátil lateral esquerdo -->
    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      class="bg-white"
      :width="280"
    >
      <q-scroll-area class="fit">
        <q-list padding class="text-grey-8">

          <div class="q-mt-md">
            <div class="flex flex-center q-gutter-xs">
              <a class="" href="javascript:void(0)"
              aria-label="Privacy">Privacy</a>
              <span> · </span>
              <a class="" href="javascript:void(0)"
               aria-label="Terms">Terms</a>
              <span> · </span>
              <a class="" href="javascript:void(0)"
              aria-label="About">About Google</a>
            </div>
          </div>
        </q-list>
      </q-scroll-area>
    </q-drawer>
    <!-- Término da listagem dos itens no menu retrátil lateral esquerdo -->

  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',

  // Local para definir as variáveis da página
  data() {
    return {
      search: '',
      leftDrawerOpen: false,
      shoppingCartValue: 2,
      logado: false,
    };
  },

  methods: { // Funções

    // abrir e fechar o menu lateral esquerdo
    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen;
    },

    // enviar palavra chave da pesquisa
    searchProduct(item) {
      console.log('Clicou em pesquisar o item: ', item);
      this.search = '';
    },

  },
};
</script>
