<template>
  <q-page class="q-ma-md">
    <h3>Esta é a página de carrinho</h3>
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
            v-model="product.description">Descrição breve do item {{ product.description}}
          </q-item-label>
          <q-item-label v-model="product.value">Valor: R$ {{ product.value }}</q-item-label>
        </q-item-section>

        <q-item-section >
          <q-btn flat icon="delete" class="" v-model="product.id" @click="deleteItem()"></q-btn>
        </q-item-section>
        <q-item-section class=" " >
          <div class="row items-center no-wrap btnAmber">

          <q-btn flat icon="remove" class="" @click="removeQuantity"></q-btn>
          <q-input
            class=""
            v-model="product.quantity"
            @focusout="checkValue"
            style="text-align: center"
          ></q-input>
          <q-btn flat icon="add" class="" @click="addQuantity"></q-btn>
          </div>

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

import { mapGetters } from 'vuex';

export default {
  name: 'CartPage',

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
    };
  },

  computed: {
    ...mapGetters('cartPage', ['getCartList']),
  },

  methods: {
    deleteItem() {
      console.log('Apagar Item:', this.deletedItem);
      this.item.inCart = false;
    },

    addQuantity() {
      this.item.quantity += 1;
      this.calcSubtotal();
    },

    removeQuantity() {
      if (this.item.quantity >= 1) {
        this.item.quantity -= 1;
      }
      this.calcSubtotal();
    },

    checkNaN(x) {
      if (this.item.quantity.isNaN(x)) {
        console.log('É número');
      }
    },

    checkValue() {
      const check = this.item.quantity;

      if (this.item.quantity < 0) {
        this.item.quantity = 0;
      }

      if (this.isNaN(check) !== false) {
        console.log('Não É número');
      }

      // this.checkNaN(this.item.quantity);

      this.calcSubtotal();
    },

    calcSubtotal() {
      this.item.subtotal = this.item.quantity * this.item.value;
      this.calcTotal();
    },

    calcTotal() {
      this.totalValue = this.item.subtotal;
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
