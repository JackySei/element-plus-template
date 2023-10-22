<template>
  <div id="content">
    <el-config-provider :locale="zhCn">
      <router-view class="router"></router-view>
    </el-config-provider>
  </div>
</template>
<script setup>
import { ElConfigProvider } from 'element-plus';
import zhCn from 'element-plus/lib/locale/lang/zh-cn';
</script>

<style lang="scss">
#content {
  height: 100%;
  background: #f3f3f4;
}

#nprogress .bar {
  background: #753fe0 !important;
}

.el-container {
  height: 100%;
}

.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  // text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #fff;
  color: #333;
  text-align: center;
  border-right: 1px solid #f5f5f5;
  // line-height: 50px;
  // border-bottom: 1px solid;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  padding: 0 !important;
  // text-align: center;
}

.el-menu {
  background-color: #d3dce6;
}
</style>
