import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import 'vue-fullpage.js/dist/style.css'
import VueFullPage from 'vue-fullpage.js'

import HeaderBar from '/src/components/HeaderBar.vue';
import Home from '/src/components/Home.vue'
import AboutMe from '/src/components/AboutMe.vue'
import Resume from '/src/components/Resume.vue'

import '/src/assets/scss/index.scss';

const app = createApp(App);

app.component('HeaderBar', HeaderBar)
.component('Home', Home)
.component('AboutMe', AboutMe)
.component('Resume', Resume)

app.use(router)
app.use(VueFullPage)

app.mount('#app')
