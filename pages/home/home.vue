<template>
	<view style="display: flex;flex-direction: column;height: 100%;">
		<view class="aline"></view>
		<view class="nav">
			<view class="nav-list">
				<image src="../../static/saoyisao_icon@2x.png"></image>
				<view style="display: flex;align-items: center;">
					<text :class="{'active':isActive==0}" @click="select(0)">关注</text>
					<text :class="{'active':isActive==1}" @click="select(1)">推荐</text>
					<text :class="{'active':isActive==2}" @click="select(2)">体验家</text>
				</view>
				<image src="../../static/gouwuchu_icon@2x.png" style="height: 48upx;width: 54upx;" @click="car"></image>
			</view>
			<view class="search">
				<view style="display: flex;align-items: center;">
					<image src="../../static/sousuo_icon@2x.png" style="width: 30upx;height: 30upx;margin-right: 10upx;"></image>
					<text>上传图片，识别找家具</text>
				</view>
				<image src="../../static/zhaopianshibie_icon@2x.png"></image>
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
					<experiencer :experienceinfo="experiencedata" :homeinfo="homenum"></experiencer>
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
				userinfo:[],
				data:[],
				homedata:[],
				goodsdata:[],
				productdata:[],
				scenedata:[],
				experiencedata:[],
				homenum:[],
				pages:[],
				lon:'',
				lat:''
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
			this.experienceData();
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
					url:this.common.websiteUrl+"base_get_space",
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
					url:this.common.websiteUrl+"product_index_spot",
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
					url:this.common.websiteUrl+"product_index_recommend",
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
					url:this.common.websiteUrl+"product_index_spacepro",
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
			async requestAndroidPermission(permisionID) {
			    var result = await permision.requestAndroidPermission(permisionID)
				return result
			},
			get_userinfo(){
				return new Promise((resolve,reject)=>{
					uni.getStorage({
				    key: 'userinfo',
				    success:(res)=>{
						console.log('获取到了')
						this.userinfo = res.data
						console.log(this.userinfo)
						resolve('suc')
						// console.log(this.userinfo)
				    },fail() {
						resolve('err')
						}
					});	
				})
			},
			
			async get_local(){
				var aa = await this.get_userinfo()
				if(this.userinfo && this.userinfo.city>0){
					// 满足条件
				}else{
					var is = this.requestAndroidPermission('android.permission.ACCESS_FINE_LOCATION')
					if(is==-1){
						// 完犊子了，永久不让用位置信息了
						return this.common.callback('您已禁止获取位置信息,部分功能可能无法展示哦')
					}
					if(is==1){
						// 获取到了
						uni.getLocation({
							type: 'wgs84',
							geocode:true,//设置该参数为true可直接获取经纬度及城市信息
							success: function (res) {
								this.lon = res.longitude
								this.lat = res.latitude
								console.log('已设置经纬度'+this.lon+','+this.lat)
							},
							fail: function () {
								this.common.callback('获取地址失败，将导致部分功能不可用')
							}
						});
					}else if(is==0){
						// 用户不允许，调用到他允许为止
						this.requestAndroidPermission('android.permission.ACCESS_FINE_LOCATION')
					}
					
				}	
			},
			
			async experienceData(){
				await this.get_local()
				if(this.userinfo){
					var data = {'city':this.userinfo.city}
				}else{
					var data = {'lon':this.lon,'lat':this.lat}
				}
				uni.request({
					url:this.common.websiteUrl+"experhome_home_index",
					header:{"user-token":"6a109faf305513d443337ddb1ad4cb9b"},
					method:"post",
					data:data,
					success: (res) => {
						this.experiencedata = res.data.data
					}
				});
				uni.request({
					url:this.common.websiteUrl+"experhome_home_num",
					header:{"user-token":"6a109faf305513d443337ddb1ad4cb9b"},
					method:"post",
					data:data,
					success: (res) => {
						this.homenum = res.data.data
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
	.aline{
		 height: var(--status-bar-height);
		  width: 100%;
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
		margin-right: 80upx;
		z-index: 1000;
	}
	.nav-list .active{
		position: relative;
	}
	.nav-list .active::after{
		content: '';
		width: 100%;
		height: 10upx;
		background: linear-gradient(to right, rgb(62,203,203) , white);
		position: absolute;
		bottom: -3upx;
		left: -10upx;
		z-index: -1;
	}
	.nav-list text:last-child{
		margin-right: 0;
	}
	.nav-list image{
		width: 48upx;
		height: 46upx;
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
