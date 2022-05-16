<template>
  <q-page class="window-height window-width row justify-center items-center">
      <div class="column">
        <div class="row">
          <!-- <q-dialog v-model="searchCep" persistent> -->

          <q-card square bordered class="q-pa-lg shadow-1">
            <q-card-section class="q-gutter-md">
                <q-btn class="" type="text" icon="close" flat round v-close-popup
              @click="close"></q-btn>
                <!-- inputs de entrada de dados -->
                <q-input
                  autofocus
                  outlined
                  v-model="address.cep"
                  type="text"
                  label="Digite o cep"
                  mask="#####-###"
                  unmasked-value
                  style="max-width: 200px"
                  :rules="[val => !! val || 'Campo obrigatório']"
                />
                <!-- link para site do correios -->
                <a href="https://buscacepinter.correios.com.br/app/endereco/index.php"
                  target="_blank">Não sei meu cep!
                </a>
                <!-- botão de pesquisar CEP -->
                <q-btn
                  class="btnAmber"
                  label="Preencher com CEP"
                  rounded
                  no-caps
                  @click="searchForCep()"/>

                <q-input outlined v-model="address.street" type="text" label="Rua"
                  :rules="[val => !! val || 'Campo obrigatório']"/>
                <q-input outlined v-model="address.number" type="text" label="Número"
                  :rules="[val => !! val || 'Campo obrigatório']"/>
                <q-input outlined v-model="address.complement" type="text" label="Complemento" />
                <q-input outlined v-model="address.district" type="text" label="Bairro"
                  :rules="[val => !! val || 'Campo obrigatório']"/>
                <q-input outlined v-model="address.city" type="text" label="Cidade" readonly
                  :rules="[val => !! val || 'Campo obrigatório']"/>
                <q-input outlined v-model="address.state" type="text" label="UF" readonly
                  :rules="[val => !! val || 'Campo obrigatório']"/>
            </q-card-section>
            <q-card-actions class="q-px-md">
              <q-btn class="btnAmber" label="Confirmar" rounded
                @click="confirm"/>
            </q-card-actions>

          </q-card>
          <!-- </q-dialog> -->
        </div>
      </div>
    </q-page>

</template>

<script>

import { mapActions, mapGetters } from 'vuex';
import Swal from 'sweetalert2';

export default {
  name: 'SearchAddress',

  data() {
    return {
      // Objeto endereço
      address: {
        cep: '',
        street: '',
        number: '',
        complement: '',
        district: '',
        city: '',
        state: '',
      },
      searchCep: true,
    };
  },

  computed: {
    ...mapGetters('addressPage', ['getUserAddress']),
  },

  methods: {

    ...mapActions('addressPage', ['searchAddress', 'saveAddress']),

    // função para procurar o cep informado
    searchForCep() {
      if (this.address.cep.length === 8) {
        this.searchAddress(this.address.cep);
        const data = this.getUserAddress;

        this.address.street = data.logradouro;
        this.address.district = data.bairro;
        this.address.city = data.localidade;
        this.address.state = data.uf;
      }
    },

    confirmedAddress() {
      if (this.address.city.length) {
        this.$router.push('/main-page');
        this.saveAddress(this.address);
      } else {
        this.$router.push('/');
      }
    },

    close() {
      this.$emit('close');
      console.log('fechou no dialogo');
    },

    confirm() {
      if (this.address.number.length && this.address.city.length) {
        this.$emit('close');
        this.confirmedAddress();
        console.log('fechou no dialogo');
      } else {
        this.msgFillCepNumber();
      }
    },

    msgFillCepNumber() {
      Swal.fire(
        'Atenção!',
        'Preencha o CEP e o Número',
        'warning',
      );
    },

    msgCepNotfound() {
      Swal.fire(
        'Atenção!',
        `O CEP ${this.address.cep} não foi encontrado`,
        'error',
      );
    },

    msgCepFill() {
      Swal.fire(
        'Atenção!',
        'Preencha o CEP corretamente',
        'warning',
      );
    },

  },
};
</script>
