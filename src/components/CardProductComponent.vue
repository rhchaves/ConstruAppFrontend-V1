<template>
  <div class="q-ma-md">
    <!-- card  -->
    <q-card class="my-card" v-for="item in listItems" :key="item.id">
      <q-card-section horizontal>
        <!-- carrega a imagem do card -->
        <q-img
          class="col q-ma-sm"
          :src="item.image"
          :alt="item.teste"
        />
        <!-- exibir botões -->
        <q-card-actions vertical class="justify-aroun">
          <q-btn class="btnAmber" icon="add_shopping_cart" />
          <q-btn class="btnAmber" icon="favorite_border" />
          <q-btn class="btnAmber" icon="share" />
        </q-card-actions>

      </q-card-section>
      <!-- exibir texto -->
      <q-card-section>
        <span><b>{{ item.label }}</b></span><br>
        <span><b>R${{ item.price }}</b></span>
      </q-card-section>

    </q-card>

  </div>
</template>

<script>
export default {
  name: 'CardProductComponent',

  data() {
    return {
      listItems: [
        {
          id: 1, name: 'fita', label: 'Fital Isolante', price: '19,90', image: '/img/fita_isolante.jpg', teste: 'Fita isolante Scotch 33+',
        },
      ],
    };
  },
};
</script>
