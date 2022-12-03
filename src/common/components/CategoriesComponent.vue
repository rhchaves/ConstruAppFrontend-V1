<template>
  <div>
    <div class="btnAmber q-pa-xs row justify-center">
      <q-btn
        v-for="category in listCategories"
        :key="category.id"
        class="btnAmber categories"
        :label="category.label"
        @click="filterCategories(category)"
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
        { id: 1, name: 'construcao', label: 'Construção' },
        { id: 2, name: 'eletrica', label: 'Elétrica' },
        { id: 3, name: 'hidraulica', label: 'Hidráulica' },
        { id: 4, name: 'ferragens', label: 'Ferragens' },
        { id: 5, name: 'tintas', label: 'Tintas' },
        { id: 6, name: 'ferramentas', label: 'Ferramentas' },
      ],
    };
  },

  methods: {
    filterCategories(categories) {
      this.$emit('categoriesEmit', categories);
    },
  },
};
</script>
