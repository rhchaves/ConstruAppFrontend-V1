<template>
  <div>
    <q-dialog v-model="showDialog" persistent >
      <q-card
        class="col q-pa-md"
        style="max-width: 500px"
      >
        <q-card-section class="row justify-center q-gutter-md">
            <h4 class="title text-center"> {{ title }} </h4>
        </q-card-section>

        <q-card-section class="row justify-center q-gutter-md">
          <h6 class="text-center"> {{ message }} </h6>
        </q-card-section>

        <!-- <q-card-section class="row justify-center q-gutter-md">
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
        </q-card-section> -->

      </q-card>
    </q-dialog>

  </div>
</template>

<script>
export default {
  name: 'BlockPageComponent',

  props: {
    title: {
      type: String,
      required: false,
      default: 'Desculpe, seu conta está bloqueada!',
    },

    message: {
      type: String,
      required: false,
      default: 'Contate o administrador, e-mail: master.admin@gmail.com',
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

    // confirmDialog() {
    //   this.showDialog = false;
    //   setTimeout(() => {
    //     this.$emit('confirmDialogEmit');
    //   }, 300);
    // },

    // closeDialog() {
    //   this.showDialog = false;
    //   setTimeout(() => {
    //     this.$emit('closeDialogEmit');
    //   }, 300);
    // },
  },
};
</script>
