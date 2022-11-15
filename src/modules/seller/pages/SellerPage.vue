<template>
  <q-page class="row justify-center items-center">

    <div class="col-12 row justify-center">
      <h3>Página do Vendedor</h3>
    </div>

    <div class="col-12" v-if="getListAdmins">
      <TableComponent
        title="Minhas Vendas"
        :columns="columns"
        :data="getListAdmins"
        rowKey="id"
      />
    </div>

    <ContentAlertComponent v-else/>

    <section class="justify-center">
      <div class="col q-ma-xl">
        <q-btn
          class="btnAmber"
          type="text"
          rounded
          to="manage-admin"
          size="20px"
          style="width: 350px"
        >
          Catálogo de Produtos
        </q-btn>
      </div>

    </section>

  </q-page>
</template>

<script>
import { mapGetters } from 'vuex';
import TableComponent from 'src/common/components/TableComponent.vue';
import ContentAlertComponent from 'src/common/components/ContentAlertComponent.vue';

export default {
  name: 'SellerPage',

  components: {
    TableComponent,
    ContentAlertComponent,
  },

  data() {
    return {

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

  computed: {
    ...mapGetters('manageAdmin', ['getListAdmins', 'getLoading']),
  },

  methods: {

  },

};
</script>
