<template>
  <div class="bg-primary mb-20">
    <div class="container space-y-16 text-white pt-32 pb-14">
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
      <p class="ml-20 text-xl w-7/12">
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
