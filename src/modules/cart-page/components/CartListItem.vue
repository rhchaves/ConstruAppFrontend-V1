<template>
  <q-page>
    <q-list bordered padding class="q-mt-xl" style="max-width: 900px">
      <q-item>
        <q-item-section top thumbnail class="q-ml-none">
          <img src="https://cdn.quasar.dev/img/mountains.jpg">
        </q-item-section>

        <q-item-section>
          <q-item-label>Single line item</q-item-label>
          <q-item-label >Secondary line text. Lorem ipsum dolor
            sit amet, consectetur adipiscit elit.</q-item-label>
        </q-item-section>

        <q-item-section >
          <q-btn flat icon="delete" class="" >
              {{ deleteItem }}
            </q-btn>
        </q-item-section>
        <q-item-section >
          <q-item-label >Valor</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  name: 'CartlistItem',

  data() {
    return {
      deleteItem: '',
    };
  },
};
</script>
