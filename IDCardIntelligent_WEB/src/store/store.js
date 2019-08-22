import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
import VueAxios from 'vue-axios'
import ports from '../api/port';
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(VueAxios, axios);
Vue.use(Vuex);



export const store = new Vuex.Store({
    state: {
        login: false, //登录状态判断
        display: false, //首页展示状态
        start: false //暂停恢复运营页状态
    },
    getters: {
        login: state => {
            return state.login;
        },
        display: state => {
            return state.display;
        },
        start: state => {
            return state.start;
        }
    },
    mutations: {
        checklogin: (state, payload) => {
            state.login = payload;
        },
        logins: (state, payload) => {
            /*  console.log(payload.user) */
            axios({
                url: `${ports.login}`,
                data: {
                    username: payload.user,
                    password: payload.password
                },
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                /* console.log(res.data) */
                if (res.data.data != null) {
                    state.login = true;
                    sessionStorage.setItem('Token', res.data.data)
                } else {
                    iView.Message.error('用户不存在');
                }
            })
        },
        checkdisplay: (state, payload) => {
            state.display = payload;
        },
        checkstart: (state, payload) => {
            state.start = payload;
        }

    },
    actions: {
        checklogin: ({ commit }, payload) => {
            commit('checklogin', payload)

        },
        logins: ({ commit }, payload) => {
            commit('logins', payload)
        },
        checkdisplay: ({ commit }, payload) => {
            commit('checkdisplay', payload)
        },
        checkstart: ({ commit }, payload) => {
            commit('checkstart', payload)
        }

    }
})