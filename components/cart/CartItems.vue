<template>
    <div class="mt-8" v-if="items.length">
        <ul role="list" class="-my-6 divide-y divide-gray-200">
            <CartItem v-for="item in items" :key="item.id" :item="item" />
        </ul>
    </div>
    <div v-else class="mt-8 text-gray-500">Tu carrito está vacío.</div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import CartItem from "./CartItem.vue";

const cart = useCartStore();
const { items } = storeToRefs(cart);
</script>
