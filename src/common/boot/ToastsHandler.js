import Vue from 'vue';

const criarToast = (
  payload = {
    tipo: 'error',
    mensagem: '',
    posicao: 'top-right',
    duracao: 5000,
  },
) => {
  Vue.$toast[payload.tipo](payload.mensagem, {
    position: payload.posicao || 'top-right',
    timeout: payload.duracao || 5000,
    closeOnClick: true,
    pauseOnFocusLoss: false,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: false,
    closeButton: 'button',
    icon: false,
    rtl: false,
  });
};

export default criarToast;
