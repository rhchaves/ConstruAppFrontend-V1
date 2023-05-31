import HttpClient from 'src/common/boot/HttpClient';

// //////////////////////////////////////////////////////
const listAllAdmins = async ({ commit }) => {
  commit('LOADING', true);

  await HttpClient.get('/administrator').then((response) => {
    commit('INSERT_LIST_ADMINS', response.data);
    console.log('listAllAdmins', response.data);
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

  await HttpClient.post('/administrator', payload).then((response) => {
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

  await HttpClient.put(`/administrator/${payload.id}`, payload).then((response) => {
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

  await HttpClient.delete(`/administrator/${payload[0].id}`).then((response) => {
    commit('DELETE_ADMIN', payload[0]);
    return response;
  }).finally(() => {
    commit('LOADING', false);
  });
};
// //////////////////////////////////////////////////////
const blockAdmin = async ({ commit }, payload) => {
  commit('LOADING', true);

  console.log('payload', payload);
  const admin = payload[0];

  if (admin.status === 'inativo') {
    admin.status = 'ativo';
  } else {
    admin.status = 'inativo';
  }
  console.log('admin', admin);
  // await HttpClient.patch(`/administrator/${payload[0].id}`, admin).then((response) => {
  //   console.log('response.data', response.data);
  //   // commit('BLOCK_ADMIN', admin);
  //   return response;
  // }).finally(() => {
  commit('LOADING', false);
  // });
};
// //////////////////////////////////////////////////////

export {
  listAllAdmins,
  addNewAdmin,
  updateAdmin,
  deleteAdmin,
  blockAdmin,
};
