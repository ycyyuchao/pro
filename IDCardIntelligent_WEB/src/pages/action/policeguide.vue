


<template>
  <div style="position：relative">
    <div>
      <h2 style="margin-bottom:15px">库存查询记录</h2>
      <div style="color:#fff">
        <span style="width: 70px;display: inline-block;text-align: right;">姓名：</span>
        <Input style="width: 300px;margin-right:15px" v-model="name"/>
        <!-- v-model="value" -->
        <span style="width: 66px;display: inline-block;text-align: right;">性别：</span>

        <Select v-model="sex" style="width:300px;margin-right:15px">
          <Option v-for="item in sexList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>身份证号：
        <Input style="width: 300px;margin-right:15px" v-model="idnumber"/>
        <Checkbox v-model="single">只查外省证件</Checkbox>
      </div>
      <div style="color:#fff;margin:20px 0;">
        <span>领取方式：</span>
        <Select v-model="Take" style="width:300px;margin-right:15px">
          <Option v-for="item in TakeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>存证方式：
        <Select v-model="Save" style="width:300px;margin-right:15px">
          <Option v-for="item in SaveList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>入库时间：
        <DatePicker
          type="date"
          placeholder="请选择入库时间"
          style="width: 280px;color:#000"
          :options="optionsDate"
          v-model="loadstarttime"
        ></DatePicker>至
        <DatePicker
          type="date"
          placeholder="请选择入库时间"
          style="width: 280px;color:#000"
          :options="optionsDate2"
          v-model="loadendtime"
        ></DatePicker>

        <Button type="success" style="font-size: 18px;margin-left: 120px;" @click="getAll()">查找</Button>
      </div>
    </div>
    <div style="display:inline-block;width:45%">
      <Table
        border
        ref="selection"
        :columns="columns"
        :data="list"
        style="margin-bottom:30p"
        @on-row-click="handleSelectionChange"
        :no-data-text="loadingText ? loadingText : '暂无数据'"
      ></Table>
      <Page
        :total="total"
        show-elevator
        @on-change="changepage"
        style="color:#fff;margrin-top:20px;"
      />
    </div>
    <div
      style="display:inline-block;width:49%;position: absolute;color: #fff;font-size: 28px;margin-left: 120px;line-height: 60px;margin-top: 120px;"
    >
      <p>姓名:{{info.UserName}}</p>
      <p>性别:{{info.GenderType}}</p>
      <p>名族:{{info.Nation}}</p>
      <p>出生日期:{{info.Birthday}}</p>
      <p>身份证号:{{info.LICID}}</p>
      <img
        :src="info.Photo"
        style="width: 120px;border: 1px inset #fff;height: 150px;position: absolute;top: 0%;left: 35%"
      >
    </div>
    <RadioGroup
      v-model="out"
      @on-change="changeModel"
      style="color:white;;margin-top: 450px;position: absolute;margin-left: 400px;"
    >
      <Radio v-for="item in outList" :label="item.value" :key="item.value">
        <span>{{item.label}}</span>
      </Radio>
    </RadioGroup>
    <Button
      type="success"
      ghost
      style="background:#fff;margin-top: 450px;position: absolute;margin-left: 600px;"
      @click="exportcard"
    >执行导出</Button>
  </div>
</template>
<script>
export default {
  name: "Police",
  data() {
    return {
      loadingText: "",
      list: [],
      total: "",
      info: "",
      sex: "0",
      name: "",
      idnumber: "",
      province: 0,
      single: false,
      loadstarttime: "",
      loadendtime: "",
      Take: "20",
      Save: "0",
      out: "0",
      startIndex: 0,
      endIndex: 9,
      columns: [
        {
          title: "姓名",
          key: "UserName"
        },
        {
          title: "性别",
          key: "GenderType"
        },
        {
          title: "民族",
          key: "Nation"
        },
        {
          title: "出生日期",
          key: "Birthday"
        },
        {
          title: "身份证号",
          key: "LICID"
        }
      ],
      optionsDate: {
        disabledDate(date) {
          return date && date.valueOf() > Date.now();
        }
      },
      optionsDate2: {
        disabledDate: function(date) {
          return (
            (date && date.valueOf() < this.loadstarttime) ||
            (date && date.valueOf() > Date.now())
          );
        }.bind(this)
      },
      TakeList: [
        {
          value: "0",
          label: "未领取"
        },
        {
          value: "1",
          label: "本人指纹核验"
        },
        {
          value: "2",
          label: "刷旧身份证"
        },
        {
          value: "3",
          label: "刷旧身份证"
        },
        {
          value: "4",
          label: "输入身份证号码"
        },
        {
          value: "5",
          label: "输入身份证号码+指纹核验"
        },
        {
          value: "6",
          label: "输入姓名+指纹核验"
        },
        {
          value: "7",
          label: "人脸识别"
        },
        {
          value: "8",
          label: "人脸识别+指纹核验"
        },
        {
          value: "9",
          label: "民警代领"
        },
        {
          value: "10",
          label: "批量导出"
        },
        {
          value: "11",
          label: "手动取证"
        },
        {
          value: "12",
          label: "未知或证件遗失"
        },
        {
          value: "13",
          label: "他人代领"
        },
        {
          value: "20",
          label: "所有类型"
        }
      ],
      SaveList: [
        {
          value: "0",
          label: "所有"
        },
        {
          value: "1",
          label: "发卡箱"
        },
        {
          value: "2",
          label: "出证口"
        }
      ],
      sexList: [
        {
          value: "0",
          label: "所有"
        },
        {
          value: "1",
          label: "男"
        },
        {
          value: "2",
          label: "女"
        },
        {
          value: "3",
          label: "其他"
        }
      ],
      outList: [
        {
          label: "出证口出证",
          value: "0"
        },
        {
          label: "回收箱出证",
          value: "1"
        }
      ]
    };
  },
  methods: {
    getAll() {
      this.list = [];
      this.info = "";
      if (this.single) {
        this.province = 1;
      }
      if (this.loadstarttime != "" || this.loadendtime != "") {
        this.EnableSaveTimeParam = true;
      }
      if (this.loadstarttime != "")
        this.loadstarttime = this.$moment(this.loadstarttime).format(
          "YYYY-MM-DD"
        );

      if (this.loadendtime != "")
        this.loadendtime = this.$moment(this.loadendtime).format("YYYY-MM-DD");
      var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
      if (this.idnumber != "" && !reg.test(this.idnumber)) {
        this.$Message.error("身份证格式不正确");
      } else {
        this.loadingText = "数据加载中...";
        this.$axios({
          url: this.$ports.Data.LICCardSelectByLib,
          data: {
            Token: sessionStorage.getItem("Token"),
            EnableDateTime: this.EnableSaveTimeParam,
            EnabledCardTimeParam: false,
            EnableCluster: false,
            TakeType: this.Take,
            SaveType: this.Save,
            Name: this.name,
            GenderType: this.sex, //性别
            IDCardNumber: this.idnumber,
            CardProvince: this.province,
            PutStartTime: this.loadstarttime,
            PutEndTime: this.loadendtime,
            EnabledCardStartTime: "",
            EnabledCardEndTime: "",
            QueryBound: 0,
            OrderByColumnName: "SerialNo",
            startIndex: this.startIndex,
            endIndex: this.endIndex
          },
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          timeout:6000*10
        }).then(res => {
          console.log(res);
          if(res.status == 400 || res.status == 500){
            this.$Message.error("请求失败");
          }else{
            if (res.data.data.length != 0) {
              this.list = res.data.data;
              this.total = res.data.data.length;
            } else {
              this.$Message.error("查找失败");
              this.loadingText = "";
            }
          }
          
          this.name = "";
          this.sex = "0";
          this.idnumber = "";
          this.Take = "20";
          this.Save = "0";
          this.single = false;
          this.loadendtime = "";
          this.loadstarttime = "";
        });
      }
    },
    handleSelectionChange(r, i) {
      if (r) {
        this.info = r;
        this.info.PhotoBase64 = "data:image/jpg;base64," + this.info.PhotoBase64;
        console.log(this.info.PhotoBase64);
      }
    },
    exportcard() {
      console.log(this.info.SerialNo);
      if (this.info.UserName) {
        this.$axios({
          url: this.$ports.Data.IDCardTakeByPolice,
          data: {
            Token: sessionStorage.getItem("Token"),
            IDCardSerialNO: this.info.SerialNo,
            CarePushType: this.out
          },
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          timeout:6000*10
        }).then(res => {
          if (res.data.Status === 1) {
            this.$Message.info("导出成功");
          } else {
            this.$Message.warning("导出失败");
          }
        });
      } else {
        this.$Message.info("请选择要导出的身份证");
      }
    },
    changepage(page) {
     this.startIndex = (page-1 )*10;
      this.endIndex = this.startIndex + 9; 
      this.getAll();
    }
  },
  mounted() {
    this.getAll();
  }
};
</script>
<style lang="scss" scoped>
h2 {
  color: #fff;
}
.ivu-table-wrapper {
  width: 100%;
  display: inline-block;
}
/* .ivu-table-wrapper .ivu-table {
  width: 100%;
} */
.ivu-col-span-12 {
  display: inline-block;
  width: 25%;
}
.ivu-select-dropdown {
  color: #999;
}
.ivu-btn > span {
  vertical-align: middle;
  font-size: 12px;
  letter-spacing: 0px;
}
</style>
