<template>
  <div class="q-ma-md">
    <!-- card  -->
    <q-card class="my-card">
      <q-card-section horizontal>
        <!-- carrega a imagem do card -->
        <q-img
          class="col q-ma-sm"
          :src="imageItem"
          :alt="altImageItem"
        />
        <!-- exibir botões -->
        <q-card-actions vertical class="justify-aroun">
          <q-btn class="btnAmber" icon="add_shopping_cart" @click="addCartItem(idItem)"/>
          <q-btn class="btnAmber" icon="favorite_border" @click="addFavoriteItem(idItem)"/>
          <q-btn class="btnAmber" icon="share" @click="shareItem(idItem)"/>
        </q-card-actions>

      </q-card-section>
      <!-- exibir texto e botão comprar -->
      <q-card-section class="row">
        <div class="col col-md-7">
          <span><b>{{ labelItem }}</b></span><br>
          <span><b>R${{ priceItem }}</b></span>
        </div>
        <q-space />
        <div class="col col-md-5">
          <q-btn class="btnAmber" rounded @click="buyItem(idItem)">Comprar</q-btn>
        </div>
      </q-card-section>

    </q-card>

  </div>
</template>

<script>
export default {
  name: 'CardProductComponent',

  props: {
    idItem: {
      type: Number,
      required: true,
    },
    nameItem: {
      type: String,
      required: false,
    },
    labelItem: {
      type: String,
      required: true,
    },
    priceItem: {
      type: String,
      required: true,
    },
    imageItem: {
      type: String,
      required: false,
    },
    altImageItem: {
      type: String,
      required: false,
      default: 'Imagem do produto',
    },
  },

  data() {
    return {

    };
  },

  methods: {
    // Funções para enviar ao elemento 'pai' o sinal de que cada botão foi clicado
    addCartItem(idItem) {
      this.$emit('addCartItemEmit', idItem);
    },

    addFavoriteItem(idItem) {
      this.$emit('addFavoriteItemEmit', idItem);
    },

    shareItem(idItem) {
      this.$emit('shareItemEmit', idItem);
    },
    buyItem(idItem) {
      this.$emit('buyItemEmit', idItem);
    },
  },
};
</script>
