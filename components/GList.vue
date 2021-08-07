<template>
  <div class="hidden lg:flex lg:w-4/12 lg:justify-end lg:items-start">
    <div
      class="lg:block mt-32 w-10/12 align-start bg-white shadow sticky top-32"
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
}
</script>

<style lang="scss" scoped>
li .nuxt-link-active {
  @apply bg-secondary text-white;
}
</style>
