<template>
	<view style="display: flex;flex-direction: column;height: 100%;">
		<view class="nav">
			<view class="nav-list">
				<image src="../../static/u152.png"></image>
				<view style="display: flex;align-items: center;">
					<text :class="{'active':isActive==0}" @click="select(0)">关注</text>
					<text :class="{'active':isActive==1}" @click="select(1)">推荐</text>
					<text :class="{'active':isActive==2}" @click="select(2)">体验家</text>
				</view>
				<image src="../../static/u144.png" style="height: 48upx;width: 48upx;" @click="car"></image>
			</view>
			<view class="search">
				<text></text>
				<text>上传图片，识别找家具</text>
				<image src="../../static/u150.png"></image>
			</view>
		</view>
		<swiper style="flex: 1;" :current="i" @change="selectpage">
			<swiper-item>
				<scroll-view :scroll-y="true" style="height: 100%;white-space: nowrap;">
					<follow></follow>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view :scroll-y="true" style="height: 100%;">
					<recommend :bannerinfo="data" :homeinfo="homedata" :goodsinfo="goodsdata" :productinfo="productdata" :sceneinfo="scenedata"></recommend>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view :scroll-y="true" style="height: 100%;">
					<experiencer></experiencer>
				</scroll-view>
			</swiper-item>
		</swiper>				
	</view>
</template>

<script>
	// import helper from '../../common/common.js';
	import recommend from "../../components/recommend/recommend.vue"
	import follow from "../../components/follow/follow.vue"
	import experiencer from "../../components/experiencer/experiencer.vue"
	export default {
		data() {
			return {
				isActive:1,
				i:1,
				data:[],
				homedata:[],
				goodsdata:[],
				productdata:[],
				scenedata:[],
				pages:[]
			}
		},
		components:{
			recommend,
			follow,
			experiencer
		},
		onLoad(){
			this.getData();
			this.homeData();
			this.goodsData();
			this.productData();
			this.sceneData();
			// this.pages = getCurrentPages()
			// console.log(this.pages)
			// var urls = this.pages[this.pages.length-1].__page__.route
		},
		
		methods: {
			select(type) {
				this.isActive = type;
				this.i = this.isActive;
			},
			selectpage(e){
				this.i = e.detail.current; //获取索引
				this.isActive = this.i
			},
			getData(){
				console.log('执行请求')
				uni.request({
					url:this.common.websiteUrl+"base_getbanner",
					header:{"user-token":"6a109faf305513d443337ddb1ad4cb9b"},
					method:"post",
					data:{},
					success: (res) => {
						console.log(res.data);
						// 将请求到的数据存放放到data中
						this.data = res.data.data;
					}
				});
			},
			homeData(){
				console.log('执行请求')
				uni.request({
					url:this.common.websiteUrl+"Base_get_space",
					header:{"user-token":"6a109faf305513d443337ddb1ad4cb9b"},
					method:"post",
					data:{},
					success: (res) => {
						console.log(res.data);
						// 将请求到的数据存放放到data中
						this.homedata = res.data.data;
					}
				});
			},
			goodsData(){
				console.log('执行请求')
				uni.request({
					url:this.common.websiteUrl+"Product_index_spot",
					header:{"user-token":"6a109faf305513d443337ddb1ad4cb9b"},
					method:"post",
					data:{},
					success: (res) => {
						console.log(res.data);
						// 将请求到的数据存放放到data中
						this.goodsdata = res.data.data;
					}
				});
			},
			productData(){
				console.log('执行请求')
				uni.request({
					url:this.common.websiteUrl+"Product_index_recommend",
					header:{"user-token":"6a109faf305513d443337ddb1ad4cb9b"},
					method:"post",
					data:{},
					success: (res) => {
						console.log(res.data);
						// 将请求到的数据存放放到data中
						this.productdata = res.data.data;
					}
				});
			},
			sceneData(){
				console.log('执行请求')
				uni.request({
					url:this.common.websiteUrl+"Product_index_spacepro",
					header:{"user-token":"6a109faf305513d443337ddb1ad4cb9b"},
					method:"post",
					data:{},
					success: (res) => {
						console.log(res.data);
						// 将请求到的数据存放放到data中
						this.scenedata = res.data.data;
					}
				});
			},
			car(){
				uni.navigateTo({
					url:'../car/car'
				})
				console.log(1)
			}
		}
	}
</script>

<style>
	page{
		height: 100%;
	}
	.nav{
		width: 100%;
		padding: 25upx 44upx;
		box-sizing: border-box;
		height: 210upx;
		background-color: white;
	}
	.nav-list{
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 27upx;
		font-weight: bold;
	}
	.nav-list text{
		margin-right: 40upx;
	}
	.nav-list .active{
		color: #3ecbcb;
		position: relative;
	}
	.nav-list .active::after{
		content: '';
		width: 100%;
		height: 4upx;
		background-color: #3ecbcb;
		position: absolute;
		bottom: -26upx;
		left: 0;
	}
	.nav-list text:last-child{
		margin-right: 0;
	}
	.nav-list image{
		width: 33upx;
		height: 37upx;
	}
	.search{
		display: flex;
		padding: 15upx 25upx;
		box-sizing: border-box;
		width: 100%;
		background-color: #f2f2f2;
		border-radius: 30upx;
		justify-content: space-between;
		align-items: center;
		font-size: 24upx;
		color: #a0a0a0;
		margin-top: 50upx;
	}
	.search image{
		width: 44upx;
		height: 38upx;
	}
</style>
