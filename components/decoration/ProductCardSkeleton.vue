<script setup>
import LoadingSpinner from '@/components/decoration/LoadingSpinner.vue';
</script>
<template>
  <div class="w-full">
    <div class="product-item">
      <div class="image-wrapper bg-[var(--color-rosa)/50] border-32-solid border-[var(--color-morado)] rounded-lg shadow-[0_2px_5px_var(--color-morado-hover)] relative overflow-hidden">
        <div class="skeleton-img flex items-center justify-center">
          <LoadingSpinner />
        </div>
      </div>
      <p class="skeleton-text w-3/4 mx-auto mt-2"></p>
      <span class="skeleton-text w-1/2 mx-auto mt-1"></span>
    </div>
  </div>
</template>

<style scoped>
.product-item {
  position: relative;
  text-align: center;
  background-color: var(--color-background);
  width: 220px;
  height: auto;
  margin: 0 auto;
  border-radius: 16px;
  padding: 10px;
  margin-bottom: auto;
}

.image-wrapper {
  position: relative;
  width: 200px;
  height: 200px;
  margin: 0 auto;
}

.skeleton-img {
  width: 100%;
  height: 100%;
  background-color: #e2e2e2;
  animation: pulse 1.5s infinite;
  border-radius: 8px;
}

.skeleton-text {
  height: 16px;
  background-color: #e2e2e2;
  border-radius: 4px;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
}
</style>
