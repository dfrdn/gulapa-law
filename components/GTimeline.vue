<template>
  <ol
    class="
      md:space-x-4
      space-y-8
      md:space-y-0
      text-xs
      md:text-center
      flex
      md:inline-flex md:justify-between
      relative
      w-full
      flex-col
      md:flex-row
    "
  >
    <li
      v-for="(event, index) in events"
      :key="event.event"
      class="flex items-center md:flex-col px-3 space-x-4 md:space-x-0"
    >
      <h3
        class="
          text-secondary text-xl
          font-bold
          w-1/5
          md:w-full
          text-right
          md:text-center
        "
      >
        {{ event.year }}
      </h3>
      <div class="dot m-2 relative"></div>
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
  max-width: 25ch;
}
ol {
  &::after {
    content: '';
    @apply absolute md:right-0 md:left-0 md:h-1 bg-white md:w-full md:mx-auto md:top-10 w-1 h-full top-5 left-1/4 transform translate-x-2;
  }

  li {
    &:not(:first-child) {
      .dot {
        @apply w-3 h-3 rounded-full bg-white;
        // border: 1px solid #fff;
      }

      // transform: translateY(20px);
    }
    &:first-child {
      .dot {
        @apply w-3 h-3 transform rotate-45 bg-white relative;
      }
    }
  }
}

.below {
  top: 50%;
}
.above {
  top: 0;
}
</style>
