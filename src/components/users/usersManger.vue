<template>
  <div>
    <subBread level_1="用户管理" level_2="用户列表"></subBread>
    <el-card class="container">
      <el-table
        :data="userlistmsg"
        height ="750"
        :row-class-name="tableRowClassName">
        <el-table-column
          prop="id"
          label="id"
          width="60">
        </el-table-column>
        <el-table-column
          prop="username"
          label="名称"
          width="180">
        </el-table-column>
        <el-table-column
          prop="nickname"
          label="别名"
          width="120">
        </el-table-column>
        <el-table-column
          prop="email"
          label="邮箱"
          width="180">
        </el-table-column>
        <el-table-column
          label="操作"
          width="180">
          <template slot-scope="scope">
            <el-button @click="cilckEdit(scope.row)" type="primary" icon="el-icon-edit" circle></el-button>
            <el-button @click="clickEditRight(scope.row)" type="success" icon="el-icon-check" circle></el-button>
            <el-button @click="cilckDelete(scope.row)" type="info" icon="el-icon-delete" circle></el-button>
          </template>
        </el-table-column>
      </el-table>


      <!--      编辑用户对话框-->
      <el-dialog class="dialog" width="600px" title="编辑用户信息" :visible.sync="dialogFormVisibleEdit">
        <el-form :model="curUserMsg" class="form">
          <el-form-item label="用户名" :label-width="formLabelWidth">
            <el-input v-model="curUserMsg.username" autocomplete="off" disabled></el-input>
          </el-form-item>
          <el-form-item label="邮箱" :label-width="formLabelWidth">
            <el-input v-model="curUserMsg.email" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="别名" :label-width="formLabelWidth">
            <el-input v-model="curUserMsg.nickname" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisibleEdit = false">取 消</el-button>
          <el-button type="primary" @click="cilckEditConfirm()">确 定</el-button>
        </div>
      </el-dialog>

      <!--      编辑用户权限-->
      <el-dialog class="dialog" width="600px" title="编辑用户权限" :visible.sync="dialogFormVisibleEditRight">
        <el-form :model="curUserMsg" class="form">
          <el-form-item label="用户名" :label-width="formLabelWidth">
            <el-input v-model="curUserMsg.username" autocomplete="off" disabled></el-input>
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
          <el-button @click="dialogFormVisibleEditRight = false">取 消</el-button>
          <el-button type="primary" @click="cilckEditConfirm()">确 定</el-button>
        </div>
      </el-dialog>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: "usersManger",
    data() {
      return {
        userlistmsg: [],
        roles: [],
        dialogFormVisibleEdit: false,
        dialogFormVisibleEditRight:false,
        formLabelWidth: '100px',
        form: {},
        curUserMsg: [],
        options:{},
        value:'',
        rightList:[]
      }
    },
    created() {
      this.getUserList();
    },
    methods: {
      cilckEdit(user) {
        this.curUserMsg = user
        this.dialogFormVisibleEdit = true
      },
      async cilckEditConfirm() {
        const res = await this.$http.post(`/user/updateUser`, this.curUserMsg)
        const {code, data, flag, message, total} = res.data
        if (code === 20000 && flag) {
          this.$message.success(message)
          this.dialogFormVisibleEditRight = false
        } else {
          this.$message.error(message)
        }
      },
      async getRightList(){
        const res = await this.$http.get(`/user/getAllRole`)
        const {code, data, flag, message, total} = res.data
        if (code === 20000 && flag) {
          this.$message.success(message)
          this.options = data
        } else {
          this.$message.error(message)
        }
      },
      clickEditRight(user){
        this.dialogFormVisibleEditRight = true
        this.curUserMsg = user
      //  获取权限列表
        this.getRightList()

      },
      cilckDelete(user) {
        this.$confirm('此用户将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async () => {

          const res = await this.$http.delete(`/user/delete/${user.id}`)
          const {code, data, flag, message, total} = res.data

          this.$message({
            type: 'success',
            message: '删除成功!'
          });

        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      async getUserList() {
        const res = await this.$http.get(`/user/list`)
        const {code, data, flag, message, total} = res.data
        if (code === 20000) {
          this.$message.success(message)
          this.userlistmsg = data
        } else {
          this.$message.error(message)
        }
      },
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      }
    },
  }
</script>

<style scoped>
  .container {
    margin-top: 20px;
    height: 800px;
  }


  .form {
    width: 500px;
  }


  .dialog-footer {
    alignment: center;
    width: 450px;
  }
</style>
