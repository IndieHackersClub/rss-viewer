<template>
  <div class="theme-light min-w-xs min-h-screen bg-main text-main font-poppins">
    <Header/>

    <Feed :feedUrl="feedUrl" :name="name" :limit="limit" :load-more="true" />
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Feed from './components/Feed.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Feed,
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
