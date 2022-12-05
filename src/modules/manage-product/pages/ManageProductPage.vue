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
            Cadastrar
          </q-btn>

          <q-btn
            class="btnAmber q-ma-md"
            type="text"
            rounded
            @click="updateDialog"
          >
            Alterar
          </q-btn>

          <q-btn
            class="btnAmber q-ma-md"
            type="text"
            rounded
            @click="deleteDialog"
          >
            Excluir
          </q-btn>

          <q-btn
            class="btnAmber q-ma-md"
            type="text"
            rounded
            @click="confirmDialog"
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

        <FormNewProduct
          v-if="newProductDialog"
          :product="product[0]"
          :formType="formType"
          @closeDialogEmit="closeDialog"
        />

        <FormNewProduct
          v-if="updateProductDialog"
          :product="product[0]"
          :formType="formType"
          @closeDialogEmit="closeDialog"
        />

        <ModalConfirmComponent
          v-if="openConfirmDialog"
          title="Confirmar bloqueio do Produto"
          @confirmDialogEmit="confirmBlock"
          @closeDialogEmit="closeDialog"
        />

        <ModalConfirmComponent
          v-if="openDeleteDialog"
          title="Confirmar deleção do Produto"
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
import ModalConfirmComponent from 'src/common/components/ModalConfirmComponent.vue';
import FormNewProduct from '../components/FormNewProduct.vue';

export default {
  name: 'ManageProductPage',

  components: {
    TableComponent,
    ContentAlertComponent,
    FormNewProduct,
    ModalConfirmComponent,
    LoadingComponent,
  },

  data() {
    return {
      product: [],
      formType: 'save',
      selected: [],
      newProductDialog: false,
      updateProductDialog: false,
      openConfirmDialog: false,
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
          name: 'mark',
          label: 'Marca',
          field: 'mark',
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

    ...mapActions('manageProduct', ['listAllProducts', 'deleteProduct', 'blockProduct']),

    addNewProduct() {
      this.formType = 'save';
      this.product = [];
      this.newProductDialog = true;
    },

    updateDialog() {
      if (this.selected.length === 1) {
        this.formType = 'edit';
        console.log('this.selected', this.selected);
        this.product = this.selected;
        this.updateProductDialog = true;
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

    confirmBlock() {
      this.blockProduct(this.selected);
      this.selected = [];
      this.openConfirmDialog = false;
    },

    confirmDialog() {
      if (this.selected.length === 1) {
        this.openConfirmDialog = true;
      }
    },

    deleteDialog() {
      this.openDeleteDialog = true;
    },

    closeDialog() {
      this.newProductDialog = false;
      this.updateProductDialog = false;
      this.openConfirmDialog = false;
      this.openDeleteDialog = false;
    },
  },

};
</script>
