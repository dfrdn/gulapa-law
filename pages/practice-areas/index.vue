<template>
  <div>
    <g-header
      :heading="practices.subheading"
      :description="practices.description"
    />
    <section class="container space-y-8">
      <div
        class="
          xl:gap-20
          gap-10
          grid grid-auto-flow
          lg:grid-cols-4
          md:grid-cols-2
          sm:grid-cols-1
          xl:px-0
          px-5
        "
      >
        <g-practice
          v-for="practice in practiceAreas"
          :key="practice.slug"
          :details="practice"
        />
      </div>
    </section>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content }) {
    const practiceAreas = await $content('practice-areas')
      .only(['slug', 'image', 'title', 'description'])
      .sortBy('title')
      .fetch()

    const { practices } = await $content('landing').fetch()
    return { practiceAreas, practices }
  },
  head() {
    return {
      title: `Gulapa Law | ${this.practices.heading}`,
      meta: [
        {
          hid: this.practices.heading,
          name: 'description',
          content: this.practices.description,
        },
      ],
    }
  },
})
</script>

<style scoped></style>
