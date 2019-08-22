import * as usersService from '../services/users';

export default {
  namespace: 'users',//表示对于整个应用不同的命名空间，以便通过this.props.users访问，和当前model文件名相同就好之前的reducer名字相同，是全局state的属性，只能为字符串，不支持.的方式建立多重
  state: {//表示当前users中的state状态，这里可以给初始值
    list: [],
    total: null,
    page: null,
  },
  reducers: {//用来保存更新state值 上面的put方法调用这里的方法
    save(state, { payload: { data: list, total, page } }) {
      return { ...state, list, total, page };
    },
  },
  effects: {
    *fetch({ payload: { page = 1 } }, { call, put }) {
      //payload是从组件router传递过来的参数,
     //这里的call方法可以使用payload参数传递给后台程序进行处理这里可以调用service层的方法进行调用后端程序，
     //这里的put表示存储在当前命名空间example中，通过save方法存在当前state中

      const { data, headers } = yield call(usersService.fetch, { page });
      yield put({
        type: 'save',
        payload: {
          data,
          total: parseInt(headers['x-total-count'], 10),
          page: parseInt(page, 10),
        },
      });
    },
    *remove({ payload: id }, { call, put }) {
      yield call(usersService.remove, id);
      yield put({ type: 'reload' });
    },
    *patch({ payload: { id, values } }, { call, put }) {
      yield call(usersService.patch, id, values);
      yield put({ type: 'reload' });
    },
    *create({ payload: values }, { call, put }) {
      yield call(usersService.create, values);
      yield put({ type: 'reload' });
    },
    *reload(action, { put, select }) {
      const page = yield select(state => state.users.page);
      yield put({ type: 'fetch', payload: { page } });
    },
  },
  subscriptions: {//订阅，监听服务器连接，键盘输入，路由，状态等的变化
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/users') {
          dispatch({ type: 'fetch', payload: query });
        }
      });
    },
  },
};
