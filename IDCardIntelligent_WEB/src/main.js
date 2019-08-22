import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import router from './router';
import moment from "moment";
import { store } from './store/store';
import VueLocalStorage from 'vue-localstorage'
import ports from './api/port';
import JsonExcel from 'vue-json-excel';
import $ from 'jquery'
import './global';


Vue.component('downloadExcel', JsonExcel);
Vue.use(VueAxios, axios);
Vue.use(iView);
Vue.use(VueLocalStorage)

Vue.prototype.$moment = moment;
Vue.prototype.$ports = ports;
Vue.prototype.$axios = axios

Vue.filter('moment', function(value, formatString) {
    formatString = formatString || 'YYYY-MM-DD ';
    return moment(value).format(formatString)
})

if (!String.prototype.moment) {
    String.prototype.moment = function(formatString) {
        formatString = formatString || 'YYYY-MM-DD ';
        return moment(this).format(formatString)
    };
}


// 设置axios的返回拦截（还可以设置request拦截，这里暂时用不上）
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.message.includes('timeout')) { // 判断请求异常信息中是否含有超时timeout字符串
            console.log("错误回调", error);
            alert("请求超时");
            return Promise.reject(error); // reject这个错误信息
        }
        if (error.message.includes('500')) {
            alert('服务端请求错误(500)')
            return Promise.reject(error); // reject这个错误信息

        }
        if (error.message.includes('404')) {
            alert('服务端请求错误(404)')
            return Promise.reject(error); // reject这个错误信息
        }
        if (error.response.status) {
            router.replace({
                path: 'err',
                query: { msg: error.message }
            })
        }
        return Promise.reject(error);
        //return Promise.reject(error.response.data)
    }


);
/* axios.interceptors.request.use(
    config => {
        if (store.state.token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
            config.headers.Authorization = `token ${store.state.token}`;
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    }
); */

Vue.config.silent = true;

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})