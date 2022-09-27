<template>
  <q-page class="row justify-center items-center">

    <div
      v-if="!forgotPassword && !newAccount"
      class="row justify-center q-ma-lg">
      <form
        method="POST"
        action=""
        @submit.prevent="loginAccount($event)"
        class="column size-custom-450"
      >
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
          >Login</q-btn>
          <!-- @click="loginAccount" -->
          <q-btn class="btnAmber q-mt-md sizeBtn6" type="text" rounded v-close-popup
            @click="createAccount">Criar Conta</q-btn>
        </div>
      </form>
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

    ...mapActions('login', ['login']),
    ...mapGetters('login', ['getLogado', 'getUser']),

    loginAccount(e) {
      if (this.user.email !== '' && this.user.password !== '') {
        console.log('Chegamos', e);
        // this.login(this.user);

        const url = 'http://localhost:8000/api/login';
        const config = {
          method: 'post',
          body: new URLSearchParams({
            email: this.user.email,
            password: this.user.password,
          }),
        };

        fetch(url, config)
          .then((response) => response.json())
          .then((data) => {
            if (data.token) {
              document.cookie = `token=${data.token},SameSite=Lax`;
              console.log(data.token);
            }
            // segue con o envio do formulário
            // e.target.submit();
          });

      //   console.log('logado');
      //   this.login(this.user);
      //   if (this.user.email === 'rodolfo' && this.user.password === '123') {
      //     this.$router.push('administrator');
      //   } else {
      //     this.$router.push('main');
      //   }
      // } else {
      //   console.log('Preencha os campos');
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
