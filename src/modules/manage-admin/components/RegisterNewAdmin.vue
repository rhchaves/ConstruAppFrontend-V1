<template>
  <div>
    <q-dialog v-model="showDialog" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <span class="btnAmber">Cadastrar Novo Administrador</span>
        </q-card-section>

        <q-card-section class="row items-center">
          <q-input
            outlined
            v-model="admin.name"
            placeholder="Nome do Administrador"
          />

          <q-input
            outlined
            v-model="admin.cpf"
            placeholder="CPF"
          />

          <q-input
            outlined
            v-model="admin.email"
            placeholder="E-mail"
          />

          <q-input
            outlined
            v-model="admin.password"
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
          v-model="admin.confirmPassword"
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
          <q-btn class="btnAmber" label="Confirmar" @click="closeDialog"/>
        </q-card-actions>
      </q-card>
    </q-dialog>

  </div>
</template>

<script>
export default {
  name: 'RegisterNewAdmin',

  data() {
    return {
      showDialog: false,
      isPwd: true,

      admin: {
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
    closeDialog() {
      this.showDialog = false;
      setTimeout(() => {
        this.$emit('closeDialogEmit');
      }, 300);
    },
  },
};
</script>
