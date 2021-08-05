<template>
  <div class="relative overflow-hidden bg-white shadow rounded flex card">
    <div class="w-2/3 flex flex-col justify-between p-12">
      <div>
        <h2 class="text-xl font-semibold text-primary">{{ details.title }}</h2>
        <p>{{ details.description }}</p>
      </div>
      <div class="flex text-secondary space-x-8">
        <p>{{ details.author }}</p>
        <p>{{ new Date(details.date).toLocaleString() }}</p>
      </div>
    </div>
    <div class="absolute right-0 w-1/3">
      <img
        :src="details.image"
        :alt="details.image"
        class="w-full object-cover"
      />
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
