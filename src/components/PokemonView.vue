<script setup lang="ts">
import { useFetch } from '@vueuse/core'
import {snakeToTitle} from "../casing.ts";
import {useRoute} from "vue-router";
import {computed, ref} from "vue";
import {Pokemon, Sprites, SpriteSide} from "../models.ts";
import AutoColumn from "./AutoColumn.vue";
const route = useRoute()
const id = computed(() =>route.params.id)
const { isFetching, error, data } = useFetch(`https://pokeapi.co/api/v2/pokemon/${id.value}`).json<Pokemon>()

const currSpriteSide = ref<SpriteSide>("front")
const currSprite = computed<keyof Sprites>(() => `${currSpriteSide.value}_default` )
</script>

<template>
<div v-if="data">
  <AutoColumn name="Name">
    {{snakeToTitle(data?.name)}}
  </AutoColumn>
  <AutoColumn name="Types">
    <div class="flex flex-row gap-5">

      <div v-for="type in data?.types">
        {{snakeToTitle(type.type.name)}}
      </div>
    </div>

  </AutoColumn>
  <AutoColumn name="Abilities">
    <div class="flex flex-row gap-5">

      <div v-for="ability in data?.abilities">
        {{snakeToTitle(ability.ability.name)}}
      </div>
    </div>

  </AutoColumn>

  <select class="select" v-model="currSpriteSide">
    <option value="front">Front</option>
    <option value="back">Back</option>
  </select>
  <img :src="data?.sprites![currSprite]" />
</div>
</template>

<style scoped>

</style>
