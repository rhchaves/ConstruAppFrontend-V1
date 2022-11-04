<template>
  <div>

    <!-- Inicio do cabeçalho -->
    <q-header
      class="bg-white text-grey-8 q-py-md"
      height-hint="58"
      style="border-bottom: solid 1px #ccc;"
    >

      <q-toolbar class="" >
        <div class="q-mr-xl">

        </div>
        <!-- Título do header logado -->
        <q-toolbar-title shrink class="row items-center no-wrap"
        >
        <q-btn
        unelevated
        >

          <q-img
          :src="urlLogo"
          @click="redirectLogo"
          style="width: 150px"
          ></q-img>
        </q-btn>
        </q-toolbar-title>

        <!-- <q-toolbar-title shrink class="row items-center no-wrap"
          v-if="getUserAddress || getUser.userType === 3"
        >
          <router-link to="/main" class="router-link" >
            <q-img style="width: 150px" :src="urlLogo"></q-img>
          </router-link>
        </q-toolbar-title> -->

        <!-- Título do header não logado -->
        <!-- <q-toolbar-title shrink class="row items-center no-wrap"
          v-if="!getUserAddress && getUser.userType !== 3"
        >
          <q-img style="width: 150px" :src="urlLogo"></q-img>
        </q-toolbar-title> -->
        <!-- Verificar se vamos deixar o endereço disponivel aqui -->
        <div class="q-ml-xl"></div>
          {{getUserAddress.street}}
          {{getUserAddress.number}}
        <q-space />

        <!-- Input de pesquisa -->
        <div class="row items-center no-wrap" v-if="getUserAddress || getUser.userType === 3">
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
              {{ getUser.name.split(' ').slice(0, 1).join(' ') }}
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
                  <q-item clickable v-close-popup v-if="getUser.userType === 3">
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
            class="q-mr-lg"
            flat
            icon="shopping_cart"
            to="shopping-cart"
            v-if="getUserAddress || getUser.userType === 3">
            <q-badge rounded class="q-mr-sm q-mt-xs" color="red" text-color="white" floating>
              <!-- alterar para retorno da quantidade de itens no carrinho -->
              {{ getCartList.length }}
            </q-badge>
          </q-btn>

          <!-- Notificações -->
          <!-- <q-btn
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
          </q-btn> -->

        <div class="q-ml-xl">
        </div>

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

  props: {
    linkHome: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  // Local para definir as variáveis da página
  data() {
    return {
      search: '',
      urlLogo: 'img/logo-contruApp-v1.png',
      userTypeEnum: {
        admin: 1,
        seller: 2,
        client: 3,
      },
    };
  },

  computed: {
    ...mapGetters('login', ['getLogado', 'getUser']),
    ...mapGetters('deliveryAddress', ['getUserAddress']),
    ...mapGetters('shoppingCart', ['getCartList']),
  },

  // Funções
  methods: {
    ...mapActions('login', ['logout']),

    redirectLogo() {
      if (this.getLogado) {
        if (this.getUser.userType === this.userTypeEnum.admin) {
          this.$router.push('administrator');
        }

        if (this.getUser.userType === this.userTypeEnum.seller) {
          this.$router.push('seller');
        }

        if (this.getUser.userType === this.userTypeEnum.client) {
          this.$router.push('main');
        }
      }
    },

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
      this.logout();
      if (!this.getLogado) {
        this.$router.push('/');
      }
    },
  },
};
</script>
