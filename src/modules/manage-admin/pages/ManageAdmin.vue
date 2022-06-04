<template>
  <q-page class="window-height window-width row justify-center items-center">

    <h3>Gerenciar Administradores</h3>

    <TableComponent
      title="Gerenciar Administradores"
      :columns="columns"
      :data="data"
      rowKey="name"
    />

    <RegisterNewAdmin
      v-if="showDialog"
      @closeDialogEmit="closeDialog"
    />

    <div>
      <q-btn
        class="btnAmber"
        type="text"
        rounded
        @click="addNewAdmin"
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

      <q-btn
        class="btnAmber"
        type="text"
        rounded
        to="admin-page"
      >
        Voltar
      </q-btn>
    </div>

  </q-page>
</template>

<script>

import TableComponent from 'src/common/TableComponent.vue';
import RegisterNewAdmin from '../components/RegisterNewAdmin.vue';

export default {
  name: 'ManageAdmin',

  components: {
    RegisterNewAdmin,
    TableComponent,
  },

  data() {
    return {

      showDialog: false,

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

      data: [
        {
          id: 1,
          name: 'Usuário Teste',
          cpf: '233.456.456-56',
          email: 'teste@teste.com',
          createdIn: '12/01/21',
          status: 'Ativo',
        },
        {
          id: 2,
          name: 'Usuário Teste 2',
          cpf: '233.456.456-56',
          email: 'teste2@teste.com',
          createdIn: '24/12/18',
          status: 'Inativo',
        },
      ],

    };
  },

  methods: {
    addNewAdmin() {
      this.showDialog = true;
    },

    closeDialog() {
      this.showDialog = false;
    },

  },

};
</script>
