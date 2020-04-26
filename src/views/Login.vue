<template>
  <div class='login-container'>
    <div class='login_box'>
        <!-- logo区域 -->
        <div class='avatar-box'>
            <img src='../assets/logo.png' alt=''>
        </div>
        <!-- 登录的表单区域 -->
        <el-form :model='loginFrom' :rules="rules" ref="loginFromRef" label-width="0px" class='login-from'>
            <el-form-item prop='userName'>
                <el-input v-model='loginFrom.userName' prefix-icon="el-icon-user" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item prop='password'>
                <el-input v-model='loginFrom.password' show-password prefix-icon="el-icon-lock" placeholder="请输入用户密码"></el-input>
            </el-form-item>
            <!--按钮区域-->
            <el-form-item class='btns'>
                <el-button @click='login' type="primary">登录</el-button>
                <el-button @click='resetForm("loginFrom")' type="info">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      loginFrom: {
        userName: '',
        password: ''
      },
      rules: {
        userName: [
          {
            required: true,
            message: '请输入用户名称',
            trigger: 'blur'
          },
          {
            min: 5,
            max: 15,
            message: '长度在 5 到 15 个字符',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入用户密码',
            trigger: 'blur'
          },
          {
            min: 6,
            max: 16,
            message: '长度在 6 到 16 个字符',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    /* 重置表单 */
    resetForm () {
      this.$refs.loginFromRef.resetFields()
    },
    login () {
      /* 登录预校验 */
      this.$refs.loginFromRef.validate(valid => {
        if (!valid) {
          return
        }
        console.log('登录')
      })
    }
  }
}
</script>

<style lang='less' scoped>
    .login-container {
        background-color: #2b4b6b;
        height: 100%;
    }
    .login_box {
        box-shadow: 0 0 300px #ddd;
        width: 600px;
        height: 400px;
        background-color: #fff;
        border-radius: 10px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    .avatar-box {
        height: 65%;
        width: 45%;
        border: 3px solid #eee;
        border-radius: 50%;
        padding: 10px;
        box-shadow: 0 0 300px #ddd;
        position: absolute;
        left: 50%;
        transform: translate(-50%, -60%);
        img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background-color: #eee;
        }
    }
    .btns {
        display: flex;
        justify-content: center;
    }
    .login-from {
        position: absolute;
        bottom: 40px;
        width: 100%;
        padding: 0 60px;
        box-sizing: border-box;
    }
</style>
