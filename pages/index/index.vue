<template>
	<view class="main">
    <u-loading-page :loading="true" loadingText="正在加载"></u-loading-page>
	</view>

</template>

<script>
	export default {

		data() {
			return {
			}
		},
		onLoad() {
      // 获取access_token
      const accessToken = uni.getStorageSync("Access-Token");
      if(accessToken){
        uni.$u.route('/pages/message/message');
      }else{
        uni.$u.route('/pages/login/login');
      }
		},
		onShow() {
		},

		methods: {
		}

	}
</script>

<style>

</style>

