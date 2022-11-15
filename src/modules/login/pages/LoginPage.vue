<template>
  <q-page class="row justify-center items-center">

    <div
      v-if="!forgotPassword && !newAccount"
      class="row justify-center q-ma-lg">
      <q-form
        method="POST"
        action=""
        @submit.prevent="loginAccount()"
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
          :rules="[ val => val !== null && val != '' && val.length > 5 ||
          'Preencha o email corretamente']"
        />

        <q-input
          outlined
          v-model="user.password"
          :type="isPwd ? 'password' : 'text'"
          label="Senha"
          lazy-rules
          :rules="[ val => val !== null && val != '' && val.length >= 3 ||
          'Preencha a senha corretamente']"
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
      </q-form>
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
      userTypeEnum: {
        admin: 1,
        seller: 2,
        client: 3,
      },
    };
  },

  computed: {
    ...mapGetters('login', ['getLogado', 'getUser']),
  },

  methods: {

    ...mapActions('login', ['login']),

    async loginAccount() {
      await this.login(this.user);

      // console.log(this.getLogado, this.getUser);

      if (this.getLogado) {
        if (this.getUser.userType === this.userTypeEnum.admin) {
          this.$router.push('administrator');
        }

        if (this.getUser.userType === this.userTypeEnum.seller) {
          this.$router.push('seller');
        }

        if (this.getUser.userType === this.userTypeEnum.client) {
          this.$router.push('main');
        }
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
