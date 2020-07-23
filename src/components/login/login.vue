<template>
  <el-card class="loginform">
    <el-form :rules="rules" class="login-container" :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
      <el-form-item class="username" label="用户名" prop="username">
        <el-input v-model="formLabelAlign.username"></el-input>
      </el-form-item>
      <el-form-item class="password" label="密码" prop="password">
        <el-input show-password v-model="formLabelAlign.password">
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="submit" @click="submitClick()" type="primary">登录</el-button>
        <el-button class="resigter" @click="resigterDiaIsShow=true" type="primary">注册</el-button>
      </el-form-item>
    </el-form>

    <!--      编辑用户对话框-->
    <el-dialog class="dialog" width="600px" title="用户注册" :visible.sync="resigterDiaIsShow">
      <el-form :model="curUserMsg" class="form">
        <el-form-item label="用户名" :label-width="formLabelWidth">
          <el-input v-model="curUserMsg.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="别名" :label-width="formLabelWidth">
          <el-input v-model="curUserMsg.nickname" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input type="password" v-model="curUserMsg.password" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisibleEdit = false">取 消</el-button>
        <el-button type="primary" @click="cilckAddinConfirm()">确 定</el-button>
      </div>
    </el-dialog>
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
        },
        rules:{
          username:[
            {required:true, message:'请输入用户名', trigger:'blur'},
            {min:3, max:11, message: '请输入3至11位的用户名', trigger: 'blur'}
          ],
          password:[
            {required:true, message:'请输入密码', trigger:'blur'},
            {min:3, max:11, message: '请输入3至11位的密码', trigger: 'blur'}
          ]
        },
        //用户注册
        curUserMsg:{},
        resigterDiaIsShow:false,
        formLabelWidth: '100px',
        form: {},
      };
    },
    created() {
    },
    methods: {
      async submitClick() {
        const res = await this.$http.post('/login',this.formLabelAlign)
        console.log(res)
        this.$router.push({name:'home'})
      },
      async cilckAddinConfirm() {
        const res =await this.$http.post(`/reg`,this.curUserMsg)
        const {code, data, flag, message, total} = res.data
        if (code === 20000 && flag) {
          this.$message.success(message)
          this.dialogFormVisibleEdit = false
        } else {
          this.$message.error(message)
        }
      }
    }
  }
</script>

<style scoped>

  .loginform {
    margin: 300px auto;
    width: 450px;
    height: 300px;
  }

  .login-container {

    position: center;
  }

  .username {
    margin-top: 40px;
    width: 350px;
  }

  .password {
    width: 350px;
  }

  .cancel, .submit {
    margin-right: 20px;
  }

</style>
