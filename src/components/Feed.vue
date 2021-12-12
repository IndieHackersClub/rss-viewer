<template>
  <div v-if="error" class="error">{{error}}</div>
  <div v-else class="feed">
    <div class="flex flex-col max-w-5xl px-2 mx-auto my-2 space-y-6">
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
import Parser from "rss-parser";

const CORS_PROXY = "https://cors.love4dev.workers.dev/corsproxy/?apiurl="

const parser = new Parser({
  customFields: {
    item: ['cover_image']
  }
});

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
      const feed = await parser.parseURL(CORS_PROXY + this.feedUrl);
      console.log(feed.title); // feed will have a `foo` property, type as a string

      this.feed = feed;

      feed.items.forEach(item => {
        console.log(item.title + ':' + item.link) // item will have a `bar` property type as a number
      });
    },
    async fetchData2() {
      this.error = "";
      this.loading = true;
      this.feed = {};
      try {
        const data = await fetch(CORS_PROXY + this.feedUrl);
        if (data.ok) {
          const text = await data.text();
          const parser = new Parser();
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