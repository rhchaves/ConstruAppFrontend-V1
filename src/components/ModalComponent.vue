<template>
  <div>

    <q-dialog v-model="showModal" :persistent="persistent">
      <q-card>

        <q-bar class="btnAmber" v-if="showHeader">
          <span class="">{{title }}</span>
          <q-space />
          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip>Fechar</q-tooltip>
          </q-btn>
        </q-bar>

        <q-card-section class="row items-center" v-if="showBody">
          <span class="q-ml-sm">{{ message }}</span>
        </q-card-section>

        <q-card-section>

          <q-card-actions align="right" v-if="this.showFooterRigth">
            <q-btn class="btnCancel" rounded v-close-popup>{{ btnCancel }}</q-btn>
            <q-btn class="btnAmber" rounded @click="closeModal">{{ btnConfirm }}</q-btn>
          </q-card-actions>

          <q-card-actions align="center" v-if="this.showFooterCenter">
            <q-btn class="btnAmber" rounded @click="closeModal">{{ btnConfirm }}</q-btn>
          </q-card-actions>
        </q-card-section>

      </q-card>
    </q-dialog>

  </div>
</template>

<script>
export default {
  name: 'ModalComponent',

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
    showFooterRigth: {
      type: Boolean,
      required: false,
      default: false,
    },
    showFooterCenter: {
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
      showModal: false,
    };
  },

  mounted() {
    this.showModal = true;
  },

  methods: {
    closeModal() {
      this.showModal = false;
      setTimeout(() => {
        this.$emit('closedModal');
      }, 300);
    },

  },
};
</script>
