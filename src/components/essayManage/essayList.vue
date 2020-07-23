<template>
  <div>
    <subBread level_1="文章管理" level_2="文章列表"></subBread>

    <el-tabs class="container" type="border-card">
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
              prop="cateName"
              label="主标题"
              width="180">
            </el-table-column>
            <el-table-column
              prop="title"
              label="标题"
              width="180">
            </el-table-column>
            <el-table-column
              prop="nickname"
              label="作者"
              width="180">
            </el-table-column>
            <el-table-column
              prop="editTime"
              label="最近编辑时间"
              width="180">
              <div class="title">{{$moment(tableData.editTime).format('YYYY-MM-DD hh:mm:ss')}}</div>
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
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="cateName"
            label="主标题"
            width="180">
          </el-table-column>
          <el-table-column
            prop="title"
            label="标题"
            width="180">
          </el-table-column>
          <el-table-column
            prop="nickname"
            label="作者"
            width="180">
          </el-table-column>
          <el-table-column
            prop="editTime"
            label="最近编辑时间"
            width="180">
            <div class="title">{{$moment(tableData.editTime).format('YYYY-MM-DD hh:mm:ss')}}</div>
          </el-table-column>
          <el-table-column
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
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="cateName"
            label="主标题"
            width="180">
          </el-table-column>
          <el-table-column
            prop="title"
            label="标题"
            width="180">
          </el-table-column>
          <el-table-column
            prop="nickname"
            label="作者"
            width="180">
          </el-table-column>
          <el-table-column
            prop="editTime"
            label="最近编辑时间"
            width="180">
            <div class="title">{{$moment(tableData.editTime).format('YYYY-MM-DD hh:mm:ss')}}</div>
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
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="cateName"
            label="主标题"
            width="180">
          </el-table-column>
          <el-table-column
            prop="title"
            label="标题"
            width="180">
          </el-table-column>
          <el-table-column
            prop="nickname"
            label="作者"
            width="180">
          </el-table-column>
          <el-table-column
            prop="editTime"
            label="最近编辑时间"
            width="180">
            <div class="title">{{$moment(tableData.editTime).format('YYYY-MM-DD hh:mm:ss')}}</div>
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

  </div>
</template>

<script>
  export default {
    name: "essayList",
    data() {
      return {
        inputSearch: '',
        tableData: []
      }
    },
    created() {
      this.getArticleList()
    },
    methods: {
      async getArticleList() {
        const res = await this.$http.get('/article/list')
        const {code, data, flag, message, total} = (await res).data
        if (code === 20000){
          this.$message.success(message)
        }else {
          this.$message.error(message)
        }
        this.tableData = data
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    }
  }
</script>

<style scoped>
  .border-card{
    margin-top: 20px;
  }
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
