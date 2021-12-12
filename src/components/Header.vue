<template>
  <div class="max-w-6xl mx-auto">
    <div class="flex flex-row items-center justify-between p-4">
      <a class="w-8 h-8" href="/">
        <img v-if="isDarkLocal" class="object-contain w-full h-full" src="../assets/logo/B-light.png" alt="textual Blog Logo">
        <img v-else class="object-contain w-full h-full" src="../assets/logo/B-dark.png" alt="textual Blog Logo">
      </a>
      <div class="w-8 h-8 p-2 rounded-md cursor-pointer bg-code-block" @click="toggleMode">
        <img v-if="isDarkLocal" class="object-contain w-full h-full" src="../assets/toggle/sunny.png" alt="sunny icon">
        <img v-else class="object-contain w-full h-full" src="../assets/toggle/moon.png" alt="moon icon">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Header",
  inject: ['isDark'],

  data() {
    return {
      isDarkLocal: this.isDark
    }
  },

  mounted() {
    if (this.isDark) {
      localStorage.theme = 'dark';
    } else {
      localStorage.theme = 'light'
    }

    this.toggleTag()
  },

  methods: {
    toggleMode() {
      if (localStorage.theme !== 'light') {
        localStorage.theme = 'light'
        this.isDark = false
      } else {
        localStorage.theme = 'dark'
        this.isDark = true
      }

      this.isDarkLocal = this.isDark

      this.toggleTag()
    },

    toggleTag() {
      if (localStorage.theme === 'dark') {
        document.documentElement.classList.add('dark')
        document.documentElement.classList.remove('light')
      } else {
        document.documentElement.classList.add('light')
        document.documentElement.classList.remove('dark')
      }
    }
  }
}
</script>

<style scoped>

</style>