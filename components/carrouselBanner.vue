<script setup>
import { ref, onMounted } from "vue";

const banners = [
    "/imgs/banner/gato_azul.webp",
    "/imgs/banner/valio.webp",
    "/imgs/banner/fuecoco.webp",
];

const currentIndex = ref(0);

onMounted(() => {
    setInterval(() => {
        currentIndex.value = (currentIndex.value + 1) % banners.length;
    }, 5000);
});
</script>

<template>
    <section class="relative w-full overflow-hidden">
        <div
            class="relative w-full h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px]">
            <div class="absolute inset-0 bg-black opacity-40 z-2"></div>

            <div class="w-full h-full relative overflow-hidden">
                <transition-group
                    name="carousel-blur"
                    tag="div"
                    class="relative w-full h-full">
                    <img
                        v-for="(banner, index) in [banners[currentIndex]]"
                        :key="banner + currentIndex"
                        :src="banner"
                        width="1920"
                        height="450"
                        format="webp"
                        class="absolute w-full h-full object-cover"
                        :alt="`Carrousel`" />
                </transition-group>
            </div>

            <div
                class="banner-text flex flex-col items-center left-1/2 transform -translate-x-1/2 sm:left-[10%] sm:-translate-x-0 sm:items-start sm:text-left w-full">
                <h3
                    class="text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold">
                    Explora todo el Merch!
                </h3>
                <a href="/products" class="explore-btn"> Explorar </a>
            </div>
        </div>
    </section>
</template>

<style scoped>
.advertisement-bar p {
    font-size: 16px;
    font-weight: bold;
    color: var(--color-azul-celeste);
    text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.4);
}

.banner-text {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: var(--color-background);
    text-shadow: 1px 1px 2px var(--color-morado);
    z-index: 2;
}

@media (min-width: 640px) {
    .banner-text {
        left: 10%;
        text-align: left;
        align-items: flex-start;
    }
}

.explore-btn {
    margin-top: 3px;
    display: inline-block;
    padding: 5px 20px;
    background-color: var(--color-morado);
    color: var(--color-azul-celeste);
    font-weight: bold;
    border-radius: 5px;
    text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.4);
    transition: background-color 0.3s ease;
}

.explore-btn:hover {
    background-color: var(--color-morado-hover);
}

h3 {
    font-size: 1.75rem;
}

.carousel-blur-enter-active,
.carousel-blur-leave-active {
    transition: opacity 0.8s ease, filter 0.8s ease;
    position: absolute;
}

.carousel-blur-enter-from {
    opacity: 0;
    filter: blur(10px);
}

.carousel-blur-enter-to {
    opacity: 1;
    filter: blur(0px);
}

.carousel-blur-leave-from {
    opacity: 1;
    filter: blur(0px);
}

.carousel-blur-leave-to {
    opacity: 0;
    filter: blur(10px);
}
</style>
