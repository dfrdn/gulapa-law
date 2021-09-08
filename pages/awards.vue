<template>
  <div>
    <g-header
      :heading="awardsHeader.heading"
      :description="awardsHeader.description"
    />
    <div class="container space-y-20 xl:px-0 px-5">
      <g-award
        v-for="award in awards"
        :key="award.slug"
        :details="award"
        class="space-y-10"
      />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import GAwards from '~/components/GAward.vue'
export default Vue.extend({
  components: { GAwards },
  async asyncData({ $content }) {
    const { awardsHeader } = await $content('awards-page').fetch()
    const awards = await $content('awards').fetch()
    return { awardsHeader, awards }
  },
})
</script>

<style lang="scss" scoped></style>
