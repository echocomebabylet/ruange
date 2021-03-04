<template>
	<view>
		<view class="nav">
			<view style="width: 50upx;height: 40upx;" @click="back">
				<image src="../../static/u18.png"></image>
			</view>
			<text>体验家空间</text>
			<view style="display: flex;align-items: center;">
				<image src="../../static/u39.png" v-if="iscollect==true" @click="uncollect" style="width: 38upx;height: 38upx;margin-right: 20upx;"></image>
				<image src="../../static/u86.png" v-if="iscollect==false" @click="collect" style="width: 38upx;height: 38upx;margin-right: 20upx;"></image>
				<image src="../../static/u72.png" style="width: 38upx;height: 38upx;"></image>
			</view>
		</view>
		<view class="intro">
			<image src="../../static/u92.png" class="head"></image>
			<view style="display: flex;flex-direction: column;">
				<text style="color: black;">bella</text>
				<text>现代·一居室loft·60m²·21人体验过</text>
				<text>80后，互联网</text>
			</view>
			<view style="display: flex;flex-direction: column;align-items: center;margin-left: 40upx;">
				<image src="../../static/u1078.png" class="shareimg"></image>
				<text style="color: #f37365;">分享返利</text>
			</view>
		</view>
		<view class="menu">
			<text :class="{'active':isactive==1}" @click="nav(1)">空间信息</text>
			<text :class="{'active':isactive==2}" @click="nav(2)">商品清单</text>
			<text :class="{'active':isactive==3}" @click="nav(3)">评价</text>
		</view>
		<scroll-view :scroll-y="sh" :scroll-into-view="h1" :style="{height:h3-h2-h+'px'}" :scroll-with-animation="true" @scroll="scroll" @scrolltolower="scrolltolower">
			<!-- 空间信息 -->
			<view style="position: relative;">
				<swiper class="swiper6 tit" next-margin="20rpx" style="height: 760upx;" id="po1">
					<swiper-item>
						<view style="margin-right: 20upx;">
							<view style="position: relative;">
								<image src="../../static/u160.jpg"></image>
								<view style="position: absolute;top: 50%;left: 50%;">
									<view class="sign">黑胡桃木温润茶几</view>
									<view class="dot"></view>
								</view>
							</view>
							<text class="subject">塔塔家是强迫症患者的收纳福音</text>
							<text class="intro1">从2017年开始设计从2017年开始设计从2017年开始设计从2017年开始设计从2017年开始设计从2017年开始设计从2017年开始设计从2017年开始设计</text>
							<view style="display: flex;align-items: center;justify-content: center;">
								<text style="color: #a6a6a6;font-size: 22upx;">更多</text>
								<image src="../../static/u1087.png" style="width: 25upx;height: 14upx;"></image>
							</view>
						</view>
					</swiper-item>
					<swiper-item>
						<view style="margin-right: 20upx;">
							<view style="position: relative;">
								<image src="../../static/u160.jpg"></image>
								<view style="position: absolute;top: 50%;left: 50%;">
									<view class="sign">黑胡桃木温润茶几</view>
									<view class="dot"></view>
								</view>
							</view>
							<text class="subject">塔塔家是强迫症患者的收纳福音</text>
							<text class="intro1">从2017年开始设计从2017年开始设计从2017年开始设计从2017年开始设计从2017年开始设计从2017年开始设计从2017年开始设计从2017年开始设计</text>
							<view style="display: flex;align-items: center;justify-content: center;">
								<text style="color: #a6a6a6;font-size: 22upx;">更多</text>
								<image src="../../static/u1087.png" style="width: 25upx;height: 14upx;"></image>
							</view>
						</view>
					</swiper-item>
					<swiper-item>
						<view style="margin-right: 20upx;">
							<view style="position: relative;">
								<image src="../../static/u160.jpg"></image>
								<view style="position: absolute;top: 50%;left: 50%;">
									<view class="sign">黑胡桃木温润茶几</view>
									<view class="dot"></view>
								</view>
							</view>
							<text class="subject">塔塔家是强迫症患者的收纳福音</text>
							<text class="intro1">从2017年开始设计从2017年开始设计从2017年开始设计从2017年开始设计从2017年开始设计从2017年开始设计从2017年开始设计从2017年开始设计</text>
							<view style="display: flex;align-items: center;justify-content: center;">
								<text style="color: #a6a6a6;font-size: 22upx;">更多</text>
								<image src="../../static/u1087.png" style="width: 25upx;height: 14upx;"></image>
							</view>
						</view>
					</swiper-item>
				</swiper>
				<view class="check" @click="check">
					<text style="margin: 20upx 0;">14</text>
					<text>查看全部</text>
				</view>
			</view>
			<!-- 商品清单 -->
			<view class="product-list tit" id="po2">
				<view style="font-size: 30upx;margin: 40upx 25upx;">商品清单</view>
				<view class="info" v-for="(item,index) in 3" :key="index">
					<image src="../../static/u92.png"></image>
					<view style="width: 55%;border-bottom: 1upx solid #F7F7F7;">
						<view style="display: flex;flex-direction: column;">
							<text style="font-size: 24upx;font-weight: bold;margin-bottom: 30upx;">餐桌-伊维尔餐桌</text>
							<text style="font-size: 18upx;">520*540*180；棉麻混纺；深咖色</text>
						</view>
						<text style="font-size: 20upx;font-weight: bold;">数量*1</text>
					</view>
				</view>
				<view class="total">共34件商品，合计买入价131200元</view>
			</view>
			<!-- 体验评价 -->
			<view class="assess tit" id="po3">
				<view class="title" @click="allassess">
					<text style="font-size: 30upx;font-weight: bold;">体验评价</text>
					<view style="display: flex;align-items: center;">
						<text style="font-size: 22upx;color: #bebebe;">好评度<text style="color: #40CCCB;margin-left: 15upx;">100%</text></text>
						<image src="../../static/u8.png"></image>
					</view>
				</view>
				<view class="cont" v-for="(item,index) in 3" :key="index">
					<view style="display: flex;justify-content: space-between;align-items: center;">
						<view class="head">
							<image src="../../static/u2167.jpg"></image>
							<text>秦凯欧</text>
						</view>
						<view class="star">
							<image src="../../static/u370.png"></image>
							<image src="../../static/u370.png"></image>
							<image src="../../static/u370.png"></image>
							<image src="../../static/u373.png"></image>
							<image src="../../static/u373.png"></image>
						</view>
					</view>
					<view style="margin-top: 20upx;">我开始家里尺寸量错了，我开始家里尺寸量错了我开始家里尺寸量错了我开始家里尺寸量错了</view>
					<view style="margin-top: 15upx;color: #bebebe;">2018-07-01</view>
				</view>
				<view class="all" @click="allassess">查看全部18条评论</view>
			</view>
		</scroll-view>
		<!-- 底部 -->
		<view class="footer">
			<view style="display: flex;align-items: center;" @click="address">
				<image src="../../static/u1126.png" style="width: 27upx;height: 27upx;"></image>
				<text style="font-size: 22upx;margin: 0 20upx;">北京·周口市</text>
				<image src="../../static/u8.png" style="width: 10upx;height: 18upx;"></image>
			</view>
			<view class="ordering">在线预约</view>
		</view>
		<!-- 收藏弹框 -->
		<view class="collect" :class="[iscollecting==false ? 'collect':'collecting']">
			<image src="../../static/u84.png"></image>
			<text>+1</text>
		</view>
		<!-- 取消收藏 -->
		<view class="uncollect" :class="[isuncollecting==false ? 'uncollect':'uncollecting']">
			<image src="../../static/u84.png"></image>
			<text>-1</text>
		</view>
		<!-- 查看全部图片 -->
		<view class="check-img" v-if="ischeck==true">
			<view style="display: flex;align-items: center;justify-content: space-between;padding: 30upx 35upx;box-sizing: border-box;">
				<view style="width: 50upx;height: 40upx;" @click="checkback">
					<image src="../../static/u1313.png" style="width: 20upx;height: 30upx;"></image>
				</view>
				<text>4/14</text>
				<text></text>
			</view>
			<swiper>
				<swiper-item v-for="(item,index) in 5" :key="index">
					<view style="position: relative;">
						<image src="../../static/u160.jpg"></image>
						<view style="position: absolute;top: 50%;left: 50%;">
							<view class="sign">黑胡桃木温润茶几</view>
							<view class="dot"></view>
						</view>
					</view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				toplist:[],
				isactive:1,
				sh:false,
				h:'',
				h1:'',
				h2:'',
				h3:'',
				phoneHeight:'',
				iscollect:true,//收藏图标
				iscollecting:false,//收藏框
				isuncollecting:false,//取消收藏框
				ischeck:false,//查看 全部图片
			}
		},
		onReady(){
			uni.getSystemInfo({
				 success:  (res) => {   
					this.h3 = res.windowHeight - uni.upx2px(25)
				}
			}),
			this.getNodesInfo(),
			uni.getSystemInfo({
				success: (res) => {
					this.phoneHeight = res.windowHeight;
				}
			});
		},
		onPageScroll(Object){
			if(Object.scrollTop >= this.h){
				this.sh = true
			}else if(Object.scrollTop < this.h){
				this.sh = false
			}
		},
		
		
		methods: {
			nav(index){
				this.isactive = index;
				this.h1 = "po"+index;
			},
			collect(){
				// 取消收藏
				this.iscollect = true;//取消收藏图标
				this.iscollecting = false;//添加收藏框
				this.isuncollecting = true;	//取消收藏框
				setTimeout(()=>{
					this.isuncollecting = false;
				},2000)
			},
			uncollect(){
				// 添加收藏
				this.iscollect = false;		//添加收藏图标
				this.iscollecting = true;		//添加收藏框
				this.isuncollecting = false;	//取消收藏框
				setTimeout(()=>{
					this.iscollecting = false;
				},2000)
				
			},
			check(){
				// 查看全部图片
				this.ischeck = true
			},
			checkback(){
				// 返回查看全部图片
				this.ischeck = false
			},
			address(){
				uni.navigateTo({
				    url: '../orderaddress/orderaddress'
				});
			},
			allassess(){
				uni.navigateTo({
				    url: '../experienceassess/experienceassess'
				});
			},
			scrolltolower(){
				setTimeout(()=>{
					this.isactive=3
				},10)
			},
			scroll(e){
				let scrolltop = e.target.scrollTop;
				console.log(scrolltop);
				let h11 = this.toplist[0]-380;
				let h12 = this.toplist[1]-190;
				let h13 = this.toplist[2]-250;
				if(scrolltop>=h12&&scrolltop<h13){
					this.isactive = 2
				}else if(scrolltop>=h13){
					this.isactive = 3
				}else{
					this.isactive = 1
				}
			},
			getNodesInfo(){
				let info3 = uni.createSelectorQuery().in(this);
				info3.selectAll('.tit').boundingClientRect().exec((res)=>{
					console.log(res)
					let nodes = res[0];
					let rel=[];
					nodes.map(item=>{
						rel.push(item.top)
					})
					this.toplist = rel
				})
				let info1 = uni.createSelectorQuery().select(".menu");
				info1.boundingClientRect().exec((res)=>{
					this.h = res[0].height-20;
				})
				let info2 = uni.createSelectorQuery().select(".nav");
				info2.boundingClientRect().exec((res)=>{
					this.h2 = res[0].height;
				})
			}
		}
	}
</script>

<style>
@import url("../../css/experiencedetail.css");
</style>
