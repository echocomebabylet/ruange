<template>
	<view>
		<view class="all">
			<view class="bg-img"  :style="{backgroundImage:'url('+bgImg+')'}">
				<view :class="spage==false?'aline':'saline'"></view>
				<view class="nav">
					<view>
						<text>体验</text>
						<view style="align-items: center;margin-left: 20upx;">
							<!-- <text style="font-weight: normal;font-size: 30upx;margin-left: 30upx;">长春</text>
							<image src="../../static/u1149.png"></image> -->
							<select style="border: none;outline: none;font-size: 30upx;padding-bottom: 10upx;background-color: #ececee;">
								<option v-for="(item,index) in citylist" :key="item.id" value="item.id">{{item.name}}</option>
								
							</select>
						</view>
					</view>
					<image src="../../static/u144.png"></image>
				</view>
				<view class="local"  :style="{backgroundImage:'url('+bgimg+')'}">
					<text style="font-size: 24upx;">本地有</text>
					<text style="font-size: 32upx;margin: 0 5upx;">80</text>
					<text style="font-size: 24upx;">位体验家</text>
					<view style="display: flex;justify-content: space-between;margin: 40upx 0;align-items: center;">
						<text style="font-size: 70upx;font-weight: bold;">体验家</text>
						<text style="font-size: 30upx;">加入他们 ></text>
					</view>
					<text style="font-size: 28upx;">全新的软装购买模式点击了解更多</text>
				</view>
				<image src="../../static/bottom.png" class="bottomimg"></image>
			</view>
			<view style="font-size: 33upx;font-weight: bold;margin: 25upx 0 16upx 40upx;">为你推荐</view>
			<view style="font-size: 26upx;color:#b8b8b8;margin-left: 40upx;">真实体验过，才不会买错</view>
			<!-- 推荐轮播 -->
			<swiper previous-margin="80px" next-margin="80px" :autoplay="true" :circular="true" :current="currentIndex" @change="swierChange">
				<swiper-item v-for="(item,index) in home_recom" :key="item.id">
					<view>
						<image :src="common.getimgurl(item.coverimg)" @click="go_exper(item.id)" class="slide-image" :class="currentIndex === index?'active':''"></image>
					</view>
				</swiper-item>
			</swiper>
			<!-- 体验家列表 -->
			<view class="experience-list">全部体验家</view>
		</view>
		<view class="type-select" style="margin-top: 20upx;">
			<view @click="selecttype(1)">
				<text :style="isSactive!=0?'color:#40cccc':'color:#000'">{{choice_pxname}}</text>
				<image src="../../static/u1194.png"></image>
			</view>
			<view @click="selecttype(2)">
				<text :style="isPactive!=0?'color:#40cccc':'color:#000'">{{choice_areaname}}</text>
				<image src="../../static/u1194.png"></image>
			</view>
			<view @click="selecttype(3)">
				<text :style="isMactive!=0?'color:#40cccc':'color:#000'">{{choice_stylename}}</text>
				<image src="../../static/u1194.png"></image>
			</view>
			<view @click="selecttype(4)">
				<text :style="isOactive!=0||isNactive!=0?'color:#40cccc':'color:#000'">筛选</text>
				<image src="../../static/u1198.png" style="width: 24upx;height: 26upx;"></image>
			</view>
		</view>
		<scroll-view :scroll-y="sh" style="background-color: #f7f7f7;" :style="{height:h3-h2+'px'}">
			<view class="home-list" v-for="(item,index) in experlist" :key="item.id">
				<view class="location" @click="go_exper(item.id)">
					<image :src="common.getimgurl(item.coverimg)"></image>
					<view v-if="item.kms>0 && item.kms!=''">
						<image src="../../static/u318.png" style="width: 22upx;height: 25upx;margin-top: 5upx;"></image>
						<text>{{item.kms}}km</text>
						<text>{{item.quarters}}</text>
					</view>
				</view>
				<view class="intro">
					<view class="info" @click="go_exper(item.id)">
						<view>
							<text>{{item.name}}</text>
							<text style="font-size: 20upx;color: #b1b1b1;font-weight: normal;">{{item.style_name}}·{{item.labels}}·{{item.measure}}m²·21人体验过</text>
						</view>
						<image :src="common.getimgurl(item.headimg)"></image>
					</view>
					<view class="detail" @click="go_exper(item.id)">
						<view style="display: flex;align-items: center;justify-content: space-between;">
							<text class="tab">家具体验</text>
							<text class="tab-tit">{{item.title}}</text>
						</view>
						<view class="tab-cont">
							<image src="../../static/u315.png"></image>
							<text class="tab-intro"><text style="color: white;">jian</text>{{item.content}}</text>
							<text class="check">查看详情</text>
						</view> 
					</view>
					<view class="order">
						<view>
							<image src="../../static/u316.png"></image>
							<text v-if="item.makeapp==1">工作日白天</text>
							<text v-if="item.makeapp==2">工作日晚上</text>
							<text v-if="item.makeapp==3">周末白天</text>
							<text v-if="item.makeapp==4">周末晚上</text>
							<text v-if="item.makeapp==5">随时可约</text>
						</view>
						<view style="margin: 20upx 0;" @click="go_map()">
							<image src="../../static/u318.png" style="height: 30upx;"></image>
							<text style="color: #557faf;">{{item.address}}·{{item.quarters}}</text>
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
					<view @click="coll(item.id)">
						<image src="../../static/u324.png"></image>
						<text>收藏</text>
					</view>
					<view @click="go_exper(item.id)">
						<image src="../../static/u325.png"></image>
						<text>商品清单</text>
					</view>
					<view @click="go_makeapp()">
						<image src="../../static/u326.png"></image>
						<text>预约</text>
					</view>
				</view>
			</view>
			<!-- 
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
			</view> -->
		</scroll-view>
		
		<!-- 排序，位置，风格，筛序隐藏部分 -->
		<view class="pop" v-if="istype" @click.stop="nothing">
			<view class="car" @click.stop="cars">
				<view>
					<text>长春</text>
					<image src="../../static/u1149.png" style="width: 20upx;height: 12upx;margin-left: 15upx;"></image>
				</view>
				<image src="../../static/u144.png" @click="car"></image>
			</view>
			<view class="type-nav">
				<view @click.stop="typeselect(1)">
					<text :class="{'tactive':isTactive==1}">{{choice_pxname}}</text>
					<image src="../../static/u1194.png" :style="{'display':isTactive==1?'none':'block'}"></image>
					<image src="../../static/u1364.png" :style="{'display':isTactive==1?'block':'none'}"></image>
				</view>
				<view @click.stop="typeselect(2)">
					<text :class="{'tactive':isTactive==2}">{{choice_areaname}}</text>
					<image src="../../static/u1194.png" :style="{'display':isTactive==2?'none':'block'}"></image>
					<image src="../../static/u1364.png" :style="{'display':isTactive==2?'block':'none'}"></image>
				</view>
				<view @click.stop="typeselect(3)">
					<text :class="{'tactive':isTactive==3}">{{choice_stylename}}</text>
					<image src="../../static/u1194.png" :style="{'display':isTactive==3?'none':'block'}"></image>
					<image src="../../static/u1364.png" :style="{'display':isTactive==3?'block':'none'}"></image>
				</view>
				<view @click.stop="typeselect(4)">
					<text :class="{'tactive':isTactive==4}">筛选</text>
					<image src="../../static/u1198.png" style="width: 24upx;height: 26upx;" :style="{'display':isTactive==4?'none':'block'}"></image>
					<image src="../../static/u1995.png" style="width: 24upx;height: 26upx;" :style="{'display':isTactive==4?'block':'none'}"></image>
				</view>
			</view>
			<!-- 默认排序 -->
			<view class="sort" v-if="isTactive==1">
				<view @click.stop="sortselect(1)">
					<image src="../../static/u1547.png" :style="{'display':isSactive==1?'none':'block'}"></image>
					<image src="../../static/u1450.png" :style="{'display':isSactive==1?'block':'none'}"></image>
					<text :class="{'sactive':isSactive==1}">默认排序</text>
				</view>
				<view @click.stop="sortselect(2)">
					<image src="../../static/u1452.png" style="width: 20upx;margin-right: 24upx;height: 26upx;" :style="{'display':isSactive==2?'none':'block'}"></image>
					<image src="../../static/u1549.png" style="width: 20upx;margin-right: 24upx;height: 26upx;" :style="{'display':isSactive==2?'block':'none'}"></image>
					<text :class="{'sactive':isSactive==2}">距离最近</text>
				</view>
				<view @click.stop="sortselect(3)">
					<image src="../../static/u1454.png" :style="{'display':isSactive==3?'none':'block'}"></image>
					<image src="../../static/u1648.png" :style="{'display':isSactive==3?'block':'none'}"></image>
					<text :class="{'sactive':isSactive==3}">人气最高</text>
				</view>
			</view>
			<!-- 位置 -->
			<view class="place" v-if="isTactive==2">
				<scroll-view :scroll-y="true">
					<text v-for="(item,index) in arealist" :class="{'pactive':isPactive==item.id}" @click.stop="placeselect(item.id,index)">{{item.name}}</text>
			<!-- 		<text :class="{'pactive':isPactive==2}" @click.stop="placeselect(2)">南关区</text>
					<text :class="{'pactive':isPactive==3}" @click.stop="placeselect(3)">绿园区</text>
					<text :class="{'pactive':isPactive==4}" @click.stop="placeselect(4)">宽城区</text>
					<text :class="{'pactive':isPactive==5}" @click.stop="placeselect(5)">经济技术开发区</text>
					<text :class="{'pactive':isPactive==6}" @click.stop="placeselect(6)">高新区</text>
					<text :class="{'pactive':isPactive==7}" @click.stop="placeselect(7)">净月</text> -->
				</scroll-view>
				<view>
					<text style="width: 40%;color: #40cccb;" @click.stop="isPactive=0;choice_areaname='位置'">重置</text>
					<text style="width: 60%;background-color: #40cccb;color: white;" @click="sure">确定</text>
				</view>
			</view>
			<!-- 风格 -->
			<view class="manner" v-if="isTactive==3">
				<scroll-view :scroll-y="true">
					<text v-for="(item,index) in stylelist" :class="{'mactive':isMactive==item.id}" @click.stop="mannerselect(item.id,index)">{{item.name}}</text>
					<!-- <text :class="{'mactive':isMactive==2}" @click.stop="mannerselect(2)">现代</text>
					<text :class="{'mactive':isMactive==3}" @click.stop="mannerselect(3)">简美</text>
					<text :class="{'mactive':isMactive==4}" @click.stop="mannerselect(4)">新中式</text>
					<text :class="{'mactive':isMactive==5}" @click.stop="mannerselect(5)">日式</text>
					<text :class="{'mactive':isMactive==6}" @click.stop="mannerselect(6)">田园风</text>
					<text :class="{'mactive':isMactive==7}" @click.stop="mannerselect(7)">传统实木</text> -->
				</scroll-view>
				<view>
					<text style="width: 40%;color: #40cccb;" @click.stop="isMactive=0;choice_stylename='风格'">重置</text>
					<text style="width: 60%;background-color: #40cccb;color: white;" @click="sure">确定</text>
				</view>
			</view>
			<!-- 筛选 -->
			<view class="dress" v-if="isTactive==4">
				<text class="ordering">可预约时间</text>
				<view class="time">
					<text :class="{'oactive':isOactive==1}" @click.stop="orderselect(1)">工作日白天</text>
					<text :class="{'oactive':isOactive==2}" @click.stop="orderselect(2)">工作日晚上</text>
					<text :class="{'oactive':isOactive==3}" @click.stop="orderselect(3)">周末白天</text>
					<text :class="{'oactive':isOactive==4}" @click.stop="orderselect(4)">周末晚上</text>
				</view>
				<text class="ordering">户型面积</text>
				<view class="time">
					<text :class="{'nactive':isNactive==1}" @click.stop="numselect(1)">60m²以下</text>
					<text :class="{'nactive':isNactive==2}" @click.stop="numselect(2)">60m²-90m²</text>
					<text :class="{'nactive':isNactive==3}" @click.stop="numselect(3)">90m²-120m²</text>
					<text :class="{'nactive':isNactive==4}" @click.stop="numselect(4)">120m²-150m²</text>					
					<text :class="{'nactive':isNactive==5}" @click.stop="numselect(5)">150m²以上</text>
				</view>
				<view class="sure">
					<text style="width: 40%;color: #40cccb;" @click.stop="isOactive=0;isNactive=0">重置</text>
					<text style="width: 60%;background-color: #40cccb;color: white;" @click="sure">确定</text>
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
				isSactive:0,//默认排序
				isPactive:0,//区级城市
				isMactive:0,//选择的风格
				isOactive:0,//白天晚上
				isNactive:0,//面积
				istype:false,
				sh:false,
				h:'',
				h2:'',
				h3:'',
				lon:'',//经度
				lat:'',//纬度
				userinfo:[],//用户信息
				home_num:0,//本地体验家数量
				home_recom:[],//为你推荐6个体验家
				citylist:[],//市列表
				arealist:[],//相关区列表
				stylelist:[],//风格列表
				choice_stylename:'风格',
				choice_areaname:'位置',
				choice_pxname:'默认排序',
				page:1,//分页
				pagesize:4,//分页数量
				experlist:[],//体验家数据
				up_is:true,//是否允许下拉刷新，避免无数据重复调用接口占用资源
				bgImg:require("@/static/a10@2x.png"),
				bgimg:require("@/static/cardbg@2x.png"),
				spage:false
				
				
				
				
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
			this.get_recom()
			this.city()
			this.style()
			// this.getdatalist()
		},
		
		onReachBottom() {
			this.page++
			this.get_datalist()
		},
		onPageScroll(e){
			if(e.scrollTop>0){
				this.spage = true
			}
			console.log(e)
		},
		methods: {
			get_datalist(){
				let that = this
				
				uni.request({
					url:that.common.websiteUrl+"experhome_home_index",
					header:{"user-token":"6a109faf305513d443337ddb1ad4cb9b"},
					method:"post",
					data:{
							'city':that.userinfo.city,
							'lon':that.lon,
							'lat':that.lat,
							'choice_area':that.isPactive,
							'choice_style':that.isMactive,
							'choice_worktime':that.isOactive,
							'choice_measure':that.isNactive,
							'defsort':that.isSactive,
							'page':that.page,
							'pagesize':that.pagesize
						},
					success: (res) => {
						if(res.data.code==200){
							that.experlist = that.experlist.concat(res.data.data) 
						}else{
							that.common.callback('暂无更多')
						}
						console.log(res.data.data)
					},fail() {
						that.common.network()
					}
				});
			},
			nothing(){
				this.istype = false
			},
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
						this.userinfo = res.data
						resolve('suc')
				    },fail() {
						resolve('err')
						}
					});	
				})
			},
			
			car(){
				uni.navigateTo({
					url:'../car/car'
				})
			},
			
			sure(){
				this.istype = false
				this.page = 1
				this.experlist = []
				this.get_datalist()
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
					var data = {'city':this.userinfo.city}
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
				let that = this
				that.get_recom()
				that.get_datalist()
			},
			
			
			
			get_recom(){
				if(this.userinfo){
					var data = {'city':this.userinfo.city}
				}else{
					var data = {'lon':this.lon,'lat':this.lat}
				}
				uni.request({
					url:this.common.websiteUrl+"experhome_home_recom",
					header:{"user-token":"6a109faf305513d443337ddb1ad4cb9b"},
					method:"post",
					data:data,
					success: (res) => {
						if(res.data.code==200){
							this.home_recom = res.data.data
						}else{
							this.common.callback('暂无更多推荐')
						}
					}
				});
				uni.request({
					url:this.common.websiteUrl+"service_area",
					header:{"user-token":"6a109faf305513d443337ddb1ad4cb9b"},
					method:"post",
					data:data,
					success: (res) => {
						if(res.data.code==200){
							this.arealist = res.data.data
						}
					}
				});
				
			},
			
			
			
			
			
			go_exper(id){
				uni.navigateTo({
				    url: '../experiencedetail/experiencedetail?id='+id,
					animationType: 'pop-in',
					animationDuration: 200
				});
			},
			
			city(){
				uni.request({
					url:this.common.websiteUrl+"service_city",
					header:{"user-token":"6a109faf305513d443337ddb1ad4cb9b"},
					method:"post",
					success: (res) => {
						if(res.data.code==200){
							this.citylist = res.data.data
						}
					}
				});
			},
			
			style(){
				uni.request({
					url:this.common.websiteUrl+"service_style",
					header:{"user-token":"6a109faf305513d443337ddb1ad4cb9b"},
					method:"post",
					success: (res) => {
						if(res.data.code==200){
							this.stylelist = res.data.data
						}
					}
				});
			},
			go_map(index){
				this.common.callback('调用地图显示')
			},
			coll(id){
				this.common.callback('收藏')
			},
			go_makeapp(id){
				this.common.callback('预约')
			},
			swierChange(e){
				this.currentIndex = e.detail.current
			},
			typeselect(index){
				this.isTactive = index
			},
			sortselect(index){
				this.isSactive = index
				this.istype = false;
				this.page = 1
				this.experlist = []
				if(index==1){
					this.choice_pxname = '默认排序'
				}else if(index==2){
					this.choice_pxname = '距离最近'
				}else{
					this.choice_pxname = '人气最高'
				}
				this.get_datalist()
				
				
			},
			placeselect(index,index2){
				this.isPactive = index
				this.choice_areaname = this.arealist[index2].name
			},
			mannerselect(index,index2){
				
				this.isMactive = index
				this.choice_stylename = this.stylelist[index2].name
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
