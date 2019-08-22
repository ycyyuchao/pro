/* import * as usersService from '../services/users'; */
export default {
    namespace: 'logins',
    state: {
        islogin: false
    },
    reducers: {
        Login(state,payload ) {
            console.log(state)
            window.sessionStorage.setItem('islogin',payload.payload)
            return { ...state,islogin: payload.payload}
        },
        Logout(state,payload) {
            return { ...state,islogin: payload.payload}
        }
    },
    effects: {
        *goin({ payload}, { call, put }) {
           // yield call(data);
           
            yield put({
                type: 'Login' ,
                payload
            })
          },
        *goout({ payload}, { call, put }){
            yield put({
                type: 'Logout' ,
                payload
            })
        },
        
    },
    subscriptions: {
        setup({ dispatch, history },done) {
            console.log(history)
            return history.listen(({ pathname, query }) => {
                console.log(query)
                // eslint-disable-next-line
              if (pathname!='/login') {
                  if(window.sessionStorage.getItem('islogin')){
                      return
                  }else{
                      alert('请登录')
                      history.push('/login')
                  }
              }
            });
        }
    },
};
