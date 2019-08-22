<template>
  <div>
    <div style="color:#fff;">
       <Form ref="formInline" :model="formInline" :rules="ruleInline" inline autocomplete="off">
        <h2>
          <Checkbox v-model="formInline.single">启用时间范围</Checkbox>
        </h2>
        <div style="display:inline-block;margin-left:60px;margin-bottom:20px;">
          时间范围
          <diV>
            开始时间：<DatePicker type="datetime" placeholder="请选择开始日期" :options="optionsDate"  style="width: 300px;margin-bottom:20px;color:#000" v-model="formInline.startime"></DatePicker>
          </diV>
          <div>
            结束时间：<DatePicker type="datetime" placeholder="请选择结束日期" :options="optionsDate2" style="width: 300px;color:#000" v-model='formInline.endtime' ></DatePicker>
          </diV>
        </div>
        <div style="margin:20px 0;color:#fff;display:inline-block;margin:0 60px;margin-bottom:20px;">
          日志：
          <div>
              日志类型：
                <Select v-model="formInline.model1" style="width:300px;margin-bottom:20px;margin-left: -5px;">
                  <Option v-for="item in logtypeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
          </div>
          <div>
              日志编号：<Input style="width: 300px;" v-model="formInline.number"/> 
          </div>
        </div>
        <Button type="success" ghost style="background:#fff;font-size: 18px;" @click="clear('formInline')">清除</Button>
        <Button type="success" ghost style="background:#fff;font-size: 18px;" @click="getData('formInline')">搜索</Button>
        <download-excel
          class = "export-excel-wrapper"
          :data = "listinfo"
          :fields = "json_fields"
          name = "错误日志.xls"
          style="display: inline-block;">
          <!-- 上面可以自定义自己的样式，还可以引用其他组件button -->
            <Button type="success" ghost style="background:#fff;font-size: 18px;" >导出Excel</Button>
        </download-excel>
      </Form>
    </div>
    <Table border ref="selection" :columns="columns" :data="List" style="margin-bottom:30px" height = '500' :no-data-text="loadingText ? loadingText : '暂无数据'"></Table>
    <Page :total="total" show-elevator  @on-change="changepage" style="color:#fff;margrin-top;20px;"/>
  </div>
</template>
<script>
import { setTimeout } from 'timers';
export default {
  name: "Paper",
  data() {
    return {
      formInline:{
        startime:'',
        endtime:'',//this.$moment().locale('zh-cn').format('YYYY-MM-DD HH:mm:ss'),
        single:false,
        number:'',
        model1: "0",
      },
      loadingText:'',
      EnableLogType:false,
      EnableLogID:false,
      startIndex:0,
      endIndex:9,
      List:[],
      total:0,
      optionsDate:{  
        disabledDate (date) {
          return date && date.valueOf() > Date.now();
        }
      },
      optionsDate2:{
         disabledDate: (function (date) {
          return date && date.valueOf() < this.formInline.startime || date && date.valueOf() >  Date.now();
        }).bind(this)
      },
      logtypeList: [
        {
          value: "0",
          label: "所有类型"
        }, 
        {
          value: "1",
          label: "关键操作"
        },
         {
          value: "2",
          label: "异常日志"
        },
         {
          value: "3",
          label: "故障日志"
        },
         {
          value: "4",
          label: "其他"
        },
      ],
      columns: [
        {
          title: "日志编号",
          key: "ID"
        },
        {
          title: "日志类别",
          key: "LogNum"
        },
        {
          title: "类型编号",
          key: "LogType"
        },
        {
          title: "来源",
          key: "LogTypeStr"
        },
        {
          title: "简要描述",
          key: "Title"
        },
         {
          title: "详情",
          key: "Message"
        }
      ],
      listinfo:[],
      json_fields: {
        '日志编号': 'ID',
        '日志类别': 'LogNum',
        '类型编号': 'LogType',
        '来源' : 'LogTypeStr',
        '简要描述':'Title',
        '详情':'Message'
      },
    };
  },
  methods:{
    getData(name){
      if(this.formInline.model1 != ""){
        this.EnableLogType = true
      }
      if(this.formInline.number != '' && !isNaN(this.formInline.number)){
        this.EnableLogID  = true
      }
      if(!this.formInline.single){
        this.formInline.startime = ''
        this.formInline.endtime = ''
      }
      if(this.formInline.startime != "" || this.formInline.endtime != ""){
        this.formInline.startime = this.$moment(this.formInline.startime).format('YYYY-MM-DD')
        this.formInline.endtime = this.$moment(this.formInline.endtime).format('YYYY-MM-DD')
      }
      if(!isNaN(this.formInline.number)){
        this.loadingText = '数据加载中...'
        this.$axios({
          url: this.$ports.log,
          data: {
            Token:sessionStorage.getItem('Token'),
            EnableDateTime:this.formInline.single,
            EnableLogType:this.EnableLogType,
            EnableLogID:this.EnableLogID,
            StartTime:this.formInline.startime,
            EndTime:this.formInline.endtime,
            LogType:this.formInline.model1,
            LogID:this.formInline.number || '1',
            startIndex:this.startIndex,
            endIndex:this.endIndex,
          },
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          timeout: 6000*10,
        }).then(res => {
          console.log(res.data);
          if(res.data.data.Items){
            this.List = res.data.data.Items
            this.total = res.data.data.Total
            this.exportData()
          }else{
            this.$Message.warning('数据加载失败')
          }
          this.formInline.number = ''
        });       
      }else{
        this.$Message.error('日志编号只能输入数字')
        this.formInline.number = '';
      }
     
    },
    changepage(page){
      this.startIndex = (page-1 )*10;
      this.endIndex = this.startIndex + 9; 
      this.getData()
    },
    clear(){
      this.formInline.number = ''
    },
    exportData () {
      this.startIndex = 0;
      this.endIndex = this.total
      if(this.formInline.model1 != ""){
        this.EnableLogType = true
      }
      if(this.formInline.number != '' && !isNaN(this.formInline.number)){
        this.EnableLogID  = true
      }
      if(!this.formInline.single){
        this.formInline.startime = ''
        this.formInline.endtime = ''
      }
       if(this.formInline.startime != "" || this.formInline.endtime != ""){
      this.formInline.startime = this.$moment(this.formInline.startime).format('YYYY-MM-DD')
      this.formInline.endtime = this.$moment(this.formInline.endtime).format('YYYY-MM-DD')

      }
      if(this.total != 0){
         this.$axios({
          url: this.$ports.log,
          data: {
            Token:sessionStorage.getItem('Token'),
            EnableDateTime:this.formInline.single,
            EnableLogType:this.EnableLogType,
            EnableLogID:this.EnableLogID,
            StartTime:this.formInline.startime,
            EndTime:this.formInline.endtime,
            LogType:this.formInline.model1,
            LogID:this.formInline.number || '1',
            startIndex:this.startIndex,
            endIndex:this.endIndex,
          },
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          timeout: 6000*10,
        }).then(res => {
          //console.log(res.data);
          this.listinfo = res.data.data.Items;
         
        });
        /* setTimeout(() => {
          this.$refs.table.exportCsv({
            filename: 'The original data'
        })
        }, 1000); */
        
      }
    },
  },
  mounted(){
    this.getData();
  }
};
</script>
<style lang="scss" scoped>
.ivu-col-span-12 {
  display: inline-block;
  width: 25%;

}
.ivu-page{
  margin-top: 20px;
}
</style>

