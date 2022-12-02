<script setup lang="ts">
import { ref } from 'vue'
import getImg from '../utils/imgUtil'
defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <div>
    <img :src="getImg('0002_001.jpg')" />
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
