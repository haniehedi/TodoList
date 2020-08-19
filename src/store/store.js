import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

import works from "./modules/works";
import myStore from "./modules/myStore"
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: '',
    token: null,
    user: {}
  },
  mutations: {
    auth_request(state) {
      state.status = 'loading'
    },
    auth_success(state, { token, user }) {
      state.status = 'success'
      state.token = token
      state.user = user
    },
    auth_error(state) {
      state.status = 'error'
    },
    logout(state) {
      state.status = ''
      state.token = ''
    }

  },
  actions: {
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')

        var form = new FormData();
        form.set('username', user.username);
        form.set('password', user.password);

        axios({
          url: '/api/token',
          data: form,
          headers: { 'Content-Type': 'x-www-form-urlencoded' },
          method: 'POST'
        })
          .then(resp => {
            const data = resp.data

            if (!data.Success) {
              return
            }

            const user = resp.data.Data
            const token = user.AccessToken

            if (token == null) {
              return
            }

            axios.defaults.headers.common['Authorization'] = token
            commit('auth_success', { token, user })
            resolve(resp)
          })
          .catch(err => {
            commit('auth_error')
            localStorage.removeItem('token')
            reject(err)
          })
      })
    },
    register({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({ url: 'http://localhost:8080/register', data: user, method: 'POST' })
          .then(resp => {
            const token = resp.data.token
            const user = resp.data.user
            localStorage.setItem('token', token)
            axios.defaults.headers.common['Authorization'] = token
            commit('auth_success', { token, user })
            resolve(resp)
          })
          .catch(err => {
            commit('auth_error', err)
            localStorage.removeItem('token')
            reject(err)
          })
      })
    },
    logout({ commit }) {
      return new Promise((resolve, reject) => {
        commit('logout')
        localStorage.removeItem('token')
        delete axios.defaults.headers.common['Authorization']
        resolve()
          .catch(err => {
            // commit('auth_error', err)
            // localStorage.removeItem('token')
            reject(err)
          })
      })
    }
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    currentUser: state => state.user

  },
  modules: {
    works,
    myStore
  },
  plugins: [vuexLocal.plugin]
})