<template>
  <footer class="bg-primary w-full">
    <div
      class="
        container
        py-10
        grid
        md:grid-cols-4
        gap-3
        grid-cols-1
        px-10
        md:px-0
      "
    >
      <div class="flex flex-col text-white">
        <h3>Connect with Us</h3>
        <div class="space-y-2">
          <p>glaw@gulapalaw.com</p>
          <p>+63 2960 2845 to 47</p>
        </div>
      </div>
      <div class="flex flex-col text-white">
        <h3>Manila Address</h3>
        <p>
          G-Law (Gulapa Law Office) Exquadra Tower 1 Jade Drive, Ortigas Center,
          San Antonio, Pasig, Metro Manila
        </p>
      </div>
    </div>
    <div class="bg-secondary text-primary py-2">
      <div
        class="
          container
          flex flex-col
          md:flex-row
          justify-between
          items-center
          px-10
          md:px-0
        "
      >
        <p id="copyright" class="order-1 md:order-0">
          All Rights Reserved | Gulapa Law {{ new Date().getFullYear() }}
        </p>
        <div class="flex space-x-2 order-0 md:order-1">
          <a href="https://www.facebook.com/gulapalaw/"
            ><facebook-icon class="primary"
          /></a>
          <a href="https://twitter.com/gulapa_law"
            ><twitter-icon class="primary"
          /></a>
          <a href="https://www.instagram.com/gulapa_law/"
            ><instagram-icon class="primary"
          /></a>
          <a href="https://www.linkedin.com/company/gulapa-law-office"
            ><linked-in-icon class="primary"
          /></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped>
h3 {
  @apply uppercase text-secondary md:text-lg font-bold mb-2;
}

p {
  @apply text-sm md:text-base;
}

#copyright {
  @apply text-xs;
}
</style>
