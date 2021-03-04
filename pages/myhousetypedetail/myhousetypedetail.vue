<template>
	<view>
		<view class="nav">
			<view style="width: 40upx;height: 40upx;" @click="back">
				<image src="../../static/u164.png"></image>
			</view>
			<text style="font-weight: bold;">恒大家园</text>
			<text style="font-size: 24upx;">重设户型</text>
		</view>
		<view style="height: 600upx;background-color: white;position: relative;">
			<image src="../../static/u3361.png" style="width: 500upx;height: 370upx;position: absolute;top: 50%;left: 50%;transform: translateX(-50%) translateY(-50%);"></image>
		</view>
		<view class="info">
			<view style="font-size: 32upx;font-weight: bold;">
				<text>恒大嘉园</text>
				<text style="margin-left: 40upx;">128方</text>
			</view>
			<view style="display: flex;align-items: center;font-size: 24upx;margin: 20upx 0;">
				<image src="../../static/u446.png" style="width: 24upx;height: 30upx;"></image>
				<text style="color: #b8b8b8;margin-left: 10upx;">吉林省长春市宽城区美景天城</text>
			</view>
			<view style="font-size: 28upx;color: #aaaaaa;display: flex;align-items: center;">
				<text>户型体验家：<text style="color: #40CCCB;">1</text></text>
				<view style="width: 5upx;height: 30upx;background-color: #aaaaaa;margin: 0 50upx;"></view>
				<text>相似体验家：<text style="color: #40CCCB;">1</text></text>
			</view>
		</view>
		<view style="padding: 20upx;width: 100%;background-color: white;margin-top: 20upx;font-size: 22upx;font-weight: bold;">面积：128m²</view>
		<view style="padding: 20upx;width: 100%;background-color: white;margin-top: 20upx;font-size: 22upx;font-weight: bold;">格局：两室两厅</view>
		<view style="padding: 20upx;width: 100%;background-color: white;margin-top: 20upx;font-size: 22upx;font-weight: bold;">地址：吉林省长春市宽城区长白路128号</view>
		<text style="font-size: 26upx;margin: 50upx 0 30upx 20upx;display: block;font-weight: bold;">相关体验家</text>
		<view class="guess" v-for="(item,index) in 5" :key="index">
			<image src="../../static/u4602.png"></image>
			<view>
				<text>恒大嘉园128方</text>
				<text style="font-size: 24upx;margin: 30upx 0 50upx;color: #aeaeae;">恒大嘉园|128方|128方户型</text>
				<text style="font-weight: bold;color: #40CCCB;">￥685000</text>
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
				    url: '../myhousetyperesult/myhousetyperesult'
				});
			}
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
	font-size: 32upx;
	height: 130upx;
	background-color: white;
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1000;
	border-bottom: 1upx solid #F7F7F7;
}
.nav image{
	width: 24upx;
	height: 38upx;
}
.info{
	background-color: white;
	margin-top: 20upx;
	padding: 20upx 20upx 80upx;
	box-sizing: border-box;
}
.guess{
	display: flex;
	width: 100%;
	align-items: center;
	height: 240upx;
	margin-bottom: 20upx;
	font-size: 30upx;
}
.guess image{
	width: 50%;
	height: 100%;
}
.guess view{
	width: 50%;
	padding: 30upx;
	box-sizing: border-box;
	height: 100%;
	background-color: white;
	display: flex;
	flex-direction: column;
}
</style>
