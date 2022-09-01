<template>
  <q-page class="row justify-center items-center">
    <div class="">

      <div class="row justify-center q-gutter-md q-mt-lg" v-if="!getLoading">

        <div class="col-12">
          <h3 class="row justify-center">Gerenciar Administradores</h3>
        </div>

        <div class="col-12" v-if="getListAdmins.length">
          <TableComponent
            title="Lista de Administradores"
            :columns="columns"
            :data="getListAdmins"
            rowKey="name"
            selectionType="single"
            @itemSelectedEmit="adminSelected"
          />
        </div>

        <ContentAlertComponent v-else/>

        <div class="q-ma-md">
          <q-btn
            class="btnAmber q-ma-md"
            type="text"
            rounded
            @click="addNewAdmin"
          >
            Cadastrar novo Administrador
          </q-btn>

          <q-btn
            class="btnAmber q-ma-md"
            type="text"
            rounded
            @click="changeAdmin"
          >
            ?Alterar dados?
          </q-btn>

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

      <FormNewAdmin
        v-if="showDialog"
        :adminUser="adminSelecte[0]"
        :formType="formType"
        @closeDialogEmit="closeDialog"
      />

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
import FormNewAdmin from '../components/FormNewAdmin.vue';

export default {
  name: 'ManageAdminPage',

  components: {
    TableComponent,
    ContentAlertComponent,
    FormNewAdmin,
    ConfirmDeletionComponent,
    LoadingComponent,
  },

  data() {
    return {

      admin: [],
      formType: 'save',
      showDialog: false,
      selected: [],
      openDeleteDialog: false,

      adminSelecte: [],

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
          name: 'cpf',
          label: 'CPF',
          field: 'cpf',
        },
        {
          name: 'email',
          label: 'E-mail',
          field: 'email',
        },
        {
          name: 'created_at',
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
    this.listAllAdmins();
  },

  computed: {
    ...mapGetters('manageAdmin', ['getListAdmins', 'getLoading']),
  },

  methods: {

    ...mapActions('manageAdmin', ['listAllAdmins', 'deleteAdmin']),

    addNewAdmin() {
      this.formType = 'save';
      this.admin = [];
      this.showDialog = true;
    },

    changeAdmin() {
      if (this.selected.length === 1) {
        this.formType = 'edit';
        this.adminSelecte = this.selected;
        this.showDialog = true;
        console.log('this.selected', this.selected);
      }
    },

    adminSelected(item) {
      this.selected = item;
    },

    confirmDeletion() {
      this.deleteAdmin(this.selected);
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
