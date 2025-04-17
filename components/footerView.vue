<template>
    <footer>
        <h4>ENLACES RÁPIDOS</h4>
            <div class="footer-links">
                <a href="../index.html">Inicio</a>
                <a href="#">Contacto</a>
                <a href="#">Términos de servicio</a>
                <a href="#">Política de privacidad</a>
                <a href="#">Envíos</a>
            </div>
        <div class="icons">
            <a href="https://www.instagram.com/dibu_vali/"><Icon name="mingcute:instagram-fill"/></a>
            <a href="https://www.tiktok.com/@dibu_vali"><Icon name="mingcute:tiktok-fill"/></a>
            <a href="https://www.youtube.com/@Dibu_Vali"><Icon name="mingcute:youtube-fill"/></a>
        </div>
    </footer>
</template>
<script>
export default {
    
}
</script>
<style scoped>
footer{
    background-color: var(--color-footer);
    padding: 30px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 -0.5px 2px rgba(0, 0, 0, 0.3);
}

footer h4{
    color: var(--color-morado);
    font-weight: 500;
    font-size: 1.3rem;
}

.footer-links {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 600px;
    margin: 20px 0px 20px;
}

footer .icons {
    display: flex;
    justify-content: space-evenly;
}

footer .icons {
    width: 32px;
    height: 24px;
    gap: 20px;
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
</style>