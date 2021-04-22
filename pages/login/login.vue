<template>
	<view>
		<view class="aline"></view>
		<view class="login">
			<image src="../../static/u11.png"></image>
			<text @click="login">手机号登录/注册</text>
		</view>
		<view class="way">
			<image src="../../static/u5.png"></image>
			<image src="../../static/u6.png"></image>
			<image src="../../static/u7.png"></image>
		</view>
		<text class="cont">登录即代表同意软阁<text>使用协议</text>和<text>隐私条款</text></text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			login(){
				uni.navigateTo({
				    url: '../tellogin/tellogin'
				});
			}
		}
	}
</script>

<style>.aline{
	 height: var(--status-bar-height);
	  width: 100%;
	  background-color: white;
}
page{
	background-image: url(../../static/u3.png);
	background-size: 100% 100%;
}
.login{
	width: 90%;
	height: 110upx;
	background-color: #40cccb;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 28upx;
	color: white;
	border-radius: 15upx;
	position: absolute;
	top: 65%;
	left: 50%;
	transform: translateX(-50%);
}
.login image{
	width: 40upx;
	height: 46upx;
	margin-right: 20upx;
}
.way{
	width: 100%;
	display: flex;
	justify-content: space-around;
	padding: 0 100upx;
	box-sizing: border-box;
	position: absolute;
	top: 77%;
	left: 0;
}
.way image{
	width: 85upx;
	height: 85upx;
}
.cont{
	position: absolute;
	top: 85%;
	left: 50%;
	transform: translateX(-50%);
	white-space: nowrap;
	font-size: 20upx;
	color: #9e9e9e;
}
.cont text{
	color: #40cccc;
	margin: 0 5upx;
}
</style>
