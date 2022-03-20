import Vue from "vue";
import Vuex from "vuex";
import * as actions from "./actions";
import * as getters from "./getters";
import state from "./state";
import mutations from "./mutations";
// import createLogger from "vuex/dist/logger";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  actions, // 函数形式，提交state到mutation,(context.commit('increment'))修改
  getters, // 函数形式,获取state
  state, // 对象形式
  mutations, // 函数形式，修改state
  strict: debug,
  // plugins: debug ? [createLogger()] : []
});

// const store = new Vuex.Store({
//   state: {
//     count: 0
//   },
//   mutations: {
//     increment (state) {
//       state.count++
//     }
//   },
//   actions: {
// incrementAsync ({ commit }) {
//   setTimeout(() => {
//     commit('increment')
//   }, 1000)
// }
//   }
// })

// mapState 辅助函数
// computed: mapState({
//   // 箭头函数可使代码更简练
//   count: state => state.count,

//   // 传字符串参数 'count' 等同于 `state => state.count`
//   countAlias: 'count',

//   // 为了能够使用 `this` 获取局部状态，必须使用常规函数
//   countPlusLocalState (state) {
//     return state.count + this.localCount
//   }
// })


// mapMutations 辅助函数 你可以在组件中使用 this.$store.commit('xxx') 提交 mutation，或者使用 mapMutations 辅助函数
// ...mapMutations([
//   'increment', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`

//   // `mapMutations` 也支持载荷：
//   'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)`
// ]),
// ...mapMutations({
//   add: 'increment' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
// })

//mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性：
// computed: {
//   // 使用对象展开运算符将 getter 混入 computed 对象中
//     ...mapGetters([
//       'doneTodosCount',
//       'anotherGetter',
//       // ...
//     ])
//   }
