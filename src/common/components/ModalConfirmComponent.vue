<template>
  <div>
    <q-dialog v-model="showDialog" persistent >
      <q-card
        class="col q-pa-md"
        style="max-width: 500px"
      >
        <q-card-section class="row justify-center q-gutter-md">
            <h4 class="title"> {{ title }} </h4>
        </q-card-section>

        <q-card-section class="row justify-center q-gutter-md">
          <h6> {{ message }} </h6>
        </q-card-section>

        <q-card-section class="row justify-center q-gutter-md">
          <q-btn
            class="btnCancel sizeBtn3 q-ma-md"
            rounded
            @click="closeDialog"
          >Cancelar
          </q-btn>

          <q-btn
            class="btnAmber sizeBtn3 q-ma-md"
            rounded
            @click="confirmDialog"
          >Confirmar
          </q-btn>
        </q-card-section>

      </q-card>
    </q-dialog>

  </div>
</template>

<script>
export default {
  name: 'ModalConfirmComponent',

  props: {
    title: {
      type: String,
      required: false,
      default: 'Confirmar deleção',
    },

    message: {
      type: String,
      required: false,
      default: 'Tem certeza disso?',
    },
  },

  data() {
    return {
      showDialog: false,
    };
  },

  mounted() {
    this.showDialog = true;
  },

  methods: {

    confirmDialog() {
      this.showDialog = false;
      setTimeout(() => {
        this.$emit('confirmDialogEmit');
      }, 300);
    },

    closeDialog() {
      this.showDialog = false;
      setTimeout(() => {
        this.$emit('closeDialogEmit');
      }, 300);
    },
  },
};
</script>
