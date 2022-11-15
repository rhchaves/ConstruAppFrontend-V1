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
              <span class="title-custom text-center size-custom-400">Cadastrar Novo Produto</span>
            </q-card-section>

            <q-card-section class="q-gutter-md">
              <q-input
                outlined
                v-model="form.name"
                label="Nome do Produto"
                lazy-rules
                :rules="[ val => val !== null && val != '' && val.length >= 3 ||
                'Mínimo 3 caracteres']"
              />

              <q-input
                outlined
                v-model="form.description"
                label="Descrição do Produto"
                lazy-rules
                :rules="[ val => val !== null && val != '' && val.length >= 10 ||
                'Mínimo 10 caracteres']"
              />

              <q-input
                outlined
                v-model="form.price"
                label="Preço"
                mask="#,##"
                fill-mask="0"
                reverse-fill-mask
                lazy-rules
                :rules="[ val => val !== null && val != '' && val.length >= 1 ||
                'Preço mínimo R$ 0,01']"
              />

              <q-input
                outlined
                v-model="form.mark"
                label="Fabricante/Marca"
                lazy-rules
                :rules="[ val => val !== null && val != '' && val.length >= 3 ||
                'Mínimo 3 caracteres']"
              />

              <q-select
                label="Categoria"
                outlined
                v-model="form.category"
                :options="categoryOptions"
                />
                <!-- :name="name" -->

              <q-uploader
                label="Imagem"
                color="amber"
                text-color="black"
                accept=".jpg, .jpeg, .png, image/*"
                max-file-size="204800"
                max-files="3"
                @rejected="onRejected"
              />

            </q-card-section>

            <q-card-actions align="right" class="row justify-center">
              <q-btn
                class="btnCancel sizeBtn3 q-ma-md"
                rounded
                label="Cancel" @click="closeDialog"
              />
              <q-btn
                class="btnAmber sizeBtn3 q-ma-md"
                rounded
                type="submit"
              >
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
        category: '',
        image: {},
      },
      categoryOptions:
      [
        'construcao',
        'eletrica',
        'hidraulica',
        'ferragens',
        'tintas',
        'ferramentas',
        'outros',
      ],
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

    onRejected(rejectedEntries) {
      // Notify plugin needs to be installed
      // https://quasar.dev/quasar-plugins/notify#Installation
      console.log(rejectedEntries);
      if (rejectedEntries[0].failedPropValidation === 'max-file-size') {
        this.$q.notify({
          type: 'negative',
          message: 'Tamanho do arquivo é inválido (máximo 200kb)',
        });
      }
    },

  },
};
</script>
