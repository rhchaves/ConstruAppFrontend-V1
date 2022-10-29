import Vue from 'vue';

const criarCookie = (
  cookie = {
    nome: '',
    valor: '',
    expiraEm: '2h',
  },
) => {
  Vue.$cookies.set(cookie.nome, cookie.valor, cookie.expiraEm);
};

const recuperarCookie = (nome) => {
  const token = Vue.$cookies.get(nome);
  return token;
};

const cookieEstaValido = (nome) => Vue.$cookies.isKey(nome);

const removerCookie = (nome) => Vue.$cookies.remove(nome);

export {
  criarCookie,
  recuperarCookie,
  cookieEstaValido,
  removerCookie,
};
