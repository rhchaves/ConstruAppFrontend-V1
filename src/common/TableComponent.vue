<template>
  <div class="q-pa-md row items-center justify-center no-wrap">
    <q-table
      :title="title"
      :columns="columns"
      :data="data"
      :row-key="rowKey"
      :selected-rows-label="getSelectedString"
      :selection="selectionType"
      :selected.sync="selected"
      style="max-width: 1300px"
    >
      <template v-slot:header-cell-fat="props">
        <q-th :props="props">
          <q-icon name="delete" size="1.5em" />
          {{ props.col.label }}
        </q-th>
      </template>
    </q-table>
  </div>
</template>

<script>
export default {
  name: 'TableComponent',

  props: {
    title: {
      type: String,
      required: true,
      default: '',
    },

    columns: {
      type: Array,
      required: true,
    },

    data: {
      type: Array,
      required: true,
    },

    selectionType: {
      type: String,
      required: false,
      default: 'multiple',
    },

    rowKey: {
      type: String,
      required: false,
      default: 'name',
    },

    userCanEdit: {
      type: Boolean,
      required: false,
      default: true,
    },

    userCanDelete: {
      type: Boolean,
      required: false,
      default: true,
    },

    userCanExport: {
      type: Boolean,
      required: false,
      default: false,
    },

    readOnly: {
      type: Boolean,
      required: false,
      default: false,
    },

  },

  data() {
    return {
      selected: [],
    };
  },

  methods: {
    getSelectedString() {
      return this.selected.length === 0 ? '' : `${this.selected.length} record${this.selected.length > 1 ? 's' : ''} selected of ${this.data.length}`;
    },
  },
};
</script>
