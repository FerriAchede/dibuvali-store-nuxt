<template>
  <CartOverlay />
  <CartPanel />
</template>

<script setup>
import CartOverlay from '~/components/cart/CartOverlay.vue';
import CartPanel from '~/components/cart/CartPanel.vue';
</script>

<style scoped>
.slide-cart-enter-from,
.slide-cart-leave-to {
  transform: translateX(100%);
}
.slide-cart-enter-active,
.slide-cart-leave-active {
  transition: transform 0.3s ease-in-out;
}
.slide-cart-enter-to,
.slide-cart-leave-from {
  transform: translateX(0%);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}


</style>