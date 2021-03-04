<template>
	<view>
		<view class="nav">
			<view style="width: 40upx;height: 40upx;" @click="back">
				<image src="../../static/u164.png"></image>
			</view>
			<view style="width: 80upx;position: relative;height: 80upx;">
				<image src="../../static/u1160.png" style="width: 80upx;height: 80upx;"></image>
				<image src="../../static/u994.png" style="width: 40upx;height: 40upx;position: absolute;bottom: -8upx;right: -8upx;"></image>
			</view>
			<text style="color: white;">返</text>
		</view>
		<view style="display: flex;flex-wrap: wrap;justify-content: space-between;padding: 0 30upx;">
			<view  style="width: 330upx;margin-bottom: 20upx;" v-for="(index,item) in 10" :key="index">
				<image src="../../static/u25.png" style="width: 100%;height: 330upx;"></image>
				<view style="font-size: 20upx;color: #bebebe;margin: 10upx 0 0;">ZUOCHI 佐弛</view>
				<view style="font-size: 20upx;color: #bebebe;">现代布艺沙发</view>
				<view style="display: flex;justify-content: space-between;font-size: 20upx;margin-top: 10upx;">
					<text>￥5210.00</text>
					<view style="width: 65upx;height: 40upx;line-height: 35upx;text-align: center;border: 1upx solid #bebebe;border-radius: 10upx;">相似</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				isshow: true,
				h:''
			}
		},
		methods: {
		}
	}
</script>

<style>
page{
	padding-top: 130upx;
	box-sizing: border-box;
}
.nav{
	padding: 0 45upx;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 36upx;
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

</style>
