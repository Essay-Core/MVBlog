<template>
  <div>
    <subBread level_1="栏目管理" ></subBread>
    <el-card>
      <el-table
        :data="getCategoryList"
        stripe
        style="width: 100%">
        <el-table-column
          prop="cateName"
          label="文章名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="date"
          label="编辑时间"
          width="200">
          {{$moment(getCategoryList.date).format('YYYY-MM-DD hh:mm:ss')}}
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: "column",
    data(){
      return {
        getCategoryList:[]
      }
    },
    created() {
      this.getCategoryListFn()
    },
    methods:{
      async getCategoryListFn(){
        const res = this.$http.get(`/admin/category/list`)
        const {code,data,flag,message,total} = (await res).data
        if (code === 20000){
          this.$message.success(message)
        }else {
          this.$message.error(message)
        }
        this.getCategoryList = data

      }
    }
  }
</script>

<style scoped>

</style>
