<template>
    <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
        <div class="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal</p>
            <p>{{ cart.subTotal }} €</p>
        </div>
        <p class="mt-0.5 text-sm text-gray-500">
            Los gastos de envío se calculan en el checkout.
        </p>
        <div class="mt-6">
            <NuxtLink
                to="/checkout"
                @click="handleCheckoutClick"
                class="checkout flex items-center justify-center rounded-md text-[var(--color-background)] bg-[var(--color-morado)] px-6 py-3 font-medium shadow hover:bg-[var(--color-morado-hover)]">
                Ir al pago
            </NuxtLink>
        </div>
        <div class="mt-6 grid grid-cols-2 gap-4 text-sm text-gray-500">
            <div class="flex justify-center">
                <button
                    @click="cart.clearCart"
                    class="font-medium cursor-pointer text-[var(--color-rosa)] hover:text-[var(--color-rosa-hover)]">
                    Vaciar carrito
                </button>
            </div>
            <div class="flex justify-center">
                <button
                    @click="handleCheckoutClick"
                    class="font-medium text-indigo-600 hover:text-indigo-500">
                    Seguir comprando &rarr;
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
const cart = useCartStore();

function handleCheckoutClick() {
    cart.toggleCart();
}
</script>

<style scoped>
a.checkout {
    transition: all 0.2s ease;
    color: var(--color-background);
}
</style>