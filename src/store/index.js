import { createStore } from "vuex";
// 1.引入持久化插件
import VuexPersistence from "vuex-persist";
import message from "@/store/modules/message";

// 2.创建持久化对象
const vuexLocal = new VuexPersistence({
  storage: window.localStorage, // 是用什么存储
  reducer: (state) => ({ count: state.count }), // 指定哪些数据需要持久化，这里只持久化count
});

const store = createStore({
  state: {
    count: 0,
  },
  // commit就是调用mutations中的方法,context是
  actions: {
    // context是上下文对象,就是指store对象,payload是传递过来的数据,也叫载荷
    change(context, payload) {
      setTimeout(() => {
        context.commit("change", payload);
      }, 1000);
    },
  },
  // 同步操作,修改state中的数据
  mutations: {
    change(state, payload) {
      /* setTimeout(()=>{
        state.count++;
      }, 1000) */
      state.count += payload;
    },
  },
  getters: {
    doubleCount(state) {
      return state.count * 2;
    },
  },
  // 3.把vuex-persist作为插件使用
  plugins: [vuexLocal.plugin],
  modules: {
    message,
  },
});

export default store;
