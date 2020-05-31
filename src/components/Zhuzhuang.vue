<template>
  <div id="myChart"> </div>
</template>

<script>
  export default {
    mounted() {
      this.drawLine();
    },
    methods: {
      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'));
        myChart.setOption({ // 绘制图表
          title: {text: 'Vue中使用Echarts图形图表'},
          tooltip: {},
          xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        });
      }
    }
  }
</script>

<style scoped>
  #myChart{
    width: 100%;
    height: 300px;
  }
</style>