<script>

export default {
    name: 'ProjectItem',

    data() {
        return {

        }
    },

    props: {
        project: Object,
    },

    computed: {
        content() {
            if (this.project.content.lenght > 30) {
                return this.project.content.substring(0, 30) + '...';
            } else {
                return this.project.content;
            }
        },

        coverImage() {
            if (this.project.cover_image) {
                return 'http://127.0.0.1:8000/storage/' + this.project.cover_image;
            } else {
                return 'https://pariwisatabengkulu.com/assets/images/no-image.png';
            }
        },

        type() {
            if (this.project.type) {
                return this.project.type.name;
            } else {
                return 'Non specificata';
            }
        }
    }
}

</script>

<template>
    <div class="card">
        <div class="cover-card">
            <img :src="coverImage" alt="copertina">
        </div>

        <div class="text-card">
            <strong>
                {{ project.title }}
            </strong>
            <div>
                {{ type }}
            </div>
            <div class="technologies">
                <span v-for="technology in project.technologies" class="badge text-bg-primary">{{ technology.name }}</span>
            </div>

            <p>
                {{ content }}
            </p>
        </div>

    </div>
</template>

<style lang="scss" scoped>
$titleColor: blue;

.card {
    border: 1px solid red;
    overflow: hidden;

    .text-card {
        padding: 4px;

        strong {
            color: $titleColor;
        }

        .technologies {
            display: flex;
            gap: .5em;
            margin-bottom: .5em;
            margin-top: .5em;
        }

    }

    .cover-card {
        img {
            height: 100px;
            width: 100%;
            object-fit: cover;
            object-position: center;
        }
    }

}
</style>