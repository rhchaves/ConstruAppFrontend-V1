<template>
  <q-page class="window-height window-width row justify-center items-center">
    <q-form @submit.prevent="confirm()">
      <q-card>
        <q-card-section>
          <!-- Bloco de inputs de dados do vendedor -->
          <q-input
            autofocus
            outlined
            v-model="seller.corporateName"
            type="text"
            label="Razão social"
            lazy-rules
            :rules="[ val => val !== null && val != '' && val.length >= 3 ||
            'Mínimo 3 caracteres']"
          />
          <q-input
            autofocus
            outlined
            v-model="seller.fantasyName"
            type="text"
            label="Nome fantasia"
            lazy-rules
            :rules="[ val => val !== null && val != '' && val.length >= 3 ||
            'Mínimo 3 caracteres']"
          />
          <q-input
            outlined
            v-model="seller.emailSeller"
            type="email"
            label="E-mail"
            lazy-rules
            :rules="[ val => val !== null && val != '' && val.length >= 3 ||
            'Mínimo 3 caracteres']"
          />
          <q-input
            outlined
            v-model="seller.cnpjSeller"
            type="text"
            label="CNPJ"
            mask="##.###.###/####-##"
            lazy-rules
            :rules="[ val => val !== null && val != '' && val.length >= 3 ||
            'Mínimo 3 caracteres']"
          />
          <q-input
            outlined
            v-model="seller.phone"
            type="text"
            label="Celular"
            mask="(##) #####-####"
            lazy-rules
            :rules="[ val => val !== null && val != '' && val.length >= 3 ||
            'Mínimo 3 caracteres']"
          />
          <q-input
            outlined
            v-model="seller.address.cep"
            type="text"
            label="CEP"
            mask="#####-###"
            unmasked-value
            @blur="searchCep"
            lazy-rules
            :rules="[ val => val !== null && val != '' && val.length >= 3 ||
            'Mínimo 3 caracteres']"
          />
          <div v-if="hasCep">
            <q-input
              outlined
              v-model="seller.address.street"
              type="text"
              label="Rua"
              lazy-rules
              :rules="[ val => val !== null && val != '' && val.length >= 3 ||
              'Mínimo 3 caracteres']"
            />
            <q-input
              outlined
              v-model="seller.address.number"
              type="text"
              label="Número"
              id="clientNumber"
              lazy-rules
              :rules="[ val => val !== null && val != '' && val.length >= 3 ||
              'Mínimo 3 caracteres']"
            />
            <q-input
              outlined
              v-model="seller.address.complement"
              type="text"
              label="Complemento"
            />
            <q-input
              outlined
              v-model="seller.address.district"
              type="text"
              label="Bairro"
              class="q-mt-md"
              lazy-rules
              :rules="[ val => val !== null && val != '' && val.length >= 3 ||
              'Mínimo 3 caracteres']"
            />
            <q-input
              outlined
              v-model="seller.address.city"
              type="text"
              label="Cidade"
              disable
              lazy-rules
              :rules="[ val => val !== null && val != '' && val.length >= 3 ||
              'Mínimo 3 caracteres']"
            />
            <q-input
              outlined
              v-model="seller.address.state"
              type="text"
              label="Estado"
              disable
              lazy-rules
              :rules="[ val => val !== null && val != '' && val.length >= 3 ||
              'Mínimo 3 caracteres']"
            />
          </div>
          <q-input
            outlined
            v-model="seller.password"
            :type="isPwd ? 'password' : 'text'"
            label="Senha"
            lazy-rules
            :rules="[ val => val !== null && val != '' && val.length >= 3 ||
            'Mínimo 3 caracteres']"
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
            v-model="seller.confirmPassword"
            :type="isPwd ? 'password' : 'text'"
            label="Confirmar senha"
            lazy-rules
            :rules="[ val => val !== null && val != '' && val.length >= 3 ||
            'Mínimo 3 caracteres']"
          />
          <!-- Fim do Bloco de inputs de dados do vendedor -->

        </q-card-section>

        <q-card-section>

          <!-- Botão para confirmar dados -->
          <q-btn class="btnAmber" label="Confirmar" rounded
            type="submit"/>

            <!-- Botão para excluir conta (visivel somente para atualização dos dados) -->
          <q-btn class="btnCancel" label="Excluir Conta" rounded
            @click="deleteSeller" v-if="alterarDados"/>

        </q-card-section>
      </q-card>
    </q-form>
  </q-page>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';
import Swal from 'sweetalert2';

export default {
  name: 'RegisterSellerPage',

  data() {
    return {
      seller: {
        corporateName: '',
        fantasyName: '',
        password: '',
        confirmPassword: '',
        cnjpSeller: '',
        emailSeller: '',
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
      console.log(this.seller);
    },

    deleteSeller() {
      console.log('Confirmou exclusão');
    },

    searchCep() {
      if (this.seller.address.cep.length === 8) {
        this.searchAddress(this.seller.address.cep);
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
      this.seller.address.street = item.logradouro;
      this.seller.address.district = item.bairro;
      this.seller.address.city = item.localidade;
      this.seller.address.state = item.uf;
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
