<template>
	<view>
		<view class="nav">
			<view style="width: 40upx;height: 40upx;" @click="back">
				<image src="../../static/u164.png"></image>
			</view>
			<text>设置开放时间</text>
			<text style="color: white;">返回</text>
		</view>
		<view style="display: flex;flex-direction: column;align-items: center;background-color: white;">
			<view class="ing">开放中</view>
			<text style="font-size: 28upx;color: #b3b3b8;">可获得浏览奖励和体验奖励</text>
			<u-switch v-model="checked" active-color="#40cbbb" style="margin: 40upx 0;"></u-switch>
		</view>
		<view style="margin-top: 20upx;background-color: white;padding: 0 25upx;box-sizing: border-box;">
			<view class="uni-form-item uni-column" style="background-color: white;">
				<checkbox-group name="checkbox1">
					<label style="display: flex;align-items: center;justify-content: space-between;padding: 40upx 0;box-sizing: border-box;border-bottom: 1upx solid #F7F7F7;">
						<text style="font-size: 28upx;">仅接受提前一个预约</text>
						<view>
							<checkbox value="checkbox1" :checked="checked1"/>
						</view>
					</label>
				</checkbox-group>
				<text style="font-size: 23upx;color: #7e7f81;margin: 40upx 0;display: block;">访客可在您设置的时间段内发起申请，如不方便可以和他私下协商</text>
				<checkbox-group name="checkbox2">
					<label style="display: flex;align-items: center;justify-content: space-between;padding: 40upx 0;box-sizing: border-box;border-bottom: 1upx solid #F7F7F7;">
						<text style="font-size: 28upx;">工作日上午（08:00~12:00）</text>
						<view>
							<checkbox value="checkbox2" :checked="checked2"/>
						</view>
					</label>
				</checkbox-group>
				<checkbox-group name="checkbox2">
					<label style="display: flex;align-items: center;justify-content: space-between;padding: 40upx 0;box-sizing: border-box;border-bottom: 1upx solid #F7F7F7;">
						<text style="font-size: 28upx;">工作日下午（13:00~21:00）</text>
						<view>
							<checkbox value="checkbox2" :checked="checked2"/>
						</view>
					</label>
				</checkbox-group>
				<checkbox-group name="checkbox2">
					<label style="display: flex;align-items: center;justify-content: space-between;padding: 40upx 0;box-sizing: border-box;border-bottom: 1upx solid #F7F7F7;">
						<text style="font-size: 28upx;">周末上午（08:00~12:00）</text>
						<view>
							<checkbox value="checkbox2" :checked="checked2"/>
						</view>
					</label>
				</checkbox-group>
				<checkbox-group name="checkbox2">
					<label style="display: flex;align-items: center;justify-content: space-between;padding: 40upx 0;box-sizing: border-box;border-bottom: 1upx solid #F7F7F7;">
						<text style="font-size: 28upx;">周末下午（18:00~21:00）</text>
						<view>
							<checkbox value="checkbox2" :checked="checked2"/>
						</view>
					</label>
				</checkbox-group>
			</view>
		</view>
	</view>
</template>

<script>
	import uniNumberBox from "@/components/uni-number-box/uni-number-box.vue"
	export default {
		data() {
			return {
				checked: false,
				checked1: false,
				checked2: false
			}
		},
		methods: {
			back(){
				uni.navigateTo({
					url: '../visitmanagement/visitmanagement'
				});
			}
			
		},
		components:{
			uniNumberBox
		}
	}
</script>

<style>
page{
	background-color: #f2f2f2;
	padding-top: 130upx;
	box-sizing: border-box;
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
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1000;
}
.nav image{
	width: 24upx;
	height: 38upx;
}
.ing{
	width: 120upx;
	height: 120upx;
	background-color: #40CCCB;
	color: white;
	line-height: 110upx;
	text-align: center;
	font-size: 24upx;
	border-radius: 50%;
	border: 6upx solid #a3e7e7;
	margin: 30upx 0;
}
uni-checkbox /deep/ .uni-checkbox-input{
	border-radius: 50% !important;
}
uni-checkbox:not([disabled]) /deep/ .uni-checkbox-input:hover{
	border-color: #b8b8b8;
}
uni-checkbox /deep/ .uni-checkbox-input.uni-checkbox-input-checked{
	background-color: #40CCCB;
	border-color: #40CCCC !important;
	color: white !important;
}
</style>
