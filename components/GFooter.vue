<template>
  <footer class="bg-primary w-full">
    <div
      class="container py-10 grid md:grid-cols-5 gap-3 grid-cols-1 px-10 md:px-5 xl:px-0"
    >
      <div class="flex flex-col text-white">
        <h3>Connect with Us</h3>
        <div class="space-y-2">
          <p>glaw@gulapalaw.com</p>
          <p>+632 8658 7865 to 47</p>
        </div>
      </div>
      <div class="flex flex-col text-white">
        <nuxt-link to="/offices/manila"><h3>Manila</h3></nuxt-link>
        <p>
          Unit 8, 25/F Exquadra Tower, Exchange Road cor. Jade Drive, Ortigas
          Center, 1605 Pasig City, PH
        </p>
      </div>
      <div class="flex flex-col text-white">
        <nuxt-link to="/offices/cebu"><h3>Cebu</h3></nuxt-link>
        <p>
          Unit 1511, 15th Floor, BPI Corporate Center, Archbishop Reyes Avenue,
          Cebu City, PH 6000
        </p>
      </div>
      <div class="flex flex-col text-white">
        <nuxt-link to="/offices/new-york"><h3>New York</h3></nuxt-link>
        <p>1115 Broadway (25th and Broadway) near Madison Square Park, USA</p>
      </div>
      <div class="flex flex-col text-white">
        <nuxt-link to="/offices/san-francisco"
          ><h3>San Francisco</h3></nuxt-link
        >
        <p>2/F 95 3rd and Mission Sts. San Francisco, CA 94103 USA</p>
      </div>
    </div>
    <div class="bg-secondary text-primary py-2">
      <div
        class="container flex flex-col md:flex-row justify-between items-center px-10 md:px-0"
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
