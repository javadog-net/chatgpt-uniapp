<template>
  <view>
    <!-- 底部输入栏 -->
    <view class="input-box cu-bar tabbar" :class="popupLayerClass">
      <view class="textbox">
        <!--文字模式-->
        <view class="text-mode">
          <view class="box">
            <textarea auto-height="true" v-model="textMsg"/>
          </view>
          <view class="em">
            <view style="font-size: 30px" class="iconfont icon-chat-smile"></view>
          </view>
        </view>
      </view>
      <view class="send" @tap="sendText">
        <view class="btn">发送</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      // 文字消息
      textMsg: '',
      // 滚动动画
      scrollAnimation: false,
      // 滚动距离
      scrollTop: 0,
      // 初始状态
      initPoint: {
        identifier: 0,
        Y: 0
      },
      // 抽屉参数
      popupLayerClass: '',
      // more参数
      hideMore: true,
    }
  },
  props: {},
  mounted(){
    // 调用初始化
    this.init()
  },
  methods: {
    // 总初始化方法
    init(){
    },
    // 发送文字消息
    sendText() {
      if (!this.textMsg) {
        return
      }
      let msg = {
        msgContent: this.textMsg,
        msgType:1,
        position: 'right'
      }
      //清空输入框
      this.textMsg = ''
      this.$emit("sendMsg",msg)
    },
  }
}
</script>

<style lang="scss">
.input-box{
  width: 100%;
  min-height: 50px;
  background-color: #f2f2f2;
  display: flex;
  position: fixed;
  z-index: 20;
  bottom:-2upx;
  transition: all .15s linear;
  border-bottom: solid 1px #ddd;

  .send{
    flex-shrink: 0;
    width: 15%;
    height: 100upx;
    display: flex;
    align-items: center;
    .btn{
      margin: 0 auto;
      width: 90%;
      height: 56upx;
      display: flex;
      justify-content: center;
      align-items: center;
      background:linear-gradient(to right,#5ac725,#53c21d);
      color: #fff;
      border-radius: 6upx;
      font-size: 24upx;
    }
  }
  .textbox{
    min-height: 35px;
    flex-shrink: 0;
    width: 83%;
    padding: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    .text-mode{
      width: 100%;
      min-height: 70upx;
      display: flex;
      background-color: #fff;
      border-radius: 40upx;
      .box{
        width: 100%;
        padding-left: 30upx;
        min-height: 70upx;
        display: flex;
        align-items: center;
        textarea{
          width: 100%;
        }
      }
      .em{
        flex-shrink: 0;
        width: 80upx;
        padding-left: 10upx;
        height: 70upx;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
.content{
  width: 100%;
  .msg-list{
    width: 100%;
    padding: 0 2%;
    position: absolute;
    top: 0;
    bottom: 100upx;
    padding-bottom: calc(env(safe-area-inset-bottom) / 2);
    .loading{
      //loading动画
      display: flex;
      justify-content: center;
      @keyframes stretchdelay {
        0%, 40%, 100% {
          transform: scaleY(0.6);
        }
        20% {
          transform: scaleY(1.0);
        }
      }
      .spinner {
        margin: 20upx 0;
        width: 60upx;
        height: 100upx;
        display: flex;
        align-items: center;
        justify-content: space-between;
        view {
          background-color: #f06c7a;
          height: 50upx;
          width: 6upx;
          border-radius: 6upx;
          animation: stretchdelay 1.2s infinite ease-in-out;
        }
        .rect2 {
          animation-delay: -1.1s;
        }
        .rect3 {
          animation-delay: -1.0s;
        }
        .rect4 {
          animation-delay: -0.9s;
        }
        .rect5 {
          animation-delay: -0.8s;
        }
      }
    }
  }
}
</style>
