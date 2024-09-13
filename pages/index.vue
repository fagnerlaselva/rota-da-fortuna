<template>
  <div class="dark:bg-black h-full">
    <div
      aria-hidden="true"
      class="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
    >
      <div
        class="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-600"
      ></div>
      <div
        class="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"
      ></div>
    </div>
    <div class="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
      <div class="relative pt-36 ml-auto">
        <div class="lg:w-2/3 text-center mx-auto">
          <h1
            class="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl"
          >
            Rota da
            <span class="text-primary dark:text-white">Fortuna</span>
          </h1>
          <p class="mt-8 text-gray-700 dark:text-gray-300">
            Dicas sobre liberdade financeira
          </p>
          <p class="mt-8 text-xl text-gray-700 dark:text-gray-300">
            Bem-vindo ao nosso podcast de finanças! Aqui, você vai descobrir
            dicas valiosas sobre investimentos, educação financeira,
            empreendedorismo, renda extra e carreira profissional. Vamos te
            ajudar a alcançar seus objetivos, oferecendo insights práticos para
            crescimento financeiro e profissional.
          </p>
          <p class="mt-8 text-xl text-gray-700 dark:text-gray-300">
            Junte-se a nós e comece a construir um futuro mais próspero.
            Prepare-se para transformar sua relação com o dinheiro e dar um
            passo decisivo na conquista da liberdade financeira.
          </p>
          <div class="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
            <NuxtLink
              class="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
            >
              <span class="relative text-base font-semibold text-black"
                >Get started</span
              >
            </NuxtLink>
            <NuxtLink
              class="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
            >
              <span
                class="relative text-base font-semibold text-primary dark:text-white"
                >Learn more</span
              >
            </NuxtLink>
          </div>
          <!-- <div
            class="hidden py-8 mt-16 border-y border-gray-100 dark:border-gray-800 sm:flex justify-between"
          >
            <div class="text-left">
              <h6 class="text-lg font-semibold text-gray-700 dark:text-white">
                The lowest price
              </h6>
              <p class="mt-2 text-gray-500">Some text here</p>
            </div>
            <div class="text-left">
              <h6 class="text-lg font-semibold text-gray-700 dark:text-white">
                The fastest on the market
              </h6>
              <p class="mt-2 text-gray-500">Some text here</p>
            </div>
            <div class="text-left">
              <h6 class="text-lg font-semibold text-gray-700 dark:text-white">
                The most loved
              </h6>
              <p class="mt-2 text-gray-500">Some text here</p>
            </div>
          </div> -->
        </div>
        <div class="mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 mb-20">
          <div class="p-4 grayscale transition duration-200 hover:grayscale-0">
            <img
              src="https://astrolus.netlify.app/images/clients/google.svg"
              class="h-12 w-auto mx-auto"
              loading="lazy"
              alt="client logo"
              width=""
              height=""
            />
          </div>
          <div class="p-4 grayscale transition duration-200 hover:grayscale-0">
            <img
              src="https://astrolus.netlify.app/images/clients/google.svg"
              class="h-12 w-auto mx-auto"
              loading="lazy"
              alt="client logo"
              width=""
              height=""
            />
          </div>
          <div
            class="p-4 flex grayscale transition duration-200 hover:grayscale-0"
          >
            <img
              src="https://astrolus.netlify.app/images/clients/google.svg"
              class="h-9 w-auto m-auto"
              loading="lazy"
              alt="client logo"
              width=""
              height=""
            />
          </div>
          <div class="p-4 grayscale transition duration-200 hover:grayscale-0">
            <img
              src="https://astrolus.netlify.app/images/clients/google.svg"
              class="h-12 w-auto mx-auto"
              loading="lazy"
              alt="client logo"
              width=""
              height=""
            />
          </div>
          <div
            class="p-4 flex grayscale transition duration-200 hover:grayscale-0"
          >
            <img
              src="https://astrolus.netlify.app/images/clients/google.svg"
              class="h-8 w-auto m-auto"
              loading="lazy"
              alt="client logo"
              width=""
              height=""
            />
          </div>
          <div class="p-4 grayscale transition duration-200 hover:grayscale-0">
            <img
              src="https://astrolus.netlify.app/images/clients/google.svg"
              class="h-12 w-auto mx-auto"
              loading="lazy"
              alt="client logo"
              width=""
              height=""
            />
          </div>
        </div>
      </div>
    </div>
    <div class="container mx-auto mb-20 p-10">
      <iframe
        style="border-radius: 12px"
        src="https://open.spotify.com/embed/show/5KXQTsVKFb7mMSJK6AKXfb?utm_source=generator"
        width="100%"
        height="352"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  </div>
</template>
<script setup lang="ts">
useHead({
  title: "Rota da Fortuna",
  meta: [
    {
      name: "description",
      content:
        "Aqui, você vai descobrir dicas valiosas sobre investimentos, educação financeira, empreendedorismo, renda extra e carreira profissional.",
    },
    {
      name: "ogImage",
      content:
        "https://i.scdn.co/image/ab67656300005f1f679d5c9a04cd59b7b3ba7e66",
    },
    {
      name: "twitterCard",
      content: "summary_large_image",
    },
  ],
  bodyAttrs: {
    class: "test",
  },
  script: [{ innerHTML: "console.log('Hello world')" }],
});
</script>
