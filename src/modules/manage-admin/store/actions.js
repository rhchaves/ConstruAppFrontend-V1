import HttpClient from 'src/common/boot/HttpClient';

// //////////////////////////////////////////////////////
const listAllAdmins = async ({ commit }) => {
  commit('LOADING', true);

  HttpClient.get('/admin').then((response) => {
    commit('INSERT_LIST_ADMINS', response.data);
    console.log('listAllAdmin', response.data);
    return response;
  }).catch((error) => {
    console.log('Erro na requisição', error);
  }).finally(() => {
    commit('LOADING', false);
  });
};
// //////////////////////////////////////////////////////
const addNewAdmin = async ({ commit }, payload) => {
  commit('LOADING', true);

  return HttpClient.post('/admin', payload).then((response) => {
    console.log('Print da actions', response.data);
    commit('INSERT_NEW_ADMIN', response.data);
    return response;
  }).catch((error) => {
    console.log('Erro na requisição', error);
  }).finally(() => {
    commit('LOADING', false);
  });
};
// //////////////////////////////////////////////////////
const updateAdmin = async ({ commit }, payload) => {
  commit('LOADING', true);

  return HttpClient.put(`/admin/${payload.id}`, payload).then((response) => {
    console.log('Print updateAdmin payload', payload);
    commit('UPDATE_ADMIN', payload);
    return response;
  }).catch((error) => {
    console.log('Erro na requisição', error);
  }).finally(() => {
    commit('LOADING', false);
  });
};
// //////////////////////////////////////////////////////
const deleteAdmin = async ({ commit }, payload) => {
  commit('LOADING', true);

  console.log('deleteAdmin', payload);

  return HttpClient.delete(`/admin/${payload[0].id}`).then((response) => {
    commit('DELETE_ADMIN', payload[0]);
    return response;
  }).finally(() => {
    commit('LOADING', false);
  });
};
// //////////////////////////////////////////////////////

export {
  listAllAdmins,
  addNewAdmin,
  updateAdmin,
  deleteAdmin,
};
