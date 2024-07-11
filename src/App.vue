<script setup lang="ts">
import "./style.css"
</script>

<template>

    <div class="sticky top-0 h-20 border-b-2 border-gray-200 flex flex-row items-center px-2 text-2xl ">

      <div class="font-bold">
        PokeDex
      </div>
      <div class="flex-1">

      </div>

      <RouterLink to="/list/pokemon">
        Pokemon
      </RouterLink>
    </div>
    <div class="p-2 overflow-scroll">

      <RouterView/>
    </div>
</template>
