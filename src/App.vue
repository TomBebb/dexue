<script setup lang="ts">
import './style.css'

const links: { name: string; path: string }[] = [
  { name: 'Pokemon', path: 'pokemon' },
  { name: 'Berries', path: 'berry' },
  { name: 'Games', path: 'version' },
  { name: 'Moves', path: 'move' },
]
</script>

<template>
  <div
    class="sticky top-0 flex h-20 flex-row items-center border-b-2 border-gray-200 px-2 text-2xl"
  >
    <div class="font-bold">PokeDex</div>
    <div class="flex-1"></div>

    <RouterLink class="btn" v-for="link in links" :to="`/list/${link.path}`">{{
      link.name
    }}</RouterLink>
  </div>
  <div class="overflow-scroll p-2">
    <RouterView />
  </div>
</template>
