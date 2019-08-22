


<template>
  <div>
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

        <Button type="success" style="font-size: 18px;margin-left: 120px;" @click="getData()">查找</Button>
      </div>
    </div>
    <div>
      <div style="display:inline-block;width:49%;">
        <Table
          border
          ref="purchaseTable"
          :columns="columns"
          :data="list"
          style="margin-bottom:30px"
          @on-row-click="rowclick"
          @on-select="handleSelectionChange"
          @on-select-cancel="handleSelectionChangecancel"
          @on-select-all="handleSelectionChangeall"
          @on-select-all-cancel="handleSelectionChangeallcancel"
          height="500"
          :no-data-text="loadingText ? loadingText : '暂无数据'"
        ></Table>
        <Page
          :total="total"
          show-elevator
          @on-change="changepageone"
          style="color:#fff;margrin-top;20px;display:inline-block"
        />
        <Button
          type="success"
          ghost
          style="background:#fff;margin-left: 200px;margin-top:-20px;font-size: 14px;"
          @click="addqueue()"
        >加入出库队列</Button>
      </div>
      <div style="display:inline-block;width:49%;">
        <Table
          border
          ref="selection"
          :columns="columns1"
          :data="listexport"
          style="margin-bottom:30px"
          @on-row-click="rowclicktwo"
          @on-select="handleSelectionChangetwo"
          @on-select-cancel="handleSelectionChangecanceltwo"
          @on-select-all="handleSelectionChangealltwo"
          @on-select-all-cancel="handleSelectionChangeallcanceltwo"
          height="500"
          :no-data-text="loadingTexttwo ? loadingTexttwo : '暂无数据'"
        ></Table>
        <Page
          :total="totalexport"
          show-elevator
          @on-change="changepagetwo"
          style="color:#fff;margrin-top;20px;display:inline-block"
        />
        <RadioGroup
          v-model="out"
          @on-change="changeModel"
          style="color:white;margin-left:8%;margin-bottom:2%;"
        >
          <Radio v-for="item in outList" :label="item.value" :key="item.value">
            <span>{{item.label}}</span>
          </Radio>
        </RadioGroup>
        <Button
          type="success"
          ghost
          style="background:#fff;margin-top:-20px;font-size: 14px;"
          @click="Del"
        >移除</Button>
        <Button
          type="success"
          ghost
          style="background:#fff;margin-top:-20px;font-size: 14px;"
          @click="executeexport"
        >执行导出</Button>
      </div>
    </div>
  </div>
</template> 
<script>
export default {
  name: "Export",
  data() {
    return {
      loadingTexttwo: "",
      loadingText: "",
      columns: [
        {
          type: "selection",
          width: 60,
          align: "center"
        },
        {
          title: "姓名",
          width: 100,
          key: "Name" //Name
        },
        {
          title: "身份证号",
          key: "IDCardNo", //
          width: 250
        },
        {
          title: "民族",
          width: 90,
          key: "Nationality"
        },
        {
          title: "入库方式",
          width: 120,
          key: "CardSaveType"
        },
        {
          title: "入库时间",
          width: 252,
          key: "CardSaveTime"
        }
      ],
      list: [],
      total: "",
      columns1: [
        {
          type: "selection",
          width: 60,
          align: "center"
        },
        {
          title: "姓名",
          key: "Name", //Name
          width: 100
        },
        {
          title: "身份证号",
          key: "IDCardNo",
          width: 250
        },
        {
          title: "民族",
          key: "Nationality",
          width: 90
        },
        {
          title: "入库方式",
          key: "CardSaveType",
          width: 120
        },
        {
          title: "入库时间",
          key: "CardSaveTime",
          width: 252
        }
      ],
      totalexport: "",
      EnableSaveTimeParam: false,
      single: false,
      loadstarttime: "",
      loadendtime: "",
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
      Take: "20",
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
      Save: "0",
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
      out: "0",
      outList: [
        {
          label: "出证口出证",
          value: "0"
        },
        {
          label: "回收箱出证",
          value: "1"
        }
      ],
      sex: "0",
      name: "",
      idnumber: "",
      province: 0,
      cardarr: [],
      startIndex: 0,
      endIndex: 9,
      selectedIds: new Set(), //选中的合并项的id
      selectedIdtwo: new Set(),
      lists: [], //加入到出库队列的信息,判断要不要选择出库信息
      listexport: [], //出库队列表的信息
      splicelist: [], //被splice的数据
      pagelist: [] //splice的原数据，在splicelist被splice后重新赋值
    };
  },
  methods: {
    getData() {
      this.list = [];
      if (this.single) {
        this.province = 1;
      }
      if (this.loadstarttime != "" || this.loadendtime != "") {
        this.EnableSaveTimeParam = true;
      }
      if (this.loadstarttime != "")
        this.loadstarttime = this.$moment(this.loadstarttime).format(
          "YYYY-MM-DD HH:mm:ss"
        );

      if (this.loadendtime != "")
        this.loadendtime = this.$moment(this.loadendtime).format(
          "YYYY-MM-DD HH:mm:ss"
        );
      var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
      if (this.idnumber != "" && !reg.test(this.idnumber)) {
        this.$Message.error("身份证格式不正确");
      } else {
        this.loadingText = "数据加载中...";
         this.$axios({
          url: this.$ports.Data.IDCardSelectByLib,
          data: {
            EnableSaveTimeParam: this.EnableSaveTimeParam,
            EnabledCardTimeParam: false,
            EnableCluster: false,
            TakeType: this.Take,
            SaveType: this.Save,
            Name: this.name,
            GenderType: this.sex, //性别
            IDCardNumber: this.idnumber,
            CardProvince: this.province,
            PutStartTime: "",
            PutEndTime: "",
            EnabledCardStartTime: this.loadstarttime,
            EnabledCardEndTime: this.loadendtime,
            QueryBound: 0,
            OrderByColumnName: "SerialNo",
            startIndex: this.startIndex,
            endIndex: this.endIndex
          },
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          timeout: 6000 * 10
        }).then(res => {
          // console.log(res.data.data)
          this.list = res.data.data;
          this.total = res.data.data.length;
          if (res.data.data.length != 0) {
            this.list = res.data.data;
            this.total = res.data.data.length;
          } else {
            this.$Message.info("没有符合条件的数据");
            this.loadingText = "";
          }
        }); 
      }
      this.name = "";
      this.sex = "0";
      this.idnumber = "";
      this.Take = "20";
      this.Save = "0";
      this.single = false;
      this.loadendtime = "";
      this.loadstarttime = "";
    },
    changepageone(page) {
      this.startIndex = (page - 1) * 10;
      this.endIndex = this.startIndex + 9;
      this.getData();
      setTimeout(() => {
        this.setChecked();
      }, 100);
    },
    handleSelectionChange(s, r) {
      this.lists.push(r);
      this.selectedIds.add(r.SerialNo);
    },
    handleSelectionChangecancel(s, r) {
      this.lists.splice(this.lists.indexOf(r), 1);
      this.selectedIds.delete(r.SerialNo);
    },
    handleSelectionChangeall(s) {
      for (var i = 0; i < s.length; i++) {
        this.lists.push(s[i]);
      }
      if (s.length === 0) {
        // 若取消全选，删除保存在selectedIds里和当前table数据的id一致的数据，达到，当前页取消全选的效果
        // 当前页的table数据
        let data = this.$refs.purchaseTable.data;
        data.forEach(item => {
          if (this.selectedIds.has(item.SerialNo)) {
            this.selectedIds.delete(item.SerialNo);
          }
        });
      } else {
        s.forEach(item => {
          this.selectedIds.add(item.SerialNo);
        });
      }
      console.log(this.lists);
    },
    handleSelectionChangeallcancel(s) {
      if (s.length === 0) {
        // cy 若取消全选，删除保存在selectedIds里和当前table数据的id一致的数据，达到，当前页取消全选的效果
        // 当前页的table数据
        let data = this.$refs.purchaseTable.data;
        data.forEach(item => {
          if (this.selectedIds.has(item.SerialNo)) {
            this.selectedIds.delete(item.SerialNo);
            this.lists.splice(this.lists.indexOf(item), 1);
          }
        });
      } else {
        s.forEach(item => {
          this.selectedIds.add(item.SerialNo);
        });
      }
      console.log(this.lists);
    },
    copy(array) {
      let newArray = [];
      for (let item of array) {
        newArray.push(item);
      }
      return newArray;
    },
    addqueue() {
      //console.log("加入出库队列数据" + this.lists);
      //console.log("出库队列现有数据" + this.pagelist);
      if (this.lists.length == 0) {
        this.$Message.info("请选择要加入到出库队列的信息");
        return;
      } else {
        //将数据加入出库队列
        if (this.pagelist.length == 0) {
          this.pagelist = this.copy(this.lists);
        } else {
          for (let j in this.lists) this.pagelist.push(this.lists[j]);
        }
        this.splicelist = this.copy(this.pagelist);
        this.totalexport = this.splicelist.length;

        //加入出库队列的数据不能再选
        let objData = this.$refs.purchaseTable.objData;
        for (let index in objData) {
          for (let i in this.splicelist) {
            if (this.splicelist[i].SerialNo === objData[index].SerialNo) {//id
              objData[index]._isChecked = false;
              objData[index]._isDisabled = true;
            }
          }
        }
        //出库队列分页
        if (this.splicelist.length > 10) {
          this.listexport = this.splicelist.splice(0, 10);
          this.splicelist = this.copy(this.pagelist);
        } else {
          this.listexport = this.copy(this.splicelist);
        }
        this.lists = [];
       // console.log("最终表格数据" + this.pagelist);
      }
    },
    setChecked() {
      // 找到绑定的table的ref对应的dom，找到table的objData对象，objData保存的是当前页的数据
      let objData = this.$refs.purchaseTable.objData;
      for (let index in objData) {
        if (this.selectedIds.has(objData[index].SerialNo)) {
          // this.$refs.purchaseTable.toggleSelect(index) // 在保存选中的ids的set合集里找与当前页数据id一样的行，使用toggleSelect（index），将这一行选中
          objData[index]._isChecked = true;
        }
      }
    },
    executeexport() {
      if (this.cardarr.length === 0) {
        this.$Message.info("请先选择要导出的证件");
      } else {
        var hash=[];
        for (var i = 0; i < this.cardarr.length; i++) {
          if(hash.indexOf(this.cardarr[i])==-1){
            hash.push(this.cardarr[i]);
          }
        }
        this.cardarr = hash
        this.$axios({
          url: this.$ports.Data.IDCardBathExport,
          data: {
            Token: sessionStorage.getItem("Token"),
            IDCardid: this.cardarr,
            CarePushType: this.out
          },
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          timeout: 6000 * 10
        }).then(res => {
          if (res.data.Status === 1) {
            this.$Message.info("导出成功");
            for (let index in this.pagelist) {
              for (let i in this.cardarr) {
                if (this.cardarr[i] === this.pagelist[index].SerialNo) {
                  this.listexport.splice(this.listexport.indexOf(this.listexport[index],1))
                  this.splicelist.splice(this.splicelist.indexOf(this.splicelist[index],1))
                  this.pagelist.splice(this.pagelist.indexOf(this.pagelist[index],1))
                } 
              }
            }
            this.totalexport = this.pagelist.length
            this.getData();
          }
        });
      }
    },
    Del() {
      if(this.cardarr.length != 0){
        for (let index in this.pagelist) {
          for (let i in this.cardarr) {
            if (this.cardarr[i] === this.pagelist[index].SerialNo) {
              this.listexport.splice(this.listexport.indexOf(this.listexport[index],1))
              this.splicelist.splice(this.splicelist.indexOf(this.splicelist[index],1))
              this.pagelist.splice(this.pagelist.indexOf(this.pagelist[index],1))
            } 
          } 
        }
        this.totalexport = this.pagelist.length
        this.cardarr = [];
      }else{
        this.$Message.info('请选择要移除的信息')
      }
      
    },
    handleSelectionChangetwo(s, r) {
      this.cardarr.push(r.SerialNo);
      this.selectedIdtwo.add(r.SerialNo);
    },
    handleSelectionChangecanceltwo(s, r) {
      this.cardarr.splice(this.cardarr.indexOf(r.SerialNo), 1);
      this.selectedIdtwo.delete(r.SerialNo);
    },
    handleSelectionChangealltwo(s) {
      if (s.length === 0) {
        // 若取消全选，删除保存在selectedIds里和当前table数据的id一致的数据，达到，当前页取消全选的效果
        // 当前页的table数据
        let data = this.$refs.selection.data;
        data.forEach(item => {
          if (this.selectedIdtwo.has(item.SerialNo)) {
            this.selectedIdtwo.delete(item.SerialNo);
          }
        });
      } else {
        s.forEach(item => {
          this.selectedIdtwo.add(item.SerialNo);
          this.cardarr.push(item.SerialNo);
        });
      }
    },
    handleSelectionChangeallcanceltwo(s) {
      if (s.length === 0) {
        // 若取消全选，删除保存在selectedIds里和当前table数据的id一致的数据，达到，当前页取消全选的效果
        // 当前页的table数据
        let data = this.$refs.selection.data;
        data.forEach(item => {
          if (this.selectedIdtwo.has(item.SerialNo)) {
            this.selectedIdtwo.delete(item.SerialNo);
            this.cardarr.splice(this.cardarr.indexOf(item.SerialNo), 1);
          }
        });
      } else {
        s.forEach(item => {
          this.selectedIdtwo.add(item.SerialNo);
        });
      }
    },
    setCheckedtwo() {
      // 找到绑定的table的ref对应的dom，找到table的objData对象，objData保存的是当前页的数据
      let objData = this.$refs.selection.objData;
      console.log(this.selectedIdtwo)
      console.log(objData);
      for (let index in objData) {
        if (this.selectedIdtwo.has(objData[index].SerialNo)) {
          objData[index]._isChecked = true;
        }
      }
      console.log(this.cardarr)
    },
    changepagetwo(page) {
      // this.listexport.splice(0, this.listexport.length);
      this.listexport = this.splicelist.slice(
        (page - 1) * 10,
        (page - 1) * 10 + 10
      );
      this.splicelist = this.copy(this.pagelist);
      setTimeout(() => {
        this.setCheckedtwo();
      }, 100);
    }
  },
  mounted() {
    this.getData();
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
td {
  height: 40px;
}
</style>
