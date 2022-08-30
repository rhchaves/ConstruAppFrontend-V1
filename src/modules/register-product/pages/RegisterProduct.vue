<template>
  <q-page class="">

    <router-link to="/main" class="router-link">
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

    <h3>Página de Cadastro de Produto</h3>

  </q-page>
</template>

<script>
export default {
  name: 'RegisterProduct',
};

</script>
