export default {
  data() {
    return {
      openDeleteData: false,
    };
  },
  methods: {
    deleteSelected() {
      this.openDeleteData = true;
    },

    cancelDeletion() {
      this.openDeleteData = false;
    },
  },
};
