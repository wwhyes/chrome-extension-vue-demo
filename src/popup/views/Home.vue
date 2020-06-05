<template>
  <el-main class="page">
    <div class="page__banner-area">
      <el-image
        :src="banner"
        :style="{ width: '346px', height: '148px' }"
      />
    </div>
    <div class="page__text-area">
      <h3 class="page__title">
        暂无报告获取记录
      </h3>
      <el-button
        class="page__link"
        type="text"
      >
        立即获取
      </el-button>
    </div>
  </el-main>
</template>

<script>
import banner from '@/assets/01.png'
export default {
  name: 'Home',
  data () {
    return {
      banner
    }
  }
}
</script>

<style lang="less" scoped>
.page {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  text-align: center;
}
.page__banner-area {
  margin-bottom: 35px;
}
.page__title {
  margin-bottom: 30px;
  font-size: 20px;
  font-weight: 400;
}
.page__link {
  color: #51C51A;
  font-size: 18px;
}
</style>
