<template>
	<view>
		<view class="aline"></view>
		<view class="nav">
			<view style="width: 40upx;height: 40upx;" @click="back">
				<image src="../../static/u164.png"></image>
			</view>
			<text>修改密码</text>
			<text style="color: white;">确</text>
		</view>
		<input placeholder="手机号" class="tel"/>
		<view style="display: flex;justify-content: center;margin-top: 40upx;">
			<input  placeholder="验证码" class="code"/>
			<view class="send">发送</view>
		</view>
		<input placeholder="请输入6-12位数字或字母密码" class="tel" style="margin-top: 40upx;"/>
		<view class="btn">完成</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
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
	padding: 0 30upx;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 30upx;
	height: 130upx;
	background-color: white;
	border-bottom: 1upx solid #F7F7F7;
}
.nav image{
	width: 24upx;
	height: 38upx;
}
.tel{
	width: 80%;
	border-bottom: 2upx solid #40CCCB;
	font-size: 24upx;
	padding: 35upx 10upx;
	box-sizing: border-box;
	margin: auto;
	margin-top: 200upx;
}
.code{
	width: 50%;
	border-bottom: 2upx solid #40CCCB;
	font-size: 24upx;
	padding: 35upx 10upx;
	box-sizing: border-box;
}
.send{
	width: 200upx;
	height: 70upx;
	line-height: 70upx;
	text-align: center;
	background-color: #40CCCB;
	color: white;
	font-size: 24upx;
	border-radius: 5upx;
	margin-left: 20upx;
}
.btn{
	width: 80%;
	height: 90upx;
	line-height: 90upx;
	text-align: center;
	background-color: #40CCCB;
	color: white;
	font-size: 24upx;
	margin: auto;
	margin-top: 100upx;
	border-radius: 10upx;
}
</style>
