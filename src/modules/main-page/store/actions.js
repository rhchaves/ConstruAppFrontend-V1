import axios from 'axios';

// //////////////////////////////////////
const listCep = ({ commit }, payload) => {
  commit('SEARCHING', true);

  axios.get(`https://viacep.com.br/ws/${payload}/json`).then((response) => {
    commit('LIST_CEP', response.data);
    console.log(response);
    alert(response.data.logradouro); // atributo
    return response;
  });

  commit('SEARCHING', false);
};
// //////////////////////////////////////

export {
  listCep,
};
