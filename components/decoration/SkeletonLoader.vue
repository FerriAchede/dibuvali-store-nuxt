<template>
  <div class="skeleton-wrapper">
    <div class="skeleton-image"></div>
    <div class="skeleton-title"></div>
    <div class="skeleton-text"></div>
    <div class="skeleton-text short"></div>
  </div>
</template>

<style scoped>
.skeleton-wrapper {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  max-width: 1400px;
  margin: 0 auto;
  padding: 30px;
}

@media (min-width: 768px) {
  .skeleton-wrapper {
    grid-template-columns: 1fr 1fr;
  }
}

.skeleton-image {
  width: 100%;
  height: 300px;
  border-radius: 16px;
  background: linear-gradient(90deg, #eee 25%, #ddd 50%, #eee 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

.skeleton-title {
  height: 40px;
  width: 70%;
  border-radius: 6px;
  background: linear-gradient(90deg, #eee 25%, #ddd 50%, #eee 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  margin-bottom: 20px;
}

.skeleton-text {
  height: 20px;
  width: 90%;
  border-radius: 6px;
  background: linear-gradient(90deg, #eee 25%, #ddd 50%, #eee 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  margin-bottom: 10px;
}

.skeleton-text.short {
  width: 50%;
}

@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
</style>
