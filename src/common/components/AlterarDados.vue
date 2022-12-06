<template>
  <!-- <q-page class="window-height window-width row justify-center items-center"> -->
    <q-card square bordered class="q-pl-lg q-pr-lg q-pb-lg shadow-1 q-ma-lg"
    style="width:800px"
    >
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
          <p class="title-custom text-center size-custom-400">Cadastro de usuário</p>
        </div>
        <!-- Bloco de inputs de dados do cliente -->
        <div class="row justify-between">

          <q-input
            autofocus
            outlined
            v-model="client.name"
            type="text"
            label="Nome completo"
            style="width: 350px"
            :rules="[val => !! val || 'Campo obrigatório']"
            />
          <q-input
            outlined
            v-model="client.email"
            type="email"
            label="Email"
            lazy-rules
            bottom-slots
            style="width: 350px"
            @blur="updateEmailVerification"
            :rules="[ val => !!val || val !== null && val != '' && val.length > 5 ||
              'Preencha o email corretamente']"
            />
        </div>

        <div class="row justify-between">
          <q-input
            outlined
            v-model="client.cpf"
            type="text"
            label="CPF"
            mask="###.###.###-##"
            unmasked-value
            style="width: 250px"
            :rules="[val => !! val || 'Campo obrigatório']"
          />
          <q-input
            outlined
            v-model="client.phone"
            type="text"
            label="Celular"
            style="width: 200px"
            mask="(##) #####-####"
            unmasked-value
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
            style="width: 200px"
            :rules="[val => !! val || 'Campo obrigatório']"
          />
        </div>

        <div class="row justify-between">
          <q-input
            outlined
            v-model="client.street"
            type="text"
            label="Rua"
            style="width: 300px"
            :rules="[val => !! val || 'Campo obrigatório']"
          />
          <q-input
            outlined
            v-model="client.number"
            type="text"
            label="Número"
            id="clientNumber"
            style="width: 100px"
            :rules="[val => !! val || 'Campo obrigatório']"
          />
          <q-input
            outlined
            v-model="client.complement"
            type="text"
            label="Complemento"
            style=" width: 250px "
          ></q-input>
        </div>

        <div class="row justify-between">
          <q-input
            outlined
            v-model="client.district"
            type="text"
            label="Bairro"
            style="width: 300px"
            :rules="[val => !! val || 'Campo obrigatório']"
          />
          <q-input
            outlined
            v-model="client.city"
            type="text"
            label="Cidade"
            disable
            style="width: 250px"
            :rules="[val => !! val || 'Campo obrigatório']"
          />
          <q-input
            outlined
            v-model="client.state"
            type="text"
            label="Estado"
            disable
            style="width: 100px"
            :rules="[val => !! val || 'Campo obrigatório']"
          />
        </div>

        <div class="row justify-between">
          <q-input
            outlined
            v-model="client.password"
            :type="isPwd ? 'password' : 'text'"
            label="Senha"
            style="width: 350px"
            :rules="[ val => val !== null && val != '' && val.length >= 6 ||
            'Mínimo 6 caracteres']"
          ></q-input>

          <q-input
            outlined
            v-model="client.confirmPassword"
            :type="isPwd ? 'password' : 'text'"
            label="Confirmar senha"
            style="width: 350px"
            :rules="[ val => val !== null && val != '' && val.length >= 6 ||
            'Mínimo 6 caracteres']"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
        <!-- Fim do Bloco de inputs de dados do cliente -->
        </div>
      </q-card-section>

      <q-card-section>
        <div class="row justify-around">

          <!-- Botão para confirmar dados -->
        <q-btn class="btnCancel" label="Voltar" rounded
        style="width: 200px"

          @click="cancelNewAccount"/>

        <!-- Botão para confirmar dados -->
        <q-btn class="btnAmber" label="Confirmar" rounded
        style="width: 200px"

          @click="confirmNewAccount"/>

          <!-- Botão para excluir conta (visivel somente para atualização dos dados) -->
        <q-btn class="btnCancel" label="Excluir Conta" rounded
        style="width: 200px"

          @click="deleteClient" v-if="alterarDados"/>
        </div>
      </q-card-section>
    </q-card>
  <!-- </q-page> -->
</template>

<script>

import { mapActions, mapGetters } from 'vuex';
import Swal from 'sweetalert2';

export default {
  name: 'AlterarDados',

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

    updateEmailVerification() {
      // eslint-disable-next-line
      let reg =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
      const valid = reg.test(this.client.email);

      if (!valid) {
        this.msgEmailInvalid();
      }
    },

    confirmNewAccount() {
      // if (this.client.confirmPassword.length) {
      console.log('this.client.password.length', this.client.password.length);

      if (this.client.state === '') {
        console.log('if');

        Swal.fire({
          icon: 'warning',
          title: 'Atenção!',
          text: 'Preencha o formulário',
          showConfirmButton: false,
          timer: 3000,
        });
      } else if (this.client.password !== this.client.confirmPassword) {
        Swal.fire({
          icon: 'warning',
          title: 'Atenção!',
          text: 'As senhas não conferem',
          showConfirmButton: false,
          timer: 3000,
        });
      } else if (this.client.password.length < 6) {
        Swal.fire({
          icon: 'warning',
          title: 'Atenção!',
          text: 'A senha deve conter 6 dígitos',
          showConfirmButton: false,
          timer: 3000,
        });
      } else if (this.client.password.length >= 6) {
        this.createAccountClient(this.client);
      }
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

    msgEmailInvalid() {
      Swal.fire({
        icon: 'warning',
        title: 'Atenção!',
        text: 'Preencha o Email corretamente',
        showConfirmButton: false,
        timer: 2000,
      });
    },

    close() {
      this.$emit('close');
    },

  },
};

</script>
