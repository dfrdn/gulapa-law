<template>
  <n-link :to="`/practice-areas/${details.slug}`">
    <div
      class="
        rounded-lg
        overflow-hidden
        bg-primary
        shadow
        transform
        hover:shadow-lg hover:scale-102
        transition
        duration-200
        ease-in-out
        flex flex-col
      "
    >
      <div>
        <img
          :src="details.image"
          class="w-full object-cover block"
          :alt="details.title"
        />
      </div>
      <h2>{{ details.title }}</h2>
      <p>{{ details.description }}</p>
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
