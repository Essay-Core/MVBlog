<template>
  <el-container>
    <el-header class="header">
      V部落博客管理平台
      <el-button type="info" class="loginOutBtn" round @click="loginout()">退出登录</el-button>

      <el-button type="danger" class="userMsg" round @click="clickUser()">
        <span>{{username}}</span>
      </el-button>
    </el-header>
    <el-container>
      <el-aside width="200px" class="aside">
        <el-menu
          :unique-opened="true"
          :router="true"
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span>文章管理</span>
            </template>
            <el-menu-item index="essayList">
              <i class="el-icon-notebook-1"></i>
              文章列表
            </el-menu-item>
            <el-menu-item index="publishArtical"><i class="el-icon-notebook-2"></i>发表文章</el-menu-item>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-s-home"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item index="usersManger">
              <i class="el-icon-s-custom"></i>用户列表
            </el-menu-item>
            <el-menu-item index="rightList">
              <i class="el-icon-s-claim"></i>
              权限列表</el-menu-item>
          </el-submenu>

          <el-menu-item index="column">
            <i class="el-icon-menu"></i>
            <span slot="title">栏目管理</span>
          </el-menu-item>
          <el-menu-item index="dataStatiscs">
            <i class="el-icon-s-data"></i>
            <span>数据统计</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>

    <el-dialog class="dialog" width="600px" title="用户信息" :visible.sync="dialogFormVisibleEdit">
      <el-form :model="crrentUser" class="form">
        <el-form-item label="用户名" :label-width="formLabelWidth">
          <el-input v-model="crrentUser.username" autocomplete="off" disabled></el-input>
        </el-form-item>
        <el-form-item label="邮箱" :label-width="formLabelWidth">
          <el-input v-model="crrentUser.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="别名" :label-width="formLabelWidth">
          <el-input v-model="crrentUser.nickname" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="权限" :label-width="formLabelWidth">
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisibleEdit = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisibleEdit = false">确 定</el-button>
      </div>
    </el-dialog>
  </el-container>
</template>

<script>
  export default {
    name: "home",
    data() {
      return {
        crrentUser: {},
        username: '',
        userface: '',
        dialogFormVisibleEdit: false,
        formLabelWidth: '100px',
        options: [],
        value: ''
      }
    },
    created() {
      this.getCurUserMsg()
    },
    methods: {
      clickUser() {
        this.dialogFormVisibleEdit = true
      },
      async getCurUserMsg() {
        const res = this.$http.get(`/user/getUserInfo`)
        const {code, data, flag, message, total} = (await res).data
        if (code === 20000) {
          this.$message.success(message)
          this.crrentUser = data
          this.username = data.username
          this.userface = data.userface
          this.options = data.roles
          console.log(data.username)
          this
        } else {
          this.$message.error(message)
        }
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      loginout() {
        this.$router.push({name: "login"})
      }
    }
  }
</script>

<style scoped>

  .header {
    background-color: #42b983;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  el-aside {
    background-color: deepskyblue;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  .loginOutBtn, .userMsg {
    alignment: right;
    float: right;
    margin-top: 10px;
  }

  el-menu-item{
    margin-left: 10px;
  }
</style>
