<template>
  <div>
    <div
      class="row justify-center items-center no-wrap btnAmber"
      style="border-radius: 8px">

      <q-input
        v-model.number="qtd"
        type="number"
        filled
        style="max-width: 200px"
      />

      <!-- <q-btn
        class="q-ml-sm"
        round
        icon="remove"
        @click="removeQuantity"
      >
      </q-btn>

      <q-input
        class="text-weight-bold q-ml-sm q-mr-sm size-custom-40"
        v-model="qtd"
        @focusout="checkValue"
      >
      </q-input>

      <q-btn
        class="q-mr-sm"
        round
        icon="add"
        @click="addQuantity"
      >
      </q-btn> -->

    </div>
  </div>
</template>

<script>
export default {
  name: 'InputQtdComponent',

  data() {
    return {
      product: true,
      qtd: 1,
    };
  },

  methods: {

    addQuantity() {
      this.$emit('addQuantityEmit');
    },

    removeQuantity() {
      this.$emit('removeQuantityEmit');
    },

    checkValue() {
      // const check = this.item.quantity;

      // if (this.item.quantity < 0) {
      //   this.item.quantity = 0;
      // }

      // if (this.isNaN(check) !== false) {
      //   console.log('Não É número');
      // }

      // // this.checkNaN(this.item.quantity);

      // this.calcSubtotal();
    },

  },
};
</script>
