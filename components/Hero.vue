<template>
  <section class="text-cWhite bg-cGelap">
    <div
      class="container flex flex-col items-center px-4 mx-auto py-28 sm:px-16 md:flex-row"
    >
      <div
        class="flex flex-col items-center mb-4 text-center sm:mr-4 lg:flex-grow md:w-1/2 md:items-start md:text-left "
      >
        <h1
          class="mb-4 text-4xl font-medium uppercase text-cWhite title-font sm:text-5xl"
        >
          Welcome to<br class="hidden lg:inline-block" />
          <span class="text-cTerang"> Indonesian Coffe Website </span>
        </h1>
        <p class="mb-8 leading-relaxed">
          Indonesia is a country rich in natural wealth, one of the abundant
          natural products in Indonesia is coffee. Indonesian coffee is one of
          the best in the world. this website will discuss about coffee both in
          Indonesia and the world
        </p>
      </div>
      <div class="w-full md:w-1/2">
        <TwicImg
          class="object-cover object-center w-full transition duration-300 ease-in-out rounded hover:scale-95 h-[250]"
          alt="hero"
          title="hero"
          src="bijikopi3.jpg"
          format="webp"
          fokus="left"
          placeholder="preview"
          ratio="5/4"
          resize="cover"
          mode="cover"
        />
      </div>
    </div>
  </section>
</template>
<!-- 
<TwicImg
  src="<path>"
  alt="<String>"
  anchor="<String>"
  bot="<String>"
  eager="<boolean>"
  focus="<auto|coordinates>"
  intrinsic="<String>"
  mode="<contain|cover>"
  position="<css position>"
  placeholder="<preview|maincolor|meancolor|none>"
  preTransform="<String>"
  ratio="<ratio>"
  @stateChange="<function>"
  step="<integer>"
  transition="<fade|zoom|none>"
  transitionDelay="<String>"
  transitionDuration="<String>"
  transitionTimingFunction="<String>"
/> -->
