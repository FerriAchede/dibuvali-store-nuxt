<template>
    <div class="flex flex-col w-full max-w-full">
        <label
            v-if="type !== 'checkbox'"
            :for="id"
            class="text-xs font-bold text-[var(--color-morado-hover)] relative top-2 ml-2 px-1 bg-[var(--color-background-content)] w-fit rounded-xl">
            {{ label }}
        </label>

        <div v-if="type === 'checkbox'" class="flex items-center gap-2 mt-2">
            <label
                :for="id"
                class="flex items-center gap-2 text-xs text-[var(--color-morado-hover)] hover:text-[var(--color-morado)] cursor-pointer">
                <Field
                    v-bind="field"
                    :id="id || name"
                    :name="name"
                    :type="type"
                    value="true"
                    v-model="checkoutStore.formData[name]"
                    class="accent-[var(--color-morado)]" />
                {{ label }}
            </label>
        </div>

        <Field
            v-else
            v-bind="field"
            :id="id || name"
            :name="name"
            :type="type"
            :placeholder="placeholder"
            v-model="checkoutStore.formData[name]"
            class="px-3 py-[11px] text-xs border-2 border-[var(--color-morado)] rounded focus:outline-none w-full"
            :as="'input'" />
        <!--        <span class="text-red-500 text-sm" v-if="checkoutStore.error?.[name]">
            {{ checkoutStore.error[name] }}
        </span> -->
    </div>
</template>

<script setup>
import { Field, useField, ErrorMessage } from "vee-validate";

const checkoutStore = useCheckoutStore();

const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    label: {
        type: String,
        required: false,
    },
    id: {
        type: String,
        required: false,
    },
    type: {
        type: String,
        default: "text",
    },
    placeholder: String,
});

const { field } = useField(props.name);
</script>
