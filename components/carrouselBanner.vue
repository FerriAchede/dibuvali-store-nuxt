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
    <div class="relative w-full h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px]">
      <div class="absolute inset-0 bg-black opacity-40 z-2"></div>

      <div class="w-full h-full">
        <img :src="banners[currentIndex]" class="w-full h-full object-cover transition-opacity duration-1000"
          alt="Banner" />
      </div>

      <div class="banner-text">
        <h3>Explore all the Merch!</h3>
        <a href="#" class="explore-btn">
          Explore
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
#ad-bar-bottom {
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.4);
  border-radius: 0px 0px 1px 1px;
  height: 28px;
}

#ad-bar-bottom p {
  font-size: 12px;
}


.advertisement-bar p {
  font-size: 16px;
  font-weight: bold;
  color: var(--color-azul-celeste);
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.4);
}

.banner-image {
  width: 100%;
  overflow: hidden;
  height: 350px;
  position: relative;
  display: flex;
  align-items: center;
}


.banner-text {
  position: absolute;
  left: 10%;
  top: 50%;
  transform: translateY(-50%);
  text-align: left;
  color: var(--color-background);
  font-size: 20px;
  text-shadow: 1px 1px 2px var(--color-morado);
  z-index: 2;
}

.banner-text h3 {
  font-weight: bold;
}

.explore-btn {
  margin-top: 3px;
  display: inline-block;
  padding: 5px 20px;
  background-color: var(--color-morado);
  color: var(--color-azul-celeste);
  font-size: 16px;
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
</style>
