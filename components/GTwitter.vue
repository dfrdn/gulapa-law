<template>
  <div v-html="oembedHtml"></div>
</template>

<script>
// https://publish.twitter.com/oembed?url=https://twitter.com/jack/status/20&omit_script=1

export default {
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
    }
  },
  props: ['oembedHtml', 'tweetId'],
  mounted() {
    if (this.tweetId) twttr.widgets.createTweet(this.tweetId, this.$el)
    else twttr.widgets.load(this.$el)
  },
}
</script>
