<template>
  <section class="text-cPrimary body-font">
    <div
      class="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row"
    >
      <div
        class="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0"
      >
        <h1
          class="mb-4 text-4xl font-medium uppercase text-cGelap title-font sm:text-5xl"
        >
          Welcome to<br class="hidden lg:inline-block" />
          <span class="text-cUngu"> Indonesian Coffe Website </span>
        </h1>
        <p class="leading-relaxed ">
          Indonesia is a country rich in natural wealth, one of the abundant natural products in Indonesia is coffee. Indonesian coffee is one of the best in the world. this website will discuss about coffee both in Indonesia and the world
        </p>
      </div>
      <div class="w-full md:w-1/2">
        <NuxtImg
          class="object-cover object-center rounded"
          alt="hero"
          src="/img/coffee1.jpg"
          format="webp"
          filter="grayscale"
        />
      </div>
    </div>
  </section>
</template>
