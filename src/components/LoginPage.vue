<template>
  <q-page>
    <h2>Página de Login</h2>
    <q-form>

    <q-dialog v-model="alert">
      <q-card>
        <q-card-section>
          <div class="text-h6">Alert</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Lorem ipsum dolor sit amet consectetura, porro labore.
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

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

      <div>
        <q-btn class="btnAmber" type="text" rounded>Login</q-btn>
        <q-btn class="btnAmber" type="text" rounded>Criar Conta</q-btn>
      </div>
    </q-form>
  </q-page>
</template>

<script>
export default {
  name: 'LoginPage',

  data() {
    return {
      alert: false,

      password: null,
      name: null,
      age: null,

      accept: false,
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
