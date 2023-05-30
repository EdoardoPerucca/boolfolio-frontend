import { createRouter, createWebHistory } from "vue-router";

import AppHome from './pages/AppHome.vue';
import AppAbout from './pages/AppAbout.vue';
import ProjectIndex from './pages/ProjectIndex.vue';

const router = createRouter({

    history: createWebHistory(),

    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome,
        },
        {
            path: '/about-us',
            name: 'about',
            component: AppAbout,
        },
        {
            path: '/projects',
            name: 'projects.index',
            component: ProjectIndex,
        },
    ],

});

export { router };