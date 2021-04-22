<template>
	<view>
		<view class="aline"></view>
		<view class="nav">
			<view style="width: 40upx;height: 40upx;" @click="back">
				<image src="../../static/u164.png"></image>
			</view>
			<text :class="{'a':isactive==2}">我的消息</text>
			<text style="color: white;" v-if="isactive==1">返</text>
			<text v-if="isactive==2" style="font-size: 20upx;">全部已读</text>
		</view>
		<view style="height: 130upx;"></view>
		<view style="display: flex;justify-content: center;font-size: 23upx;padding: 20upx 0;box-sizing: border-box;border-bottom: 1upx solid #F7F7F7;background-color: white;color: #c2c2c2;">
			<view :class="{'active':isactive==1}" @click="nav(1)">聊天</view>
			<view :class="{'active':isactive==2}" style="margin-left: 40upx;" @click="nav(2)">通知</view>
		</view>
		<!-- 聊天 -->
		<view v-if="isactive==1" style="background-color: white;font-size: 23upx;">
			<view style="padding: 24upx 45upx;box-sizing: border-box;display: flex;justify-content: space-between;border-bottom: 1upx solid #F7F7F7;" v-for="(index,item) in 5" :key="index">
				<view style="display: flex;">
					<image src="../../static/u280.png" style="width: 85upx;height: 85upx;border-radius: 50%;margin-right: 20upx;"></image>
					<view>
						<view>孟艳</view>
						<view style="margin-top: 15upx;color: #8c8d8d;">你好</view>
					</view>
				</view>
				<text style="color: #8c8d8d;">两周前</text>
			</view>
		</view>
		<!-- 通知 -->
		<view v-if="isactive==2" style="background-color: white;">
			<view style="padding: 20upx 45upx;box-sizing: border-box;display: flex;align-items: center;justify-content: space-between;" v-for="(index,item) in 5" :key="index" >
				<view style="font-size: 28upx;color: #878888;">
					<view>恭喜升级到Z1恭喜升级到恭喜升级到恭喜升级到恭喜升级到恭喜升级到恭喜升级到恭喜升级到</view>
					<view style="margin-top: 20upx;">2018年10月11日星期日</view>
				</view>
				<image src="../../static/u338.png" style="width: 40upx;height: 25upx;"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isactive:1
			}
		},
		methods: {
			nav(index){
				this.isactive = index
			},
			back(){
				uni.switchTab({
				    url: '/pages/my/my'
				});
			}
		}
	}
</script>

<style>
.aline{
	 height: var(--status-bar-height);
	  width: 100%;
	  background-color: white;
	  z-index: 100;
	  position: fixed;
	  top: 0;
	  left: 0;
}
page{
	background-color: #F2F2F2;
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
	top: var(--status-bar-height);
	left: 0;
	z-index: 1000;
	background-color: white;
}
.nav image{
	width: 24upx;
	height: 38upx;
}
.active{
	position: relative;
	color: #000000;
}
.active::before{
	content: '';
	width: 100%;
	height: 5upx;
	background-color: #40CCCB;
	position: absolute;
	bottom: -20upx;
	left: 0;
}
.a{
	margin-left: 60upx;
}
</style>
