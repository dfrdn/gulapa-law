<template>
  <div>{{ info }}</div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const info = await $content(`practice-areas`, params.slug).fetch()

    return { info }
  },
}
</script>

<style lang="scss" scoped></style>
