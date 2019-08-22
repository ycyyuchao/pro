<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  height: 100%;
}
.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav {
  width: 600px;
  margin: 0 auto;
  margin-right: -380px;
}
.layout-footer-center {
  text-align: center;
}
.ivu-layout {
  height: 100%;
}
.ivu-breadcrumb {
  font-size: 24px;
  margin-right: 20px;
}

.login {
  background-image: url(./assets/img/2.png);
  background-position: 50%;
  background-size: cover;
  height: 100%;
  position: relative;
  width: 100%;
}
.login-con {
  -webkit-transform: translateY(-60%);
  position: absolute;
  right: 36%;
  top: 50%;
  transform: translateY(-60%);
  width: 660px;
}
.ivu-card {
  background: rgba(72, 137, 237, 0.4);
}
.ivu-layout-content {
  background-image: url(./assets/img/2.png);
}
.ivu-card-body {
  padding: 45px 0 40px 88px;
}
.ivu-form-item-content {
  width: 100%;
}
.ivu-form-item-label {
  width: 100px;
  margin-left: -10px;
}
.ivu-card-head {
  border: 0;
  padding: 45px 0 0 40px;
}
.ivu-form-inline .ivu-form-item {
  width: 500px;
}
.ivu-input-wrapper {
  width: 78%;
}
.ivu-card-head p,
.ivu-card-head-inner {
  color: #fff;
  height: 44px;
  line-height: 44px;
  font-size: 24px;
}

.ivu-breadcrumb a {
  color: #fed;
}
.ivu-layout-header {
  background: rgba(72, 137, 237, 0.8);
}
.ivu-menu-dark {
  background: rgba(72, 137, 237, 1);
}
.layout-logo {
  background: blue;
}
.nav div {
  width: 260px;
  height: 102px;
  position: relative;
}
.clicksystem {
  background-image: url(./assets/img/b2.png);
}
.clicksystem:hover {
  background-image: url(./assets/img/d2.png);
}
.clicksystem:hover .one {
  display: block;
}
.clickpaper {
  background-image: url(./assets/img/b3.png);
}
.clickpaper:hover {
  background-image: url(./assets/img/d3.png);
}
.clickpaper:hover .two {
  display: block;
}
.clickquery {
  background-image: url(./assets/img/b1.png);
}
.clickquery:hover {
  background-image: url(./assets/img/d1.png);
}
.clickquery:hover .three {
  display: block;
}
.ivu-form .ivu-form-item-label {
  color: #fff;
  font-size: 24px;
}
.btn {
  font-size: 18px;
}
</style>
<template>
  <div class="layout">
    <div class="display" v-if="display" @click="clickhandel">
      <p>CLVILIAN POLICE END MANAGEMENT</p>
      <h1>身份证自助领证机管理</h1>
      <b></b>
      <span>
        MANAGEMENT OF SELF-SERVICE
        <br>ID CARD RECEIVER
      </span>
    </div>
    <div v-else style="height:100%">
      <div style="height:100%" v-if="login">
        <Layout>
          <Content :style="{padding: '0 50px'}">
            <div class="nav" style="margin-top:40px">
              <div style="display:inline-block" class="clicksystem">
                <ul class="function_ul one" ref="one" style="width:259px;">
                  <li>
                    <router-link to="/stop">暂停恢复运营</router-link>
                  </li>
                  <li>
                    <router-link to="/register">许&nbsp;&nbsp;可&nbsp;&nbsp;&nbsp;注&nbsp;&nbsp;册</router-link>
                  </li>
                  <li>
                    <router-link
                      to="/about"
                    >关&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;于</router-link>
                  </li>
                </ul>
              </div>
              <div style="display:inline-block;margin-left: -4px;" class="clickpaper">
                <ul class="function_ul two" ref="two">
                  <li>
                    <router-link to="/batchexport">批量导出</router-link>
                  </li>
                  <li>
                    <router-link to="/police">民警带领</router-link>
                  </li>
                  <li>&nbsp;</li>
                </ul>
              </div>
              <div style="display:inline-block;margin-left: -4px;" class="clickquery">
                <ul class="function_ul three" ref="three">
                  <li>
                    <router-link to="/paperquery">证件信息查询</router-link>
                  </li>
                  <li>
                    <router-link to="/errorquery">错误日志查询</router-link>
                  </li>
                  <li>&nbsp;</li>
                </ul>
              </div>
            </div>
            <!-- <div style="color: #fff;position: absolute;right: 20px;top: 10px;font-size: 20px;">
              <Icon type="md-close"/>
              <button @click="close" style="background:none;border:0;color: #fff;outline:0">退出</button>
            </div>
            <div style="color: #fff;position: absolute;right: 100px;top: 10px;font-size: 20px;">
              <Icon type="ios-arrow-up"/>
              <button @click="getFullCreeen" style="background:none;border:0;color: #fff;outline:0;">全屏</button>
            </div> -->
            <Card style="margin-top: 40px;border:0;height:760px;">
              <div style="min-height: 200px;">
                <router-view></router-view>
              </div>
            </Card>
          </Content>
        </Layout>
      </div>
      <div class="login" v-else>
        <div class="login-con">
          <div class="ivu-card">
            <div class="ivu-card-head">
              <p style="text-align: center;margin-left:-15px;">
                <i class="ivu-icon ivu-icon-log-in"></i>
                <span>身份证自助领证管理软件</span>
              </p>
            </div>
            <div class="ivu-card-body">
              <div class="form-con" style="margin-left:18px;">
                <Form
                  ref="formInline"
                  :model="formInline"
                  :rules="ruleInline"
                  inline
                  autocomplete="off"
                >
                  <FormItem prop="user" label="用户名称：" style="width:575px;">
                    <Input
                      type="text"
                      v-model="formInline.user"
                      placeholder="请输入用户名称"
                      style="width:50%;margin-top:5px"
                    />
                  </FormItem>
                  <FormItem prop="password" label="用户密码：" style="width:575px;">
                    <Input
                      type="password"
                      v-model="formInline.password"
                      placeholder="请输入用户密码"
                      style="width:50%;margin-top:5px"
                    />
                  </FormItem>
                  <FormItem>
                    <Checkbox
                      v-model="formInline.remember"
                      style="color: #fff;font-size: 16px;margin-left: 20px;"
                    >记住密码</Checkbox>
                  </FormItem>
                  <FormItem style="width:100%;margin-left:14%;">
                    <Button type="primary" @click="handleSubmit('formInline');" class="btn">确定</Button>
                    <Button type="primary" class="btn">取消</Button>
                  </FormItem>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
import md5 from "crypto-js/md5";
export default {
  data() {
    return {
      formInline: {
        user: "",
        password: "",
        remember: true
      },
      ruleInline: {
        user: [
          {
            required: true,
            message: "用户名不能为空",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "密码不能为空",
            trigger: "blur"
          },
          {
            type: "string",
            min: 6,
            message: "密码不能短于6位",
            trigger: "blur"
          }
        ]
      },
      fullscreen: false,
      n:0,
    };
  },
  computed: {
    ...mapGetters(["login", "display"])
  },

  methods: {
    ...mapActions(["checklogin", "logins", "checkdisplay"]),
    handleSubmit(name) {
      if (this.formInline.remember == true) {
        console.log("存储");
        localStorage.setItem('user',this.formInline.user,7)
        localStorage.setItem('pass',this.formInline.password,7)
      }else {
        console.log("清空");
        localStorage.removeItem("user");
        localStorage.removeItem('pass')
      }
      this.$refs[name].validate(valid => {
        if (valid) {
          this.logins(this.formInline);
        } else {
          this.$Message.error("登录失败!");
        }
      });
      this.$refs.formInline.resetFields(); //清空表单信息
    },
    close() {
      this.checklogin(false);
      this.checkdisplay(true);
      sessionStorage.removeItem("Token");
      this.$router.replace({ path: "/" });
    },
    clickhandel() {
      this.checkdisplay(false);
    },
    getFullCreeen() {
      console.log(1)
      this.n++;
      this.n % 2 == 0
        ? this.outFullCreeen(document)
        : this.inFullCreeen(document.documentElement);
    },
    inFullCreeen(element) {
      let el = element;
      let rfs =
        el.requestFullScreen ||
        el.webkitRequestFullScreen ||
        el.mozRequestFullScreen ||
        el.msRequestFullScreen;
      if (typeof rfs != "undefined" && rfs) {
        rfs.call(el);
      } else if (typeof window.ActiveXObject != "undefined") {
        let wscript = new ActiveXObject("WScript.Shell");
        if (wscript != null) {
          wscript.SendKeys("{F11}");
        }
      }
    },
    outFullCreeen(element) {
      let el = element;
      let cfs =
        el.cancelFullScreen ||
        el.webkitCancelFullScreen ||
        el.mozCancelFullScreen ||
        el.exitFullScreen;
      if (typeof cfs != "undefined" && cfs) {
        cfs.call(el);
      } else if (typeof window.ActiveXObject != "undefined") {
        let wscript = new ActiveXObject("WScript.Shell");
        if (wscript != null) {
          wscript.SendKeys("{F11}");
        }
      }
    }
  },
  created(){
    if(localStorage.getItem("user")){
      this.formInline.user = localStorage.getItem("user")
      this.formInline.password = localStorage.getItem('pass');
    }else{
      this.formInline.user = ''
      this.formInline.password = '';
    }
  },
  mounted() {
    if (sessionStorage.getItem("Token")) {
      this.checklogin(true);
      this.checkdisplay(false);
    } else {
      this.checklogin(false);
      this.checkdisplay(true);
    }
    /* if(localStorage.getItem("user")){
      this.formInline.user = localStorage.getItem("user")
      this.formInline.password = localStorage.getItem('pass');
    }else{
      this.formInline.user = ''
      this.formInline.password = '';
    } */
  }
};
</script>

<style lang="scss" scoped>
$font: #fdfeff;
.display {
  height: 100%;
  background-image: url(./assets/img/1.png);
  background-size: 100% 100%;
  p {
    font: 24px Roboto-Light;
    color: $font;
    padding: 207px 0 0 207px;
  }
  h1 {
    font: 900 112px SourceHanSansSc-Bold;
    color: $font;
    padding: 190px 0 0 190px;
  }
  b {
    display: block;
    width: 132px;
    height: 27px;
    background-color: #5ed6b0;
    margin: 88px 0 108px 190px;
  }
  span {
    display: block;
    font: 62px Roboto-Medium;
    color: rgba(253, 254, 255, 0.4);
    margin: 0 0 212px 190px;
  }
}
.login {
  .function {
    margin: 3px;
    button {
      height: 110px;
      width: 265px;
      border: 0;
      outline: 0;
    }
    .system {
      background-image: url(./assets/img/b2.png);
    }
    .papers {
      background-image: url(./assets/img/b3.png);
    }
    .query {
      background-image: url(./assets/img/b1.png);
    }
  }
}

.ivu-form-item .ivu-form-item-required.ivu-form .ivu-form-item-label {
  font-weight: 700;
  color: #fff;
  font-size: 20px;
}
.ivu-form-item-error-tip {
  left: 110px;
}
.ivu-btn-primary {
  color: #fff;
  background-color: #5ed6b0;
  border-color: #5ed6b0;
  width: 100px;
}
.ivu-btn > span {
  vertical-align: middle;
  font-size: 20px;
  letter-spacing: 6px;
}

.function_ul {
  display: none;
  list-style: none;
  font-size: 20px;
  color: #fff;
  background: #5ed6b0;
  margin: 0;
  text-align: center;
  line-height: 40px;
  width: 260px;
  margin-top: -6px;
  position: absolute;
  z-index: 99;
  top: 108px;
  a {
    color: #fff;
  }
}
.ivu-breadcrumb-item-separator {
  display: none;
}
.btn {
  margin-right: 100px;
}
</style>


    
