<template>
	<view>
		<view class="nav">
			<view style="width: 40upx;height: 40upx;" @click="back">
				<image src="../../static/u164.png"></image>
			</view>
			<text>我的预约</text>
			<text style="color: white;">返</text>
		</view>
		<!-- 等待体验 -->
		<view class="wait">
			<text style="font-size: 38upx;font-weight: bold;">等待体验(4)</text>
			<view v-if="iswait==2" @click="experiencebegin" style="font-size: 30upx;">
				<text style="margin: 50upx 0 30upx;display: block;">今日没有已预约的体验</text>
				<view style="display: flex;align-items: center;">
					<text style="margin-right: 20upx;color: #40CCCB;">现在就去</text>
					<image src="../../static/u112.png" style="width: 46upx;height: 46upx;"></image>
				</view>
			</view>
			<view v-if="iswait==1" v-for="(item,index) in 4" :key="index" style="display: flex;justify-content: space-between;padding: 30upx 0;box-sizing: border-box;border-bottom: 1upx solid #F7F7F7;">
				<view style="display: flex;">
					<image src="../../static/u1160.png" style="width: 84upx;height: 84upx;border-radius: 50%;"></image>
					<view style="display: flex;flex-direction: column;margin-left: 20upx;font-size: 24upx;">
						<text style="font-size: 28upx;">08月11日 18:00~21:00</text>
						<text style="margin: 20upx 0;">于新亮</text>
						<text>长春市-万科翡翠公园</text>
					</view>
				</view>
				<image src="../../static/u8.png" style="width: 12upx;height: 22upx;align-self: center;"></image>
			</view>
		</view>
		<!-- 等待审核 -->
		<view class="wait">
			<text style="font-size: 38upx;font-weight: bold;">等待审核(4)</text>
			<view v-if="iswait==2" v-for="(item,index) in 4" :key="index" @click="waitreview" style="display: flex;justify-content: space-between;padding: 30upx 0;box-sizing: border-box;border-bottom: 1upx solid #F7F7F7;">
				<view style="display: flex;">
					<image src="../../static/u1160.png" style="width: 84upx;height: 84upx;border-radius: 50%;"></image>
					<view style="display: flex;flex-direction: column;margin-left: 20upx;font-size: 24upx;">
						<text style="font-size: 28upx;">08月11日 18:00~21:00</text>
						<text style="margin: 20upx 0;">于新亮</text>
						<text>长春市-万科翡翠公园</text>
					</view>
				</view>
				<image src="../../static/u8.png" style="width: 12upx;height: 22upx;align-self: center;"></image>
			</view>
		</view>
		<!-- 等待评价 -->
		<view class="wait">
			<text style="font-size: 38upx;font-weight: bold;">等待评价(4)</text>
			<view v-if="iswait==1"  v-for="(item,index) in 4" :key="index" @click="assess" style="display: flex;justify-content: space-between;padding: 30upx 0;box-sizing: border-box;border-bottom: 1upx solid #F7F7F7;">
				<view style="display: flex;">
					<image src="../../static/u1160.png" style="width: 84upx;height: 84upx;border-radius: 50%;"></image>
					<view style="display: flex;flex-direction: column;margin-left: 20upx;font-size: 24upx;">
						<text style="font-size: 28upx;">08月11日 18:00~21:00</text>
						<text style="margin: 20upx 0;">于新亮</text>
						<text>长春市-万科翡翠公园</text>
					</view>
				</view>
				<image src="../../static/u8.png" style="width: 12upx;height: 22upx;align-self: center;"></image>
			</view>
		</view>
		<!-- 已结束的预约 -->
		<view class="wait" @click="finishappointment">
			<text style="font-size: 38upx;font-weight: bold;">已结束的预约(4)</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				iswait:1
			}
		},
		methods: {
			assess(){
				uni.navigateTo({
				    url: '../waitassess/waitassess'
				});
			},
			experiencebegin(){
				uni.navigateTo({
				    url: '../experiencebegin/experiencebegin'
				});
			},
			waitreview(){
				uni.navigateTo({
				    url: '../waitreview/waitreview'
				});
			},
			finishappointment(){
				uni.navigateTo({
				    url: '../finishappointment/finishappointment'
				});
			},
			back(){
				uni.switchTab({
				    url: '/pages/my/my'
				});
			}
		}
	}
</script>

<style>
page{
	padding-top: 130upx;
	box-sizing: border-box;
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
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1000;
	background-color: white;
}
.nav image{
	width: 24upx;
	height: 38upx;
}
.wait{
	background-color: white;
	padding: 40upx 30upx;
	box-sizing: border-box;
	margin-top: 20upx;
}

</style>
