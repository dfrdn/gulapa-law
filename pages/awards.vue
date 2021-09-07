<template>
  <div>Gains and Recognitions</div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const { aboutHeader, about } = await $content('about').fetch()

    return { aboutHeader, about }
  },
  head() {
    return {
      title: `Gulapa Law | ${this.aboutHeader.heading}`,
      meta: [
        {
          hid: this.aboutHeader.heading,
          name: 'description',
          content: this.aboutHeader.description,
        },
      ],
    }
  },
}
}
</script>

<style lang="scss" scoped></style>
