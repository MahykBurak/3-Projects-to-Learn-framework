<script setup lang="ts">
import { provide } from 'vue'
import TodoForm from './components/TodoForm.vue'
import CurrentTodos from './components/CurrentTodos.vue'
import { store } from './store/todoStore'

provide('store', store)
</script>

<template>
  <h1 class="text-center text-4xl font-bold">TODO</h1>
  <TodoForm />
  <CurrentTodos />
</template>

<style scoped></style>
