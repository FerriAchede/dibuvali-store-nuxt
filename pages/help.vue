<template>
  <section
    class="max-w-4xl mx-auto p-8 bg-[var(--color-background-content)] rounded-lg shadow-lg shadow-[rgba(0,0,0,0.1)] my-5"
  >
    <h1
      class="text-4xl font-extrabold mb-8 text-center text-[var(--color-morado)] text-shadow-[1px_1px_2px_rgba(0,0,0,0.1)]"
    >
      Ayuda
    </h1>

    <article class="space-y-4 leading-relaxed">
      <p class="text-lg">
        Bienvenido a la sección de ayuda. Aquí encontrarás respuestas a las
        preguntas más frecuentes y soporte para cualquier duda que tengas sobre
        el uso del sitio y la compra de productos.
      </p>

      <h2
        class="text-2xl font-semibold text-[var(--color-morado)] text-shadow-[1px_1px_2px_rgba(0,0,0,0.1)]"
      >
        Preguntas frecuentes
      </h2>
      <ul class="list-disc list-inside space-y-2">
        <li>
          <strong>¿Cómo realizo un pedido?</strong> <br />
          Selecciona el producto que deseas, añade al carrito y completa el
          formulario de entrega para finalizar la compra.
        </li>
        <li>
          <strong>¿Cuánto tardan los envíos?</strong> <br />
          Los envíos son gestionados manualmente por el artista y solo están
          disponibles dentro de España. El tiempo de entrega puede variar.
        </li>
        <li>
          <strong>¿Puedo hacer un seguimiento de mi pedido?</strong> <br />
          Actualmente no disponemos de seguimiento automático. Para cualquier
          consulta, contacta con el artista.
        </li>
        <li>
          <strong>¿Cómo contacto con el vendedor?</strong> <br />
          Puedes escribir a
          <a
            href="mailto:fercarmar2@alu.edu.gva.es"
            class="text-[var(--color-link)] underline transition-colors duration-300 ease-in-out hover:text-[var(--color-morado-hover)]"
            >fercarmar2@alu.edu.gva.es</a
          >
          para cualquier duda o consulta.
        </li>
      </ul>

      <h2
        class="text-2xl font-semibold text-[var(--color-morado)] text-shadow-[1px_1px_2px_rgba(0,0,0,0.1)]"
      >
        Soporte adicional
      </h2>
      <p>
        Si necesitas ayuda personalizada o tienes problemas con tu pedido,
        ponte en contacto con nosotros y te atenderemos a la mayor brevedad
        posible.
      </p>

      <p class="mt-12 text-sm text-gray-500 text-center">
        Última actualización: 29 de mayo de 2025
      </p>
    </article>
  </section>
</template>

<script setup>
useHead({
  title: 'Ayuda | Dibu Vali Tienda',
  meta: [
    { name: 'description', content: 'Encuentra respuestas a las preguntas más frecuentes y soporte para cualquier duda sobre el uso del sitio y la compra de productos en Dibu Vali Tienda.' },
    { name: 'keywords', content: 'ayuda, preguntas frecuentes, soporte, Dibu Vali Tienda, pedidos, contacto' },
  ],
});
</script>
