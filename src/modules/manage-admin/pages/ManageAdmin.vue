<template>
  <q-page class="row justify-center items-center">
    <div class="">
      <div class="row justify-center q-gutter-md">

        <div class="col-12">
          <h3 class="row justify-center">Gerenciar Administradores</h3>
        </div>

        <div class="">
          <TableComponent
            title="Lista de Administradores"
            :columns="columns"
            :data="getAdmins"
            rowKey="name"
            @itemSelectedEmit="itemSelected"
          />
        </div>

        <FormNewAdmin
          v-if="showDialog"
          :adminUser="admin[0]"
          :formType="formType"
          @closeDialogEmit="closeDialog"
        />

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
            Alterar dados
          </q-btn>

          <q-btn
            class="btnAmber q-ma-md"
            type="text"
            rounded
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
    </div>

  </q-page>
</template>

<script>

import { mapGetters } from 'vuex';
import TableComponent from 'src/common/TableComponent.vue';
import FormNewAdmin from '../components/FormNewAdmin.vue';

export default {
  name: 'ManageAdmin',

  components: {
    FormNewAdmin,
    TableComponent,
  },

  data() {
    return {

      admin: [],
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
          name: 'createdIn',
          label: 'Criado em:',
          field: 'createdIn',
        },
        {
          name: 'status',
          label: 'Status',
          field: 'status',
        },
      ],

    };
  },

  computed: {
    ...mapGetters('manageAdmin', ['getAdmins']),
  },

  methods: {
    addNewAdmin() {
      this.formType = 'save';
      this.admin = [];
      this.showDialog = true;
    },

    changeAdmin() {
      if (this.selected.length === 1) {
        this.formType = 'edit';
        this.admin = this.selected;
        this.showDialog = true;
      }
    },

    itemSelected(item) {
      this.selected = item;
    },

    closeDialog() {
      this.showDialog = false;
    },
  },

};
</script>
