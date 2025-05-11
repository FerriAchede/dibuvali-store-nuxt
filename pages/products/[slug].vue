<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Thumbs, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/navigation";
import StarDecoration from "~/components/decoration/StarDecoration.vue";

const route = useRoute();
const config = useRuntimeConfig();
const baseUrl = config.public.apiBaseUrl;

const { data } = await useFetch(`${baseUrl}/products/${route.params.slug}`);
const product = computed(() => data.value?.data);
const quantity = ref(1);
const thumbsSwiper = ref(null);

function setThumbsSwiper(swiper) {
    thumbsSwiper.value = swiper;
}
</script>

<template>
    <div v-if="product" class="product-grid">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="relative">
                <Swiper
                    :modules="[Thumbs, Navigation]"
                    :thumbs="{ swiper: thumbsSwiper }"
                    class="rounded-xl mb-6 ">
                    <SwiperSlide>
                        <img
                            :src="product.image"
                            class="w-full h-auto object-cover rounded-2xl" />
                    </SwiperSlide>

                    <SwiperSlide v-for="(img, i) in product.images" :key="i">
                        <img
                            :src="img"
                            class="w-full h-auto object-cover rounded-2xl" />
                    </SwiperSlide>
                </Swiper>
                <StarDecoration v-if="product.image" />
                <Swiper
                    v-if="[product.image, ...product.images].length > 1"
                    :modules="[Thumbs]"
                    slides-per-view="5"
                    space-between="10"
                    watch-slides-progress
                    @swiper="setThumbsSwiper"
                    class="nav-for-slider">
                    <SwiperSlide
                        v-for="(img, i) in [product.image, ...product.images]"
                        :key="'thumb-' + i">
                        <img
                            :src="img"
                            class="rounded-xl border border-transparent hover:border-indigo-600 cursor-pointer transition-all duration-300 w-20 h-20 object-cover" />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div>
                <h1
                    class="text-3xl font-semibold mb-4 text-[var(--color-morado)]">
                    {{ product.title }}
                    
                </h1>
                <div class="flex items-center mb-6">
                    <div
                        :class="{
                            'text-2xl font-semibold text-[var(--color-morado)] font-manrope leading-9 pr-5': true,
                            'sm:border-r border-[var(--color-morado)]': product.tags && product.tags.length > 0
                        }">
                        {{ product.price }} {{ product.currency_code }}
                    </div>
                    <div v-if="product.tags && product.tags.length > 0" class="ml-4">
                        <div class="flex flex-wrap gap-2 mt-1 items-center justify-center">
                            <Icon :name="product.tags.length > 1 ? 'mingcute:tag-2-line' : 'mingcute:tag-line'" />
                            <span
                                v-for="(tag, index) in product.tags"
                                :key="index"
                                class="px-3 py-1 bg-[var(--color-azul-celeste)] text-sm text-black rounded-full">
                                {{ tag }}
                            </span>
                        </div>
                    </div>
                </div>


                <div
                    v-html="product.description"
                    class="prose mb-6 text-gray-700" />

                <div class="mb-4">
                    <span class="text-sm text-gray-500">Tipo: </span>
                    <span class="font-medium">{{ product.type }}</span>
                </div>

                <div v-if="product.brand" class="mb-4">
                    <span class="text-sm text-gray-500">Colección: </span>
                    <span class="font-medium">{{ product.brand }}</span>
                </div>


                <div
                    v-if="product.stock > 0"
                    class="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                    <div
                        class="flex items-center justify-center w-full sm:col-span-1">
                        <button
                            @click="quantity = Math.max(1, quantity - 1)"
                            class="group py-4 px-6 border border-gray-400 rounded-l-full shadow-sm shadow-transparent transition-all duration-500 hover:shadow-[var(--color-background)] hover:bg-[var(--color-background)]">
                            <Icon name="mingcute:minimize-fill" />
                        </button>
                        <input
                            v-model="quantity"
                            type="text"
                            min="1"
                            :max="product.stock"
                            class="font-semibold text-gray-900 text-lg py-[14px] px-6 w-full lg:max-w-[89px] border-y border-gray-400 bg-transparent placeholder:text-gray-900 text-center hover:bg-[var(--color-background)] focus-within:bg-gray-50 outline-0"
                            placeholder="1" />
                        <button
                            @click="quantity = Math.min(product.stock, quantity + 1)"
                            class="group py-4 px-6 border border-gray-400 rounded-r-full shadow-sm shadow-transparent transition-all duration-500 hover:shadow-[var(--color-background)] hover:bg-[var(--color-background)]">
                            <Icon name="mingcute:add-fill" hight="22" />
                        </button>
                    </div>
                    <button
                        class="group py-4 px-5 rounded-full bg-[var(--color-morado)] text-[var(--color-background)] font-semibold text-lg w-full sm:col-span-2 flex items-center justify-center gap-2 shadow-sm shadow-transparent transition-all duration-500 hover:bg-[#8850f8] hover:shadow-indigo-200">
                        <Icon name="mingcute:basket-line" class="mr-1" />
                        Añadir al carrito
                    </button>
                </div>
                <div
                    v-else
                    class="flex items-center justify-center w-full sm:col-span-3">
                    <button
                        class="group py-4 px-5 rounded-full bg-gray-400 text-[var(--color-background)] font-semibold text-lg w-full flex items-center justify-center gap-2 shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-500 hover:shadow-gray-200 cursor-not-allowed">
                        <Icon name="mingcute:basket-line" class="mr-1" />
                        Sin stock
                    </button>
                </div>
            </div>
        </div>
    </div>

    <div
        v-else
        class="text-center py-20 text-gray-600"
        style="background-color: var(--color-background-content)">
        <p>Cargando producto...</p>
    </div>
</template>

<style scoped>
.product-grid {
    max-width: 1400px;
    margin: 0 auto;
    padding: 30px 30px 0px;
    background-color: var(--color-background-content);
    box-shadow: -20px 0 15px -5px #ffeae9b3, 20px 0 15px -5px #ffeae9b3;
    padding: 30px 30px;
}
</style>
