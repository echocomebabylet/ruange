<template>
	<view>
		<view class="aline"></view>
		<view class="nav">
			<view style="width: 40upx;height: 40upx;" @click="back">
				<image src="../../static/u164.png"></image>
			</view>
			<text>浏览历史</text>
			<text style="color: white;">返</text>
		</view>
		<view style="height: 150upx;"></view>
		<view class="list">
			<view style="width: 49%;margin-bottom: 40upx;" v-for="(item,index) in 10" :key="index">
				<image src="../../static/u3122.png" style="width: 330upx;height: 330upx;"></image>
				<view style="display: flex;align-items: center;justify-content: space-between;">
					<view style="display: flex;flex-direction: column;margin-top: 10upx;">
						<text>YEAK 怡刻</text>
						<text>实木气撑储物床</text>
						<text style="font-size: 30upx;font-weight: bold;color: #40CCCB;margin-top: 10upx;">￥2560.00</text>
					</view>
					<image src="../../static/u198.png" style="width: 36upx;height: 36upx;" v-if="isactive==true" @click="collect"></image>
					<image src="../../static/u208.png" style="width: 36upx;height: 36upx;" v-if="isactive==false" @click="collect"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isactive:true
			}
		},
		methods: {
			back(){
				uni.switchTab({
				    url: '/pages/my/my'
				});
			},
			collect(){
				this.isactive = !this.isactive
			}
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
	padding: 0 35upx;
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
}
.nav image{
	width: 24upx;
	height: 38upx;
}
.list{
	padding: 0 35upx;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	font-size: 22upx;
}
</style>
