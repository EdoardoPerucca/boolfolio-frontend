import { createRouter, createWebHistory } from "vue-router";

import AppHome from './pages/AppHome.vue';
import AppAbout from './pages/AppAbout.vue';
import ProjectIndex from './pages/ProjectIndex.vue';
import SingleProject from './pages/SingleProject.vue';

const router = createRouter({

    history: createWebHistory(),

    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome,
            meta: {
                title: 'home',
            }
        },
        {
            path: '/projects',
            name: 'projects.index',
            component: ProjectIndex,
            meta: {
                title: 'Tutti i progetti',
            }
        },
        {
            path: '/about-us',
            name: 'about',
            component: AppAbout,
            meta: {
                title: 'Chi sono',
            }
        },
        {
            path: '/projects/:slug',
            name: 'projects.show',
            component: SingleProject,
            meta: {
                title: 'Progetto singolo',
            }
        },
    ],

});

router.beforeEach((to) => {
    document.title = to.meta?.title ? 'Boolfolio - ' + to.meta.title : 'Boolfolio';
});

export { router };