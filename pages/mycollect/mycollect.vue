<template>
	<view>
		<view class="nav">
			<view style="width: 40upx;height: 40upx;" @click="back">
				<image src="../../static/u164.png"></image>
			</view>
			<text>我的收藏夹</text>
			<text style="color: white;">返</text>
		</view>
		<view class="collect-nav">
			<text :class="{'active':isactive==1}" @click="nav(1)">商品</text>
			<text :class="{'active':isactive==2}" @click="nav(2)">品牌</text>
			<text :class="{'active':isactive==3}" @click="nav(3)">体验家</text>
			<text :class="{'active':isactive==4}" @click="nav(4)">案例</text>
		</view>
		<!-- 商品 -->
		<view class="goods-list" v-if="isactive==1">
			<view v-for="(item,index) in 10" :key="index">
				<image src="../../static/u25.png"></image>
				<text>YEAK 怡刻</text>
				<text>实木气撑储物床</text>
				<text style="font-size: 30upx;color: #40CCCB;margin-top: 5upx;">￥6250.00</text>
			</view>
		</view>
		<!-- 品牌 -->
		<view class="brand-list" v-if="isactive==2">
			<view class="cont" v-for="(item,index) in 10" :key="index">
				<image src="../../static/u291.jpg" class="kind"></image>
				<view style="display: flex;flex-direction: column;align-items: center;width: 50%;justify-content: center;">
					<text style="color: #848484;">轻复古典雅，简美生活</text>
					<text style="font-size: 28upx;margin: 20upx 0;">亚美利家</text>
					<image src="../../static/u566.png" class="enter"></image>
				</view>
			</view>
		</view>
		<!-- 体验家 -->
		<view class="experience-list" v-if="isactive==3">
			<view class="cont1" v-for="(item,index) in 10" :key="index">
				<image src="../../static/u291.jpg" class="kind"></image>
				<view style="display: flex;flex-direction: column;align-items: center;width: 60%;justify-content: center;">
					<image src="../../static/u227.png" class="head"></image>
					<text style="font-weight: bold;margin: 10upx 0;">bella</text>
					<text style="font-size: 25upx;">北京市·望京西园三区</text>
				</view>
			</view>
		</view>
		<!-- 案例 -->
		<view class="case" v-if="isactive==4">
			<view class="case-list" v-for="(item,index) in 5" :key="index">
				<image src="../../static/u291.jpg" class="img"></image>
				<view style="display: flex;flex-direction: column;">
					<text>鲸鱼的北欧风</text>
					<text style="font-size: 20upx;color: #b2b2b2;margin-top: 20upx;">日式·三居室·150m²</text>
					<image src="../../static/u227.png" ></image>
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
		onLoad(){
		
		},
		methods: {
			getimgurl(image){
				return"http://uniapp.ruange.com.cn/"+image
			},
			nav(index){
				this.isactive = index
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
@import url("../../css/mycollect.css");
</style>
