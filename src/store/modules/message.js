// 这个文件是一个模块
// 模块就是把其中一个数据的state、getters、actions、mutations都放在一起

// 不同数据有自己的模块，这样方便管理
// 不用在index中写一大堆的state、getters、actions、mutations，容易混乱

// index中只需要引入模块，然后放到modules中即可

const state = {
  msg: "hello",
};
// 计算属性
const getters = {
  upperMsg(state) {
    return state.msg.toUpperCase();
  },
};
// 异步操作
const actions = {};
// 同步操作
const mutations = {
  change(state, payload) {
    state.msg = payload;
  },
};

export default {
  namespaced: true, // 既让是模块就要加上命名空间,为了防止其他模块中也有叫msg的数据
  state,
  getters,
  actions,
  mutations,
};
