<template>
  <div>
    <g-header
      :heading="lawyersHeader.heading"
      :description="lawyersHeader.description"
    />

    <section class="container space-y-8">
      <div
        id="partners"
        class="
          xl:gap-5
          gap-10
          grid grid-auto-flow
          md:grid-cols-3
          grid-cols-1
          xl:px-0
          px-5
        "
      >
        <g-lawyer
          v-for="partner in partners"
          :key="partner.slug"
          :details="partner"
        />
      </div>
      <div
        id="associates"
        class="
          xl:gap-4
          gap-10
          grid grid-auto-flow
          lg:grid-cols-4
          md:grid-cols-2
          sm:grid-cols-1
          xl:px-0
          px-5
        "
      >
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

<script>
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content }) {
    const { lawyersHeader } = await $content('lawyers-page').fetch()

    const associates = await $content('lawyers')
      .only(['slug', 'name', 'offices', 'email', 'image'])
      .where({ isAssociate: true })
      .fetch()

    const partners = await $content('lawyers')
      .only(['slug', 'name', 'offices', 'email', 'image'])
      .where({ isAssociate: false })
      .fetch()

    return { associates, partners, lawyersHeader }
  },
  head() {
    return {
      title: `Gulapa Law | ${this.lawyersHeader.heading}`,
      meta: [
        {
          hid: this.lawyersHeader.heading,
          name: 'description',
          content: this.lawyersHeader.description,
        },
      ],
    }
  },
})
</script>

<style scoped></style>
