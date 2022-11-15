import axios from 'axios';

// //////////////////////////////////////
const searchAddress = ({ commit }, payload) => {
  commit('LOADING', true);

  axios.get(`https://viacep.com.br/ws/${payload}/json`).then((response) => {
    commit('SEARCHED_ADDRESS', response.data);
    return response.data;
  }).catch((error) => {
    console.log('Erro na requisição', error);
  }).finally(() => {
    commit('LOADING', false);
  });
};
// //////////////////////////////////////
const saveAddress = ({ commit }, payload) => {
  commit('LOADING', true);
  commit('USER_ADDRESS', payload);
  commit('LOADING', false);
};
// //////////////////////////////////////

export {
  searchAddress,
  saveAddress,
};
