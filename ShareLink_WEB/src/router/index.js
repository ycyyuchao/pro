import Login from '../views/login/index'
import Index from '../views/index/index'
import Indent from '../views/indent/index'
import Data from '../views/datamon/index'
import noFound from '../views/notfound/index'
import Authpage from '../views/authpage/index'

export const menus = [
    {
        path:'/',
        exact:true,
        title:'首页',
        component:Index
    },{
        path:'/login',
        title:'登录',
        component:Login
    },{
        path:'/indent',
        title:'订单管理',
        component:Indent
    },{
        path:'/data',
        title:'数据监控',
        component:Data
    },{
        path:'/notfound',
        title:'找不到',
        component:noFound
    },
    {
        path:'/authpage',
        title:'用户管理',
        component:Authpage
    }
]