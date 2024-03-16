<script setup>
  import {ref,computed,onMounted,watch} from 'vue'
  import {reactive} from 'vue'
  import ChildComp from './components/ChildComp.vue'
  import ChildCompEmit from './components/ChildCompEmit.vue'
  import ChildCompSlot from './components/ChildCompSlot.vue'

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

  var awesome = ref(true)

  function flip(){
    awesome.value=!awesome.value
  }

  let id=0
  const newTodo= ref('')
  const hideCompleted = ref(false)
  const todos = ref([
    {id: id++, text: 'First Item', done:true},
    {id: id++, text: 'Second Item', done:false},
    {id: id++, text: 'Third Item',done:false},
  ])

  function addTodo(){
    todos.value.push({id:id++,text:newTodo.value,done:false})
  }

  function popTodo(){
    todos.value.pop();
  }

  function removeTodo(todo) {
    todos.value = todos.value.filter((t) => t !== todo)
  }

  const filteredTodos = computed(() => {
  return hideCompleted.value
    ? todos.value.filter((t) => t.done===false)
    : todos.value
  })

  const pElementRef = ref(null)

  onMounted(() => {
  pElementRef.value.textContent = 'mounted!'
  })

  const todoId = ref(1)
  const todoData = ref(null)

  async function fetchData() {
    todoData.value = null
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
    )
    todoData.value = await res.json()
  }

  fetchData()
  watch(todoId, fetchData)

  const greetings =ref("Hello, this one use v-bind")

  const childMsg = ref('No child msg yet')

  const slotMsg = ref('Message from parents')
  
</script>

<template>
  <h1>{{ message }}</h1>
  <p>Count is {{ counter.count }}</p>
  <div :class="titleClass">Make me red</div>

  <button v-on:click="increment">{{ counter.count }}</button>
  <br>

  <input v-model="text" placeholder="Enter text">
  <p>{{ text }}</p>
  <br>

  <h1 v-if="awesome">Vue is awesome</h1>
  <h1 v-else>Oh No 😢</h1>
  <button v-on:click="flip()">Flip</button>
  <br>

  <input v-model="newTodo" placeholder="Add new todo">
  <button v-on:click="addTodo()">Add</button>
  <ul>
    <li v-for="todo in filteredTodos" :key="todo.id">
    <input type="checkbox" v-model="todo.done">
    {{ todo.text }}
    <span :class="{ done: todo.done }">{{ todo.text }}</span>
    <button @click="removeTodo(todo)">Remove</button>
    </li>
  </ul>
  <button v-on:click="popTodo()">Pop</button>
  <button @click="hideCompleted = !hideCompleted">
    {{ hideCompleted ? 'Show all' : 'Hide completed' }}
  </button>
  <br>

  <p ref="pElementRef">hello</p>
  <br>

  <p>Todo id: {{ todoId }}</p>
  <button @click="todoId++" :disabled="!todoData">Fetch next todo</button>
  <p v-if="!todoData">Loading...</p>
  <pre v-else>{{ todoData }}</pre>
  <br>

  <ChildComp msg="Kucing"/>
  <ChildComp :msg="greetings"/>

  <ChildCompEmit @response="(msg) => childMsg = msg" />
  <p>{{ childMsg }}</p>

  <ChildCompSlot>Message: {{ slotMsg }}</ChildCompSlot>

</template>

<style>
  .title{
    color:red;
  }

  .done{
    text-decoration: line-through;
  }

</style>


