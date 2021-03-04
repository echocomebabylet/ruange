<template>
	<view>
		<view class="nav">
			<view style="width: 50upx;height: 40upx;" @click="back">
				<image src="../../static/u18.png"></image>
			</view>
			<text>预约成功</text>
			<text style="color: white;">返</text>
		</view>
		<view class="cont">
			<view style="width: 100%;height: 24upx;background-color: #40CCCB;"></view>
			<view style="padding: 80upx 60upx;box-sizing: border-box;">
				<view style="display: flex;justify-content: space-between;align-items: center;">
					<view style="display: flex;flex-direction: column;">
						<text style="font-size: 35upx;font-weight: bold;margin-bottom: 10upx;">预约申请成功</text>
						<text style="font-size: 30upx;">请等待体验家确认申请</text>
					</view>
					<image src="../../static/u32.png" style="width: 70upx;height: 70upx;"></image>
				</view>
				<view style="font-size: 30upx;color: #9a9a9a;margin-top: 50upx;">
					<view style="display: flex;align-items: center;margin-bottom: 10upx;">
						<image src="../../static/u1743.png" style="width: 34upx;height: 30upx;"></image>
						<text style="margin-left: 30upx;">Nori的体验家</text>
					</view>
					<view style="display: flex;align-items: center;margin-bottom: 10upx;">
						<image src="../../static/u1744.png" style="width: 34upx;height: 30upx;"></image>
						<text style="margin-left: 30upx;">北京·元嘉国际</text>
					</view>
					<view style="display: flex;align-items: center;margin-bottom: 10upx;">
						<image src="../../static/u1745.png" style="width: 30upx;height: 30upx;"></image>
						<text style="margin-left: 30upx;">2019年25月14日10:00</text>
					</view>
					<view style="display: flex;align-items: center;margin-bottom: 10upx;">
						<image src="../../static/u1746.png" style="width: 30upx;height: 30upx;"></image>
						<text style="margin-left: 30upx;">4人</text>
					</view>
				</view>
			</view>
			<view class="order">
				<view style="border: 1upx solid #40CCCB;color: #40CCCB;">查看预约</view>
				<view style="background-color: #40CCCB;color: white;">回首页</view>
			</view>
		</view>
		<view style="display: flex;align-items: center;justify-content: center;margin-top: 40upx;">
			<image src="../../static/u1753.png" style="width: 34upx;height: 34upx;"></image>
			<text style="font-size: 26upx;color: #bcbcbc;margin-left: 20upx;">软阁客服将会与您致电确认预约信息</text>
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
	background-color: #f2f2f2;
}
.nav{
	padding: 0 45upx;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 32upx;
	font-weight: bold;
	height: 130upx;
	background-color: white; 
}
.nav image{
	width: 50upx;
	height: 40upx;
}
.cont{
	width: 92%;
	margin: auto;
	margin-top: 20upx;
	background-color: white;
	padding-bottom: 20upx;
}
.order{
	padding: 0 15upx;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	margin-top: 50upx;
	justify-content: space-between;
}
.order view{
	width: 48%;
	height: 100upx;
	line-height: 100upx;
	font-size: 30upx;
	text-align: center;
	border-radius: 5upx;
}
</style>
