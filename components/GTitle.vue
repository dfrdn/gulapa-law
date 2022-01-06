<template>
  <div class="space-y-1 md:space-y-5 text-center md:text-left">
    <h2
      class="
        uppercase
        md:text-lg
        font-semibold
        tracking-wide
        relative
        inline-block
      "
    >
      {{ heading }}
    </h2>
    <hr class="md:hidden border-secondary border-b-2 mx-10" />
    <h3 class="text-2xl md:text-4xl font-semibold px-5 md:px-0">
      {{ subheading }}
    </h3>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    heading: {
      type: String,
      required: true,
    },
    subheading: {
      type: String,
      required: true,
    },
    alt: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style lang="scss" scoped>
h2:after {
  content: '';
  @apply hidden md:block absolute border border-secondary right-0 w-screen mt-2;
}
</style>
