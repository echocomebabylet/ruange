<template>
	<view>
		<view class="nav">
			<image src="../../static/u164.png"></image>
			<text>创建订单</text>
			<text style="color: white;">dd</text>
		</view>
		<view class="address">
			<view class="add">
				<image src="../../static/u133.png"></image>
				<text>点击添加地址</text>
			</view>
		</view>
		<view class="product-list">
			<view class="product-img">
				<image src="../../static/u25.png"></image>
			</view>
			<view class="product-info">
				<text style="margin-bottom: 40upx;">简约软包布艺靠背床</text>
				<text style="margin-bottom: 20upx;">款式：原木色</text>
				<text style="margin-bottom: 20upx;">规格：206.5cm长*209cm宽*105cm高</text>
				<view>
					<text>价格：￥2568.00</text>
					<text>数量：1</text>
				</view>
			</view>
		</view>
		<view class="product-list">
			<view class="product-img">
				<image src="../../static/u25.png"></image>
			</view>
			<view class="product-info">
				<text style="margin-bottom: 40upx;">简约软包布艺靠背床</text>
				<text style="margin-bottom: 20upx;">款式：原木色</text>
				<text style="margin-bottom: 20upx;">规格：206.5cm长*209cm宽*105cm高</text>
				<view>
					<text>价格：￥2568.00</text>
					<text>数量：1</text>
				</view>
			</view>
		</view>
		<view class="amount">
			<text>共2件商品</text>
			<text>小计：<text style="color: #40CCCB;">￥2608.00</text></text>
		</view>
		<view class="coupon">
			<view class="available" @click="coupon()">
				<text>优惠券</text>
				<view style="display: flex;align-items: center;">
					<view v-if="issure==false">2张可用</view>
					<text style="color: #40CCCB;margin-right: 40upx;" v-if="issure==true">-￥300.00</text>
					<image src="../../static/u169.png"></image>
				</view>
			</view>
			<view class="code">
				<text>优惠码</text>
				<view style="display: flex;align-items: auto;margin-top: 30upx;">
					<input placeholder="输入优惠码" />
					<view>校验优惠码</view>
				</view>
			</view>
		</view>
		<view class="message">
			<text>给卖家留言</text>
			<input placeholder="选填" />
		</view>
		<view class="total">
			<text>实付金额</text>
			<view>
				<text>￥6315.55</text>
				<view @click="submitorder()">提交订单</view>
			</view>
		</view>
		
		<!-- 优惠券隐藏部分 -->
		<view class="coupon-list" v-if="isActive">
			<view class="cont">
				<view class="coupon-nav">
					<text>可领优惠券</text>
					<image src="../../static/u259.png" @click="close()"></image>
				</view>
				<scroll-view :scroll-y="true">
					<view style="display: flex;align-items: center;margin-bottom: 20upx;">
						<view class="reduction">
							<image src="../../static/u267.png"></image>
							<view>
								<text style="font-weight: bold;">￥300</text>
								<text style="font-size: 20upx;margin-top: 20upx;">满3500.00可用</text>
							</view>
						</view>
						<view class="receive" @click="sureselect(1)">
							<view style="display: flex;flex-direction: column;">
								<text style="font-size: 32upx;margin: 0 0 25upx 0;">沙发品类卷</text>
								<text style="font-size: 20upx;color: #9b9b9b;">有限期至2019.05.05</text>
							</view>
							<image src="../../static/u312.png" class="sure-select" v-if="isactive==1"></image>
						</view>
					</view>
					<view style="display: flex;align-items: center;margin-bottom: 20upx;">
						<view class="reduction">
							<image src="../../static/u267.png"></image>
							<view>
								<text style="font-weight: bold;">￥300</text>
								<text style="font-size: 20upx;margin-top: 20upx;">满3500.00可用</text>
							</view>
						</view>
						<view class="receive" @click="sureselect(2)">
							<view style="display: flex;flex-direction: column;">
								<text style="font-size: 32upx;margin: 0 0 25upx 0;">沙发品类卷</text>
								<text style="font-size: 20upx;color: #9b9b9b;">有限期至2019.05.05</text>
							</view>
							<image src="../../static/u312.png" class="sure-select" v-if="isactive==2"></image>
						</view>
					</view>
					<view class="disable">- 不可用优惠券 -</view>
					<view style="display: flex;align-items: center;margin-bottom: 20upx;">
						<view class="reduction">
							<image src="../../static/u260.png"></image>
							<view>
								<text style="font-weight: bold;">￥300</text>
								<text style="font-size: 20upx;margin-top: 20upx;">满3500.00可用</text>
							</view>
						</view>
						<view class="receive">
							<view style="display: flex;flex-direction: column;">
								<text style="font-size: 32upx;margin: 0 0 25upx 0;">沙发品类卷</text>
								<text style="font-size: 20upx;color: #9b9b9b;">有限期至2019.05.05</text>
							</view>
						</view>
					</view>
					<view style="display: flex;align-items: center;margin-bottom: 20upx;">
						<view class="reduction">
							<image src="../../static/u260.png"></image>
							<view>
								<text style="font-weight: bold;">￥300</text>
								<text style="font-size: 20upx;margin-top: 20upx;">满3500.00可用</text>
							</view>
						</view>
						<view class="receive">
							<view style="display: flex;flex-direction: column;">
								<text style="font-size: 32upx;margin: 0 0 25upx 0;">沙发品类卷</text>
								<text style="font-size: 20upx;color: #9b9b9b;">有限期至2019.05.05</text>
							</view>
						</view>
					</view>
				</scroll-view>
				
				<view class="sure" @click="sure">确定</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
					isactive:1,
					isActive:false,
					issure:false
			}
		},
		methods: {
			sureselect(index){
				this.isactive = index
			},
			coupon(){
				this.isActive = true;
			},
			close(){
				this.isActive = false;
			},
			sure(){
				this.issure = true;
				this.isActive = false
			},
			submitorder(){
				uni.navigateTo({
				    url:'../ordersubmit/ordersubmit'
				});
			}
		}
	}
</script>

<style>
@import url("../../css/buildorder.css");
</style>
