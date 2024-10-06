<script setup lang="ts" generic="T">
import { computedAsync } from '@vueuse/core'
import { NamedApiRef, Paginated } from '../models.ts'
import { useRoute } from 'vue-router'
import { snakeToTitle } from '../casing.ts'
import { ref, watch, watchEffect } from 'vue'

const props = defineProps<{
  path: string
}>()
const route = useRoute()
const data = computedAsync<Paginated>(() =>
  fetch(
    `https://pokeapi.co/api/v2/${props.path}?${new URLSearchParams(route.query)}`
  ).then((v) => v.json())
)

const loadedData = ref<(T | null)[]>([])
watch(data, (v) => {
  loadedData.value = []
  for (let i = 0; i < v.results.length; i++) {
    loadedData.value.push(null)
  }
})
function autoLoad(data: NamedApiRef, index: number) {
  if (loadedData.value[index] !== null) return loadedData.value[index]

  fetch(data.url)
    .then((v) => v.json())
    .then((v) => (loadedData.value[index] = v))
    .catch(console.error)
}
function toRoute(url: string): string {
  const parsed = new URL(url)
  return parsed.search
}
</script>

<template>
  <div class="grid grid-cols-12 gap-5">
    <RouterLink
      class="btn btn-primary"
      v-if="data?.previous"
      :to="toRoute(data.previous)"
    >
      Prev
    </RouterLink>
    <RouterLink
      class="btn btn-secondary"
      v-if="data?.next"
      :to="toRoute(data.next)"
    >
      Next
    </RouterLink>
  </div>
  <div class="flex flex-col gap-5">
    <div
      class="collapse bg-base-200"
      v-if="data"
      v-for="(item, index) in data.results"
    >
      <input type="checkbox" @change="autoLoad(item, index)" />
      <div class="collapse-title text-xl font-medium">
        {{ snakeToTitle(item.name) }}
      </div>
      <div class="collapse-content">
        {{ loadedData[index] }}
      </div>
    </div>
  </div>
</template>
