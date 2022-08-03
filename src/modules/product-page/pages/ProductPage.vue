<template>
  <q-page class="">

    <CategoriesComponent />

    <!-- seção principal da página -->
    <section class="row justify-center q-mt-xl">
      <!-- imagem do produto -->
      <div class="product-img ">
        <img :src="getProductPage.img" alt="" class="my-card">
      </div>
      <!-- area de titulo e demais informações -->
      <div class="q-ma-lg">
        <h2 class="q-ma-lg">{{ getProductPage.label }}</h2>
        <h5 class="q-ma-lg">{{ getProductPage.shortDescription }}</h5>
        <h4 class="q-ma-lg">R${{ getProductPage.price }}</h4>
        <!-- botão de adicionar ao carrinho -->
        <div class="col col-md-5">
          <q-btn class="btnAmber q-ma-lg q-mt-xl"
            rounded @click="addToCart()">Adicionar ao Carrinho</q-btn>
        </div>
      </div>
    </section>

  </q-page>
</template>

<script>

import CategoriesComponent from 'src/common/components/CategoriesComponent.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'ProductPage',

  components: {
    CategoriesComponent,
  },

  // props: {
  //   title: {
  //     type: String,
  //     required: true,
  //     default: 'Nome do Produto',
  //   },
  //   shortDescription: {
  //     type: String,
  //     required: true,
  //     default: 'Descrição Breve do Produto',
  //   },
  //   // Fabricante
  //   brand: {
  //     type: String,
  //     required: true,
  //     default: 'Marca do Produto',
  //   },
  //   priceProduct: {
  //     type: String,
  //     required: true,
  //     default: '0',
  //   },
  // },

  data() {
    return {

    };
  },

  computed: {
    ...mapGetters('productPage', ['getProductPage']),
  },

  methods: {

    // função para adicionar o item ao carrinho
    addToCart() {
      console.log('Adicionar o produto: ');
    },
  },
};

</script>
