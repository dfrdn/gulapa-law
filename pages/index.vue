<template>
  <div>
    <header class="py-20 flex flex-col items-center">
      <div class="flex w-full items-center">
        <hr />
        <h1 class="text-primary font-bold text-4xl text-center mx-2">
          {{ hero.heading }}
        </h1>
        <hr />
      </div>
      <h2 class="text-sm">{{ hero.subheading }}</h2>
      <button
        class="
          rounded
          border border-primary
          px-6
          py-1
          text-xs
          uppercase
          text-primary
        "
      >
        {{ hero.button }}
      </button>
      <div class="bg-white rounded container shadow">
        <div
          v-for="point in hero.points"
          :key="point.heading"
          class="flex space-x-2 py-6 px-2"
        >
          <img :src="point.icon" alt="Collaboration icon" class="block w-1/6" />
          <div class="w-5/6 flex flex-col justify-center">
            <h3 class="uppercase text-primary text-sm">{{ point.heading }}</h3>
            <p class="text-xs">{{ point.details }}</p>
          </div>
        </div>
      </div>
    </header>
    <section id="about" class="bg-primary text-white">
      <div class="container">
        <div class="flex space-x-8">
          <div class="w-1/2">
            <g-title :heading="about.heading" :subheading="about.subheading" />
            <div class="ml-4">
              <p>{{ about.description }}</p>
              <button class="bg-secondary rounded px-6 py-1 text-xs">
                Learn More
              </button>
            </div>
          </div>
          <div class="w-1/2">
            <img :src="about.image" alt="" />
          </div>
        </div>
        <div><g-timeline :events="about.timeline" /></div>
      </div>
    </section>
    <section id="offices" class="container space-y-4">
      <g-title :heading="offices.heading" :subheading="offices.subheading" />
      <p>{{ offices.description }}</p>
      <div class="space-x-8">
        <button
          v-for="location in offices.locations"
          :key="location.location"
          class="rounded overflow-hidden relative w-36 h-36 bg-primary"
        >
          <img
            :src="location.image"
            alt=""
            class="h-full object-cover opacity-30"
          />
          <h3
            class="
              absolute
              top-1/2
              left-1/2
              transform
              -translate-x-1/2 -translate-y-1/2
              text-white
              font-bold
              text-2xl
            "
          >
            {{ location.location }}
          </h3>
        </button>
      </div>
    </section>
    <section id="practice-areas" class="bg-primary text-white">
      <div class="container">
        <div class="w-1/3">
          <g-title
            :heading="practices.heading"
            :subheading="practices.subheading"
          />
          <div class="ml-4">
            <p>
              {{ practices.description }}
            </p>
            <button class="bg-secondary rounded px-6 py-1 text-xs">
              See all practice areas
            </button>
          </div>
        </div>
        <div class="w-2/3">
          {{ practices }}
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
      ],
    }
  },
  async asyncData({ $content }) {
    const { hero, about, offices, practices } = await $content(
      'landing'
    ).fetch()

    return { hero, about, offices, practices }
  },
})
</script>

<style lang="scss" scoped>
section {
  @apply py-20;
}

header {
  hr {
    @apply border border-primary flex-grow;
  }
}
</style>
