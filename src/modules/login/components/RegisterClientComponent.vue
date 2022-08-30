<template>
  <q-page class="window-height window-width row justify-center items-center">
    <q-card>
      <q-card-section>
        <!-- Bloco de inputs de dados do cliente -->
        <q-input
          autofocus
          outlined
          v-model="client.name"
          type="text"
          label="Nome completo"
          :rules="[val => !! val || 'Campo obrigatório']"
        />
        <!-- <q-input
          outlined
          v-model="client.nameLogin"
          type="text"
          label="Nome de login"
          :rules="[val => !! val || 'Campo obrigatório']"
        /> -->
        <q-input
          outlined
          v-model="client.email"
          type="email"
          label="E-mail"
          :rules="[val => !! val || 'Campo obrigatório']"
        />
        <q-input
          outlined
          v-model="client.cpf"
          type="text"
          label="CPF"
          mask="###.###.###-##"
          :rules="[val => !! val || 'Campo obrigatório']"
        />
        <q-input
          outlined
          v-model="client.phone"
          type="text"
          label="Celular"
          mask="(##) #####-####"
          :rules="[val => !! val || 'Campo obrigatório']"
        />
        <q-input
          outlined
          v-model="client.cep"
          type="text"
          label="CEP"
          mask="#####-###"
          unmasked-value
          @blur="searchCep"
          :rules="[val => !! val || 'Campo obrigatório']"
        />
        <div v-if="hasCep">
          <q-input
            outlined
            v-model="client.street"
            type="text"
            label="Rua"
            :rules="[val => !! val || 'Campo obrigatório']"
          />
          <q-input
            outlined
            v-model="client.number"
            type="text"
            label="Número"
            id="clientNumber"
            :rules="[val => !! val || 'Campo obrigatório']"
          />
          <q-input
            outlined
            v-model="client.complement"
            type="text"
            label="Complemento"
          />
          <q-input
            outlined
            v-model="client.district"
            type="text"
            label="Bairro"
            class="q-mt-md"
            :rules="[val => !! val || 'Campo obrigatório']"
          />
          <q-input
            outlined
            v-model="client.city"
            type="text"
            label="Cidade"
            disable
            :rules="[val => !! val || 'Campo obrigatório']"
          />
          <q-input
            outlined
            v-model="client.state"
            type="text"
            label="Estado"
            disable
            :rules="[val => !! val || 'Campo obrigatório']"
          />
        </div>
        <q-input
          outlined
          v-model="client.password"
          :type="isPwd ? 'password' : 'text'"
          label="Senha"
          :rules="[val => !! val || 'Campo obrigatório']"
        >
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>
        <q-input
          outlined
          v-model="client.confirmPassword"
          :type="isPwd ? 'password' : 'text'"
          label="Confirmar senha"
          :rules="[val => !! val || 'Campo obrigatório']"
        />
        <!-- Fim do Bloco de inputs de dados do cliente -->

      </q-card-section>

      <q-card-section>

          <!-- Botão para confirmar dados -->
        <q-btn class="btnCancel" label="Voltar" rounded
          @click="cancelNewAccount"/>

        <!-- Botão para confirmar dados -->
        <q-btn class="btnAmber" label="Confirmar" rounded
          @click="confirmNewAccount"/>

          <!-- Botão para excluir conta (visivel somente para atualização dos dados) -->
        <q-btn class="btnCancel" label="Excluir Conta" rounded
          @click="deleteClient" v-if="alterarDados"/>

      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';
import Swal from 'sweetalert2';

export default {
  name: 'RegisterClientComponent',

  data() {
    return {
      client: {
        name: '',
        // nameLogin: '',
        password: '',
        confirmPassword: '',
        cpf: '',
        email: '',
        phone: '',

        cep: '',
        street: '',
        number: '',
        complement: '',
        district: '',
        city: '',
        state: '',

        // address: {
        //   cep: '',
        //   street: '',
        //   number: '',
        //   complement: '',
        //   district: '',
        //   city: '',
        //   state: '',
        // },

      },
      isPwd: true,
      hasCep: false,

      alterarDados: false,
    };
  },

  updated() {
    // this.fillAddress();
  },

  computed: {
    ...mapGetters('deliveryAddress', ['getSearchedAddress']),

  },

  methods: {
    ...mapActions('deliveryAddress', ['searchAddress']),
    ...mapActions('login', ['createAccountClient']),

    confirmNewAccount() {
      // if (this.client.confirmPassword.length) {
      console.log('this.client', this.client);
      this.createAccountClient(this.client);
      // }
      // console.log('Preencha os dados');
    },

    deleteClient() {
      console.log('Confirmou exclusão');
    },

    searchCep() {
      if (this.client.cep.length === 8) {
      // if (this.client.address.cep.length === 8) {
        this.searchAddress(this.client.cep);
        // this.searchAddress(this.client.address.cep);
        this.hasCep = true;
        setTimeout(() => {
          this.fillAddress();
        }, 50);
      } else {
        this.msgCepFill();
      }
    },
    fillAddress() {
      const item = this.getSearchedAddress;
      this.client.street = item.logradouro;
      this.client.district = item.bairro;
      this.client.city = item.localidade;
      this.client.state = item.uf;

      // this.client.address.street = item.logradouro;
      // this.client.address.district = item.bairro;
      // this.client.address.city = item.localidade;
      // this.client.address.state = item.uf;
    },

    cancelNewAccount() {
      this.$emit('backToLoginEmit');
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
