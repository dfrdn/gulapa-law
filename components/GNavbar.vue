<template>
  <nav
    :class="[isExpanded ? 'max-w-full' : 'max-w-1320 rounded-lg']"
    class="
      z-50
      shadow
      font-header font-semibold
      text-tertiary
      capitalize
      sticky
      top-0
      mt-4
      bg-white
      transition-all
      mx-auto
      w-full
    "
  >
    <div class="container flex justify-around px-6 py-4">
      <n-link v-for="link in links" :key="link.label" :to="link.link">
        {{ link.label }}
      </n-link>
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
      if (this.scrollPosition >= 130) {
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
