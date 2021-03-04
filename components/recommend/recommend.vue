<template>
	<view class="cont">
		<uni-swiper-dot :info="bannerinfo" :current="current" :mode="mode" :dotsStyles="{'bottom':20,'width':10,'selectedBackgroundColor':'#fff','backgroundColor':'rgba(225,225,225,0.5)'}">
			<swiper class="swiper" circular="true" autoplay="true" @change="change">
				<swiper-item v-for="(item,index) in bannerinfo" :key="index">
					<image :src="item.img_url"></image>
				</swiper-item>		
			</swiper>
		</uni-swiper-dot>
		<view class="dot">
			<view>
				<image src="../../static/u127.png"></image>
				<text>品牌工厂直供</text>
			</view>
			<view>
				<image src="../../static/u129.png"></image>
				<text>本地加盟商</text>
			</view>
			<view>
				<image src="../../static/u131.png"></image>
				<text>就近体验家</text>
			</view>
		</view>
		<view class="ad" style="white-space: normal;">
			<image src="../../static/u117.png"></image>
			<image src="../../static/u118.png"></image>
			<image src="../../static/u119.png"></image>
			<image src="../../static/u120.png"></image>
		</view>
		<view class="space">
			<view class="tit">
				<text>家·空间</text>
				<view>
					<text class="check">查看全部</text>
					<image src="../../static/u85.png" class="more"></image>
				</view>
			</view>
			<view>
				<view class="type">
					<image src="../../static/u114.png"></image>
					<image src="../../static/u115.png"></image>
					<image src="../../static/u116.png"></image>
				</view>
			</view>
			<view class="room">
				<view>
					<view class="bor" v-for="(item,index) in homeinfo" :key="index">
						<image :src="item.theme_img"></image>
					</view>
				</view>
			</view>
		</view>
		<image src="../../static/u82.png" class="design-ad"></image>
		<view class="now">
			<view class="tit">
				<text>现货推荐</text>
				<view>
					<text class="check">查看全部</text>
					<image src="../../static/u85.png" class="more"></image>
				</view>
			</view>
			<view class="product-list">
				<view v-for="(item,index) in goodsinfo" :key="index" @click="goodstock(item.id)">
					<image :src="getimgurl(item.pro_thum_img)"></image>
					<text>{{item.name}}</text>
					<text>￥{{item.price}}</text>
				</view>
				
			</view>
			<view class="change">
				<image src="../../static/u104.png"></image>
				<text>换一批</text>
			</view>
		</view>
		<!-- 商品列表 -->
		<view class="product">
			<view class="title">
				<view class="topic">
					<text class="a">Design Collection</text>
					<text>|</text>
					<text>专题</text>
				</view>
				<text class="num">1<text>/8</text></text>
			</view>
			<swiper class="swiper1" next-margin="50rpx" style="height: 610upx;">
				<swiper-item>
					<view style="margin-right: 20upx;">
						<image src="../../static/u160.jpg"></image>
						<text class="subject">塔塔家是强迫症患者的收纳福音</text>
						<text class="intro">从2017年开始设计从2017年开始设计从2017年开始设计从2017年开始设计从2017年开始设计从2017年开始设计从2017年开始设计从2017年开始设计</text>
					</view>
				</swiper-item>
				<swiper-item>
					<view style="margin-right: 20upx;">
						<image src="../../static/u160.jpg"></image>
						<text class="subject">塔塔家是强迫症患者的收纳福音</text>
						<text class="intro">从2017年开始设计从2017年开始设计从2017年开始设计从2017年开始设计从2017年开始设计从2017年开始设计从2017年开始设计从2017年开始设计</text>
					</view>
				</swiper-item>
				<swiper-item>
					<view style="margin-right: 20upx;">
						<image src="../../static/u160.jpg"></image>
						<text class="subject">塔塔家是强迫症患者的收纳福音</text>
						<text class="intro">从2017年开始设计从2017年开始设计从2017年开始设计从2017年开始设计从2017年开始设计从2017年开始设计从2017年开始设计从2017年开始设计</text>
					</view>
				</swiper-item>
			</swiper>
			<view style="width:140upx;margin:auto;display: flex;align-items: center;">
				<text style="font-size: 28upx;margin-right: 15upx;">查看全部</text>
				<image src="../../static/u166.png" style="width: 12upx;height: 12upx;"></image>
			</view>
		</view>
		<view class="title" style="margin-top: 20upx;padding: 50upx 50upx 0;background-color: white;">
			<view class="topic">
				<text class="a">Interior</text>
				<text>|</text>
				<text>场景</text>
			</view>
		</view>
		<view class="interior" v-for="(item,index) in sceneinfo" :key="index">
			<image :src="getimgurl(item.indeximg)" class="product-img"></image>
			<view class="kind">
				<text v-for="(item,index) in item.ficlist" :key="index">{{item.name}}</text>
			</view>
			<view class="product-detail">
				<view v-for="(item,index) in item.prolist" :key="index">
					<image :src="getimgurl(item.pro_thum_img)" ></image>
					<text>{{item.name}}</text>
					<text style="font-weight: bold;">￥{{item.price}}</text>
				</view>
			</view>
		</view>
		<!-- 为你推荐 -->
		<view class="guess">
			<image src="../../static/u222.png" class="guess-tit"></image>
			<view class="guess-list">
				<view v-for="(item,index) in productinfo" :key="index">
					<image :src="getimgurl(item.pro_thum_img)"></image>
					<text>{{item.name}}</text>
					<text>￥{{item.price}}</text>
					<image src="../../static/u198.png" class="heart"></image>
					<image src="../../static/u208.png" class="heart1"></image>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	import uniSwiperDot from "@/components/uni-swiper-dot/uni-swiper-dot.vue"
	export default {
		data() {
			return {
				mode: 'default',
				current:0,
			}
		},
		onLoad(){
			// console.log(this.props.urls)
		},
		props:['bannerinfo','homeinfo','goodsinfo','productinfo','sceneinfo','sceneinfos','sceneinfoss'],
		methods: {
			 change(e) {
				this.current = e.detail.current;
			},
			getimgurl(image){
				return"http://uniapp.ruange.com.cn/"+image
			},
			goodstock(id){
				uni.navigateTo({
					url:'../../../../productdetail/productdetail?id='+id
				})
			}
			
		},
		components:{
			uniSwiperDot
		},
		
	}
</script>

<style>
	@import url('../../css/recommend.css');
</style>
