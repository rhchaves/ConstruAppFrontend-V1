<template>
  <q-page>

    <CategoriesComponent />
    <AddressPage />

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

        <div class="q-pa-md">
          <q-form
            @submit="onSubmit"
            class="q-gutter-md"
          >
            <q-input
              outlined
              v-model="search"
              label="Digite o cep"
              mask="#####-###"
              unmasked-value
              style="max-width: 200px"
              :rules="[val => !! val || 'Field is required']"
            >
            </q-input>
            <q-btn rounded color="black" label="Buscar" type="submit"/>
          </q-form>
        </div>

      </section>
    </div>
  </q-page>
</template>

<script>

import CategoriesComponent from 'src/components/CategoriesComponent.vue';
import AddressPage from 'src/modules/address-page/pages/AddressPage.vue';
import { mapActions } from 'vuex';

export default {
  name: 'MainPage',

  components: {
    CategoriesComponent,
    AddressPage,
  },

  data() {
    return {
      search: '',
    };
  },

  methods: {
    ...mapActions('mainPage', ['listCep']),

    onSubmit() {
      console.log('Clicou em buscar:', this.search);
      this.listCep(this.search);
    },
  },
};

</script>
