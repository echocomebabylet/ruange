<template>
	<view>
		<view class="p">
			<view class="nav">
				<view class="local">
					<text>长春</text>
					<image src="../../static/u106.png"></image>
				</view>
				<view class="search">
					<view>
						<image src="../../static/u1251.png" style="margin: 0 10upx 0 15upx;"></image>
						<input placeholder="搜索品类/单品/风格" />
					</view>
					<image src="../../static/u1261.png" style="height: 40upx;margin-right: 15upx;width: 40upx;"></image>
				</view>
				<image src="../../static/u109.png" class="info"></image>
			</view>
			<view class="kind">
				<text>沙发</text>
				<text>茶几</text>
				<text>床</text>
				<text>书桌</text>
				<text>现代</text>
				<text>电视柜</text>
				<text>北欧</text>
				<text>餐桌</text>
				<view class="photo">
					<image src="../../static/u1272.png"></image>
					<text style="align-self: center;width: 100%;">上传图片，识别找家具</text>
				</view>
			</view>
		</view>
		<!-- 菜单列表 -->
		<view class="menu">
			<view class="tit">
				<text :class="{'active':isActive==1}" @click="change(1)">品类</text>
				<text :class="{'active':isActive==2}" @click="change(2)">风格</text>
				<text :class="{'active':isActive==3}" @click="change(3)">空间</text>
			</view>
		</view>
		<kind v-if="isActive==1" :sheight="sh" :theight="h2-h1"></kind>
		<manner v-if="isActive==2" :sheight="sh" :theight="h2-h1"></manner>
		<space v-if="isActive==3" :sheight="sh" :theight="h2-h1"></space>
	</view>
</template>

<script>
	import kind from "../../components/kind/kind.vue"
	import space from "../../components/space/space.vue"
	import manner from "../../components/manner/manner.vue"
	export default {
		data() {
			return {
				isActive:1,
				sh:false,
				h:'',
				h1:'',
				h2:''
			}
		},
		
		onReady(){
			uni.getSystemInfo({
				 success:  (res) => {   
					this.h2 = res.windowHeight - uni.upx2px(25)
				}
			}),
			this.getNodesInfo()
			console.log(this.h2-this.h1)
		},
		onPageScroll(Object){
			if(Object.scrollTop >= this.h){
				this.sh = true
			}else if(Object.scrollTop < this.h){
				this.sh = false
			}
		},
		methods: {
			change(index){
				this.isActive = index
			},
			getNodesInfo(){
				let info1 = uni.createSelectorQuery().select(".p");
				info1.boundingClientRect().exec((res)=>{
					this.h = res[0].height;
				})
				let info2 = uni.createSelectorQuery().select(".menu");
				info2.boundingClientRect().exec((res)=>{
					this.h1 = res[0].height;
				})
			}
			
		},
		components:{
			kind,
			space,
			manner
		}
	}
</script>

<style>
.p{
	background-image: url(../../static/u100.png);
	background-size: 100% 100%;
}
.nav{
	padding: 15upx 30upx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-sizing: border-box;
}
.local{
	display: flex;
	align-items: center;
	font-size: 25upx;
	color: white;
}
.local image{
	width: 20upx;
	height: 12upx;
	margin-left: 10upx;
}
.search{
	width: 70%;
	height: 70upx;
	background-color: white;
	border-radius: 50upx;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.search view{
	display: flex;
}
.search input{
	outline: none;
	border: none;
	font-size: 25upx;
}
.search image{
	width: 30upx;
	height: 30upx;
}
.info{
	width: 40upx;
	height: 32upx;
}
.kind{
	height: 240upx;
	color: white;
	font-size: 25upx;
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	padding: 40upx 0 100upx 0;
	box-sizing: border-box;
	position: relative;
}
.kind text{
	display: block;
	width: 25%;
	height: 40upx;
	text-align: center;
}
.photo{
	width: 90%;
	padding: 35upx 0;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	font-size: 25upx;
	position: absolute;
	bottom: -50%;
	left: 50%;
	transform: translateX(-50%) translateY(-10%);
	background-color: white;
	color: black;
	border-radius: 5upx;
	box-shadow: 0upx 8upx 5upx 0upx rgba(0,0,0,0.3);
}
.photo image{
	width: 66upx;
	height: 60upx;
	margin: auto;
	margin-bottom: 20upx;
	display: block;
}
.menu{
	margin-top: 120upx;
}
.menu .tit{
	display: flex;
	border-bottom: 1upx solid #F7F7F7
}
.menu text{
	display: block;
	width: 33%;
	padding: 28upx 0;
	box-sizing: border-box;
	text-align: center;
	font-size: 25upx;
}
.menu .active{
	font-weight: bold;
	position: relative;	
}
.menu .active::before{
	content: '';
	width: 52upx;
	height: 4upx;
	background-color: black;
	position: absolute;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);
}
</style>
