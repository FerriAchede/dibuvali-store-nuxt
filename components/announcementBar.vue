<template>
    <div class="advertisement-bar" id="ad-bar-top">
        <p v-if="showAnnouncement">New tote bag!</p>
        <div v-else class="icons">
            <Icon name="mingcute:star-fill" />
            <Icon name="mingcute:bling-fill" />
            <Icon name="mingcute:star-fill" />
        </div>
    </div>
</template>

<script setup>
defineProps({
  showAnnouncement: {
    type: Boolean,
    default: true
  }
})
</script>

<style scoped>
.advertisement-bar {
    background-color: var(--color-morado);
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0;
    font-size: 16px;
    font-weight: bold;
    color: var(--color-azul-celeste);
    text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.4);
}

.advertisement-bar div {
    width: max-content;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
}
</style>