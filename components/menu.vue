<template>
    <header class="hidden md:flex header-desktop">
        <div class="left-icons">
            <Icon name="mingcute:search-2-fill" />
        </div>

        <div class="logo-nav-container">
            <img src="/logotxt.webp" alt="Dibu Vali" class="profile-pic">
            <nav class="navigation">
                <a href="./index.html">Inicio</a>
                <a href="./new/index.html">Nuevo</a>
                <a href="./products/index.html">Productos</a>
                <!-- <a href="#">Collections</a> -->
                <a href="#about-me">Sobre mí</a>
                <!-- <a href="#">Contact</a> -->
            </nav>
        </div>

        <div class="icons">
            <Icon name="mingcute:user-4-fill" />
            <Icon name="mingcute:shopping-cart-2-fill" />
        </div>
    </header>

    <header class="md:hidden h-auto p-6">
        <div class="flex justify-between items-center">
            <button @click="showMenu = !showMenu" aria-label="Toggle navigation">
                <Icon name="mingcute:align-justify-fill" class="open-nav-icon" />
            </button>

            <div class="mx-6">
                <NuxtLink to="/">
                    <img src="/logotxt.webp" alt="Dibu Vali" class="profile-pic-mobile" />
                </NuxtLink>
            </div>

            <div class="">
                <NuxtLink to="/carrito">
                    <Icon name="mingcute:shopping-cart-2-fill" />
                </NuxtLink>
                <NuxtLink to="/busqueda">
                    <Icon name="mingcute:search-2-fill" />
                </NuxtLink>
            </div>
        </div>


    </header>
    <Transition name="slide-down">
        <nav v-if="showMenu" class="navigation flex flex-col gap-3 py-4 pt-0 pb-3 px-7">
            <NuxtLink to="/" class="nav-link">Inicio</NuxtLink>
            <NuxtLink to="/new" class="nav-link">Nuevo</NuxtLink>
            <NuxtLink to="/products" class="nav-link">Productos</NuxtLink>
            <NuxtLink to="/collections" class="nav-link">Colecciones</NuxtLink>
            <NuxtLink to="/#about-me" class="nav-link">Sobre mí</NuxtLink>
            <NuxtLink to="/contacto" class="nav-link">Contacto</NuxtLink>
        </nav>
    </Transition>

</template>
<script setup>

const showMenu = ref(false)

</script>
<style scoped>
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

header.shrink {
    height: 135px;
}

header.shrink-more {
    height: 115px;
}

.header-mobile.shrink-more {
    padding-top: 10px !important;
    padding-bottom: 10px !important;
    transition: padding 0.4s ease;
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

#mobileNavbar {
    position: sticky;
    top: 9%;
    width: 100%;
    background-color: var(--color-background-content);
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
    z-index: 3;
}

#mobileNavbar.shrink-more {
    top: 5%;
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