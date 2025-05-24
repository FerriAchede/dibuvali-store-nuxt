<template>
    <div class="flex items-start justify-between">
        <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">
            Tu carrito ({{ itemCount }})
        </h2>
        <div class="ml-3 flex h-7 items-center">
            <button
                @click="close"
                class="relative -m-2 p-2">
                <span class="sr-only">Cerrar panel</span>
                <Icon name="mingcute:close-square-fill" />
            </button>
        </div>
    </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
const cart = useCartStore();
const { itemCount } = storeToRefs(cart);
const close = () => cart.toggleCart();
</script>

<style scoped>
.iconify {
    font-size: 1.5rem;
    color: var(--color-morado);
    transition: transform 0.2s ease, color 0.2s ease;
}

.iconify:hover, a:hover {
    color: var(--color-morado-hover);
}
</style>