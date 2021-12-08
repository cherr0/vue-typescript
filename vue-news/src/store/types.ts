// store/types.ts
import { CommitOptions, Store } from 'vuex';
import { Mutations } from './mutations';
import { RootState } from './state';

type MyMutations = {
    commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(key: K, payload?: P, options?: CommitOptions): ReturnType<Mutations[K]>;
};

// 기본적으로 있는 commit을 빼고 직접 작성한 MyMutations를 넣음
export type MyStore = Omit<Store<RootState>, 'commit'> & MyMutations;
