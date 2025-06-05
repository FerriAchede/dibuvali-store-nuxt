import { defineStore } from "pinia";
import { useMessageStore } from "./messagesStore";
import { useNuxtApp } from "#app";
// const config = useRuntimeConfig();
// const baseUrl = config.public.apiBaseUrl;
const baseUrl = "http://192.168.1.35:8000/api";

export const useCartStore = defineStore("cart", {
    state: () => ({
        items: [],
        isOpen: false,
        loading: false,
        subTotal: 0,
        tax: 0,
        total: 0,
        discount_total: 0,
        shipping_total: 0,
    }),

    getters: {
        itemCount: (state) => state.items.length,
        totalPrice: (state) =>
            state.items.reduce((sum, item) => {
                const price = parseFloat(item.price.replace(/[^0-9.-]+/g, ""));
                return sum + price * item.quantity;
            }, 0),
    },

    actions: {
        async fetchCartAPI() {
            const { $axios } = useNuxtApp();
            return await $axios("/cart");
        },

        async addItemToCartAPI(variant_id, quantity) {
            const { $axios } = useNuxtApp();
            return await $axios("/cart/add", {
                method: "POST",
                body: {
                    variant_id,
                    quantity,
                },
            });
        },

        async updateCartItemQuantityAPI(variant_id, quantity) {
            const { $axios } = useNuxtApp();
            return await $axios(`/cart/update/${variant_id}`, {
                method: "PUT",
                body: {
                    quantity,
                },
            });
        },

        async removeItemFromCartAPI(itemId) {
            const { $axios } = useNuxtApp();
            return await $axios(`/cart/remove/${itemId}`, {
                method: "DELETE",
            });
        },

        async clearCartAPI() {
            const { $axios } = useNuxtApp();
            return await $axios("/cart/clear", {
                method: "POST",
            });
        },

        toggleCart() {
            this.isOpen = !this.isOpen;
        },
        async fetchCart() {
            try {
                const { data, error } = await this.fetchCartAPI();

                if (error?.value) {
                    throw new Error("API error al obtener carrito");
                }

                if (!data?.items) {
                    this.items = [];
                    return;
                }

                this.items = data?.items.map((line) => ({
                    id: line.id,
                    variant_id: line.variant_id,
                    title: line.title,
                    quantity: line.quantity,
                    price: line.price,
                    stock: line.stock,
                    image: line.image,
                    slug: line.slug,
                }));

                this.subTotal = data?.totals.subTotal || 0;
                this.tax = data?.totals.tax || 0;
                this.total = data?.totals.total || 0;
                this.discount_total = data?.totals.discount_total || 0;
                this.shipping_total = data?.totals.shipping_total || 0;
            } catch (err) {
                console.error("Error al obtener carrito:", err);
            }
        },
        async addItem(product) {
            if (this.loading) return;
            this.loading = true;
        
            const messageStore = useMessageStore();
        
            try {
                const existing = this.items.find(
                    (item) => item.variant_id === product.variant_id
                );
        
                const quantityToAdd = Math.min(product.quantity || 1, product.stock);
        
                if (existing) {
                    if (existing.quantity === quantityToAdd) {
                        return;
                    }
        
                    const {error} = await this.updateCartItemQuantityAPI(
                        existing.id,
                        quantityToAdd
                    );
        
                    if (error) {
                        throw new Error("API error al actualizar producto: " + error);
                    }
        
                    await this.fetchCart();
        
                    messageStore.addMessage({
                        text: `Cantidad actualizada de ${product.title} en el carrito.`,
                        data: {
                            previousQuantity: existing.quantity,
                            newQuantity: quantityToAdd,
                        },
                        type: "update",
                    });
                } else {
                    const {error} = await this.addItemToCartAPI(
                        product.variant_id,
                        quantityToAdd
                    );
        
                    if (error) {
                        throw new Error("API error al añadir producto: " + error);
                    }
        
                    await this.fetchCart();
        
                    messageStore.addMessage({
                        text: `${product.title} añadido al carrito.`,
                        data: {
                            price: product.price,
                            currency_code: product.currency_code,
                        },
                        type: "add",
                        timeout: 6500,
                    });
                }
            } catch (err) {
                console.error("Error al añadir o actualizar producto al carrito:", err);
                messageStore.addMessage({
                    text: `Error al añadir o actualizar ${product.title} en el carrito.`,
                    type: "error",
                });
            } finally {
                this.loading = false;
            }
        },
        async removeItem(lineId) {
            if (this.loading) return;
            this.loading = true;

            const messageStore = useMessageStore();
            const item = this.items.find((i) => i.variant_id === lineId);
            if (!item) return;

            try {
                const { error } = await this.removeItemFromCartAPI(item.id);

                if (error?.value)
                    throw new Error("API error al eliminar producto");

                messageStore.addMessage({
                    text: `${item.title} eliminado del carrito.`,
                    type: "delete",
                });

                await this.fetchCart();
            } catch (err) {
                console.error("Error al eliminar producto del carrito:", err);
                messageStore.addMessage({
                    text: `Error al eliminar ${item.title} del carrito.`,
                    type: "error",
                });
            } finally {
                this.loading = false;
            }
        },

        async clearCart() {
            if (this.loading) return;
            this.loading = true;

            const messageStore = useMessageStore();

            try {
                const { error } = await this.clearCartAPI();

                if (error?.value)
                    throw new Error("API error al limpiar carrito");

                messageStore.addMessage({
                    text: "Carrito vaciado correctamente.",
                    type: "deleteAll",
                });

                await this.fetchCart();
            } catch (err) {
                console.error("Error al limpiar el carrito:", err);
                messageStore.addMessage({
                    text: "Error al vaciar el carrito.",
                    type: "error",
                });
            } finally {
                this.loading = false;
            }
        },
    },
});
