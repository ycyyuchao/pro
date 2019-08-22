import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home.vue'
import Paper from '@/pages/query/paperquery'
import Query from '@/pages/query/errorquery'
import Stop from '@/pages/system/stop'
import Register from '@/pages/system/register'
import About from '@/pages/system/about'
import Police from '@/pages/action/policeguide'
import Batchexport from '@/pages/action/batchexport.vue'
import Errors from '@/pages/error/err.vue'
Vue.use(Router)

export default new Router({
    mode: 'hash',
    base: '/my/', //添加根目录
    scrollBehavior: () => ({ y: 0 }),
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/batchexport',
            name: 'Export',
            component: Batchexport
        },
        {
            path: '/paperquery',
            name: 'Paper',
            component: Paper
        },
        {
            path: '/errorquery',
            name: 'Query',
            component: Query
        },
        {
            path: '/stop',
            name: 'Stop',
            component: Stop
        },
        {
            path: '/police',
            name: 'Police',
            component: Police
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        }, {
            path: '/err',
            name: 'Error',
            component: Errors
        }
    ]
})