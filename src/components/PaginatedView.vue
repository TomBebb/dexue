<script setup lang="ts">
import {useRoute} from "vue-router";
import {computedAsync} from "@vueuse/core";
import ApiRefDisplay from "./ApiRefDisplay.vue";
import {toRoute} from "../router.ts";
import {Paginated} from "../models.ts";

const route = useRoute()

const data = computedAsync<Paginated>(() => fetch( `https://pokeapi.co/api/v2/${route.params.ty}?${new URLSearchParams(route.query)}`).then(v => v.json()))
</script>

<template>
  <div class="grid grid-cols-12 gap-5">
    <RouterLink v-if="data?.previous" :to="toRoute(data.previous)">
      <button class="btn btn-primary">
        Prev
      </button>
    </RouterLink>
    <RouterLink v-if="data?.next" :to="toRoute(data.next)">
      <button class="btn btn-primary">
        Next
      </button>
    </RouterLink>
  </div>
<ApiRefDisplay v-if="data" v-for="item in data.results"  :apiRef="item"/>
</template>
