<template>
	<view>
		<view class="nav">
			<view style="width: 40upx;height: 40upx;" @click="back">
				<image src="../../static/u164.png"></image>
			</view>
			<text>评价成功</text>
			<text style="color: white;">返</text>
		</view>
		<view class="cont">
			<image src="../../static/u1260.png"></image>
			<text style="font-size: 28upx;margin: 20upx 0;">评价成功，感谢您！</text>
			<text style="color: #a9a9a9;">审核通过后将对所有人可见</text>
			<view style="display: flex;justify-content: center;margin-top: 40upx;">
				<view style="width: 200upx;height: 80upx;line-height: 80upx;text-align: center;font-size: 24upx;border: 1upx solid #40CCCB;color: #40CCCB;">随便逛逛</view>
				<view style="width: 200upx;height: 80upx;line-height: 80upx;text-align: center;font-size: 24upx;background-color: #40CCCB;color: white;margin-left: 20upx;">查看评价</view>
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
		methods: {
			
		}
	}
</script>

<style>
page{
	background-color: #F2F2F2;
	padding-top: 130upx;
	box-sizing: border-box;
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
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	border-bottom: 1upx solid #F7F7F7;
	z-index: 1000;
}
.nav image{
	width: 24upx;
	height: 38upx;
}
.cont{
	width: 100%;
	padding: 30upx 0;
	box-sizing: border-box;
	background-color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	font-size: 20upx;
}
.cont image{
	width: 60upx;
	height: 60upx;
}
.check{
	margin: 20upx 0;
	width: 210upx;
	height: 50upx;
	line-height: 50upx;
	text-align: center;
	color: #40CCCB;
	border: 1upx solid #40CCCB;
	border-radius: 20upx;
	display: block;
}
.pay{
	font-size: 24upx;
	color: #a8a8a8;
	margin-top: 20upx;
}
.pay-list{
	padding: 35upx 45upx;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	font-weight: bold;
	border-bottom: 1upx solid #F7F7F7;
	font-size: 20upx;
	background-color: white;
}
.pay-list image{
	width: 190upx;
	height: 190upx;
	margin-right: 40upx;
}
.total{
	padding: 30upx 45upx;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-weight: bold;
	border-bottom: 1upx solid #F7F7F7;	
	background-color: white;}
.sure{
	padding: 15upx 45upx;
	box-sizing: border-box;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	background-color: white;
}
.sure view{
	width: 160upx;
	height: 64upx;
	line-height: 64upx;
	text-align: center;
	color: #b3b3b3;
	border-radius: 10upx;
	border: 1upx solid #F7F7F7;
}
.again{
	background-color: #40CCCB;
	border: none;
	color: white !important;
}
</style>
