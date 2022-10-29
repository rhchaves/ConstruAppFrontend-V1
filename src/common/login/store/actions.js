import router from 'src/router';
import HttpClient from '../../boot/HttpClient';
import { criarCookie, cookieEstaValido, removerCookie } from '../../boot/CookiesHandler';

const nomeCookie = 'sgp-token';

const logarUsuario = async ({ commit }, payload) => {
  commit('LOGANDO', true);

  const resp = await HttpClient.post('/login', payload).then((response) => {
    commit('SALVAR_USUARIO_STATE', response.data);

    criarCookie({
      nome: nomeCookie,
      valor: response.data.token,
      expiraEm: '2h',
    });

    localStorage.setItem('sgp-usuario', JSON.stringify({
      nome: response.data.name,
      email: response.data.email,
      login: response.data.login,
      token: response.data.token,
      menus: response.data.menus,
      permissoesPerfis: {
        adm_aplicacao: response.data.adm_aplicacao,
      },
    }));
    let token;
    if (localStorage.getItem('sgp-usuario')) {
      token = JSON.parse(localStorage.getItem('sgp-usuario'));
    }
    if (token) {
      router.push('/dashboard');
    }

    return response;
  })
    .finally(() => {
      commit('LOGANDO', false);
    });

  return resp;
};

const usuarioEstaLogado = ({ commit, dispatch }) => {
  if (cookieEstaValido(nomeCookie)) {
    const usuario = JSON.parse(localStorage.getItem('sgp-usuario'));
    commit('SALVAR_USUARIO_STATE', usuario);
    return true;
  }
  dispatch('deslogarUsuario');
  return false;
};

const deslogarUsuario = async ({ commit }, payload) => {
  const resp = await HttpClient.post('/logout', payload).then((response) => {
    localStorage.removeItem('sgp-usuario');
    removerCookie(nomeCookie);
    commit('DELETAR_USUARIO_STATE');
    router.push('/login');
    return response;
  }).finally(() => {
    commit('LOGANDO', false);
  });

  return resp;
};

export {
  logarUsuario,
  usuarioEstaLogado,
  deslogarUsuario,
};
