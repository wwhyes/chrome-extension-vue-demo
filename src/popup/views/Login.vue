<template>
  <el-main class="page">
    <div class="page__header">
      <el-image
        class="page__logo"
        :src="logo"
      />
      <span class="page__title">EC Amazon Tool</span>
    </div>
    <el-form
      class="page__main"
      ref="form"
      :model="form"
      :rules="rules"
    >
      <el-form-item prop="username">
        <el-input
          type="text"
          v-model="form.username"
          autocomplete="off"
          placeholder="请输入用户名/手机号"
        />
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          type="password"
          v-model="form.password"
          autocomplete="off"
          placeholder="请输入密码"
        />
      </el-form-item>
      <el-form-item>
        <el-button
          type="success"
          :style="{ marginTop: '20px', width: '100%' }"
          @click="onSubmit"
        >
          登 录
        </el-button>
      </el-form-item>
    </el-form>
  </el-main>
</template>

<script>
import logo from '@/assets/logo.png'
export default {
  name: 'Login',
  data () {
    return {
      logo,
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: { required: true, message: '请输入登录账号', trigger: 'blur' },
        password: { required: true, message: '请输入登录密码', trigger: 'blur' }
      }
    }
  },
  methods: {
    onSubmit () {
      const { validate } = this.$refs.form

      validate((valid) => {
        if (valid) {
          console.log('提交成功')
          this.$router.push({
            name: 'Home'
          })
        } else {
          console.log('提交失败!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.page__header {
  margin-top: 36px;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.page__main {
  margin-left: 30px;
  margin-right: 30px;

  .el-form-item {
    margin-bottom: 30px;
  }
}
.page__logo {
  margin-right: 16px;
}
.page__title {
  color: #000001;
  font-size: 26px;
  font-weight: 400;
}
</style>
