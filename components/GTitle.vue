<template>
  <div>
    <h2 class="uppercase text-xs font-medium">{{ heading }}</h2>
    <h3 class="text-2xl">{{ subheading }}</h3>
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

<style scoped></style>
