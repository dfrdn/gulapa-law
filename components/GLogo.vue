<template>
  <img
    class="logo-text text-center"
    :src="require(`assets/img/${alt ? 'logo-figure' : 'logo-text'}.png`)"
    alt="logo"
    height="76px"
  />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    alt: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style>
.logo-text {
  animation: 1s appear;
  margin: auto;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
