<template>
  <div>
    <div class="btnAmber q-pa-xs row justify-center">
      <q-btn
        v-for="category in listCategories"
        :key="category.name"
        class="btnAmber categories"
        :label="category.label"
        @click="categories(category.name)"
      />

      <!-- <q-toolbar class="btnAmber">
        <q-tabs
          v-model="listCategories"
          inline-label
          shrink
          stretch
        >
          <q-btn
            class="btnAmber categories"
            v-for="category in listCategories"
            :key="category.name"
            v-bind="category" />
        </q-tabs>
      </q-toolbar> -->

    </div>

  </div>
</template>

<script>
export default {
  name: 'CategoriesComponent',

  data() {
    return {
      listCategories: [
        { name: 'construcao', label: 'Construção' },
        { name: 'eletrica', label: 'Elétrica' },
        { name: 'hidraulica', label: 'Hidráulica' },
        { name: 'ferragens', label: 'Ferragens' },
        { name: 'tintas', label: 'Tintas' },
        { name: 'ferramentas', label: 'Ferramentas' },
      ],
    };
  },

  methods: {
    categories(item) {
      console.log('Clicou na categoria: ', item);
    },
  },
};
</script>
