<template>
	<view>
		<view class="nav">
			<view style="width: 40upx;height: 40upx;" @click="back">
				<image src="../../static/u164.png"></image>
			</view>
			<text>订单详情</text>
			<text style="color: white;">返</text>
		</view>
		<image src="../../static/u1312.png" style="width: 100%;height: 5upx;vertical-align: text-top;display: block;"></image>
		<view style="padding: 30upx 45upx;box-sizing: border-box;background-color: white;vertical-align: text-top;">
			<view style="display: flex;align-items: center;justify-content: space-between;font-size: 30upx;">
				<view style="display: flex;align-items: center;">
					<text style="margin-right: 10upx;">于小飞</text>
					<view style="width: 60upx;height: 30upx;line-height: 30upx;font-size: 20upx;text-align: center;background-color: #40CCCB;color: white;border-radius: 5upx;">默认</view>
				</view>
				<text>13578951230</text>
			</view>
			<view style="margin-top: 40upx;font-size: 22upx;color: #a2a2a2;">北京朝阳区三环</view>
		</view>
		<view class="pay">
			<view style="padding: 30upx 45upx;box-sizing: border-box;border-bottom: 1upx solid #F7F7F7;background-color: white;display: flex;justify-content: space-between;">
				<text style="color: black;">订单商品</text>
				<text style="color: #40CCCB;">等待卖家发货</text>
			</view>
			<view class="pay-list" v-for="(item,index) in 2" :key="index">
				<image src="../../static/u25.png"></image>
				<view style="display: flex;flex-direction: column;">
					<text style="margin-bottom: 30upx;font-size: 24upx;">简约软包布艺靠背床</text>
					<text>款式：原木色</text>
					<text style="margin: 15upx 0;">规格：160cm长*190cm宽*79cm高</text>
					<view style="display: flex;align-items: center;justify-content: space-between;">
						<text style="margin-right: 40upx;">价格：￥1690.80 x 1</text>
						<view style="width: 160upx;height: 64upx;line-height: 64upx;text-align: center;color: #b3b3b3;border-radius: 10upx;border: 1upx solid #F7F7F7;font-weight: normal;">退款</view>
					</view>
				</view>
			</view>
			<view class="total">
				<text>共计2件商品</text>
				<text>小计<text style="color: #40CCCB;margin-left: 20upx;">￥2680.00</text></text>
			</view>
		</view>
		<view style="background-color: white;margin-top: 20upx;font-size: 24upx;">
			<view style="display: flex;justify-content: space-between;padding: 30upx 45upx;box-sizing: border-box;border-bottom: 1upx solid #F7F7F7;">
				<text>运费</text>
				<text style="color: #959595;">￥0.00</text>
			</view>
			<view style="display: flex;justify-content: space-between;padding: 30upx 45upx;box-sizing: border-box;border-bottom: 1upx solid #F7F7F7;">
				<text>实付款</text>
				<text style="font-weight: bold;">￥3210.00</text>
			</view>
		</view>
		<view style="background-color: white;margin-top: 20upx;font-size: 24upx;">
			<view style="display: flex;padding: 30upx 45upx;box-sizing: border-box;border-bottom: 1upx solid #F7F7F7;">
				<text>买家备注</text>
			</view>
			<view style="display: flex;padding: 30upx 45upx;box-sizing: border-box;border-bottom: 1upx solid #F7F7F7;">
				<text>订单编号</text>
				<text style="color: #959595;margin-left: 40upx;font-weight: bold;">B632652323526</text>
				<text style="color: #40CCCB;margin-left: 20upx;">复制</text>
			</view>
			<view style="display: flex;padding: 30upx 45upx;box-sizing: border-box;border-bottom: 1upx solid #F7F7F7;">
				<text>创建时间</text>
				<text style="color: #959595;margin-left: 40upx;font-weight: bold;">2021-02-02 18:20:45</text>
			</view>
			<view style="display: flex;padding: 30upx 45upx;box-sizing: border-box;border-bottom: 1upx solid #F7F7F7;">
				<text>交易号</text>
				<text style="color: #959595;margin-left: 40upx;font-weight: bold;">45245415466859</text>
			</view>
			<view style="display: flex;padding: 30upx 45upx;box-sizing: border-box;border-bottom: 1upx solid #F7F7F7;">
				<text>付款时间</text>
				<text style="color: #959595;margin-left: 40upx;font-weight: bold;">2021-02-02 18:20:45</text>
			</view>
		</view>
		<view style="position: fixed;bottom: 0;left: 0;background-color: white;width: 100%;height: 90upx;display: flex;align-items: center;justify-content: space-between;padding: 0 30upx;box-sizing: border-box;">
			<view style="display: flex;align-items: center;">
				<image src="../../static/u9712.png" style="width: 30upx;height: 30upx;padding: 10upx 30upx;border: 1upx solid #F7F7F7;"></image>
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
			back(){
				uni.navigateTo({
				    url: '../myorder/myorder'
				});
			}
		}
	}
</script>

<style>
page{
	background-color: #F2F2F2;
	padding-top: 130upx;
	padding-bottom: 130upx;
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
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1000;
	background-color: white;
}
.nav image{
	width: 24upx;
	height: 38upx;
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
	background-color: white;
}
</style>
