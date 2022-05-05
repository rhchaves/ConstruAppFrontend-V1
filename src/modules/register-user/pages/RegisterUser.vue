<template>
  <q-page class="">

    <router-link to="/main-page" class="router-link">
      <q-btn
        class="q-ma-sm"
        color="black"
        rounded
        no-caps
        size="lg"
        padding="sm"
      >
        <span class="text-weight-light font-size-18"> Página principal </span>
      </q-btn>
    </router-link>

    <h3>Página de Cadastro de Usuário</h3>

    <div class="q-pa-md">
      <div class="q-gutter-md" style="max-width: 300px">
        <q-input standout label="Nome" />
      </div>
    </div>

  </q-page>
</template>

<script>
export default {
  name: 'RegisterUser',
};

</script>
