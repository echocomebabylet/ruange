<template>
	<view>
		<view class="nav">
			<view style="width: 50upx;height: 50upx;" @click="back">
				<image src="../../static/u18.png"></image>
			</view>
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
					<swiper-item v-for="(item,index) in imglist" :key="index">
						<image :src="getimgurl(item)"></image>
					</swiper-item>		
				</swiper>
			<!-- </uni-swiper-dot> -->
			<view class="price">
				<view>
					<text style="font-size: 26upx;" v-if="goodsdata.shopbrand">{{goodsdata.shopbrand.name}}</text>
					<text style="font-size: 30upx;margin: 30upx 0;" v-if="goodsdata.product">{{goodsdata.product.name}}</text>
					<text style="font-size: 42upx;" v-if="goodsdata.product">￥{{goodsdata.product.price}}<text style="color: white;">a</text><text style="font-size: 22upx;color: #c1c0c0;text-decoration: line-through;font-weight: normal;">￥{{this.goodsdata.product.orig_price}}</text></text>
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
							<text>{{namelist}}</text>
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
				<view class="count" @click="brand()">
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
						<text style="color: #a2a2a2;">好评度<text style="color: #40CCCB;margin-left: 10upx;" v-if="goodsdata">{{this.goodsdata.user_praise}}%</text></text>
						<image src="../../static/u8.png" class="enter"></image>
					</view>
				</view>
				<view class="assess-list" v-for="(item,index) in goodsdata.comment" :key="index">
					<view class="user">
						<view>
							<image :src="getimgurl(item.headurl)" class="head"></image>
							<text>{{item.username}}</text>
						</view>
						<view class="star" v-if="item.star==1">
							<image src="../../static/u370.png"></image>
							<image src="../../static/u373.png"></image>
							<image src="../../static/u373.png"></image>
							<image src="../../static/u373.png"></image>
							<image src="../../static/u373.png"></image>
						</view>
						<view class="star" v-if="item.star==2">
							<image src="../../static/u370.png"></image>
							<image src="../../static/u370.png"></image>
							<image src="../../static/u373.png"></image>
							<image src="../../static/u373.png"></image>
							<image src="../../static/u373.png"></image>
						</view>
						<view class="star" v-if="item.star==3">
							<image src="../../static/u370.png"></image>
							<image src="../../static/u370.png"></image>
							<image src="../../static/u370.png"></image>
							<image src="../../static/u373.png"></image>
							<image src="../../static/u373.png"></image>
						</view>
						<view class="star" v-if="item.star==4">
							<image src="../../static/u370.png"></image>
							<image src="../../static/u370.png"></image>
							<image src="../../static/u370.png"></image>
							<image src="../../static/u370.png"></image>
							<image src="../../static/u373.png"></image>
						</view>
						<view class="star" v-if="item.star==5">
							<image src="../../static/u370.png"></image>
							<image src="../../static/u370.png"></image>
							<image src="../../static/u370.png"></image>
							<image src="../../static/u370.png"></image>
							<image src="../../static/u370.png"></image>
						</view>
					</view>
					<view class="content">{{item.content}}</view>
					<view class="assessimg">
						<image :src="getimgurl(items)" v-for="(items,index) in item.imglist" :key="index"></image>
					</view>
					<text style="font-size: 20upx;color: #a5a5a5;">{{item.time}}</text>
				</view>
				
				<view class="allassess" @click="checkassess">
					<view>查看全部3条评论</view>
				</view>
			</view>
			<!-- 图文详情 -->
			<view class="detail">
				<view class="imgdetail title" id="po3">图文详情</view>
				<view style="margin: auto;width: 95%;">
					<rich-text :nodes="htmlNodes"></rich-text>
				</view>
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
				<image src="../../static/u577.png" @click="nowjoincar"></image>
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
						<image :src="getimgurl(imgurls)"></image>
						<view>
							<text style="font-weight: bold;font-size: 28upx;" v-if="goodsdata.product">{{goodsdata.product.shopbrand}}</text>
							<text style="color: #9f9f9f;" v-if="goodsdata.product">{{goodsdata.product.name}}</text>
							<text style="color: #40CCCB;">￥{{prices}}</text>
						</view>
					</view>
					<view class="fashion" v-for="(item,index) in goodsdata.main" :key="index">
						<view style="justify-content: space-between;display: flex;align-items: center;font-size: 22upx;">
							<text>{{item.name}}</text>
							<text style="color: #9f9f9f;">{{item.choice_name}}</text>
						</view>
						<view style="margin-top: 20upx;display: flex;align-items: center;">
							<view :class="items.activs" @click="mchange(index,indexs)" v-for="(items,indexs) in item.second" :key="indexs">{{items.name}}</view>
							<!-- mactive -->
						</view>
					</view>
					<view class="mnum">
						<text>数量</text>
						<u-number-box v-model="numval" @change="valChange" :min="1" :max="5" bg-color="#ffffff"></u-number-box>
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
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	import uniSwiperDot from "@/components/uni-swiper-dot/uni-swiper-dot.vue"
	export default {
		data() {
			return {
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
				issuccessjoin:false,//购物车添加成功
				joincars:false,
				nowjoincars:false,
				goodsid:'',
				goodsdata:[],
				imglist:[],
				imglists:[],
				idlist:[],
				namelist:'未选择',
				pages:'',
				cont:'',
				prices:'',
				imgurls:'',
				htmlNodes:'',
				chose_list:[],
				name_list:[],
				collectis:0,
				id:'',
				numval:1
			}
		},
		onReady(){
			this.getNodesInfo();
		},
		onLoad(options){
			this.goodsid = options.id
			this.getgoodstock(options.id)
			
			this.pages = options.urls
			console.log(this.id)
			this.getNodesInfo();
		},
		methods: {
			callback(Error){
				 console.log("name",Error);
				this.$refs.uToast.show({
					title: Error,
					type: 'default',
					// url: '../tellogin/tellogin'
				})
				 
			},
			back(){
				uni.switchTab({
				    url:'/'+pages
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
			checkassess(id){
				uni.navigateTo({
					url: '../assess/assess?id='+this.goodsdata.product.id
				});
				// 查看全部评价
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
				this.collectis = 1
				this.iscollect = true;//取消收藏图标
				this.iscollecting = false;//添加收藏框
				this.isuncollecting = true;	//取消收藏框
				setTimeout(()=>{
					this.isuncollecting = false;
				},2000)
				console.log(this.id)
				uni.request({
					url:this.common.websiteUrl+"user_coll",
					header:{"user-token":"6a109faf305513d443337ddb1ad4cb9b"},
					method:"post",
					data:{
						'user_id':this.id,
						'pid':this.goodsdata.product.id,
						'type':1,
						'coll_is':this.collectis
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
						'pid':this.goodsdata.product.id,
						'type':1,
						'coll_is':this.collectis
					},
					success: (res) => {}
				});
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
			mchange(index,index2){
				for (var i = 0; i < this.goodsdata.main[index]['second'].length; i++) {
					this.goodsdata.main[index]['second'][i].activs = ''
				}
				this.goodsdata.main[index]['second'][index2].activs = 'mactive'
				this.goodsdata.main[index]['choice_name'] = this.goodsdata.main[index]['second'][index2].name
				this.chose_list[index] = this.goodsdata.main[index]['second'][index2].id
				this.name_list[index] = this.goodsdata.main[index]['second'][index2].name
				this.idlist = this.chose_list.join(",")
				this.namelist = this.name_list.join("-")
				console.log(this.idlist)
				if(this.chose_list.length == this.goodsdata.main.length){
					uni.request({
						url:this.common.websiteUrl+"product_index_para",
						header:{"user-token":"6a109faf305513d443337ddb1ad4cb9b"},
						method:"post",
						data:{
							'reals':this.idlist
						},
						success: (res) => {
							this.prices = res.data.data.price
							this.imgurls = res.data.data.img_url
							console.log(res.data.data)
						}
					});
				}
				
				
			},
			valChange(e){
				this.numval = e.value
				console.log(this.numval)
			},
			joincar(){
				// 加入购物车
				if(this.goodsdata.main.length > 0){
					this.ismodel=true
					this.joincars=true
					this.nowjoincars=false
				}else{
					this.iscar = true
					this.issuccessjoin =true
					setTimeout(()=>{
						this.issuccessjoin = false;
					},2000)
				}
				console.log(this.goodsdata.product.id)
				console.log(this.id)
				uni.request({
					url:this.common.websiteUrl+"user_cart_add",
					header:{"user-token":"6a109faf305513d443337ddb1ad4cb9b"},
					method:"post",
					data:{
						'user_id':this.id,
						'pro_id':this.goodsdata.product.id,
						'reals':this.idlist,
						'pro_num':this.numval
					},
					success: (res) => {}
				});
			},
			nowjoincar(){
				// 立即下单
				if(this.goodsdata.main.length > 0){
					this.ismodel=true
					this.nowjoincars=true
					this.joincars=false
				}else{
					uni.navigateTo({
						url:'../buildorder/buildorder'
					})
				}
			},
			ordernow(){
				// 关闭规格款式,立即下单
				console.log(this.goodsdata.product.id)
				if(this.chose_list.length == this.goodsdata.main.length){
					console.log(this.id)
					console.log(this.goodsdata.product.id)
					console.log(this.idlist)
					console.log(this.numval)
					if(this.joincars == true){
						this.ismodel =false;
						this.iscar = true;
						setTimeout(()=>{
							this.issuccessjoin = true;
						},100)
						setTimeout(()=>{
							this.issuccessjoin = false;
						},2000)
						
					}else if(this.nowjoincars == true){
						uni.navigateTo({
							url:'../buildorder/buildorder'
						})
					}else if(this.nowjoincars == false && this.joincars == false){
						this.ismodel=false
						this.iscar = true
						this.issuccessjoin =true
						setTimeout(()=>{
							this.issuccessjoin = false;
						},2000)
					}
					uni.request({
						url:this.common.websiteUrl+"user_cart_add",
						header:{"user-token":"6a109faf305513d443337ddb1ad4cb9b"},
						method:"post",
						data:{
							'user_id':this.id,
							'pro_id':this.goodsdata.product.id,
							'reals':this.idlist,
							'pro_num':this.numval
						},
						success: (res) => {
							console.log('yanghang')
						}
					});
				}else{
					this.callback('请选择参数');
				}
				
			},
			getimgurl(image){
				return"http://uniapp.ruange.com.cn/"+image
			},
			getgoodstock(id){
				uni.request({
					url:this.common.websiteUrl+"product_index_details",
					header:{"user-token":"6a109faf305513d443337ddb1ad4cb9b"},
					method:"post",
					data:{
						'id':id
					},
					success: (res) => {
						console.log(res.data);
						// 将请求到的数据存放放到data中
						this.goodsdata = res.data.data;
						this.imglist = res.data.data.product.pro_imglist.split("|")
						for(var i = 0 ; i < res.data.data.comment.length ; i++){
							this.goodsdata.comment[i].imglist = res.data.data.comment[i].imglist.split("|")
							var nowdate = new Date(res.data.data.comment[i].time * 1000);
							this.goodsdata.comment[i].time = nowdate.getFullYear()+'-'+nowdate.getMonth()+1+'-'+nowdate.getDate()
						}
						this.prices = res.data.data.product.price
						this.imgurls = res.data.data.product.pro_thum_img
						this.htmlNodes = res.data.data.product.content
						var richtext= res.data.data.product.content;
						const regex = new RegExp('<img', 'gi');
						richtext= richtext.replace(regex, `<img style="max-width: 100%;"`);
						
						this.htmlNodes = richtext;
						uni.getStorage({
							key:'userinfo',
							success:(res)=>{
								console.log('获取到了')
								console.log(res.data.id)
								this.id = res.data.id
								uni.request({
									url:this.common.websiteUrl+"user_coll_see",
									header:{"user-token":"6a109faf305513d443337ddb1ad4cb9b"},
									method:"post",
									data:{
										'user_id':res.data.id,
										'pid':this.goodsdata.product.id,
										'type':1,
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
			brand(){
				uni.navigateTo({
					url:'../branddetail/branddetail?id='+this.goodsdata.shopbrand.id
				})
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
