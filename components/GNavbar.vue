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
    <div class="container px-5 py-2 md:py-0 md:px-8 lg:px-12 xl:px-0">
      <div class="flex items-center justify-between">
        <div
          class="
            grid grid-cols-3
            justify-items-center
            place-items-center place-content-center
            md:hidden
          "
        >
          <!-- Mobile toggle -->
          <div class="md:hidden justify-self-start flex">
            <button class="items-center" @click="drawer">
              <svg
                class="h-8 w-8 fill-current text-primary"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>

          <!-- Header logo -->
          <div class="md:hidden">
            <n-link :to="links[0].link">
              <g-logo />
            </n-link>
          </div>
        </div>

        <!-- Navbar -->
        <div class="hidden md:block container px-2 md:px-6 md:py-4">
          <div class="hidden md:flex justify-around md:items-center">
            <n-link :to="links[0].link">{{ links[0].label }}</n-link>
            <g-dropdown :items="offices.locations">{{
              offices.label
            }}</g-dropdown>
            <n-link
              v-for="link in links.slice(2)"
              :key="link.label"
              :to="link.link"
            >
              {{ link.label }}
            </n-link>
          </div>
        </div>

        <!-- Dark Background Transition -->
        <transition
          enter-class="opacity-0"
          enter-active-class="ease-out transition-medium"
          enter-to-class="opacity-100"
          leave-class="opacity-100"
          leave-active-class="ease-out transition-medium"
          leave-to-class="opacity-0"
        >
          <div
            @keydown.esc="isOpen = false"
            v-show="isOpen"
            class="z-10 fixed inset-0 transition-opacity"
          >
            <div
              @click="isOpen = false"
              class="absolute inset-0 bg-black opacity-50"
              tabindex="0"
            ></div>
          </div>
        </transition>

        <!-- Drawer Menu -->
        <aside
          class="
            px-5
            py-2
            transform
            top-0
            left-0
            w-64
            bg-white
            fixed
            h-full
            overflow-auto
            ease-in-out
            transition-all
            duration-300
            z-30
          "
          :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
        >
          <div class="close">
            <button
              class="absolute top-0 right-0 mt-4 mr-4"
              @click="isOpen = false"
            >
              <svg
                class="w-6 h-6 text-primary"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <span
            @click="isOpen = false"
            class="flex w-full items-center p-4 border-b text-primary"
          >
            <n-link :to="links[0].link">
              <g-logo class="h-12" />
            </n-link>
          </span>

          <ul
            class="tracking-wider text-primary text-lg"
            @click="isOpen = false"
          >
            <n-link :to="links[0].link" class="block border-t py-4">
              {{ links[0].label }}
            </n-link>
            <div class="border-t py-4">
              {{ offices.label }}
              <div class="ml-2">
                <n-link
                  v-for="office in offices.locations"
                  :key="office.label"
                  :to="office.link"
                  class="block"
                >
                  {{ office.label }}
                </n-link>
              </div>
            </div>
            <n-link
              v-for="link in links.slice(2)"
              :key="link.label"
              :to="link.link"
              class="block border-t py-4"
            >
              {{ link.label }}
            </n-link>
          </ul>
        </aside>
      </div>
    </div>

    <!-- <div class="container px-2 md:px-6 md:py-4">
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
    </div> -->
  </nav>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  async fetch() {
    this.offices.locations = await this.$content('offices')
      .only('location', 'path')
      .fetch()
    this.offices.locations = this.offices.locations.map((location) => ({
      label: location.location,
      link: location.path,
    }))
  },
  fetchOnServer: false,
  data() {
    return {
      offices: {
        label: 'Our Offices',
        locations: [],
      },
      isOpen: false,
      links: [
        {
          label: 'Gulapa Law',
          link: '/',
        },
        {
          label: 'Our Offices',
          link: '/offices',
          offices: [
            {
              label: 'Manila',
              link: '/offices/manila',
            },
            {
              label: 'New York',
              link: '/offices/new-york',
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
      // burgerStyle: {
      //   '--padding': '10px',
      //   '--layer-bg-color': 'yellow',
      //   '--active-layer-bg-color': '#ABABAB',
      //   '--layer-width': '10px',
      // },
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

    drawer() {
      this.isOpen = !this.isOpen
    },
  },
  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (process.client) {
          if (isOpen) document.body.style.setProperty('overflow', 'hidden')
          else document.body.style.removeProperty('overflow')
        }
      },
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
