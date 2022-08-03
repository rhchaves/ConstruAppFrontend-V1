import HttpClient from 'src/boot/HttpClient';

// Apenas para exemplo de requisição

// //////////////////////////////////////////////////////
const teste = async ({ commit }, payload) => {
  commit('SEARCHING', true);

  await HttpClient.get('/app/menus', payload).then((response) => {
    commit('LIST_DATA', response.data.data);
    return response;
  })
    .finally(() => {
      commit('SEARCHING', false);
    });
};
// //////////////////////////////////////////////////////

export {
  teste,
};
