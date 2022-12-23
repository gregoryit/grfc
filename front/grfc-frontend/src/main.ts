import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store, { key } from './store';
import Vue from 'vue'
import VueCookies from 'vue-cookies'

createApp(App).use(store, key).use(router).use(VueCookies).mount('#app');
