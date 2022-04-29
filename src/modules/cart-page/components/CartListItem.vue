<template>
  <q-page>
    <q-list bordered padding class="q-mt-xl" style="max-width: 900px">
      <q-item>
        <q-item-section top thumbnail class="q-ml-none">
          <img class="q-ma-md" src="https://cdn.quasar.dev/img/mountains.jpg">
        </q-item-section>

        <q-item-section>
          <q-item-label>Nome do item</q-item-label>
          <q-item-label >Descrição breve do item</q-item-label>
          <q-item-label >Valor: R$ {{ itemValue }}</q-item-label>
        </q-item-section>

        <q-item-section >
          <q-btn flat icon="delete" class="" >
              {{ deleteItem }}
            </q-btn>
        </q-item-section>
        <q-item-section class="btnAmber " >
          <q-btn flat icon="add" class="" ></q-btn>
          <q-input>{{ itemQuantity }}</q-input>
          <q-btn flat icon="remove" class="" ></q-btn>
        </q-item-section>
        <q-item-section >
          <q-item-label >R$ {{ value }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
    <q-section>
      <h5>Forma de pagamento:</h5>
       <q-select rounded v-model="model" :options="options" label="Opção de pagamento" />
    </q-section>
  </q-page>
</template>

<script>
export default {
  name: 'CartlistItem',

  data() {
    return {
      deletedItem: '',
      itemValue: '1700,00',
      itemQuantity: '0',
      value: '1700,00',
      item: '',
      model: null,
      options: [
        'Dinheiro', 'Cartão de Crédito', 'Cartão de Débito',
      ],
    };
  },

  methods: {
    deleteItem() {
      console.log('Apagar Item:');
    },
  },

};
</script>
