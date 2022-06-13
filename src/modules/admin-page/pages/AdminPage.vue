<template>
  <q-page class="row justify-center items-center">

    <div class="col-12 row justify-center">
      <h3>Página de Administração</h3>
    </div>

    <section class="justify-center">
      <div class="col q-ma-xl">
        <q-btn
          class="btnAmber"
          type="text"
          rounded
          to="manage-admin"
          size="20px"
          style="width: 350px"
        >
          Gerenciar Administrador
        </q-btn>
      </div>

      <div class="col q-ma-xl">
        <q-btn
          class="btnAmber"
          type="text"
          rounded
          to="manage-product"
          size="20px"
          style="width: 350px"
        >
          Gerenciar Produto
        </q-btn>
      </div>

      <div class="col q-ma-xl">
        <q-btn
          class="btnAmber"
          type="text"
          rounded
          to="manage-seller"
          size="20px"
          style="width: 350px"
        >
          Gerenciar Vendedor
        </q-btn>
      </div>
    </section>

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
