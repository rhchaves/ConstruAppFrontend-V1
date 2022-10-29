<template>
  <q-page class="window-height window-width row justify-center items-center">
      <section class="q-ma-lg bg-re ">
        <div class="" v-if="!changeSearchAddress">
          <!-- inputs de entrada de dados -->
          <q-input
            outlined
            type="text"
            label="Inserir o cep para ver os produtos"
            mask="#####-###"
            unmasked-value
            @focusin="open"
            style="width: 350px"

          />
          <!-- link para site do correios -->
          <div class="q-ma-md">
            <a
              href="https://buscacepinter.correios.com.br/app/endereco/index.php"
              target="_blank"
            >
              Não sei meu cep
            </a>
          </div>

        </div>
      </section>

      <SearchAddress
        v-if="changeSearchAddress"
        @close="close"
      />
    </q-page>

</template>

<script>

import SearchAddress from 'src/modules/delivery-address/components/SearchAddress.vue';

export default {
  name: 'DeliveryAddressPage',

  components: {
    SearchAddress,
  },

  data() {
    return {
      // Objeto endereço
      address: {
        cep: '',
      },
      changeSearchAddress: false,
    };
  },

  methods: {

    // ...mapActions('deliveryAddress', ['searchCep']),

    open() {
      this.changeSearchAddress = true;
      console.log('Abriu');
    },

    close() {
      this.changeSearchAddress = false;
      console.log('fechou na página');
    },
  },
};
</script>
