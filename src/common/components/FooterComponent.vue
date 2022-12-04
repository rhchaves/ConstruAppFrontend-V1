<template>
  <div class="bg-grey row justify-center">

    <div>
      <q-img style="width: 150px" :src="urlLogo"></q-img>
    </div>

    <div class="q-ml-sm column items-center">
      <span>Sobre o ConstruApp</span>
      <a href="">Precisa de Ajuda?</a>
      <a href="">Trabalhe conosco</a>
      <a href="">Pagamento na Entrega</a>
    </div>

    <div class="q-ml-sm column items-center">
      <span>Parcerias</span>
      <a href="/register-seller">Quero ser um parceiro</a>
    </div>

  </div>
</template>

<script>
export default {
  name: 'FooterComponent',

  data() {
    return {
      urlLogo: 'logo-contruApp-v1.png',
    };
  },
};
</script>
