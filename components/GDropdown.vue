<template>
  <div class="relative">
    <button
      @click="isOpen = !isOpen"
      class="relative font-header font-semibold z-10"
      :class="{ 'text-secondary': $nuxt.$route.path.includes('offices') }"
    >
      <slot></slot>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 inline"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>
    <button
      v-if="isOpen"
      @click="isOpen = false"
      tabindex="-1"
      class="fixed w-full h-full inset-0 cursor-default"
    ></button>
    <transition name="fade">
      <div
        v-if="isOpen"
        class="absolute shadow-around rounded bg-white w-44 py-1 mt-1 right-0"
      >
        <n-link
          v-for="item in items"
          :key="item.label"
          :to="item.link"
          @click.native="isOpen = false"
          class="hover:bg-primary hover:text-white block py-1 px-6"
        >
          {{ item.label }}
        </n-link>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      isOpen: false,
    }
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  @apply transition;
}
.fade-enter {
  @apply opacity-0 transform scale-50 origin-top-right;
}

.fade-leave-to {
  @apply opacity-0 transform scale-75 origin-top-right;
}

.nuxt-link-exact-active,
.nuxt-link-active:not(.nuxt-link-active:first-child) {
  @apply text-secondary;
}
</style>
