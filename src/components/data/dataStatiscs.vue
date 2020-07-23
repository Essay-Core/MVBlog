<template>
  <div>
    <subBread level_1="数据统计"></subBread>
    <div id="myChart2" class="small">
    </div>
    <el-button @click="click()" type="success">主要按钮</el-button>
  </div>
</template>

<script>
  //  导入图表组件
  import Chart from 'chart.js';

  export default {
    name: "dataStatiscs",
    data() {
      return {
        msg: [],
        picSrc: ''
      }
    },
    created() {
      this.getRecentReaders()
    },
    methods: {
      async getRecentReaders() {
        const res = await this.$http.get(`/article/dataStatistics`)
        const {code, data, flag, message} = res.data
        if (code === 20000) {
          this.$message.success(message)
          this.msg = data
          this.picSrc = this.msg.userface
          console.log(data)
        } else {
          this.$message.error(message)
        }

        var echarts = require('echarts');

        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('myChart2'));
        // 绘制图表

        myChart.setOption({
          xAxis: {
            type: 'category',
            data: this.msg.times
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            name: '阅读量',
            data: this.msg.datas,
            type: 'line'
          }]
        });
      }
    }
  }
</script>

<style scoped>
  .small {
    width: 500px;
    height: 500px;
  }
</style>
