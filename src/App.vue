<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuider v-if="$route.meta.showFooter"></FooterGuider>
  </div>
</template>

<script>
import FooterGuider from '@/components/FooterGuide/FooterGuide.vue'
export default {
  name: 'App',
  components: {
    FooterGuider
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
} */
</style>
