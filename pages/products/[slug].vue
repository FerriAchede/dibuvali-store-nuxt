<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Thumbs, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/navigation";
import StarDecoration from "~/components/decoration/StarDecoration.vue";
import LoadingSpinner from "~/components/decoration/LoadingSpinner.vue";
import image_placeholder from "~/assets/placeholder.webp";
import SkeletonLoader from "~/components/decoration/SkeletonLoader.vue";

const route = useRoute();
const config = useRuntimeConfig();
const baseUrl = config.public.apiBaseUrl;

const { data } = useFetch(`${baseUrl}/products/${route.params.slug}`);
const product = computed(() => data.value?.data);
const previous = computed(() => data.value?.previous);
const next = computed(() => data.value?.next);

const quantity = ref(1);
const thumbsSwiper = ref(null);

watch(product, (newProduct) => {
  if (newProduct) {
    useHead({
      title: `${newProduct.title} - Dibu Vali`,
      meta: [
        { name: "description", content: "Explora los productos únicos de Dibu Vali." },
        { name: "keywords", content: "productos, tienda, Dibu Vali, arte, diseño" },
        { name: "og:title", content: newProduct.title },
        { name: "og:description", content: newProduct.description || "Descubre nuestros productos únicos." },
        { name: "og:image", content: newProduct.image || image_placeholder },
        { name: "og:url", content: `${config.public.siteUrl}/products/${newProduct.slug}` },
      ],
    });
  }
});

function setThumbsSwiper(swiper) {
    thumbsSwiper.value = swiper;
}

const cart = useCartStore();

const addToCart = () => {
    cart.addItem({
        id: product.value.id,
        title: product.value.title,
        slug: product.value.slug,
        description: product.value.description,
        price: parseFloat(product.value.price),
        currency_code: product.value.currency_code,
        image: product.value.image,
        quantity: quantity.value,
        stock: product.value.stock,
        variant_id: product.value.variant_id,
    });
};
</script>

<template>
    <div v-if="product" class="product-grid">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="relative">
                <Swiper
                    :modules="[Thumbs, Navigation]"
                    :thumbs="{ swiper: thumbsSwiper }"
                    class="rounded-xl mb-6">
                    <SwiperSlide>
                        <div class="relative">
                            <div class="absolute inset-0 bg-gray-200 animate-pulse rounded-2xl"></div>
                            <img
                                :src="product.image || image_placeholder"
                                width="654"
                                height="654"
                                :alt="`Imagen del producto ${product.title}`"
                                class="w-full h-auto object-cover rounded-2xl relative" />
                        </div>
                        </SwiperSlide>

                    <SwiperSlide v-for="(img, i) in product.images" :key="i">
                        <NuxtImg
                            :src="img"
                            width="80"
                            height="80"
                            :alt="`Imagen del producto ${product.title} - ${
                                i + 1
                            }`"
                            class="w-full h-auto object-cover rounded-2xl" />
                    </SwiperSlide>
                </Swiper>
                <StarDecoration v-if="product.image" />
                <Swiper
                    v-if="[product.image, ...product.images].length > 1"
                    :modules="[Thumbs]"
                    :slides-per-view="5"
                    space-between="10"
                    watch-slides-progress
                    @swiper="setThumbsSwiper"
                    class="nav-for-slider">
                    <SwiperSlide
                        v-for="(img, i) in [product.image, ...product.images]"
                        :key="'thumb-' + i">
                        <NuxtImg
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
                            'sm:border-r border-[var(--color-morado)]':
                                product.tags && product.tags.length > 0,
                        }">
                        {{ product.price }} {{ product.currency_code }}
                    </div>
                    <div
                        v-if="product.tags && product.tags.length > 0"
                        class="ml-4">
                        <div
                            class="flex flex-wrap gap-2 mt-1 items-center justify-center">
                            <Icon
                                :name="
                                    product.tags.length > 1
                                        ? 'mingcute:tag-2-line'
                                        : 'mingcute:tag-line'
                                " />
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
                            class="group py-4 px-5 border border-gray-400 rounded-l-full shadow-sm shadow-transparent transition-all duration-500 hover:shadow-[var(--color-background)] hover:bg-[var(--color-background)]">
                            <Icon name="mingcute:minimize-fill" />
                        </button>
                        <input
                            v-if="!cart.loading"
                            v-model="quantity"
                            type="text"
                            min="1"
                            :max="product.stock"
                            class="font-semibold text-gray-900 text-lg py-[14px] w-full lg:max-w-[89px] border-y border-gray-400 bg-transparent placeholder:text-gray-900 text-center hover:bg-[var(--color-background)] focus-within:bg-gray-50 outline-0"
                            placeholder="1" />
                        <LoadingSpinner
                            v-else
                            class="py-[8px] w-full lg:max-w-[89px] border-y border-gray-400 bg-transparent text-center outline-0" />
                        <button
                            @click="
                                quantity = Math.min(product.stock, quantity + 1)
                            "
                            class="group py-4 px-5 border border-gray-400 rounded-r-full shadow-sm shadow-transparent transition-all duration-500 hover:shadow-[var(--color-background)] hover:bg-[var(--color-background)]">
                            <Icon name="mingcute:add-fill" hight="22" />
                        </button>
                    </div>
                    <button
                        @click="
                            quantity > 0 &&
                                quantity <= product.stock &&
                                addToCart()
                        "
                        :class="{
                            'group py-4 px-5 rounded-full bg-[var(--color-morado)] text-[var(--color-background)] font-semibold text-lg w-full sm:col-span-2 flex items-center justify-center gap-2 shadow-sm shadow-transparent transition-all duration-500 hover:bg-[#8850f8] hover:shadow-indigo-200': true,
                            'cursor-not-allowed opacity-50':
                                quantity <= 0 ||
                                quantity > product.stock ||
                                cart.loading,
                        }"
                        :disabled="
                            quantity <= 0 ||
                            quantity > product.stock ||
                            cart.loading
                        ">
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
                <div v-if="cart.items.length > 0" class="mt-6">
                    <NuxtLink
                        to="/checkout"
                        class="checkout flex items-center justify-center rounded-md text-[var(--color-background)] bg-[var(--color-morado)] px-6 py-3 font-medium shadow hover:bg-[var(--color-morado-hover)]">
                        Ir al pago
                    </NuxtLink>
                </div>
            </div>
        </div>
        <div
            v-if="product"
            class="flex justify-center items-center py-10 bg-[var(--color-background-content)]">
            <p class="text-gray-600">
                ¿No encuentras lo que buscas?
                <NuxtLink
                    to="/contact"
                    class="text-[var(--color-morado)] font-semibold"
                    >Contáctanos</NuxtLink
                >
            </p>
        </div>
    </div>
    <SkeletonLoader v-else />

  <ProductNavigation :next="next" :previous="previous" />
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

a.checkout {
    transition: all 0.2s ease;
    color: var(--color-background);
}
</style>
