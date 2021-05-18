<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="options"
      label="Options API"
      width="254">
    </el-table-column>
    <el-table-column
      prop="composition"
      label="Hook inside inside setup"
      width="254">
    </el-table-column>
  </el-table>
</template>

<script>
import '@/styles/index.scss'
export default {
  name: 'Home',
  data() {
      return {
        tableData: [{
          options: 'beforeCreate',
          composition: 'Not needed*'
        }, {
          options: 'created',
          composition: 'Not needed*'
        }, {
          options: 'beforeMount',
          composition: 'onBeforeMount'
        }, {
          options: 'mounted',
          composition: 'onMounted'
        }, {
          options: 'beforeUpdate',
          composition: 'onBeforeUpdate'
        }, {
          options: 'update',
          composition: 'onUpdate'
        }, {
          options: 'beforeUnmount',
          composition: 'onBeforeUnmount'
        }, {
          options: 'unmounted',
          composition: 'onUnmounted'
        }, {
          options: 'errorCaptured',
          composition: 'onErrorCaptured'
        }, {
          options: 'renderTracked',
          composition: 'onRenderTracked'
        }]
      }
    }
}
</script>
<style>
</style>
