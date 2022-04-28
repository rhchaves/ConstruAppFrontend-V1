<template>
  <q-page>

    <CategoriesComponent />
    <AddressPage v-if="!logado"/>

    <!-- ---------------------remover---------------------------------------- -->
    <div class="center-screen" style=" max-width: 1400px">
      <section class="center-screen">
        <router-link to="/admin-page" class="router-link" >
          <q-btn class="q-ma-sm btnAmber" rounded >Página de Admin</q-btn>
        </router-link>

        <router-link to="/product-page" class="router-link">
          <q-btn class="q-ma-sm btnAmber" rounded >Página de Produto</q-btn>
        </router-link>

        <router-link to="/register-product" class="router-link">
          <q-btn class="q-ma-sm btnAmber" rounded >Cadastrar Produto</q-btn>
        </router-link>

        <router-link to="/register-user" class="router-link">
          <q-btn class="q-ma-sm btnAmber" rounded >Cadastrar Usuário</q-btn>
        </router-link>
      </section>
      <section class="center-screen">
    <!-- -------------------------------------------------------------------- -->

        <h3>Página de Principal</h3>

        <section class="row">
          <CardProductComponent
            v-for="product in listProducts"
            :key="product.id"
            :idItem="product.id"
            :labelItem="product.label"
            :priceItem="product.price"
            :imageItem="product.image"
            @addCartItemEmit="addCardProduct(product.id)"
            @addFavoriteItemEmit="addFavoriteProduct(product.id)"
            @shareItemEmit="shareProduct(product.id)"
            @buyItemEmit="buyProduct(product.id)"
          />

        </section>

      </section>
    </div>
  </q-page>
</template>

<script>

import CategoriesComponent from 'src/components/CategoriesComponent.vue';
import CardProductComponent from 'src/components/CardProductComponent.vue';
import AddressPage from 'src/modules/address-page/pages/AddressPage.vue';

import { mapActions } from 'vuex';

export default {
  name: 'MainPage',

  components: {
    CategoriesComponent,
    CardProductComponent,
    AddressPage,
  },

  data() {
    return {
      search: '',
      logado: false,

      // Lista de itens para teste
      listProducts: [
        {
          id: 1,
          name: 'fita-isolante',
          label: 'Fita Isolante',
          price: '6,90',
          image: '/assets/img/saco-de-pedra.png',
          altImage: 'Descrição da imagem do produto',
        },
        {
          id: 2,
          name: 'cola-pvc-tigre',
          label: 'Cola PVC Tigre',
          price: '4,90',
          image: 'img/fita-isolante.png',
          altImage: 'Descrição da imagem do produto',
        },
        {
          id: 3,
          name: 'conexao-t-tigre',
          label: 'Conexão "T" Tigre',
          price: '3,90',
          image: 'img/fita-isolante.png',
          altImage: 'Descrição da imagem do produto',
        },
        {
          id: 4,
          name: 'pincel-tigre',
          label: 'Pincel Tigre',
          price: '5,90',
          image: 'img/fita-isolante.png',
          altImage: 'Descrição da imagem do produto',
        },
        {
          id: 5,
          name: 'saco-de-areia',
          label: 'Saco de Areia',
          price: '9,90',
          image: 'img/fita-isolante.png',
          altImage: 'Descrição da imagem do produto',
        },
        {
          id: 6,
          name: 'saco-de-pedra',
          label: 'Saco de Pedra',
          price: '8,90',
          image: 'img/fita-isolante.png',
          altImage: 'Descrição da imagem do produto',
        },
        {
          id: 7,
          name: 'tinta-esmalte-preta-coral',
          label: 'Tinta Esmalte Coral Preto',
          price: '29,90',
          image: 'img/fita-isolante.png',
          altImage: 'Descrição da imagem do produto',
        },
        {
          id: 8,
          name: 'alicate-universal-gedore',
          label: 'Alicate Universal Gedore',
          price: '59,90',
          image: 'img/fita_isolante.jpg',
          altImage: 'Descrição da imagem do produto',
        },
      ],
    };
  },

  methods: {
    ...mapActions('mainPage', ['listCep']),

    onSubmit() {
      console.log('Clicou em buscar:', this.search);
      this.listCep(this.search);
    },

    addCardProduct(item) {
      console.log('Clicou em Adicionar:', item);
    },

    addFavoriteProduct(item) {
      console.log('Clicou em Favoritar:', item);
    },

    shareProduct(item) {
      console.log('Clicou em Compartilhar:', item);
    },

    buyProduct(item) {
      console.log('Clicou em Comprar:', item);
    },
  },
};

</script>
