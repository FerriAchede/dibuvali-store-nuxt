<script setup>
import LoadingSpinner from '@/components/decoration/LoadingSpinner.vue';
const route = useRoute();
const router = useRouter();

const currentPage = ref(parseInt(route.query.page) || 1);

const config = useRuntimeConfig();
const baseUrl = config.public.apiBaseUrl;

const { data: products, status } = await useFetch(
  () => `${baseUrl}/products?page=${currentPage.value}`,
  {
    watch: [currentPage],
    lazy: true,
  }
);

const changePage = (page) => {
  currentPage.value = page;
  router.push({ query: { ...route.query, page } });
};
</script>

<template>
    <section class="products text-center py-10">
      <div v-if="status === 'pending'" class="container mx-auto px-4">
        <LoadingSpinner />
      </div>
  
      <div v-else-if="status === 'success' && products?.data" class="container mx-auto px-4">
        <h2>Productos</h2>
  
        <div class="product-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-0">
          <ProductCard
            v-for="product in products.data"
            :key="product.id"
            :product="product"
          />
        </div>
  
        <Pagination
          v-if="products.meta"
          :meta="products.meta"
          :currentPage="currentPage"
          @page-changed="changePage"
        />
      </div>
  
      <div v-else>
        <p>No products available.</p>
      </div>
    </section>
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
    box-shadow: -20px 0 15px -5px #ffeae9b3, 20px 0 15px -5px #ffeae9b3;
}

.products h2 {
    color: var(--color-morado);
    font-size: 24px;
    font-weight: bold;
}
</style>
