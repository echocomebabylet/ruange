<template>
	<view>
		<view class="wait">
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
				iswait:false,
				id:''
			}
		},
		onLoad(options){
			this.id = options
		},
		methods: {
			
			canceling(){
				uni.navigateTo({
				    url: '../canceloriginal/canceloriginal?id='+this.id
				});
			},
			wait(){
				uni.navigateBack({
				    url: '../waitreview/waitreview',
					animationType: 'none',
					animationDuration: 200
				});
			},
		}
	}
</script>

<style>
page{
	background: transparent;
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
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translateX(-50%) translateY(-50%);
	font-size: 28upx;
}
</style>
