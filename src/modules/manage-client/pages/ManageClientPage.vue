<template>
  <q-page class="row justify-center items-center">
    <div class="">

      <div class="row justify-center q-gutter-md q-mt-lg" v-if="!getLoading">

        <div class="col-12">
          <h3 class="row justify-center">Gerenciar Clientes</h3>
        </div>

        <div class="col-12" v-if="getListClients.length">
          <TableComponent
            title="Lista de Clientes"
            :columns="columns"
            :data="getListClients"
            rowKey="id"
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
            Bloquear/Desbloquear
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

      <ModalConfirmComponent
        v-if="openConfirmDialog"
        title="Confirmar bloqueio do Cliente"
        @confirmDialogEmit="confirmBlock"
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
import ModalConfirmComponent from 'src/common/components/ModalConfirmComponent.vue';

export default {
  name: 'ManageClientPage',

  components: {
    TableComponent,
    LoadingComponent,
    ContentAlertComponent,
    ModalConfirmComponent,
  },

  data() {
    return {

      client: [],
      formType: 'save',
      showDialog: false,
      selected: [],
      openConfirmDialog: false,

      columns: [
        {
          name: 'id',
          label: 'ID',
          field: 'id',
        },
        {
          name: 'full_name',
          label: 'Nome',
          field: 'full_name',
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
    ...mapGetters('manageClient', ['getListClients', 'getLoading']),
  },

  methods: {

    ...mapActions('manageClient', ['listAllClients', 'deleteClient', 'blockClient']),
    ...mapActions('administrator', ['blockSelected']),

    clientSelected(item) {
      this.selected = item;
    },

    confirmBlock() {
      this.blockSelected(this.selected);
      this.selected = [];
      this.openConfirmDialog = false;
    },

    openDialog() {
      if (this.selected.length === 1) {
        this.openConfirmDialog = true;
      }
    },

    closeDialog() {
      this.showDialog = false;
      this.openConfirmDialog = false;
    },
  },

};
</script>
