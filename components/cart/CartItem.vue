<template>
    <li class="flex py-6">
        <div
            class="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
            <NuxtImg
                :src="item.image || '/assets/placeholder.webp'"
                :alt="item.title"
                class="size-full object-cover" />
        </div>

        <div class="ml-4 flex flex-1 flex-col">
            <div>
                <div
                    class="flex justify-between text-base font-medium text-gray-900">
                    <h3>
                        <NuxtLink :to="`/products/${item.slug}`">
                            {{ item.title }}
                        </NuxtLink>
                    </h3>
                    <p class="ml-4">
                        {{ item.price }} {{ item.currency_code }}
                    </p>
                </div>
                <div
                    v-html="item.description"
                    class="prose mb-6 text-sm text-gray-500" />
            </div>

            <div class="flex flex-1 items-end justify-between text-sm">
                <div v-if="!cart.loading" class="flex items-center gap-1 w-full sm:col-span-1">
                    <div class="flex items-center border border-gray-400 rounded-md shadow-sm overflow-hidden">
                        <button
                            @click="quantity = Math.max(1, quantity - 1)"
                            class="py-1 px-2 transition-all duration-300 hover:bg-gray-200 active:scale-95">
                            <Icon name="mingcute:minimize-fill" />
                        </button>

                        <input
                            v-model.number="quantity"
                            type="text"
                            min="1"
                            :max="item.stock"
                            class="font-semibold text-gray-900 text-xs py-1.5 w-full max-w-[30px] bg-transparent placeholder:text-gray-900 text-center outline-0"
                            placeholder="1" />

                        <button
                            @click="quantity = Math.min(item.stock, quantity + 1)"
                            class="py-1 px-2 transition-all duration-300 hover:bg-gray-200 active:scale-95">
                            <Icon name="mingcute:add-fill" />
                        </button>
                    </div>

                    <button
                        @click="updateQuantity"
                        class="ml-2 flex items-center border border-gray-400 rounded-md shadow-sm overflow-hidden py-1 px-2 transition-all duration-300 hover:bg-gray-200 active:scale-95">
                        <Icon name="mingcute:refresh-anticlockwise-1-fill" />
                    </button>
                </div>
                <LoadingSpinner v-else />

                <button
                    @click="remove(item.variant_id)"
                    class="font-medium text-[var(--color-rosa)] hover:text-[var(--color-rosa-hover)]">
                    <Icon
                        name="mingcute:delete-2-line"
                        class="cursor-pointer" />
                </button>
            </div>
        </div>
    </li>
</template>

<script setup>
import LoadingSpinner from "../decoration/LoadingSpinner.vue";

const props = defineProps({ item: Object });
const { item } = props;

const cart = useCartStore();
const remove = (id) => cart.removeItem(id);

const quantity = ref(item.quantity || 1);

const updateQuantity = async () => {
    const updatedItem = { ...item, quantity: quantity.value };
    await cart.addItem(updatedItem);
};
</script>
