<template>
  <div class="theme-dark min-w-xs min-h-screen bg-main text-main font-poppins">
    <Header/>
    <About/>
    <hr class="max-w-5xl px-4 mx-auto">
    <Feed :feedUrl="feedUrl" :name="name" :limit="limit" :load-more="true" />
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Feed from './components/Feed.vue'
import About from "./components/About";

export default {
  name: 'App',
  components: {
    Header,
    About,
    Footer,
    Feed,
  },

  data() {
    return {
      feedUrl: "https://blog.love4dev.ru/rss.xml",
      name: "hashnode.com",
      limit: 100
    };
  }
}
</script>
