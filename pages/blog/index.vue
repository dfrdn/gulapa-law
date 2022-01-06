<template>
  <div>
    <g-header heading="G-News" description="Hear about" />
    <div class="container">
      <g-blog
        v-for="blog in blogs"
        :key="blog.slug"
        :details="
          combine(
            blog,
            lawyers.find((lawyer) => lawyer.name === blog.author)
          )
        "
      />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    // const { lawyersHeader } = await $content('lawyers-page').fetch()

    const blogs = await $content('blog').fetch()
    const lawyers = await $content('lawyers')
      .only(['slug', 'image', 'name'])
      .fetch()

    return { blogs, lawyers }
  },
  fetchOnServer: true,
  methods: {
    combine(blog, author) {
      return { ...blog, author }
    },
  },
  head() {
    return {
      title: `Gulapa Law | G-News`,
      meta: [
        {
          hid: 'G-News',
          name: 'description',
          content: 'G-News',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
