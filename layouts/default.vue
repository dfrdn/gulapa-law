<template>
  <div class="antialiased flex flex-col min-h-screen">
    <n-link to="/">
      <g-logo class="w-72 hidden md:block mt-4 mx-auto" />
    </n-link>
    <g-navbar />
    <Nuxt keep-alive class="flex-grow mt-0 md:-mt-7 mb-20" />
    <g-footer />
  </div>
</template>

<style>
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Montserrat', 'Lucida Sans', 'Lucida Sans Regular',
    'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
</style>
