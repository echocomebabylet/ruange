<template>
	<view>
		<view class="nav">
			<view style="width: 40upx;height: 40upx;" @click="back">
				<image src="../../static/u164.png"></image>
			</view>
			<text>评价晒单</text>
			<text style="color: white;">返</text>
		</view>
		<view style="background-color: white;padding: 45upx;box-sizing: border-box;display: flex;align-items: center;">
			<image src="../../static/u25.png" class="product"></image>
			<view>
				<view style="margin-bottom: 15upx;">商品评价</view>
				<view class="star">
					<image src="../../static/u370.png"></image>
					<image src="../../static/u370.png"></image>
					<image src="../../static/u370.png"></image>
					<image src="../../static/u373.png"></image>
					<image src="../../static/u373.png"></image>
				</view>
			</view>
		</view>
		<textarea placeholder="在哪方面改进,您会更满意呢？"></textarea>
		<view class="photo">
			<!-- <image></image> -->
			<view class="picture">
				<image src="../../static/u1048.png"></image>
				<text>照片</text>
			</view>
		</view>
		<view class="submit">提交</view>
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
	background-color: white;
	border-bottom: 1upx solid #F7F7F7;
}
.nav image{
	width: 24upx;
	height: 38upx;
}
.product{
	width: 150upx;
	height: 110upx;
	margin-right: 40upx;
}
.star image{
	width: 40upx;
	height: 40upx;
	margin-right: 20upx;
}
textarea{
	width: 100%;
	height: 170upx;
	font-size: 26upx;
	padding: 30upx 45upx;
	box-sizing: border-box;
	resize: none;
}
.photo{
	background-color: white;
	padding: 20upx 45upx;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	flex-wrap: wrap;
}
.photo image{
	width: 180upx;
	height: 180upx;
	margin-right: 20upx;
	margin-bottom: 20upx;
}
.picture{
	padding: 25upx 40upx;
	box-sizing: border-box;
	border: 1upx solid #F7F7F7;
	font-size: 20upx;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.picture image{
	width: 70upx;
	height: 65upx;
	display: block;
	margin: auto;
	margin-bottom: 20upx;
}
.submit{
	width: 90%;
	height: 74upx;
	line-height: 74upx;
	text-align: center;
	font-size: 24upx;
	background-color: #40CCCB;
	color: white;
	margin: auto;
	border-radius: 10upx;
	margin-top: 40upx;
}
</style>
