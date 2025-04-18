<script setup>
import { ref, onMounted } from "vue";

const banners = [
    "/imgs/banner/gato_azul.jpg",
    "/imgs/banner/valio.jpg",
    "/imgs/banner/fuecoco.jpg",
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
                        class="absolute w-full h-full object-cover"
                        alt="Banner" />
                </transition-group>
            </div>

            <div class="banner-text">
                <h3
                    class="text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold">
                    Explore all the Merch!
                </h3>
                <a
                    href="#"
                    class="explore-btn text-sm sm:text-base px-3 py-1 sm:px-5 sm:py-2">
                    Explore
                </a>
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
    left: 10%;
    top: 50%;
    transform: translateY(-50%);
    text-align: left;
    color: var(--color-background);
    text-shadow: 1px 1px 2px var(--color-morado);
    z-index: 2;
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
