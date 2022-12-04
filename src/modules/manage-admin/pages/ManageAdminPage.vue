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
            rowKey="id"
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
            Cadastrar novo Admin
          </q-btn>

          <q-btn
            class="btnAmber q-ma-md"
            type="text"
            rounded
            @click="changeAdmin"
          >
            Alterar Admin
          </q-btn>

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

      <FormNewAdmin
        v-if="showDialog"
        :adminUser="adminSelecte[0]"
        :formType="formType"
        @closeDialogEmit="closeDialog"
      />

      <ModalConfirmComponent
        v-if="openConfirmDialog"
        title="Confirmar bloqueio do Administrador"
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
import FormNewAdmin from '../components/FormNewAdmin.vue';

export default {
  name: 'ManageAdminPage',

  components: {
    TableComponent,
    ContentAlertComponent,
    FormNewAdmin,
    ModalConfirmComponent,
    LoadingComponent,
  },

  data() {
    return {
      admin: [],
      formType: 'save',
      showDialog: false,
      selected: [],
      openConfirmDialog: false,
      listAdmins: [],

      adminSelecte: [],

      // statusEnum: {
      //   Inativo: 0,
      //   Ativo: 1,
      // },

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
    // this.listAllAdmins();
    this.listAllAdminsEnum();
  },

  computed: {
    ...mapGetters('manageAdmin', ['getListAdmins', 'getLoading']),
  },

  methods: {

    ...mapActions('manageAdmin', ['listAllAdmins', 'deleteAdmin', 'blockAdmin']),

    listAllAdminsEnum() {
      this.listAllAdmins();

      setTimeout(() => {
        this.listAdmins = this.getListAdmins;
      //   this.listAdmins.map((item) => {
      //     if (item.status === 0) {
      //       // item.status = this.statusEnum.Inativo;
      //       item.status = 'Inativo';
      //       console.log('item.status', item.status);
      //     } else {
      //       // item.status = this.statusEnum.Ativo;
      //       item.status = 'Ativo';
      //     }
      //     return item;
      //   });
      //   console.log('this.listAdmins', this.listAdmins);
      }, 1000);
    },

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
        console.log('this.selected', this.selected);
      }
    },

    adminSelected(item) {
      this.selected = item;
    },

    confirmBlock() {
      this.blockAdmin(this.selected);
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
