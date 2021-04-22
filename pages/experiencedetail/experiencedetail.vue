<template>
	<view>
		<view class="aline"></view>
		<view class="nav">
			<view style="width: 50upx;height: 40upx;" @click="back">
				<image src="../../static/u18.png"></image>
			</view>
			<text>体验家空间</text>
			<view style="display: flex;align-items: center;">
				<image src="../../static/u39.png" v-if="iscollect==0" @click="collect" style="width: 38upx;height: 38upx;margin-right: 20upx;"></image>
				<image src="../../static/u86.png" v-if="iscollect==1" @click="collect" style="width: 38upx;height: 38upx;margin-right: 20upx;"></image>
				<image src="../../static/u72.png" style="width: 38upx;height: 38upx;"></image>
			</view>
		</view>
		<view style="height: 160upx;"></view>
		<view class="intro">
			<image :src="this.common.getimgurl(homelist.headimg)" class="head"></image>
			<view style="display: flex;flex-direction: column;">
				<text style="color: black;">{{homelist.name}}</text>
				<text>{{homelist.style_name}}·{{homelist.layout}}居室·{{homelist.measure}}m²·{{homelist.expernum}}人体验过</text>
				<text>{{homelist.labels}}</text>
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
			<view>
				<view style="position: relative;">
					<swiper class="swiper6 tit" next-margin="20rpx" style="height: 500upx;" id="po1">
						<swiper-item v-for="(item,index) in homelist.imglist">
							<view style="margin-right: 20upx;">
								<view style="position: relative;">
									<image :src="getimgurl(item.img_url)"></image>
									<view @click="gopro(items.pro_id)" style="position: absolute;" :style="{top:items.pro_y+'%',left: items.pro_x+'%'}"   v-for="(items,indexs) in item.labels">
										<view class="sign">{{items.proname}}{{items.pro_y}}</view>
										<view class="dot"></view>
									</view>
									
								</view>
								
							</view>
						</swiper-item>
						
					</swiper>
					<view class="check" @click="check">
						<text style="margin: 20upx 0;">{{homelist.imgnum}}</text>
						<text>查看全部</text>
					</view>
				</view>
				<view style="background-color: white;padding: 20upx;box-sizing: border-box;">
					<text class="subject">{{homelist.title}}</text>
					<u-read-more  ref="uReadMore" :toggle="true" show-height="200" color="#000" close-text="更多">
							<rich-text :nodes="homelist.content"></rich-text>
					</u-read-more>
					<!-- <view style="display: flex;align-items: center;justify-content: center;margin: 20upx 0;">
						<text style="color: #a6a6a6;font-size: 22upx;">更多</text>
						<image src="../../static/u1087.png" style="width: 25upx;height: 14upx;"></image>
					</view> -->
				</view>
				
			</view>
			<!-- 商品清单 -->
			<view class="product-list tit" id="po2">
				<view style="font-size: 30upx;margin: 40upx 25upx;">商品清单</view>
				<view class="info" v-for="(item,index) in homelist.prolist" :key="index">
					<image :src="getimgurl(item.pro_thum_img)"></image>
					<view style="width: 55%;border-bottom: 1upx solid #F7F7F7;">
						<view style="display: flex;flex-direction: column;">
							<text style="font-size: 24upx;font-weight: bold;margin-bottom: 30upx;">{{item.name}}</text>
							<text style="font-size: 18upx;">{{item.path}}</text>
						</view>
						<text style="font-size: 20upx;font-weight: bold;">数量*{{item.num}}</text>
					</view>
				</view>
				<view class="total">共{{homelist.pronum}}件商品，合计买入价{{homelist.proprice}}元</view>
			</view>
			<!-- 体验评价 -->
			<view class="assess tit" id="po3">
				<view class="title" @click="allassess">
					<text style="font-size: 30upx;font-weight: bold;">体验评价</text>
					<view style="display: flex;align-items: center;">
						<text style="font-size: 22upx;color: #bebebe;">好评度<text style="color: #40CCCB;margin-left: 15upx;">{{commentsval.comments_praise}}</text></text>
						<image src="../../static/u8.png"></image>
					</view>
				</view>
				<view class="cont" v-for="(item,index) in commentsval.comments" :key="index">
					<view style="display: flex;justify-content: space-between;align-items: center;">
						<view class="head">
							<image :src="getimgurl(item.headurl)"></image>
							<text>{{item.username}}</text>
						</view>
						<view class="star">
							<image :src="item.stars>=1?'../../static/u370.png':'../../static/u373.png'"></image>
							<image :src="item.stars>=2?'../../static/u370.png':'../../static/u373.png'"></image>
							<image :src="item.stars>=3?'../../static/u370.png':'../../static/u373.png'"></image>
							<image :src="item.stars>=4?'../../static/u370.png':'../../static/u373.png'"></image>
							<image :src="item.stars>=5?'../../static/u370.png':'../../static/u373.png'"></image>
						</view>
					</view>
					<view style="margin-top: 20upx;">{{item.evaluate}}</view>
					<view style="margin-top: 15upx;color: #bebebe;">{{item.maketime}}</view>
				</view>
				<view class="all" @click="allassess">查看全部{{commentsval.comments_num}}条评论</view>
			</view>
		</scroll-view>
		<!-- 底部 -->
		<view class="footer">
			<view style="display: flex;align-items: center;" @click="address">
				<image src="../../static/u1126.png" style="width: 27upx;height: 27upx;"></image>
				<text style="font-size: 22upx;margin: 0 20upx;">{{homelist.citys}}</text>
				<image src="../../static/u8.png" style="width: 10upx;height: 18upx;"></image>
			</view>
			<view class="ordering" @click="makeapp">在线预约</view>
		</view>
		<!-- 收藏弹框 -->
		<view class="collect" v-if="iscollecting">
			<image src="../../static/u84.png"></image>
			<text>+1</text>
		</view>
		<!-- 取消收藏 -->
		<view class="uncollect" v-if="isuncollecting">
			<image src="../../static/u84.png"></image>
			<text>-1</text>
		</view>
		<!-- 查看全部图片 -->
		<view class="check-img" v-if="ischeck==true">
			<view style="display: flex;align-items: center;justify-content: space-between;padding: 30upx 35upx;box-sizing: border-box;">
				<view style="width: 50upx;height: 40upx;" @click="checkback">
					<image src="../../static/u1313.png" style="width: 20upx;height: 30upx;"></image>
				</view>
				<text>{{huadong}}/{{homelist.imgnum}}</text>
				<text></text>
			</view>
			<swiper  @change="huadongs" >
				<swiper-item :current="index" v-for="(item,index) in homelist.imglist" :key="index">
					<view style="position: relative;">
						<image :src="getimgurl(item.img_url)"></image>
						<view style="position: absolute;top: 50%;left: 50%;">
							<view class="sign"></view>
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
				huadong:1,
				iscollect:0,//收藏图标
				iscollecting:false,//收藏框
				isuncollecting:false,//取消收藏框
				ischeck:false,//查看 全部图片
				userinfo:[],
				id:0,//体验家id
				user_id:0,
				homelist:[],//体验家内容
				commentsval:[],//评论内容
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
		onLoad(options) {
			options.id=5
			this.id = options.id
			// console.log(options)
			uni.getStorage({
				key: 'userinfo',
				success:(res)=>{
					this.userinfo = res.data
					this.user_id = res.data.id
				}
			});	
			this.get_defs()
			this.comments()
		},
		onPageScroll(Object){
			if(Object.scrollTop >= this.h){
				this.sh = true
			}else if(Object.scrollTop < this.h){
				this.sh = false
			}
		},
		
		
		methods: {
			getimgurl(image){
				return this.common.websiteUrl+image
			},
			huadongs(e){
				var c = e.detail.current
				this.huadong = c + 1
				console.log(e)
			},
			get_defs(){
				let that = this
				uni.request({
					url:that.common.websiteUrl+"experhome_home_homedef",
					header:{"user-token":"6a109faf305513d443337ddb1ad4cb9b"},
					method:"post",
					data:{
							'user_id':that.user_id,
							'id':that.id
						},
					success: (res) => {
						if(res.data.code==200){
							that.homelist =res.data.data
							that.iscollect = res.data.data.coll_is
							this.$nextTick(() => {
								this.$refs.uReadMore.init();
							})
						}else{
							that.common.network()
						}
						console.log(res.data.data)
					},fail() {
						that.common.network()
					}
				});
			},
			comments(){
				let  that = this
				uni.request({
					url:that.common.websiteUrl+"experhome_owners_comments",
					header:{"user-token":"6a109faf305513d443337ddb1ad4cb9b"},
					method:"post",
					data:{
							'exper_id':that.id,
							// 'id':that.id
						},
					success: (res) => {
						if(res.data.code==200){
							that.commentsval =res.data.data
						}
						console.log(res.data.data)
					},fail() {
						that.common.network()
					}
				});
			},
			back(){
				uni.navigateBack({
				    delta: 1
				});
			},
			nav(index){
				this.isactive = index;
				this.h1 = "po"+index;
			},
			collect(){
				// 收藏
				let that =this
				uni.getStorage({
					key: 'userinfo',
					success:(res)=>{
						uni.request({
							url:that.common.websiteUrl+"user_coll",
							header:{"user-token":"6a109faf305513d443337ddb1ad4cb9b"},
							method:"post",
							data:{
									'user_id':that.user_id,
									'pid':that.id,
									'type':3,
									'coll_is':that.iscollect
								},
							success: (res) => {
								if(res.data.code==200){
									if(that.iscollect == 1){
										// 取消收藏框
										that.isuncollecting = true
										that.iscollect = 0
										setTimeout(() => {
											that.isuncollecting = false
										}, 1000);
									}else{
										// 收藏框
										that.iscollecting = true
										that.iscollect = 1
										setTimeout(() => {
											that.iscollecting = false
										}, 1000);
									}
								}else{
									that.common.network()
								}
								console.log(res.data.data)
							},fail() {
								that.common.network()
							}
						});
					},fail() {
						uni.navigateTo({
							url:'../login/login'
						})
					}
				});	
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
			makeapp(){
				uni.navigateTo({
				    url: '../orderexperience/orderexperience?id='+this.id
				});
			},
			gopro(id){
				// return console.log('处罚')
				uni.navigateTo({
				    url: '../productdetail/productdetail?id='+id
				});
			},
			allassess(){
				uni.navigateTo({
				    url: '../experienceassess/experienceassess?id='+this.id
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
