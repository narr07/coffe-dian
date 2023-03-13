<template>
  <header class="fixed top-0 z-50 w-full p-4 bg-cPrimary">
    <div class="container flex justify-between mx-auto">
      <a
        rel="noopener noreferrer"
        href="#"
        aria-label="Back to homepage"
        class="flex items-center p-2 font-bold tracking-widest text-white uppercase"
      >
        Coffe
      </a>
      <ul class="items-stretch hidden space-x-3 md:flex">
        <li class="flex">
          <NuxtLink
            rel="noopener noreferrer"
            to="/"
            class="flex items-center px-4"
          >
            Home
          </NuxtLink>
        </li>
        <li class="flex">
          <NuxtLink
            rel="noopener noreferrer"
            to="/about"
            class="flex items-center px-4"
          >
            About
          </NuxtLink>
        </li>
        <li class="flex">
          <NuxtLink
            rel="noopener noreferrer"
            to="/blog"
            class="flex items-center px-4"
          >
            Blog
          </NuxtLink>
        </li>
        <li class="flex">
          <NuxtLink
            rel="noopener noreferrer"
            to="/"
            class="flex items-center px-4"
          >
            Home
          </NuxtLink>
        </li>
      </ul>
      <div class="flex justify-end md:hidden">
        <div class="">
          <Menu as="div" class="relative inline-block text-left">
            <div>
              <MenuButton
                class="inline-flex justify-center w-full px-4 py-2 font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
              >
                <ChevronDownIcon
                  class="w-5 h-5 text-violet-200 hover:text-violet-100"
                  aria-hidden="true"
                />
              </MenuButton>
            </div>

            <transition
              enter-active-class="transition duration-100 ease-out"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-75 ease-in"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0"
            >
              <MenuItems
                class="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <div class="px-1 py-1">
                  <MenuItem v-slot="{ active, close }">
                    <NuxtLink
                      @mouseup="close"
                      to="/"
                      :class="[
                        active
                          ? 'bg-emerald-200 dark:bg-emerald-900 '
                          : 'text-gray-900 dark:text-gray-100 ',
                        'group flex w-full items-center rounded-md px-2 py-2 ',
                      ]"
                      ><div class="flex flex-row items-center justify-center">
                        Home
                      </div>
                    </NuxtLink>
                  </MenuItem>
                  <MenuItem v-slot="{ active, close }">
                    <NuxtLink
                      @mouseup="close"
                      to="/about"
                      :class="[
                        active
                          ? 'bg-emerald-200 dark:bg-emerald-900 '
                          : 'text-gray-900 dark:text-gray-100 ',
                        'group flex w-full items-center rounded-md px-2 py-2 ',
                      ]"
                      ><div class="flex flex-row items-center justify-center">
                        About
                      </div>
                    </NuxtLink>
                  </MenuItem>
                  <MenuItem v-slot="{ active, close }">
                    <NuxtLink
                      @mouseup="close"
                      to="/blog"
                      :class="[
                        active
                          ? 'bg-emerald-200 dark:bg-emerald-900 '
                          : 'text-gray-900 dark:text-gray-100 ',
                        'group flex w-full items-center rounded-md px-2 py-2 ',
                      ]"
                      ><div class="flex flex-row items-center justify-center">
                        Blog
                      </div>
                    </NuxtLink>
                  </MenuItem>
                
                </div>
               
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </div>
  </header>
</template>
<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
</script>

<style>
.router-link-active {
  @apply font-bold text-cPink;
}
</style>
