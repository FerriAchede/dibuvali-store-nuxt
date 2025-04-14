<template>
      <header class="header-desktop d-none d-md-flex">
        <div class="left-icons">
            <Icon name="ic:baseline-search"/>
        </div>

        <div class="logo-nav-container">
            <img src="/logotxt.webp" alt="Dibu Vali" class="profile-pic">
            <nav class="navigation">
                <a href="./index.html">Home</a>
                <a href="./new/index.html">New!</a>
                <a href="./products/index.html">Products</a>
                <!-- <a href="#">Collections</a> -->
                <a href="#about-me">About me</a>
                <!-- <a href="#">Contact</a> -->
            </nav>
        </div>

        <div class="icons">
            <Icon name="ic:baseline-account-circle"/>
            <Icon name="ic:sharp-shopping-cart"/>
            <a href="#"><i class="fas fa-shopping-cart"></i></a>
        </div>
    </header>
</template>
<script>
export default {
    
}
</script>
<style>

header {
    background-color: var(--color-background);
    width: 100%;
    height: 145px;
    display: flex;
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
    text-decoration: none;
    color: var(--color-morado);
    transition: transform 0.2s ease, color 0.2s ease;
}

.iconify:hover {
    transform: scale(1.05);
    color: var(--color-morado-hover);
}
</style>