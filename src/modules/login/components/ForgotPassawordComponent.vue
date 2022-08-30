<template>
  <q-page class="q-ma-xl q-pa-xl">
    <div class="row justify-center">
      <div class="column size-custom-450">
        <p class="text-h6 text-center center-screen size-custom-300 q-pb-lg"
        >ESQUECEU A SUA SENHA?</p>

        <p class="text-center q-ma-lg">
          Insira o endereço de e-mail. Você receberá uma mensagem
          de e-mail com as instruções necessárias para redefinir a senha.
        </p>

        <q-input
          outlined
          v-model="email"
          type="text"
          label="Email"
          lazy-rules
          :rules="[ val => val && val !== '' || 'Preencha o email']"
        />

        <div class="column items-center">
          <q-btn class="btnAmber q-mt-md sizeBtn6" type="text" rounded
            @click="sendEmail">Enviar</q-btn>
        </div>

        <div class="q-ma-lg row justify-center">
          <a class="q-mt-xs">Ou volte para</a>
          <q-btn class="column items-center" type="text" flat
            @click="login">Entrar</q-btn>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'ForgotPasswordComponent',

  data() {
    return {
      email: '',
      btnForgotPassword: false,
    };
  },

  methods: {

    sendEmail() {
      console.log('Função sendEmail', this.email);
    },

    login() {
      this.$emit('loginEmit', this.btnForgotPassword);
    },

  },
};
</script>
