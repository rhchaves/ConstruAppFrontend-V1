<template>
  <q-page class="">

    <CategoriesComponent />

    <router-link to="/main-page" class="router-link">
      <q-btn
        class="q-ma-sm"
        color="black"
        rounded
        no-caps
        size="lg"
        padding="sm"
      >
        <span class="text-weight-light font-size-18"> Página principal </span>
      </q-btn>
    </router-link>

    <h3>Página de Produto</h3>

    <!-- seção principal da página -->
    <section class="row ">
      <!-- imagem do produto -->
      <div class="product-img ">
        <img src="~/assets/fita_isolante.jpg" alt="" class="my-card">
      </div>
      <!-- area de titulo e demais informações -->
      <div class="">
        <h1>{{ title }}</h1>
        <h2>{{ shorDescription }}</h2>
        <h3>{{ brand }}</h3>
        <h4>R${{ priceProduct }}</h4>
        <!-- botão de adicionar ao carrinho -->
        <div class="col col-md-5">
          <q-btn class="btnAmber" rounded @click="addToCart()">Adicionar ao Carrinho</q-btn>
        </div>
      </div>
    </section>

  </q-page>
</template>

<script>

import CategoriesComponent from 'src/common/CategoriesComponent.vue';

export default {
  name: 'ProductPage',

  components: {
    CategoriesComponent,
  },

  props: {
    title: {
      type: String,
      required: true,
      default: 'Nome do Produto',
    },
    shorDescription: {
      type: String,
      required: true,
      default: 'Descrição Breve do Produto',
    },
    // Fabricante
    brand: {
      type: String,
      required: true,
      default: 'Marca do Produto',
    },
    priceProduct: {
      type: String,
      required: true,
      default: '0',
    },
  },

  data() {
    return {

    };
  },

  methods: {

    // função para adicionar o item ao carrinho
    addToCart() {
      console.log('Adicionar o produto: ');
    },
  },
};

</script>
