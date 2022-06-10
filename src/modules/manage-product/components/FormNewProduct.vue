<template>
  <div>
    <q-dialog v-model="showDialog" persistent >
      <q-card
        class="col q-pa-md"
        style="max-width: 500px"
      >
        <div class="" >

          <q-card-section class="row justify-center q-gutter-md">
            <span class="title">Cadastrar Novo Produto</span>
          </q-card-section>

          <q-card-section class="q-gutter-md">
            <q-input
              outlined
              v-model="form.name"
              placeholder="Nome do Produto"
            />

            <q-input
              outlined
              v-model="form.description"
              placeholder="Descrição do Produto"
            />

            <q-input
              outlined
              v-model="form.value"
              placeholder="Valor"
            />

            <q-input
              outlined
              v-model="form.mark"
              placeholder="Fabricante/Marca"
            />

          </q-card-section>

          <q-card-actions align="right" class="row justify-center">
            <q-btn class="btnCancel sizeBtn3 q-ma-md" label="Cancel" @click="closeDialog"/>
            <q-btn class="btnAmber sizeBtn3 q-ma-md" @click="confirmProduct">
              {{ formType === 'save' ? 'Salvar' : 'Atualizar' }}
            </q-btn>
          </q-card-actions>
        </div>
        </q-card>
    </q-dialog>

  </div>
</template>

<script>

import { mapActions } from 'vuex';

export default {
  name: 'RegisterNewAdmin',

  props: {

    formType: {
      type: String,
      required: false,
      default: 'save',
    },

    product: {
      type: Object,
      required: false,
    },
  },

  data() {
    return {
      showDialog: false,
      isPwd: true,

      form: this.$props.product || {
        name: '',
        category: '',
        value: '',
      },
    };
  },

  mounted() {
    this.showDialog = true;
  },

  methods: {

    ...mapActions('manageAdmin', ['addNewProduct', 'changeProduct']),

    confirmProduct() {
      if (this.formType === 'save') {
        this.addNewProduct(this.form);
        this.closeDialog();
      } else {
        this.changeProduct(this.form);
        this.closeDialog();
      }
    },

    closeDialog() {
      this.showDialog = false;
      setTimeout(() => {
        this.$emit('closeDialogEmit');
      }, 300);
    },
  },
};
</script>
