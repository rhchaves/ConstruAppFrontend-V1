<template>
  <div>
    <q-dialog v-model="showDialog" persistent >
      <q-card
        class="col q-pa-md"
        style="max-width: 500px"
      >
        <div class="" >
          <q-form @submit.prevent="confirmAdmin()">
            <q-card-section class="row justify-center q-gutter-md">
              <span class="title-custom text-center size-custom-400">
                Cadastrar Novo Administrador
              </span>
            </q-card-section>

            <q-card-section class="q-gutter-md">

              <q-input
                outlined
                v-model="form.name"
                label="Nome do Administrador"
                lazy-rules
                :rules="[ val => val !== null && val != '' && val.length >= 3 ||
                'Mínimo 3 caracteres']"
              />

              <q-input
                outlined
                v-model="form.cpf"
                label="CPF"
                mask="###.###.###-##"
                lazy-rules
                :rules="[ val => val !== null && val != '' && val.length === 14 ||
                'Preencha um CPF válido com 11 dígitos']"
              />
                <!-- fill-mask como propriedade para mostrar na tela o formato da máscara -->

              <q-input
                outlined
                v-model="form.email"
                label="E-mail"
                type="email"
                lazy-rules
                :rules="[ val => val !== null && val != '' && val.length > 5 ||
                'Preencha um email válido']"
              />

              <!-- <q-input
                v-if="formType === 'edi'"
                outlined
                v-model="form.password"
                :type="isPwd ? 'password' : 'text'"
                label="Senha"
                lazy-rules
                :rules="[ val => val && val !== '' || 'Preencha a senha']"
                >
                <template v-slot:append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                  />
                </template>
              </q-input>

              <q-input
              v-if="formType === 'edi'"
              outlined
              v-model="form.confirmPassword"
              :type="isPwd ? 'password' : 'text'"
              label="Confirmar a senha"
              lazy-rules
              :rules="[ val => val && val !== '' || 'Preencha a senha']"
              >
                <template v-slot:append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                  />
                </template>
              </q-input> -->

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
  name: 'FormNewAdmin',

  props: {

    formType: {
      type: String,
      required: false,
      default: 'save',
    },

    adminUser: {
      type: Object,
      required: false,
    },
  },

  data() {
    return {
      showDialog: false,
      isPwd: true,

      form: this.$props.adminUser || {
        name: '',
        cpf: '',
        email: '',
        password: '123',
        confirmPassword: '',
      },
    };
  },

  mounted() {
    this.showDialog = true;
  },

  methods: {

    ...mapActions('manageAdmin', ['addNewAdmin', 'updateAdmin']),

    // validate() {
    //   this.$validator.validateAll();
    // },

    confirmAdmin() {
      // this.$validator.validateAll().then(async (result) => {
      //   if (result) {
      //     console.log('result', result);
      //   } else {
      //     console.log('não funcionou');
      //   }
      // });
      if (this.form.name.length >= 3
          && this.form.cpf.length === 14
          && this.form.email.length >= 3) {
        if (this.formType === 'save') {
          this.addNewAdmin(this.form);
        // } else if (this.formType === 'edit') {
        //   if (this.form.password === this.form.confirmPassword &&
        //      this.form.password.length >= 3) {
        //     this.updateAdmin(this.form);
        //   } else {
        //     console.log('Senha incompatível');
        //   }
        } else {
          this.updateAdmin(this.form);
        }
        this.closeDialog();
      } else {
        console.log('Preencha os campos');
      }
    },

    closeDialog() {
      // this.form = {};
      this.showDialog = false;
      setTimeout(() => {
        this.$emit('closeDialogEmit');
      }, 300);
    },
  },
};
</script>
