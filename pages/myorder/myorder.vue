<template>
	<view>
		<view class="nav">
			<view style="width: 40upx;height: 40upx;" @click="back">
				<image src="../../static/u164.png"></image>
			</view>
			<text>我的订单</text>
			<text style="color: white;">返</text>
		</view>
		<view class="order-nav">
			<text :class="{'active':isactive==1}" @click="nav(1)">全部</text>
			<text :class="{'active':isactive==2}" @click="nav(2)">待付款</text>
			<text :class="{'active':isactive==5}" @click="nav(5)">待发货</text>
			<text :class="{'active':isactive==3}" @click="nav(3)">待收货</text>
			<text :class="{'active':isactive==4}" @click="nav(4)">待评价</text>
		</view>
		<!-- 全部订单 -->
		<view style="margin-top: 230upx;" v-if="isactive==1">
			<!-- 待付款 -->
			<view class="pay">
				<view style="padding: 30upx 45upx;box-sizing: border-box;border-bottom: 1upx solid #F7F7F7;background-color: white;">待付款</view>
				<view class="pay-list" v-for="(item,index) in 2" :key="index">
					<image src="../../static/u25.png"></image>
					<view style="display: flex;flex-direction: column;">
						<text style="margin-bottom: 30upx;font-size: 24upx;">简约软包布艺靠背床</text>
						<text>款式：原木色</text>
						<text style="margin: 15upx 0;">规格：160cm长*190cm宽*79cm高</text>
						<view style="display: flex;align-items: center;justify-content: space-between;">
							<text>价格：￥1690.80 x 1</text>
						</view>
					</view>
				</view>
				<view class="total">
					<text>共计2件商品</text>
					<text>小计<text style="color: #40CCCB;margin-left: 20upx;">￥2680.00</text></text>
				</view>
				<view class="sure">
					<view>取消订单</view>
					<view style="border: none;background-color: #40CCCB;color: white;margin-left: 20upx;" @click="gopay">去付款</view>
				</view>
			</view>
			<!-- 已取消 -->
			<view class="pay">
				<view style="padding: 30upx 45upx;box-sizing: border-box;border-bottom: 1upx solid #F7F7F7;background-color: white;">已取消</view>
				<view class="pay-list" v-for="(item,index) in 2" :key="index">
					<image src="../../static/u25.png"></image>
					<view style="display: flex;flex-direction: column;">
						<text style="margin-bottom: 30upx;font-size: 24upx;">简约软包布艺靠背床</text>
						<text>款式：原木色</text>
						<text style="margin: 15upx 0;">规格：160cm长*190cm宽*79cm高</text>
						<view style="display: flex;align-items: center;justify-content: space-between;">
							<text>价格：￥1690.80 x 1</text>
						</view>
					</view>
				</view>
				<view class="total">
					<text>共计2件商品</text>
					<text>小计<text style="color: #40CCCB;margin-left: 20upx;">￥2680.00</text></text>
				</view>
				<view class="sure">
					<view style="margin-right: 20upx;">删除订单</view>
					<view class="again">重新购买</view>
				</view>
			</view>
			<!-- 待发货 -->
			<view class="pay">
				<view style="padding: 30upx 45upx;box-sizing: border-box;border-bottom: 1upx solid #F7F7F7;background-color: white;">待发货</view>
				<view class="pay-list" v-for="(item,index) in 2" :key="index">
					<image src="../../static/u25.png"></image>
					<view style="display: flex;flex-direction: column;">
						<text style="margin-bottom: 30upx;font-size: 24upx;">简约软包布艺靠背床</text>
						<text>款式：原木色</text>
						<text style="margin: 15upx 0;">规格：160cm长*190cm宽*79cm高</text>
						<view style="display: flex;align-items: center;justify-content: space-between;">
							<text>价格：￥1690.80 x 1</text>
						</view>
					</view>
				</view>
				<view class="total">
					<text>共计2件商品</text>
					<text>小计<text style="color: #40CCCB;margin-left: 20upx;">￥2680.00</text></text>
				</view>
				<view class="sure">
					<view @click="gosend">查看详情</view>
				</view>
			</view>
			<!-- 待收货 -->
			<view class="pay">
				<view style="padding: 30upx 45upx;box-sizing: border-box;border-bottom: 1upx solid #F7F7F7;background-color: white;">待收货</view>
				<view class="pay-list" v-for="(item,index) in 2" :key="index" @click="goreceive">
					<image src="../../static/u25.png"></image>
					<view style="display: flex;flex-direction: column;">
						<text style="margin-bottom: 30upx;font-size: 24upx;">简约软包布艺靠背床</text>
						<text>款式：原木色</text>
						<text style="margin: 15upx 0;">规格：160cm长*190cm宽*79cm高</text>
						<view style="display: flex;align-items: center;justify-content: space-between;">
							<text>价格：￥1690.80 x 1</text>
						</view>
					</view>
				</view>
				<view class="total">
					<text>共计2件商品</text>
					<text>小计<text style="color: #40CCCB;margin-left: 20upx;">￥2680.00</text></text>
				</view>
				<view class="sure">
					<view class="again">确认收货</view>
				</view>
			</view>
			<!-- 待评价 -->
			<view class="pay">
				<view style="padding: 30upx 45upx;box-sizing: border-box;border-bottom: 1upx solid #F7F7F7;background-color: white;">待评价</view>
				<view class="pay-list" v-for="(item,index) in 2" :key="index">
					<image src="../../static/u25.png"></image>
					<view style="display: flex;flex-direction: column;">
						<text style="margin-bottom: 30upx;font-size: 24upx;">简约软包布艺靠背床</text>
						<text>款式：原木色</text>
						<text style="margin: 15upx 0;">规格：160cm长*190cm宽*79cm高</text>
						<view style="display: flex;align-items: center;justify-content: space-between;width: 100%;">
							<text style="margin-right: 40upx;">价格：￥1690.80 x 1</text>
							<view style="width: 160upx;height: 64upx;line-height: 64upx;text-align: center;color: #b3b3b3;border-radius: 10upx;border: 1upx solid #F7F7F7;font-weight: normal;">评价晒单</view>
						</view>
					</view>
				</view>
				<view class="total">
					<text>共计2件商品</text>
					<text>小计<text style="color: #40CCCB;margin-left: 20upx;">￥2680.00</text></text>
				</view>
				<view class="sure">
					<view @click="goassess">查看详情</view>
				</view>
			</view>
			<!-- 已完成 -->
			<view class="pay">
				<view style="padding: 30upx 45upx;box-sizing: border-box;border-bottom: 1upx solid #F7F7F7;background-color: white;">已完成</view>
				<view class="pay-list" v-for="(item,index) in 2" :key="index" @click="gofinish">
					<image src="../../static/u25.png"></image>
					<view style="display: flex;flex-direction: column;">
						<text style="margin-bottom: 30upx;font-size: 24upx;">简约软包布艺靠背床</text>
						<text>款式：原木色</text>
						<text style="margin: 15upx 0;">规格：160cm长*190cm宽*79cm高</text>
						<view style="display: flex;align-items: center;justify-content: space-between;">
							<text>价格：￥1690.80 x 1</text>
						</view>
					</view>
				</view>
				<view class="total">
					<text>共计2件商品</text>
					<text>小计<text style="color: #40CCCB;margin-left: 20upx;">￥2680.00</text></text>
				</view>
				<view class="sure">
					<view>删除订单</view>
				</view>
			</view>
		</view>
		<!-- 待付款 -->
		<view class="pay" style="margin-top: 230upx;" v-if="isactive==2">
			<view v-for="(item,index) in 3" :key="index" style="margin-top: 20upx;">
				<view style="padding: 30upx 45upx;box-sizing: border-box;border-bottom: 1upx solid #F7F7F7;background-color: white;">待付款</view>
				<view class="pay-list" v-for="(item,index) in 2" :key="index">
					<image src="../../static/u25.png"></image>
					<view style="display: flex;flex-direction: column;">
						<text style="margin-bottom: 30upx;font-size: 24upx;">简约软包布艺靠背床</text>
						<text>款式：原木色</text>
						<text style="margin: 15upx 0;">规格：160cm长*190cm宽*79cm高</text>
						<view style="display: flex;align-items: center;justify-content: space-between;">
							<text>价格：￥1690.80 x 1</text>
						</view>
					</view>
				</view>
				<view class="total">
					<text>共计2件商品</text>
					<text>小计<text style="color: #40CCCB;margin-left: 20upx;">￥2680.00</text></text>
				</view>
				<view class="sure">
					<view>取消订单</view>
					<view style="border: none;background-color: #40CCCB;color: white;margin-left: 20upx;" @click="gopay">去付款</view>
				</view>
			</view>
		</view>
		<!-- 待收货 -->
		<view class="pay" style="margin-top: 230upx;" v-if="isactive==3">
			<view v-for="(item,index) in 3" :key="index" style="margin-top: 20upx;" @click="goreceive">
				<view style="padding: 30upx 45upx;box-sizing: border-box;border-bottom: 1upx solid #F7F7F7;background-color: white;">待收货</view>
				<view class="pay-list" v-for="(item,index) in 2" :key="index">
					<image src="../../static/u25.png"></image>
					<view style="display: flex;flex-direction: column;">
						<text style="margin-bottom: 30upx;font-size: 24upx;">简约软包布艺靠背床</text>
						<text>款式：原木色</text>
						<text style="margin: 15upx 0;">规格：160cm长*190cm宽*79cm高</text>
						<view style="display: flex;align-items: center;justify-content: space-between;">
							<text>价格：￥1690.80 x 1</text>
						</view>
					</view>
				</view>
				<view class="total">
					<text>共计2件商品</text>
					<text>小计<text style="color: #40CCCB;margin-left: 20upx;">￥2680.00</text></text>
				</view>
				<view class="sure">
					<view class="again">确认收货</view>
				</view>
			</view>
		</view>
		<!-- 待评价 -->
		<view class="pay" style="margin-top: 230upx;" v-if="isactive==4">
			<view v-for="(item,index) in 3" :key="index" style="margin-top: 20upx;">
				<view style="padding: 30upx 45upx;box-sizing: border-box;border-bottom: 1upx solid #F7F7F7;background-color: white;">待评价</view>
				<view class="pay-list" v-for="(item,index) in 2" :key="index">
					<image src="../../static/u25.png"></image>
					<view style="display: flex;flex-direction: column;">
						<text style="margin-bottom: 30upx;font-size: 24upx;">简约软包布艺靠背床</text>
						<text>款式：原木色</text>
						<text style="margin: 15upx 0;">规格：160cm长*190cm宽*79cm高</text>
						<view style="display: flex;align-items: center;justify-content: space-between;">
							<text style="margin-right: 40upx;">价格：￥1690.80 x 1</text>
							<view @click="evaluate" style="width: 160upx;height: 64upx;line-height: 64upx;text-align: center;color: #b3b3b3;border-radius: 10upx;border: 1upx solid #F7F7F7;font-weight: normal;">评价晒单</view>
						</view>
					</view>
				</view>
				<view class="total">
					<text>共计2件商品</text>
					<text>小计<text style="color: #40CCCB;margin-left: 20upx;">￥2680.00</text></text>
				</view>
				<view class="sure">
					<view @click="goassess">查看详情</view>
				</view>
			</view>
		</view>
		<!-- 待发货 -->
		<view class="pay" style="margin-top: 230upx;" v-if="isactive==5">
			<view v-for="(item,index) in 3" :key="index" style="margin-top: 20upx;">
				<view style="padding: 30upx 45upx;box-sizing: border-box;border-bottom: 1upx solid #F7F7F7;background-color: white;">待发货</view>
				<view class="pay-list" v-for="(item,index) in 2" :key="index">
					<image src="../../static/u25.png"></image>
					<view style="display: flex;flex-direction: column;">
						<text style="margin-bottom: 30upx;font-size: 24upx;">简约软包布艺靠背床</text>
						<text>款式：原木色</text>
						<text style="margin: 15upx 0;">规格：160cm长*190cm宽*79cm高</text>
						<view style="display: flex;align-items: center;justify-content: space-between;">
							<text>价格：￥1690.80 x 1</text>
						</view>
					</view>
				</view>
				<view class="total">
					<text>共计2件商品</text>
					<text>小计<text style="color: #40CCCB;margin-left: 20upx;">￥2680.00</text></text>
				</view>
				<view class="sure">
					<view @click="gosend">查看详情</view>
				</view>
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
			gopay(){
				uni.navigateTo({
				    url: '../myorderpaydetail/myorderpaydetail'
				});
			},
			gosend(){
				uni.navigateTo({
				    url: '../myordersenddetail/myordersenddetail'
				});
			},
			goassess(){
				uni.navigateTo({
				    url: '../myorderassessdetail/myorderassessdetail'
				});
			},
			gofinish(){
				uni.navigateTo({
				    url: '../myorderfinishdetail/myorderfinishdetail'
				});
			},
			goreceive(){
				uni.navigateTo({
				    url: '../myorderreceivedetail/myorderreceivedetail'
				});
			}
		}
	}
</script>

<style>
@import url("../../css/myorder.css");
</style>
