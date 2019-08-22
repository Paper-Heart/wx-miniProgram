<template>
  <div class="indexContainer">
    <img v-if="isShow" :src="userInfo.avatarUrl" alt class="indexImage" />
    <Button v-else open-type="getUserInfo" @getuserinfo="getUserInfo" class="btn">点击获取用户信息</Button>
    <p class="userName">Hello {{userInfo.nickName}}</p>
    <div class="goMp" @tap="toDetail">
      <p>开启小程序之旅</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {},
      // 用户刚进页面未授权
      isShow:false
    };
  },
  beforeMount() {
    //获取用户登陆信息
    this.handleGetUserInfo();
  },
  methods: {
    handleGetUserInfo() {
      wx.getUserInfo({
        success: data => {
          console.log(data);
          this.userInfo=data.userInfo;
          this.isShow=true;
        },
        fail: () => {
          console.log("获取失败");
        }
      });
    },
    getUserInfo(data) {
      if (data.mp.detail.rawData) {
        //判断是否授权
        this.handleGetUserInfo();
      }
    },
    toDetail(){
      wx.navigateTo({
        url:"/pages/list/main"
      })
    }
  }
};
</script>

<style>
page {
  background-color: skyblue;
}
.indexContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.indexContainer .indexImage {
  width: 200rpx;
  height: 200rpx;
  border-radius: 100rpx;
  margin: 100rpx 0;
}
.indexContainer .userName {
  font-size: 45rpx;
  font-weight: bold;
  margin: 70rpx 0;
}
.indexContainer .goMp {
  width: 220rpx;
  height: 80rpx;
  border: 1rpx solid #eee;
  font-size: 24rpx;
  line-height: 80rpx;
  text-align: center;
  border-radius: 12rpx;
  color: white;
}
.indexContainer .btn{
  width: 250rpx;
  height: 250rpx;
  border-radius: 150rpx;
  margin: 70rpx 0;
  line-height: 250rpx;
  text-align: center;
  font-size: 25rpx;
  font-weight: bold;
  color: white;
  background-color: steelblue;
}
</style>
