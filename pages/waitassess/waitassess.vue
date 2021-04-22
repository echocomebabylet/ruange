<template>
	<view>
		<view class="aline"></view>
		<view class="nav">
			<view style="width: 40upx;height: 40upx;" @click="back">
				<image src="../../static/u164.png"></image>
			</view>
			<text style="margin-left: 20upx;" v-if="isassess==true">待评价</text>
			<text style="margin-left: 20upx;" v-if="isassess==false">体验已完成</text>
			<text style="color: white;">返回</text>
		</view>
		<view class="list">
			<text class="active">预约</text>
			<text class="active">体验家确认</text>
			<text class="active">拜访</text>
			<text class="active">评价</text>
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
				<text style="color: #AEAEAE">开门暗号：地瓜地瓜，我是土豆！</text>
			</view>
			<view>
				<image src="../../static/u358.png"></image>					
			</view>
		</view>
		<view style="padding: 0 30upx;box-sizing: border-box;font-size: 30upx;color: #bdbdbd;">
			<view style="width: 100%;height: 90upx;line-height: 90upx;text-align: center;color: white;background-color: #40CCCB;font-size: 24upx;" @click="assess" v-if="isassessing==true">体验评价</view>
			<view style="width: 100%;height: 90upx;line-height: 90upx;text-align: center;color: white;background-color: #b1b5b8;font-size: 24upx;" v-if="isassessing==false">评价已完成</view>
		</view>
		<!-- 等待评价 -->
		<view v-if="isstar==true" class="star">
			<view class="cont">
				<view style="display: flex;align-items: center;justify-content: space-between;padding: 30upx 25upx;box-sizing: border-box;border-bottom: 1upx solid #F7F7F7;">
					<text></text>
					<text>评价</text>
					<view style="width: 20upx;height: 20upx;" @click="close">
						<image src="../../static/u259.png" style="width: 20upx;height: 20upx;"></image>
					</view>
				</view>
				<view style="display: flex;align-items: center;justify-content: space-between;padding: 20upx 55upx;box-sizing: border-box;">
					<text>服务质量</text>
					<view>
						<image src="../../static/u370.png" style="width: 40upx;height: 40upx;"></image>
						<image src="../../static/u370.png" style="width: 40upx;height: 40upx;margin-left: 10upx;"></image>
						<image src="../../static/u370.png" style="width: 40upx;height: 40upx;margin-left: 10upx;"></image>
						<image src="../../static/u373.png" style="width: 40upx;height: 40upx;margin-left: 10upx;"></image>
						<image src="../../static/u373.png" style="width: 40upx;height: 40upx;margin-left: 10upx;"></image>
					</view>
				</view>
				<view style="display: flex;align-items: center;justify-content: space-between;padding: 20upx 55upx;box-sizing: border-box;">
					<text>房屋颜值</text>
					<view>
						<image src="../../static/u370.png" style="width: 40upx;height: 40upx;"></image>
						<image src="../../static/u370.png" style="width: 40upx;height: 40upx;margin-left: 10upx;"></image>
						<image src="../../static/u370.png" style="width: 40upx;height: 40upx;margin-left: 10upx;"></image>
						<image src="../../static/u373.png" style="width: 40upx;height: 40upx;margin-left: 10upx;"></image>
						<image src="../../static/u373.png" style="width: 40upx;height: 40upx;margin-left: 10upx;"></image>
					</view>
				</view>
				<view style="display: flex;align-items: center;justify-content: space-between;padding: 20upx 55upx;box-sizing: border-box;">
					<text>风格喜欢</text>
					<view>
						<image src="../../static/u370.png" style="width: 40upx;height: 40upx;"></image>
						<image src="../../static/u370.png" style="width: 40upx;height: 40upx;margin-left: 10upx;"></image>
						<image src="../../static/u370.png" style="width: 40upx;height: 40upx;margin-left: 10upx;"></image>
						<image src="../../static/u373.png" style="width: 40upx;height: 40upx;margin-left: 10upx;"></image>
						<image src="../../static/u373.png" style="width: 40upx;height: 40upx;margin-left: 10upx;"></image>
					</view>
				</view>
				<input placeholder="写下对体验家的评价,为其他人提供参考"/>
				<view style="width: 85%;height: 90upx;line-height: 90upx;text-align: center;color: white;margin: 20upx auto 0;background-color: #40CCCB;" @click="assessing">立即评价</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phoneHeight:'',//屏幕高
				iswait:false,
				isassess:true,
				isassessing:true,
				isstar:false,
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
			assess(){
				this.isstar = true
			},
			close(){
				this.isstar = false
			},
			assessing(){
				this.isstar = false;
				this.isassess = false;
				this.isassessing = false;
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
.aline{
	 height: var(--status-bar-height);
	  width: 100%;
}
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
.star{
	width: 100%;
	height: 100%;
	background-color: rgba(0,0,0,0.5);
	position: fixed;
	top: 0;
	left: 0;
}
.cont{
	width: 100%;
	background-color: white;
	position: absolute;
	bottom: 0;
	left: 0;
	font-size: 30upx;
}
.cont input{
	width: 85%;
	height: 122upx;
	background-color: #f0f0f0;
	font-size: 22upx;
	margin: auto;
	margin-top: 20upx;
}
</style>
