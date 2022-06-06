<template>
  <div>
    <q-dialog v-model="showDialog" persistent>
      <q-card class="row justify-center items-center q-pa-md">
        <q-card-section class=" q-gutter-md">
          <span class="btnAmber">Cadastrar Novo Administrador</span>
        </q-card-section>

        <q-card-section class="q-gutter-md">
          <q-input
            outlined
            v-model="formulario.name"
            placeholder="Nome do Administrador"
          />

          <q-input
            outlined
            v-model="formulario.cpf"
            placeholder="CPF"
          />

          <q-input
            outlined
            v-model="formulario.email"
            placeholder="E-mail"
          />

          <q-input
            outlined
            v-model="formulario.password"
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
          v-model="formulario.confirmPassword"
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

        <q-card-actions align="right">
          <q-btn class="btnCancel" label="Cancel" @click="closeDialog"/>
          <q-btn class="btnAmber" @click="confirmAdmin">
            {{ formType === 'save' ? 'Salvar' : 'Atualizar' }}
          </q-btn>
        </q-card-actions>
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

      formulario: this.$props.adminUser || {
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
        this.addNewAdmin(this.formulario);
        this.closeDialog();
      } else {
        this.changeAdmin(this.formulario);
        this.closeDialog();
      }
    },

    closeDialog() {
      // this.formulario = {};
      this.showDialog = false;
      setTimeout(() => {
        this.$emit('closeDialogEmit');
      }, 300);
    },
  },
};
</script>
