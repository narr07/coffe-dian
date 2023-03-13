<script setup>
const { path } = useRoute();
const { data } = await useAsyncData(`content-${path}`, async () => {
  // fetch document where the document path matches with the cuurent route
  let article = queryContent().where({ _path: path }).findOne();
  // get the surround information,
  // which is an array of documeents that come before and after the current document
  let surround = queryContent()
    .only(["_path", "title", "description", "img"])
    .sort({ date: 1 })
    .findSurround(path);

  return {
    article: await article,
    surround: await surround,
  };
});

// destrucure `prev` and `next` value from data
const [prev, next] = data.value.surround;
console.log({ data, prev, next });

// set the meta
useHead({
  title: data.value.article.title,
  meta: [
    { name: "description", content: data.value.article.description },
    {
      hid: "og:image",
      property: "og:image",
      content: `https://site.com/${data.value.article.img}`,
    },
  ],
});
</script>

<template>
  <div class="flex items-center justify-center py-20 mx-auto ">
    <main id="main" class="mt-10 article-main">
      <div v-if="data.article" class="relative w-full mx-auto mb-4 md:mb-0">
        <div class="px-4 lg:px-0">
          <h2 class="text-4xl font-semibold leading-snug text-cGelap">
            {{ data.article.title }}
          </h2>
          <p class="supporting">{{ data.article.description }}</p>
          <ul class="article-tags">
            <li
              class="inline-flex items-center justify-center py-2 mb-2 text-green-700 tag"
              v-for="(tag, n) in data.article.tags"
              :key="n"
            >
              {{ tag }}
            </li>
          </ul>
        </div>
        <div>
          <NuxtImg
            :src="`/${data.article.img}`"
            :alt="data.article.title"
            class="px-4 bg-cover rounded-lg"
            height="400"
          />
        </div>
      </div>

      <div class="flex flex-col lg:flex-row">
        <div class="w-full px-4 mt-12 text-lg leading-relaxed">
          <article class="mx-auto prose article prose-stone prose-img:mx-auto">
            <ContentRenderer class="" :value="data.article">
              <template #empty>
                <p>No content found.</p>
              </template>
            </ContentRenderer>
          </article>
        </div>
      </div>
    </main>
  </div>
</template>
