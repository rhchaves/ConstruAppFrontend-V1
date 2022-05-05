<template>
  <q-page>
    <q-list bordered padding class="q-mt-xl" style="max-width: 900px">
      <q-item>
        <q-item-section top thumbnail class="q-ml-none">
          <img class="q-ma-md" src="https://cdn.quasar.dev/img/mountains.jpg">
        </q-item-section>

        <q-item-section>
          <q-item-label v-model="item.name">Nome do item</q-item-label>
          <q-item-label v-model="item.description">Descrição breve do item</q-item-label>
          <q-item-label v-model="item.value">Valor: R$ {{ item.value }}</q-item-label>
        </q-item-section>

        <q-item-section >
          <q-btn flat icon="delete" class="" v-model="item.id" @click="deleteItem()"></q-btn>
        </q-item-section>
        <q-item-section class="btnAmber " >

          <q-btn flat icon="add" class="" @click="addQuantity"></q-btn>
          <q-input
            v-model="item.quantity"
            @focusout="checkValue"
          ></q-input>
          <q-btn flat icon="remove" class="" @click="removeQuantity"></q-btn>

        </q-item-section>
        <q-item-section >
          <q-item-label v-model="item.subtotal">R$ {{ item.subtotal }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
    <q-section>
      <h5>Forma de pagamento:</h5>
       <q-select rounded v-model="model" :options="options" label="Opção de pagamento" />
    </q-section>
  </q-page>
</template>

<script>
export default {
  name: 'CartlistItem',

  data() {
    return {
      name: '',
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
