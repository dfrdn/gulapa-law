<template>
  <div>
    <g-header heading="G-News" description="Hear about" />
    <div class="container flex md:flex-row flex-col">
      <div class="md:w-4/5 md:order-1 order-2">
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
      <div class="md:w-1/5 sticky pt-4 px-5 md:pl-5 md:order-2 order-1">
        <div class="hidden md:block">
          <a
            class="twitter-timeline"
            data-height="500"
            data-chrome="noscrollbar"
            href="https://twitter.com/gulapa_law?ref_src=twsrc%5Etfw"
          ></a>
        </div>
        <div class="md:hidden">
          <a
            class="twitter-timeline"
            data-height="300"
            data-chrome="noscrollbar"
            href="https://twitter.com/gulapa_law?ref_src=twsrc%5Etfw"
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    // const { lawyersHeader } = await $content('lawyers-page').fetch()

    const blogs = await $content('blog').sortBy('date', 'desc').fetch()
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

<style lang="scss">
/* Hide scrollbar for Chrome, Safari and Opera */
.timeline-Viewport :-webkit-scrollbar {
  display: none;
}

.timeline-Viewport {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
