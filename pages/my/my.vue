<template>
	<view>0
		<view class="nav">
			<image src="../../static/u2179.png"></image>
			<text :class="{'active':isactive}">我的</text>
			<view>
				<image src="../../static/u2173.png" @click="setup"></image>
				<view style="position: relative;margin-left: 40upx;">
					<image src="../../static/u2174.png"></image>
					<text class="info-dot"></text>
				</view>
			</view>
		</view>
		<!-- 用户信息.登录 -->
		<view class="user">
			<view class="info" @click="personaldata">
				<view style="display: flex;">
					<view class="head">
						<image :src="headurl" v-if="isinfo==2"></image>
						<image src="../../static/u2316.png" v-if="isinfo==1"></image>
					</view>
					<view style="margin-left: 30upx;">
						<view style="margin-bottom: 30upx;">
							<text v-if="isinfo==2">{{username}}</text>
							<text v-if="isinfo==1">点击登录账号</text>
						</view>
						<view>
							<text style="color: #b6b6b6;font-weight: normal;font-size: 28upx;width: 4·00upx;text-overflow: ellipsis;white-space: nowrap;overflow: hidden;display: block;" v-if="isinfo==2">{{autograph}}</text>
							<text style="color: #b6b6b6;font-weight: normal;font-size: 28upx;" v-if="isinfo==1">登录后，收藏的内容就不会丢了</text>
						</view>
					</view>
				</view>
				<image src="../../static/u85.png" class="enter"></image>
			</view>
			<view class="handle">
				<view @click="follow">
					<text>31</text>
					<text style="font-size: 20upx;margin-top: 20upx;color: #c9c9c9;font-weight: normal;">关注</text>
				</view>
				<view @click="collect">
					<text>31</text>
					<text style="font-size: 20upx;margin-top: 20upx;color: #c9c9c9;font-weight: normal;">收藏</text>
				</view>
				<view @click="coupon">
					<text>31</text>
					<text style="font-size: 20upx;margin-top: 20upx;color: #c9c9c9;font-weight: normal;">优惠券</text>
				</view>
				<image src="../../static/u2325.png"></image>
			</view>
		</view>
		<view style="display: flex;justify-content: space-between;align-items: center;padding: 20upx 30upx;border-top: 1upx solid #F7F7F7;background-color: white;box-sizing: border-box;">
			<text>我的奖励</text>
			<view style="display: flex;align-items: center;">
				<text style="color: #c46160;margin-right: 20upx;">快去赢奖励</text>
				<image src="../../static/u85.png" style="width: 15upx;height: 26upx;"></image>
			</view>
		</view>
		<!-- 我的订单 -->
		<view class="order">
			<view class="tit">
				<text>我的订单</text>
				<view style="display: flex;align-items: center;" @click="order">
					<text style="color: #b0b0b0;">全部订单</text>
					<image src="../../static/u85.png"></image>
				</view>
			</view>
			<view class="statue">
				<view>
					<image src="../../static/u2330.png" style="height: 50upx;"></image>
					<text>待付款</text>
					<text class="num">1</text>
				</view>
				<view>
					<image src="../../static/u2332.png" style="height: 50upx;"></image>
					<text>待收货</text>
					<text class="num">1</text>
				</view>
				<view>
					<image src="../../static/u2334.png" style="width: 70upx;"></image>
					<text>待评价</text>
					<text class="num">1</text>
				</view>
				<view>
					<image src="../../static/u2082.png"></image>
					<text>售后</text>
					<text class="num">1</text>
				</view>
			</view>
		</view>
		<!-- 我的设计 -->
		<view class="design">
			<view class="designer">我的设计</view>
			<view class="design-num">
				<view @click="myhousetype">
					<text style="font-size: 36upx;font-weight: bold;">4<text style="font-size: 20upx;color: #a9a9a9;font-weight: normal;">个</text></text>
					<text style="font-size: 32upx;display: block;margin-top: 20upx;">我的户型</text>
				</view>
				<view @click="myplan">
					<text style="font-size: 36upx;font-weight: bold;">4<text style="font-size: 20upx;color: #a9a9a9;font-weight: normal;">个</text></text>
					<text style="font-size: 32upx;display: block;margin-top: 20upx;">我的方案</text>
				</view>
			</view>
		</view>
		<!-- 列表 -->
		<view class="list">
			<view style="padding: 30upx 40upx;box-sizing: border-box;justify-content: space-between;border-bottom: 1upx solid #F7F7F7;" @click="appointment">
				<view>
					<image src="../../static/u30.png" style="margin-right: 20upx;"></image>
					<text>我的预约</text>
				</view>
				<image src="../../static/u85.png" class="entry"></image>
			</view>
			<view style="padding: 30upx 40upx;box-sizing: border-box;justify-content: space-between;border-bottom: 1upx solid #F7F7F7;" @click="appointment">
				<view>
					<image src="../../static/u30.png" style="margin-right: 20upx;"></image>
					<text>体验家管理</text>
				</view>
				<image src="../../static/u85.png" class="entry"></image>
			</view>
			<view style="padding: 30upx 40upx;box-sizing: border-box;justify-content: space-between;border-bottom: 1upx solid #F7F7F7;" @click="chat">
				<view>
					<image src="../../static/u241.png" style="margin-right: 20upx;"></image>
					<text>消息中心</text>
				</view>
				<view style="display: flex;align-items: center;">
					<view style="width: 16upx;height: 16upx;background-color: #bd4c4c;border-radius: 50%;margin-right: 30upx;"></view>
					<image src="../../static/u85.png" class="entry"></image>
				</view>
			</view>
			<view style="padding: 30upx 40upx;box-sizing: border-box;justify-content: space-between;border-bottom: 1upx solid #F7F7F7;" @click="address">
				<view>
					<image src="../../static/u182.png" style="margin-right: 20upx;"></image>
					<text>收货地址</text>
				</view>
				<image src="../../static/u85.png" class="entry"></image>
			</view>
			<view style="padding: 30upx 40upx;box-sizing: border-box;justify-content: space-between;border-bottom: 1upx solid #F7F7F7;">
				<view>
					<image src="../../static/u21.png" style="margin-right: 20upx;"></image>
					<text>在线客服</text>
				</view>
				<image src="../../static/u85.png" class="entry"></image>
			</view>
			<view style="padding: 30upx 40upx;box-sizing: border-box;justify-content: space-between;border-bottom: 1upx solid #F7F7F7;" @click="sub">
				<view>
					<image src="../../static/u51.png" style="margin-right: 20upx;"></image>
					<text>设计师/品牌入驻</text>
				</view>
				<image src="../../static/u85.png" class="entry"></image>
			</view>
			<view style="padding: 30upx 40upx;box-sizing: border-box;justify-content: space-between;border-bottom: 1upx solid #F7F7F7;" @click="question">
				<view>
					<image src="../../static/u252.png" style="margin-right: 20upx;"></image>
					<text>问题反馈</text>
				</view>
				<image src="../../static/u85.png" class="entry"></image>
			</view>
		</view>
		<!-- 联系我们 -->
		<view class="settled" @click="contactus">
			<view>
				<image src="../../static/u53.png" style="margin-right: 20upx;"></image>
				<text>联系我们</text>
			</view>
			<image src="../../static/u85.png" class="entry"></image>
		</view>
	</view>
</template>

<script>
	import helper from '../../common/common.js';
	export default {
		data() {
			return {
				isactive:false,
				isinfo:1,
				username:'',
				headurl:'',
				autograph:'',
				user_id:''
			}
		},
		onPageScroll(Object){
			if(Object.scrollTop > 0){
				this.isactive = true
			}else if(Object.scrollTop == 0){
				this.isactive = false
			}
		},
		onLoad(){
			
		},
		onShow(){
			
			uni.getStorage({
				key:'userinfo',
				success:(res)=>{
					this.isinfo = 2;
					this.username = res.data.username;
					this.headurl =  helper.websiteUrl+res.data.headurl;
					this.autograph = res.data.autograph;
					this.user_id = res.data.user_id;
				}
			})
			plus.screen.lockOrientation("portrait-primary");
		},
		onUnload(){
			plus.screen.lockOrientation("portrait-primary");
		},
		methods: {
			question(){
				uni.navigateTo({
				    url: '../problemfeedback/problemfeedback'
				});
			},
			follow(){
				uni.navigateTo({
				    url: '../myfollow/myfollow'
				});
			},
			collect(){
				uni.navigateTo({
				    url: '../mycollect/mycollect'
				});
			},
			coupon(){
				uni.navigateTo({
				    url: '../mycoupon/mycoupon'
				});
			},
			order(){
				uni.navigateTo({
				    url: '../myorder/myorder'
				});
			},
			address(){
				uni.navigateTo({
				    url: '../receivingaddress/receivingaddress'
				});
			},
			appointment(){
				uni.navigateTo({
				    url: '../myappointment/myappointment'
				});
			},
			myhousetype(){
				uni.navigateTo({
				    url: '../myhousetype/myhousetype'
				});
			},
			myplan(){
				uni.navigateTo({
				    url: '../myplan/myplan'
				});
			},
			personaldata(){
				if (this.isinfo==1) {
					uni.navigateTo({
					    url: '../login/login'
					});
				} else{
					uni.navigateTo({
					    url: '../personaldata/personaldata'
					});
				}
				
			},
			sub(){
				// uni.navigateTo({
				// 	url: '../designeffect/designeffect'
				// });
				uni.navigateTo({
					url: '../settlement/settlement'
				});
			},
			chat(){
				uni.navigateTo({
					url: '../chat/chat'
				});
			},
			setup(){
				uni.navigateTo({
					url: '../setup/setup'
				});
			},
			contactus(){
				uni.navigateTo({
					url: '../contactus/contactus'
				});
			}
		}
	}
</script>

<style>
@import url("../../css/my.css");
</style>
