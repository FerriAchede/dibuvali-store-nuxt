<script setup>
const { data: products, status } = await useFetch(
    "http://localhost:8000/api/products",
    {
        lazy: true,
    }
);
</script>

<template>
    <section v-if="products?.data" class="products text-center py-10">
        <div class="container mx-auto px-4">
            <h2>Products</h2>

            <div
                class="product-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-0">
                <div v-if="status === 'pending'" class="w-full text-center">
                    <p>Loading... Icono de carga</p>
                </div>
                <ProductCard
                    v-else
                    v-for="product in products.data"
                    :key="product.id"
                    :product="product" />
            </div>
        </div>
    </section>

    <div v-else>
        <p>No products available.</p>
    </div>
</template>

<style scoped>
.product-grid {
    max-width: 1400px;
    margin: 0 auto;
    padding: 30px 30px 0px;
}

.products {
    padding: 30px 30px;
    text-align: center;
    background-color: var(--color-background-content);
    max-width: 1400px;
    margin: 0 auto;
    box-shadow: -20px 0 15px -5px #ffeae9b3,
                20px 0 15px -5px #ffeae9b3;
}

.products h2 {
    color: var(--color-morado);
    font-size: 24px;
    font-weight: bold;
}
</style>
