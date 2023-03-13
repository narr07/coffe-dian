<template>
  <header class="fixed top-0 z-50 w-full p-4 bg-cGelap">
    <div class="flex items-center justify-between mx-auto text-white">
      <a
        rel="noopener noreferrer"
        href="/"
        aria-label="Back to homepage"
        class="flex items-center p-2 font-bold tracking-widest text-white uppercase"
      >
        Coffe
      </a>
      <ul class="items-stretch hidden space-x-3 text-white md:flex">
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
      </ul>
      <div class="flex justify-end md:hidden">
        <div class="">
          <Menu as="div" class="relative inline-block text-left">
            <div>
              <MenuButton class="inline-flex justify-center w-full">
                <Bars3Icon class="w-5 h-5" aria-hidden="true" />
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
                class="absolute right-0 w-56 origin-top-right rounded-md shadow-xl bg-cGelap mt-7"
              >
                <div class="p-4 space-y-4">
                  <MenuItem v-slot="{ active, close }">
                    <NuxtLink
                      @mouseup="close"
                      to="/"
                      :class="[
                        active ? 'bg-cTerang' : 'text-cWhite ',
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
                        active ? 'bg-cTerang' : 'text-cWhite ',
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
                        active ? 'bg-cTerang' : 'text-cWhite ',
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
import { Bars3Icon } from "@heroicons/vue/20/solid";
</script>

<style>
.router-link-active {
  @apply font-bold text-cUngu;
}
</style>
