<script>
import axios from 'axios';

export default {
    name: 'SingleProject',

    data() {
        return {
            project: {},

            isLoading: true,
            projectFound: false,

            projectSlug: '',

            baseUrl: 'http://127.0.0.1:8000/',
        }
    },

    mounted() {
        this.projectSlug = this.$route.params.slug;

        this.getProject();
    },

    computed: {
        projectImage() {
            return this.baseUrl + 'storage/' + this.project.cover_image;
        }
    },

    methods: {
        getProject() {

            //console.log('http://127.0.0.1:8000/api/projects/' + this.projectSlug);
            axios.get(this.baseUrl + 'api/projects/' + this.projectSlug).then(response => {

                if (response.data.success) {
                    this.project = response.data.project;
                    this.isLoading = false;
                    this.projectFound = true;

                } else {
                    this.isLoading = false;
                    this.projectFound = false;
                }

            });
        }
    }
}
</script>

<template>
    <div v-if="isLoading" class="spinner-container">
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
    <div v-else>
        <div v-if="projectFound">
            <div class="project-img text-center">
                <img :src="projectImage" alt="cover immagine">
            </div>
            <h1>{{ project.title }}</h1>

            <div class="technologies">
                <span v-for="technology in project.technologies" class="badge text-bg-primary">{{ technology.name }}</span>
            </div>

            <h4>{{ project.type ? project.type.name : 'Nessuna tipologia' }}</h4>
            <hr>
            <p>{{ project.content }}</p>
        </div>
        <div v-else>
            <div class="alert alert-danger" role="alert">
                Il progetto non esiste
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.spinner-container {
    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 1000px;
}

.project-img img {
    max-height: 200px;
    object-fit: cover;
}

.technologies {
    display: flex;
    gap: .5em;
    margin-bottom: .5em;
    margin-top: .5em;
}
</style>

