<template>
    <footer>
        <h4>QUICK LINKS</h4>
        <div class="footer-links">
            <a href="../index.html">Home</a>
            <a href="#">Contact</a>
            <a href="#">Terms of service</a>
            <a href="#">Privacy policy</a>
            <a href="#">Shipping</a>
        </div>
        <div class="icons">
            <a href="https://www.instagram.com/dibu_vali/"><Icon name="simple-icons:instagram"/></a>
            <a href="https://www.youtube.com/@Dibu_Vali"><Icon name="simple-icons:youtube"/></a>
            <a href="https://www.tiktok.com/@dibu_vali"><Icon name="simple-icons:tiktok"/></a>
        </div>
    </footer>
</template>
<script>
export default {
    
}
</script>
<style>
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
</style>