<template>
  <section
    class="max-w-4xl mx-auto p-8 bg-[var(--color-background-content)] rounded-lg shadow-lg shadow-[rgba(0,0,0,0.1)] my-5"
  >
    <h1
      class="text-4xl font-extrabold mb-8 text-center text-[var(--color-morado)] text-shadow-[1px_1px_2px_rgba(0,0,0,0.1)]"
    >
      Información de Envíos
    </h1>

    <article class="space-y-4 leading-relaxed">
      <p class="text-lg">
        Actualmente, los envíos de los productos se realizan manualmente por el artista.
      </p>

      <h2
        class="text-2xl font-semibold text-[var(--color-morado)] text-shadow-[1px_1px_2px_rgba(0,0,0,0.1)]"
      >
        1. Ámbito de Envío
      </h2>
      <p>
        Los envíos se realizan únicamente dentro de España peninsular. Por el
        momento, no se hacen envíos internacionales ni a las Islas Baleares,
        Canarias, Ceuta o Melilla.
      </p>

      <h2
        class="text-2xl font-semibold text-[var(--color-morado)] text-shadow-[1px_1px_2px_rgba(0,0,0,0.1)]"
      >
        2. Plazos de Entrega
      </h2>
      <p>
        Los pedidos suelen tardar entre 3 y 7 días laborables en ser enviados y
        entregados, debido a la gestión manual por parte del artista.
      </p>

      <h2
        class="text-2xl font-semibold text-[var(--color-morado)] text-shadow-[1px_1px_2px_rgba(0,0,0,0.1)]"
      >
        3. Costes de Envío
      </h2>
      <p>
        Los costes de envío varían según el peso y volumen del pedido y se
        informan durante el proceso de compra.
      </p>

      <h2
        class="text-2xl font-semibold text-[var(--color-morado)] text-shadow-[1px_1px_2px_rgba(0,0,0,0.1)]"
      >
        4. Contacto
      </h2>
      <p>
        Para cualquier duda o consulta sobre envíos, puedes contactar con 
        <a
          href="mailto:fercarmar2@alu.edu.gva.es"
          class="text-[var(--color-link)] underline transition-colors duration-300 ease-in-out hover:text-[var(--color-morado-hover)]"
          >fercarmar2@alu.edu.gva.es</a
        >.
      </p>

      <p class="mt-12 text-sm text-gray-500 text-center">
        Última actualización: 29 de mayo de 2025
      </p>
    </article>
  </section>
</template>

<script setup>
useHead({
  title: 'Información de Envíos | Dibu Vali Tienda',
  meta: [
    { name: 'description', content: 'Conoce los detalles sobre los envíos de productos en Dibu Vali Tienda. Información sobre plazos, costes y contacto.' },
    { name: 'keywords', content: 'envíos, Dibu Vali Tienda, España, plazos de entrega, costes de envío' },
  ],
});
</script>
