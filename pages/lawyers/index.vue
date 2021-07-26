<template>
  <div>
    Lawyers
    <section class="container space-y-8">
      <div id="partners" class="gap-5 grid grid-auto-flow grid-cols-3">
        <g-lawyer
          v-for="partner in partners"
          :key="partner.slug"
          :details="partner"
        />
      </div>
      <div id="associates" class="gap-4 grid grid-auto-flow grid-cols-4">
        <g-lawyer
          v-for="associate in associates"
          :key="associate.slug"
          :details="associate"
          variant="associate"
        />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content }) {
    const associates = await $content('lawyers')
      .only(['slug', 'name', 'offices', 'email', 'image'])
      .where({ isAssociate: true })
      .fetch()

    const partners = await $content('lawyers')
      .only(['slug', 'name', 'offices', 'email', 'image'])
      .where({ isAssociate: false })
      .fetch()

    return { associates, partners }
  },
})
</script>

<style scoped></style>
