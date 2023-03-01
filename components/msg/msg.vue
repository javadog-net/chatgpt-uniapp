<template>
  <view>
    <view class="msg" :class="position">
      <u-avatar :src="avatar" size="40" @click="friendInfo"></u-avatar>
      <view class="content text">
        <view class="u-content">
          <u-parse :content="content" :selectable="true"></u-parse>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  props: {
    // 位置 left/right
    position: {
      type: String,
      required: true,
      default: "right"
    },
    // 内容
    content: {
      type: String,
      required: true,
      default: ''
    },
    // 消息Id
    msgId: {
      type: String,
      default: ''
    },
    // 头像
    avatar: {
      type: String,
      default: '/static/img/javadog.png'
    },
  },
  computed: {},
  mounted() {
  },
  methods: {}
}
</script>

<style lang="scss" scoped>

.msg {
  margin-top: 10px;
  background: #F5F5F5;
  padding: 0 10px 0;
  display: flex;

  .content {
    padding: 8px;
    max-width: 70%;
    min-height: 21px;
    border-radius: 5px;
    padding: 7px 10px;
    display: flex;
    align-items: center;
    font-size: 16px;
    word-break: break-word;
  }
}

.left {
  .content {
    margin-left: 6px;
    background: #FFFFFF;
  }
}

.right {
  flex-direction: row-reverse;

  .content {
    margin-right: 6px;
    background: #95EC69;
  }
}

.u-content {
  font-size: 12px;
  color: $u-content-color;
  line-height: 1.6;
}
</style>
