<template>
  <div class="bg-white shadow rounded flex card">
    <div class="w-2/3 flex flex-col justify-between p-12">
      <div>
        <h2 class="text-xl font-semibold text-primary">{{ details.title }}</h2>
        <p>{{ details.description }}</p>
      </div>
      <div class="flex text-secondary">
        <p>{{ details.author }}</p>
        <p>{{ details.date }}</p>
      </div>
    </div>
    <div>
      <img :src="details.image" alt="" />
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
.card {
  min-height: 15.625rem;
}
</style>
