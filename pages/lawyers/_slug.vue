<template>
  <div>
    <section class="container xl:mb-20 mb-10 flex flex-row">
      <div class="w-screen lg:w-2/3">
        <div class="relative">
          <div
            class="
              header
              text-white
              xl:px-0
              px-10
              xl:pt-32
              lg:pt-24
              md:pt-16
              pt-12
              pb-4
            "
          >
            <div>
              <h1
                class="
                  uppercase
                  text-3xl
                  font-semibold
                  tracking-wide
                  md:relative
                  block
                  md:inline-block
                  text-center
                  md:text-left
                "
              >
                {{ info.name }}
              </h1>
            </div>
            <div class="flex md:flex-row flex-col">
<<<<<<< HEAD
              <div class="flex flex-col md:hidden text-xs mt-8 space-y-2">
                <a :href="`mailto:${info.email}`">{{ info.email }}</a>
                <p>{{ info.mobile }}</p>
=======
              <div
                class="
                  flex flex-col
                  items-center
                  md:hidden
                  text-xs
                  mt-8
                  space-y-2
                "
              >
                <a :href="`mailto:${info.email}`"
                  ><email-icon class="white inline-block mr-2" />{{
                    info.email
                  }}</a
                >
                <p>
                  <phone-icon class="white inline-block mr-2" />
                  {{ info.mobile }}
                </p>
>>>>>>> 684d879e4630de457a69bede91171597a4609902
              </div>
              <div class="mt-4 md:mt-12 w-full md:w-7/12 order-2 md:order-1">
                <p class="mb-8">
                  {{ info.description }}
                </p>
                <div class="hidden md:block">
<<<<<<< HEAD
                  <a :href="`mailto:${info.email}`">{{ info.email }}</a>
                  <p>{{ info.mobile }}</p>
=======
                  <a :href="`mailto:${info.email}`"
                    ><email-icon class="white inline-block mr-2" />{{
                      info.email
                    }}</a
                  >
                  <p>
                    <phone-icon class="white inline-block mr-2" />{{
                      info.mobile
                    }}
                  </p>
>>>>>>> 684d879e4630de457a69bede91171597a4609902
                </div>
              </div>
              <div
                class="
                  w-full
                  mt-4
                  md:w-5/12 md:-mt-9
                  flex
                  justify-center
                  order-1
                  md:order-2
                "
              >
                <div class="relative">
                  <img
                    :src="info.image"
                    :alt="info.name"
                    class="
                      object-cover
                      border-2 border-secondary
                      h-72
                      w-72
                      mb-2
                      rounded-lg
                    "
                  />
                  <div
                    class="
                      absolute
                      bg-white
                      bottom-2
                      left-0
                      rounded-tr-lg rounded-bl-lg
                      md:rounded-br-none md:rounded-tr-lg
                    "
                  >
                    <p class="text-primary py-1 px-5 text-xs">
                      {{ offices.join(' | ') }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-8 space-y-10 md:w-9/12 w-full px-10 md:px-0">
          <div class="space-y-4">
            <h2 class="uppercase text-lg text-primary font-bold">
              Practice Areas
<<<<<<< HEAD
            </h3>

=======
            </h2>
>>>>>>> 684d879e4630de457a69bede91171597a4609902
            <nuxt-link
              v-for="practice in practiceAreas"
              :key="practice.slug"
              :to="`/practice-areas/${practice.slug}`"
              class="flex items-end"
            >
              <img
                :src="practice.image"
                :alt="practice.title"
                class="inline-block h-6 mr-2"
              />
              <p class="leading-none">{{ practice.title }}<span> |</span></p>
            </nuxt-link>
          </div>
          <div class="space-y-4">
            <h2 class="uppercase text-lg text-primary font-bold">
              Admission/s
            </h2>
            <p v-for="admission in info.admissions">
              {{ `> ${admission}` }}
            </p>
          </div>
          <div class="space-y-4">
            <h2 class="uppercase text-lg text-primary font-bold">Education</h2>
            <p v-for="educ in info.education">
              {{ '> ' + educ }}
            </p>
          </div>
          <div class="space-y-4">
            <h2 class="uppercase text-lg text-primary font-bold">
              Matters Handled
            </h2>
            <p v-for="matter in info.matters">
              {{ '> ' + matter }}
            </p>
          </div>
        </div>
      </div>
      <g-list :contents="lawyers" />
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const info = await $content(`lawyers`, params.slug).fetch()

    const all = {
      manila: 'MNL',
      cebu: 'CEB',
      'new-york': 'NY',
      'san-francisco': 'SF',
    }

    const offices = info.offices
      .sort((a, b) => Object.keys(all).indexOf(a) - Object.keys(all).indexOf(b))
      .map((office) => all[office])

    // const contacts = await $content('lawyers')
    //   .where({
    //     slug: { $in: info.contact },
    //   })
    //   .fetch()

    const practiceAreas = await $content('practice-areas')
      .where({
        slug: { $in: info.practices },
      })
      .sortBy('title')
      .fetch()

    const lawyers = await $content('lawyers').only(['path', 'name']).fetch()

    return { info, lawyers, practiceAreas, offices }
  },
  head() {
    return {
      title: `Gulapa Law | ${this.info.name}`,
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
// h1:before {
//   content: '';
//   @apply block md:hidden absolute border-2 border-secondary -bottom-4 left-0 w-screen;
// }

.header::before {
  content: '';
  z-index: -1;
  @apply block absolute bg-primary w-screen rounded-br-md top-0 bottom-0 right-0;
}

li .nuxt-link-active {
  @apply bg-secondary text-white;
}

p:last-child span {
span:last-child {
  @apply hidden;
}
</style>
