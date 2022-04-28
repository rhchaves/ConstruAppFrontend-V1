<template>
  <q-page class="q-ma-md">
    <h3>Esta é a página de carrinho</h3>
    <CartlistItem />
    <CartlistItem />
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

    };
  },
};
</script>
