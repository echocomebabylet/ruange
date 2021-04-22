<template>
	<view>
		<view class="aline"></view>
		<view class="nav">
			<view style="width: 40upx;height: 40upx;" @click="back">
				<image src="../../static/u164.png"></image>
			</view>
			<text>我的优惠券</text>
			<view style="width: 40upx;height: 40upx;" @click="instructions">
				<image src="../../static/u840.png" style="width: 40upx;height: 40upx;"></image>
			</view>
		</view>		
		<view class="coupon-nav">
			<text :class="{'active':isactive==1}" @click="nav(1)">未使用</text>
			<text :class="{'active':isactive==2}" @click="nav(2)">已使用</text>
			<text :class="{'active':isactive==3}" @click="nav(3)">已过期</text>
		</view>
		<view style="height: 220upx;"></view>
		<!-- 未使用 -->
		<view class="disuse" v-if="isactive==1">
			<view class="exchange">
				<input placeholder="请输入优惠券兑换码" />
				<view>兑换</view>
			</view>
			<view class="coupon" v-for="(item,index) in 8" :key="index">
				<view style="display: flex;align-items: center;justify-content: space-between;">
					<text style="font-size: 40upx;font-weight: bold;color: #dc6469;">￥15</text>
					<view style="display: flex;flex-direction: column;">
						<text style="font-size: 25upx;font-weight: bold;">定向券</text>
						<text style="font-size: 22upx;color: #a4a4a4;margin-top: 20upx;">有效期至2018-05-02</text>
					</view>
					<view class="useing">立即使用</view>
				</view>
				<view class="disable">限品牌茶花陶碗使用</view>
			</view>
		</view>
		<!-- 已使用 -->
		<view  class="used" v-if="isactive==2">
			<view class="coupon" v-for="(item,index) in 8" :key="index">
				<view style="display: flex;align-items: center;justify-content: space-between;">
					<text style="font-size: 40upx;font-weight: bold;">￥15</text>
					<view style="display: flex;flex-direction: column;">
						<text style="font-size: 25upx;font-weight: bold;">定向券</text>
						<text style="font-size: 22upx;color: #a4a4a4;margin-top: 20upx;">有效期至2018-05-02</text>
					</view>
					<view style="color: white;">立即使用</view>
				</view>
				<view class="disable">限品牌茶花陶碗使用</view>
				<image src="../../static/u835.png" class="used-img"></image>
			</view>
		</view>
		<!-- 已过期 -->
		<view  class="used" v-if="isactive==3">
			<view class="coupon" v-for="(item,index) in 8" :key="index">
				<view style="display: flex;align-items: center;justify-content: space-between;">
					<text style="font-size: 40upx;font-weight: bold;">￥15</text>
					<view style="display: flex;flex-direction: column;">
						<text style="font-size: 25upx;font-weight: bold;">定向券</text>
						<text style="font-size: 22upx;color: #a4a4a4;margin-top: 20upx;">有效期至2018-05-02</text>
					</view>
					<view style="color: white;">立即使用</view>
				</view>
				<view class="disable">限品牌茶花陶碗使用</view>
				<image src="../../static/u822.png" class="used-img"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isactive:1
			}
		},
		methods: {
			nav(index){
				this.isactive = index
			},
			back(){
				uni.switchTab({
				    url: '/pages/my/my'
				});
			},
			instructions(){
				uni.navigateTo({
				    url: '../instructions/instructions'
				});
			}
		}
	}
</script>

<style>
@import url("../../css/mycoupon.css");
</style>
