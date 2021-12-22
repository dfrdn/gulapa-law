<template>
  <div>
    <section class="container space-y-8 mt-24 justify-center">
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
        <nuxt-link
          v-for="office in offices"
          :key="office.slug"
          :to="`/offices/${office.slug}`"
          class="text-4xl text-primary"
        >
          {{ office.location }}
        </nuxt-link>
      </div>
    </section>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content }) {
    const offices = await $content(`offices`).fetch()

    return { offices }
  },
  head() {
    return {
      title: `Gulapa Law | ${this.offices.location}`,
      meta: [
        {
          hid: this.offices.location,
          name: 'description',
          content: this.offices.description,
        },
      ],
    }
  },
})
</script>

<style scoped></style>
