<template>
	<view>
		<view class="nav">
			<view style="width: 40upx;height: 40upx;" @click="back">
				<image src="../../static/u164.png"></image>
			</view>
			<text>设置</text>
			<text style="color: white;">确</text>
		</view>
		<view class="list" style="margin-top: 20upx;">
			<view>
				<image src="../../static/u9.png"></image>
				<text style="margin-left: 20upx;">个人信息</text>
			</view>
			<view>
				<text style="mar-right: 20upx;color: #959595;">完整度62%</text>
				<image src="../../static/u62.png" style="width: 30upx;height: 30upx;"></image>
			</view>
		</view>
		<view class="list" style="margin-top: 20upx;">
			<view>
				<image src="../../static/u44.png"></image>
				<text style="margin-left: 20upx;">账号绑定</text>
			</view>
			<view>
				<image src="../../static/u21.png" style="width: 60upx;height: 60upx;margin-right: 20upx;"></image>
				<image src="../../static/u22.png" style="width: 60upx;height: 60upx;margin-right: 20upx;"></image>
				<image src="../../static/u23.png" style="width: 60upx;height: 60upx;"></image>
			</view>
		</view>
		<view class="list">
			<view>
				<image src="../../static/u33.png"></image>
				<text style="margin-left: 20upx;">地区设置</text>
			</view>
			<view>
				<text style="mar-right: 20upx;color: #959595;">长春</text>
				<image src="../../static/u62.png" style="width: 30upx;height: 30upx;"></image>
			</view>
		</view>
		<view class="list">
			<view>
				<image src="../../static/u38.png"></image>
				<text style="margin-left: 20upx;">修改密码</text>
			</view>
			<view>
				<image src="../../static/u62.png" style="width: 30upx;height: 30upx;"></image>
			</view>
		</view>
		<view class="list" @click="termsofservice">
			<view>
				<image src="../../static/u1122.png"></image>
				<text style="margin-left: 20upx;">服务条款</text>
			</view>
			<view>
				<image src="../../static/u62.png" style="width: 30upx;height: 30upx;"></image>
			</view>
		</view>
		<view class="list">
			<view>
				<image src="../../static/u2522.png"></image>
				<text style="margin-left: 20upx;">资质证照</text>
			</view>
			<view>
				<image src="../../static/u62.png" style="width: 30upx;height: 30upx;"></image>
			</view>
		</view>
		<view class="list">
			<view>
				<image src="../../static/u27.png"></image>
				<text style="margin-left: 20upx;">关于我们</text>
			</view>
			<view>
				<image src="../../static/u62.png" style="width: 30upx;height: 30upx;"></image>
			</view>
		</view>
		<view class="list" style="margin-top: 20upx;">
			<view>
				<image src="../../static/u13.png"></image>
				<text style="margin-left: 20upx;">清除缓存</text>
			</view>
			<view></view>
		</view>
		<view class="list" @click="exit">
			<view>
				<image src="../../static/u15.png"></image>
				<text style="margin-left: 20upx;color: #40CCCB;">退出登录</text>
			</view>
			<view></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			termsofservice(){
				uni.navigateTo({
				    url: '../termsofservice/termsofservice'
				});
			},
			back(){
				uni.switchTab({
				    url: '/pages/my/my'
				});
			},
			exit(){
				console.log(222)
				uni.showModal({
				    title: '',
				    content: '您确定退出登录吗',
				    success: function (res) {
				        if (res.confirm) {
							uni.removeStorage({ 
								key: 'userinfo', 
								success: function (res) { 
									uni.reLaunch({
									    url: '../my/my'
									});
								} ,
							});
				        } else if (res.cancel) {
							console.log(1)
				        }
				    }
				});
			}
		}
	}
</script>

<style>
page{
	background-color: #F2F2F2;
}
.nav{
	padding: 0 30upx;
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
.list{
	padding: 26upx 35upx;
	box-sizing: border-box;
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 30upx;
	border-bottom: 1upx solid #F7F7F7;
}
.list view{
	display: flex;
	align-items: center;
}
.list image{
	width: 44upx;
	height: 44upx;
}
</style>
