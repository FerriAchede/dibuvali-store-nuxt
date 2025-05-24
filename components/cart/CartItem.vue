<template>
    <li class="flex py-6">
        <div
            class="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
            <img
                :src="item.image || '/images/placeholder.png'"
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
                <p class="text-gray-500">Cantidad: {{ item.quantity }}</p>
                <div class="flex">
                    <button
                        @click="remove(item.variant_id)"
                        class="font-medium text-[var(--color-rosa)] hover:text-[var(--color-rosa-hover)]">
                        <Icon
                            name="mingcute:delete-2-line"
                            class="cursor-pointer"/>
                    </button>
                </div>
            </div>
        </div>
    </li>
</template>

<script setup>
defineProps({ item: Object });
const cart = useCartStore();
const remove = (id) => cart.removeItem(id);
</script>
