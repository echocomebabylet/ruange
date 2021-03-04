<template>
	<view>
		<view class="nav">
			<view style="width: 40upx;height: 40upx;" @click="back">
				<image src="../../static/u164.png"></image>
			</view>
			<text>来访管理</text>
			<text style="font-size: 25upx;">管理</text>
		</view>
		<view class="wait" @click="waitvisit">
			<text style="font-size: 38upx;font-weight: bold;">等待访问(4)</text>
			
		</view>
		<view class="wait" @click="waitexamine">
			<text style="font-size: 38upx;font-weight: bold;">待我审核(4)</text>
			
		</view>
		<view class="wait" @click="finishvisit">
			<text style="font-size: 38upx;font-weight: bold;">已结束(4)</text>
		
		</view>
		<view class="wait" @click="settime">
			<text style="font-size: 38upx;font-weight: bold;">设置开放时间</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				iswait:1
			}
		},
		methods: {
			settime(){
				uni.navigateTo({
				    url: '../settime/settime'
				});
			},
			waitexamine(){
				uni.navigateTo({
				    url: '../waitexamine/waitexamine'
				});
			},
			waitvisit(){
				uni.navigateTo({
				    url: '../waitvisit/waitvisit'
				});
			},
			finishvisit(){
				uni.navigateTo({
				    url: '../finishvisit/finishvisit'
				});
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
page{
	padding-top: 130upx;
	box-sizing: border-box;
	background-color: #F2F2F2;
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
.wait{
	background-color: white;
	padding: 40upx 30upx;
	box-sizing: border-box;
	margin-top: 20upx;
}

</style>
