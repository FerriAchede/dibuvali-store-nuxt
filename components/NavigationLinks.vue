<template>
  <NuxtLink
    @click="$emit('linkClicked')"
    :to="{ name: 'index' }"
    class="nav-link"
    active-class="active"
  >Inicio</NuxtLink>

  <NuxtLink
    @click="$emit('linkClicked')"
    :to="{ name: 'products' }"
    class="nav-link"
    active-class="active"
  >Productos</NuxtLink>


  <NuxtLink
    @click="$emit('linkClicked')"
    :to="{ name: 'contact' }"
    class="nav-link"
    active-class="active"
  >Contacto</NuxtLink>

</template>


<script setup>
const emit = defineEmits(['linkClicked']);
</script>

<style>
/*   <NuxtLink
    @click="$emit('linkClicked')"
    :to="{ name: 'products-collection', params: { collection: 'asd' } }"
    class="nav-link"
    active-class="active"
  >Colecciones</NuxtLink> */
</style>