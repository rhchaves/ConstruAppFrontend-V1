<template>
  <q-page class="">

    <CategoriesComponent
      @categoriesEmit="filterCategories"
    />

    <!-- seção principal da página -->
    <section class="row justify-center q-mt-xl"
      v-for="product in getProductPage" :key="product">
        {{product}}
        <!-- imagem do produto -->
        <div class="product-img ">
          <!-- <img :src="product[index].image" alt="" class="my-card"> -->
        </div>
        <!-- area de titulo e demais informações -->
        <div class="q-ma-lg">
          <h2 class="q-ma-lg">{{ product.label }}</h2>
          <h5 class="q-ma-lg">{{ product.shortDescription }}</h5>
          <h4 class="q-ma-lg">R${{ product.price }}</h4>
          <!-- botão de adicionar ao carrinho -->
          <div class="col col-md-5">
            <q-btn class="btnAmber q-ma-lg q-mt-xl"
              rounded @click="addToCart()">Adicionar ao Carrinho</q-btn>
          </div>
      </div>
    </section>
    <section class="row justify-center q-mt-xl"
      v-if="!getProductPage"
      >
      <ContentAlertComponent
      />
    </section>

  </q-page>
</template>

<script>

import CategoriesComponent from 'src/common/components/CategoriesComponent.vue';
import ContentAlertComponent from 'src/common/components/ContentAlertComponent.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ProductPage',

  components: {
    CategoriesComponent,
    ContentAlertComponent,
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
      product: {
        category: '',
        created_at: '',
        created_by: '',
        description: '',
        id: '',
        image: '',
        label: '',
        name: '',
        price: '',
        product_mark: '',
        status: '',
        updated_at: '',
        updated_by: '',
      },
    };
  },

  computed: {
    ...mapGetters('product', ['getProductPage']),
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

  },
};

</script>
