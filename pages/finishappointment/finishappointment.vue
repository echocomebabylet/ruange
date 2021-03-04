<template>
	<view>
		<view class="nav">
			<view style="width: 40upx;height: 40upx;" @click="back">
				<image src="../../static/u164.png"></image>
			</view>
			<text>已结束的预约</text>
			<text style="color: white;">返回</text>
		</view>
		<view class="list" v-for="(item,index) in 5" :key="index" @click="appointmentdetail">
			<view style="display: flex;justify-content: space-between;padding: 35upx 10upx;box-sizing: border-box;border-bottom: 1upx solid #F7F7F7;">
				<view style="display: flex;align-items: center;">
					<image src="../../static/u1160.png" style="width: 85upx;height: 85upx;border-radius: 50%;"></image>
					<view style="display: flex;flex-direction: column;margin-left: 20upx;">
						<text style="font-weight: bold;">可乐妈</text>
						<text style="margin-top: 10upx;">在：杭州·杨柳郡</text>
					</view>
				</view>
				<text>用户取消</text>
			</view>
			<view style="padding: 35upx 10upx;box-sizing: border-box;">
				<view style="margin-bottom: 20upx;display: flex;align-items: center;">
					<image src="../../static/u711.png" style="width: 20upx;height: 20upx;margin-right: 20upx;"></image>
					<text>09月11日 18:00~20:00</text>
				</view>
				<view style="display: flex;align-items: center;">
					<image src="../../static/u7132.png" style="width: 20upx;height: 20upx;margin-right: 20upx;" ></image>
					<text>1人</text>
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
		methods: {
			appointmentdetail(){
				uni.navigateTo({
				    url: '../appointmentdetail/appointmentdetail'
				});
			},
			back(){
				uni.navigateTo({
				    url: '../myappointment/myappointment'
				});
			}
			
		}
	}
</script>

<style>
page{
	background-color: #f2f2f2;
	padding-top: 130upx;
	box-sizing: border-box;
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
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1000;
}
.nav image{
	width: 24upx;
	height: 38upx;
}
.list{
	margin-top: 20upx;
	padding: 0 20upx;
	box-sizing: border-box;
	background-color: white;
	font-size: 24upx;
}
</style>
