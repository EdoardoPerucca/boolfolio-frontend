<script>
export default {
    name: 'AppHome',
}
</script>

<template>
    <h1>Sei nella homepage</h1>

    <hr>

    <router-link :to="{ name: 'about' }">Vai alla pagina about us</router-link>
</template>

<style lang="scss" scoped></style>