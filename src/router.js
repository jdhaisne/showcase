// import Home from '/src/views/Home.vue';
// import Resume from '/src/views/Resume.vue';
import BigView from '/src/views/BigView.vue'
import { createRouter, createWebHistory } from 'vue-router';

const routes = [{
    path: '/',
    component: BigView
  },

//   {
//     path:'/:pathMatch(.*)*',
//     component:rea
//   }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;