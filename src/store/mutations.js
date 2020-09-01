import * as types from "./mutation-types";

// const mutations = {
// 	incream(state, title) {
// 		state.title = title;
// 	}
// }

const mutations = {
  [types.SET_TITLE](state, title) {
    state.title = title;
  },
  [types.SET_RESINFO](state, resInfo) {
    state.resInfo = resInfo;
  },
  [types.SET_ISCHILDSHOW](state, isShow) {
    state.isChildShow = isShow;
  },
  [types.SET_ISGOSHOW](state, isGoShow) {
    state.isGoShow = isGoShow;
  },
  [types.SET_TOKEN](state, token) {
    state.token = token;
  },
};

export default mutations;
