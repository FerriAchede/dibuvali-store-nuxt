<template>
    <div class="mt-12">
        <h2 class="text-2xl font-bold text-[var(--color-morado)] mb-6">Pago</h2>
        <div class="grid gap-4 lg:grid-cols-2">
            <PaymentOption
                v-for="method in paymentMethods"
                :key="method.id"
                :id="method.id"
                :text="method.text"
                :images="method.images"
                :checked="method.default" />
        </div>
    </div>
</template>

<script setup>
import { onMounted } from "vue";
import PaymentOption from "./PaymentOption.vue";
// import stripe from "../../assets/payments/stripe.webp";

const checkoutStore = useCheckoutStore();

onMounted(() => {
    if (!checkoutStore.formData.paymentMethod) {
        const defaultMethod = paymentMethods.find((m) => m.default);
        checkoutStore.formData.paymentMethod =
            defaultMethod?.id || paymentMethods[0].id;
    }
});

const paymentMethods = [
    {
        id: "cash-in-hand",
        text: "Pago offline",
        images: [],
        default: true,
    },
    /*   {
        id: "stripe",
        text: "Paga con Stripe",
        images: [stripe],
        default: false,
  }, */
];
</script>
