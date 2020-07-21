<template>
  <div>
    <subBread level_1="用户管理" level_2="权限列表"></subBread>
    <el-table
      class="table"
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="id"
        width="60">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: "rightList",
    data() {
      return {
        tableData: []
      }
    },
    created(){
      this.getRightList()
    },
    methods: {
      async getRightList(){
        const res = await this.$http.get(`/user/getAllRole`)
        const {code, data, flag, message, total} = res.data
        if (code === 20000 && flag) {
          this.$message.success(message)
          this.tableData = data
        } else {
          this.$message.error(message)
        }
      }
    },
  }
</script>

<style scoped>
  .table{
    margin-top: 20px;
  }
</style>
