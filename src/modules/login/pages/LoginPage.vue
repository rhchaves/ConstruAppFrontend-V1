<template>
  <q-page>
    <h2>Página de Login</h2>
    <q-form>
      <q-dialog v-if="login" persistent>
        <q-card style="min-width: 350px">
          <q-card-section>
            <div class="text-h6">Entrar</div>
            <q-btn class="" type="text" icon="close" flat round v-close-popup></q-btn>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <q-input
              outlined
              v-model="name"
              type="text"
              label="Email"
              lazy-rules
              :rules="[ val => val && val.length <= 0 || 'Preencha o Campo']"
            />

            <q-input
              outlined
              v-model="password"
              type="text"
              label="Senha"
              lazy-rules
            />
          </q-card-section>

          <q-card-actions align="right" class="text-primary">
            <q-btn class="" type="text" flat>Esqueci a senha</q-btn>
            <q-btn class="btnAmber" type="text" rounded v-close-popup>Login</q-btn>
            <q-btn class="btnAmber" type="text" rounded v-close-popup>Criar Conta</q-btn>
          </q-card-actions>
        </q-card>
      </q-dialog>

    </q-form>
  </q-page>
</template>

<script>
export default {
  name: 'LoginPage',

  props: {
    login: {
      type: Boolean,
      required: true,
    },
  },

  data() {
    return {
      alert: false,

      password: null,
      name: null,
      age: null,

      accept: false,

      prompt: false,

      address: '',
    };
  },

  methods: {
    onSubmit() {
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to accept the license and terms first',
        });
      } else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted',
        });
      }
    },

    onReset() {
      this.name = null;
      this.age = null;
      this.accept = false;
    },
  },
};

</script>
