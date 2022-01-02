<template>
  <nav
    :class="[isExpanded ? 'max-w-full' : 'max-w-1320 md:rounded-lg']"
    class="
      z-50
      shadow-around
      font-header font-semibold
      text-tertiary
      capitalize
      sticky
      top-0
      md:mt-4
      bg-white
      transition-all
      mx-auto
      w-full
    "
  >
    <div class="container px-2 md:px-6 md:py-4">
      <div class="hidden md:flex justify-around md:items-center">
        <n-link :to="links[0].link">
          <span v-if="!isExpanded">{{ links[0].label }}</span>
          <span v-else><g-logo class="h-12" :alt="true" /></span>
        </n-link>
        <button class="font-header font-semibold relative">
          {{ links[1].label }}
          <div class="absolute shadow rounded p-2 bg-white">
            <h2 v-for="office in links[1].offices" :key="office.label">
              {{ office.label }}
            </h2>
          </div>
        </button>
        <n-link
          v-for="link in links.slice(2)"
          :key="link.label"
          :to="link.link"
        >
          {{ link.label }}
        </n-link>
      </div>
      <div
        class="
          grid grid-cols-3
          justify-items-center
          place-content-center place-items-center
          md:hidden
        "
      >
        <v-burger
          type="arrow"
          :burgerStyle="burgerStyle"
          class="place-self-start"
        />
        <g-logo class="place-self-center" />
      </div>
    </div>
  </nav>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      links: [
        {
          label: 'G-Law',
          link: '/',
        },
        {
          label: 'Our offices',
          link: '/offices',
          offices: [
            {
              label: 'Manila',
              link: '/manila',
            },
            {
              label: 'New York',
              link: '/new-york',
            },
          ],
        },
        {
          label: 'Who we are',
          link: '/about',
        },
        {
          label: 'Our practice areas',
          link: '/practice-areas',
        },
        {
          label: 'The lawyers',
          link: '/lawyers',
        },
        {
          label: 'Awards',
          link: '/awards',
        },
        {
          label: 'Blog',
          link: '/blog',
        },
      ],
      isExpanded: false,
      scrollPosition: 0,
      burgerStyle: {
        '--padding': '10px',
        '--layer-bg-color': 'yellow',
        '--active-layer-bg-color': '#ABABAB',
        '--layer-width': '10px',
      },
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const width =
        window.innerWidth > 0
          ? window.innerWidth
          : document.documentElement.clientWidth
      this.scrollPosition = window.scrollY
      if (this.scrollPosition >= 120) {
        this.isExpanded = true
      } else {
        this.isExpanded = false
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.nuxt-link-exact-active,
.nuxt-link-active:not(.nuxt-link-active:first-child) {
  @apply text-secondary;
}

.max-w-1320 {
  max-width: 1320px;
}
</style>
