<template>
	<view>
		<view class="nav">
			<text></text>
			<text>订单提交成功</text>
			<text style="font-size: 24upx;">完成</text>
		</view>
		<view class="info">
			<image src="../../static/u11891.png"></image>
			<view>
				<text style="margin-bottom: 10upx;">支付方式：<text style="color: #ff6c6b;">货到付款</text></text>
				<text>订单金额<text style="color: #ff6c6b;">￥21.90</text></text>
			</view>
		</view>
		<view class="check">
			<view style="color: #4b4b4b;border: 1upx solid #4b4b4b;">查看订单</view>
			<view style="background-color: #f53739;color: white;">软阁大礼，免费领取</view>
		</view>
		<view class="lucy">刮我中大奖</view>
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
}
.nav{
	padding: 40upx;
	background-color: white;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 30upx;
}
.info{
	padding: 30upx 110upx;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	background-color: white;
}
.info image{
	width: 180upx;
	height: 130upx;
	margin: 0 20upx;
}
.info view{
	display: flex;
	flex-direction: column;
	font-size: 20upx;
}
.check{
	padding: 40upx 110upx;
	box-sizing: border-box;
	background-color: white;
}
.check view{
	width: 100%;
	height: 60upx;
	line-height: 60upx;
	text-align: center;
	font-size: 28upx;
	border-radius: 5upx;
	margin-top: 20upx;
}
.lucy{
	width: 100%;
	height: 320upx;
	background-image: url(/static/u11194.png);
	background-size: 100% 100%;
	text-align: center;
	line-height: 380upx;
	font-size: 40upx;
	font-weight: bold;
	color: #f53739;
}
</style>
