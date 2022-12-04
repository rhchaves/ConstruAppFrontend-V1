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
            rowKey="id"
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
  name: 'ManageSellerPage',

  components: {
    TableComponent,
    LoadingComponent,
    ContentAlertComponent,
    ModalConfirmComponent,
  },

  data() {
    return {

      admin: [],
      formType: 'save',
      showDialog: false,
      selected: [],
      openConfirmDialog: false,

      sellerConditionEnum: {
        aguardandoAprovação: 1,
        aprovado: 2,
        bloqueado: 3,
      },

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

    ...mapActions('manageSeller', ['listAllSellers', 'deleteSeller', 'blockSeller']),

    sellerSelected(item) {
      this.selected = item;
      console.log('this.selected', this.selected);
    },

    confirmBlock() {
      this.blockSeller(this.selected);
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
