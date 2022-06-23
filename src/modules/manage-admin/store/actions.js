import axios from 'axios';
import HttpClient from 'src/boot/HttpClient';

// //////////////////////////////////////////////////////
const addNewAdmin = async ({ commit }, payload) => {
  commit('LOADING', true);

  commit('INSERT_NEW_ADMIN', payload);

  axios.put(`https://viacep.com.br/ws/${payload}/json`).then((response) => {
    commit('SEARCHED_ADDRESS', response.data);
    console.log('Print da actions', response.data);
    return response.data;
  }).catch((error) => {
    console.log('Erro na requisição', error);
  }).finally(() => {
    commit('LOADING', false);
  });

  commit('LOADING', false);
};

// //////////////////////////////////////////////////////
const listAllAdmin = async ({ commit }) => {
  commit('LOADING', true);

  HttpClient.get('/admin').then((response) => {
    commit('INSERT_LIST_ADMINS', response.data);
    console.log('listAllAdmin', response.data);
    return response;
  }).catch((error) => {
    console.log('Erro na requisição da lista', error);
  }).finally(() => {
    commit('LOADING', false);
  });
};
// //////////////////////////////////////////////////////

const changeAdmin = async ({ commit }, payload) => {
  commit('LOADING', true);

  commit('CHANGE_ADMIN', payload);

  commit('LOADING', false);
};
// //////////////////////////////////////////////////////

const deleteAdmin = async ({ commit }, payload) => {
  commit('LOADING', true);

  commit('DELETE_ADMIN', payload);

  commit('LOADING', false);
};
// //////////////////////////////////////////////////////

export {
  addNewAdmin,
  listAllAdmin,
  changeAdmin,
  deleteAdmin,
};
