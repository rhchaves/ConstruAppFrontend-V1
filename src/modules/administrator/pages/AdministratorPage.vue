<template>
  <q-page class="row justify-center items-center">

    <div class="col-12 row justify-center">
      <h3>Página de Administração</h3>
    </div>

    <section class="justify-center">
      <div class="col q-ma-xl"
        v-if="this.typeAdmin === 1">
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

      <div class="col q-ma-xl"
        v-if="this.typeAdmin === 1 || this.typeAdmin === 2 || this.typeAdmin === 3">
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

      <div class="col q-ma-xl"
        v-if="this.typeAdmin === 1 || this.typeAdmin === 2 || this.typeAdmin === 4">
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

      <div class="col q-ma-xl"
        v-if="this.typeAdmin === 1 || this.typeAdmin === 2 || this.typeAdmin === 5">
        <q-btn
          class="btnAmber"
          type="text"
          rounded
          to="manage-client"
          size="20px"
          style="width: 350px"
        >
          Gerenciar Cliente
        </q-btn>
      </div>
    </section>

  </q-page>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'AdministratorPage',

  data() {
    return {
      admin: 0,
      typeAdmin: 0,
      adminTypeEnum: {
        masterAdmin: 1,
        geralAdmin: 2,
        productAdmin: 3,
        sellerAdmin: 4,
        clientAdmin: 5,
      },
    };
  },

  created() {
    this.listAdmins();
    this.administrator();
  },

  computed: {
    ...mapGetters('administrator', ['getAdmins', 'getTypeAdmin']),
    ...mapGetters('login', ['getUser']),
  },

  methods: {

    ...mapActions('administrator', ['listAdmins']),

    administrator() {
      setTimeout(() => {
        this.getAdmins.forEach((item) => {
          if (item.id === this.getUser.id) {
            console.log('item', item);
            this.typeAdmin = item.type_admin;
          }
        });
      }, 2000);
    },

  },

};
</script>
