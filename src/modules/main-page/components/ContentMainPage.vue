<template>
  <q-page>
    <section class="row justify-center">
      <CardProductComponent
        v-for="product in getListProducts"
        :key="product.id"
        :idItem="product.id"
        :labelItem="product.label"
        :priceItem="product.price"
        :imageItem="product.img"
        @addCartItemEmit="addCardProduct(product.id)"
        @addFavoriteItemEmit="addFavoriteProduct(product.id)"
        @shareItemEmit="shareProduct(product.id)"
        @buyItemEmit="buyProduct(product.id)"
      />
    </section>
  </q-page>
</template>

<script>

import CardProductComponent from 'src/common/CardProductComponent.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ContentMainPage',

  components: {
    CardProductComponent,
  },

  data() {
    return {
      search: '',
      logado: false,

    };
  },

  computed: {
    ...mapGetters('manageProduct', ['getListProducts']),
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
