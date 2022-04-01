const SEARCHING = (state, payload) => {
  state.searching = payload;
};

const LIST_CEP = (state, payload) => {
  state.cep.push(payload);
};

export {
  SEARCHING,
  LIST_CEP,
};
