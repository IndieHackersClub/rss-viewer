<template>
  <div v-if="error" class="error">{{error}}</div>
  <div v-else class="feed">
    <h1 v-if="name">{{name}}</h1>
    <h1 v-else>{{feed.title}}</h1>
    <div v-if="loading" class="spinner">
      <div class="bounce1"></div>
      <div class="bounce2"></div>
      <div class="bounce3"></div>
    </div>
    <div class="articles-container">
      <Article
          v-for="(article, index) of getArticles()"
          v-bind:key="index"
          v-bind:article="article"
      />
    </div>
  </div>
</template>

<script>
import Article from "./Article";
import RSSParser from "rss-parser";

const CORS_PROXY = "https://cors.love4dev.workers.dev/corsproxy/?apiurl="

export default {
  name: 'Feeds',

  components: {
    Article: Article,
  },

  props: {
    feedUrl: String,
    name: String,
    limit: Number,
    loadMore: Boolean
  },

  data() {
    return {
      loading: true,
      error: "",
      feed: {},
    };
  },

  created() {
    this.fetchData();
  },

  methods: {
    async fetchData() {
      this.error = "";
      this.loading = true;
      this.feed = {};
      try {
        const data = await fetch(CORS_PROXY + this.feedUrl);
        if (data.ok) {
          const text = await data.text();
          const parser = new RSSParser();
          await parser.parseString(text, (err, parsed) => {
            this.loading = false;
            if (err) {
              this.error = `Error occurred while parsing RSS Feed ${err.toString()}`;
            } else {
              this.feed = parsed;
            }
          });
        } else {
          this.error = "Error occurred while fetching the feed";
          this.loading = false;
        }
      } catch (e) {
        if (e.toString() === "TypeError: Failed to fetch") {
          this.error = "Error due to CORS policy";
        } else {
          this.error = e.toString();
        }
        this.loading = false;
      }
    },

    getArticles() {
      if (this.feed.items && this.feed.items) {
        return this.feed.items.slice(0, this.limit);
      }
    }
  }
}
</script>

<style scoped>

</style>