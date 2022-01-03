<template>
  <div
    class="
      z-50
      lg:z-auto lg:h-auto lg:flex lg:w-4/12 lg:justify-end lg:items-start
    "
  >
    <!-- Mobile toggle -->
    <button
      class="
        fixed
        lg:hidden
        top-20
        right-0
        bg-white
        rounded-tl-full rounded-bl-full
        rotate-180
        z-50
      "
      @click="drawer"
    >
      <div class="rounded-full w-10 h-10 shadow-around bg-white">
        <chevron-icon class="w-10" transform="rotate(180)" />
      </div>
    </button>
    <!-- Drawer Menu -->
    <aside
      class="
        transform
        top-0
        right-0
        w-80
        bg-white
        fixed
        h-full
        overflow-auto
        ease-in-out
        transition-all
        duration-300
        z-30
        lg:block
        lg:mt-32
        lg:w-10/12
        lg:h-auto
        lg:overflow-hidden
        lg:z-auto
        lg:sticky
        lg:top-32
      "
      :class="isOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'"
    >
      <div class="close">
        <button
          class="lg:hidden absolute top-0 right-0 mt-4 mr-4"
          @click="isOpen = false"
        >
          <svg
            class="w-6 h-6 text-secondary"
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

      <ul class="divide-y divide-gray-300 rounded border">
        <li
          class="
            lg:hidden
            text-lg text-secondary
            uppercase
            font-bold
            p-4
            bg-primary
          "
        >
          <h2>Our Practice Areas</h2>
        </li>
        <li
          v-for="content in contents"
          :key="content.title"
          class="text-gray-500"
        >
          <nuxt-link
            :to="`${content.path}`"
            class="p-4 block hover:bg-secondary hover:text-white"
          >
            {{ content[Object.keys(content)[0]] }}
          </nuxt-link>
        </li>
      </ul>
    </aside>
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
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  props: {
    contents: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
      links: [
        {
          label: 'Gulapa Law',
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
    }
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
