<template>
	<view>
		<view class="nav">
			<view style="width: 50upx;height: 40upx;" @click="back">
				<image src="../../static/u18.png"></image>
			</view>
			<text>评价(17)</text>
			<text style="color: white;">回</text>
		</view>
		<view class="assess">
			<view style="display: flex;align-items: center;">
				<image src="../../static/u321.png" style="width: 30upx;height: 24upx;"></image>
				<text style="font-size: 27upx;margin-left: 20upx;">17条评论</text>
			</view>
			<text style="font-size: 22upx;color: #afafaf;">好评度<text style="color: #40CCCB;margin-left: 20upx;">100%</text></text>
		</view>
		<view class="cont" v-for="(item,index) in 14" :key="index">
			<view style="display: flex;justify-content: space-between;align-items: center;">
				<view class="head">
					<image src="../../static/u2167.jpg"></image>
					<text>秦凯欧</text>
				</view>
				<view class="star">
					<image src="../../static/u370.png"></image>
					<image src="../../static/u370.png"></image>
					<image src="../../static/u370.png"></image>
					<image src="../../static/u373.png"></image>
					<image src="../../static/u373.png"></image>
				</view>
			</view>
			<view style="margin-top: 20upx;">我开始家里尺寸量错了，我开始家里尺寸量错了我开始家里尺寸量错了我开始家里尺寸量错了</view>
			<view style="margin-top: 15upx;color: #bebebe;">2018-07-01</view>
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
				    url: '../experiencedetail/experiencedetail'
				});
			},
		}
	}
</script>

<style>
page{
	padding-top: 220upx;
	box-sizing: border-box;
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
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1000;
}
.nav image{
	width: 50upx;
	height: 40upx;
}
.assess{
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 22upx 70upx;
	box-sizing: border-box;
	position: fixed;
	top: 130upx;
	left: 0;
	background-color: white;
	z-index: 1000;
	width: 100%;
}
.cont{
	padding: 22upx 25upx;
	font-size: 23upx;
	box-sizing: border-box;
	border-top: 1upx solid #F7F7F7;
}
.head{
	display: flex;
	align-items: center;
}
.head image{
	width: 50upx;
	height: 50upx;
	margin-right: 20upx;
	border-radius: 50%;
}
.star image{
	width: 20upx;
	height: 20upx;
	margin-left: 10upx;
}
</style>
