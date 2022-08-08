<template>
  <q-page class="row justify-center items-center">

    <div
      v-if="!forgotPassword && !newAccount"
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
          @click="forgotPassword = true">Esqueci a senha</q-btn>

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
            @click="createAccount">Criar Conta</q-btn>
        </div>
      </div>
    </div>

    <ForgotPasswordComponent
      v-if="forgotPassword"
      @loginEmit="backToLogin()"
    />

    <RegisterClientComponent
      v-if="newAccount"
      @backToLoginEmit="backToLogin()"
    />
  </q-page>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';
import ForgotPasswordComponent from '../components/ForgotPassawordComponent.vue';
import RegisterClientComponent from '../components/RegisterClientComponent.vue';

export default {
  name: 'LoginPage',

  components: {
    ForgotPasswordComponent,
    RegisterClientComponent,
  },

  data() {
    return {
      user: {
        email: '',
        password: '',
      },
      isPwd: true,
      forgotPassword: false,
      newAccount: false,
    };
  },

  methods: {

    ...mapActions('loginPage', ['login']),
    ...mapGetters('loginPage', ['getLogado', 'getUser']),

    loginAccount() {
      if (this.user.email !== '' && this.user.password !== '') {
        console.log('logado');
        this.login(this.user);
        if (this.user.email === '123' && this.user.password === '123') {
          this.$router.push('admin-page');
        } else {
          this.$router.push('main-page');
        }
      } else {
        console.log('Preencha os campos');
      }
    },

    backToLogin() {
      this.forgotPassword = false;
      this.newAccount = false;
    },

    createAccount() {
      this.newAccount = true;
    },

  },
};

</script>
