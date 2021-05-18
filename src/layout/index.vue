<template>
  <el-heade>
    <app-header></app-header>
  </el-heade>
  <el-main>
    <router-view></router-view>
  </el-main>
</template>

<script>
import AppHeader from './components/app-header.vue'
export default {
  name: 'LayoutIndex',
  components: {
    AppHeader
  }
}
</script>

<style lang="scss" scoped>
</style>
