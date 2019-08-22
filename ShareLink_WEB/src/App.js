import React, { Component } from 'react';
import { Provider } from 'react-redux'
import {BrowserRouter as Router ,Route,Switch,Redirect} from 'react-router-dom';
import PrivateRoute from './router/privateRoute';
import configurestore from './redux/store/index';
import Login from './views/login/index';
import Index from './views/index/index';
import Indent from './views/indent/index';
import Data from './views/datamon/index';
import NoFound from './views/notfound/index';
import Authpage from './views/authpage/index';
 
const store= configurestore().store;

class App extends Component {
  render() {
    return (
      
        <Provider store={store}>
        <Router>
          <div style={{height:'100%'}}>
              <Switch>
                
                <PrivateRoute path="/" component={Index} exact></PrivateRoute>  
                <Route path="/login" component={Login} ></Route>
                <Index>
                  <PrivateRoute path="/data" component={Data} ></PrivateRoute>
                  <PrivateRoute path="/indent" component={Indent} ></PrivateRoute>
                  <PrivateRoute path="/authpage" component={Authpage} ></PrivateRoute>
                  <PrivateRoute path='/notfound'component={NoFound}></PrivateRoute>

                </Index>
                
              </Switch>
          </div>
        </Router>
        </Provider>
    );
  }
}

export default App;