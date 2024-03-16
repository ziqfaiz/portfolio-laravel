<script setup>
import {defineProps} from 'vue'
/* eslint-disable no-unused-vars */
const props = defineProps({
  msg: String
})
/* eslint-disable no-unused-vars */
</script>

<template>
  <h2>Child Components</h2>
  <h3>{{ msg || 'No props passed yet'  }}</h3>
</template>