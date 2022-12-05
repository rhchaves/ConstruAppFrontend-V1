import HttpClient from 'src/common/boot/HttpClient';

// //////////////////////////////////////////////////////
const listAdmins = async ({ commit }, payload) => {
  commit('LOADING', true);
  setTimeout(async () => {
    await HttpClient.get('administrator', payload).then((response) => {
      console.log('este response', response.data);
      commit('LIST_ADMIN', response.data);
      return response;
    }).finally(() => {
      commit('LOADING', false);
    });
  }, 1000);
};

// //////////////////////////////////////////////////////
const statusUser = async ({ commit }, payload) => {
  commit('LOADING', true);
  commit('STATUS_USER', {});

  // let typeUser = payload;
  // console.log('payload', payload);
  // if (typeUser.userType === 1) {
  //   typeUser = 'administrator';
  // } else if (typeUser.userType === 2) {
  //   typeUser = 'seller';
  // } else {
  //   typeUser = 'client';
  // }

  await HttpClient.get(`/user/${payload.id}`).then((response) => {
    // await HttpClient.get(`/user/${payload.id}/${typeUser}`).then((response) => {
    console.log(response.data);
    commit('STATUS_USER', response.data);
    return response;
  }).catch((error) => {
    console.log('Erro na requisição', error);
  }).finally(() => {
    commit('LOADING', false);
  });
};

// //////////////////////////////////////////////////////
const blockSelected = async ({ commit }, payload) => {
  commit('LOADING', true);

  const selected = payload[0];
  let status = '';

  if (selected.status === 'inativo') {
    status = 'ativo';
  } else {
    status = 'inativo';
  }

  await HttpClient.put(`/user/${selected.id}?status=${status}`).then((response) => {
    console.log('response.data', response.data);
    commit('STATUS_USER', response.data);
    return response;
  }).finally(() => {
    commit('LOADING', false);
  });
};
// //////////////////////////////////////////////////////

export {
  listAdmins,
  statusUser,
  blockSelected,
};
