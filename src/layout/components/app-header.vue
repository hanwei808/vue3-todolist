<template>
  <div class="header">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="todos">Todos</el-menu-item>
      <el-menu-item index="home">生命周期钩子函数</el-menu-item>
    </el-menu>
  </div>
</template>

<script lang='ts'>
import router from '@/router'
export default {
  name: 'AppHeader',
  data() {
    return {
      activeIndex: 'todos'
    }
  },
  methods: {
    handleSelect(key: string, keyPath: string): void {
      console.log(key, keyPath)
      router.push({
        name: key
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.el-menu{
  background-color: #f5f5f5;
}
</style>
