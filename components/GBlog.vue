<template>
  <nuxt-link :to="`/blog/${details.slug}`">
    <div
      class="
        relative
        overflow-hidden
        bg-white
        shadow-around
        rounded
        flex
        card
        block
        hover:scale-102
        mb-8
      "
    >
      <div class="w-2/3 flex flex-col justify-between p-12 space-y-4">
        <div>
          <h2 class="text-2xl font-semibold text-primary">
            {{ details.title }}
          </h2>
          <p class="mt-2">{{ details.description }}</p>
        </div>
        <div class="flex text-secondary space-x-8">
          <p>{{ details.author }}</p>
          <p>{{ new Date(details.date).getDate() }}</p>
        </div>
      </div>
      <div class="absolute right-0 top-0 bottom-0 w-1/3">
        <img
          :src="details.image"
          :alt="details.image"
          class="block h-full w-full object-cover"
        />
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    details: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  min-height: 15.625rem;
}
</style>
