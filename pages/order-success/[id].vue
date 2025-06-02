<template>
    <div class="max-w-3xl mx-auto p-6 text-center">
        <div
            class="bg-[var(--background-color-content)] rounded-xl shadow-md p-6 border border-gray-200">
            <h1 class="text-2xl font-bold text-[var(--color-morado)] mb-4">
                Pedido realizado con éxito
            </h1>
            <p class="text-gray-700 mb-2">
                <strong>ID del pedido:</strong> {{ order.order_id }}
            </p>
            <p class="text-gray-700 mb-4">
                <strong>Referencia:</strong> {{ order.reference }}
            </p>

            <NuxtLink
                to="/"
                class="go-back inline-block bg-[var(--color-morado)] hover:bg-[var(--color-morado-hover)] text-white px-5 py-2 rounded-xl text-sm font-medium transition">
                Volver a la tienda
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";

const checkoutStore = useCheckoutStore();
const router = useRouter();
const route = useRoute();

const order = ref({
    order_id: checkoutStore.orderId,
    reference: checkoutStore.reference || "Desconocida",
});

onMounted(() => {
    if (!checkoutStore.reference) {
        router.push("/");
        return;
    }

    const orderId = route.params.id;
    order.value = {
        order_id: orderId,
        reference: checkoutStore.reference || "Desconocida",
    };
});
</script>

<style scoped>
a.go-back {
    transition: all 0.2s ease;
    color: var(--color-background);
}
</style>
