<template>
  <div class="flex flex-col max-w-5xl px-2 mx-auto my-2 space-y-6">
    <Error v-if="error" :description="error"/>
    <template v-else>
      <Article
          v-for="(article, index) of getArticles()"
          v-bind:key="index"
          v-bind:article="article"
      />
    </template>
  </div>
</template>

<script>
import Article from "./Article";
import Parser from "rss-parser";
import Error from "./Error";

const CORS_PROXY = "https://cors.love4dev.workers.dev/corsproxy/?apiurl="

const parser = new Parser({
  customFields: {
    item: ['cover_image']
  }
});

export default {
  name: 'Feeds',

  components: {
    Error,
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
    let data = this.getWithExpiry('feed')

    if (!data) {
      this.fetchData();
    } else {
      this.feed = data
    }
  },

  methods: {
    async fetchData() {
      this.error = "";
      this.loading = true;
      try {
        const data = await fetch(CORS_PROXY + this.feedUrl);
        if (data.ok) {
          const text = await data.text();
          await parser.parseString(text, (err, parsed) => {
            this.loading = false;
            if (err) {
              this.error = `Error occurred while parsing RSS Feed ${err.toString()}`;
            } else {
              this.feed = parsed;
              this.setWithExpiry('feed', this.feed, this.feed.ttl * 60)
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
      if (this.feed.items) {
        return this.feed.items;
      }
    },
  }
}
</script>