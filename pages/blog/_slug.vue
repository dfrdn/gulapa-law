<template>
  <section>
    <g-header :heading="blog.title" description="hoho" />
    <article class="container">
      <nuxt-content :document="blog" class="prose prose-xl mx-auto" />
    </article>
  </section>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const blog = await $content('blog', params.slug).fetch()

    return { blog }
  },
}
</script>

<style lang="scss" scoped></style>
