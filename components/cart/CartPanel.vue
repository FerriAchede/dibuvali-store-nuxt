<template>
    <Transition name="slide-cart">
        <div
            v-if="cart.isOpen"
            class="fixed inset-0 overflow-hidden z-15"
            aria-labelledby="slide-over-title"
            role="dialog"
            aria-modal="true">
            <div class="absolute inset-0 overflow-hidden">
                <div
                    class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                    <div
                        class="pointer-events-auto w-screen max-w-md transform transition-transform duration-300 ease-in-out bg-[var(--color-background)] shadow-xl">
                        <CartContent />
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script setup>
import CartContent from "./CartContent.vue";
const cart = useCartStore();
</script>
