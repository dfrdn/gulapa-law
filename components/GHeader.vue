<template>
  <div class="bg-primary xl:mb-20 mb-10">
    <div
      class="
        container
        space-y-16
        text-white
        xl:px-0
        px-10
        xl:pt-32
        lg:pt-24
        md:pt-16
        pt-12
        pb-14
      "
    >
      <h2
        class="
          uppercase
          text-3xl
          font-semibold
          tracking-wide
          relative
          inline-block
        "
      >
        {{ heading }}
      </h2>
      <p class="xl:ml-20 xl:text-xl text-lg xl:w-7/12">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  props: {
    heading: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
h2:after {
  content: '';
  @apply block absolute border-2 border-secondary right-0 w-screen mt-3;
}
</style>
