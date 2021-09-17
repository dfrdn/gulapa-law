<template>
  <div class="text-tertiary">
    <header class="pt-16 flex flex-col items-center space-y-8">
      <div class="flex w-full items-center">
        <hr />
        <h1 class="text-primary font-bold text-4xl text-center mx-2">
          {{ hero.heading }}
        </h1>
        <hr />
      </div>
      <h2 class="text-sm max-w-2xl text-center">{{ hero.subheading }}</h2>
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
      <div
        class="
          bg-white
          rounded-lg
          container
          shadow
          flex flex-row
          transform
          translate-y-1/2
        "
      >
        <div
          v-for="point in hero.points"
          :key="point.heading"
          class="
            flex
            space-x-4
            py-8
            px-4
            border-r
            last:border-r-0
            justify-center
          "
        >
          <img :src="point.icon" alt="Collaboration icon" class="block w-1/6" />
          <div class="w-4/6 flex flex-col justify-center">
            <h3 class="uppercase text-primary text-sm mb-2 font-semibold">
              {{ point.heading }}
            </h3>
            <p class="text-xs">{{ point.details }}</p>
          </div>
        </div>
      </div>
    </header>
    <section id="about" class="bg-primary text-white">
      <div class="container mt-20">
        <div class="flex space-x-8">
          <div class="w-5/12">
            <g-title :heading="about.heading" :subheading="about.subheading" />
            <div class="ml-8">
              <p class="my-8">{{ about.description }}</p>
              <n-link
                class="
                  bg-secondary
                  rounded
                  px-10
                  py-3
                  text-sm
                  inline-flex
                  items-center
                  capitalize
                "
                to="/about"
              >
                Learn more
                <chevron-icon class="w-4" />
              </n-link>
            </div>
          </div>
          <div class="w-7/12 flex flex-col">
            <img :src="about.image" alt="" class="self-end" />
          </div>
        </div>
        <div class="flex justify-center pt-10 md:py-10">
          <g-timeline :events="about.timeline" />
        </div>
      </div>
    </section>
    <section id="offices" class="container">
      <g-title :heading="offices.heading" :subheading="offices.subheading" />
      <p class="ml-8 my-8">{{ offices.description }}</p>
      <div class="space-x-8 flex">
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
      <div class="container flex flex-row">
        <div class="w-1/3">
          <g-title
            :heading="practices.heading"
            :subheading="practices.subheading"
          />
          <div class="ml-8">
            <p class="my-8 pr-8">
              {{ practices.description }}
            </p>

            <n-link
              class="
                bg-secondary
                rounded
                px-10
                py-3
                text-sm
                inline-flex
                items-center
                capitalize
              "
              to="/practice-areas"
            >
              See all practice areas
              <chevron-icon class="w-4" />
            </n-link>
          </div>
        </div>
        <div class="w-2/3">
          <div
            class="
              xl:gap-18
              gap-10
              grid grid-auto-flow
              lg:grid-cols-3
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
              variant="homepage"
            />
          </div>
        </div>
      </div>
    </section>
    <section id="lawyers" class="container flex">
      <div class="w-7/12">
        <g-title
          :heading="lawyers.heading"
          :subheading="lawyers.subheading"
          class="text-primary"
        />
        <div class="ml-8">
          <div class="my-8 space-y-8 max-w-lg">
            <div
              v-for="lawyer in lawyers.lawyers"
              :key="lawyer.name"
              class="space-y-2"
            >
              <n-link
                to="/lawyers/aris-l-gulapa"
                class="flex items-center text-secondary uppercase font-semibold"
                >{{ lawyer.name }}<chevron-icon class="w-5 transform"
              /></n-link>
              <p class="text-sm">
                {{ lawyer.description }}
              </p>
              <div class="flex justify-between text-sm">
                <div class="flex space-x-2">
                  <email-icon class="w-5 fill-current text-primary" />
                  <span>
                    {{ lawyer.email }}
                  </span>
                </div>
                <div class="flex space-x-2">
                  <phone-icon class="w-5 fill-current text-primary" />
                  <span>
                    {{ lawyer.phone }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <n-link
            class="
              bg-primary
              rounded
              px-10
              py-3
              text-sm
              inline-flex
              items-center
              capitalize
              text-white
            "
            to="/lawyers"
          >
            See all our lawyers
            <chevron-icon class="w-4" />
          </n-link>
        </div>
      </div>
      <div>
        <img :src="lawyers.image" :alt="lawyers.image" />
      </div>
    </section>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content }) {
    const { hero, about, offices, practices, lawyers } = await $content(
      'landing'
    ).fetch()

    const practiceAreas = await $content('practice-areas')
      .where({ slug: { $in: practices.practices } })
      .fetch()

    return { hero, about, offices, practices, practiceAreas, lawyers }
  },
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
section {
  @apply py-20;
}

#about {
  @apply pb-5 md:pb-20;
}

header {
  hr {
    @apply border border-primary flex-grow;
  }
}
</style>
