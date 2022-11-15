import HttpClient from 'src/common/boot/HttpClient';

// //////////////////////////////////////////////////////
const listAdmins = async ({ commit }, payload) => {
  commit('LOADING', true);

  await HttpClient.get('administrator', payload).then((response) => {
    console.log('este response', response.data);
    commit('LIST_ADMIN', response.data);
    return response;
  }).finally(() => {
    commit('LOADING', false);
  });
};
// //////////////////////////////////////////////////////

export {
  listAdmins,
};
