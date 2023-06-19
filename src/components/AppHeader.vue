<script>

export default {
    name: 'AppHeader',

    data() {
        return {

        }
    },
}


</script>

<template>
    <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container-fluid">
            <router-link class="navbar-brand" :to="{ name: 'home' }">Boolfolio</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link active" aria-current="page" :to="{ name: 'home' }">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'projects.index' }">Tutti i progetti</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'about' }">Chi sono</router-link>
                    </li>

                </ul>

            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
.router-link-active {
    font-weight: bold;
    color: white;
}
</style>