<template>
  <div>
    <g-header heading="G-News" description="Hear about" />
    <div class="container">
      <g-blog v-for="blog in blogs" :key="blog.slug" :details="blog" />
    </div>
    {{ blogs }}
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    // const { lawyersHeader } = await $content('lawyers-page').fetch()

    const blogs = await $content('blog').fetch()

    return { blogs }
  },
}
</script>

<style lang="scss" scoped></style>
