import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import HeaderBar from '/src/components/HeaderBar.vue';
import '/src/assets/scss/index.scss';

const app = createApp(App);

app.component

app.use(router)

app.mount('#app')
