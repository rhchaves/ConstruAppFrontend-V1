<template>
  <!-- <q-page class="window-height window-width row justify-center items-center"> -->
      <!-- <div class="colun"> -->
        <!-- <div class="ro"> -->
          <q-card square bordered class="q-pl-lg q-pr-lg q-pb-lg shadow-1">

            <q-card-section class="q-gutter-md">
              <div class="row justify-end">
                <q-btn
                  icon="close"
                  flat
                  round
                  v-close-popup
                  @click="close"
                ></q-btn>
              </div>

              <div class="row justify-center">
                <p class="title-custom text-center size-custom-400">Endereço de Entrega</p>
              </div>

              <!-- inputs de entrada de dados -->
              <div class="row justify-between">
                <q-input
                  class="size-custom-300"
                  autofocus
                  outlined
                  v-model="address.cep"
                  type="text"
                  label="Digite o cep"
                  mask="#####-###"
                  unmasked-value
                  :rules="[val => !! val || 'Campo obrigatório']"
                />

                <!-- botão de pesquisar CEP -->
                <q-btn
                  class="btnAmber q-ml-xl q-mt-sm "
                  label="Preencher com CEP"
                  rounded
                  no-caps
                  @click="searchForCep()"
                  style="height: 36px"
                />
              </div>
              <!-- link para site do correios -->
              <div class="q-ml-lg">

                <a href="https://buscacepinter.correios.com.br/app/endereco/index.php"
                  target="_blank"
                >Não sei meu cep!
                </a>

              </div>

              <q-input outlined v-model="address.logradouro" type="text" label="Rua"
                :rules="[val => !! val || 'Campo obrigatório']"/>

              <div class="row">
                <q-input
                  class="size-custom-110 q-mr-md"
                  outlined
                  v-model="address.numero"
                  type="text"
                  label="Número"
                  :rules="[val => !! val || 'Campo obrigatório']"
                />
                <q-input
                  class="size-custom-410"
                  outlined
                  v-model="address.complemento"
                  type="text"
                  label="complemento"
                />
              </div>

              <div class="row">
                <q-input
                  class="size-custom-250 q-mr-md"
                  outlined
                  v-model="address.bairro"
                  type="text"
                  label="Bairro"
                  :rules="[val => !! val || 'Campo obrigatório']"
                />
                <q-input
                  class="q-mr-md"
                  outlined
                  v-model="address.localidade"
                  type="text"
                  label="Cidade"
                  readonly
                  :rules="[val => !! val || 'Campo obrigatório']"
                />
                <q-input
                  class="q-mr-md size-custom-50"
                  outlined
                  v-model="address.uf"
                  type="text"
                  label="UF"
                  readonly
                  :rules="[val => !! val || 'Campo obrigatório']"
                />
              </div>
            </q-card-section>
            <q-card-actions class="q-px-md column items-center">
                <div class="col">
                  <q-btn class="btnAmber sizeBtn5"
                  label="Confirmar" rounded @click="confirm"/>
                </div>
            </q-card-actions>

          </q-card>
        <!-- </div> -->
      <!-- </div> -->
    <!-- </q-page> -->

</template>

<script>

import { mapActions, mapGetters } from 'vuex';
import Swal from 'sweetalert2';

export default {
  name: 'SearchAddress',

  data() {
    return {
      // Objeto endereço que recebe dados da API de busca de cep
      address: {
        cep: '',
        logradouro: '',
        numero: '',
        complemento: '',
        bairro: '',
        localidade: '',
        uf: '',
      },
    };
  },

  computed: {
    ...mapGetters('deliveryAddress', ['getUserAddress', 'getSearchedAddress']),
  },

  methods: {

    ...mapActions('deliveryAddress', ['searchAddress', 'saveAddress']),

    // função para procurar o cep informado
    async searchForCep() {
      if (this.address.cep.length === 8) {
        this.searchAddress(this.address.cep);
        setTimeout(() => {
          this.address = this.getSearchedAddress;
        }, 1000);
      }
    },

    confirmedAddress() {
      if (this.address.localidade.length) {
        this.$router.push('/main');
        this.saveAddress(this.address);
      } else {
        this.$router.push('/');
      }
    },

    close() {
      this.$emit('close');
    },

    confirm() {
      if (this.address.numero.length && this.address.localidade.length) {
        this.$emit('close');
        this.confirmedAddress();
      } else {
        this.msgFillCepNumber();
      }
    },

    msgFillCepNumber() {
      Swal.fire({
        icon: 'warning',
        title: 'Atenção!',
        text: 'Preencha o CEP e o Número',
        showConfirmButton: false,
        timer: 3000,
      });
    },

    msgCepNotfound() {
      Swal.fire({
        icon: 'error',
        title: 'Atenção!',
        text: `O CEP ${this.address.cep} não foi encontrado`,
        showConfirmButton: false,
        timer: 3000,
      });
    },

    msgCepFill() {
      Swal.fire({
        icon: 'warning',
        title: 'Atenção!',
        text: 'Preencha o CEP',
        showConfirmButton: false,
        timer: 3000,
      });
    },

  },
};
</script>
