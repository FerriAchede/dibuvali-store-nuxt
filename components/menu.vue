<template>
    <header
        :class="[
            'hidden md:flex header-desktop',
            { shrink: isShrunk, 'shrink-more': isShrunkMore },
        ]">
        <div class="left-icons">
            <Icon name="mingcute:search-2-fill" />
        </div>

        <div class="logo-nav-container">
            <img
                src="/logotxt.webp"
                alt="Dibu Vali"
                class="profile-pic"
                :class="{ shrink: isShrunk }" />
            <nav class="navigation">
                <NuxtLink :to="{ name: 'index' }" class="nav-link" active-class="active">Inicio</NuxtLink>
                <NuxtLink :to="{ name: 'products-new' }" class="nav-link" active-class="active">Nuevo</NuxtLink>
                <NuxtLink :to="{ name: 'products' }" class="nav-link" active-class="active">Productos</NuxtLink>
                <NuxtLink :to="{ name: 'products-collection', params: { collection:'asd' } }" class="nav-link" active-class="active">Colecciones</NuxtLink>
                <NuxtLink :to="{ name: 'about-me' }" class="nav-link" active-class="active">Sobre mí</NuxtLink>
                <NuxtLink :to="{ name: 'contact' }" class="nav-link" active-class="active">Contacto</NuxtLink>
            </nav>
        </div>

        <div class="icons">
            <Icon name="mingcute:user-4-fill" />
            <Icon name="mingcute:shopping-cart-2-fill" />
        </div>
    </header>

    <header
        :class="[
            'mobile-header md:hidden header-mobile h-auto p-6',
            { shrink: isShrunk, 'shrink-more': isShrunkMore },
        ]">
        <div class="flex justify-between items-center h-full">
            <button
                @click="showMenu = !showMenu"
                aria-label="Toggle navigation"
                class="flex items-center">
                <Icon
                    name="mingcute:align-justify-fill"
                    class="open-nav-icon" />
            </button>

            <div class="mx-6 flex items-center">
                <NuxtLink to="/">
                    <img
                        src="/logotxt.webp"
                        alt="Dibu Vali"
                        class="profile-pic-mobile"
                        :class="{
                            shrink: isShrunk,
                            'shrink-more': isShrunkMore,
                        }" />
                </NuxtLink>
            </div>

            <div class="flex items-center gap-2">
                <NuxtLink to="/" class="flex items-center">
                    <Icon name="mingcute:shopping-cart-2-fill" />
                </NuxtLink>
                <NuxtLink to="/" class="flex items-center">
                    <Icon name="mingcute:search-2-fill" />
                </NuxtLink>
            </div>
        </div>
    </header>
    <Transition name="slide-down">
        <nav
            v-if="showMenu"
            class="mobile-navbar navigation flex flex-col gap-3 py-4 pb-3 px-7"
            :class="{ shrink: isShrunk, 'shrink-more': isShrunkMore }">
            <NuxtLink :to="{ name: 'index' }" class="nav-link" active-class="active">Inicio</NuxtLink>
            <NuxtLink :to="{ name: 'products-new' }" class="nav-link" active-class="active">Nuevo</NuxtLink>
            <NuxtLink :to="{ name: 'products' }" class="nav-link" active-class="active">Productos</NuxtLink>
            <NuxtLink :to="{ name: 'products-collection', params: { collection: 'asd' } }" class="nav-link" active-class="active">Colecciones</NuxtLink>
            <NuxtLink :to="{ name: 'about-me' }" class="nav-link" active-class="active">Sobre mí</NuxtLink>
            <NuxtLink :to="{ name: 'contact' }" class="nav-link" active-class="active">Contacto</NuxtLink>
        </nav>
    </Transition>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
const showMenu = ref(false);
const isShrunk = ref(false);
const isShrunkMore = ref(false);

function handleScroll() {
    const scrollY = window.scrollY;
    isShrunk.value = scrollY > 50;
    isShrunkMore.value = scrollY > 100;
}

onMounted(() => {
    window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
    window.removeEventListener("scroll", handleScroll);
});
</script>
<style scoped>
.active {
    font-weight: 500;
}

.header-desktop {
    background-color: var(--color-background);
    width: 100%;
    height: 145px;
    align-items: center;
    justify-content: space-between;
    padding: 10px 50px;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
    position: sticky;
    top: 0;
    z-index: 4;
    transition: height 0.4s ease;
}

.header-desktop.shrink {
    height: 135px;
}

.header-desktop.shrink-more {
    height: 115px;
}

.header-mobile.shrink-more {
    padding-top: 15px;
    padding-bottom: 15px;
}

.left-icons {
    margin-right: 20px;
}

.logo-nav-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 24px;
    font-weight: 400;
}

.profile-pic-mobile {
    height: 38px;
    object-fit: contain;
    transition: all 0.3s ease;
}

.profile-pic {
    height: 50px;
    object-fit: contain;
    transition: all 0.3s ease;
}

.profile-pic.shrink {
    transform: scale(0.8);
}

.navigation {
    display: flex;
    gap: 20px;
}

.icons {
    display: flex;
    gap: 15px;
    font-size: 1.2rem;
}

.iconify {
    font-size: 1.5rem;
    color: var(--color-morado);
    transition: transform 0.2s ease, color 0.2s ease;
}

.iconify:hover {
    transform: scale(1.05);
    color: var(--color-morado-hover);
}

.open-nav-icon {
    height: 32px;
    width: 32px;
}

.mobile-header {
    position: sticky;
    top: 0;
    width: 100%;
    background-color: var(--color-background);
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
    z-index: 5;
    transition: padding 0.4s ease;
}

.mobile-navbar {
    position: sticky;
    top: 0;
    width: 100%;
    background-color: var(--color-background-content);
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
    z-index: 4;
    transition: all 0.3s ease;
}

.mobile-navbar.shrink {
    top: 86px;
}

.mobile-navbar.shrink-more {
    top: 65px;
}

.slide-down-enter-active,
.slide-down-leave-active {
    transition: all 0.3s ease;
    overflow: hidden;
}

.slide-down-enter-from {
    max-height: 0;
    opacity: 0;
    transform: translateY(-10px);
}

.slide-down-enter-to {
    max-height: 500px;
    opacity: 1;
    transform: translateY(0);
}

.slide-down-leave-from {
    max-height: 500px;
    opacity: 1;
    transform: translateY(0);
}

.slide-down-leave-to {
    max-height: 0;
    opacity: 0;
    transform: translateY(-10px);
}
</style>
