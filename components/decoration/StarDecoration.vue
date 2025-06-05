<template>
    <Icon
        name="mingcute:star-fill"
        class="star absolute bottom-6 -right-16 z-2 text-5xl sm:text-6xl md:text-7xl lg:text-8xl" />
</template>

<style>
.star {
    width: 256px;
    height: 256px;
    background-color: var(--color-azul-celeste);
    transform: rotate(-28deg);
    position: absolute;
}

@media (max-width: 1024px) {
    .star {
        width: 164px;
        height: 164px;
        bottom: 3rem;
        right: -3rem;
    }
}

@media (max-width: 768px) {
    .star {
        width: 124px;
        height: 124px;
        bottom: 4rem;
        right: -1rem;
        transform: rotate(-12deg);
    }
}

@media (max-width: 480px) {
    .star {
        width: 100px;
        height: 100px;
        bottom: 5rem;
        right: -1.5rem;
        transform: rotate(-8deg);
    }
}
</style>
