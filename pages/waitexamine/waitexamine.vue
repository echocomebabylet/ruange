<template>
	<view>
		<view class="nav">
			<view style="width: 40upx;height: 40upx;" @click="back">
				<image src="../../static/u164.png"></image>
			</view>
			<text>等待来访</text>
			<text style="color: white;">返回</text>
		</view>
		<view class="list" v-for="(item,index) in 5" :key="index">
			<view style="display: flex;justify-content: space-between;padding: 35upx 10upx;box-sizing: border-box;border-bottom: 1upx solid #F7F7F7;">
				<view style="display: flex;align-items: center;">
					<image src="../../static/u1160.png" style="width: 85upx;height: 85upx;border-radius: 50%;"></image>
					<view style="display: flex;flex-direction: column;margin-left: 20upx;">
						<text style="font-weight: bold;">可乐妈</text>
						<text style="margin-top: 10upx;">在：杭州·杨柳郡</text>
					</view>
				</view>
			</view>
			<view style="padding: 35upx 10upx;box-sizing: border-box;">
				<view style="margin-bottom: 20upx;display: flex;align-items: center;">
					<image src="../../static/u711.png" style="width: 20upx;height: 20upx;margin-right: 20upx;"></image>
					<text>09月11日 18:00~20:00</text>
				</view>
				
				<view style="display: flex;align-items: center;justify-content: space-between;">
					<view style="display: flex;align-items: center;margin-bottom: 15upx;">
						<image src="../../static/u7132.png" style="width: 20upx;height: 20upx;margin-right: 20upx;" ></image>
						<text>1人</text>
					</view>
					<view style="display: flex;align-items: center;">
						<view class="contact">联系客服</view>
						<view class="btn" @click="pass">通过</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 提示 -->
		<view class="tip" v-if="isactive==true">
			<view class="cont">
				<text style="font-size: 38upx;">提示</text>
				<input placeholder="请输入开门暗号"/>
				<view style="display: flex;align-items: center;font-size: 30upx;margin-top: 40upx;">
					<view style="width: 50%;color: #40CCCB;height: 80upx;line-height: 80upx;text-align: center;" @click="off">取消</view>
					<view style="width: 50%;color: white;height: 80upx;line-height: 80upx;text-align: center;background-color: #40CCCB;border-radius: 10upx;" @click="off">确定</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isactive:false
			}
		},
		methods: {
			back(){
				uni.navigateTo({
				    url: '../visitmanagement/visitmanagement'
				});
			},
			pass(){
				this.isactive = true
			},
			off(){
				this.isactive = false
			}
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
.list{
	margin-top: 20upx;
	padding: 0 20upx;
	box-sizing: border-box;
	background-color: white;
	font-size: 24upx;
}
.btn{
	width: 144upx;
	height: 48upx;
	border: 1upx solid #40CCCB;
	color: #40CCCB;
	line-height: 45upx;
	text-align: center;
	font-size: 25upx;
	border-radius: 30upx;
}
.contact{
	width: 144upx;
	height: 48upx;
	border: 1upx solid #bbbbbb;
	color: #bbbbbb;
	line-height: 45upx;
	text-align: center;
	font-size: 25upx;
	border-radius: 30upx;
	margin-right: 20upx;
}
.tip{
	width: 100%;
	height: 100%;
	background-color: rgba(0,0,0,0.5);
	position: fixed;
	top: 0;
	left: 0;
	z-index: 10000;
}
.cont{
	width: 80%;
	padding: 60upx 40upx;
	box-sizing: border-box;
	background-color: white;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translateX(-50%) translateY(-50%);
}
input{
	width: 100%;
	height: 50upx;
	font-size: 24upx;
	border: 1upx solid #d8d8d8;
	border-radius: 5upx;
	margin: 20upx 0;
	padding: 0 20upx;
	box-sizing: border-box;
}
</style>
