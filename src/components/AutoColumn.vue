<script setup lang="ts">
const props = defineProps<{ name: string }>()
</script>

<template>
  <div class="grid grid-cols-12">
    <div class="col-span-12 lg:col-span-2">
      {{ name }}
    </div>
    <div class="col-span-12 lg:col-span-10">
      <slot />
    </div>
  </div>
</template>

<style scoped></style>
