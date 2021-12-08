import { NewsItem } from '@/api';
import { RootState } from './state';

// mutation type
enum MutationTypes {
    SET_NEWS = 'SET_NEWS',
}

// mutation prop function
const mutations = {
    // [mutation](state, payload)
    [MutationTypes.SET_NEWS](state: RootState, news: NewsItem[]) {
        state.news = news;
    },
};

// 타입 지정
type Mutations = typeof mutations;

export { MutationTypes, mutations, Mutations };

/* 주의사항
   Mutation 이라는 명칭은 store 내부적으로 제공하고 있는 타입이 있음
   그래서 Mutations, Actions, ... 해당 방식으로 적어도 되고 커스텀해서 작성해도 좋음
*/

//export default {
//    SET_NEWS(state, news) {
//        state.news = news;
//    },
//    SET_ASK(state, ask) {
//        state.ask = ask;
//    },
//    SET_JOBS(state, jobs) {
//        state.jobs = jobs;
//    },
//    SET_USER(state, user) {
//        state.user = user;
//    },
//    SET_ITEM(state, item) {
//        state.item = item;
//    },
//    SET_LIST(state, list) {
//        state.list = list;
//    },
//};
