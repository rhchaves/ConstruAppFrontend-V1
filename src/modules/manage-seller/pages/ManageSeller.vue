<template>
  <q-page class="row justify-center items-center">
    <div class="">
      <div class="row justify-center q-gutter-md">

        <div class="col-12">
          <h3 class="row justify-center">Gerenciar Vendedores</h3>
        </div>

        <div class="col-12">
          <TableComponent
            title="Lista de Vendedores"
            :columns="columns"
            :data="getSellers"
            rowKey="name"
            selectionType="single"
            @itemSelectedEmit="itemSelected"
          />
        </div>

        <div class="q-ma-md">

          <q-btn
            class="btnAmber q-ma-md"
            type="text"
            rounded
            @click="deleteSeller"
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

import { mapGetters, mapActions } from 'vuex';
import TableComponent from 'src/common/TableComponent.vue';

export default {
  name: 'ManageSeller',

  components: {
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
    ...mapGetters('manageSeller', ['getSellers']),
  },

  methods: {

    ...mapActions('manageSeller', ['listAllSellers', 'deleteSellers']),

    itemSelected(item) {
      this.selected = item;
    },

    deleteSeller() {
      if (this.selected.length === 1) {
        this.deleteSellers(this.selected);
      }
    },

    closeDialog() {
      this.showDialog = false;
    },
  },

};
</script>
