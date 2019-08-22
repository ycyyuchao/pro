<template>
  <div>
    <div class="ivu-card" style="width: 34%;margin: 0 auto;margin-top: 15%">
      <div class="ivu-card-head">
        <p>
          <i class="ivu-icon ivu-icon-log-in"></i>
          <span style="font-size:20px;vertical-align: baseline;">注册码核验</span>
        </p>
      </div>
      <div class="ivu-card-body">
        <div class="form-con">
          <Form ref="formInline" :model="formInline" :rules="ruleInline" inline autocomplete="off">
            <FormItem prop="user" style="width: 70%;margin-left: 15%;">
              <span style="font-size: 20px;">序列码：</span>
              <Input type="text" v-model="formInline.user" placeholder="序列码" style="width: 75%;"/>
            </FormItem>
            <FormItem prop="password" style="width: 70%;margin-left: 15%;">
              <span style="font-size: 20px;">注册码：</span>
              <Input
                type="password"
                v-model="formInline.password"
                placeholder="注册码"
                style="width: 75%;"
              />
            </FormItem>
            <FormItem style="width:50%;margin-left:50%;">
              <Button type="primary" @click="handleSubmit('formInline')" class="btn">确定</Button>
              <Button type="primary" class="btn">取消</Button>
            </FormItem>
          </Form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      formInline: {
        user: "",
        password: ""
      },
      ruleInline: {
        user: [
          {
            required: true,
            message: "请填写序列码",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "请填写注册码",
            trigger: "blur"
          },
          {
            type: "string",
            min: 6,
            message: "注册码不能短于6位",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.axios({
            url: 'http://192.168.10.102:8803/api/User/Login',//this.$ports.login
            data: {
              username: this.formInline.user,
              password: this.formInline.password
            },
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            timeout: 60000
          }).then(res => {
            console.log(res);
          });
          this.$refs.formInline.resetFields(); //提交后清空表单信息
        } else {
          this.$Message.error("注册失败!");
          this.$refs.formInline.resetFields(); //提交后清空表单信息
        }
      });
    }
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.ivu-form-item-error-tip {
  left: 50px;
}
.btn {
  font-size: 16px;
}
</style>

