<template>
  <div>
    <q-dialog v-model="showDialog" persistent >
      <q-card
        class="col q-pa-md"
        style="max-width: 500px"
      >
        <div class="" >
          <q-form @submit.prevent="confirmProduct()">
            <q-card-section class="row justify-center q-gutter-md">
              <span class="title">Cadastrar Novo Produto</span>
            </q-card-section>

            <q-card-section class="q-gutter-md">
              <q-input
                outlined
                v-model="form.name"
                placeholder="Nome do Produto"
                lazy-rules
                :rules="[ val => val !== null && val != '' && val.length >= 3 ||
                'Mínimo 3 caracteres']"
              />

              <q-input
                outlined
                v-model="form.description"
                placeholder="Descrição do Produto"
                lazy-rules
                :rules="[ val => val !== null && val != '' && val.length >= 10 ||
                'Mínimo 10 caracteres']"
              />

              <q-input
                outlined
                v-model="form.price"
                placeholder="Valor"
                lazy-rules
                :rules="[ val => val !== null && val != '' && val.length >= 1 ||
                'Mínimo 1 caracteres']"
              />

              <q-input
                outlined
                v-model="form.mark"
                placeholder="Fabricante/Marca"
                lazy-rules
                :rules="[ val => val !== null && val != '' && val.length >= 3 ||
                'Mínimo 3 caracteres']"
              />

            </q-card-section>

            <q-card-actions align="right" class="row justify-center">
              <q-btn class="btnCancel sizeBtn3 q-ma-md" label="Cancel" @click="closeDialog"/>
              <q-btn class="btnAmber sizeBtn3 q-ma-md" type="submit">
                {{ formType === 'save' ? 'Salvar' : 'Atualizar' }}
              </q-btn>
            </q-card-actions>
          </q-form>
        </div>
        </q-card>
    </q-dialog>

  </div>
</template>

<script>

import { mapActions } from 'vuex';

export default {
  name: 'FormNewProduct',

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

      form: this.$props.product || {
        name: '',
        description: '',
        price: '',
        mark: '',
      },
    };
  },

  mounted() {
    this.showDialog = true;
  },

  methods: {

    ...mapActions('manageAdmin', ['addNewProduct', 'updateProduct']),

    confirmProduct() {
      if (this.formType === 'save') {
        this.addNewProduct(this.form);
      } else {
        this.updateProduct(this.form);
      }
      this.closeDialog();
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
