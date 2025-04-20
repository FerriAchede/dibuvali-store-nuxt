<script setup>
const route = useRoute();
const collection = route.params.collection;

</script>

<template>
  <h1>Productos de la coleccion: {{ collection }}</h1>
</template>

<style>

</style>