<script setup lang="ts">
import {Pokemon} from "../models.ts";

const props =defineProps<{
  url: string
}>()
import { useFetch } from '@vueuse/core'
import {snakeToTitle} from "../casing.ts";
const { isFetching, error, data } = useFetch(props.url).json<Pokemon>()

</script>

<template>
<div>
  <div class="font-bold">
    {{data?.name}}
  </div>
  <img :src="data?.sprites!.front_default">
  <div>Abilities:

    <ul>
      <li v-for="ability in data?.abilities">
        {{snakeToTitle(ability.ability.name)}}
      </li></ul>
    Moves:
    <ul>
      <li v-for="move in data?.moves">
        {{snakeToTitle(move.move.name)}}
      </li></ul>
  </div>
</div>
</template>

<style scoped>

</style>
