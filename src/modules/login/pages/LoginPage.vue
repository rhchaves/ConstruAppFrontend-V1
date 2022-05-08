<template>
  <!-- <q-page> -->
    <!-- <h2>Página de Login</h2> -->
    <!-- <q-form> -->
    <!-- <q-btn label="Prompt" color="primary" @click="isLoggedIn = !isLoggedIn" /> -->
      <q-dialog v-model="loginAccount" persistent>
        <q-card style="min-width: 350px">
          <q-card-section>
            <div class="text-h6">Entrar</div>
            <q-btn class="" type="text" icon="close" flat round v-close-popup
              @click="closedDialog"></q-btn>
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
            <q-btn class="btnAmber" type="text" rounded v-close-popup
              @click="isLoggedInFunc">Login</q-btn>
            <q-btn class="btnAmber" type="text" rounded v-close-popup
              @click="createAccount">Criar Conta</q-btn>
          </q-card-actions>
        </q-card>
      </q-dialog>

    <!-- </q-form> -->
  <!-- </q-page> -->
</template>

<script>
export default {
  name: 'LoginPage',

  props: {
    login: {
      type: Boolean,
      required: true,
      default: false,
    },
    titulo: {
      type: String,
      required: true,
      default: '',
    },
    tamanho: {
      type: String,
      required: false,
      default: 'sm',
    },
    mostrarHeader: {
      type: Boolean,
      required: false,
      default: true,
    },
    mostrarBody: {
      type: Boolean,
      required: false,
      default: true,
    },
    mostrarFooter: {
      type: Boolean,
      required: false,
      default: true,
    },
  },

  data() {
    return {
      alert: false,

      password: null,
      name: null,

      prompt: false,

      address: '',

      loginAccount: false,
      isLoggedIn: false,

    };
  },

  watch: {
    login() {
      console.log('loginAccount watch', this.loginAccount);
      this.loginAccount = true;
      console.log('loginAccount watch alterado', this.loginAccount);
    },
  },

  methods: {

    closedDialog() {
      console.log('closedDialog', this.loginAccount);
      this.loginAccount = false;
      console.log('closedDialog alterado', this.loginAccount);
      this.$emit('closedDialog');
    },

    isLoggedInFunc() {
      this.isLoggedIn = true;
      console.log('isLoggedInFunc', this.isLoggedIn);
      this.$emit('isLoggedIn');
    },

    createAccount() {
      this.isLoggedIn = false;
      console.log('isLoggedInFunc', this.isLoggedIn);
      this.$emit('closedDialog');
    },
    //   onSubmit() {
    //     if (this.accept !== true) {
    //       this.$q.notify({
    //         color: 'red-5',
    //         textColor: 'white',
    //         icon: 'warning',
    //         message: 'You need to accept the license and terms first',
    //       });
    //     } else {
    //       this.$q.notify({
    //         color: 'green-4',
    //         textColor: 'white',
    //         icon: 'cloud_done',
    //         message: 'Submitted',
    //       });
    //     }
    //   },

  //   onReset() {
  //     this.name = null;
  //     this.age = null;
  //     this.accept = false;
  //   },
  },
};

</script>
