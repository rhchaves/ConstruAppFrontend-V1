const LOADING = (state, payload) => {
  state.loading = payload;
};

const CHANGE_CLIENT = (state, payload) => {
  state.clients = state.clients.map((clients) => {
    if (clients.id === payload.id) {
      return payload;
    }
    return clients;
  });
};

const INSERT_LIST_CLIENTS = (state, payload) => {
  state.clients = payload;
};

const DELETE_CLIENT = (state, payload) => {
  state.clients = state.clients.filter((client) => client.id !== payload.id);
};

export {
  LOADING,
  CHANGE_CLIENT,
  INSERT_LIST_CLIENTS,
  DELETE_CLIENT,
};
