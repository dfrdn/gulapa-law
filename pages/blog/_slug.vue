<template>
  <section class="px-5 md:px-0 space-y-8">
    <div class="title space-y-2 mx-auto xl:mt-32 lg:mt-24 md:mt-16 mt-12">
      <h1 class="text-5xl font-semibold text-primary">{{ blog.title }}</h1>
      <hr class="border-2 border-secondary" />

      <div class="flex space-x-4">
        <nuxt-link :to="author.path" class="">
          <img
            :src="author.image"
            :alt="author.name"
            class="h-12 w-12 rounded-full object-fill"
          />
        </nuxt-link>
        <div class="">
          <nuxt-link :to="author.path" class="block underline">{{
            author.name
          }}</nuxt-link>
          <p>
            {{
              new Date(blog.date).toLocaleString('en-GB', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })
            }}
          </p>
        </div>
      </div>
    </div>

    <div class="">
      <img
        :src="blog.image"
        :alt="blog.title"
        class="object-cover w-screen blogImage"
      />
    </div>
    <article class="container">
      <!-- <pre>{{ blog }}</pre> -->
      <nuxt-content :document="blog" class="prose prose-xl mx-auto" />
    </article>
  </section>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const blog = await $content('blog', params.slug).fetch()
    const [author] = await $content('lawyers')
      .where({ name: { $eq: blog.author } })
      .only(['slug', 'image', 'name'])
      .fetch()
    return { blog, author }
  },
  head() {
    return {
      title: `Gulapa Law | ${this.blog.title}`,
      meta: [
        {
          hid: this.blog.slug,
          name: 'description',
          content: this.blog.description,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
// h1::after {
//   content: '';
//   @apply absolute block left-0  w-screen border-2 border-secondary;
// }
.title {
  max-width: 65ch;
}

.blogImage {
  height: 70vh;
}
</style>
