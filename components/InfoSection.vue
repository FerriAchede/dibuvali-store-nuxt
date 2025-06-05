<template>
  <section
    :id="id"
    class="md:pt-2 md:pb-30 py-3 bg-[var(--color-background-content)] shadow-[20px_0_15px_-5px_#FFEAE9b3,-20px_0_15px_-5px_#FFEAE9b3] max-w-[1200px] mx-auto">
    <div
      class="flex flex-col lg:flex-row gap-5 px-[30px] items-center justify-between"
      :class="imagePosition === 'left' ? 'lg:flex-row-reverse' : ''">
      <div class="w-full lg:w-[60%] h-auto flex items-center">
        <div
          class="w-full h-auto bg-[#e8feff] rounded-[16px] text-[var(--color-morado)] text-[18px] font-medium text-left pb-6 pt-4 flex flex-col justify-center"
          :class="imagePosition === 'left' ? 'px-7 lg:px-6' : 'px-7 lg:px-15'">
          <h2 class="text-[24px] md:text-[28px] font-bold mb-1"
          :class="imagePosition === 'left' ? 'text-left' : 'text-right'">
          {{ title }}</h2>
          <p
            class="text-[16px] md:text-[19px] mb-0 leading-relaxed whitespace-pre-line"
            :class="imagePosition === 'left' ? 'text-left px-0 lg:pl-2' : 'text-right px-0 lg:pr-2'">
            
            {{ text }}
          </p>
        </div>
      </div>

            <div
                class="w-full lg:w-[50%] h-[401px] hidden lg:flex items-center justify-center"
                :class="
                    imagePosition === 'left'
                        ? 'h-[501px] translate-x-10 translate-y-[80px]'
                        : '-translate-x-20 -translate-y-[100px]'
                ">
                <div
                    class="w-full h-full bg-[#ff6a9ca4] rounded-lg p-[15px] pr-[14px] relative z-3">
                    <img
                        :src="image"
                        :alt="alt"
                        class="w-full h-full object-cover rounded-lg shadow-[0_2px_5px_var(--color-morado-hover)] transition-transform duration-300" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
defineProps({
    id: {
        type: String,
        default: "",
    },
    title: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    alt: {
        type: String,
        default: "Section image",
    },
    imagePosition: {
        type: String,
        default: "right",
        validator: (value) => ["left", "right"].includes(value),
    },
});
</script>
