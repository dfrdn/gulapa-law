<template>
  <n-link :to="`/lawyers/${details.slug}`">
    <div
      class="
        rounded-lg
        overflow-hidden
        bg-primary
        shadow
        transform
        hover:shadow-lg hover:scale-102
        transition
        duration-200
        ease-in-out
      "
    >
      <div class="relative">
        <img
          :src="details.image"
          class="w-full object-cover block"
          :class="[variant === 'partner' ? 'partner' : 'associate']"
          :alt="details.name"
        />
        <div class="absolute bg-white rounded-tr-lg bottom-0">
          <p
            class="text-primary"
            :class="[variant === 'partner' ? 'px-10 text-sm' : 'px-5 text-xs']"
          >
            {{ offices }}
          </p>
        </div>
      </div>
      <div>
        <div
          class="py-1"
          :class="[
            variant === 'partner' ? 'text-2xl pl-10 pr-5' : 'text-xl pl-5 pr-2',
          ]"
        >
          <h3 class="text-secondary uppercase font-semibold">
            {{ details.name }}
          </h3>
        </div>
        <hr class="border-t-0 border-2 border-secondary" />
        <div
          class="text-white py-1"
          :class="[
            variant === 'partner' ? 'text-sm pl-10 pr-5' : 'text-xs pl-5 pr-2',
          ]"
        >
          <p>{{ details.email }}</p>
        </div>
      </div>
    </div>
  </n-link>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      default: 'partner',
    },
    details: {
      type: Object,
      required: true,
    },
  },
  computed: {
    offices() {
      const all = {
        manila: 'MNL',
        cebu: 'CEB',
        'new-york': 'NY',
        'san-francisco': 'SF',
      }
      const offices = this.details.offices
        .sort(
          (a, b) => Object.keys(all).indexOf(a) - Object.keys(all).indexOf(b)
        )
        .map((office) => all[office])
      return offices.join(' | ')
    },
  },
}
</script>

<style lang="scss" scoped>
.partner {
  height: 30rem;
}

.associate {
  height: 20rem;
}
</style>
