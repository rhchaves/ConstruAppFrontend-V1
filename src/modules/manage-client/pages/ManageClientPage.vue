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
            @click="openDialog"
          >
            Bloquear Cadastro
          </q-btn>

          <q-btn
            class="btnAmber q-ma-md"
            type="text"
            rounded
            to="administrator"
          >
            Voltar
          </q-btn>
        </div>

      </div>

      <ConfirmDeletionComponent
        v-if="openDeleteDialog"
        @confirmDialogEmit="confirmDeletion"
        @closeDialogEmit="closeDialog"
      />

      <LoadingComponent
        :visible="getLoading"
      />

    </div>

  </q-page>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';
import TableComponent from 'src/common/components/TableComponent.vue';
import LoadingComponent from 'src/common/components/LoadingComponent.vue';
import ContentAlertComponent from 'src/common/components/ContentAlertComponent.vue';
import ConfirmDeletionComponent from 'src/common/components/ConfirmDeletionComponent.vue';

export default {
  name: 'ManageClientPage',

  components: {
    TableComponent,
    LoadingComponent,
    ContentAlertComponent,
    ConfirmDeletionComponent,
  },

  data() {
    return {

      client: [],
      formType: 'save',
      showDialog: false,
      selected: [],
      openDeleteDialog: false,

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

    ...mapActions('manageClient', ['listAllClients', 'deleteClient']),

    clientSelected(item) {
      this.selected = item;
    },

    confirmDeletion() {
      // this.deleteClient(this.selected);
      this.selected = [];
      this.openDeleteDialog = false;
    },

    openDialog() {
      if (this.selected.length === 1) {
        this.openDeleteDialog = true;
      }
    },

    closeDialog() {
      this.showDialog = false;
      this.openDeleteDialog = false;
    },
  },

};
</script>
