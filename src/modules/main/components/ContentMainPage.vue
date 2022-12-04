<template>
  <q-page class="row justify-center">
    <section class="row justify-center q-mt-xl" style="max-width: 1300px; max-height: 750px"
      v-if="getTopSellingProducts.length && !getListProductsFilter.length"
    >
      <CardProductComponent
        v-for="product in getTopSellingProducts"
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

    <section class="row justify-center q-mt-xl" style="max-width: 1300px; max-height: 750px"
      v-if="getListProductsFilter.length"
    >
      <CardProductComponent
        v-for="productFilter in getListProductsFilter"
        :key="productFilter.id"
        :idItem="productFilter.id"
        :labelItem="productFilter.label"
        :priceItem="productFilter.price"
        :imageItem="productFilter.image"
        @addCartItemEmit="addProduct(productFilter)"
        @addFavoriteItemEmit="addFavoriteProduct(productFilter)"
        @shareItemEmit="shareProduct(productFilter)"
        @buyItemEmit="buyProduct(productFilter)"
      />
    </section>

    <ContentAlertComponent
      v-if="!getTopSellingProducts.length || !getListProductsFilter"
    />

    <LoadingComponent
      :visible="getLoading"
    />

  </q-page>
</template>

<script>

import CardProductComponent from 'src/common/components/CardProductComponent.vue';
import ContentAlertComponent from 'src/common/components/ContentAlertComponent.vue';
import LoadingComponent from 'src/common/components/LoadingComponent.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ContentMainPage',

  components: {
    CardProductComponent,
    ContentAlertComponent,
    LoadingComponent,
  },

  data() {
    return {
      search: '',
      logado: false,
      qtd: 1,
    };
  },

  created() {
    this.listarTodosProdutos();
    this.listarProdutosPrincipais();
  },

  computed: {
    ...mapGetters('manageProduct', [
      'getLoading',
      'getListProducts',
      'getListProductsFilter',
      'getTopSellingProducts',
    ]),
    ...mapGetters('shoppingCart', ['getCartList']),
  },

  methods: {
    ...mapActions('main', ['listCep']),
    ...mapActions('shoppingCart', ['addProductCart', 'listProductCart', 'updateProductsCart']),
    ...mapActions('product', ['insertProductPage']),
    ...mapActions('manageProduct', ['listAllProducts', 'listTopSellingProducts']),

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

    listarProdutosPrincipais() {
      if (!this.getTopSellingProducts.length) {
        console.log('entrou');
        setTimeout(() => {
          this.listTopSellingProducts();
        }, 1000);
      }
    },

    listarTodosProdutos() {
      if (!this.getListProducts.length) {
        this.listAllProducts();
      }
    },

  },
};
</script>
