<template>
	<view>
		<view class="aline"></view>
		<view class="nav">
			<view style="width: 40upx;height: 40upx;" @click="back">
				<image src="../../static/u164.png"></image>
			</view>
			<text>联系我们</text>
			<text style="color: white;">返</text>
		</view>
		<image :src="logo" style="display: block;margin: 40upx auto 20upx;width: 150upx;height: 140upx;"></image>
		<text style="font-weight: 30upx;display: block;text-align: center;margin-bottom: 40upx;">软阁{{versions}}</text>
		<view style="padding: 40upx;box-sizing: border-box;font-size: 28upx;border-bottom: 2upx solid #F7F7F7;">
			<text>联系邮箱：<text style="color: #40CCCB;">{{email}}</text></text>
		</view>
		<view style="padding: 40upx;box-sizing: border-box;font-size: 28upx;border-bottom: 2upx solid #F7F7F7;">
			<text>QQ客服：<text style="color: #40CCCB;">{{qqnum}}</text></text>
		</view>
		<view style="padding: 40upx;box-sizing: border-box;font-size: 28upx;border-bottom: 2upx solid #F7F7F7;">
			<text>微信客服：<text style="color: #40CCCB;">{{wechatnum}}</text></text>
		</view>
		<view style="padding: 40upx;box-sizing: border-box;font-size: 28upx;border-bottom: 2upx solid #F7F7F7;">
			<text>官方微博：<text style="color: #40CCCB;">{{microblog}}</text></text>
		</view>
		<view style="padding: 40upx;box-sizing: border-box;font-size: 28upx;border-bottom: 2upx solid #F7F7F7;">
			<text>微信公众号：<text style="color: #40CCCB;">{{account}}</text></text>
		</view>
		<view style="position: absolute;bottom: 10upx;left: 50%;transform: translateX(-50%);font-size: 16upx;">www.ruange.com.cn</view>
	</view>
</template>

<script>
	import helper from '../../common/common.js';  
	export default {
		data() {
			return {
				logo:'',
				versions:'',
				email:'',
				qqnum:'',
				wechatnum:'',
				microblog:'',
				account:'',
				
			}
		},
		onLoad(){
			// console.log('路径'+helper.websiteUrl)
			this.getData();
		},
		methods: {
			back(){
				uni.switchTab({
				    url: '/pages/my/my'
				});
			},
			getData(){
				// console.log('路径'+helper.websiteUrl+"base_appinfo")
				console.log('执行请求')
				uni.request({
					url:helper.websiteUrl+"base_appinfo",
					header:{"user-token":"6a109faf305513d443337ddb1ad4cb9b"},
					method:"post",
					data:{},
					success: (res) => {
						console.log(res.data);
						// 将请求到的数据存放放到data中
						this.logo = res.data.data.logo;
						this.versions = res.data.data.versions;
						this.email = res.data.data.email;
						this.qqnum = res.data.data.qqnum;
						this.wechatnum = res.data.data.wechatnum;
						this.microblog = res.data.data.microblog;
						this.account = res.data.data.account;
					}
				});
			}
		}
	}
</script>

<style>
.aline{
	 height: var(--status-bar-height);
	  width: 100%;
	  background-color: white;
}
.nav{
	padding: 0 45upx;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 30upx;
	height: 130upx;
	background-color: white;
}
.nav image{
	width: 24upx;
	height: 38upx;
}
</style>
