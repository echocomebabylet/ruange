<template>
	<view>
		<view class="nav">
			<view style="width: 40upx;height: 40upx;" @click="back">
				<image src="../../static/u164.png"></image>
			</view>
			<text style="margin-left: 20upx;">等待审核</text>
			<text style="font-size: 24upx;" @click="cancel">取消预约</text>
		</view>
		<view class="list">
			<text class="active">预约</text>
			<text class="active">体验家确认</text>
			<text>拜访</text>
			<text>评价</text>
		</view>
		<view class="page-body" style="position: relative;">
			<view class="page-section page-section-gap">
				<map style="width: 100%;" :style="{'height':phoneHeight+'px'}" :latitude="latitude" :longitude="longitude" :markers="covers">
					<cover-image class="img" src="../../static/u92.png"></cover-image>
				</map>
			</view>
		</view>
		<view class="info">
			<view>
				<text style="font-size: 33upx;font-weight: bold;">于新亮</text>
				<view style="display: flex;align-items: center;margin: 10upx 0 20upx">
					<image src="../../static/u361.png" style="width: 28upx;height: 33upx;margin-right: 10upx;"></image>
					<text>在 长春市·万科翡翠公园</text>
				</view>
				<view style="display: flex;align-items: center;font-size: 22upx;margin-bottom: 20upx;">
					<text>拜访情况：08-11 18:00</text>
					<view style="width: 4upx;height: 30upx;background-color: black;margin: 0 40upx;"></view>
					<text>1人</text>
				</view>
				<view style="display: flex;align-items: center;">
					<text style="color: #40CCCB;">开门暗号：</text>
					<view style="display: flex;align-items: center;">
						<image src="../../static/u443.png" style="width: 26upx;height: 30upx;margin-right: 10upx;"></image>
						<text style="color: #848484;">待发放</text>
					</view>
				</view>
			</view>
			<view>
				<image src="../../static/u358.png"></image>					
			</view>
		</view>
		<view style="padding: 0 30upx;box-sizing: border-box;font-size: 30upx;color: #bdbdbd;">
			<text style="display: block;border-top: 1upx solid #F7F7F7;width: 100%;padding-top: 20upx;box-sizing: border-box;">等待体验家确认哦</text>
		</view>
		<view class="wait"  v-if="iswait==true">
			<view class="cont">
				<view style="padding: 50upx;box-sizing: border-box;text-align: center;">体验家可能没看到你的预约，要不在等等？</view>
				<view style="display: flex;align-items: center;border-top: 1upx solid #F7F7F7;">
					<text style="display: block;width: 50%;text-align: center;border-right: 1upx solid #F7F7F7;padding: 26upx 0;box-sizing: border-box;" @click="wait">再等等</text>
					<text style="display: block;width: 50%;text-align: center;color: #40CCCB;padding: 26upx 0;box-sizing: border-box;" @click="canceling">仍然取消</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phoneHeight:'',
				iswait:false,
				id:0, // 使用 marker点击事件 需要填写id
				title: 'map',
				latitude: 39.909,
				longitude: 116.39742,
				covers: [{
					latitude: 39.909,
					longitude: 116.39742,
					iconPath: '../../../static/location.png'
				}, {
					latitude: 39.90,
					longitude: 116.39,
					iconPath: '../../../static/location.png'
				}]
			}
		},
		onReady(){
			// 计算屏幕高度 ，宽度
			let _this = this;
			uni.getSystemInfo({
				success: (res) => {
					 _this.phoneHeight = res.windowHeight*0.58;
				}
			});
		},
		methods: {
			cancel(){
				this.iswait = true
			},
			wait(){
				this.iswait = false
			},
			canceling(){
				uni.navigateTo({
				    url: '../canceloriginal/canceloriginal'
				});
			},
			back(){
				uni.navigateTo({
				    url: '../myappointment/myappointment'
				});
			}
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
}
.nav image{
	width: 24upx;
	height: 38upx;
}
.list{
	display: flex;
	align-items: center;
	font-size: 25upx;
	padding: 25upx 0;
	box-sizing: border-box;
	color: #cfd1ce;
	width: 100%;
}
.list text{
	position: relative;
	width: 25%;
	text-align: center;
}
.list text::before{
	content: '';
	width: 100%;
	height: 5upx;
	background-color: #cfd1ce;
	position: absolute;
	bottom: -25upx;
	left: 0;
}
.list text::after{
	content: '';
	width: 8upx;
	height: 8upx;
	border: 1upx solid white;
	background-color: #cfd1ce;
	position: absolute;
	bottom: -28upx;
	left: 50%;
	transform: translateX(-50%);
}
.list .active{
	position: relative;
	width: 25%;
	text-align: center;
	color: #40CCCB;
}
.list .active::before{
	content: '';
	width: 100%;
	height: 5upx;
	background-color: #40CCCB;
	position: absolute;
	bottom: -25upx;
	left: 0;
}
.list .active::after{
	content: '';
	width: 8upx;
	height: 8upx;
	border: 1upx solid white;
	background-color: #40CCCB;
	position: absolute;
	bottom: -28upx;
	left: 50%;
	transform: translateX(-50%);
}
.info{
	padding: 50upx 30upx 20upx;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	font-size: 28upx;
}
.info image{
	width: 50upx;
	height: 44upx;
}
.img{
	width: 120upx;
	height: 120upx;
	border-radius: 20upx;
	position: absolute;
	bottom: -40upx;
	left: 30upx;
}
.wait{
	width: 100%;
	height: 100%;
	background-color: rgba(0,0,0,0.5);
	position: fixed;
	top: 0;
	left: 0;
}
.cont{
	width: 70%;
	background-color: white;
	border-radius: 20upx;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translateX(-50%) translateY(-50%);
	font-size: 28upx;
}
</style>
