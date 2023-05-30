<script>
import AppHeader from './components/AppHeader.vue';
//import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';


export default {
  name: "app",

  data() {

  },

  components: {
    AppHeader,
    //AppMain,
    AppFooter,
  }
}
</script>

<template>
  <div class="container">
    <AppHeader></AppHeader>
    <router-view></router-view>
    <AppFooter></AppFooter>
  </div>
</template>

<style scoped></style>
