<script setup>
const props = defineProps({
    meta: Object,
    currentPage: Number,
});

const emit = defineEmits(["page-changed"]);

const goToPage = (page) => {
    if (
        page !== props.currentPage &&
        page >= 1 &&
        page <= props.meta.last_page
    ) {
        emit("page-changed", page);
    }
};

const getPages = () => {
    const total = props.meta.last_page;
    const current = props.currentPage;
    const pages = [];

    if (total <= 4) {
        for (let i = 1; i <= total; i++) pages.push(i);
    } else {
        if (current <= 2) {
            pages.push(1, 2, 3, "...", total);
        } else if (current >= total - 2) {
            pages.push(1, "...", total - 2, total - 1, total);
        } else {
            pages.push(
                1,
                "...",
                current - 1,
                current,
                current + 1,
                "...",
                total
            );
        }
    }

    return pages;
};
</script>

<template>
    <div class="pagination mt-4 flex justify-center gap-2">
        <button
            v-if="currentPage > 1"
            @click="goToPage(currentPage - 1, $event)">
            <Icon name="mingcute:left-line" />
        </button>

        <template v-for="(page, index) in getPages()" :key="index">
            <span v-if="page === '...'">...</span>
            <button
                v-else
                @click="goToPage(page, $event)"
                :class="[
                    'px-2',
                    currentPage === page
                        ? 'font-medium' : null
                ]">
                {{ page }}
            </button>
        </template>
        <button
            v-if="currentPage < meta.last_page"
            @click="goToPage(currentPage + 1, $event)">
            <Icon name="mingcute:right-line" />
        </button>
    </div>
</template>

<style scoped>
.pagination {
    color: var(--color-morado);
    list-style-type: none;
    gap: 25px;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    font-size: 1.2rem;
    font-weight: 400;
}

button {
  color: inherit;
  cursor: pointer;
  text-decoration: none;
  display: flex;
}

button:hover {
  color: var(--color-morado-hover);
  font-weight: 500;
}
</style>
