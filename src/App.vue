
<template>
  <div>
    <Header/>
    <Home/>
  </div>
</template>

<script >
import Header from './components/Header.vue'
import Home from './pages/Home.vue'
export default{
  components :{
    Header,
    Home
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,500;1,300;1,500&display=swap');
</style>
