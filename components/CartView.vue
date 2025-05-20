<script setup>
import { storeToRefs } from 'pinia';

const cart = useCartStore();

const { items, itemCount } = storeToRefs(cart);

const remove = (id) => {
  cart.removeItem(id);
};

const close = () => {
  cart.toggleCart();
};

</script>

<template>
  <Transition name="fade">
    <div
      v-if="cart.isOpen"
      @click="close"
      class="fixed inset-0 bg-gray-500/40 transition-opacity z-14"
      aria-hidden="true"
    ></div>
  </Transition>

  <Transition name="slide-cart">
    <div
      v-if="cart.isOpen"
      class="fixed inset-0 overflow-hidden z-15"
      aria-labelledby="slide-over-title"
      role="dialog"
      aria-modal="true"
    >
      <div class="absolute inset-0 overflow-hidden">
        <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
          <div class="pointer-events-auto w-screen max-w-md transform transition-transform duration-300 ease-in-out bg-[var(--color-background)] shadow-xl">

            <div class="flex h-full flex-col overflow-y-scroll">
              <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6 z-10">
                <div class="flex items-start justify-between">
                  <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">Tu carrito ({{ itemCount }})</h2>
                  <div class="ml-3 flex h-7 items-center">
                    <button @click="close" type="button" class="relative -m-2 p-2 text-gray-400 hover:text-gray-500">
                      <span class="absolute -inset-0.5"></span>
                      <span class="sr-only">Cerrar panel</span>
                      <Icon name="mingcute:close-square-fill" />
                    </button>
                  </div>
                </div>

                <div class="mt-8" v-if="items.length">
                  <div class="flow-root">
                    <ul role="list" class="-my-6 divide-y divide-gray-200">
                      <li v-for="item in items" :key="item.id" class="flex py-6">
                        <div class="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                          <img
                            :src="item.image || '/images/placeholder.png'"
                            :alt="item.title"
                            class="size-full object-cover"
                          />
                        </div>

                        <div class="ml-4 flex flex-1 flex-col">
                          <div>
                            <div class="flex justify-between text-base font-medium text-gray-900">
                              <h3>
                                <NuxtLink :to="`/products/${item.slug}`" >
                                {{ item.title }}
                                </NuxtLink>
                              </h3>
                              <p class="ml-4">
                                {{ item.price}}
                                {{ item.currency_code }}
                              </p>
                            </div>
                            <div
                              v-html="item.description"
                              class="prose mb-6 text-sm text-gray-500" />
                            </div>
                          <div class="flex flex-1 items-end justify-between text-sm">
                            <p class="text-gray-500">Cantidad: {{ item.quantity }}</p>

                            <div class="flex">
                              <button @click="remove(item.variant_id)" type="button" class="font-medium text-indigo-600 hover:text-indigo-500">
                                Eliminar
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div v-else class="mt-8 text-gray-500">
                  Tu carrito está vacío.
                </div>
              </div>

                <div class="border-t border-gray-200 px-4 py-6 sm:px-6" v-if="items.length">
                <div class="flex justify-between text-base font-medium text-gray-900">
                  <p>Subtotal</p>
                  <p>{{ cart.totalPrice }} €</p>
                </div>
                <p class="mt-0.5 text-sm text-gray-500">Los gastos de envío se calculan en el checkout.</p>
                <div class="mt-6">
                  <a href="/checkout" class="checkout flex items-center justify-center rounded-md bg-indigo-600 px-6 py-3 font-medium shadow hover:bg-indigo-700">
                  Ir al pago
                  </a>
                </div>
                <div class="mt-6 grid grid-cols-2 gap-4 text-sm text-gray-500">
                  <div class="flex justify-center">
                  <button @click="cart.clearCart" type="button" class="font-medium text-red-600 hover:text-red-500">
                    Vaciar carrito
                  </button>
                  </div>
                  <div class="flex justify-center">
                    <NuxtLink to="/products" @click="close" class="font-medium text-indigo-600 hover:text-indigo-500">
                    Seguir comprando <span aria-hidden="true"> &rarr;</span>
                    </NuxtLink>
                  </div>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>

</Transition>

</template>

<style scoped>
.slide-cart-enter-from,
.slide-cart-leave-to {
  transform: translateX(100%);
}
.slide-cart-enter-active,
.slide-cart-leave-active {
  transition: transform 0.3s ease-in-out;
}
.slide-cart-enter-to,
.slide-cart-leave-from {
  transform: translateX(0%);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

.iconify {
    font-size: 1.5rem;
    color: var(--color-morado);
    transition: transform 0.2s ease, color 0.2s ease;
}

.iconify:hover, a:hover {
    color: var(--color-morado-hover);
}

a.checkout {
  color: var(--color-background);
}
</style>