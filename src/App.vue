<script setup lang="ts">
import './style.css'
</script>

<template>
  <div
    class="sticky top-0 flex h-20 flex-row items-center border-b-2 border-gray-200 px-2 text-2xl"
  >
    <div class="font-bold">PokeDex</div>
    <div class="flex-1"></div>

    <RouterLink to="/list/pokemon"> Pokemon </RouterLink>
  </div>
  <div class="overflow-scroll p-2">
    <RouterView />
  </div>
</template>
