import axios from 'axios';

// //////////////////////////////////////
const searchAddress = ({ commit }, payload) => {
  commit('SEARCHING', true);

  axios.get(`https://viacep.com.br/ws/${payload}/json`).then((response) => {
    commit('USER_ADDRESS', response.data);
    console.log('Print da actions', response.data);
    return response;
  }).catch((error) => {
    console.log('Erro na requisição', error);
  }).finally(() => {
    commit('SEARCHING', false);
  });
};
// //////////////////////////////////////

export {
  searchAddress,
};
