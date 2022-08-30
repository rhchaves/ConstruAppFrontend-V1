<template>
  <q-page class="row justify-center items-center">
    <div class="">

      <div class="row justify-center q-gutter-md q-mt-lg" v-if="!getLoading">

        <div class="col-12">
          <h3 class="row justify-center">Gerenciar Vendedores</h3>
        </div>

        <div class="col-12" v-if="getListSellers.length">
          <TableComponent
            title="Lista de Vendedores"
            :columns="columns"
            :data="getListSellers"
            rowKey="name"
            @itemSelectedEmit="sellerSelected"
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
            Excluir Cadastro
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
  name: 'ManageSeller',

  components: {
    TableComponent,
    LoadingComponent,
    ContentAlertComponent,
    ConfirmDeletionComponent,
  },

  data() {
    return {

      admin: [],
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
          name: 'fantasyName',
          label: 'Nome Fantasia',
          field: 'fantasyName',
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
    this.listAllSellers();
  },

  computed: {
    ...mapGetters('manageSeller', ['getListSellers', 'getLoading']),
  },

  methods: {

    ...mapActions('manageSeller', ['listAllSellers', 'deleteSeller']),

    sellerSelected(item) {
      this.selected = item;
      console.log('this.selected', this.selected);
    },

    confirmDeletion() {
      this.deleteSeller(this.selected);
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
