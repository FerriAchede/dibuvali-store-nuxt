<script setup>
import image_placeholder from "~/assets/placeholder.webp";
import LoadingSpinner from "@/components/decoration/LoadingSpinner.vue";
const props = defineProps({
    product: {
        type: Object,
        required: true,
    },
});

const isHovered = ref(false);
const isLoaded = ref(false);

const currentImage = ref(props.product.image || image_placeholder);

const setHoverImage = () => {
    isHovered.value = true;
};

const resetImage = () => {
    isHovered.value = false;
};

const onError = () => {
    currentImage.value = image_placeholder;
    isLoaded.value = true;
};

onMounted(() => {
    const img = new Image();
    img.src = currentImage.value;

    if (img.complete) {
        isLoaded.value = true;
    } else {
        img.onload = () => {
            isLoaded.value = true;
        };
        img.onerror = onError;
    }
});
</script>

<template>
    <NuxtLink :to="`/products/${product.slug}`">
        <div class="w-full">
            <div
                class="product-item"
                @mouseenter="product.hover_image && setHoverImage()"
                @mouseleave="product.hover_image && resetImage()">
                <div
                    class="image-wrapper bg-[var(--color-rosa)/50] border-32-solid border-[var(--color-morado)] rounded-lg shadow-[0_2px_5px_var(--color-morado-hover)]">
                    <div
                        v-if="!isLoaded && currentImage !== image_placeholder"
                        class="absolute inset-0 z-10 flex items-center justify-center bg-[var(--color-rosa)]/20 bg-opacity-70 rounded-md">
                        <LoadingSpinner />
                    </div>
                    <img
                        :src="currentImage"
                        :alt="isLoaded ? product.title : ''"
                        class="base-img"
                        :class="{
                            'fade-out': isHovered && product.hover_image,
                        }"
                        height="200"
                        width="200"
                        loading="lazy"
                        quality="70"
                        format="webp"
                        @load="isLoaded = true"
                        @error="onError" />
                    <NuxtImg
                        v-if="product.hover_image"
                        :src="product.hover_image"
                        :alt="product.title"
                        class="hover-img"
                        :class="{ 'fade-in': isHovered }"
                        height="200"
                        width="200"
                        quality="70"
                        format="webp"
                        loading="lazy" />
                </div>
                <p class="mt-1">{{ product.title }}</p>
                <span>{{ product.price }} {{ product.currency_code }}</span>
            </div>
        </div>
    </NuxtLink>
</template>

<style scoped>
.product-item {
    position: relative;
    text-align: center;
    background-color: var(--color-background);
    width: 220px;
    height: auto;
    margin: 0 auto;
    border-radius: 16px;
    padding: 10px;
    margin-bottom: auto;
}

.product-item img:hover {
    transform: scale(1) translateY(-1px);
    box-shadow: 0px 1px 6px var(--color-azul-celeste);
}

.product-item p,
span {
    color: var(--color-morado);
    padding-top: 8px;
}

.product-item p {
    margin-bottom: 0;
    font-weight: 700;
}

.product-item span {
    color: var(--color-azul-morado);
    font-weight: 600;
}

.image-wrapper {
    position: relative;
    width: 200px;
    height: 200px;
    margin: 0 auto;
}

.image-wrapper img {
    position: absolute;
    top: 0;
    left: 0;
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
    transition: opacity 0.5s ease;
    box-shadow: 0px 2px 5px var(--color-morado-hover);
    transition: opacity 0.5s ease, transform 0.3s ease, box-shadow 0.3s ease;
}

.base-img {
    z-index: 1;
    opacity: 1;
}

.hover-img {
    z-index: 2;
    opacity: 0;
}

.fade-in {
    opacity: 1 !important;
}

.fade-out {
    opacity: 0 !important;
}
</style>
