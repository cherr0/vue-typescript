import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
}).$mount('#app');

/**
 * 할 일 관리 앱 (CRUD)
 * - 조회, 추가, 삭제, 수정
 * - 간단하게 localStorage를 사용하여 진행
 */
