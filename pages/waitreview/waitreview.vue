<template>
	<view>
		<view class="aline"></view>
		<view class="nav">
			<view style="width: 40upx;height: 40upx;" @click="back">
				<image src="../../static/u164.png"></image>
			</view>
			<text style="margin-left: 20upx;" v-if="datalist.status==0">等待审核</text>
			<text style="margin-left: 20upx;" v-if="datalist.status==1">等待拜访</text>
			<text style="margin-left: 20upx;" v-if="datalist.status==2 && isassess==true">等待评价</text>
			<!-- <text style="margin-left: 20upx;" v-if="datalist.status==4">等待评价</text> -->
			<text style="margin-left: 20upx;" v-if="datalist.status>2">体验已完成</text>
			<text style="font-size: 24upx;color: white;" v-if="datalist.status>=2">取消预约</text>
			<text style="font-size: 24upx;" @click="cancel" v-if="datalist.status<=1">取消预约</text>
		</view>
		<view class="list" v-if="datalist.status<4">
			<text :class="datalist.status>=0 ? 'active':''">预约</text>
			<text :class="datalist.status>=0 ? 'active':''">体验家确认</text>
			<text :class="datalist.status>=1 ? 'active':''">拜访</text>
			<text :class="datalist.status>=2 ? 'active':''">评价</text>
		</view>
		<view class="page-body">
			<view class="page-section page-section-gap">
				<map style="width: 100%;position: relative;" :style="{'height':phoneHeight+'px'}" :latitude="datalist.lat" :longitude="datalist.lon" :markers="covers">
					<cover-image class="img" src="../../static/u92.png"></cover-image>
				</map>
			</view>
		</view>
		<view class="info" style="position: relative;">
			<view>
				<text style="font-size: 33upx;font-weight: bold;" v-if="datalist.experdata">{{datalist.experdata.name}}</text>
				<view style="display: flex;align-items: center;margin: 10upx 0 20upx">
					<image src="../../static/u361.png" style="width: 28upx;height: 33upx;margin-right: 10upx;"></image>
					<text v-if="datalist.experdata">在 {{datalist.experdata.address}}{{datalist.experdata.quarters}}</text>
				</view>
				<view style="display: flex;align-items: center;font-size: 22upx;margin-bottom: 20upx;">
					<text>拜访情况：{{datalist.maketime}}</text>
					<view style="width: 4upx;height: 30upx;background-color: black;margin: 0 40upx;"></view>
					<text>{{datalist.makenum}}人</text>
				</view>
				<view style="display: flex;align-items: center;">
					<text style="color: #40CCCB;">开门暗号：</text>
					<view style="display: flex;align-items: center;">
						<image src="../../static/u443.png" style="width: 26upx;height: 30upx;margin-right: 10upx;"></image>
						<text style="color: #848484;" v-if="datalist.opencode" >{{datalist.opencode}}</text>
						<text style="color: #848484;" v-if="!datalist.opencode" >待发放</text>
					</view>
				</view>
			</view>
			<view>
				<image src="../../static/u358.png"></image>					
			</view>
		</view>
		<view style="padding: 0 30upx;box-sizing: border-box;font-size: 30upx;color: #bdbdbd;" v-if="datalist.status<=0">
			<text style="display: block;border-top: 1upx solid #F7F7F7;width: 100%;padding-top: 20upx;box-sizing: border-box;" >等待体验家确认哦</text>
		</view>
		<view style="padding: 0 30upx;box-sizing: border-box;font-size: 30upx;color: #bdbdbd;" v-if="datalist.status==4">
			<text style="display: block;border-top: 1upx solid #F7F7F7;width: 100%;padding-top: 20upx;box-sizing: border-box;" >用户已取消预约</text>
		</view>
		
		<view style="padding: 0 30upx;box-sizing: border-box;font-size: 30upx;color: #bdbdbd;">
			<view style="width: 100%;height: 90upx;line-height: 90upx;text-align: center;color: white;background-color: #40CCCB;font-size: 24upx;"  v-if="datalist.status==2 && isassessing==true" @click="assess">体验评价</view>
			<view style="width: 100%;height: 90upx;line-height: 90upx;text-align: center;color: white;background-color: #b1b5b8;font-size: 24upx;" v-if="datalist.status==3 && isassessing==false">评价已完成</view>
		</view>
		
		<!-- 等待评价 -->
		<view v-if="isstar==true" class="star">
			<view class="cont1">
				<view style="display: flex;align-items: center;justify-content: space-between;padding: 30upx 25upx;box-sizing: border-box;border-bottom: 1upx solid #F7F7F7;">
					<text></text>
					<text>评价</text>
					<view style="width: 20upx;height: 20upx;" @click="close">
						<image src="../../static/u259.png" style="width: 20upx;height: 20upx;"></image>
					</view>
				</view>
				<view style="display: flex;align-items: center;justify-content: space-between;padding: 20upx 55upx;box-sizing: border-box;">
					<text>服务质量</text>
					<view>
						<image :src="item" style="width: 40upx;height: 40upx;margin-left: 10upx;" v-for="(item,index) in stars" @click="cls_stars(index)"></image>
						<!-- <image src="../../static/u370.png" style="width: 40upx;height: 40upx;"></image>
						<image src="../../static/u370.png" style="width: 40upx;height: 40upx;margin-left: 10upx;"></image>
						<image src="../../static/u370.png" style="width: 40upx;height: 40upx;margin-left: 10upx;"></image>
						<image src="../../static/u370.png" style="width: 40upx;height: 40upx;margin-left: 10upx;"></image>
						<image src="../../static/u370.png" style="width: 40upx;height: 40upx;margin-left: 10upx;"></image> -->
					</view>
				</view>
				<view style="display: flex;align-items: center;justify-content: space-between;padding: 20upx 55upx;box-sizing: border-box;">
					<text>房屋颜值</text>
					<view>
						<image :src="item" style="width: 40upx;height: 40upx;margin-left: 10upx;" v-for="(item,index) in eve_stars" @click="clis(index)"></image>
						<!-- <image src="../../static/u370.png" style="width: 40upx;height: 40upx;margin-left: 10upx;" v-for="(item,index) in 5" @click="clis(index)" v-if="eve_s<=index"></image>
						<image src="../../static/u373.png" style="width: 40upx;height: 40upx;margin-left: 10upx;" v-for="(item,index) in 5" @click="clis(index)" v-if="eve_s>index"></image> -->
						<!-- <image src="../../static/u370.png" style="width: 40upx;height: 40upx;margin-left: 10upx;"></image>
						<image src="../../static/u370.png" style="width: 40upx;height: 40upx;margin-left: 10upx;"></image>
						<image src="../../static/u373.png" style="width: 40upx;height: 40upx;margin-left: 10upx;"></image>
						<image src="../../static/u373.png" style="width: 40upx;height: 40upx;margin-left: 10upx;"></image> -->
					</view>
				</view>
				<view style="display: flex;align-items: center;justify-content: space-between;padding: 20upx 55upx;box-sizing: border-box;">
					<text>风格喜欢</text>
					<view>
						<image :src="item" style="width: 40upx;height: 40upx;margin-left: 10upx;" v-for="(item,index) in style_stars" @click="cls_style_stars(index)"></image>
						<!-- <image src="../../static/u370.png" style="width: 40upx;height: 40upx;"></image>
						<image src="../../static/u370.png" style="width: 40upx;height: 40upx;margin-left: 10upx;"></image>
						<image src="../../static/u370.png" style="width: 40upx;height: 40upx;margin-left: 10upx;"></image>
						<image src="../../static/u373.png" style="width: 40upx;height: 40upx;margin-left: 10upx;"></image>
						<image src="../../static/u373.png" style="width: 40upx;height: 40upx;margin-left: 10upx;"></image> -->
					</view>
				</view>
				<input placeholder="写下对体验家的评价,为其他人提供参考" v-model="pinglun"/>
				<view style="width: 85%;height: 90upx;line-height: 90upx;text-align: center;color: white;margin: 20upx auto 0;background-color: #40CCCB;" @click="assessing">立即评价</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phoneHeight:'',
				iswait:false,
				id:0, // 使用 marker点击事件 需要填写id
				title: 'map',
				latitude: 39.909,
				longitude: 116.39742,
				
				eve_stars:[
					'../../static/u370.png',
					'../../static/u370.png',
					'../../static/u370.png',
					'../../static/u370.png',
					'../../static/u370.png',
				],
				choice_eve_stars:5,
				
				stars:[
					'../../static/u370.png',
					'../../static/u370.png',
					'../../static/u370.png',
					'../../static/u370.png',
					'../../static/u370.png',
				],
				choice_stars:5,
				
				style_stars:[
					'../../static/u370.png',
					'../../static/u370.png',
					'../../static/u370.png',
					'../../static/u370.png',
					'../../static/u370.png',
				],
				choice_style_stars:5,
				
				covers: [{
					latitude: 39.909,
					longitude: 116.39742,
					iconPath: '../../../static/location.png'
				}, {
					latitude: 39.90,
					longitude: 116.39,
					iconPath: '../../../static/location.png'
				}],
				pinglun:'',
				eve_s:2,
				isstar:false,
				isassessing:true,
				isassess:true,
				userinfo:[],
				datalist:[],
				id:0,
				
			}
		},
		onLoad(options) {
			// options.id = 3
			this.id = options.id
			// console.log(options)
			uni.getStorage({
				key:'userinfo',
				success:(res)=>{
					this.userinfo = res.data
				}
			})
			this.getdata()
		},
		
		methods: {
			// 房屋颜值
			clis(index){
				let _self = this
				_self.choice_eve_stars = index+1
				for (let i = 0; i < _self.eve_stars.length; i++) {
					if(i<=index){
						_self.eve_stars[i] = '../../static/u370.png'
					}else{
						_self.eve_stars[i] = '../../static/u373.png'
					}
				}
				this.shuaxin()
			},
			cls_stars(index){
				let _self = this
				// return;
				_self.choice_stars = index+1
				for (let i = 0; i < _self.stars.length; i++) {
					if(i<=index){
						_self.stars[i] = '../../static/u370.png'
					}else{
						_self.stars[i] = '../../static/u373.png'
					}
				}
				this.shuaxin()
			},
			cls_style_stars(index){
				let _self = this
				// return;
				_self.choice_style_stars = index+1
				for (let i = 0; i < _self.style_stars.length; i++) {
					if(i<=index){
						_self.style_stars[i] = '../../static/u370.png'
					}else{
						_self.style_stars[i] = '../../static/u373.png'
					}
				}
				this.shuaxin()
			},
			shuaxin(){
				this.isstar = false;
				this.isstar = true;
			},
			getdata(){
				let _self = this
				uni.request({
					url:_self.common.websiteUrl+"experhome_custormers_datadef",
					header:{"user-token":"6a109faf305513d443337ddb1ad4cb9b"},
					method:"post",
					data:{'id':_self.id,},
					success: (res) => {
						if(res.data.code==200){
							_self.datalist =res.data.data;
						}else{
							_self.common.callback('暂无更多')
						}
					},fail() {
						_self.common.network()
					}
				});
			},
			assessing(){
				let _self = this
				console.log(_self.pinglun)
				console.log(_self.choice_eve_stars)
				console.log(_self.choice_style_stars)
				console.log(_self.choice_stars)
				uni.request({
					url:_self.common.websiteUrl+"experhome_custormers_pinglun",
					header:{"user-token":"6a109faf305513d443337ddb1ad4cb9b"},
					method:"post",
					data:{
						'id':_self.id,
						'evaluate':_self.pinglun,
						'stars':_self.choice_stars,
						'eve_stars':_self.choice_eve_stars,
						'style_stars':_self.choice_style_stars,
						'status':3
						},
					success: (res) => {
						if(res.data.code==200){
							_self.common.callback('评论成功')
							_self.datalist.status=3
							_self.isstar=false
							_self.isassessing=false
							_self.isassess=false
						}else{
							_self.common.network()
						}
					},fail() {
						_self.common.network()
					}
				});
			},
			assess(){
				this.isstar = true
			},
			close(){
				this.isstar = false
			},
			
			cancel(){
				uni.navigateTo({
				    url: '../cancelappointment/cancelappointment?id='+this.id,
					animationType: 'fade-in',
					animationDuration: 200
				});
			},
			back(){
				uni.navigateTo({
				    url: '../myappointment/myappointment'
				});
			}
		},
		onReady(){
			// 计算屏幕高度 ，宽度
			let _this = this;
			uni.getSystemInfo({
				success: (res) => {
					 _this.phoneHeight = res.windowHeight*0.58;
				}
			});
		},
	}
</script>

<style>
	.aline{
		 height: var(--status-bar-height);
		  width: 100%;
	}
	.star{
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,0.5);
		position: fixed;
		top: 0;
		left: 0;
	}
	.cont1{
		width: 100%;
		background-color: white;
		position: absolute;
		bottom: 0;
		left: 0;
		font-size: 30upx;
	}
	.cont1 input{
		width: 85%;
		height: 122upx;
		background-color: #f0f0f0;
		font-size: 22upx;
		margin: auto;
		margin-top: 20upx;
	}
.nav{
	padding: 0 30upx;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 30upx;
	height: 130upx;
	background-color: white;
}
.nav image{
	width: 24upx;
	height: 38upx;
}
.list{
	display: flex;
	align-items: center;
	font-size: 25upx;
	padding: 25upx 0;
	box-sizing: border-box;
	color: #cfd1ce;
	width: 100%;
}
.list text{
	position: relative;
	width: 25%;
	text-align: center;
}
.list text::before{
	content: '';
	width: 100%;
	height: 5upx;
	background-color: #cfd1ce;
	position: absolute;
	bottom: -25upx;
	left: 0;
}
.list text::after{
	content: '';
	width: 8upx;
	height: 8upx;
	border: 1upx solid white;
	background-color: #cfd1ce;
	position: absolute;
	bottom: -28upx;
	left: 50%;
	transform: translateX(-50%);
}
.list .active{
	position: relative;
	width: 25%;
	text-align: center;
	color: #40CCCB;
}
.list .active::before{
	content: '';
	width: 100%;
	height: 5upx;
	background-color: #40CCCB;
	position: absolute;
	bottom: -25upx;
	left: 0;
}
.list .active::after{
	content: '';
	width: 8upx;
	height: 8upx;
	border: 1upx solid white;
	background-color: #40CCCB;
	position: absolute;
	bottom: -28upx;
	left: 50%;
	transform: translateX(-50%);
}
.info{
	padding: 50upx 30upx 20upx;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	font-size: 28upx;
}
.info image{
	width: 50upx;
	height: 44upx;
}
.img{
	width: 120upx;
	height: 120upx;
	border-radius: 20upx;
	position: absolute;
	bottom: -40upx;
	left: 30upx;
}
.wait{
	width: 100%;
	height: 100%;
	background-color: rgba(0,0,0,0.5);
	position: fixed;
	top: 0;
	left: 0;
}
.cont{
	width: 70%;
	background-color: white;
	border-radius: 20upx;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translateX(-50%) translateY(-50%);
	font-size: 28upx;
}
</style>
