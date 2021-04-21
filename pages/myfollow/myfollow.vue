<template>
	<view>
		<view class="aline"></view>
		<view class="nav">
			<view style="width: 40upx;height: 40upx;" @click="back">
				<image src="../../static/u164.png"></image>
			</view>
			<text>关注</text>
			<text></text>
		</view>
		<view class="list">
			<view class="cont" v-for="(item,index) in 20" :key="index">
				<view style="align-items: center;display: flex;">
					<image src="../../static/u227.png"></image>
					<text>好像是个设计师</text>
				</view>
				<view class="follow">已关注</view>
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
	  position: fixed;
	  top: 0;
	  left: 0;
	  z-index: 100;
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
.list{
	padding-top: 160upx;
	box-sizing: border-box;
	font-size: 26upx;
	font-weight: bold;
}
.list image{
	width: 106upx;
	height: 106upx;
	border-radius: 50%;
	margin-right: 20upx;
}
.cont{
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 25upx 30upx;
	box-sizing: border-box;
	border-bottom: 1upx solid #F7F7F7;
}
.follow{
	width: 116upx;
	height: 56upx;
	line-height: 56upx;
	text-align: center;
	background-color: #eff2f4;
	color: #a4a7ac;
}
</style>
