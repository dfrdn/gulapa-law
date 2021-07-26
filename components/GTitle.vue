<template>
  <div class="space-y-5">
    <h2
      class="
        uppercase
        text-lg
        font-semibold
        tracking-wide
        relative
        inline-block
      "
    >
      {{ heading }}
    </h2>
    <h3 class="text-4xl font-semibold">{{ subheading }}</h3>
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
  @apply block absolute border border-secondary right-0 w-screen mt-2;
}
</style>
