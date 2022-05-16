<template>
  <div>
    <section class="container xl:mb-20 mb-10 flex flex-row">
      <div class="w-screen lg:w-8/12">
        <div class="relative">
          <div
            class="header text-white xl:px-0 px-10 xl:pt-32 lg:pt-24 md:pt-16 pt-12 pb-14"
          >
            <div class="flex flex-col space-y-4 md:space-y-0 md:block">
              <img
                class="w-auto md:object-cover inline-block h-12 align-self-center md:mb-6 md:-ml-7 md:mr-3 filter brightness-0 invert"
                :src="info.image"
                :alt="info.title"
              />
              <h1
                class="uppercase text-3xl font-semibold tracking-wide md:relative block md:inline-block text-center md:text-left"
              >
                {{ info.title }}
              </h1>
            </div>
            <div class="mt-12 xl:ml-20 w-auto md:w-9/12">
              <p class="xl:text-base text-lg mb-8">
                {{ info.description }}
              </p>
              <h2
                v-if="contacts.length > 1"
                class="text-secondary text-lg font-bold uppercase"
              >
                Contact Persons
              </h2>
              <h2
                v-if="(contacts.length = 1)"
                class="text-secondary text-lg font-bold uppercase"
              >
                Contact Person
              </h2>
              <nuxt-link
                v-for="contact in contacts"
                :key="contact.slug"
                :to="`/lawyers/${contact.slug}`"
                class="text-white"
              >
                {{ contact.name }}
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="px-10 xl:px-0 mt-8 xl:ml-20 space-y-3">
          <h2
            v-if="info.notables"
            class="uppercase text-lg text-primary font-bold"
          >
            Notable Matters
          </h2>

          <p v-for="notable in info.notables" :key="notable" class="">
            {{ '> ' + notable }}
          </p>
        </div>
      </div>
      <g-test :contents="practiceAreas" header="Our Practice Areas" />
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const info = await $content(`practice-areas`, params.slug).fetch()

    const contacts = await $content('lawyers')
      .where({
        slug: { $in: info.contact },
      })
      .fetch()

    const practiceAreas = await $content('practice-areas')
      .only(['path', 'title'])
      .sortBy('title')
      .fetch()

    return { info, contacts, practiceAreas }
  },
  head() {
    return {
      title: `Gulapa Law | ${this.info.title}`,
      meta: [
        {
          hid: this.info.slug,
          name: 'description',
          content: this.info.description,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
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
