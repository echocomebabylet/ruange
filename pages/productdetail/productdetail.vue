<template>
	<view>
		<view class="nav">
			<image src="../../static/u18.png"></image>
			<view>
				<text :class="{'active':isactive==1}" @click="changnav(1)">商品</text>
				<text :class="{'active':isactive==2}" @click="changnav(2)">评论</text>
				<text style="margin-right: 0;" :class="{'active':isactive==3}" @click="changnav(3)">详情</text>
			</view>
			<view>
				<image src="../../static/u144.png" v-if="iscar==false"></image>
				<view v-if="iscar==true" style="position: relative;">
					<image src="../../static/u328.png"></image>
					<text class="selectnum">1</text>
				</view>
			</view>
		</view>
		<scroll-view :scroll-y="true" :scroll-into-view="h" style="height: 2000upx;" :scroll-with-animation="true" @scroll="scroll" @scrolltolower="scrolltolower">
			<!-- <uni-swiper-dot :info="info" :current="current" :mode="mode" :dotsStyles="{'bottom':20,'width':10,'selectedBackgroundColor':'#40cccc','backgroundColor':'rgba(225,225,225,0.5)'}"> -->
				<swiper class="product-swiper title" circular="true" autoplay="true" @change="change" id="po1">
					<swiper-item v-for="(item,index) in 5" :key="index">
						<image src="../../static/u333.png"></image>
					</swiper-item>		
				</swiper>
			<!-- </uni-swiper-dot> -->
			<view class="price">
				<view>
					<text style="font-size: 26upx;">{{this.productdata.shopbrand.name}}</text>
					<text style="font-size: 30upx;margin: 30upx 0;">{{this.productdata.product.name}}</text>
					<text style="font-size: 42upx;">￥{{this.productdata.product.price}}<text style="color: white;">a</text><text style="font-size: 22upx;color: #c1c0c0;text-decoration: line-through;font-weight: normal;">￥{{this.productdata.product.orig_price}}</text></text>
				</view>
				<view>
					<image src="../../static/u569.png"></image>
					<text style="font-size: 22upx;color: #c1c0c0;align-self: center;">询底价</text>
				</view>
			</view>
			<view class="info">
				<view class="coupon" @click="coupon">
					<text>可领优惠券</text>
					<view>
						<view>满1000减50</view>
						<view>满3000减300</view>
					</view>
				</view>
				<view class="type">
					<view style="margin-bottom: 80upx;" @click="model">
						<text>款式</text>
						<view>
							<text>未选择</text>
							<image src="../../static/u8.png"></image>
						</view>
					</view>
					<view @click="parameter">
						<text>参数</text>
						<view>
							<text>尺寸和参数</text>
							<image src="../../static/u8.png"></image>
						</view>
					</view>
				</view>
				<view class="count">
					<view style="display: flex;align-items: center;">
						<image src="../../static/u4601.png" class="brand"></image>
						<view style="display: flex;flex-direction: column;font-size: 28upx;">
							<text style="font-weight: bold;color: black;">MUNA 木讷</text>
							<text style="color: #c0c0c0;margin-top: 10upx;font-size: 25upx;">在售商品89件</text>
						</view>
					</view>
					<view>
						<text>进入品牌</text>
						<image src="../../static/u8.png" class="enter"></image>
					</view>
				</view>
				<view class="scene">
					<view style="display: flex;align-items: center;">
						<image src="../../static/u5562.png" class="brand"></image>
						<view style="font-size: 28upx;">
							<text style="font-weight: bold;color: black;">实景设计</text>
						</view>
					</view>
					<view>
						<text>了解一下</text>
						<image src="../../static/u8.png" class="enter"></image>
					</view>
				</view>
			</view>
			<view class="offline" @click="offlineexperience">
				<view style="display: flex;align-items: center;">
					<image src="../../static/u466.png" class="brand"></image>
					<view style="font-size: 28upx;">
						<text style="font-weight: bold;color: black;">线下体验</text>
					</view>
				</view>
				<view>
					<text>了解一下</text>
					<image src="../../static/u8.png" class="enter"></image>
				</view>
			</view>
			<!-- 评价晒图 -->
			<view class="assess">
				<view class="showimg title" id="po2">
					<text>评价晒图</text>
					<view style="font-size: 22upx;">
						<text style="color: #a2a2a2;">好评度<text style="color: #40CCCB;margin-left: 10upx;">100%</text></text>
						<image src="../../static/u8.png" class="enter"></image>
					</view>
				</view>
				<view class="assess-list">
					<view class="user">
						<view>
							<image src="../../static/u227.png" class="head"></image>
							<text>秦凯欧</text>
						</view>
						<view class="star">
							<image src="../../static/u370.png"></image>
							<image src="../../static/u370.png"></image>
							<image src="../../static/u373.png"></image>
							<image src="../../static/u373.png"></image>
							<image src="../../static/u373.png"></image>
						</view>
					</view>
					<view class="content">一开始量错家里尺寸了，买大了，联系客服佳佳换货， 服务态度很好</view>
					<view class="assessimg">
						<image src="../../static/u396.png"></image>
						<image src="../../static/u396.png"></image>
						<image src="../../static/u396.png"></image>
						<image src="../../static/u396.png"></image>
					</view>
					<text style="font-size: 20upx;color: #a5a5a5;">2018-05-05</text>
				</view>
				<view class="assess-list">
					<view class="user">
						<view>
							<image src="../../static/u227.png" class="head"></image>
							<text>秦凯欧</text>
						</view>
						<view class="star">
							<image src="../../static/u370.png"></image>
							<image src="../../static/u370.png"></image>
							<image src="../../static/u373.png"></image>
							<image src="../../static/u373.png"></image>
							<image src="../../static/u373.png"></image>
						</view>
					</view>
					<view class="content">一开始量错家里尺寸了，买大了，联系客服佳佳换货， 服务态度很好</view>
					<text style="font-size: 20upx;color: #a5a5a5;">2018-05-05</text>
				</view>
				<view class="allassess" @click="checkassess">
					<view>查看全部3条评论</view>
				</view>
			</view>
			<!-- 图文详情 -->
			<view class="detail">
				<view class="imgdetail title" id="po3">图文详情</view>
				<image src="../../static/u352.png"></image>
			</view>
		</scroll-view>
		<!-- 底部购物车 -->
		<view class="car">
			<view class="list">
				<image src="../../static/u72.png"></image>
				<image src="../../static/u335.png"></image>
				<image src="../../static/u39.png" v-if="iscollect==true" @click="uncollect"></image>
				<image src="../../static/u86.png" v-if="iscollect==false" @click="collect"></image>
			</view>
			<view class="add">
				<image src="../../static/u576.png" @click="joincar"></image>
				<image src="../../static/u577.png"></image>
			</view>
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
		<!-- 购物券隐藏部分 -->
		<view class="coupon-list" v-if="iscoupon==true">
			<view class="cont">
				<view class="coupon-nav">
					<text>可领优惠券</text>
					<image src="../../static/u259.png" @click="close()"></image>
				</view>
				<scroll-view :scroll-y="true">
					<view style="display: flex;align-items: center;margin-bottom: 20upx;">
						<view class="reduction">
							<image src="../../static/u267.png" v-if="isreceive==1"></image>
							<image src="../../static/u260.png" v-if="isreceive==2"></image>
							<view>
								<text style="font-weight: bold;">￥300</text>
								<text style="font-size: 20upx;margin-top: 20upx;">满3500.00可用</text>
							</view>
						</view>
						<view class="receive">
							<text style="font-size: 32upx;margin: 25upx 0;">沙发品类卷</text>
							<text style="font-size: 20upx;color: #9b9b9b;">有限期至2019.05.05</text>
							<view @click="receive()" v-if="isreceive==1">领取</view>
							<view v-if="isreceive==2" style="background-color: #a2a2a2;">已领取</view>
						</view>
					</view>
					<view style="display: flex;align-items: center;margin-bottom: 20upx;">
						<view class="reduction">
							<image src="../../static/u267.png" v-if="isreceive==1"></image>
							<image src="../../static/u260.png" v-if="isreceive==2"></image>
							<view>
								<text style="font-weight: bold;">￥300</text>
								<text style="font-size: 20upx;margin-top: 20upx;">满3500.00可用</text>
							</view>
						</view>
						<view class="receive">
							<text style="font-size: 32upx;margin: 25upx 0;">沙发品类卷</text>
							<text style="font-size: 20upx;color: #9b9b9b;">有限期至2019.05.05</text>
							<view @click="receive()" v-if="isreceive==1">领取</view>
							<view v-if="isreceive==2" style="background-color: #a2a2a2;">已领取</view>
						</view>
					</view>
					<view style="display: flex;align-items: center;margin-bottom: 20upx;">
						<view class="reduction">
							<image src="../../static/u267.png" v-if="isreceive==1"></image>
							<image src="../../static/u260.png" v-if="isreceive==2"></image>
							<view>
								<text style="font-weight: bold;">￥300</text>
								<text style="font-size: 20upx;margin-top: 20upx;">满3500.00可用</text>
							</view>
						</view>
						<view class="receive">
							<text style="font-size: 32upx;margin: 25upx 0;">沙发品类卷</text>
							<text style="font-size: 20upx;color: #9b9b9b;">有限期至2019.05.05</text>
							<view @click="receive()" v-if="isreceive==1">领取</view>
							<view v-if="isreceive==2" style="background-color: #a2a2a2;">已领取</view>
						</view>
					</view>
					<view style="display: flex;align-items: center;margin-bottom: 20upx;">
						<view class="reduction">
							<image src="../../static/u267.png" v-if="isreceive==1"></image>
							<image src="../../static/u260.png" v-if="isreceive==2"></image>
							<view>
								<text style="font-weight: bold;">￥300</text>
								<text style="font-size: 20upx;margin-top: 20upx;">满3500.00可用</text>
							</view>
						</view>
						<view class="receive">
							<text style="font-size: 32upx;margin: 25upx 0;">沙发品类卷</text>
							<text style="font-size: 20upx;color: #9b9b9b;">有限期至2019.05.05</text>
							<view @click="receive()" v-if="isreceive==1">领取</view>
							<view v-if="isreceive==2" style="background-color: #a2a2a2;">已领取</view>
						</view>
					</view>
					<view style="display: flex;align-items: center;margin-bottom: 20upx;">
						<view class="reduction">
							<image src="../../static/u267.png" v-if="isreceive==1"></image>
							<image src="../../static/u260.png" v-if="isreceive==2"></image>
							<view>
								<text style="font-weight: bold;">￥300</text>
								<text style="font-size: 20upx;margin-top: 20upx;">满3500.00可用</text>
							</view>
						</view>
						<view class="receive">
							<text style="font-size: 32upx;margin: 25upx 0;">沙发品类卷</text>
							<text style="font-size: 20upx;color: #9b9b9b;">有限期至2019.05.05</text>
							<view @click="receive()" v-if="isreceive==1">领取</view>
							<view v-if="isreceive==2" style="background-color: #a2a2a2;">已领取</view>
						</view>
					</view>
				</scroll-view>
				<view class="sure">确定</view>
			</view>
		</view>
		<!-- 参数隐藏部分 -->
		<view class="parameter" v-if="isparameter==true">
			<view class="pcont">
				<view class="pnav">
					<text>参数</text>
					<view style="width: 40upx;height: 40upx;" @click="pclose">
						<image src="../../static/u259.png"></image>
					</view>
				</view>
				<image src="../../static/u3122.png" class="ad"></image>
				<view class="parameter-list">
					<view>
						<text>风格</text>
						<text>北欧</text>
					</view>
					<view>
						<text>材质</text>
						<text>实木</text>
					</view>
					<view>
						<text>空间</text>
						<text>餐厅</text>
					</view>
					<view>
						<text>可定制</text>
						<text>可定制</text>
					</view>
					<view>
						<text>有抽屉</text>
						<text>无抽屉</text>
					</view><view>
						<text>可伸缩</text>
						<text>不可伸缩</text>
					</view>
				</view>
				<view class="sure" @click="pclose">确定</view>
			</view>
		</view>
		<!-- 线下体验 -->
		<view class="offline-experience" v-if="isofflineexperience==true">
			<view class="ocont">
				<view class="onav">
					<text>线下体验</text>
					<view style="width: 40upx;height: 40upx;">
						<image src="../../static/u259.png" @click="oclose"></image>
					</view>
				</view>
				<scroll-view :scroll-y="true" style="height: 800upx;padding-top: 0;">
					<view class="olist">
						<view style="position: relative;">
							<image src="../../static/u291.jpg" class="homeimg"></image>
							<view class="olocal">
								<image src="../../static/u318.png"></image>
								<text>15.0km</text>
								<text  style="margin-left: 10upx;">长春·美景天城</text>
							</view>
						</view>
						<view class="user-info">
							<text style="font-weight: bold;">田卓的体验家</text>
							<text style="color: #999999;font-size: 22upx;margin-top: 20upx;">现代·一居室loft·60m²·21人体验过</text>
							<image src="../../static/u227.png"></image>
						</view>
					</view>
					<view class="olist">
						<view style="position: relative;">
							<image src="../../static/u291.jpg" class="homeimg"></image>
							<view class="olocal">
								<image src="../../static/u318.png"></image>
								<text>15.0km</text>
								<text  style="margin-left: 10upx;">长春·美景天城</text>
							</view>
						</view>
						<view class="user-info">
							<text style="font-weight: bold;">田卓的体验家</text>
							<text style="color: #999999;font-size: 22upx;margin-top: 20upx;">现代·一居室loft·60m²·21人体验过</text>
							<image src="../../static/u227.png"></image>
						</view>
					</view>
					<view class="olist">
						<view style="position: relative;">
							<image src="../../static/u291.jpg" class="homeimg"></image>
							<view class="olocal">
								<image src="../../static/u318.png"></image>
								<text>15.0km</text>
								<text  style="margin-left: 10upx;">长春·美景天城</text>
							</view>
						</view>
						<view class="user-info">
							<text style="font-weight: bold;">田卓的体验家</text>
							<text style="color: #999999;font-size: 22upx;margin-top: 20upx;">现代·一居室loft·60m²·21人体验过</text>
							<image src="../../static/u227.png"></image>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
		<!-- 款式 -->
		<view class="model" v-if="ismodel">
			<view class="mcont">
				<view class="mnav">
					<text>款式规格</text>
					<view style="width: 30upx;height: 30upx;" @click="mclose">
						<image src="../../static/u259.png"></image>
					</view>
				</view>
				<scroll-view :scroll-y="true" style="height: 1000upx;padding-top: 0;">
					<view class="mintro">
						<image src="../../static/u3122.png"></image>
						<view>
							<text style="font-weight: bold;font-size: 28upx;">MUNA 木讷</text>
							<text style="color: #9f9f9f;">北欧简约实木多功能餐桌</text>
							<text style="color: #40CCCB;">￥3500.00</text>
						</view>
					</view>
					<view class="fashion">
						<view style="justify-content: space-between;display: flex;align-items: center;font-size: 22upx;">
							<text>款式</text>
							<text style="color: #9f9f9f;">未选择</text>
						</view>
						<view style="margin-top: 20upx;display: flex;align-items: center;">
							<view :class="{'mactive':ismactive==1}" @click="mchange(1)">柚木</view>
							<view :class="{'mactive':ismactive==2}" @click="mchange(2)">柚木</view>
							<view :class="{'mactive':ismactive==3}" @click="mchange(3)">柚木</view>
						</view>
					</view>
					<view class="fashion">
						<view style="justify-content: space-between;display: flex;align-items: center;font-size: 22upx;">
							<text>规格</text>
							<text style="color: #9f9f9f;">未选择</text>
						</view>
						<view style="margin-top: 20upx;display: flex;align-items: center;flex-wrap: wrap;">
							<view :class="{'mtactive':ismtactive==1}" @click="mtchange(1)">150cm长*105cm宽75cm高</view>
							<view :class="{'mtactive':ismtactive==2}" @click="mtchange(2)">150cm长*105cm宽75cm高</view>
							<view :class="{'mtactive':ismtactive==3}" @click="mtchange(3)">150cm长*105cm宽75cm高</view>
						</view>
					</view>
					<view class="mnum">
						<text>数量</text>
						<u-number-box v-model="value" @change="valChange" :min="1" :max="5" bg-color="#ffffff"></u-number-box>
					</view>
				</scroll-view>
				<view class="sure" @click="ordernow">加入购物车</view>
			</view>
		</view>
		<!-- 添加购物车成功 -->
		<view :class="[issuccessjoin==false?'success-join':'success-joins']">
			<image src="../../static/u897.png"></image>
			<text>添加成功，等你</text>
		</view>
	</view>
</template>

<script>
	import uniSwiperDot from "@/components/uni-swiper-dot/uni-swiper-dot.vue"
	export default {
		data() {
			return {
				// 接口部分参数
				pro_id:0,
				productdata:[],
				
				isactive:1,
				current:0,
				h:'',
				toplist:[],
				iscoupon:false,
				isreceive:1,
				isparameter:false,
				iscar:false,//购物车图标
				iscollect:true,//收藏图标
				iscollecting:false,//收藏框
				isuncollecting:false,//取消收藏框
				isofflineexperience:false,//线下体验
				ismodel:false,//规格
				ismactive:'',//款式选择
				ismtactive:'',//规格选择
				issuccessjoin:false,//购物车添加成功
				
			}
		},
		onReady(){
			this.getNodesInfo();
		},
		onLoad(options) {
			options.id = 1
			this.pro_id = options.id
			this.get_prodata()
		},
		methods: {
			
			get_prodata(){
				uni.request({
					url:this.common.websiteUrl+"product_index_details",
					header:{"user-token":"6a109faf305513d443337ddb1ad4cb9b"},
					method:"post",
					data:{
						'id':this.pro_id
					},
					success: (res) => {
						if(res.data.code==200){
							this.productdata = res.data.data;
						}else{
							// 显示网络外太空
							
						}
						console.log(res.data.data);
						// 将请求到的数据存放放到data中
						
					},fail(err) {
						//显示网络外太空
					}
				});
			},
			
			
			
			
			coupon(){
				// 优惠券显示
				this.iscoupon = true;
			},
			receive(){
				// 优惠券领取
				this.isreceive = 2
			},
			close(){
				// 优惠券关闭
				this.iscoupon = false
			},
			changnav(index){
				// 导航切换
				this.isactive = index;
				this.h = "po"+index
			},
			change(e) {
				// 轮播切换
				this.current = e.detail.current;
			},
			scroll(e){
				let scrolltop = e.target.scrollTop+100;
				let h1 = this.toplist[0];
				let h2 = this.toplist[1];
				let h3 = this.toplist[2];
				if(scrolltop>=h2&&scrolltop<h3){
					this.isactive = 2
				}else if(scrolltop>=h3){
					this.isactive = 3
				}else{
					this.isactive = 1
				}
			},
			scrolltolower(){
				setTimeout(()=>{
					this.isactive=3
				},10)
			},
			getNodesInfo(){
				const query = uni.createSelectorQuery().in(this);
				query.selectAll('.title').boundingClientRect().exec((res)=>{
					console.log(res)
					let nodes = res[0];
					let rel=[];
					nodes.map(item=>{
						rel.push(item.top)
					})
					this.toplist = rel
				})
			},
			checkassess(){
				// 查看全部评价
				uni.navigateTo({
				    url: '../assess/assess'
				});
			},
			parameter(){
				// 弹出参数框
				this.isparameter = true
			},
			pclose(){
				// 关闭参数框
				this.isparameter = false
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
			offlineexperience(){
				this.isofflineexperience =true;
				//线下体验
			},
			oclose(){
				this.isofflineexperience =false;
				// 关闭线下体验
			},
			model(){
				// 规格款式
				this.ismodel=true
			},
			mclose(){
				// 关闭规格款式
				this.ismodel =false
			},
			mchange(index){
				this.ismactive = index;
			},
			mtchange(index){
				this.ismtactive = index;
			},
			joincar(){
				// 加入购物车
				this.ismodel=true
			},
			ordernow(){
				// 关闭规格款式,立即下单
				this.ismodel =false;
				this.iscar = true;
				setTimeout(()=>{
					this.issuccessjoin = true;
				},100)
				setTimeout(()=>{
					this.issuccessjoin = false;
				},2000)
			}
		},
		components:{
			uniSwiperDot
		},
	}
</script>

<style>
@import url("../../css/productdetail.css");
</style>
