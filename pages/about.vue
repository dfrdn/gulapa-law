<template>
  <div>
    <g-header :heading="about.heading" :description="about.description" />
    <article class="container">
      <nuxt-content :document="about" class="prose prose-xl mx-auto" />
    </article>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  async asyncData({ $content }) {
    const about = await $content('about').fetch()

    return { about }
  },
  head() {
    return {
      title: `Gulapa Law | ${this.about.heading}`,
      meta: [
        {
          hid: this.about.heading,
          name: 'description',
          content: this.about.description,
        },
      ],
    }
  },
}
</script>

<style scoped></style>
