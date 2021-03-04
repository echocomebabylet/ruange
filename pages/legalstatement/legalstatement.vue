<template>
	<view>
		<view class="nav">
			<view style="width: 40upx;height: 40upx;" @click="back">
				<image src="../../static/u164.png"></image>
			</view>
			<text>{{data.name}}</text>
			<text style="color: white;">确</text>
		</view>
		<view style="padding: 30upx;box-sizing: border-box;font-size: 30upx;line-height: 48upx;">
			<text>1.优惠券面额大于支付金额时，差额不找零，不退还</text>
			<text>2.优惠券面额大于支付金额时，差额不找零，不退还</text>
			<text>1.优惠券面额大于支付金额时，差额不找零，不退还</text>
			<text>1.优惠券面额大于支付金额时，差额不找零，不退还</text>
		</view>
		<text style="color: #878787;font-size: 20upx;position: absolute;bottom: 10upx;left: 30upx;">最终解释权归软阁所有</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data:[]
			}
		},
		onLoad(options){
			this.data = options
		},
		methods: {
			back(){
				uni.navigateTo({
				    url: '../termsofservice/termsofservice'
				});
			},
		}
	}
</script>

<style>
.nav{
	padding: 0 30upx;
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
</style>
