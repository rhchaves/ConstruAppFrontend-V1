const LOADING = (state, payload) => {
  state.loading = payload;
};

const INSERT_NEW_ADMIN = (state, payload) => {
  state.admins.push(payload);
};

const CHANGE_ADMIN = (state, payload) => {
  state.admins = state.admins.map((admin) => {
    if (admin.id === payload.id) {
      return payload;
    }
    return admin;
  });
};

export {
  LOADING,
  INSERT_NEW_ADMIN,
  CHANGE_ADMIN,
};
