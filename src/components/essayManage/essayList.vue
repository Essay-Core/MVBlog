<template>
  <div>
    <subBread level_1="文章管理" level_2="文章列表"></subBread>
    <el-card class="container">
      <el-tabs type="border-card">
        <el-tab-pane class="container-tabs" label="全部文章">
          <div>
            <el-input style="width: 400px" placeholder="请输入内容" v-model="inputSearch">
              <el-button slot="prepend" icon="el-icon-search"></el-button>
            </el-input>
            <el-button slot="prepend" icon="el-icon-search" type="primary" plain>搜索</el-button>
          </div>
          <div class="tableArea">
            <el-table
              :data="tableData"
              style="width: 100%">
              <el-table-column
                prop="date"
                label="标题"
                width="180">
              </el-table-column>
              <el-table-column
                prop="name"
                label="最近编辑时间"
                width="180">
              </el-table-column>
              <el-table-column
                prop="address"
                label="作者">
              </el-table-column>
            </el-table>
          </div>
          <div class="pageInation">
            <el-pagination

              :hide-on-single-page="false"
              :total="5"
              layout="prev, pager, next">
            </el-pagination>
          </div>
        </el-tab-pane>
        <el-tab-pane class="container-tabs" label="已发表">
          <div>
            <el-input style="width: 400px" placeholder="请输入内容" v-model="inputSearch">
              <el-button slot="prepend" icon="el-icon-search"></el-button>
            </el-input>
            <el-button slot="prepend" icon="el-icon-search" type="primary" plain>搜索</el-button>
          </div>
          <el-table
            ref="multipleTable"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange">
            <el-table-column
              type="selection"
              width="55">
            </el-table-column>
            <el-table-column
              label="标题"
              width="120">
              <template slot-scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column
              prop="最近编辑时间"
              label="姓名"
              width="120">
            </el-table-column>
            <el-table-column
              prop="address"
              label="作者"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="address"
              label="所属分类"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="address"
              label="操作"
              show-overflow-tooltip>
              <el-button type="primary" icon="el-icon-edit" circle></el-button>
              <el-button type="success" icon="el-icon-check" circle></el-button>
              <el-button type="danger" icon="el-icon-delete" circle></el-button>
            </el-table-column>
          </el-table>
          <div class="pageInation">
            <el-pagination

              :hide-on-single-page="false"
              :total="5"
              layout="prev, pager, next">
            </el-pagination>
          </div>
        </el-tab-pane>
        <el-tab-pane class="container-tabs" label="草稿箱">
          <div>
            <el-input style="width: 400px" placeholder="请输入内容" v-model="inputSearch">
              <el-button slot="prepend" icon="el-icon-search"></el-button>
            </el-input>
            <el-button slot="prepend" icon="el-icon-search" type="primary" plain>搜索</el-button>


          </div>
          <el-table
            ref="multipleTable"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange">
            <el-table-column
              type="selection"
              width="55">
            </el-table-column>
            <el-table-column
              label="标题"
              width="120">
              <template slot-scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column
              prop="最近编辑时间"
              label="姓名"
              width="120">
            </el-table-column>
            <el-table-column
              prop="address"
              label="作者"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="address"
              label="所属分类"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="address"
              label="操作"
              show-overflow-tooltip>
              <el-button type="primary" icon="el-icon-edit" circle></el-button>
              <el-button type="success" icon="el-icon-check" circle></el-button>
              <el-button type="danger" icon="el-icon-delete" circle></el-button>
            </el-table-column>
          </el-table>
          <div class="pageInation">
            <el-pagination

              :hide-on-single-page="false"
              :total="5"
              layout="prev, pager, next">
            </el-pagination>
          </div>
        </el-tab-pane>
        <el-tab-pane class="container-tabs" label="回收站">
          <div>
            <el-input style="width: 400px" placeholder="请输入内容" v-model="inputSearch">
              <el-button slot="prepend" icon="el-icon-search"></el-button>
            </el-input>
            <el-button slot="prepend" icon="el-icon-search" type="primary" plain>搜索</el-button>
          </div>
          <el-table
            ref="multipleTable"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange">
            <el-table-column
              type="selection"
              width="55">
            </el-table-column>
            <el-table-column
              label="标题"
              width="120">
              <template slot-scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column
              prop="最近编辑时间"
              label="姓名"
              width="120">
            </el-table-column>
            <el-table-column
              prop="address"
              label="作者"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="address"
              label="所属分类"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="address"
              label="操作"
              show-overflow-tooltip>
              <el-button type="primary" icon="el-icon-edit" circle></el-button>
              <el-button type="success" icon="el-icon-check" circle></el-button>
              <el-button type="danger" icon="el-icon-delete" circle></el-button>
            </el-table-column>
          </el-table>
          <div class="pageInation">
            <el-pagination

              :hide-on-single-page="false"
              :total="5"
              layout="prev, pager, next">
            </el-pagination>
          </div>
        </el-tab-pane>
        <el-tab-pane class="container-tabs" label="博客管理">
          <div>
            <el-input style="width: 400px" placeholder="请输入内容" v-model="inputSearch">
              <el-button slot="prepend" icon="el-icon-search"></el-button>
            </el-input>
            <el-button slot="prepend" icon="el-icon-search" type="primary" plain>搜索</el-button>
          </div>
        </el-tab-pane>
        <el-tab-pane class="container-tabs" label="博客配置">
          <div>
            <el-input style="width: 400px" placeholder="请输入内容" v-model="inputSearch">
              <el-button slot="prepend" icon="el-icon-search"></el-button>
            </el-input>
            <el-button slot="prepend" icon="el-icon-search" type="primary" plain>搜索</el-button>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: "essayList",
    data() {
      return {
        inputSearch: '',
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    created() {
      this.getUserList()
    },
    methods: {
      async getUserList() {
        // const res = await this.$http.get('/queue-admin/user/list')
        // console.log(res)
      },
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    }
  }
</script>

<style scoped>
  .container {
    margin-top: 20px;
    height: 800px;
  }

  .container-tabs {
    height: 700px;
  }

  el-pagination {
    float: right;
    alignment: right;
  }

  .pageInation {
    float: right;
  }
</style>
