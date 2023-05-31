<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';


export default {
  name: "app",

  data() {

  },

  components: {
    AppHeader,
    AppFooter,
  }
}
</script>

<template>
  <div class="container">
    <AppHeader></AppHeader>
    <div class="container py-5">
      <router-view></router-view>
    </div>
    <AppFooter></AppFooter>
  </div>
</template>

<style scoped></style>
