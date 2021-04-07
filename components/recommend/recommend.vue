<template>
	<view class="cont">
		<uni-swiper-dot :info="bannerinfo" :current="current" :mode="mode" :dotsStyles="{'bottom':0,'width':10,'selectedBackgroundColor':'#40cccc','backgroundColor':'rgba(64,204,204,0.3)'}">
			<swiper class="swiper" circular="true" autoplay="true" @change="change">
				<swiper-item v-for="(item,index) in bannerinfo" :key="index">
					<image :src="item.img_url"></image>
				</swiper-item>		
			</swiper>
		</uni-swiper-dot>
		<view class="dot">
			<view>
				<image src="../../static/pinpaigongchangzhigong_icon@2x.png"></image>
				<text>品牌工厂直供</text>
			</view>
			<view>
				<image src="../../static/bendijiamengshang_icon@2x.png"></image>
				<text>本地加盟商</text>
			</view>
			<view>
				<image src="../../static/jiujintiyanjia_icon@2x.png"></image>
				<text>就近体验家</text>
			</view>
		</view>
		<view class="ad">
			<view>
				<image src="../../static/guanlianhuxing_icon@2x.png"></image>
				<text>关联户型</text>
			</view>
			<view>
				<image src="../../static/zhinengdapei_icon@2x.png"></image>
				<text>智能搭配</text>
			</view>
			<view>
				<image src="../../static/wodefangan_icon@2x.png"></image>
				<text>我的方案</text>
			</view>
			<view>
				<image src="../../static/wodeshoucangi_icon@2x.png"></image>
				<text>我的收藏</text>
			</view>
		</view>
		<view class="space">
			<view class="house">
				<view>
					<text style="font-weight: bold;">90m²以下</text>
					<text style="color: #ecb68a;">装出理想家</text>
				</view>
				<view>
					<text style="font-weight: bold;">90-120m²以下</text>
					<text style="color: #ecb68a;">实用主义宝典</text>
				</view>
				<view>
					<text style="font-weight: bold;">120m²以上</text>
					<text style="color: #ecb68a;">家的多种可能性</text>
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
		<!-- 商品列表 -->
		<view class="product">
			<view class="title">
				<view class="topic">
					<text class="a">Design Collection 专题</text>
				</view>
				<view style="display: flex;align-items: center;">
					<text class="check">查看更多</text>
					<image src="../../static/u85.png" class="more"></image>
				</view>
			</view>
			<swiper class="swiper1" next-margin="50rpx" style="height: 440upx;">
				<swiper-item>
					<view style="margin-right: 20upx;">
						<image src="../../static/u291.jpg"></image>
						<text class="subject">塔塔家是强迫症患者的收纳福音</text>
						<text class="intro">从2017年开始设计从2017年开始设计从2017年开始设计从2017年开始设计从2017年开始设计从2017年开始设计从2017年开始设计从2017年开始设计</text>
					</view>
				</swiper-item>
				<swiper-item>
					<view style="margin-right: 20upx;">
						<image src="../../static/u291.jpg"></image>
						<text class="subject">塔塔家是强迫症患者的收纳福音</text>
						<text class="intro">从2017年开始设计从2017年开始设计从2017年开始设计从2017年开始设计从2017年开始设计从2017年开始设计从2017年开始设计从2017年开始设计</text>
					</view>
				</swiper-item>
				<swiper-item>
					<view style="margin-right: 20upx;">
						<image src="../../static/u291.jpg"></image>
						<text class="subject">塔塔家是强迫症患者的收纳福音</text>
						<text class="intro">从2017年开始设计从2017年开始设计从2017年开始设计从2017年开始设计从2017年开始设计从2017年开始设计从2017年开始设计从2017年开始设计</text>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="now">
			<view class="tit">
				<text>新品推荐</text>
				<view>
					<text class="check">查看更多</text>
					<image src="../../static/u85.png" class="more"></image>
				</view>
			</view>
			<swiper class="swiper2" next-margin="380rpx" style="height: 430upx;">
				<swiper-item v-for="(item,index) in goodsinfo" :key="index" @click="goodstock(item.id)">
					<view style="margin-right: 20upx;">
						<text class="subject">{{item.name}}</text>
						<text class="intro">单人沙发，扶手椅</text>
						<text style="font-size: 22upx;margin-left: 20upx;">￥</text><text class="price">{{item.price}}</text>
						<image  :src="getimgurl(item.pro_thum_img)"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="list-nav">
			<text :class="isnavlist==1?'navactive':''" @click="navlist(1)">猜你喜欢</text>
			<text :class="isnavlist==2?'navactive':''" @click="navlist(2)">卧室</text>
			<text :class="isnavlist==3?'navactive':''" @click="navlist(3)">厨房</text>
			<text :class="isnavlist==4?'navactive':''" @click="navlist(4)">客厅</text>
			<text :class="isnavlist==5?'navactive':''" @click="navlist(5)">餐厅</text>
			<text :class="isnavlist==6?'navactive':''" @click="navlist(6)">儿童房</text>
			<text :class="isnavlist==7?'navactive':''" @click="navlist(7)">衣帽间</text>
		</view>
		<view class="list-detail">
			<view v-for="(item,index) in 4" :key="index">
				<image src="../../static/u693.png"></image>
				<text class="name1">欧式简约设计小桌子</text>
				<text class="intro1">设计感床头</text>
				<text style="font-size: 20upx;margin-left: 20upx;display: inline-block;margin-right: 0;">￥</text><text class="price1" style="margin-left: 0;">180</text>
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
				isnavlist:1
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
			},
			navlist(index){
				this.isnavlist = index
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
