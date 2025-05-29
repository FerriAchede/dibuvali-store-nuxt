<template>
    <div class="mt-12">
        <h2 class="text-2xl font-bold text-[var(--color-morado)] mb-6">
            Pago
        </h2>
        <div class="grid gap-4 lg:grid-cols-2">
            <!--             <PaymentOption
                id="card"
                text="Paga con tu tarjeta de débito o crédito"
                :images="[
                    'https://readymadeui.com/images/visa.webp',
                    'https://readymadeui.com/images/american-express.webp',
                    'https://readymadeui.com/images/master.webp',
                ]"
                checked /> -->
            <PaymentOption
                id="offline"
                text="Pago offline"
                :images="[]"
                checked />
            <PaymentOption
                id="stripe"
                text="Paga con tu cuenta de Stripe"
                :images="[stripe]"
                />
        </div>
    </div>
</template>

<script setup>
import PaymentOption from "./PaymentOption.vue";
import stripe from "../../assets/payments/stripe.webp";
</script>
