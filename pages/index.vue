<template>
  <div class="text-tertiary">
    <header class="pt-16 flex flex-col items-center">
      <div class="flex w-full items-center px-16 md:px-0">
        <hr class="hidden md:block" />
        <h1
          class="text-primary font-bold text-2xl md:text-4xl text-center md:mx-2"
        >
          {{ hero.heading }}
        </h1>
        <hr class="hidden md:block" />
      </div>
      <h2 class="text-xs md:text-sm max-w-xs md:max-w-2xl text-center my-8">
        {{ hero.subheading }}
      </h2>
      <!-- <button
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
      </button> -->
      <div class="-mb-56 md:-mb-24">
        <img :src="hero.image" :alt="hero.image" />
      </div>
      <div class="px-2">
        <div
          class="bg-white rounded-lg container shadow flex flex-col md:flex-row transform translate-y-1/2"
        >
          <div
            v-for="point in hero.points"
            :key="point.heading"
            class="flex space-x-4 py-8 px-4 border-b last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 justify-center"
          >
            <img :src="point.icon" :alt="point.heading" class="block w-1/6" />
            <div class="w-4/6 flex flex-col justify-center">
              <h3 class="uppercase text-primary text-sm mb-2 font-semibold">
                {{ point.heading }}
              </h3>
              <p class="text-xs">{{ point.details }}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
    <section id="about" class="bg-primary text-white">
      <div class="container mt-52 md:mt-20">
        <div>
          <g-title
            :heading="about.heading"
            :subheading="about.subheading"
            class="md:w-5/12"
          />
          <div class="flex flex-col md:flex-row md:space-x-8">
            <div class="md:w-5/12 order-2 md:order-1">
              <div class="mx-8 md:mx-0 md:ml-8">
                <p class="my-8 text-sm md:text-base">{{ about.description }}</p>
                <n-link
                  class="bg-secondary rounded px-10 py-3 text-sm inline-flex items-center capitalize"
                  to="/about"
                >
                  Learn more
                  <chevron-icon class="w-4" />
                </n-link>
              </div>
            </div>
            <div class="md:w-7/12 flex flex-col md:order-2 mt-8 md:-mt-12">
              <img :src="about.image" alt="about image" class="self-end" />
            </div>
          </div>
        </div>
        <div class="flex justify-center pt-10 md:py-10">
          <g-timeline :events="about.timeline" />
        </div>
      </div>
    </section>
    <section id="offices" class="container">
      <g-title :heading="offices.heading" :subheading="offices.subheading" />
      <p
        class="text-center md:text-left mx-4 md:mx-0 md:ml-8 my-8 text-sm md:text-base"
      >
        {{ offices.description }}
      </p>
      <div
        class="flex flex-col xl:gap-18 gap-10 md:grid md:grid-auto-flow lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 xl:px-0 px-5 items-center content-around"
      >
        <n-link
          v-for="location in officeLocations"
          :key="location.location"
          class="place-self-center rounded overflow-hidden relative w-60 h-60 bg-primary text-center"
          :to="location.path"
        >
          <img
            :src="location.image"
            :alt="location.location"
            class="h-full object-cover opacity-30"
          />
          <h3
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-2xl"
          >
            {{ location.location }}
          </h3>
        </n-link>
      </div>
    </section>
    <section id="practice-areas" class="bg-primary text-white">
      <div class="container">
        <g-title
          :heading="practices.heading"
          :subheading="practices.subheading"
        />
        <div class="flex flex-col md:flex-row">
          <div class="md:w-1/3">
            <div class="mx-4 md:mx-0 md:ml-8 text-center md:text-left">
              <p class="my-8 md:pr-8">
                {{ practices.description }}
              </p>

              <n-link
                class="bg-secondary rounded px-10 py-3 text-sm hidden md:inline-flex items-center capitalize"
                to="/practice-areas"
              >
                See all practice areas
                <chevron-icon class="w-4" />
              </n-link>
            </div>
          </div>
          <div class="md:w-2/3">
            <div
              id="practices"
              class="xl:gap-18 gap-10 md:grid md:grid-auto-flow flex overflow-x-auto md:overflow-visible lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xl:px-0 px-5 md:ml-0"
            >
              <g-practice
                v-for="practice in practiceAreas"
                :key="practice.slug"
                :details="practice"
                variant="homepage"
                class="first:ml-20 md:first:ml-0"
              />
            </div>
          </div>
          <n-link
            class="bg-secondary rounded px-10 py-3 mt-8 text-sm md:hidden inline-flex items-center capitalize mx-auto"
            to="/practice-areas"
          >
            See all practice areas
            <chevron-icon class="w-4" />
          </n-link>
        </div>
      </div>
    </section>
    <section id="lawyers" class="container mb-20">
      <g-title
        :heading="lawyers.heading"
        :subheading="lawyers.subheading"
        class="text-primary md:w-7/12"
      />
      <div class="flex flex-col md:flex-row">
        <div class="md:w-7/12">
          <div class="mx-4 md:mx-0 md:ml-8">
            <div class="my-8 space-y-8 max-w-lg">
              <div
                v-for="lawyer in lawyers.lawyers"
                :key="lawyer.name"
                class="space-y-2 px-5 md:px-0"
              >
                <n-link
                  :to="featuredLawyers[lawyers.lawyers.indexOf(lawyer)].path"
                  class="flex items-center text-secondary uppercase font-semibold"
                >
                  <img
                    :src="
                      featuredLawyers[lawyers.lawyers.indexOf(lawyer)].image
                    "
                    :alt="featuredLawyers[lawyers.lawyers.indexOf(lawyer)].name"
                    class="h-8 w-8 rounded-full object-cover object-top mr-2" />{{
                    lawyer.name
                  }}<chevron-icon class="w-5 transform"
                /></n-link>
                <p class="text-sm">
                  {{ lawyer.description }}
                </p>
                <div
                  class="flex flex-col md:flex-row space-y-2 md:space-y-0 justify-between text-sm"
                >
                  <a :href="`mailto:${lawyer.email}`" class="flex space-x-2">
                    <email-icon class="w-5 fill-current text-primary" />
                    <span>
                      {{ lawyer.email }}
                    </span>
                  </a>
                  <div class="flex space-x-2">
                    <!-- <phone-icon
                      v-if="lawyer.phone"
                      class="w-5 fill-current text-primary"
                    />
                    <span>
                      {{ lawyer.phone }}
                    </span> -->
                  </div>
                </div>
              </div>
            </div>

            <div class="flex">
              <n-link
                class="bg-primary rounded px-10 py-3 text-sm inline-flex items-center capitalize text-white"
                to="/lawyers"
              >
                See all our lawyers
                <chevron-icon class="w-4" />
              </n-link>
            </div>
          </div>
        </div>
        <!-- <div class="md:block hidden">
          <img :src="lawyers.image" :alt="lawyers.image" />
        </div> -->
      </div>
    </section>
    <section id="awards" class="bg-primary -mb-18">
      <div class="container flex flex-col items-center space-y-8">
        <h2 class="text-white text-2xl font-semibold">{{ awards.heading }}</h2>
        <div
          class="flex flex-col md:flex-row md:justify-between md:space-x-16 w-full"
        >
          <div
            v-for="award in awards.featured"
            :key="award.award"
            class="text-center md:w-1/3 md:space-y-8 space-y-6 flex flex-col items-center relative"
          >
            <img
              src="~assets/img/award-home.svg"
              :alt="award.award"
              class="absolute transform translate-y-3.5"
            />
            <div class="text-secondary font-semibold text-2xl w-64">
              <h3 class="uppercase">
                {{ award.award }}
              </h3>
              <h3>
                {{ award.year }}
              </h3>
            </div>
            <p class="text-white w-48">
              {{ award.body }}
            </p>
          </div>
        </div>
        <n-link
          class="bg-secondary rounded px-10 py-3 text-sm inline-flex items-center capitalize text-white"
          to="/awards"
        >
          See all gains and recognitions
          <chevron-icon class="w-4" />
        </n-link>
      </div>
    </section>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content }) {
    const { hero, about, offices, practices, lawyers, awards } = await $content(
      'landing'
    ).fetch()

    const officeLocations = await $content('offices')
      .only(['location', 'image', 'path'])
      .fetch()

    const featuredLawyers = await $content('lawyers')
      .where({ name: { $in: ['Charmaine Rose K. Haw-Lim', 'Aris L. Gulapa'] } })
      .only(['image', 'slug', 'name', 'path'])
      .fetch()

    const practiceAreas = await $content('practice-areas')
      .where({ slug: { $in: practices.practices } })
      .fetch()

    return {
      hero,
      about,
      offices,
      practices,
      practiceAreas,
      lawyers,
      awards,
      featuredLawyers,
      officeLocations,
    }
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
  @apply py-10 md:py-20;
}

#about {
  @apply pb-5 md:pb-20;
}

#practices::-webkit-scrollbar {
  display: none;
}

#practices,
#practices::-webkit-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

#lawyers {
  @apply pb-0;
}

header {
  hr {
    @apply border border-primary flex-grow;
  }

  background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0.6)
    ),
    url('/img/manila.jpg');
  background-size: cover;

  @media (min-width: 1024px) {
    background-image: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 1) 30%,
        rgba(255, 255, 255, 0.8)
      ),
      url('/img/manila.jpg');
    background-size: cover;
  }
}
</style>
