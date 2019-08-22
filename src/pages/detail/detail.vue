<template>
  <div class="detailContainer">
    <img class="detail_header" :src="detailObj.detail_img" alt />
    <div class="avatar_date">
      <img class="detail_img" src="/static/images/icon/chat.png" alt />
      <span>新华社</span>
      <span>发布于</span>
      <span>2019</span>
    </div>
    <p class="company">侍子贤简介</p>
    <div class="collection_share_container">
      <div class="collection_share">
        <img class="share_img" src="/static/images/icon/collection-anti.png" alt />
        <img class="share_img" src="/static/images/icon/share-anti.png" alt />
      </div>
      <div class="line"></div>
    </div>
    <Button open-type="share">转发此文章</Button>
    <p class="content">一个非常牛笔的人</p>
  </div>
</template>

<script>
import {mapState} from "vuex"
export default {
    data(){
        return{
            detailObj:{}
        }
    },
    beforeMount(){
        this.index=this.$mp.query.index;
    },
    mounted(){
        // console.log(this)
        this.detailObj=this.listTmp[this.index]
    },
    computed:{
        ...mapState(['listTmp'])
    }
};
</script>

<style>
.detailContainer {
  display: flex;
  flex-direction: column;
}

.detail_header {
  width: 100%;
  height: 460rpx;
}
.avatar_date {
  padding: 10rpx;
}
.detail_img {
  width: 64rpx;
  height: 64rpx;
  vertical-align: middle;
}

.avatar_date span {
  font-weight: 28rpx;
  margin-left: 6rpx;
}

.company {
  font-size: 32rpx;
  font-weight: bold;
  padding: 10rpx;
}

.collection_share_container {
  position: relative;
}

.collection_share {
  float: right;
  margin-right: 30rpx;
}

.share_img {
  width: 90rpx;
  height: 90rpx;
  margin-right: 20rpx;
}

.collection_share_container .line {
  position: absolute;
  top: 45rpx;
  left: 5%;
  width: 90%;
  height: 1rpx;
  background: #ccc;
  z-index: -1;
}

.content {
  font-size: 32rpx;
  text-indent: 32rpx;
  letter-spacing: 3rpx;
  line-height: 50rpx;
}
</style>