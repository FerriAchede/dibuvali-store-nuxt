<script setup>
import image_placeholder from "~/assets/placeholder.webp";
// import logo_art from "~/assets/logo.png";
useHead({
  title: 'Dibu Vali Tienda',
  meta: [
    { name: 'description', content: 'Dibu Vali es una tienda de arte independiente donde encontrarás stickers, libretas y chapas ilustradas con diseños únicos.' },
    { name: 'keywords', content: 'Dibu Vali, tienda, arte, stickers, libretas, chapas, ilustraciones' },
  ],
});
</script>

<template>
    <carrouselBanner />
    <AnnouncementBar :show-announcement="false" />

    <h1 class="text-3xl font-bold underline">
        Hello world!
    </h1> <h1 class="text-3xl font-bold underline">
        Hello world!
    </h1> <h1 class="text-3xl font-bold underline">
        Hello world!
    </h1> <h1 class="text-3xl font-bold underline">
        Hello world!
    </h1> <h1 class="text-3xl font-bold underline">
        Hello world!
    </h1> <h1 class="text-3xl font-bold underline">
        Hello world!
    </h1> <h1 class="text-3xl font-bold underline">
        Hello world!
    </h1>
</template>
