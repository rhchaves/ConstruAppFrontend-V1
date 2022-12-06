<template>
  <q-page class="q-ma-md ro justify-cente items-cente">
    <q-form
    @submit.prevent="sendRequest()"
    >
    <section class="q-ma-md row justify-center items-center" >

      <q-list bordered padding class="" style="width: 800px"
        v-for="product in productsCart"
        :key="product.id"
      >
      <q-item>
        <q-item-section top thumbnail class="q-ml-none">
          <img class="q-ma-md" :src="product.image">
        </q-item-section>

        <q-item-section>
          <q-item-label v-model="product.label">{{product.label}}</q-item-label>
          <q-item-label v-model="product.price">Valor: R$ {{ product.price }}</q-item-label>
        </q-item-section>

        <q-item-section >
          <q-btn flat icon="delete" class="" v-model="product.id"
          @click="deleteItem(product.id)"></q-btn>
        </q-item-section>
        <q-item-section class=" " >

          <q-input
          v-model.number="product.quantity"
          type="number"
          filled
          style="max-width: 80px"
          />
        </q-item-section>

        <q-item-section >
          <q-item-label v-model="product.subtotal_value">
            R$ {{ (product.price * product.quantity).toFixed(2) }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>

    </section>

    <section v-if="getShoppingCartList.length" class="row justify-center items-center">

      <q-section class="q-ma-lg ">
        <h5 class="q-ma-lg">Forma de pagamento:</h5>
        <q-select class="q-ma-lg" rounded v-model="model" :options="options"
          style="max-width: 300px" label="Opção de pagamento" />
      </q-section>

      <q-section class="q-ma-lg " style="">
        <q-input class="q-ma-lg" outlined rounded v-model="deliveryAddress.street"
          style="max-width: 300px"></q-input>
        <q-input
          class="q-ma-lg"
          outlined
          rounded
          v-model="deliveryValue"
          prefix="R$"
          style="max-width: 300px"
        ></q-input>
        <q-input
          class="q-ma-lg"
          outlined
          rounded
          v-model="totalValue"
          prefix="R$"
          style="max-width: 300px"
        ></q-input>

        <!-- <q-btn
          class="btnAmber q-ma-lg"
          rounded
          @click="changeAddress"
        >
          Alterar Endereço
        </q-btn> -->

        <q-btn
          class="btnAmber q-ma-lg"
          rounded
          type="submit"
          >
          <!-- @click="sendRequest" -->
          Enviar Pedido
        </q-btn>

        <q-btn
          class="btnAmber q-ma-lg"
          rounded
          @click="openDialog"
        >
          Esvaziar carrinho
        </q-btn>

      </q-section>

    </section>
  </q-form>

    <ModalConfirmComponent
      v-if="openConfirmDialog"
      title="Esvaziar o carrinho"
      @confirmDialogEmit="deleteShoppingCart"
      @closeDialogEmit="closeDialog"
    />

    <ContentAlertComponent
      v-if="!getShoppingCartList.length"
      title="Seu carrinho está vazio"
    />

    <LoadingComponent
      :visible="getLoading"
    />

  </q-page>
</template>

<script>

// import InputQtdComponent from 'src/common/components/InputQtdComponent.vue';
import ContentAlertComponent from 'src/common/components/ContentAlertComponent.vue';
import LoadingComponent from 'src/common/components/LoadingComponent.vue';
import ModalConfirmComponent from 'src/common/components/ModalConfirmComponent.vue';
import { mapActions, mapGetters } from 'vuex';
// import CartListItem from '../components/CartListItem.vue';

export default {
  name: 'ShoppingCartPage',

  components: {
    // InputQtdComponent,
    ContentAlertComponent,
    LoadingComponent,
    ModalConfirmComponent,
    // CartListItem,
  },

  data() {
    return {
      deletedItem: '',
      model: null,
      options: ['Dinheiro', 'Cartão de Crédito', 'Cartão de Débito'],

      deliveryAddress: {
        street: 'Rua teste',
        number: '',
        district: '',
      },

      deliveryValue: 'Frete a calcular',
      totalValue: 0,
      qtd: 5,

      showDialog: false,
      openConfirmDialog: false,

      productsCart: {},
    };
  },

  created() {
    this.listProductCart(this.getUser);
    // this.updateProductsCart(this.getListProducts);
    // this.productsCart = this.getCartList;
    this.productsCart = this.getShoppingCartList;
  },

  updated() {
    // this.updateProductsCart(this.getListProducts);
  },

  computed: {
    ...mapGetters('shoppingCart', ['getLoading', 'getCartList', 'getShoppingCartList']),
    ...mapGetters('login', ['getLogado', 'getUser']),
    ...mapGetters('manageProduct', ['getListProducts']),
  },

  methods: {

    ...mapActions('shoppingCart', [
      'listProductCart',
      'addQtdCart',
      'deleteCart',
      'updateProductsCart',
      'removeProductCart',
    ]),

    deleteItem(item) {
      console.log('Apagar Item:', item);
      this.removeProductCart(item);
      this.item = [];
    },

    sendRequest() {
      console.log('Enviar o Pedido', this.productsCart);
    },

    openDialog() {
      this.openConfirmDialog = true;
    },

    deleteShoppingCart() {
      this.deleteCart();
    },

    closeDialog() {
      this.showDialog = false;
      this.openConfirmDialog = false;
    },
  },

};
</script>
