<template>
  <img alt="Vue logo" src="./assets/logo.png">

  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>

  <Feed :feedUrl="feedUrl" :name="name" :limit="limit" :load-more="true" />
</template>

<script>
import Feed from './components/Feed.vue'

export default {
  name: 'App',
  components: {
    Feed
  },

  data() {
    return {
      feedUrl: "https://blog.love4dev.ru/rss.xml",
      name: "",
      limit: 4
    };
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
