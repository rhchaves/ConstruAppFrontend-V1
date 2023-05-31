<template>
  <!-- <q-page> -->
    <q-list bordered padding class="" style="max-width: 800px">
      <q-item>
        <q-item-section top thumbnail class="q-ml-none">
          <img class="q-ma-md" :src="product.image">
        </q-item-section>

        <q-item-section>
          <q-item-label v-model="product.label">{{product.label}}</q-item-label>
          <!-- <q-item-label v-model="product.description"
            >Descrição breve do item</q-item-label> -->
          <q-item-label v-model="product.price">Valor: R$ {{ product.price }}</q-item-label>
        </q-item-section>

        <q-item-section >
          <q-btn flat icon="delete" class="" v-model="product.id" @click="deleteItem()"></q-btn>
        </q-item-section>
        <q-item-section class="btnAmber " >

          <InputQtdComponent
              @addQuantityEmit="addQuantity(product.id)"
              @removeQuantityEmit="removeQuantity(product)"
            />
          <!-- <q-btn flat icon="add" class="" @click="addQuantity"></q-btn>
          <q-input
            v-model="product.quantity"
            @focusout="checkValue"
          ></q-input>
          <q-btn flat icon="remove" class="" @click="removeQuantity"></q-btn> -->

        </q-item-section>
        <q-item-section >
          <q-item-label v-model="product.subtotal">R$ {{ product.subtotal }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
    <!-- <q-section>
      <h5>Forma de pagamento:</h5>
       <q-select rounded v-model="model" :options="options" label="Opção de pagamento" />
    </q-section> -->
  <!-- </q-page> -->
</template>

<script>
import InputQtdComponent from 'src/common/components/InputQtdComponent.vue';
import { mapActions } from 'vuex';

export default {
  name: 'CartlistItem',

  components: {
    InputQtdComponent,
  },

  props: {
    productCart: {
      type: Object,
      required: false,
    },
  },

  data() {
    return {
      name: '',
      deletedItem: '',
      product: this.$props.productCart || {
        id: 1,
        category_id: 1,
        name: 'teste',
        label: 'teste',
        description: 'teste',
        price: 12.32,
        mark: 'teste',
        image: 'teste',
        status: 'teste',
      },

      model: null,
      options: [
        'Dinheiro', 'Cartão de Crédito', 'Cartão de Débito',
      ],
    };
  },

  methods: {

    ...mapActions('shoppingCart', [
      'addQtdCart',
    ]),

    deleteItem() {
      console.log('Apagar Item:', this.deletedItem);
      this.item = [];
    },

    // addQuantity() {
    //   this.item.quantity += 1;
    //   this.calcSubtotal();
    // },

    // removeQuantity() {
    //   if (this.item.quantity >= 1) {
    //     this.item.quantity -= 1;
    //   }
    //   this.calcSubtotal();
    // },

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
      this.item.subtotal = this.item.quantity * this.item.price;
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

  },

};
</script>
