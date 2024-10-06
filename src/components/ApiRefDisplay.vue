<script setup lang="ts">
import { NamedApiRef } from '../models.ts'
import { snakeToTitle } from '../casing.ts'
import { toRoute } from '../router.ts'
defineProps<{ apiRef: NamedApiRef }>()
</script>

<template>
  <RouterLink :to="toRoute(apiRef.url)">
    <div class="border border-2 p-2">
      {{ snakeToTitle(apiRef.name) }}
    </div>
  </RouterLink>
</template>

<style scoped></style>
