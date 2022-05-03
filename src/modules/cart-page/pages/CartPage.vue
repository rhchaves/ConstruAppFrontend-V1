<template>
  <q-page class="q-ma-md">
    <h3>Esta é a página de carrinho</h3>
    <CartlistItem />
  </q-page>
</template>

<script>

import CartlistItem from 'src/modules/cart-page/components/CartListItem.vue';

export default {
  name: 'CartPage',

  components: {
    CartlistItem,
  },

  data() {
    return {
      deletedItem: '',
      item: {
        id: 1,
        quantity: 0,
        value: 17.00,
        subtotal: 0,
        name: '',
        description: '',
      },
      model: null,
      options: [
        'Dinheiro', 'Cartão de Crédito', 'Cartão de Débito',
      ],
    };
  },

  methods: {
    deleteItem() {
      console.log('Apagar Item:', this.deletedItem);
      this.item = [];
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
    },
  },

};
</script>
