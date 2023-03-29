
<template>
  <div>
    <Header/>
  </div>
  <RouterView/>
</template>

<script setup >
import Header from './components/Header.vue'
import { RouterView } from 'vue-router'


</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,500;1,300;1,500&display=swap');
</style>
