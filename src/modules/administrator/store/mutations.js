const LOADING = (state, payload) => {
  state.loading = payload;
};

const LIST_ADMIN = (state, payload) => {
  state.admins = payload;
};

const TYPE_ADMIN = (state, payload) => {
  state.typeAdmin = payload;
};

const STATUS_USER = (state, payload) => {
  state.statusUser = payload;
};

const ALTER_SELECTED_STATUS = (state, payload) => {
  state.selectedStatus.status = payload;
};

export {
  LOADING,
  LIST_ADMIN,
  TYPE_ADMIN,
  STATUS_USER,
  ALTER_SELECTED_STATUS,
};
