<template>
  <section class="max-w-4xl mx-auto p-8 bg-[var(--color-background-content)] rounded-lg shadow-lg shadow-[rgba(0,0,0,0.1)] my-5">
    <h1 class="text-4xl font-extrabold mb-8 text-center text-[var(--color-morado)] text-shadow-[1px_1px_2px_rgba(0,0,0,0.1)]">
      Términos y Condiciones
    </h1>

    <article class="space-y-4 leading-relaxed">
      <p class="text-lg">
        Bienvenido a este proyecto. Al acceder y usar este sitio, aceptas cumplir con los siguientes términos y condiciones:
      </p>

      <h2 class="text-2xl font-semibold text-[var(--color-morado)] text-shadow-[1px_1px_2px_rgba(0,0,0,0.1)]">
        1. Uso del sitio
      </h2>
      <p>
        El uso de este sitio es bajo tu propio riesgo. No me hago responsable por cualquier daño o pérdida que pueda surgir del uso del sitio.
      </p>

      <h2 class="text-2xl font-semibold text-[var(--color-morado)] text-shadow-[1px_1px_2px_rgba(0,0,0,0.1)]">
        2. Propiedad intelectual
      </h2>
      <p>
        Todo el contenido, diseño, gráficos y código son parte de este proyecto y están protegidos. Queda prohibida la copia o distribución sin permiso.
      </p>

      <h2 class="text-2xl font-semibold text-[var(--color-morado)] text-shadow-[1px_1px_2px_rgba(0,0,0,0.1)]">
        3. Privacidad
      </h2>
      <p>
        Respeto tu privacidad y trato tus datos personales conforme a los principios de transparencia y seguridad.
      </p>

      <h2 class="text-2xl font-semibold text-[var(--color-morado)] text-shadow-[1px_1px_2px_rgba(0,0,0,0.1)]">
        4. Modificaciones
      </h2>
      <p>
        Estos términos pueden ser modificados en cualquier momento sin previo aviso. Se recomienda revisar esta página periódicamente.
      </p>

      <h2 class="text-2xl font-semibold text-[var(--color-morado)] text-shadow-[1px_1px_2px_rgba(0,0,0,0.1)]">
        5. Contacto
      </h2>
      <p>
        Para cualquier duda o consulta, puedes escribirme a 
        <a href="mailto:fercarmar2@alu.edu.gva.es" class="text-[var(--color-link)] underline transition-colors duration-300 ease-in-out hover:text-[var(--color-morado-hover)]">
          fercarmar2@alu.edu.gva.es
        </a>.
      </p>

      <p class="mt-12 text-sm text-gray-500 text-center">
        Última actualización: 29 de mayo de 2025
      </p>
    </article>
  </section>
</template>

<script setup>
useHead({
  title: 'Términos y Condiciones | Dibu Vali Tienda',
  meta: [
    { name: 'description', content: 'Lee los términos y condiciones de uso de Dibu Vali Tienda. Aquí encontrarás información sobre el uso del sitio, propiedad intelectual, privacidad y más.' },
    { name: 'keywords', content: 'términos y condiciones, Dibu Vali Tienda, uso del sitio, propiedad intelectual, privacidad' },
  ],
});
</script>
