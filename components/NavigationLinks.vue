<template>
  <NuxtLink
    @click="$emit('linkClicked')"
    :to="{ name: 'index' }"
    class="nav-link"
    active-class="active"
  >Inicio</NuxtLink>

  <NuxtLink
    @click="$emit('linkClicked')"
    :to="{ name: 'products-new' }"
    class="nav-link"
    active-class="active"
  >Nuevo</NuxtLink>

  <NuxtLink
    @click="$emit('linkClicked')"
    :to="{ name: 'products' }"
    class="nav-link"
    active-class="active"
  >Productos</NuxtLink>

  <NuxtLink
    @click="$emit('linkClicked')"
    :to="{ name: 'products-collection', params: { collection: 'asd' } }"
    class="nav-link"
    active-class="active"
  >Colecciones</NuxtLink>

  <NuxtLink
    @click="$emit('linkClicked')"
    :to="{ name: 'about-me' }"
    class="nav-link"
    active-class="active"
  >Sobre mí</NuxtLink>

</template>


<script setup>
const emit = defineEmits(['linkClicked']);
</script>

<style>

</style>