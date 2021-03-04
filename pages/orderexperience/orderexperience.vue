<template>
	<view>
		<view class="nav">
			<view style="width: 50upx;height: 40upx;" @click="back">
				<image src="../../static/u18.png"></image>
			</view>
			<text>预约体验家</text>
			<text style="color: white;">返</text>
		</view>
		<view style="padding: 45upx 30upx;box-sizing: border-box;border-bottom: 1upx solid #F7F7F7;">
			<text style="font-size: 28upx;margin: 0 0 45upx;display: block;">确认位置</text>
			<text style="font-size: 24upx;display: block;color: #bbbbbb;">北京·798艺术园区</text>
			<text style="font-size: 24upx;margin: 24upx 0;display: block;color: #bbbbbb;">距离大约12km</text>
			<view class="page-body">
				<view class="page-section page-section-gap">
					<map style="width: 100%;height: 260upx;" :latitude="latitude" :longitude="longitude" :markers="covers">
					</map>
				</view>
			</view>
		</view>
		<view style="padding: 35upx 30upx;box-sizing: border-box;border-bottom: 1upx solid #F7F7F7;font-size: 28upx;display: flex;justify-content: space-between;align-items: center;" @click="show = true">
			<text>选择时间</text>
			<view style="display: flex;align-items: center;">
				<text style="color: #bbbbbb;">未选择</text>
				<image src="../../static/u8.png" style="width: 10upx;height: 20upx;margin-left: 10upx;"></image>
			</view>
			<u-calendar v-model="show" :mode="mode"></u-calendar>
		</view>
		<view style="padding: 35upx 30upx;box-sizing: border-box;border-bottom: 1upx solid #F7F7F7;font-size: 28upx;display: flex;justify-content: space-between;align-items: center;">
			<text>体验方式</text>
			<view style="display: flex;align-items: center;font-size: 22upx;">
				<view style="width: 120upx;height: 40upx;line-height: 40upx;text-align: center;background-color: #f2f2f2;border-radius: 5upx;" :class="{'active':isactive==1}" @click="select(1)">线下体验</view>
				<view style="width: 120upx;height: 40upx;line-height: 40upx;text-align: center;background-color: #f2f2f2;margin-left: 20upx;border-radius: 5upx;" :class="{'active':isactive==2}" @click="select(2)">视频体验</view>
			</view>
		</view>
		<view style="padding: 35upx 30upx;box-sizing: border-box;border-bottom: 1upx solid #F7F7F7;font-size: 28upx;">
			<text>预留信息</text>
			<view style="display: flex;align-items: center;justify-content: space-between;margin: 45upx 0;color: #bbb;">
				<text>称呼</text>
				<input placeholder="请输入对您的称呼" />
			</view>
			<view style="display: flex;align-items: center;justify-content: space-between;color: #bbb;">
				<text>手机号码</text>
				<input placeholder="请输入您的手机号码" />
			</view>
			<view style="display: flex;align-items: center;justify-content: space-between;color: #bbb;margin-top: 45upx;">
				<text>体验人数</text>
				<uni-number-box :min="0" :max="9"></uni-number-box>
			</view>
		</view>
		<view style="padding: 35upx 30upx;box-sizing: border-box;border-bottom: 1upx solid #F7F7F7;font-size: 28upx;display: flex;justify-content: space-between;align-items: center;" @click="name">
			<view style="display: flex;flex-direction: column;">
				<text>实名认证</text>
				<text style="font-size: 26upx;color: #bbb;">人脸多因子识别</text>
			</view>
			<view style="display: flex;align-items: center;">
				<text style="color: #c66966;">待认证</text>
				<image src="../../static/u8.png" style="width: 10upx;height: 20upx;margin-left: 10upx;"></image>
			</view>
		</view>
		<view style="padding: 35upx 30upx 200upx;box-sizing: border-box;font-size: 28upx;">
			<view style="display: flex;flex-direction: column;margin-bottom: 20upx;">
				<text>上传照片</text>
				<text style="font-size: 26upx;color: #bbb;">上传本人照片让体验家一眼认出你</text>
			</view>
			<view style="width: 100%;height: 530upx;border: 3upx solid #F7F7F7;">
				<image src="../../static/u1530.png" style="width: 86upx;height: 80upx;margin: 225upx auto;display: block;"></image>
			</view>
		</view>
		<view class="btn">确认预约</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isactive:1,
				show:false,
				mode:'date',
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
		methods: {
			select(index){
				this.isactive = index
			},
			name(){
				uni.navigateTo({
				    url: '../namecertification/namecertification'
				});
			}
		}
	}
</script>

<style>
page{
	padding-top: 130upx;
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
	border-bottom: 1upx solid #F7F7F7;
}
.nav image{
	width: 50upx;
	height: 40upx;
}
.active{
	background-color: #40CCCB !important;
	color: white;
}
input{
	font-size: 28upx;
	text-align: right;
}
.uni-numbox /deep/ .uni-numbox__plus,
.uni-numbox /deep/ .uni-numbox__minus,
.uni-numbox /deep/ .uni-numbox__value{
	border-style: none !important;
	color: black !important;
	background-color: white !important;
}
.btn{
	width: 90%;
	height: 110upx;
	line-height: 110upx;
	background-color: #40CCCB;
	color: white;
	font-size: 30upx;
	font-weight: bold;
	text-align: center;
	position: fixed;
	bottom: 10upx;
	left: 50%;
	transform: translateX(-50%);
	border-radius: 15upx;
	box-shadow: 5upx 5upx 10upx 0 rgba(0,0,0,0.4);
}
</style>
