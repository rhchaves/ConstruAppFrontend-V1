<template>
  <div>
    <div class="container-formulario-login mdn-Modal-content" >

          <img class="" style="margin: 20px;" width="278px"
          src="assets/logo-sgp-colorido-slogan.svg" alt="Logo da Claro">

          <div class="conatainer-formulario py-2">

            <form @submit.prevent="entrarNoSistema()">

              <div class="hidden">
                <input type="password"/>
              </div>

              <div class="mb-4">
                <SGPFormInputComponent
                    type="text"
                    :name="'login'"
                    v-model="dadosLogin.login"
                    :placeholder="'Usuário'"
                    data-vv-as="Usuário"
                    v-validate="'required|min:4'"
                    :error="validationErrors.first('login')"
                    autocomplete="off"
                />
              </div>

              <div class="mdn-Input">
                <div>
                  <input
                    ref="password"
                    class="mdn-Input-field"
                    type="password"
                    name="password"
                    data-mdn-type="password"
                    v-model="dadosLogin.password"
                    placeholder="Senha"
                    v-validate="'required|min:6'"
                    autocomplete="off"
                    ata-password-autocomplete="off"
                    readonly
                    onfocus="this.removeAttribute('readonly');"
                  >

                  <button type="button" class="mdn-Input-action"
                  data-mdn-action="reveal-password" @click="mostrarSenha()">
                    <i aria-label="Ocultar senha" class="mdn-Icon-ocultar mdn-Icon--md"></i>
                    <i aria-label="Exibir senha" class="mdn-Icon-exibir mdn-Icon--md"></i>
                  </button>
                  <span class="invalid-feedback">{{ validationErrors.first('password') }}</span>
                </div>

              </div>

              <div class="mt-4">

                <div class="mdn-u-marginBottom--sm">

                  <div class="mdn-Checkbox" aria-label="checkbox">
                    <input class="mdn-Checkbox-input" id="lembrar"
                    type="checkbox" aria-label="Label" v-model="dadosLogin.lembrar"/>
                    <label class="mdn-Checkbox-label" for="lembrar"></label>
                    <div class="mdn-Checkbox-text" for="lembrar"> Lembrar usuário</div>
                  </div>

                </div>

              </div>

              <div class="mt-4">
                <button class="" :disabled="logando" type="submit">
                  <span v-if="!logando">Entrar no sistema</span>
                  <b-spinner v-else label=""></b-spinner>
                </button>
              </div>

            </form>

          </div>
      </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import criarToast from 'src/common/boot/ToastsHandler';

export default {
  name: 'FormLoginComponent',

  data() {
    return {
      dadosLogin: {
        login: '',
        password: '',
        lembrar: false,
      },
    };
  },

  created() {
  },

  computed: {
    ...mapGetters('login', ['logando']),
  },

  methods: {
    ...mapActions('login', ['logarUsuario', 'deslogarUsuario']),

    mostrarSenha() {
      if (this.$refs.password.type === 'text') {
        this.$refs.password.type = 'password';
      } else {
        this.$refs.password.type = 'text';
      }
    },

    entrarNoSistema() {
      this.$validator.validateAll().then(async (result) => {
        if (result) {
          // eslint-disable-next-line
          await this.logarUsuario(this.dadosLogin)
          return;
        }

        criarToast({
          tipo: 'error',
          mensagem: 'Por favor, verifique os campos e tente novamente!',
        });
      });
    },
  },
};
</script>
