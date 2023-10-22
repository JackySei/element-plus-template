<template>
  <div class="no-right">
    <el-container>
      <el-container>
        <el-aside style="width: 204px; overflow-x: hidden">
          <div class="side-title">
            <img src="@/assets/image/favicon.png" alt="" />
            项目名称
          </div>
        </el-aside>
        <el-container>
          <div class="no-role">暂无权限，请联系管理员</div>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script setup></script>

<style lang="scss" scoped>
.no-right {
  // background: url("../assets/image/123.png") no-repeat;
  .el-breadcrumb__item {
    font-size: 14px;
  }
  .no-role {
    padding: 20px;
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
    font-size: 20px;
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
