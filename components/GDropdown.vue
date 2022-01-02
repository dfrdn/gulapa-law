<template>
  <div>
    <button class="font-header font-semibold relative">
      {{ label }}
      <div class="absolute shadow rounded p-2 bg-white">
        <h2 v-for="item in items" :key="item.label">
          {{ item.label }}
        </h2>
      </div>
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    label: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped></style>
