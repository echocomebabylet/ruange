<template>
	<view>
		<view class="aline"></view>
		<view class="nav">
			<view style="width: 50upx;height: 40upx;" @click="back">
				<image src="../../static/u18.png"></image>
			</view>
			<text>实名认证</text>
			<text style="color: white;">返</text>
		</view>
		<view style="padding: 25upx;box-sizing: border-box;font-size: 28upx;display: flex;align-items: center;background-color: white;">
			<text>真实姓名</text>
			<input placeholder="请填写本人真实姓名" style="font-size: 28upx;margin-left: 30upx;"/>
		</view>
		<view style="padding: 25upx;box-sizing: border-box;font-size: 28upx;display: flex;align-items: center;background-color: white;">
			<text>身份证号</text>
			<input placeholder="请填写本人身份证号" style="font-size: 28upx;margin-left: 30upx;"/>
		</view>
		<view style="display: flex;align-items: center;margin: 25upx;">
			<image src="../../static/u1559.png" style="width: 20upx;height: 25upx;margin-right: 5upx;"></image>
			<text style="font-size: 20upx;color: #c4c4c4;">该信息仅用于证明您的真实身份保障您的合法权益，请放心填写</text>
		</view>
		<view class="btn" @click="submit">提交</view>
		<view style="font-size: 20upx;color: #929292;text-align: center;margin-top: 20upx;">*基于安全验证考虑，可能需要您进行人脸识别以核验身份</view>
		<!-- 人脸认证 -->
		<view class="face" v-if="isface == true">
			<view class="cont">
				<view style="padding: 40upx 0;font-size: 26upx;box-sizing: border-box;color: #909090;text-align: center;">是否已完成支付宝人脸认证</view>
				<view class="yes">
					<text style="color: #909090;border-right: 1upx solid #F7F7F7;" @click="yes">是</text>
					<text style="color: #a85959;" @click="yes">否</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isface:false
			}
		},
		methods: {
			back(){
				uni.navigateTo({
				    url: '../orderexperience/orderexperience'
				});
			},
			submit(){
				this.isface = true
			},
			yes(){
				this.isface = false
			}
		}
	}
</script>

<style>
.aline{
	 height: var(--status-bar-height);
	  width: 100%;
	  background-color: white;
}
page{
	background-color: #f2f2f2;
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
	border-bottom: 1upx solid #F7F7F7;
}
.nav image{
	width: 50upx;
	height: 40upx;
}
.btn{
	width: 80%;
	height: 100upx;
	line-height: 100upx;
	color: white;
	background-color: #40CCCB;
	text-align: center;
	border-radius: 50upx;
	margin: auto;
	font-size: 30upx;
	margin-top: 60upx;
}
.face{
	width: 100%;
	height: 100%;
	background-color: rgba(0,0,0,0.4);
	position: fixed;
	top: 0;
	left: 0;
}
.cont{
	width: 560upx;
	background-color: white;
	border-radius: 20upx;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translateX(-50%) translateY(-50%);
}
.yes{
	display: flex;
	border-top: 1upx solid #F7F7F7;
}
.yes text{
	display: block;
	width: 50%;
	text-align: center;
	padding: 30upx 0;
	box-sizing: border-box;
	font-size: 26upx;
}
</style>
