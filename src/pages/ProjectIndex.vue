<script>
import axios from 'axios';

import ProjectItem from '../components/ProjectItem.vue';


export default {
    name: 'ProjectIndex',

    data() {
        return {

            apiURL: 'http://127.0.0.1:8000/api/projects',

            projects: [],

            pagination: {},

            selectedTechnologyId: '',
        }
    },

    components: {
        ProjectItem,
    },

    mounted() {
        this.getProjects(this.apiURL);
    },

    methods: {
        getProjects(apiURL) {
            axios.get(apiURL).then(response => {
                console.log(response.data.result);

                this.projects = response.data.result.data;

                this.pagination = response.data.result;
                this.technologies = response.data.allTechnology;
            });
        },
    }
}
</script>

<template>
    <div class="container py-4 mb-3">

        <div v-if="projects.length > 0">

            <h1>Tutti i Progetti</h1>

            <form action="">
                <select name="technology_id" id="technology_id" class="form-select" v-model="selectedTechnologyId">
                    <option value="">Tutte</option>
                    <option v-for="technology in technologies" :value="technology.id">{{ technology.name }}</option>
                </select>
            </form>

            <hr>

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

    </div>
</template>

<style lang="scss" scoped>
.project-nav {
    display: flex;
    gap: 5px;
    justify-content: center;
}
</style>