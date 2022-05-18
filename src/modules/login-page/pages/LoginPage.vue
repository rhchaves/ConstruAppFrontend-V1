<template>
  <q-page class="window-height window-width row justify-center items-center">
    <q-card class="" style="min-width: 350px; max-width: 500px">
      <q-card-section>
        <div class="text-h6 row justify-center">Entrar</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input
          autofocus
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
          type="text"
          label="Senha"
          lazy-rules
          :rules="[ val => val && val !== '' || 'Preencha a senha']"
        />
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn class="" type="text" flat
          @click="forgotPassword">Esqueci a senha</q-btn>
        <q-btn class="btnAmber" type="text" rounded
          @click="loginAccount">Login</q-btn>
        <q-btn class="btnAmber" type="text" rounded v-close-popup
          to="register-client">Criar Conta</q-btn>
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'LoginPage',

  data() {
    return {
      user: {
        email: '',
        password: '',
      },
    };
  },

  methods: {

    ...mapActions('loginPage', ['login']),
    ...mapGetters('loginPage', ['getLogado', 'getUser']),

    forgotPassword() {
      console.log('Função forgotPassword');
      console.log('getLogado', this.getLogado());
      console.log('getUser', this.getUser());
    },

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

  },
};

</script>
