<template>
    <div>
        <h2 class="text-2xl font-bold text-[var(--color-morado)] mb-6">
            Detalles de Entrega
        </h2>
        <div class="grid lg:grid-cols-2 gap-y-6 gap-x-4">
            <FormField label="Nombre" name="name" />
            <FormField label="Apellido" name="surname" />
            <FormField label="Correo Electrónico" name="email" type="email" />
            <FormField label="Teléfono" name="phone" />
            <FormField label="Dirección" name="address" />
            <FormField label="Ciudad" name="city" />
            <FormField label="Provincia" name="province" />
            <FormField label="Código Postal" name="zipCode" />
            <FormField
                label="Acepto los términos y condiciones"
                name="termsAccepted"
                type="checkbox" />
        </div>
    </div>
</template>

<script setup>
import FormField from "./FormField.vue";
</script>
