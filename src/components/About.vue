<template>
  <div class="flex flex-col max-w-5xl px-2 mx-auto my-4 space-y-3">
    <h1 class="text-2xl font-extrabold sm:text-4xl">Personal website of <span class="">Oleg Charnyshevich</span></h1>
    <h2 class="w-full text-lg font-medium leading-normal sm:text-2xl">
      I'm building an audience through learning how things work — like writing, marketing, developing, and sharing my learnings and experience along the way.

      <div class="flex flex-row items-center justify-start pt-6">
        <a class="mr-2 text-sm hover:underline hover:text-gray-600 dark:hover:text-gray-300" v-for="(link, index) of links" v-bind:key="index" :href="link.url" :title="link.name" target="_blank" rel="noopener">{{ link.name }}</a>
      </div>
    </h2>
  </div>
</template>

<script>
export default {
  name: "About",

  data() {
    return {
      links: [
        {url: 'https://github.com/OCharnyshevich', name: 'GitHub'},
        {url: 'https://twitter.com/OCharnyshevich', name: 'Twitter'},
        {url: 'https://medium.com/OCharnyshevich', name: 'Medium'},
        {url: 'https://www.linkedin.com/in/ocharnyshevich', name: 'Linkedin'},
      ]
    }
  }
}
</script>