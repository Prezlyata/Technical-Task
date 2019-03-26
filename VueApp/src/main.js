import Vue from 'vue';
import App from './App.vue';
import TableVue from './TableVue';
import VModal from 'vue-js-modal';

Vue.component('tableVue', TableVue);

Vue.use(VModal);

new Vue({
	el: '#app',
	render: (h) => h(App)
});
