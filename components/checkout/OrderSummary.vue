<template>
    <div class="relative">
        <h2 class="text-2xl font-bold text-[var(--color-morado)] mb-6">
            Resumen del Pedido
        </h2>
        <CartItems class="mb-5" />
        <ul class="text-slate-500 font-medium space-y-4">
            <SummaryItem label="Subtotal" :value="formatCurrency(subTotal)" />
            <SummaryItem
                label="Descuento"
                :value="formatCurrency(discount_total - subTotal)" />
            <SummaryItem
                label="Envío"
                :value="formatCurrency(shipping_total - subTotal)" />
            <SummaryItem label="Impuestos" :value="formatCurrency(tax)" />
            <hr class="border-slate-300" />
            <SummaryItem label="Total" :value="formatCurrency(total)" bold />
        </ul>
        <div class="space-y-4 mt-8">
            <button
                v-if="parseCurrency(total) > 0"
                type="button"
                class="rounded-md px-4 py-2.5 w-full text-sm font-medium tracking-wide bg-[var(--color-morado)] hover:bg-[var(--color-morado-hover)] text-white cursor-pointer flex items-center justify-center"
                :disabled="loading"
                @click="$emit('submit-order')">
                <span>Completar Compra</span>
            </button>
            <button
                type="button"
                @click="router.push('/products')"
                class="rounded-md px-4 py-2.5 w-full text-sm font-medium tracking-wide bg-[var(--color-rosa)] hover:bg-[var(--color-rosa-hover)] border border-gray-300 text-white cursor-pointer opacity-90 hover:opacity-80">
                Seguir Comprando
            </button>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import SummaryItem from "./SummaryItem.vue";
import LoadingSpinner from "../decoration/LoadingSpinner.vue";

const router = useRouter();
const cart = useCartStore();
const {
    total,
    tax,
    subTotal,
    discount_total = 0,
    shipping_total = 0,
    loading,
} = storeToRefs(cart);

function parseCurrency(value) {
    if (typeof value === "string") {
        return parseFloat(value.replace(/[^\d.-]/g, ""));
    }
    return value || 0;
}

function formatCurrency(value) {
    return `€${parseCurrency(value).toFixed(2)}`;
}

watch(total, (newTotal) => {
    if (newTotal == 0) {
        router.push("/");
    }
});

defineEmits(['submit-order'])
</script>
