<template>
  <q-page>
    <section class="row justify-center">
      <CardProductComponent
        v-for="product in getListProducts"
        :key="product.id"
        :idItem="product.id"
        :labelItem="product.label"
        :priceItem="product.value"
        :imageItem="product.img"
        @addCartItemEmit="addProduct(product)"
        @addFavoriteItemEmit="addFavoriteProduct(product)"
        @shareItemEmit="shareProduct(product)"
        @buyItemEmit="buyProduct(product)"
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
      qtd: 1,
    };
  },

  computed: {
    ...mapGetters('manageProduct', ['getListProducts']),
    ...mapGetters('cartPage', ['getCartList']),
  },

  methods: {
    ...mapActions('mainPage', ['listCep']),
    ...mapActions('cartPage', ['addProductCart']),
    ...mapActions('productPage', ['insertProductPage']),

    onSubmit() {
      console.log('Clicou em buscar:', this.search);
      this.listCep(this.search);
    },

    addProduct(item, qtd) {
      console.log('Clicou em Adicionar:', item, qtd);
      this.addProductCart(item);
      console.log('Lista do carrinho', this.getCartList);
    },

    addFavoriteProduct(item) {
      console.log('Clicou em Favoritar:', item);
    },

    shareProduct(item) {
      console.log('Clicou em Compartilhar:', item);
    },

    buyProduct(item) {
      this.insertProductPage(item);
      this.$router.push('product-page');
      console.log('Clicou em Comprar:', item);
    },
  },
};
</script>
