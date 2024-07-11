<script setup lang="ts">
import {NamedApiRef} from "../models.ts";
import {snakeToTitle} from "../casing.ts";
defineProps<{ref: NamedApiRef}>();
</script>

<template>

  {{snakeToTitle(ref.name)}}
</template>

<style scoped>

</style>
