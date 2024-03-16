<script setup>
import {defineEmits} from 'vue'
/* eslint-disable no-unused-vars */
const emit = defineEmits(['response'])

emit('response', 'hello from child')
/* eslint-disable no-unused-vars */
</script>

<template>
    <h2>Emitting Child Component</h2>
</template>