<template>
  <q-page class="row justify-center items-center">
    <div class="">
      <div class="row justify-center q-gutter-md q-mt-lg" v-if="!getLoading">

        <div class="col-12">
          <h3 class="row justify-center">Gerenciar Produtos</h3>
        </div>

        <div class="col-12" v-if="getListProducts.length">
          <TableComponent
            title="Lista de Produtos"
            :columns="columns"
            :data="getListProducts"
            rowKey="id"
            selectionType="multiple"
            @itemSelectedEmit="productSelected"
          />
        </div>

        <ContentAlertComponent v-else/>

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
            @click="openDialog"
          >
            Excluir Produto
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

        <FormNewProduct
          v-if="showDialog"
          :adminUser="product[0]"
          :formType="formType"
          @closeDialogEmit="closeDialog"
        />

        <ConfirmDeletionComponent
          v-if="openDeleteDialog"
          @confirmDialogEmit="confirmDeletion"
          @closeDialogEmit="closeDialog"
        />

      </div>

      <LoadingComponent
        :visible="getLoading"
      />
    </div>

  </q-page>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';
import TableComponent from 'src/common/components/TableComponent.vue';
import LoadingComponent from 'src/common/components/LoadingComponent.vue';
import ContentAlertComponent from 'src/common/components/ContentAlertComponent.vue';
import ConfirmDeletionComponent from 'src/common/components/ConfirmDeletionComponent.vue';
import FormNewProduct from '../components/FormNewProduct.vue';

export default {
  name: 'ManageProductPage',

  components: {
    TableComponent,
    ContentAlertComponent,
    FormNewProduct,
    ConfirmDeletionComponent,
    LoadingComponent,
  },

  data() {
    return {

      product: [],
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
          name: 'label',
          label: 'Nome do Produto',
          field: 'label',
        },
        {
          name: 'category',
          label: 'Categoria',
          field: 'category',
        },
        {
          name: 'product_mark',
          label: 'Marca',
          field: 'product_mark',
        },
        {
          name: 'price',
          label: 'Valor',
          field: 'price',
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
    this.listAllProducts();
  },

  computed: {
    ...mapGetters('manageProduct', ['getListProducts', 'getLoading']),
  },

  methods: {

    ...mapActions('manageProduct', ['listAllProducts', 'deleteProduct']),

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

    confirmDeletion() {
      this.deleteProduct(this.selected);
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
