<template>
  <q-page class="window-height window-width row justify-center items-center">
      <div class="column">
        <div class="row">
          <h5>Esta é a página de endereço de entrega</h5>
        </div>
        <div class="row">
          <q-card square bordered class="q-pa-lg shadow-1">
            <q-card-section>
              <q-form class="q-gutter-md">
                <!-- inputs de entrada de dados -->
                <q-input
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
                  label="Pesquisar por CEP"
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
              </q-form>
            </q-card-section>
            <q-card-actions class="q-px-md">
              <q-btn class="btnAmber" label="Confirmar" rounded @click="confirmAddress()"/>
            </q-card-actions>

          </q-card>
        </div>
      </div>
    </q-page>

</template>

<script>

import axios from 'axios';
// import { mapActions } from 'vuex';
import Swal from 'sweetalert2';

export default {
  name: 'AddressPage',

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
    };
  },

  methods: {

    // ...mapActions('addressPage', ['searchCep']),

    confirmAddress() {
      if (this.address.cep.length !== 8 || this.address.number === '') {
        Swal.fire(
          'Atenção!',
          'Preencha os campos',
          'warning',
        );
      } else {
        console.log('Confirmou endereço:', this.address);
      }
    },

    // função para procurar o cep informado
    searchForCep() {
      let data = {};
      // this.searchCep(this.cep);

      // requisição via axios
      if (this.address.cep.length === 8) {
        axios.get(`https://viacep.com.br/ws/${this.address.cep}/json`).then((response) => {
          console.log('Pesquisou o cep:', this.address.cep);
          console.log(response.data);
          // const data  = response.data;
          data = response.data;

          // caso não haja erro preenche os campos
          if (!data.erro) {
            this.address.street = data.logradouro;
            this.address.district = data.localidade;
            this.address.city = data.localidade;
            this.address.state = data.uf;
          }
          return response;

        // caso ocorra algum erro entra no catch
        }).catch((error) => {
          console.log('Entrou no catch, erro:', error);
        });
      } else {
        // msgCepFill();
        console.log('Preencha o cep');
        Swal.fire(
          'Atenção!',
          'Preencha o CEP corretamente',
          'warning',
        );
      }
    },
  },
};
</script>

<style>
/* .q-card {
  width: 360px;
} */
</style>
