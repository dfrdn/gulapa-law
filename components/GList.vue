<template>
  <div
    class="
      overflow-y-auto
      bg-white
      lg:h-auto lg:flex lg:w-4/12 lg:justify-end lg:items-start
    "
  >
    <button
      class="fixed lg:hidden h-10 top-20 right-0 bg-white z-50"
      @click="handleTable"
    >
      pullout
    </button>
    <div
      id="GList"
      v-if="!isHidden"
      class="
        absolute
        right-0
        left-10
        top-0
        bottom-0
        lg:block lg:mt-32 lg:w-10/12
        align-start
        bg-white
        shadow
        lg:sticky lg:top-32
      "
    >
      <ul class="divide-y divide-gray-300 rounded border">
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
    </div>
  </div>
</template>

<script>
export default {
  props: {
    contents: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isHidden: true,
    }
  },
  mounted() {
    const windowWidth =
      window.screen.width < window.outerWidth
        ? window.screen.width
        : window.outerWidth
    this.isHidden = windowWidth < 500
  },
  methods: {
    handleTable() {
      this.isHidden = !this.isHidden
      const scrollY = window.scrollY
      if (!this.isHidden) {
        document.body.style.top = `-${scrollY}px`
        // document.getElementById('GList').style.top = `-${scrollY + 62}px`
        document.body.style.position = 'fixed'
      } else {
        document.body.style.position = ''
        document.body.style.top = ''
        console.log(scrollY)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
li .nuxt-link-active {
  @apply bg-secondary text-white;
}
</style>
