const SALVAR_USUARIO_STATE = (state, payload) => {
  state.login = payload;
};

const LOGANDO = (state, payload) => {
  state.logando = payload;
};

const DELETAR_USUARIO_STATE = (state) => {
  state.login = {};
};

export {
  SALVAR_USUARIO_STATE,
  DELETAR_USUARIO_STATE,
  LOGANDO,
};
