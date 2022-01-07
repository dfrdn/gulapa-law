<template>
  <body class="mb-2">
    <div>
      <section id="about" class="bg-primary text-white">
        <div class="container md:mt-20">
          <div>
            <g-title
              :heading="office.location + ` Office`"
              :subheading="office.title"
              class="md:w-5/12"
            />
            <div class="flex flex-col md:flex-row md:space-x-8">
              <article class="md:w-7/12 order-2 md:order-1">
                <div class="mx-8 md:mx-0 md:ml-8">
                  <nuxt-content
                    :document="office"
                    class="prose mx-auto text-white my-8"
                  />
                </div>
              </article>
              <div class="md:w-5/12 flex flex-col md:order-2 mt-8 md:-mt-12">
                <img
                  :src="office.image"
                  :alt="office.location"
                  class="self-end"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="container space-y-8">
        <g-title
          heading="Our Lawyers"
          :subheading="office.location + ` Legal Team`"
          class="md:w-5/12"
        />
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
          <g-lawyer
            v-for="lawyer in lawyers.filter(({ offices }) =>
              offices.includes(office.slug)
            )"
            :key="lawyer.slug"
            :details="lawyer"
            variant="associate"
          />
        </div>
      </section>

      <!-- <section id="practice-areas" class="bg-primary text-white">
        <div class="container">
          <g-title heading="What We Do" subheading="Our Practice Areas" />
          <div class="flex flex-col md:flex-row">
            <div class="md:w-1/3">
              <div class="mx-4 md:mx-0 md:ml-8 text-center md:text-left">
                <p class="my-8 md:pr-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div class="md:w-2/3">
              <div
                id="practices"
                class="
                  xl:gap-18
                  gap-10
                  md:grid md:grid-auto-flow
                  flex
                  overflow-x-auto
                  md:overflow-visible
                  lg:grid-cols-3
                  md:grid-cols-2
                  sm:grid-cols-1
                  xl:px-0
                  px-5
                  md:ml-0
                "
              >
                <g-practice
                  v-for="practice in practiceAreas.filter(({ offices }) =>
                    offices.includes(office.slug)
                  )"
                  :key="practice.slug"
                  :details="practice"
                  variant="homepage"
                  class="first:ml-20 md:first:ml-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section> -->
    </div>
  </body>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const office = await $content(`offices`, params.slug).fetch()

    const lawyers = await $content('lawyers').fetch()

    const practiceAreas = await $content('practice-areas')
      .sortBy('title')
      .fetch()

    return { office, lawyers, practiceAreas }
  },
  head() {
    return {
      title: `Gulapa Law ${this.office.location}`,
      meta: [
        {
          hid: this.office.slug,
          name: 'description',
          content: this.office.description,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
body {
  margin-bottom: 0.5rem !important;
}
section {
  @apply py-10 md:py-20;
}

h1:after {
  content: '';
  @apply block absolute border-2 border-secondary left-0 md:left-auto right-0 w-screen mt-3;
}

.header::before {
  content: '';
  z-index: -1;
  @apply block absolute bg-primary w-screen rounded-br-md top-0 bottom-0 right-0;
}
</style>
