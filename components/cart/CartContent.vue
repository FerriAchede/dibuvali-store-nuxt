<template>
    <div class="flex h-full flex-col overflow-y-scroll">
        <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6 z-10">
            <CartHeader />
            <CartItems />
        </div>
        <CartFooter v-if="items.length" />
    </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import CartHeader from "./CartHeader.vue";
import CartItems from "./CartItems.vue";
import CartFooter from "./CartFooter.vue";

const cart = useCartStore();
const { items } = storeToRefs(cart);
</script>
