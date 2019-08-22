import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';
import { routerRedux } from 'dva/router';
import Login from '../login/page'
import Data from '../dashboard/page'
import User from '../users/page'
import Indent from '../indent/page'
import Index from '../../layouts/index'

let Router = DefaultRouter;
const { ConnectedRouter } = routerRedux;
Router = ConnectedRouter;


let routes = [
  {
    "path": "/login",
    "exact": true,
    "component": require('../login/page.js').default
  },
  {
    "path": "/",
    "component": require('../../layouts/index.js').default,
    "routes": [
      {
        "path": "/dashboard",
        "exact": true,
        "component": require('../dashboard/page.js').default
      },
      {
        "path": "/indent",
        "exact": true,
        "component": require('../indent/page.js').default
      },
      {
        "path": "/",
        "exact": true,
        "component": require('../index.js').default
      },

      {
        "path": "/users",
        "exact": true,
        "component": require('../users/page.js').default
      },
      {
        "component": () => React.createElement(require('E:/pro/test/shareback/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', routes: '[{"path":"/","component":"./src\\\\layouts\\\\index.js","routes":[{"path":"/dashboard","exact":true,"component":"./src/pages/dashboard/page.js"},{"path":"/indent","exact":true,"component":"./src/pages/indent/page.js"},{"path":"/","exact":true,"component":"./src/pages/index.js"},{"path":"/login","exact":true,"component":"./src/pages/login/page.js"},{"path":"/users","exact":true,"component":"./src/pages/users/page.js"}]}]' })
      }
    ]
  }
];


export default class Routers extends  React.Component{
  render(){
    return (
      <Router history={window.g_history}>
      <Route render={({ location }) => renderRoutes(routes, {}, { location })} ></Route>
    </Router>
      
    );
  }
  
}
/*  <Router history={window.g_history}>
        <Route render={({ location }) => renderRoutes(routes, {}, { location })} ></Route>
      </Router> 
      <Router history={window.g_history}>
        <Switch>
          <Route path='login' component={Login}></Route>
          <privateRoute path='/'></privateRoute>
          <privateRoute path='/dashboard' component={Data}></privateRoute>
          <privateRoute path='/indent' component={Indent}></privateRoute>
          <privateRoute path='/users' component={User}></privateRoute>
        </Switch>
       
      </Router> */