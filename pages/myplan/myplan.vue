<template>
	<view>
		<view class="aline"></view>
		<view class="nav">
			<view style="width: 40upx;height: 40upx;" @click="back">
				<image src="../../static/u164.png"></image>
			</view>
			<text>我的方案</text>
			<text style="color: white;">返</text>
		</view>
		<view style="height: 230upx;"></view>
		<view  class="disable" v-if="isdisable==1">
			<image src="../../static/u284.png"></image>
			<text style="text-align: center;width: 100%;display: block;">您还没有方案哦！</text>
		</view>
		<view class="list" v-if="isdisable==2" v-for="(item,index) in 5" :key="index">
			<view style="position: relative;height: 470upx;">
				<image src="../../static/u291.jpg" style="width: 100%;height: 100%;border-radius: 20upx 20upx 0 0;"></image>
				<text style="display: block;width: 100%;background-color: rgba(0,0,0,0.2);color: white;text-align: center;position: absolute;bottom: 0;left: 0;font-size: 24upx;height: 60upx;line-height: 60upx;">万科翡翠云台|179.00m²|A179方户型</text>
			</view>
			<view style="padding: 24upx;box-sizing: border-box;display: flex;flex-direction: column;">
				<text style="font-size: 28upx;">美景天城</text>
				<text style="font-size: 20upx;color: #aeaeae;margin: 40upx 0;">修改时间：2019-05-02</text>
				<view style="align-self: flex-end;width: 175upx;height: 50upx;line-height: 50upx;text-align: center;font-size: 24upx;font-weight: bold;border: 3upx solid #8b8b8b;border-radius: 10upx;">编辑</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isdisable:2
			}
		},
		methods: {
			back(){
				uni.switchTab({
				    url: '/pages/my/my'
				});
			},
		}
	}
</script>

<style>
.aline{
	 height: var(--status-bar-height);
	  width: 100%;
	  z-index: 100;
	  background-color: white;
	  position: fixed;
	  top: 0;
	  left: 0;
}
page{
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
	top: var(--status-bar-height);
	left: 0;
	z-index: 1000;
	border-bottom: 1upx solid #F7F7F7;
}
.nav image{
	width: 24upx;
	height: 38upx;
}
.disable{
	width: 320upx;
	height: 320upx;
	position: absolute;
	top: 30%;
	left: 50%;
	transform: translateX(-50%);
	font-size: 26upx;
}
.disable image{
	width: 320upx;
	height: 230upx;
	margin-bottom: 40upx;
}
.list{
	width: 90%;
	box-shadow: 0 0 10upx 5upx rgba(0,0,0,0.05);
	border-radius: 30upx;
	margin: auto;
	margin-bottom: 40upx;
}
</style>
