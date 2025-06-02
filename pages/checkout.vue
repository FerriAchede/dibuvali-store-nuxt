<template>
    <div
        class="max-w-[1400px] mx-auto py-[30px] px-[30px] bg-[var(--color-background-content)] shadow-[20px_0_15px_-5px_#ffeae9b3,-20px_0_15px_-5px_#ffeae9b3]">
        <div class="max-w-screen-xl max-md:max-w-xl mx-auto">
            <div
                class="grid md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 lg:gap-x-12">
                <div class="lg:col-span-2">
                    <Form @submit="onSubmit">
                        <DeliveryForm />
                        <PaymentMethods />
                        <!-- <PromoCode /> -->
                    </Form>
                </div>
                <OrderSummary @submit-order="submitFormExternally" />
            </div>
        </div>
    </div>
</template>

<script setup>
import DeliveryForm from "@/components/checkout/DeliveryForm.vue";
import PaymentMethods from "@/components/checkout/PaymentMethods.vue";
// import PromoCode from "@/components/checkout/PromoCode.vue";
import OrderSummary from "@/components/checkout/OrderSummary.vue";
//import { checkoutSchema } from "@/utils/checkoutSchema.js";
import { Form, useForm } from "vee-validate";

const checkoutStore = useCheckoutStore();
const cartStore = useCartStore();
const router = useRouter();

const { handleSubmit, errors } = useForm({
    // validationSchema: checkoutSchema,
    initialValues: checkoutStore.formData,
});

async function processOrder() {
    if (checkoutStore.loading) return;
    const success = await checkoutStore.processOrder();

    if (success) {
        cartStore.clearCart();
        router.push(`/order-success/${checkoutStore.orderId}`);
    }
}

const onSubmit = (values) => {
    processOrder(checkoutStore.formData);
};

const submitFormExternally = handleSubmit(onSubmit);
</script>
