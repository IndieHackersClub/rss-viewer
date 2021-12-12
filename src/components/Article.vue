<template>
  <a class="w-full" :href="article.link" target="_blank">
    <div class="flex flex-col my-4 space-y-3">
      <div class="text-2xl font-bold no-underline sm:text-4xl hover:underline">{{ article.title }}</div>
      <div class="flex flex-col space-x-0 space-y-2 text-base font-normal sm:space-x-2 sm:space-y-0 sm:flex-row">
        <div class="flex flex-row space-x-2">
          <span>By</span>
          <a href="https://twitter.com/OCharnyshevich" target="_blank" class="font-bold hover:underline">{{ article.creator }}</a>
        </div>
        <div class="flex flex-row space-x-2">
          <span>on</span>
          <span class="font-bold">{{ getDate() }}</span>
        </div>
      </div>
        <img class="w-full" :src="article.cover_image" :alt="article.title"/>
      <div class="w-full text-lg font-medium leading-normal sm:text-2xl" v-html="trim(article.contentSnippet, 250)" />
    </div>
  </a>
</template>

<script>
export default {
  name: "Article",
  props: ["article"],
  methods: {
    getDate() {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(this.article.isoDate).toLocaleDateString("en-US", options); // Saturday, September 17, 2016
    }
  }
};
</script>