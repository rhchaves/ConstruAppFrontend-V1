<template>
  <q-page class="row justify-center items-center">

    <div
      v-if="!btnForgotPassword"
      class="row justify-center q-ma-lg">
      <div class="column size-custom-450">
        <p class="text-h6 text-center center-screen size-custom-300 q-pb-lg"
        >SUA CONTA PARA TUDO DA CONSTRUAPP</p>
        <q-input
          outlined
          v-model="user.email"
          type="text"
          label="Email"
          lazy-rules
          :rules="[ val => val && val !== '' || 'Preencha o email']"
        />

        <q-input
          outlined
          v-model="user.password"
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

        <q-btn class="column items-center sizeBtn4" type="text" flat
          @click="btnForgotPassword = true">Esqueci a senha</q-btn>

        <p class="text-center q-ma-lg"
        >
          Ao fazer login, você concorda com a
          <a href="">Política de privacidade</a> e com os
          <a href="">Termos de uso</a> do ConstruApp.com.br
        </p>

        <div class="column items-center">
          <q-btn class="btnAmber q-mt-md sizeBtn6" type="text" rounded
            @click="loginAccount">Login</q-btn>
          <q-btn class="btnAmber q-mt-md sizeBtn6" type="text" rounded v-close-popup
            to="register-client">Criar Conta</q-btn>
        </div>
      </div>
    </div>

    <ForgotPasswordPage
      v-if="btnForgotPassword"
      @loginEmit="loginEmit()"
    />
  </q-page>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';
import ForgotPasswordPage from '../components/ForgotPassawordPage.vue';

export default {
  name: 'LoginPage',

  components: {
    ForgotPasswordPage,
  },

  data() {
    return {
      user: {
        email: '',
        password: '',
      },
      isPwd: true,
      btnForgotPassword: false,
    };
  },

  methods: {

    ...mapActions('loginPage', ['login']),
    ...mapGetters('loginPage', ['getLogado', 'getUser']),

    loginAccount() {
      if (this.user.email !== '' && this.user.password !== '') {
        console.log('logado');
        this.login(this.user);
        if (this.user.email === 'admin' && this.user.password === 'admin') {
          this.$router.push('admin-page');
        } else {
          this.$router.push('main-page');
        }
      } else {
        console.log('Preencha os campos');
      }
    },

    loginEmit() {
      this.btnForgotPassword = false;
    },

  },
};

</script>
