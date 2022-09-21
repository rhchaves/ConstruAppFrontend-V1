<template>
  <div>
    <header class="mdn-Header mdn-Header--simple">
      <div class="mdn-Container">
        <div class="mdn-Header--simple-content">
          <router-link to="/">
            <img src="https://mondrian.claro.com.br/brands/horizontal/inverse/claro.svg" />
          </router-link>
        </div>
      </div>
    </header>

    <section class="login-body">
      <div class="container">
        <div
          class="d-flex justify-content-center align-items-center"
          style="min-height: 150px"
        >
          <FormLoginComponent />
        </div>
      </div>
    </section>

    <footer class="mdn-Footer mdn-Footer--simple mdn-Footer--signature">
      <div class="mdn-Container">
        <div class="mdn-Footer-content">
          <div class="mdn-Footer-disclaimer">
            <p class="mdn-Text mdn-Text--caption mdn-Text--inverse">
              <strong>© 2021 Claro. Todos os direitos reservados.</strong>
            </p>
          </div>
          <div class="mdn-Footer-logo">
            <img class="mdn-Footer-logo-image" src="src/assets/logo-sgp-branco.svg" alt="">
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import FormLoginComponent from './FormLoginComponent.vue';

export default {
  name: 'LoginPage',
  components: {
    FormLoginComponent,
  },
};
</script>
