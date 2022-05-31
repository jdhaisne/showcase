import Home from '/src/views/Home.vue';
import Resume from '/src/views/Resume.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [{
    path: '/',
    component: Home
  },
  {
    path: "/resume",
    component: Resume
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