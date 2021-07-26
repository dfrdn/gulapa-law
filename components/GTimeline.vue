<template>
  <ol class="flex space-x-4 text-xs text-center">
    <li
      v-for="(event, index) in events"
      :key="event.event"
      class="flex items-center"
      :class="[index % 2 ? 'flex-col-reverse' : 'flex-col']"
    >
      <div class="dot m-2"></div>
      <p class="text-secondary font-bold">{{ event.year }}</p>
      <p id="event-name">{{ event.event }}</p>
    </li>
  </ol>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    events: {
      type: Array,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
#event-name {
  max-width: 20ch;
}
ol {
  li {
    &:not(:first-child) {
      .dot {
        @apply w-3 h-3 rounded-full bg-white;
        // border: 1px solid #fff;
      }

      //   transform: translateY(20px);
    }
  }
}
</style>
