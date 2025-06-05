<script setup>
import { useCartStore } from "~/stores/cartStore";

const cartStore = useCartStore();
onMounted(() => {
    cartStore.fetchCart();
});
</script>

<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<style></style>
