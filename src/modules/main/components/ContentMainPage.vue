<template>
  <q-page class="row justify-center">
    <section class="row justify-center" style="max-width: 1300px">
      <CardProductComponent
        v-for="product in getListProducts"
        :key="product.id"
        :idItem="product.id"
        :labelItem="product.label"
        :priceItem="product.price"
        :imageItem="product.image"
        @addCartItemEmit="addProduct(product)"
        @addFavoriteItemEmit="addFavoriteProduct(product)"
        @shareItemEmit="shareProduct(product)"
        @buyItemEmit="buyProduct(product)"
      />
    </section>

    <ContentAlertComponent
      v-if="!getListProducts.length"
    />
  </q-page>
</template>

<script>

import CardProductComponent from 'src/common/components/CardProductComponent.vue';
import ContentAlertComponent from 'src/common/components/ContentAlertComponent.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ContentMainPage',

  components: {
    CardProductComponent,
    ContentAlertComponent,
  },

  data() {
    return {
      search: '',
      logado: false,
      qtd: 1,
    };
  },

  created() {
    this.listAllProducts();
    console.log('this.getListProducts', this.getListProducts);
  },

  computed: {
    ...mapGetters('manageProduct', ['getListProducts']),
    ...mapGetters('shoppingCart', ['getCartList']),
  },

  methods: {
    ...mapActions('main', ['listCep']),
    ...mapActions('shoppingCart', ['addProductCart']),
    ...mapActions('product', ['insertProductPage']),
    ...mapActions('manageProduct', ['listAllProducts']),

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
      this.$router.push('product');
      console.log('Clicou em Comprar:', item);
    },
  },
};
</script>
