<template>
    <li
        v-if="value !== 0 && value !== '€0.00'"
        class="flex flex-wrap gap-4 text-sm "
        :class="{ 'text-[15px] font-semibold text-[var(--color-morado)]': bold }">
        {{ label }}
        <span
            class="ml-auto"
            :class="bold ? 'text-slate-900' : 'font-semibold text-slate-900'"
            >{{ value }}</span
        >
    </li>
</template>

<script setup>
defineProps({
    label: String,
    value: [String, Number],
    bold: {
        type: Boolean,
        default: false,
    },
});
</script>
