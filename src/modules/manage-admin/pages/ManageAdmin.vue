<template>
  <q-page class="window-height window-width row justify-center items-center">

    <h3>Gerenciar Administradores</h3>

    <RegisterNewAdmin />

    <div>
      <q-btn
        class="btnAmber"
        type="text"
        rounded
      >
        Cadastrar novo Administrador
      </q-btn>

      <q-btn
        class="btnAmber"
        type="text"
        rounded
      >
        Alterar dados
      </q-btn>

      <q-btn
        class="btnAmber"
        type="text"
        rounded
      >
        Excluir Cadastro
      </q-btn>
    </div>

  </q-page>
</template>

<script>

import RegisterNewAdmin from '../components/RegisterNewAdmin.vue';

export default {
  name: 'ManageAdmin',

  components: {
    RegisterNewAdmin,
  },

  data() {
    return {

    };
  },

  methods: {

  },

};
</script>
