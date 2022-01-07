<template>
  <div>
    <div class="rounded-lg bg-primary py-5 md:pl-6 px-4 md:px-0">
      <h2 class="text-white md:text-2xl text-lg font-bold flex">
        {{ details.awardbody }}
      </h2>
    </div>
    <div class="space-y-2">
      <p
        v-for="award in details.award"
        :key="award"
        :details="award"
        class="ml-4 xl:ml-20 xl:text-xl text-md"
      >
        {{ `> ${award}` }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    details: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
h2:after {
  content: '';
  @apply md:border-2 md:border-secondary md:ml-4 md:my-auto md:flex-grow;
}
h2:before {
  content: '';
  @apply border-2 border-secondary mr-2 md:border-0;
}
</style>
