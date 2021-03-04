<template>
	<view>
		<view class="a">
			<view class="nav">
				<view style="width: 50upx;height: 50upx;" @click="back">
					<image src="../../static/u18.png"></image>
				</view>
				<text>品牌详情</text>
				<view class="share">
					<image src="../../static/u39.png" v-if="iscollect==true" @click="uncollect"></image>
					<image src="../../static/u86.png" v-if="iscollect==false" @click="collect"></image>
					<image src="../../static/u72.png" style="margin-left: 20upx;"></image>
				</view>
			</view>
			<image :src="getimgurl(branddata.barnd.backlogo)" class="ad"></image>
			<view class="info">
				<image :src="getimgurl(branddata.barnd.logo)" class="head"></image>
				<text class="brand-name">{{branddata.barnd.name}}</text>
				<text class="brand-intro">{{branddata.barnd.introduce}}</text>
				<view class="address">
					<image src="../../static/u318.png"></image>
					<text>{{branddata.barnd.detailed_address}}</text>
				</view>
				<view class="message">
					<image src="../../static/u321.png"></image>
					<text>{{branddata.barnd.tel}}：</text>
					<text class="word">感谢户主的热情招待感谢户主的热情招待感谢户主的热情招待</text>
				</view>
			</view>
		</view>
		<view class="brand-list">
			<view class="bnav">
				<text :class="{'active':isactive==item.id}" @click="nav(item.id)" v-for="(item,index) in branddata.brand_space" :key="index">{{item.name}}</text>
			</view>
		</view>
		<scroll-view :scroll-y="s" :style="{height:h1-h2-h3+'px'}" class="brand-cont" v-if="isactive==isactive">
			<view v-for="(item,index) in productdata" :key="index">
				<image :src="getimgurl(item.pro_thum_img)"></image>
				<text>{{branddata.barnd.name}}</text>
				<text>{{item.name}}</text>
				<text style="color: black;font-weight: bold;">￥{{item.price}}</text>
			</view>
		</scroll-view>
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
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isactive:0,
				h1:'',
				h2:'',
				h3:'',
				h4:'',
				s:false,
				iscollect:true,//收藏图标
				iscollecting:false,//收藏框
				isuncollecting:false,//取消收藏框
				brandid:'',
				branddata:[],
				productdata:[],
				page:1,
				pagesize:4,
				collectis:0,
				id:''
			}
		},
		onReachBottom() {
			this.page = this.page+=1
			console.log(this.page)
			this.getproduct(this.brandid,1)
		},
		onLoad(options){
			this.brandid = options.id
			this.getbrand(1)
			this.getproduct(1,1)
			uni.getSystemInfo({
				 success:  (res) => {   
					this.h1 = res.windowHeight - uni.upx2px(25)
				}
			}),
			this.getNodesInfo()
			console.log(this.h2)
			
		},
		onPageScroll(Object){
			console.log(Object.scrollTop)
			if(Object.scrollTop >= this.h4){
				this.s = true
			}else if(Object.scrollTop < this.h4){
				this.s = false
			}
		},
		methods: {
			back(){
				uni.navigateTo({
					url:'../productdetail/productdetail?id='+this.brandid
				})
			},
			nav(index,type){
				this.isactive = index
				this.getproduct(this.brandid,2)
			},
			getimgurl(image){
				return"http://uniapp.ruange.com.cn/"+image
			},
			getNodesInfo(){
				let info1 = uni.createSelectorQuery().select(".brand-list");
				info1.boundingClientRect().exec((res)=>{
					this.h2 = res[0].height;
				})
				let info2 = uni.createSelectorQuery().select(".nav");
				info2.boundingClientRect().exec((res)=>{
					this.h3 = res[0].height-20;
				})
				let info3 = uni.createSelectorQuery().select(".a");
				info3.boundingClientRect().exec((res)=>{
					this.h4 = res[0].height;
				})
			},
			collect(){
				// 取消收藏
				this.collectis = 1
				this.iscollect = true;//取消收藏图标
				this.iscollecting = false;//添加收藏框
				this.isuncollecting = true;	//取消收藏框
				setTimeout(()=>{
					this.isuncollecting = false;
				},2000)
				uni.request({
					url:this.common.websiteUrl+"user_coll",
					header:{"user-token":"6a109faf305513d443337ddb1ad4cb9b"},
					method:"post",
					data:{
						'User_id':this.id,
						'Pid':this.branddata.barnd.id,
						'Type':2,
						'Coll_is':this.collectis
					},
					success: (res) => {}
				});
			},
			uncollect(){
				// 添加收藏
				this.collectis = 0
				this.iscollect = false;		//添加收藏图标
				this.iscollecting = true;		//添加收藏框
				this.isuncollecting = false;	//取消收藏框
				setTimeout(()=>{
					this.iscollecting = false;
				},2000)
				console.log(this.id)
				uni.request({
					url:this.common.websiteUrl+"user_coll",
					header:{"user-token":"6a109faf305513d443337ddb1ad4cb9b"},
					method:"post",
					data:{
						'user_id':this.id,
						'pid':this.branddata.barnd.id,
						'type':2,
						'coll_is':this.collectis
					},
					success: (res) => {
						console.log(res)
					}
				});
			},
			getbrand(id){
				uni.request({
					url:this.common.websiteUrl+"product_brand_index",
					header:{"user-token":"6a109faf305513d443337ddb1ad4cb9b"},
					method:"post",
					data:{
						'brand_id':id
					},
					success: (res) => {
						console.log(res.data);
						this.branddata = res.data.data;
						// 将请求到的数据存放放到data中
						uni.getStorage({
							key:'userinfo',
							success:(res)=>{
								console.log('获取到了')
								console.log(res.data.id)
								console.log(this.branddata.barnd.id)
								this.id = res.data.id
								uni.request({
									url:this.common.websiteUrl+"user_coll_see",
									header:{"user-token":"6a109faf305513d443337ddb1ad4cb9b"},
									method:"post",
									data:{
										'user_id':res.data.id,
										'pid':this.branddata.barnd.id,
										'type':2,
									},
									success: (res) => {
										//this.collectis = res.data.code
										if(res.data.code==1){
											console.log('?')
											this.iscollect = false
										}else{
											this.iscollect = true
										}
										console.log('设置')
										// console.log('获取成功了')
										// console.log(res.data)
									}
								});
							},fail:()=>{
								console.log(22222222)
							}
						})
						
					}
				});
			},
			getproduct(id,type){
				console.log(this.isactive)
				if(type==2){
					this.productdata = []
					this.page=1
				}
				console.log('111111111')
				uni.request({
					url:this.common.websiteUrl+"product_brand_get_pro",
					header:{"user-token":"6a109faf305513d443337ddb1ad4cb9b"},
					method:"post",
					data:{
						'brand_id':id,
						'brand_fic':this.isactive,
						'page':this.page,
						'pagesize':this.pagesize,
					},
					success: (res) => {
						if(res.data.code==200 && res.data.data.length>0){
							console.log(res.data);
							this.productdata = this.productdata.concat(res.data.data)
							// 将请求到的数据存放放到data中
							
						}
						
					}
				});
			}
		}
	}
</script>

<style>
@import url("../../css/branddetail.css");
</style>
