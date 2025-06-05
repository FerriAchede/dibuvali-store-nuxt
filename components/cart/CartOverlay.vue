<template>
    <Transition name="fade">
        <div
            v-if="cart.isOpen"
            @click="close"
            class="fixed inset-0 bg-gray-500/40 transition-opacity z-14"
            aria-hidden="true"></div>
    </Transition>
</template>

<script setup>
const cart = useCartStore();
const close = () => cart.toggleCart();
</script>
