<template>
  <el-container>
    <el-header class="header">
      V部落博客管理平台
      <el-button type="info" class="loginOutBtn" round @click="loginout()">退出登录</el-button>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          :router="true"
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>文章管理</span>
            </template>
            <el-menu-item index="essayList">文章列表</el-menu-item>
            <el-menu-item index="publishArtical">发表文章</el-menu-item>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item index="usersManger">用户列表</el-menu-item>
            <el-menu-item index="rightList">权限列表</el-menu-item>
          </el-submenu>

          <el-menu-item index="column">
            <i class="el-icon-menu"></i>
            <span slot="title">栏目管理</span>
          </el-menu-item>
          <el-menu-item index="dataStatiscs">
            <i class="el-icon-location"></i>
            <span>数据统计</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    name: "home",
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      loginout(){
        this.$router.push({name:"login"})
      }
    }
  }
</script>

<style scoped>

  .header {
    background-color: deepskyblue;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  el-aside {
    background-color: #D3DCE6;
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

  .loginOutBtn{
    alignment: right;
    float: right;
    margin-top: 10px;
  }
</style>
