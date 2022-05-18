<template>
  <q-page class="window-height window-width row justify-center items-center">
    <q-card>
      <q-card-section>
        <q-input
          autofocus
          outlined
          v-model="nameClient"
          type="text"
          label="Nome completo"
        />
        <q-input
          outlined
          v-model="emailClient"
          type="email"
          label="E-mail"
        />
        <q-input
          outlined
          v-model="cpfClient"
          type="text"
          label="CPF"
          mask="###.###.###-##"
        />
        <q-input
          outlined
          v-model="phone"
          type="text"
          label="Celular"
          mask="(##) #####-####"
        />
        <q-input
          outlined
          v-model="address.cep"
          type="text"
          label="CEP"
          mask="#####-###"
          unmasked-value
          @blur="searchCep"
        />
        <q-input
          outlined
          v-model="address.street"
          type="text"
          label="Rua"
        />
        <q-input
          outlined
          v-model="address.number"
          type="text"
          label="Número"
        />
        <q-input
          outlined
          v-model="address.complement"
          type="text"
          label="Complemento"
        />
        <q-input
          outlined
          v-model="address.district"
          type="text"
          label="Bairro"
        />
        <q-input
          outlined
          v-model="address.city"
          type="text"
          label="Cidade"
          readonly
        />
        <q-input
          outlined
          v-model="address.state"
          type="text"
          label="Estado"
          readonly
        />
        <q-input
          outlined
          v-model="password"
          :type="isPwd ? 'password' : 'text'"
          label="Senha"
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
          v-model="confirmPassword"
          :type="isPwd ? 'password' : 'text'"
          label="Confirmar senha"
        />
        <!-- {{getSearchedAddress}} -->
      </q-card-section>

      <q-card-section>
        <q-btn class="btnAmber" label="Confirmar" rounded
          @click="confirm"/>
        <q-btn class="btnCancel" label="Excluir Conta" rounded
          @click="deleteUser"/>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'RegisterUser',

  data() {
    return {
      nameClient: '',
      password: '',
      confirmPassword: '',
      cpfClient: '',
      emailClient: '',
      phone: '',
      address: {
        cep: '',
        street: '',
        number: '',
        complement: '',
        district: '',
        city: '',
        state: '',
      },
      isPwd: true,
    };
  },

  updated() {
    // this.fillAddress();
  },

  computed: {
    ...mapGetters('addressPage', ['getSearchedAddress']),

  },

  methods: {
    ...mapActions('addressPage', ['searchAddress']),

    confirm() {
      console.log('Confirmou cadastro');
    },

    deleteUser() {
      console.log('Confirmou exclusão');
    },

    searchCep() {
      this.searchAddress(this.address.cep);
      setTimeout(() => {
        this.fillAddress();
      }, 50);
    },
    fillAddress() {
      const item = this.getSearchedAddress;
      this.address.street = item.logradouro;
      this.address.district = item.bairro;
      this.address.city = item.localidade;
      this.address.state = item.uf;
    },

  },
};

</script>
