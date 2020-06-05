<template>
  <el-container class="layout">
    <el-header height="50px">
      <template v-if="false">
        <h5 class="layout__title">
          {{ config.name }}
        </h5>
      </template>
      <template v-else>
        <el-image
          :src="logo"
          :style="{ marginRight: '10px', width: '21px', height: '21px' }"
        />
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            <span>zz745838333333</span>
            <i class="el-icon-caret-bottom el-icon--right" />
          </span>
          <el-dropdown-menu
            slot="dropdown"
            :style="{ padding: 0 }"
          >
            <el-dropdown-item>
              退出
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </template>
    </el-header>

    <router-view />

    <el-footer height="auto">
      <div class="layout__version">
        版本号： {{ config.version }}
      </div>
      <div class="layout__action">
        <el-link type="success">
          操作日志
        </el-link>
      </div>
    </el-footer>
  </el-container>
</template>

<script>
import config from '@/manifest.json'
import logo from '@/assets/logo.png'
export default {
  name: 'BasicLayout',
  data () {
    return {
      config,
      logo
    }
  },
  methods: {
    close () {
      window.close()
    }
  }
}
</script>

<style lang="less">
.layout.el-container {
  height: 100%;

  > .el-header {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #E8E8E8;
  }

  > .el-footer {
    padding: 10px 20px;
    font-size: 13px;
    line-height: 2;
  }
}
.layout__title {
  font-size: 14px;
  font-weight: bold;
  opacity: 0.85;
}
.layout__version {
  float: left;
}
.layout__action {
  display: block;
  text-align: right;
  overflow: hidden;
}

// Modify Element Style
.el-dropdown-link {
  cursor: pointer;

  span {
    display: inline-block;
    max-width: 80px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    vertical-align: top;
  }
}
</style>
