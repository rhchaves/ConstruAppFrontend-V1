<template>
  <q-page class="q-ma-md col justify-center items-center">

    <q-list bordered padding class="q-mt-xl" style="max-width: 900px"
      v-if="getCartList.length"
    >
      <q-item
        v-for="product in getCartList"
        :key="product.id"
      >
        <q-item-section top thumbnail class="q-ml-none">
          <img class="q-ma-md" :src="product.img">
        </q-item-section>

        <q-item-section>

          <q-item-label v-model="product.name">Nome do item: {{product.name}} </q-item-label>
          <q-item-label
            v-model="product.shortDescription"
            >Descrição breve do item: {{ product.shortDescription}}
          </q-item-label>
          <q-item-label v-model="product.value">Valor: R$ {{ product.value }}</q-item-label>
        </q-item-section>

        <q-item-section >
          <q-btn flat icon="delete" class="" v-model="product.id" @click="deleteItem()"></q-btn>
        </q-item-section>
        <q-item-section class=" " >

          <InputQtdComponent
            @addQuantityEmit="addQuantity"
            @removeQuantityEmit="removeQuantity"
          />

        </q-item-section>

        <q-item-section >
          <q-item-label v-model="product.subtotal">R$ {{ product.subtotal }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
    <q-section class="q-ma-lg">
      <h5>Forma de pagamento:</h5>
      <q-select rounded v-model="model" :options="options" :name="name"
        style="max-width: 300px" label="Opção de pagamento" />
    </q-section>

    <q-section class="q-ma-lg">
      <q-input class="" outlined rounded v-model="deliveryAddress.street"
        style="max-width: 300px"></q-input>
      <q-input
        class=""
        outlined
        rounded
        v-model="deliveryValue"
        prefix="R$"
        style="max-width: 300px"
      ></q-input>
      <q-input
        class=""
        outlined
        rounded
        v-model="totalValue"
        prefix="R$"
        style="max-width: 300px"
      ></q-input>
      <q-btn class="btnAmber" rounded @click="changeAddress">Alterar Endereço</q-btn>
      <q-btn class="btnAmber" rounded @click="sendRequest">Enviar Pedido</q-btn>

    </q-section>
  </q-page>
</template>

<script>

import InputQtdComponent from 'src/common/InputQtdComponent.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'CartPage',

  components: {
    InputQtdComponent,
  },

  data() {
    return {
      name: '',
      deletedItem: '',
      model: null,
      options: [
        'Dinheiro', 'Cartão de Crédito', 'Cartão de Débito',
      ],
      deliveryAddress: {
        street: 'Rua teste',
        number: '',
        district: '',
      },
      deliveryValue: 'A calcular',
      totalValue: 0,
      qtd: 1,
    };
  },

  computed: {
    ...mapGetters('cartPage', ['getCartList']),
  },

  methods: {

    ...mapActions('cartPage', ['addQtdCart']),

    deleteItem() {
      console.log('Apagar Item:', this.deletedItem);
    },

    addQuantity(item) {
      this.addQtdCart(this.qtd, item);
      console.log('Qtd', this.qtd);
      console.log('Item', item);
      console.log('Adicionado', this.getCartList);
      this.calcSubtotal();
    },

    removeQuantity() {
      // if (this.item.quantity >= 1) {
      //   this.item.quantity -= 1;
      // }
      // this.calcSubtotal();
    },

    checkNaN(x) {
      if (this.item.quantity.isNaN(x)) {
        console.log('É número');
      }
    },

    calcSubtotal() {
      // this.item.subtotal = this.item.quantity * this.item.value;
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
  },

};
</script>
