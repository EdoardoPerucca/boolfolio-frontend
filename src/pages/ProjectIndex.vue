<script>
import axios from 'axios';

import ProjectItem from '../components/ProjectItem.vue';


export default {
    name: 'ProjectIndex',

    data() {
        return {

            apuURL: 'http://127.0.0.1:8000/api/projects',

            projects: [],

            pagination: {},
        }
    },

    components: {
        ProjectItem,
    },

    mounted() {
        this.getProjects(this.apuURL);
    },

    methods: {
        getProjects(apuURL) {
            axios.get(apuURL).then(response => {
                console.log(response.data.result);

                this.projects = response.data.result.data;

                this.pagination = response.data.result;
            });
        },
    }
}
</script>

<template>
    <div class="container py-4 mb-3">
        <h1>Tutti i Progetti</h1>

        <div class="row">
            <div v-for="project in projects" class="col-md-6 col-lg-4 mb-3">
                <ProjectItem :project="project"></ProjectItem>
            </div>
        </div>

        <hr>

        <div class="project-nav">
            <button v-for="link in pagination.links" class="btn"
                :class="link.active ? 'btn-primary' : 'btn-outline-secondary'" v-html="link.label"
                :disabled="link.url == null ? true : false" @click="getProjects(link.url)">

            </button>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.project-nav {
    display: flex;
    gap: 5px;
    justify-content: center;
}
</style>