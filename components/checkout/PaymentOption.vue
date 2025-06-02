<template>
    <div
        class="bg-[var(--color-rosa)]/25 p-4 rounded-md border border-gray-300 max-w-sm"
        @click="$el.querySelector('input').click()">
        <div class="flex items-center">
            <label :for="id" class="relative flex items-center cursor-pointer">
                <input
                    :id="id"
                    type="radio"
                    name="method"
                    v-model="checkoutStore.formData.paymentMethod"
                    :value="id"
                    :checked="checked"
                    class="sr-only peer" />

                <div
                    class="mr-2 w-6 h-6 bg-transparent border-2 border-[var(--color-morado)] rounded-full peer-checked:bg-[var(--color-morado)] peer-checked:border-[var(--color-morado)] peer-hover:shadow-lg peer-hover:shadow-[var(--color-morado)]/50 peer-checked:shadow-lg peer-checked:shadow-[var(--color-morado)]/50 transition duration-300 ease-in-out"></div>
            </label>
            <div v-if="images && images.length > 0">
                <img
                    v-for="(img, i) in images"
                    :key="i"
                    :src="img"
                    class="w-12 mr-3" />
            </div>
            <div v-else>
                <Icon
                    name="mingcute:wifi-off-line"
                    class="custom-icon text-[var(--color-morado)]" />
            </div>
        </div>
        <p class="mt-4 text-sm text-[var(--color-morado)] font-medium">
            {{ text }}
        </p>
    </div>
</template>

<script setup>
const checkoutStore = useCheckoutStore();
defineProps({
    id: String,
    text: String,
    images: Array,
    checked: Boolean,
});
</script>

<style scoped>
.custom-icon {
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
