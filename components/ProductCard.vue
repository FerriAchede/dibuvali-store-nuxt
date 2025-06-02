<script setup>
import image_placeholder from "../../assets/placeholder.webp";

const props = defineProps({
    product: {
        type: Object,
        required: true,
    },
});

const isHovered = ref(false);

const setHoverImage = () => {
    isHovered.value = true;
};

const resetImage = () => {
    isHovered.value = false;
};
</script>

<template>
    <NuxtLink :to="`/products/${product.slug}`">
        <div class="w-full">
            <div
                class="product-item"
                @mouseenter="product.hover_image && setHoverImage()"
                @mouseleave="product.hover_image && resetImage()">
                <div class="image-wrapper">
                    <img
                        :src="product.image || image_placeholder"
                        :alt="product.title"
                        class="base-img"
                        :class="{
                            'fade-out': isHovered && product.hover_image,
                        }" />
                    <img
                        v-if="product.hover_image"
                        :src="product.hover_image"
                        :alt="product.title + ' hover'"
                        class="hover-img"
                        :class="{ 'fade-in': isHovered }" />
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
    font-weight: 500;
}

.product-item span {
    color: #813bfbd8;
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
