const LOADING = (state, payload) => {
  state.loading = payload;
};

const INSERT_NEW_ADMIN = (state, payload) => {
  state.admins.push(payload);
};

const INSERT_LIST_ADMINS = (state, payload) => {
  state.admins = payload;
};

const UPDATE_ADMIN = (state, payload) => {
  state.admins = state.admins.map((admin) => {
    if (admin.id === payload.id) {
      return payload;
    }
    return admin;
  });
};

const DELETE_ADMIN = (state, payload) => {
  state.admins = state.admins.filter((admin) => admin.id !== payload.id);
};

// const BLOCK_ADMIN = (state, payload) => {
// state.admins = state.admins.map((admin) => admin.id === payload.id);
// };

export {
  LOADING,
  INSERT_NEW_ADMIN,
  INSERT_LIST_ADMINS,
  UPDATE_ADMIN,
  DELETE_ADMIN,
  // BLOCK_ADMIN,
};
