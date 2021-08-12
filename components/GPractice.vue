<template>
  <n-link :to="`/practice-areas/${details.slug}`">
    <div
      class="
        rounded-lg
        overflow-hidden
        bg-white
        shadow
        border border-gray-100
        transform
        px-5
        w-60
        h-60
        hover:scale-102
        transition
        duration-200
        ease-in-out
        flex flex-col
        justify-center
        items-center
        group
        hover:text-left hover:items-start
      "
      :class="[
        variant === 'practiceArea' ? 'hover:bg-primary' : 'hover:bg-secondary',
      ]"
    >
      <div>
        <img
          :src="details.image"
          class="
            w-auto
            object-cover
            block
            h-20
            mb-8
            group-hover:text-left
            group-hover:h-8
            group-hover:filter
            group-hover:brightness-0
            group-hover:invert
            group-hover:mb-2
          "
          :alt="details.title"
        />
      </div>
      <h2
        class="
          text-xl text-primary text-center
          font-semibold
          group-hover:text-left group-hover:text-base group-hover:font-bold
        "
        :class="[
          variant === 'practiceArea'
            ? 'group-hover:text-secondary'
            : 'group-hover:text-primary',
        ]"
      >
        {{ details.title }}
      </h2>
      <p class="hidden text-sm text-white group-hover:block">
        {{ description }}
      </p>
    </div>
  </n-link>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      default: 'practiceArea',
    },
    details: {
      type: Object,
      required: true,
    },
  },
  computed: {
    description() {
      const description =
        this.details.description.substr(
          0,
          this.details.description.lastIndexOf(
            ' ',
            150 - this.details.title.length * 2
          )
        ) + '...'
      return description
    },
  },
}
</script>

<style lang="scss" scoped></style>
