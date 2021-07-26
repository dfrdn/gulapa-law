<template>
  <div>
    Lawyers
    <section class="container">
      <div id="partners" class="gap-5 grid grid-auto-flow grid-cols-3">
        <g-lawyer></g-lawyer>
        <g-lawyer></g-lawyer>
        <g-lawyer></g-lawyer>
      </div>
      <div id="associates" class="gap-4 grid grid-auto-flow grid-cols-4">
        <g-lawyer variant="associate"></g-lawyer>
        <g-lawyer variant="associate"></g-lawyer>
        <g-lawyer variant="associate"></g-lawyer>
        <g-lawyer variant="associate"></g-lawyer>
        <g-lawyer variant="associate"></g-lawyer>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped></style>
