<template>
  <div>
    <g-header heading="G-News" description="Hear about" />
    <div class="container flex">
      <div class="w-2/3">
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
      <div class="w-1/3 sticky top-10">
        <a
          class="twitter-timeline"
          data-height="800"
          href="https://twitter.com/gulapa_law?ref_src=twsrc%5Etfw"
          >Tweets by gulapa_law</a
        >
      </div>
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
      script: [
        {
          hid: 'twitter',
          type: 'text/javascript',
          src: '//platform.twitter.com/widgets.js',
          async: true,
          defer: true,
        },
      ],

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
