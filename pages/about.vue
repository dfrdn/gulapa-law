<template>
  <div>
    <g-header
      :heading="aboutHeader.heading"
      :description="aboutHeader.description"
    />
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content }) {
    const { aboutHeader, about } = await $content('about').fetch()

    return { aboutHeader, about }
  },
})
</script>

<style scoped></style>
