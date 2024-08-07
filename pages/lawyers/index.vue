<template>
  <div>
    <g-header
      :heading="lawyersHeader.heading"
      :description="lawyersHeader.description"
    />

    <section class="container space-y-8">
      <h2 class="text-4xl font-medium text-primary text-center md:text-left">
        Partners
      </h2>
      <div
        id="partners"
        class="xl:gap-5 gap-10 grid grid-auto-flow md:grid-cols-3 grid-cols-1 xl:px-0 px-5"
      >
        <g-lawyer
          v-for="partner in partners"
          :key="partner.slug"
          :details="partner"
        />
      </div>

      <h2 class="text-4xl font-medium text-primary text-center md:text-left">
        Of Counsels
      </h2>
      <div
        id="of-counsels"
        class="xl:gap-4 gap-10 grid grid-auto-flow lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 xl:px-0 px-5"
      >
        <g-lawyer
          v-for="associate in associates.filter(({ position }) =>
            position.includes('Of Counsel')
          )"
          :key="associate.slug"
          :details="associate"
          variant="associate"
        />
      </div>

      <h2 class="text-4xl font-medium text-primary text-center md:text-left">
        Associates
      </h2>
      <div
        id="associates"
        class="xl:gap-4 gap-10 grid grid-auto-flow lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 xl:px-0 px-5"
      >
        <g-lawyer
          v-for="associate in associates.filter(({ position }) =>
            position.includes('Associate')
          )"
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
    const { lawyersHeader, lawyersRank } = await $content(
      'lawyers-page'
    ).fetch()

    const associates = await $content('lawyers')
      .only([
        'slug',
        'name',
        'offices',
        'email',
        'image',
        'startDate',
        'position',
      ])
      .where({ position: { $ne: 'Partner' } })
      .sortBy('startDate')
      .fetch()

    associates.sort(
      (a, b) => lawyersRank.indexOf(a.name) - lawyersRank.indexOf(b.name)
    )

    const partners = await $content('lawyers')
      .only(['slug', 'name', 'offices', 'email', 'image', 'startDate'])
      .where({ position: 'Partner' })
      .sortBy('startDate', 'asc')
      .fetch()

    partners.sort(
      (a, b) => lawyersRank.indexOf(a.name) - lawyersRank.indexOf(b.name)
    )

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
