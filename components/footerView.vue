<template>
    <footer>
        <h4>ENLACES RÁPIDOS</h4>
        <div
            class="footer-links grid grid-cols-2 gap-y-3 gap-x-8 place-items-center md:flex md:justify-between md:gap-9">
            <NuxtLink to="/">Inicio</NuxtLink>
            <NuxtLink to="/contact">Contacto</NuxtLink>
            <NuxtLink to="/terms">Términos de servicio</NuxtLink>
            <NuxtLink to="/privacy">Política de privacidad</NuxtLink>
            <NuxtLink to="/shipping">Envíos</NuxtLink>
            <NuxtLink to="/help">Ayuda</NuxtLink>
        </div>
        <div
            class="icons flex justify-center md:justify-start items-center gap-6">
            <a
                href="https://www.instagram.com/dibu_vali/"
                aria-label="Instagram"
                ><Icon name="mingcute:instagram-fill"
            /></a>
            <a href="https://www.tiktok.com/@dibu_vali" aria-label="TikTok"
                ><Icon name="mingcute:tiktok-fill"
            /></a>
            <a href="https://www.youtube.com/@Dibu_Vali" aria-label="YouTube"
                ><Icon name="mingcute:youtube-fill"
            /></a>
        </div>
    </footer>
</template>
<script>
export default {};
</script>
<style scoped>
footer {
    background-color: var(--color-footer);
    padding: 30px;
    padding-bottom: 10px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 -0.5px 2px rgba(0, 0, 0, 0.3);
}

footer h4 {
    color: var(--color-morado);
    font-weight: 500;
    font-size: 1.3rem;
}

.footer-links {
    margin: 20px 0;
}

footer .icons {
    color: var(--color-morado);
    font-size: 1.5rem;
}

.iconify {
    transition: transform 0.2s ease, color 0.2s ease;
}

.iconify:hover {
    transform: scale(1.05);
    color: var(--color-morado-hover);
}
</style>
