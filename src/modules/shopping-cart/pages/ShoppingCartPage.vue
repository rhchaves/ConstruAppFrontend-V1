<template>
  <q-page class="q-ma-md ro justify-cente items-cente">

    <section class="q-ma-md row justify-center items-center" >

      <CartlistItem
        v-for="product in getShoppingCartList"
        :key="product.id"
        :productCart="product"
      />
      <!-- <q-list bordered padding class="q-mt-xl " style="max-width: 800px"
        v-if="getCartList.length"
      >
        <q-item
          v-for="product in getShoppingCartList"
          :key="product.id"
        >
          <q-item-section top thumbnail class="q-ml-lg">
            <img class="q-ma-md" :src="product.image"
            style="width: 70px">
          </q-item-section>

          <q-item-section>

            <q-item-label
              v-model="product.name">
              <b>Nome do item:</b>{{product.name}}
            </q-item-label>

            <q-item-label
              v-model="product.description">
              <b>Descrição breve do item:</b> {{ product.description}}
            </q-item-label>

            <q-item-label
              v-model="product.price">
              <b>Valor:</b> R$ {{ product.price }}
            </q-item-label>
          </q-item-section>

          <q-item-section >
            <q-btn flat icon="delete" class="size-custom-40"
              v-model="product.id" @click="deleteItem()"></q-btn>
          </q-item-section>
          <q-item-section class=" " >

            <InputQtdComponent
              @addQuantityEmit="addQuantity(product)"
              @removeQuantityEmit="removeQuantity(product)"
            />

          </q-item-section>

          <q-item-section >
            <q-item-label v-model="product.subtotal">{{ product.subtotal }}</q-item-label>
          </q-item-section>
        </q-item>
        <q-separator />
      </q-list> -->

    </section>

    <section v-if="getCartList.length">

      <q-section class="q-ma-lg col-12">
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

        <q-btn
          class="btnAmber q-ma-lg"
          rounded
          @click="changeAddress"
        >
          Alterar Endereço
        </q-btn>

        <q-btn
          class="btnAmber q-ma-lg"
          rounded
          @click="sendRequest"
        >
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

    <ModalConfirmComponent
      v-if="openConfirmDialog"
      title="Esvaziar o carrinho"
      @confirmDialogEmit="deleteShoppingCart"
      @closeDialogEmit="closeDialog"
    />

    <ContentAlertComponent
      v-if="!getCartList.length"
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

export default {
  name: 'ShoppingCartPage',

  components: {
    // InputQtdComponent,
    ContentAlertComponent,
    LoadingComponent,
    ModalConfirmComponent,
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

      deliveryValue: 'A calcular',
      totalValue: 0,
      qtd: 5,

      showDialog: false,
      openConfirmDialog: false,
    };
  },

  created() {
    this.listProductCart(this.getUser);
    // this.updateProductsCart(this.getListProducts);
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
    ]),

    deleteItem() {
      console.log('Apagar Item:', this.deletedItem);
    },

    addQuantity(item) {
      this.addQtdCart(item, this.qtd);
      console.log('Item', item);
      console.log('Qtd', this.qtd);
      console.log('Adicionado', this.getCartList);
      this.calcSubtotal();
    },

    removeQuantity(item) {
      // if (this.item.quantity >= 1) {
      //   this.item.quantity -= 1;
      // }
      // this.calcSubtotal();
      console.log('Item', item);
    },

    checkNaN(x) {
      if (this.item.quantity.isNaN(x)) {
        console.log('É número');
      }
    },

    calcSubtotal() {
      // this.item.subtotal = this.item.quantity * this.item.price;
      // this.calcTotal();
    },

    calcTotal() {
      // this.totalValue = this.item.subtotal;
    },

    changeAddress() {
      console.log('Alterar o endereço');
    },

    sendRequest() {
      console.log('Enviar o Pedido');
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
