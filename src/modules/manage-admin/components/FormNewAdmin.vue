<template>
  <div>
    <q-dialog v-model="showDialog" persistent >
      <q-card
        class="col q-pa-md"
        style="max-width: 500px"
      >
        <div class="" >
          <q-card-section class="row justify-center q-gutter-md">
            <span class="title">Cadastrar Novo Administrador</span>
          </q-card-section>

          <q-card-section class="q-gutter-md">
            <q-input
              outlined
              v-model="form.name"
              placeholder="Nome do Administrador"
            />

            <q-input
              outlined
              v-model="form.cpf"
              placeholder="CPF"
            />

            <q-input
              outlined
              v-model="form.email"
              placeholder="E-mail"
            />

            <q-input
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
            </q-input>

          </q-card-section>

          <q-card-actions align="right" class="row justify-center">
            <q-btn class="btnCancel sizeBtn3 q-ma-md" label="Cancel" @click="closeDialog" />
            <q-btn class="btnAmber sizeBtn3 q-ma-md" @click="confirmAdmin">
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
        password: '',
        confirmPassword: '',
      },
    };
  },

  mounted() {
    this.showDialog = true;
  },

  methods: {

    ...mapActions('manageAdmin', ['addNewAdmin', 'changeAdmin']),

    confirmAdmin() {
      if (this.formType === 'save') {
        this.addNewAdmin(this.form);
        this.closeDialog();
      } else {
        this.changeAdmin(this.form);
        this.closeDialog();
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
