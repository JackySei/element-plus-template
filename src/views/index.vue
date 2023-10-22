<template>
  <div class="pageA">
    <el-container>
      <el-container>
        <el-aside style="width: 204px; overflow-x: hidden">
          <div class="side-title">
            <img src="@/assets/image/favicon.png" alt="" />
            项目名称
          </div>
          <!-- <div class="user-info">
            <div class="right-img">
              <img src="@/assets/image/logo.png" width="60" alt="" />
            </div>
            <div class="right-content">
              <span>xxxx</span>
              <span class="user-title">管理员</span>
            </div>
          </div> -->
          <!-- 动态路由时删除||true -->
          <div class="side-choice" v-if="userRoutes || true">
            <el-menu
              class="el-menu-vertical-demo"
              :default-active="activePath"
              router
            >
              <!-- 动态路由 -->
              <!-- <el-sub-menu
                v-for="(item, index) in userRoutes"
                :key="index"
                :index="item.menuPath"
              >
                <template #title>
                  <el-icon>
                    <component :is="JSON.parse(item.menuMeta).icon"></component>
                  </el-icon>
                  <span>{{ JSON.parse(item.menuMeta).title }}</span>
                </template>
                <el-menu-item
                  v-for="(e, key) in item.children"
                  :key="key"
                  :index="e.menuPath"
                  >{{ JSON.parse(e.menuMeta).title }}</el-menu-item
                >
              </el-sub-menu> -->
              <!-- 静态路由 -->
              <el-sub-menu index="/ecrs/tagcharts">
                <template #title>
                  <el-icon><PieChart /></el-icon>
                  <span>审核统计</span>
                </template>
                <el-menu-item index="/ecrs/check/person"
                  >个人审核统计</el-menu-item
                >
                <el-menu-item index="/ecrs/check/team"
                  >团队审核统计</el-menu-item
                >
              </el-sub-menu>
            </el-menu>
          </div>
        </el-aside>
        <el-container>
          <el-main class="main">
            <div class="header-container">
              <div class="header-container-left">
                <el-breadcrumb separator="/">
                  <el-breadcrumb-item
                    v-for="(item, index) in breadcrumbData"
                    :key="item.path"
                  >
                    <!-- 不可点击项 -->
                    <span
                      v-if="index === breadcrumbData.length - 1"
                      class="no-redirect"
                      >{{ item.meta.title }}</span
                    >
                    <!-- 可点击项 -->
                    <a
                      v-else
                      class="redirect"
                      @click.prevent="onLinkClick(item)"
                      >{{ item.meta.title }}</a
                    >
                  </el-breadcrumb-item>
                </el-breadcrumb>
              </div>
              <div class="header-container-right">
                <el-dropdown>
                  <div class="el-dropdown-link header-container-right-drop">
                    <div class="right-img">
                      <img
                        src="@/assets/image/setting2.png"
                        width="60"
                        alt=""
                      />
                    </div>
                    <div class="right-content">
                      <span>{{ userName ? userName : '用户名' }}</span>
                    </div>
                  </div>
                  <template #dropdown>
                    <el-dropdown-menu>
                      <el-dropdown-item @click="outUser"
                        >退出登录</el-dropdown-item
                      >
                      <!-- <el-dropdown-item @click="logUser"
                        >退出登录</el-dropdown-item
                      > -->
                    </el-dropdown-menu>
                  </template>
                </el-dropdown>
              </div>
            </div>
            <!-- 子路由 -->
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script setup>
// import { ElMessage, ElMessageBox } from "element-plus";
import logout from '@/services/module/logout.js';
import { ref, watch, computed, onMounted, getCurrentInstance } from 'vue';
import { useRouter, useRoute } from 'vue-router';

import { ElMessageBox, ElLoading } from 'element-plus';
const { proxy } = getCurrentInstance();
const serviceId = ref('');
const breadcrumbData = ref([]);
const route = useRoute();
const router = useRouter();
const getBreadcrumbData = () => {
  breadcrumbData.value = route.matched.filter(
    (item) => item.meta && item.meta.title
  );
};
// 监听路由变化时触发
watch(
  route,
  () => {
    getBreadcrumbData();
  },
  {
    immediate: true,
  }
);

const activePath = computed(() => {
  if (route.path.indexOf('/ecrs/pgccheck/check') > -1) {
    return '/ecrs/pgccheck/check';
  } else {
    return route.path;
  }
});
function onLinkClick(item) {
  router.push(item.path);
}
const userName = ref('');
function getUser() {
  proxy.$http.get('/authapi/pgcauth/getUserInfo').then((res) => {
    userName.value = res.data.data.userName;
  });
}

onMounted(() => {
  // getUserInfo();
  getServiceId();
  getUserRoute();
  getUser();
});
const userRoutes = ref();
function getUserRoute() {
  // console.log('8876655');
  proxy.$http.get('/authapi/pgcauth/getMenus').then((res) => {
    const data = res.data.data;
    data.sort((a, b) => {
      return a.permissionOrder > b.permissionOrder ? 1 : -1;
    });

    userRoutes.value = data;
  });
}
function getServiceId() {
  proxy.$http
    .get('/authapi/pgcauth/getServiceId')
    .then((res) => {
      serviceId.value = res.data;
    })
    .catch(() => {});
}
function outUser() {
  ElMessageBox.confirm('确定退出系统?', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  })
    .then(() => {
      window.location.href = logout.logout(serviceId.value);
      // console.log(logout.logout(serviceId.value), 888);
      // console.log(logout.logout(serviceId.value), 98786544);
      ElLoading.service({
        lock: true,
        text: '退出账号',
        background: 'rgba(0, 0, 0, 0.7)',
      });
      localStorage.removeItem('ECRS-LOGIN-TOKEN');
    })
    .catch(() => {});
  // let data = {
  //   serviceId: "bd13b4f74d66415d7e4ab6c878a2d338",
  //   token: localStorage.getItem("ECRS-ADMIN-TOKEN"),
  // };
  // proxy.$http
  //   .get("/user/logout", data)
  //   .then((res) => {
  //     console.log(res);
  //   })
  //   .catch(() => {});
}
</script>
<style lang="scss">
:root {
  color-scheme: light;
  --el-color-white: #ffffff;
  --el-color-black: #000000;
  --el-color-primary: #f60;
  --el-color-primary-light-3: rgba(255, 102, 0, 0.8);
  --el-color-primary-light-5: rgba(255, 102, 0, 0.6);
  --el-color-primary-light-7: rgba(255, 102, 0, 0.4);
  --el-color-primary-light-8: rgba(255, 102, 0, 0.2);
  --el-color-primary-light-9: rgba(255, 102, 0, 0.1);
  --el-color-primary-dark-2: #f60;
  --el-color-success: #67c23a;
  --el-color-success-light-3: #95d475;
  --el-color-success-light-5: #b3e19d;
  --el-color-success-light-7: #d1edc4;
  --el-color-success-light-8: #e1f3d8;
  --el-color-success-light-9: #f0f9eb;
  --el-color-success-dark-2: #529b2e;
  --el-color-warning: #e6a23c;
  --el-color-warning-light-3: #eebe77;
  --el-color-warning-light-5: #f3d19e;
  --el-color-warning-light-7: #f8e3c5;
  --el-color-warning-light-8: #faecd8;
  --el-color-warning-light-9: #fdf6ec;
  --el-color-warning-dark-2: #b88230;
  --el-color-danger: #f56c6c;
  --el-color-danger-light-3: #f89898;
  --el-color-danger-light-5: #fab6b6;
  --el-color-danger-light-7: #fcd3d3;
  --el-color-danger-light-8: #fde2e2;
  --el-color-danger-light-9: #fef0f0;
  --el-color-danger-dark-2: #c45656;
  --el-color-error: #f56c6c;
  --el-color-error-light-3: #f89898;
  --el-color-error-light-5: #fab6b6;
  --el-color-error-light-7: #fcd3d3;
  --el-color-error-light-8: #fde2e2;
  --el-color-error-light-9: #fef0f0;
  --el-color-error-dark-2: #c45656;
  --el-color-info: #909399;
  --el-color-info-light-3: #b1b3b8;
  --el-color-info-light-5: #c8c9cc;
  --el-color-info-light-7: #dedfe0;
  --el-color-info-light-8: #e9e9eb;
  --el-color-info-light-9: #f4f4f5;
  --el-color-info-dark-2: #73767a;
  --el-bg-color: #ffffff;
  --el-bg-color-page: #f2f3f5;
  --el-bg-color-overlay: #ffffff;
  --el-text-color-primary: #303133;
  --el-text-color-regular: #606266;
  --el-text-color-secondary: #909399;
  --el-text-color-placeholder: #a8abb2;
  --el-text-color-disabled: #c0c4cc;
  --el-border-color: #dcdfe6;
  --el-border-color-light: #e4e7ed;
  --el-border-color-lighter: #ebeef5;
  --el-border-color-extra-light: #f2f6fc;
  --el-border-color-dark: #d4d7de;
  --el-border-color-darker: #cdd0d6;
  --el-fill-color: #f0f2f5;
  --el-fill-color-light: #f5f7fa;
  --el-fill-color-lighter: #fafafa;
  --el-fill-color-extra-light: #fafcff;
  --el-fill-color-dark: #ebedf0;
  --el-fill-color-darker: #e6e8eb;
  --el-fill-color-blank: #ffffff;
  --el-box-shadow: 0px 12px 32px 4px rgba(0, 0, 0, 0.04),
    0px 8px 20px rgba(0, 0, 0, 0.08);
  --el-box-shadow-light: 0px 0px 12px rgba(0, 0, 0, 0.12);
  --el-box-shadow-lighter: 0px 0px 6px rgba(0, 0, 0, 0.12);
  --el-box-shadow-dark: 0px 16px 48px 16px rgba(0, 0, 0, 0.08),
    0px 12px 32px rgba(0, 0, 0, 0.12), 0px 8px 16px -8px rgba(0, 0, 0, 0.16);
  --el-disabled-bg-color: var(--el-fill-color-light);
  --el-disabled-text-color: var(--el-text-color-placeholder);
  --el-disabled-border-color: var(--el-border-color-light);
  --el-overlay-color: rgba(0, 0, 0, 0.8);
  --el-overlay-color-light: rgba(0, 0, 0, 0.7);
  --el-overlay-color-lighter: rgba(0, 0, 0, 0.5);
  --el-mask-color: rgba(255, 255, 255, 0.9);
  --el-mask-color-extra-light: rgba(255, 255, 255, 0.3);
  --el-border-width: 1px;
  --el-border-style: solid;
  --el-border-color-hover: var(--el-text-color-disabled);
  --el-border: var(--el-border-width) var(--el-border-style)
    var(--el-border-color);
  --el-svg-monochrome-grey: var(--el-border-color);
}

// .el-sub-menu__title {
//   background-color: #2a3746;
//   color: #fff;
// }

// .el-menu-item {
//   background-color: #2a3746;
//   color: #fff;
// }

.el-menu-item.is-active {
  // color: #2a3746;
  font-weight: 700;
  // background-color: rgba(255, 255, 255, 0.1);
  border-right: 4px solid #f60;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 204px;
  height: 100%;
  font-weight: 500;
  // min-height: 400px;
}

.el-breadcrumb__item {
  font-size: 20px;
}

.title {
  color: red;
}

.title-left {
  display: inline-block;
}

.item-link {
  display: block;
  line-height: 40px;
  border-bottom: 1px solid;
  cursor: pointer;
}
</style>

<style lang="scss" scoped>
.pageA {
  // background: url("../assets/image/123.png") no-repeat;
  .el-breadcrumb__item {
    font-size: 14px;
  }
  .header-container {
    display: block;
    background-color: #fff;
    font-size: 20px;
    margin-bottom: 15px;
    overflow: hidden;
    padding: 15px 25px;

    .header-container-left {
      float: left;
    }

    .header-container-right {
      float: right;

      .header-container-right-drop {
        display: flex;
        align-items: center;
        cursor: pointer;
      }

      .right-img {
        display: inline-block;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        overflow: hidden;

        img {
          width: 20px;
        }
      }

      .right-content {
        display: inline-block;
        margin-left: 10px;
        font-size: 14px;
      }
    }
  }

  .side-title {
    font-size: 16px;
    font-weight: bold;
    color: #f60;
    img {
      width: 20px;
      position: relative;
      top: 3px;
      // height: 20px;
    }

    // background-color: #f60;
    // margin-bottom: 20px;
    // color: #fff;
    padding: 15px 0;
  }
  .user-info {
    display: flex;
    padding: 20px;
    // background-color: #2a3746;
    .right-img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      overflow: hidden;
    }
    .right-content {
      flex: 1;
      span {
        // color: #fff;
        display: block;
        line-height: 25px;
      }
      .user-title {
        color: #f60;
        font-weight: 600;
      }
    }
  }

  .side-choice {
    background-color: #2a3746;
    // margin-bottom: 20px;
    color: #fff;
  }

  height: 100%;
}
</style>
