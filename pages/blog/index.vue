<!-- ./pages/blog/index.vue -->
<script setup>
// set meta for page
useHead({
  title: "All articles",
  meta: [
    { name: "description", content: "Here's a list of all my great articles" },
  ],
});
</script>
<template>
  <main class="px-4 py-20 mx-auto sm:px-16 bg-cPrimary">
    <header class="page-heading">
      <div class="text-center wrapper">
        <h1
          class="text-2xl font-semibold capitalize lg:text-3xl text-cGelap"
        >
          From the blog
        </h1>

        <p class="max-w-lg mx-auto mt-4 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
          veritatis sint autem nesciunt, laudantium quia tempore delect
        </p>
      </div>
    </header>
    <section class="page-section">
      <!-- Render list of all articles in ./content/blog using `path` -->
      <!-- Provide only defined fields in the `:query` prop -->
      <ContentList
        path="/blog"
        :query="{
          only: ['title', 'description', 'tags', '_path', 'img'],
        }"
      >
        <!-- Default list slot -->
        <template v-slot="{ list }">
          <div class="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
            <div v-for="article in list" :key="article._path" class="article">
              <NuxtImg
                class="relative z-10 object-cover w-full rounded-md h-96"
                :src="`/${article.img}`"
                :alt="article.title"
              />

              <NuxtLink :to="article._path">
                <div
                  class="relative z-20 max-w-lg p-6 mx-auto -mt-20 rounded-md shadow bg-cTerang"
                >
                  <h1
                    class="text-2xl text-cGelap md:text-xl"
                  >
                    {{ article.title }}
                  </h1>

                  <p
                    class="mt-3 text-sm md:text-sm"
                  >
                    {{ article.description }}
                  </p>

                  
                  
                </div>
              </NuxtLink>
            </div>
          </div>
        </template>

        <!-- slot to display message when no content is found -->
        <template #not-found>
          <p>No articles found.</p>
        </template>
      </ContentList>
    </section>
  </main>
</template>
<style scoped>
/* ... */
</style>
