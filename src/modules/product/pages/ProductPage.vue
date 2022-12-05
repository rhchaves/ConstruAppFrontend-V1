<template>
  <q-page class="">

    <CategoriesComponent
      @categoriesEmit="filterCategories"
    />

    <!-- seção principal da página -->
    <section
      class="row justify-center q-mt-xl"
      >
      <q-card
        v-if="!getLoading"
        class="row items-center no-wrap"
        style="max-width: 900px"
      >
        <!-- imagem do produto -->
        <div class="col col-md-4">
          <img
            :src="product.image"
            style="width: 100%; height: 100%"
          >
        </div>
        <!-- area de titulo e demais informações -->
        <div class="q-ma-lg" >
          <h2 class="q-ma-lg">{{ product.label }}</h2>
          <h5 class="q-ma-lg text-body1">{{ product.description }}</h5>
          <h5 class="q-ma-lg">Marca: {{ product.mark }}</h5>
          <div class="row q-ma-lg">
            <h4 class="">Preço: R${{ product.price }} (</h4>
            <h4 class="">{{ product.typeSell }})</h4>
          </div>
          <!-- botão de adicionar ao carrinho -->
          <div class="col col-md-5 row justify-center q-ma-xl">
            <q-btn class="btnAmber "
              rounded @click="addToCart()">Adicionar ao Carrinho</q-btn>
          </div>
        </div>
      </q-card>

    </section>

    <!-- <LoadingComponent
      v-if="getLoading"
      :visible="getLoading"
    /> -->
  </q-page>
</template>

<script>

import CategoriesComponent from 'src/common/components/CategoriesComponent.vue';
// import ContentAlertComponent from 'src/common/components/ContentAlertComponent.vue';
// import LoadingComponent from 'src/common/components/LoadingComponent.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ProductPage',

  components: {
    CategoriesComponent,
    // ContentAlertComponent,
    // LoadingComponent,
  },

  data() {
    return {
      product: '',
    };
  },
  created() {
    this.recuperarProduto();
  },

  computed: {
    ...mapGetters('product', ['getLoading', 'getProductPage']),
  },

  methods: {
    ...mapActions('manageProduct', ['listAllFilteredProducts']),

    // função para adicionar o item ao carrinho
    addToCart() {
      console.log('Adicionar o produto: ');
    },

    filterCategories(categories) {
      this.listAllFilteredProducts(categories);
      this.$router.push('/main');
    },

    recuperarProduto() {
      this.product = this.getProductPage;
    },

  },
};

</script>
