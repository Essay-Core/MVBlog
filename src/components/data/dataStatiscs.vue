<template>
  <div>
    <subBread level_1="数据统计"></subBread>
    <el-button @click="click()" type="success">主要按钮</el-button>
    <img :src="picSrc" alt="图片无法显示">
  </div>
</template>

<script>
  export default {
    name: "dataStatiscs",
    data(){
      return{
        msg:[],
        picSrc:''
      }
    },
    methods: {
      async click(){
        const res = await this.$http.get(`/user/getUserInfo`)
        const {code,data,flag,message} = res.data
        if (code === 20000){
          this.$message.success(message)
          this.msg = data
          this.picSrc = this.msg.userface
          console.log(data)
        }else {
          this.$message.error(message)
        }
      }
    }
  }
</script>

<style scoped>

</style>
