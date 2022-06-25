<template>
  <q-page class="row justify-center items-center">
    <div class="">

      <div class="row justify-center q-gutter-md q-mt-lg" v-if="!getLoading">

        <div class="col-12">
          <h3 class="row justify-center">Gerenciar Clientes</h3>
        </div>

        <div class="col-12" v-if="getClients.length">
          <TableComponent
            title="Lista de Clientes"
            :columns="columns"
            :data="getClients"
            rowKey="name"
            selectionType="single"
            @itemSelectedEmit="clientSelected"
          />
        </div>

        <ContentAlertComponent v-else/>

        <div class="q-ma-md">

          <q-btn
            class="btnAmber q-ma-md"
            type="text"
            rounded
            @click="deleteClient"
          >
            Excluir Cadastro
          </q-btn>

          <q-btn
            class="btnAmber q-ma-md"
            type="text"
            rounded
            to="admin-page"
          >
            Voltar
          </q-btn>
        </div>

      </div>

      <LoadingComponent
        :visible="getLoading"
      />

    </div>

  </q-page>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';
import TableComponent from 'src/common/TableComponent.vue';
import LoadingComponent from 'src/common/LoadingComponent.vue';
import ContentAlertComponent from 'src/common/ContentAlertComponent.vue';

export default {
  name: 'ManageClient',

  components: {
    TableComponent,
    LoadingComponent,
    ContentAlertComponent,
  },

  data() {
    return {

      client: [],
      formType: 'save',
      showDialog: false,
      selected: [],

      columns: [
        {
          name: 'id',
          label: 'ID',
          field: 'id',
        },
        {
          name: 'name',
          label: 'Nome',
          field: 'name',
        },
        {
          name: 'createdIn',
          label: 'Criado em:',
          field: 'created_at',
        },
        {
          name: 'status',
          label: 'Status',
          field: 'status',
        },
      ],

    };
  },

  created() {
    this.listAllClients();
  },

  computed: {
    ...mapGetters('manageClient', ['getClients', 'getLoading']),
  },

  methods: {

    ...mapActions('manageClient', ['listAllClients', 'deleteClients']),

    clientSelected(item) {
      this.selected = item;
    },

    deleteClient() {
      if (this.selected.length === 1) {
        this.deleteClients(this.selected);
      }
    },

    closeDialog() {
      this.showDialog = false;
    },
  },

};
</script>
