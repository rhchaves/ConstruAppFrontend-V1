<template>
  <q-page>
    <div class="center-screen" style=" max-width: 1400px">

      <section class="center-screen">
        <router-link to="/admin-page" class="router-link" >
          <q-btn
            class="q-ma-sm"
            color="black"
            rounded
            no-caps
            size="lg"
            padding="sm"
          >
            <span class="text-weight-light font-size-18"> Página de Admin </span>
          </q-btn>
        </router-link>

        <router-link to="/product-page" class="router-link">
          <q-btn
            class="q-ma-sm"
            color="black"
            rounded
            no-caps
            size="lg"
            padding="sm"
          >
            <span class="text-weight-light font-size-18"> Página de Produto </span>
          </q-btn>
        </router-link>

        <router-link to="/register-product" class="router-link">
          <q-btn
            class="q-ma-sm"
            color="black"
            rounded
            no-caps
            size="lg"
            padding="sm"
          >
            <span class="text-weight-light font-size-18"> Cadastrar Produto </span>
          </q-btn>
        </router-link>

        <router-link to="/register-user" class="router-link">
          <q-btn
            class="q-ma-sm"
            color="black"
            rounded
            no-caps
            size="lg"
            padding="sm"
          >
            <span class="text-weight-light font-size-18"> Cadastrar Usuário </span>
          </q-btn>
        </router-link>

      </section>

      <section class="center-screen">

        <h3>Página de Principal</h3>

        <img
          alt="Quasar logo"
          src="~assets/quasar-logo-vertical.svg"
          style="width: 200px; height: 200px"
        >

      </section>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'MainPage',
};

</script>
