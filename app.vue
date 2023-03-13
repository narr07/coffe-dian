<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(0.5rem);
  }

  to {
    opacity: 1;
    transform: none;
  }
}

@keyframes fadeOutDown {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translateY(0.5rem);
  }
}

.page-enter-active {
  animation: fadeInUp 0.6s forwards;
}

.page-leave-active {
  animation: fadeOutDown 0.6s backwards;
}
</style>
