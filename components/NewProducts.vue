<script setup>
import ProductCardSkeleton from "./decoration/ProductCardSkeleton.vue";
import LoadingSpinner from "@/components/decoration/LoadingSpinner.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ProductCard from "@/components/ProductCard.vue";

const config = useRuntimeConfig();
const baseUrl = config.public.apiBaseUrl;

const { data: products, status } = await useFetch(
    () => `${baseUrl}/products/newest`,
    {
        lazy: true,
    }
);
</script>
<template>
    <section
        class="text-center py-10 px-8 bg-[var(--color-background-content)] max-w-[1400px] mx-auto shadow-[20px_0_15px_-5px_#ffeae9b3,-20px_0_15px_-5px_#ffeae9b3] relative">
        <!-- <div v-if="status === 'pending'" class="container mx-auto px-4">
          <LoadingSpinner />
        </div> -->
        <div v-if="status === 'pending'" class="container mx-auto px-4">
            <h2 class="text-[var(--color-morado)] text-[24px] font-bold mb-5">
                ¡Nuevo!
            </h2>
            <div
                class="product-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-0">
                <ProductCardSkeleton v-for="n in 4" :key="n" />
            </div>
        </div>

        <div
            v-else-if="status === 'success' && products?.data"
            class="container mx-auto px-4">
            <h2 class="text-[var(--color-morado)] text-[24px] font-bold mb-5">
                ¡Nuevo!
            </h2>

            <Swiper
                v-if="products.data.length > 0"
                :modules="[Navigation, Pagination]"
                :slides-per-view="1"
                :space-between="10"
                :breakpoints="{
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                }"
                navigation
                pagination
                class="py-6 relative">
                <SwiperSlide
                    v-for="product in products.data"
                    :key="product.id"
                    class="pb-12">
                    <ProductCard :product="product" />
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
</template>

<style>
.swiper-button-next,
.swiper-button-prev {
    color: var(--color-morado);
    opacity: 1;
    visibility: visible;
    position: absolute;
    top: 93%;
    z-index: 12;
    width: 44px;
}

.swiper-button-next {
    right: 40px;
}

.swiper-button-prev {
    left: 40px;
}

.swiper-button-next:hover,
.swiper-button-prev:hover {
    color: var(--color-morado-hover);
}

.swiper-pagination-bullet {
    background-color: #ccc;
    opacity: 1;
}

.swiper-pagination-bullet-active {
    background-color: var(--color-morado);
}
</style>
