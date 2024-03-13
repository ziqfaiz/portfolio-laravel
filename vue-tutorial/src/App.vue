<script setup>
  import {ref} from 'vue'
  import {reactive} from 'vue'

  const counter = reactive({
    count:0
  })

  const message = ref('Hello')
  console.log(message.value)
  
  const titleClass = ref('title')

  function increment(){
    counter.count++
  }

  const text = ref("")
</script>

<template>
  <h1>{{ message }}</h1>
  <p>Count is {{ counter.count }}</p>
  <div :class="titleClass">Make me red</div>

  <button v-on:click="increment">{{ counter.count }}</button>
  <br>
  <input v-model="text">
  <p>{{ text }}</p>
</template>

<style>
  .title{
    color:red;
  }

</style>


