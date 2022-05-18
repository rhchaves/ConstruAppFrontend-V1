<template>
  <q-page class="window-height window-width row justify-center items-center">

    <h3>Página de Administração</h3>

    <div class="">
      <q-btn
        class="btnAmber"
        type="text"
        rounded
        to="manage-admin"
      >
        Gerenciar Administrador
      </q-btn>

      <q-btn
        class="btnAmber"
        type="text"
        rounded
        to="manage-product"
      >
        Gerenciar Produto
      </q-btn>

      <q-btn
        class="btnAmber"
        type="text"
        rounded
        to="manage-seller"
      >
        Gerenciar Vendedor
      </q-btn>
    </div>

  </q-page>
</template>

<script>
export default {
  name: 'AdminPage',

  data() {
    return {

    };
  },

  methods: {
    manageAdmin() {
      console.log('Gerenciar Admin');
    },

    manageProduct() {
      console.log('Gerenciar Produto');
    },

    manageSeller() {
      console.log('Gerenciar Vendedor');
    },
  },

};
</script>
