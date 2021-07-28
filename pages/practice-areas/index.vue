<template>
  <div>
    <g-header
      :heading="'Our Practice Areas'"
      :description="'Gulapa Law is dedicated to serve our clients in many different practice areas. We have a wide range of lawyers in different fields to cater various legal needs.'"
    />
    <section class="container space-y-8">
      <div
        class="
          xl:gap-4
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
          v-for="practice in practices"
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
    const practices = await $content('practice-areas')
      .only(['slug', 'image', 'title', 'description'])
      .fetch()

    return { practices }
  },
})
</script>

<style scoped></style>
