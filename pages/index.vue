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
    <NewProducts />
    <InfoSection
        title="Sobre la tienda"
        :text="`Soy una artista independiente y esta tienda es una extensión de mi mundo creativo. Desde 2024 he estado compartiendo mi trabajo en convenciones, ferias y eventos.
                Aquí encontrarás productos ilustrados por mí: libretas, pegatinas, chapas y otros artículos con diseños originales inspirados en personajes. Cada pieza está pensada para conectar contigo y acompañarte en tu día a día.
                Cada pedido está gestionado por mí, desde el diseño hasta el empaquetado. Me esfuerzo por cuidar cada detalle para que recibas algo especial y hecho con cariño.
                Gracias por apoyar el arte independiente y por formar parte de esta aventura creativa.`"
        :image="image_placeholder"
        imagePosition="left" />

<!--         <InfoSection
        title="Sobre mí"
        :image="logo_art"
        imagePosition="right"
        :text="`Soy una artista que actualmente estudia animación. Mi pasión es dar vida a los personajes y contar historias a través de mi arte.
            ¡Acompáñame en mi viaje creativo! Me especializo en ilustraciones digitales, diseño de personajes y animación.
            Mi trabajo se inspira en la vida cotidiana, la naturaleza y el mundo fantástico de la imaginación.
            Creo que el arte tiene el poder de conectar a las personas y evocar emociones.
            ¡Gracias por visitar mi tienda y apoyar mi trabajo!
        `" /> -->

</template>
