<template>
  <div>
    <section class="container xl:mb-20 mb-10 flex flex-row">
      <div class="w-screen lg:w-8/12">
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
              <h2
                class="
                  uppercase
                  text-3xl
                  font-semibold
                  tracking-wide
                  relative
                  md:inline-block
                  block
                  text-center
                  md:text-left
                "
              >
                {{ info.name }}
              </h2>
            </div>
            <div class="flex md:flex-row flex-col">
              <div class="mt-4 md:mt-12 w-full md:w-7/12 order-2 md:order-1">
                <p class="text-base mb-8">
                  {{ info.description }}
                </p>
                <div>
                  <p>{{ info.email }}</p>
                  <p>{{ info.mobile }}</p>
                </div>
              </div>
              <div
                class="
                  w-full
                  mt-9
                  md:w-5/12 md:-mt-9
                  flex
                  justify-center
                  relative
                  order-1
                  md:order-2
                "
              >
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
                    left-1
                    md:left-9
                    rounded-br-lg rounded-bl-lg
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
        <div class="mt-8 space-y-10 md:w-9/12 w-full px-10 md:px-0">
          <div class="space-y-4">
            <h3 class="uppercase text-lg text-primary font-bold">
              Practice Areas
            </h3>
            <nuxt-link
              v-for="practice in practiceAreas"
              :key="practice.slug"
              :to="`/practice-areas/${practice.slug}`"
              class=""
            >
              {{ practice.title + ' |' }}
            </nuxt-link>
          </div>
          <div class="space-y-4">
            <h3 class="uppercase text-lg text-primary font-bold">
              Admission/s
            </h3>
            <p v-for="admission in info.admissions">
              {{ '> ' + admission }}
            </p>
          </div>
          <div class="space-y-4">
            <h3 class="uppercase text-lg text-primary font-bold">Education</h3>
            <p v-for="educ in info.education">
              {{ '> ' + educ }}
            </p>
          </div>
          <div class="space-y-4">
            <h3 class="uppercase text-lg text-primary font-bold">
              Matters Handled
            </h3>
            <p v-for="matter in info.matters">
              {{ '> ' + matter }}
            </p>
          </div>
        </div>
      </div>
      <div class="hidden lg:flex lg:w-4/12 lg:justify-end lg:items-start">
        <div
          class="
            lg:block
            mt-32
            w-10/12
            align-start
            bg-white
            shadow
            sticky
            top-32
          "
        >
          <ul class="divide-y divide-gray-300 rounded border">
            <li
              v-for="lawyer in lawyers"
              :key="lawyer.slug"
              class="text-gray-500"
            >
              <nuxt-link
                :to="`/lawyers/${lawyer.slug}`"
                class="p-4 block hover:bg-secondary hover:text-white"
              >
                {{ lawyer.name }}
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
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
      .fetch()

    const lawyers = await $content('lawyers').only(['slug', 'name']).fetch()

    return { info, lawyers, practiceAreas, offices }
  },
}
</script>

<style lang="scss" scoped>
h2:after {
  content: '';
  @apply block absolute border-2 border-secondary right-0 w-screen mt-3;
}

.header::before {
  content: '';
  z-index: -1;
  @apply block absolute bg-primary w-screen rounded-br-md top-0 bottom-0 right-0;
}

li .nuxt-link-active {
  @apply bg-secondary text-white;
}
</style>
