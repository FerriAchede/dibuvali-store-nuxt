import { defineStore } from "pinia";

export const useCheckoutStore = defineStore("checkout", {
    state: () => ({
        loading: false,
        error: null,
        success: null,
        orderId: null,
        reference: null,
        formData: {
            name: "",
            surname: "",
            email: "",
            phone: "",
            address: "",
            city: "",
            province: "",
            zipCode: "",
            paymentMethod: "",
            termsAccepted: false,
        },
    }),

    actions: {
        async fetchOrder(payload) {
            const { $axios } = useNuxtApp();
            return await $axios("/checkout", {
                method: "POST",
                body: JSON.stringify(payload),
            });
        },

        async processOrder() {
            try {
                this.loading = true;
                this.error = null;
                this.success = null;
                this.orderId = null;

                await checkoutSchema.validate(this.formData, {
                    abortEarly: false,
                });

                const payload = {
                    billing_address: {
                        first_name: this.formData.name,
                        last_name: this.formData.surname,
                        email: this.formData.email,
                        phone: this.formData.phone,
                        address_1: this.formData.address,
                        city: this.formData.city,
                        province: this.formData.province,
                        postcode: this.formData.zipCode,
                        country: "ES",
                    },
                    payment_driver: this.formData.paymentMethod,
                    terms_accepted: this.formData.termsAccepted,
                };

                const data = await this.fetchOrder(payload);

                if (!data || data.error) {
                    const messageStore = useMessageStore();
                    messageStore.addMessage({
                        text: data.message || "Error al procesar el pedido",
                        type: "error",
                    });
                    throw new Error(
                        data.message || "Error al procesar el pedido"
                    );
                }

                this.success = data.message || "Pedido realizado con éxito";
                this.orderId = data.order_id || null;
                this.reference = data.reference || null;
                
                return true;
            } catch (err) {
                if (err.name === "ValidationError") {
                    this.error = {};
                    err.inner.forEach((validationError) => {
                        this.error[validationError.path] = validationError.message;
                    });
                
                    const messageStore = useMessageStore();
                    Object.values(this.error).forEach((error) => {
                        messageStore.addMessage({
                            text: error,
                            type: "error",
                        });
                    });
                
                } else {
                    this.error = err.message;
                    const messageStore = useMessageStore();
                    messageStore.addMessage({
                        text: this.error,
                        type: "error",
                    });
                }
                return false;
            } finally {
                this.loading = false;
            }
        },

        reset() {
            this.loading = false;
            this.error = null;
            this.success = null;
            this.orderId = null;
            this.reference = null;
        },
    },
});
