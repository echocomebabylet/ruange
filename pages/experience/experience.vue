<template>
	<view>
		<view class="all">
			<view class="nav">
				<view>
					<text>体验</text>
					<view style="align-items: center;">
						<text style="font-weight: normal;font-size: 30upx;margin-left: 30upx;">长春</text>
						<image src="../../static/u1149.png"></image>
					</view>
				</view>
				<image src="../../static/u144.png"></image>
			</view>
			<view class="local">
				<text>本地有<text style="color: black;font-weight: bold;">{{this.home_num}}</text>位体验家</text>
				<image src="../../static/u1164.png"></image>
			</view>
			<image src="../../static/u1162.jpg" class="join"></image>
			<view style="font-size: 33upx;font-weight: bold;margin: 25upx 0 16upx 40upx;">为你推荐</view>
			<view style="font-size: 26upx;color:#b8b8b8;margin-left: 40upx;">真实体验过，才不会买错</view>
			<!-- 推荐轮播 -->
			<swiper previous-margin="80px" next-margin="80px" :autoplay="true" :circular="true" :current="currentIndex" @change="swierChange">
				<swiper-item v-for="(item,i) in 5" :key="i">
					<view>
						<image src="../../static/u1160.png"  class="slide-image" :class="currentIndex === i?'active':''"></image>
					</view>
				</swiper-item>
			</swiper>
			<!-- 体验家列表 -->
			<view class="experience-list">全部体验家</view>
		</view>
		<view class="type-select" style="margin-top: 20upx;">
			<view @click="selecttype(1)">
				<text>默认排序</text>
				<image src="../../static/u1194.png"></image>
			</view>
			<view @click="selecttype(2)">
				<text>位置</text>
				<image src="../../static/u1194.png"></image>
			</view>
			<view @click="selecttype(3)">
				<text>风格</text>
				<image src="../../static/u1194.png"></image>
			</view>
			<view @click="selecttype(4)">
				<text>筛选</text>
				<image src="../../static/u1198.png" style="width: 24upx;height: 26upx;"></image>
			</view>
		</view>
		<scroll-view :scroll-y="sh" style="background-color: #f7f7f7;" :style="{height:h3-h2+'px'}">
			<view class="home-list">
				<view class="location">
					<image src="../../static/u291.jpg"></image>
					<view>
						<image src="../../static/u318.png" style="width: 22upx;height: 25upx;margin-top: 5upx;"></image>
						<text>15.0km</text>
						<text>北京·美景天城</text>
					</view>
				</view>
				<view class="intro">
					<view class="info">
						<view>
							<text>田卓的体验家</text>
							<text style="font-size: 20upx;color: #b1b1b1;font-weight: normal;">现代·一居室loft·60m²·21人体验过</text>
						</view>
						<image src="../../static/u331.png"></image>
					</view>
					<view class="detail">
						<view style="display: flex;align-items: center;justify-content: space-between;">
							<text class="tab">家具体验</text>
							<text class="tab-tit">朝阳长白路上设计师的家，地铁自驾朝阳长白路上设计师的家，地铁自驾</text>
						</view>
						<view class="tab-cont">
							<image src="../../static/u315.png"></image>
							<text class="tab-intro"><text style="color: white;">jian</text>简约的北欧风格，色彩的碰撞，正如我所以追求的简约的北欧风格，色彩的碰撞，正如我所以追求的简约的北欧风格，色彩的碰撞，正如我所以追求的简约的北欧风格，色彩的碰撞，正如我所以追求的</text>
							<text class="check">查看详情</text>
						</view> 
					</view>
					<view class="order">
						<view>
							<image src="../../static/u316.png"></image>
							<text>随时可约</text>
						</view>
						<view style="margin: 20upx 0;">
							<image src="../../static/u318.png" style="height: 30upx;"></image>
							<text style="color: #557faf;">北京市·美景天城B区</text>
							<image src="../../static/u320.png" style="width: 12upx;height:20upx;margin-left: 15upx;"></image>
						</view>
						<view>
							<image src="../../static/u321.png"></image>
							<text>152****2521:</text>
							<text class="thank">感谢户主的热情招待感谢户主的热情招待感谢户主的热情招待</text>
						</view>
					</view>
				</view>
				<view class="select1">
					<view>
						<image src="../../static/u324.png"></image>
						<text>收藏</text>
					</view>
					<view>
						<image src="../../static/u325.png"></image>
						<text>商品清单</text>
					</view>
					<view>
						<image src="../../static/u326.png"></image>
						<text>预约</text>
					</view>
				</view>
			</view>
			<view class="home-list">
				<view class="location">
					<image src="../../static/u291.jpg"></image>
					<view>
						<image src="../../static/u318.png" style="width: 22upx;height: 25upx;margin-top: 5upx;"></image>
						<text>15.0km</text>
						<text>北京·美景天城</text>
					</view>
				</view>
				<view class="intro">
					<view class="info">
						<view>
							<text>田卓的体验家</text>
							<text style="font-size: 20upx;color: #b1b1b1;font-weight: normal;">现代·一居室loft·60m²·21人体验过</text>
						</view>
						<image src="../../static/u331.png"></image>
					</view>
					<view class="detail">
						<view style="display: flex;align-items: center;justify-content: space-between;">
							<text class="tab">家具体验</text>
							<text class="tab-tit">朝阳长白路上设计师的家，地铁自驾朝阳长白路上设计师的家，地铁自驾</text>
						</view>
						<view class="tab-cont">
							<image src="../../static/u315.png"></image>
							<text class="tab-intro"><text style="color: white;">jian</text>简约的北欧风格，色彩的碰撞，正如我所以追求的简约的北欧风格，色彩的碰撞，正如我所以追求的简约的北欧风格，色彩的碰撞，正如我所以追求的简约的北欧风格，色彩的碰撞，正如我所以追求的</text>
							<text class="check">查看详情</text>
						</view> 
					</view>
					<view class="order">
						<view>
							<image src="../../static/u316.png"></image>
							<text>随时可约</text>
						</view>
						<view style="margin: 20upx 0;">
							<image src="../../static/u318.png" style="height: 30upx;"></image>
							<text style="color: #557faf;">北京市·美景天城B区</text>
							<image src="../../static/u320.png" style="width: 12upx;height:20upx;margin-left: 15upx;"></image>
						</view>
						<view>
							<image src="../../static/u321.png"></image>
							<text>152****2521:</text>
							<text class="thank">感谢户主的热情招待感谢户主的热情招待感谢户主的热情招待</text>
						</view>
					</view>
				</view>
				<view class="select1">
					<view>
						<image src="../../static/u324.png"></image>
						<text>收藏</text>
					</view>
					<view>
						<image src="../../static/u325.png"></image>
						<text>商品清单</text>
					</view>
					<view>
						<image src="../../static/u326.png"></image>
						<text>预约</text>
					</view>
				</view>
			</view>
			<view class="home-list">
				<view class="location">
					<image src="../../static/u291.jpg"></image>
					<view>
						<image src="../../static/u318.png" style="width: 22upx;height: 25upx;margin-top: 5upx;"></image>
						<text>15.0km</text>
						<text>北京·美景天城</text>
					</view>
				</view>
				<view class="intro">
					<view class="info">
						<view>
							<text>田卓的体验家</text>
							<text style="font-size: 20upx;color: #b1b1b1;font-weight: normal;">现代·一居室loft·60m²·21人体验过</text>
						</view>
						<image src="../../static/u331.png"></image>
					</view>
					<view class="detail">
						<view style="display: flex;align-items: center;justify-content: space-between;">
							<text class="tab">家具体验</text>
							<text class="tab-tit">朝阳长白路上设计师的家，地铁自驾朝阳长白路上设计师的家，地铁自驾</text>
						</view>
						<view class="tab-cont">
							<image src="../../static/u315.png"></image>
							<text class="tab-intro"><text style="color: white;">jian</text>简约的北欧风格，色彩的碰撞，正如我所以追求的简约的北欧风格，色彩的碰撞，正如我所以追求的简约的北欧风格，色彩的碰撞，正如我所以追求的简约的北欧风格，色彩的碰撞，正如我所以追求的</text>
							<text class="check">查看详情</text>
						</view> 
					</view>
					<view class="order">
						<view>
							<image src="../../static/u316.png"></image>
							<text>随时可约</text>
						</view>
						<view style="margin: 20upx 0;">
							<image src="../../static/u318.png" style="height: 30upx;"></image>
							<text style="color: #557faf;">北京市·美景天城B区</text>
							<image src="../../static/u320.png" style="width: 12upx;height:20upx;margin-left: 15upx;"></image>
						</view>
						<view>
							<image src="../../static/u321.png"></image>
							<text>152****2521:</text>
							<text class="thank">感谢户主的热情招待感谢户主的热情招待感谢户主的热情招待</text>
						</view>
					</view>
				</view>
				<view class="select1">
					<view>
						<image src="../../static/u324.png"></image>
						<text>收藏</text>
					</view>
					<view>
						<image src="../../static/u325.png"></image>
						<text>商品清单</text>
					</view>
					<view>
						<image src="../../static/u326.png"></image>
						<text>预约</text>
					</view>
				</view>
			</view>
		</scroll-view>
		
		<!-- 排序，位置，风格，筛序隐藏部分 -->
		<view class="pop" v-if="istype">
			<view class="car">
				<view>
					<text>长春</text>
					<image src="../../static/u1149.png" style="width: 20upx;height: 12upx;margin-left: 15upx;"></image>
				</view>
				<image src="../../static/u144.png"></image>
			</view>
			<view class="type-nav">
				<view @click="typeselect(1)">
					<text :class="{'tactive':isTactive==1}">默认排序</text>
					<image src="../../static/u1194.png" :style="{'display':isTactive==1?'none':'block'}"></image>
					<image src="../../static/u1364.png" :style="{'display':isTactive==1?'block':'none'}"></image>
				</view>
				<view @click="typeselect(2)">
					<text :class="{'tactive':isTactive==2}">位置</text>
					<image src="../../static/u1194.png" :style="{'display':isTactive==2?'none':'block'}"></image>
					<image src="../../static/u1364.png" :style="{'display':isTactive==2?'block':'none'}"></image>
				</view>
				<view @click="typeselect(3)">
					<text :class="{'tactive':isTactive==3}">风格</text>
					<image src="../../static/u1194.png" :style="{'display':isTactive==3?'none':'block'}"></image>
					<image src="../../static/u1364.png" :style="{'display':isTactive==3?'block':'none'}"></image>
				</view>
				<view @click="typeselect(4)">
					<text :class="{'tactive':isTactive==4}">筛选</text>
					<image src="../../static/u1198.png" style="width: 24upx;height: 26upx;" :style="{'display':isTactive==4?'none':'block'}"></image>
					<image src="../../static/u1995.png" style="width: 24upx;height: 26upx;" :style="{'display':isTactive==4?'block':'none'}"></image>
				</view>
			</view>
			<!-- 默认排序 -->
			<view class="sort" v-if="isTactive==1">
				<view @click="sortselect(1)">
					<image src="../../static/u1547.png" :style="{'display':isSactive==1?'none':'block'}"></image>
					<image src="../../static/u1450.png" :style="{'display':isSactive==1?'block':'none'}"></image>
					<text :class="{'sactive':isSactive==1}">默认排序</text>
				</view>
				<view @click="sortselect(2)">
					<image src="../../static/u1452.png" style="width: 20upx;margin-right: 24upx;height: 26upx;" :style="{'display':isSactive==2?'none':'block'}"></image>
					<image src="../../static/u1549.png" style="width: 20upx;margin-right: 24upx;height: 26upx;" :style="{'display':isSactive==2?'block':'none'}"></image>
					<text :class="{'sactive':isSactive==2}">距离最近</text>
				</view>
				<view @click="sortselect(3)">
					<image src="../../static/u1454.png" :style="{'display':isSactive==3?'none':'block'}"></image>
					<image src="../../static/u1648.png" :style="{'display':isSactive==3?'block':'none'}"></image>
					<text :class="{'sactive':isSactive==3}">人气最高</text>
				</view>
			</view>
			<!-- 位置 -->
			<view class="place" v-if="isTactive==2">
				<scroll-view :scroll-y="true">
					<text :class="{'pactive':isPactive==1}" @click="placeselect(1)">朝阳区</text>
					<text :class="{'pactive':isPactive==2}" @click="placeselect(2)">南关区</text>
					<text :class="{'pactive':isPactive==3}" @click="placeselect(3)">绿园区</text>
					<text :class="{'pactive':isPactive==4}" @click="placeselect(4)">宽城区</text>
					<text :class="{'pactive':isPactive==5}" @click="placeselect(5)">经济技术开发区</text>
					<text :class="{'pactive':isPactive==6}" @click="placeselect(6)">高新区</text>
					<text :class="{'pactive':isPactive==7}" @click="placeselect(7)">净月</text>
				</scroll-view>
				<view>
					<text style="width: 40%;color: #40cccb;">重置</text>
					<text style="width: 60%;background-color: #40cccb;color: white;">确定</text>
				</view>
			</view>
			<!-- 风格 -->
			<view class="manner" v-if="isTactive==3">
				<scroll-view :scroll-y="true">
					<text :class="{'mactive':isMactive==1}" @click="mannerselect(1)">北欧</text>
					<text :class="{'mactive':isMactive==2}" @click="mannerselect(2)">现代</text>
					<text :class="{'mactive':isMactive==3}" @click="mannerselect(3)">简美</text>
					<text :class="{'mactive':isMactive==4}" @click="mannerselect(4)">新中式</text>
					<text :class="{'mactive':isMactive==5}" @click="mannerselect(5)">日式</text>
					<text :class="{'mactive':isMactive==6}" @click="mannerselect(6)">田园风</text>
					<text :class="{'mactive':isMactive==7}" @click="mannerselect(7)">传统实木</text>
				</scroll-view>
				<view>
					<text style="width: 40%;color: #40cccb;">重置</text>
					<text style="width: 60%;background-color: #40cccb;color: white;">确定</text>
				</view>
			</view>
			<!-- 筛选 -->
			<view class="dress" v-if="isTactive==4">
				<text class="ordering">可预约时间</text>
				<view class="time">
					<text :class="{'oactive':isOactive==1}" @click="orderselect(1)">工作日白天</text>
					<text :class="{'oactive':isOactive==2}" @click="orderselect(2)">工作日晚上</text>
					<text :class="{'oactive':isOactive==3}" @click="orderselect(3)">周末白天</text>
					<text :class="{'oactive':isOactive==4}" @click="orderselect(4)">周末晚上</text>
				</view>
				<text class="ordering">户型面积</text>
				<view class="time">
					<text :class="{'nactive':isNactive==1}" @click="numselect(1)">60m²以下</text>
					<text :class="{'nactive':isNactive==2}" @click="numselect(2)">60m²-90m²</text>
					<text :class="{'nactive':isNactive==3}" @click="numselect(3)">90m²-120m²</text>
					<text :class="{'nactive':isNactive==4}" @click="numselect(4)">120m²-150m²</text>					
					<text :class="{'nactive':isNactive==5}" @click="numselect(5)">150m²以上</text>
				</view>
				<view class="sure">
					<text style="width: 40%;color: #40cccb;">重置</text>
					<text style="width: 60%;background-color: #40cccb;color: white;">确定</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import permision from "@/js_sdk/wa-permission/permission.js"
	export default {
		data() {
			return {
				currentIndex: 1,
				isTactive:1,
				isSactive:1,
				isPactive:1,
				isMactive:1,
				isOactive:1,
				isNactive:1,
				istype:false,
				sh:false,
				h:'',
				h2:'',
				h3:'',
				lon:'',//经度
				lat:'',//纬度
				userinfo:[],//用户信息
				home_num:0
			}
		},
		onReady(){
			uni.getSystemInfo({
				 success:  (res) => {   
					this.h3 = res.windowHeight - uni.upx2px(25)
				}
			}),
			this.getNodesInfo()
		},
		onLoad() {
			this.get_num()
		},
		
		
		
		methods: {
			// 判断有没有权限好做事情
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
						console.log(1)
						console.log(1)
						console.log(1)
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
			
			async get_num(){
				await this.get_local()
				if(this.userinfo){
					var data = {'city':1}
				}else{
					var data = {'lon':this.lon,'lat':this.lat}
				}
				uni.request({
					url:this.common.websiteUrl+"experhome_home_num",
					header:{"user-token":"6a109faf305513d443337ddb1ad4cb9b"},
					method:"post",
					data:data,
					success: (res) => {
						this.home_num = res.data.data
					}
				});
			},
			
			
			
			
			
			
			
			
			
			swierChange(e){
				this.currentIndex = e.detail.current
			},
			typeselect(index){
				this.isTactive = index
			},
			sortselect(index){
				this.isSactive = index
			},
			placeselect(index){
				this.isPactive = index
			},
			mannerselect(index){
				this.isMactive = index
			},
			orderselect(index){
				this.isOactive = index
			},
			numselect(index){
				this.isNactive = index
			},
			selecttype(index){
				this.istype = true;
				this.isTactive = index
			},
			getNodesInfo(){
				let info1 = uni.createSelectorQuery().select(".all");
				info1.boundingClientRect().exec((res)=>{
					this.h = res[0].height;
				})
				let info2 = uni.createSelectorQuery().select(".type-select");
				info2.boundingClientRect().exec((res)=>{
					this.h2 = res[0].height-10;
				})
			}
		},
		onPageScroll(Object){
			if(Object.scrollTop >= this.h){
				this.sh = true
			}else if(Object.scrollTop < this.h){
				this.sh = false
			}
		},
	}
</script>

<style>
@import url("../../css/experience.css");
</style>
