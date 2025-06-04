<template>
  <section
    class="max-w-4xl mx-auto p-8 bg-[var(--color-background-content)] rounded-lg shadow-lg shadow-[rgba(0,0,0,0.1)] my-5"
  >
    <h1
      class="text-4xl font-extrabold mb-8 text-center text-[var(--color-morado)] text-shadow-[1px_1px_2px_rgba(0,0,0,0.1)]"
    >
      Contacto
    </h1>

    <article class="space-y-6 leading-relaxed">
      <p class="text-lg">
        ¿Tienes alguna pregunta o quieres ponerte en contacto con el artista?
        Aquí tienes los detalles para comunicarte.
      </p>

      <h2
        class="text-2xl font-semibold text-[var(--color-morado)] text-shadow-[1px_1px_2px_rgba(0,0,0,0.1)]"
      >
        Correo electrónico
      </h2>
      <p>
        Puedes enviar un correo electrónico a:
        <a
          href="mailto:fercarmar2@alu.edu.gva.es"
          class="text-[var(--color-link)] underline transition-colors duration-300 ease-in-out hover:text-[var(--color-morado-hover)]"
          >fercarmar2@alu.edu.gva.es</a
        >
      </p>

      <h2
        class="text-2xl font-semibold text-[var(--color-morado)] text-shadow-[1px_1px_2px_rgba(0,0,0,0.1)]"
      >
        Redes Sociales
      </h2>
      <p>
        Síguenos en nuestras redes sociales para estar al día con las novedades
        y nuevos productos:
      </p>
      <ul class="list-disc list-inside space-y-1">
        <li>
          <a
        href="https://www.instagram.com/dibu_vali/"
        target="_blank"
        rel="noopener noreferrer"
        class="hover:text-[var(--color-morado-hover)]"
        >Instagram</a
          >
        </li>
        <li>
          <a
        href="https://www.tiktok.com/@dibu_vali"
        target="_blank"
        rel="noopener noreferrer"
        class="hover:text-[var(--color-morado-hover)]"
        >TikTok</a
          >
        </li>
        <li>
          <a
        href="https://www.youtube.com/@dibu_vali"
        target="_blank"
        rel="noopener noreferrer"
        class="hover:text-[var(--color-morado-hover)]"
        >YouTube</a
          >
        </li>
      </ul>

      <p class="mt-12 text-sm text-gray-500 text-center">
        Última actualización: 29 de mayo de 2025
      </p>
    </article>
  </section>
</template>

<script setup>
useHead({
  title: 'Contacto | Dibu Vali Tienda',
  meta: [
    { name: 'description', content: 'Ponte en contacto con Dibu Vali Tienda para cualquier consulta, pregunta o sugerencia. Aquí encontrarás los detalles de contacto y nuestras redes sociales.' },
    { name: 'keywords', content: 'contacto, Dibu Vali Tienda, artista, email, redes sociales' },
  ],
});
</script>
