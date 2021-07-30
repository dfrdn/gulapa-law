<template>
  <n-link :to="`/practice-areas/${details.slug}`">
    <div
      class="
        rounded-lg
        overflow-hidden
        bg-white
        shadow
        transform
        shadow-xl
        px-10
        w-60
        h-60
        hover:scale-102
        transition
        duration-200
        ease-in-out
        flex flex-col
        justify-center
        items-center
      "
    >
      <div>
        <img
          :src="details.image"
          class="w-auto object-cover block h-20 mb-10"
          :alt="details.title"
        />
      </div>
      <h2 class="text-xl text-primary text-center font-semibold">
        {{ details.title }}
      </h2>
      <p class="hidden hover:block">{{ details.description }}</p>
    </div>
  </n-link>
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

<style lang="scss" scoped></style>
