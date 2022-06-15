<template>
  <q-page class="row justify-center items-center">
    <div class="">
      <div class="row justify-center q-gutter-md">

        <div class="col-12">
          <h3 class="row justify-center">Gerenciar Produtos</h3>
        </div>

        <div class="col-12">
          <TableComponent
            title="Lista de Produtos"
            :columns="columns"
            :data="getProducts"
            rowKey="name"
            selectionType="single"
            @productSelectedEmit="productSelected"
          />
        </div>

        <div class="q-ma-md q-ma-md">
          <q-btn
            class="btnAmber"
            type="text"
            rounded
            @click="addNewProduct"
          >
            Cadastrar Novo Produto
          </q-btn>

          <q-btn
            class="btnAmber q-ma-md"
            type="text"
            rounded
          >
            Confirmar itens à venda
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

    <FormNewProduct
      v-if="showDialog"
      :adminUser="product[0]"
      :formType="formType"
      @closeDialogEmit="closeDialog"
    />

  </q-page>
</template>

<script>

import { mapGetters } from 'vuex';
import TableComponent from 'src/common/TableComponent.vue';
import FormNewProduct from '../components/FormNewProduct.vue';

export default {
  name: 'ManageProduct',

  components: {
    TableComponent,
    FormNewProduct,
  },

  data() {
    return {

      product: [],
      formType: 'save',
      showDialog: false,
      selected: [],

      columns: [
        {
          name: 'name',
          label: 'Nome do Produto',
          field: 'name',
        },
        {
          name: 'category',
          label: 'Categoria',
          field: 'category',
        },
        {
          name: 'details',
          label: 'Detalhes',
          field: 'details',
        },
        {
          name: 'value',
          label: 'Valor',
          field: 'value',
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
    ...mapGetters('manageProduct', ['getProducts']),
  },

  methods: {

    addNewProduct() {
      this.formType = 'save';
      this.product = [];
      this.showDialog = true;
    },

    changeProduct() {
      if (this.selected.length === 1) {
        this.formType = 'edit';
        this.product = this.selected;
        this.showDialog = true;
      }
    },

    productSelected(item) {
      this.selected = item;
    },

    closeDialog() {
      this.showDialog = false;
    },
  },

};
</script>
