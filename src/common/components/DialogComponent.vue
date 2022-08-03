<template>
  <div>

    <q-dialog v-model="showDialog" persistent >
      <q-card
        class="col q-pa-md"
        style="max-width: 500px"
      >
        <div class="" >

          <q-card-section class="row justify-center q-gutter-md">
            <span class="title">Cadastrar Novo Produto</span>
          </q-card-section>

          <q-card-section class="q-gutter-md">
            <!-- <slot></slot> -->
          </q-card-section>

          <q-card-actions
            align="right"
            class="row justify-center"
            v-if="size !== 'sm' && showFooter">

            <q-btn class="btnCancel sizeBtn3 q-ma-md" label="Cancel" @click="cancelDialog"/>
            <q-btn class="btnAmber sizeBtn3 q-ma-md" label="Confirmar" @click="confirmDialog">
            </q-btn>
          </q-card-actions>
        </div>
        </q-card>
    </q-dialog>

  </div>
</template>

<script>
export default {
  name: 'DialogComponent',

  props: {
    title: {
      type: String,
      required: true,
      default: '',
    },
    message: {
      type: String,
      required: false,
      default: 'Informe aqui o texto do modal pela prop "message" ou então defina a prop "showBody" para false para desabilitar a mensagem. Para fechamento ao clicar fora da janela defina "false" para persistent',
    },
    size: {
      type: String,
      required: false,
      default: 'sm',
    },
    btnConfirm: {
      type: String,
      required: false,
      default: 'Confirmar',
    },
    btnCancel: {
      type: String,
      required: false,
      default: 'Cancelar',
    },
    showHeader: {
      type: Boolean,
      required: false,
      default: true,
    },
    showBody: {
      type: Boolean,
      required: false,
      default: true,
    },
    showFooter: {
      type: Boolean,
      required: false,
      default: false,
    },
    // define que a janela somente será fechada ao clicar em algum botão
    persistent: {
      type: Boolean,
      required: false,
      default: false,
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

    cancelDialog() {
      this.showDialog = false;
      setTimeout(() => {
        this.$emit('cancelDialogEmit');
      }, 300);
    },

    confirmDialog() {
      this.showDialog = false;
      setTimeout(() => {
        this.$emit('confirmDialogEmit');
      }, 300);
    },
  },
};
</script>
