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
        flex
        md:flex-col
      "
      :class="[variant === 'partner' ? 'flex-col' : '']"
    >
      <div class="relative">
        <div
          :class="[
            variant === 'partner' ? '' : 'w-20 h-28 md:h-auto md:w-auto',
          ]"
        >
          <img
            :src="details.image"
            class="w-full object-cover block"
            :class="[variant === 'partner' ? 'partner' : 'associate']"
            :alt="details.name"
          />
        </div>

        <div
          class="absolute bg-white top-0 md:bottom-0 md:top-auto md:left-0"
          :class="[
            variant === 'partner'
              ? 'bottom-0 top-auto left-0 rounded-tr-lg'
              : 'left-full rounded-br-lg md:rounded-br-none md:rounded-tr-lg ',
          ]"
        >
          <p
            class="text-primary py-1"
            :class="[variant === 'partner' ? 'px-10 text-sm' : 'px-5 text-xs']"
          >
            {{ offices }}
          </p>
        </div>
      </div>
      <div
        class="flex-grow"
        :class="[variant === 'partner' ? '' : 'self-end md:self-stretch']"
      >
        <div
          class="py-2"
          :class="[
            variant === 'partner' ? 'text-lg pl-10 pr-5' : 'text-sm pl-3 pr-2',
          ]"
        >
          <h3 class="text-secondary uppercase font-semibold">
            {{ details.name }}
          </h3>
        </div>
        <hr class="border-2 border-secondary" />
        <div
          class="text-white py-2"
          :class="[
            variant === 'partner' ? 'text-sm pl-10 pr-5' : 'text-xs pl-3 pr-2',
          ]"
        >
          <p>
            <email-icon class="white inline-block mr-1 h-2 w-2" />{{
              details.email
            }}
          </p>
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
  @media screen and (min-width: 768px) {
    height: 30rem;
  }
}

.associate {
  height: 7rem;
  @media screen and (min-width: 768px) {
    img {
      width: 120px;
    }
    height: 20rem;
  }
}
</style>
