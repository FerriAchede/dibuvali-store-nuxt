<template>
  <div>
    <button
      v-if="previous"
      class="fixed top-1/2 left-4 -translate-y-1/2 z-50 bg-white/80 hover:bg-white text-[var(--color-morado)] hover:text-[var(--color-morado)] p-2 rounded-full shadow-lg transition-all duration-300 ease-in-out flex items-center justify-center hover:p-3 active:scale-90"
      @click="navigateTo(`/products/${previous}`)">
      <Icon name="mingcute:right-fill" class="rotate-180 w-6 h-6" />
    </button>

    <button
      v-if="next"
      class="fixed top-1/2 right-4 -translate-y-1/2 z-50 bg-white/80 hover:bg-white text-[var(--color-morado)] hover:text-[var(--color-morado)] p-2 rounded-full shadow-lg transition-all duration-300 ease-in-out flex items-center justify-center hover:p-3 active:scale-90"
      @click="navigateTo(`/products/${next}`)">
      <Icon name="mingcute:right-fill" class="w-6 h-6" />
    </button>
  </div>
</template>

<script setup>
defineProps({
  next: String,
  previous: String,
});
</script>
