import Vue from 'vue';
import Vuex from 'vuex';
import { mutations } from './mutations';
import { state } from './state';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
    state: state,
    mutations: mutations,
};

export default new Vuex.Store(store);

//export default new Vuex.Store({
//    strict: process.env.NODE_ENV !== 'production',
//    state: {
//        news: [],
//        ask: [],
//        jobs: [],
//        user: {},
//        item: {},
//        list: [],
//    },
//    getters,
//    mutations,
//    actions,
//});
