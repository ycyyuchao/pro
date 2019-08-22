import { createStore,applyMiddleware } from 'redux';
import rootreducer from '../reducers';

import { persistStore, persistReducer } from 'redux-persist'//使其变成持久状态插件
import storage from 'redux-persist/lib/storage'//使其变成持久状态插件

import thunk from 'redux-thunk';//解决异步问题插件
//import logger from 'redux-logger';//查看属性值插件

const persistConfig = {
    key: 'aa',
    storage,
}
  
const persistedReducer = persistReducer(persistConfig, rootreducer)
//rootreducer里是状态，将转态存到storage里，变成持久的
  
export default () => {
    let store = createStore(persistedReducer,applyMiddleware(thunk))//,applyMiddleware(logger)
    let persistor = persistStore(store)
    return { store, persistor }
  } 