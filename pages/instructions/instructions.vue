<template>
	<view>
		<view class="nav">
			<view style="width: 50upx;height: 40upx;margin-right: 40upx;" @click="back">
				<image src="../../static/u18.png"></image>
			</view>
			<text>使用说明</text>
		</view>		
		<view class="cont">
			<text>1.优惠券面额大于支付金额时，差额不找零，不退还</text>
			<text>2.没张优惠券只能使用一次，不支持同时使用多张</text>
			<text>3.优惠券有品类、品牌及金额限制，需要在对应的限制内才能使用；每张优惠券的使用条件请查看对应优惠券的详细说明</text>
			<text>4.使用优惠券的订单，若产生取消订单和退货的行为，优惠券均不退回，退款金额按优惠后的小计金额退款</text>
			<text>5.请在有效期内使用优惠券，未使用的优惠券过期后，将自动作废</text>
		</view>
		<text style="font-size: 24upx;color: #9FA3A8;position: fixed;bottom: 10upx;left: 60upx;">最终解释权归软阁家具所有</text>
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
				    url: '../mycoupon/mycoupon'
				});
			}
		}
	}
</script>

<style>
.nav{
	background-color: white;
	font-size: 30upx;
	display: flex;
	align-items: center;
	box-sizing: border-box;
	padding: 40upx;
	border-bottom: 1upx solid #F7F7F7;
}
.nav image{
	width: 50upx;
	height: 40upx;
}
.cont{
	padding: 50upx 60upx 0;
	box-sizing: border-box;
	font-size: 30upx;
}
.cont text{
	display: block;
	margin-bottom: 40upx;
	line-height: 40upx;
}
</style>
