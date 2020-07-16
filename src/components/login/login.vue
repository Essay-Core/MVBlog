<template>
  <el-card class="loginform">
    <el-form class="login-container" :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
      <el-form-item label="用户名">
        <el-input class="input" v-model="formLabelAlign.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input class="input" show-password v-model="formLabelAlign.password">
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="submitClick()" type="primary">登录</el-button>
        <el-button @click="addInBtn()" type="primary">注册</el-button>
      </el-form-item>
    </el-form>

  </el-card>
</template>

<script>
  export default {
    name: "login",
    data() {
      return {
        labelPosition: 'right',
        formLabelAlign: {
          username: '',
          password: ''
        }
      };
    },
    created() {
    },
    methods: {
      async submitClick() {
        const res = await this.$http.post('/queue-admin/login',this.formLabelAlign)
        console.log(res)
      }
      ,
      async addInBtn(){
        console.log(this.formLabelAlign)
      }
    }
  }
</script>

<style scoped>
  .login-container {
    width: 450px;
    height: 450px;
    position: center;
    margin-left: 600px;
    margin-top: 200px;
  }
  .input{
  }
</style>
