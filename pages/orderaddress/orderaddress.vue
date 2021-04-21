<template>
	<view>
		<view class="aline"></view>
		<view class="appointment">
			<view style="display: flex;align-items: center;justify-content: space-between;padding: 30upx 35upx;box-sizing: border-box;">
				<view style="width: 50upx;height: 40upx;" @click="appointmentback">
					<image src="../../static/u18.png" style="width: 50upx;height: 40upx;"></image>
				</view>
				<text>预约体验家</text>
				<text style="color: white;">返回</text>
			</view>
			<view class="page-body" style="position: relative;">
				<view class="page-section page-section-gap">
					<map style="width: 100%;" :style="{'height':phoneHeight+'px'}" :latitude="latitude" :longitude="longitude" :markers="covers">
						<cover-view>
							<text>北京·美景天城园区</text>
							<image src="../../static/u1641.png"></image>
						</cover-view>
					</map>
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
			uni.getSystemInfo({
				success: (res) => {
					this.phoneHeight = res.windowHeight*0.92;
				}
			});
		},
		methods: {
			appointmentback(){
				uni.navigateTo({
				    url: '../experiencedetail/experiencedetail'
				});
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
.appointment{
	font-weight: bold;
	font-size: 30upx;
}
cover-view{
	width: 50%;
	height: 90upx;
	background-color: white;
	box-shadow: 5upx 5upx 10upx 0 rgba(0,0,0,0.4);	position:absolute;
	top: 35%;
	left: 50%;
	transform: translateX(-50%);
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 40upx;
	font-size: 30upx;
	font-weight: normal;
}
cover-view image{
	width: 60upx;
	height: 60upx;
}
</style>
