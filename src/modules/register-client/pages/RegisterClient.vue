<template>
  <q-page class="window-height window-width row justify-center items-center">
    <q-card>
      <q-card-section>
        <!-- Bloco de inputs de dados do cliente -->
        <q-input
          autofocus
          outlined
          v-model="client.nameClient"
          type="text"
          label="Nome completo"
          :rules="[val => !! val || 'Campo obrigatório']"
        />
        <q-input
          outlined
          v-model="client.emailClient"
          type="email"
          label="E-mail"
          :rules="[val => !! val || 'Campo obrigatório']"
        />
        <q-input
          outlined
          v-model="client.cpfClient"
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
          v-model="client.address.cep"
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
            v-model="client.address.street"
            type="text"
            label="Rua"
            :rules="[val => !! val || 'Campo obrigatório']"
          />
          <q-input
            outlined
            v-model="client.address.number"
            type="text"
            label="Número"
            id="clientNumber"
            :rules="[val => !! val || 'Campo obrigatório']"
          />
          <q-input
            outlined
            v-model="client.address.complement"
            type="text"
            label="Complemento"
          />
          <q-input
            outlined
            v-model="client.address.district"
            type="text"
            label="Bairro"
            class="q-mt-md"
            :rules="[val => !! val || 'Campo obrigatório']"
          />
          <q-input
            outlined
            v-model="client.address.city"
            type="text"
            label="Cidade"
            disable
            :rules="[val => !! val || 'Campo obrigatório']"
          />
          <q-input
            outlined
            v-model="client.address.state"
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
        <q-btn class="btnAmber" label="Confirmar" rounded
          @click="confirm"/>

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
  name: 'RegisterClient',

  data() {
    return {
      client: {
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

    confirm() {
      console.log('Confirmou cadastro');
      console.log(this.client);
    },

    deleteClient() {
      console.log('Confirmou exclusão');
    },

    searchCep() {
      if (this.client.address.cep.length === 8) {
        this.searchAddress(this.client.address.cep);
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
      this.client.address.street = item.logradouro;
      this.client.address.district = item.bairro;
      this.client.address.city = item.localidade;
      this.client.address.state = item.uf;
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
