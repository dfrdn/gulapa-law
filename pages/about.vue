<template>
  <div>
    <g-header
      :heading="aboutHeader.heading"
      :description="aboutHeader.description"
    />
    <article class="container">
      <pre>{{ about }}</pre>
      <nuxt-content :document="about.body" class="prose prose-xl mx-auto" />
    </article>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  async asyncData({ $content }) {
    const { aboutHeader, about } = await $content('about').fetch()

    return { aboutHeader, about }
  },
  head() {
    return {
      title: `Gulapa Law | ${this.aboutHeader.heading}`,
      meta: [
        {
          hid: this.aboutHeader.heading,
          name: 'description',
          content: this.aboutHeader.description,
        },
      ],
    }
  },
}
</script>

<style scoped></style>
