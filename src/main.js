import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "vue-fullpage.js/dist/style.css";
import VueFullPage from "vue-fullpage.js";

import HeaderBar from "/src/components/HeaderBar.vue";
import Home from "/src/components/Home.vue";
import AboutMeSlideShow from "/src/components/AboutMeSlideShow.vue";
import Resume from "/src/components/Resume.vue";
import FullPage from "/src/components/FullPage.vue";

import "/src/assets/scss/index.scss";

const app = createApp(App);

app
  .component("HeaderBar", HeaderBar)
  .component("Home", Home)
  .component("AboutMeSlideShow", AboutMeSlideShow)
  .component("Resume", Resume)
  .component("FullPage", FullPage);

app.use(router);
app.use(VueFullPage);

app.mount("#app");
