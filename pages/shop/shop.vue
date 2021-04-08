<template>
	<view>
		<view>
			<view class="nav">
				<view class="local">
					<text>长春</text>
					<image src="../../static/u106.png"></image>
				</view>
				<view class="search">
					<view>
						<image src="../../static/sousuo_icon@2x.png" style="margin: 0 10upx 0 20upx;"></image>
						<input placeholder="搜索品类/单品/风格" />
					</view>
					<image src="../../static/zhaopianshibie_icon@2x.png" style="height: 40upx;margin-right: 20upx;width: 44upx;"></image>
				</view>
				<image src="../../static/xiaoxi_icon@2x.png" class="info"></image>
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
		<kind v-if="isActive==1" :sheight="sh" :theight="h2-h1-h+12" :mheight="h2-h1-h-100"></kind>
		<manner v-if="isActive==2" :sheight="sh" :theight="h2-h1-h"></manner>
		<space v-if="isActive==3" :sheight="sh" :theight="h2-h1-h"></space>
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
				let info1 = uni.createSelectorQuery().select(".nav");
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
.nav{
	padding: 30upx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-sizing: border-box;
}
.local{
	display: flex;
	align-items: center;
	font-size: 28upx;
}
.local image{
	width: 20upx;
	height: 12upx;
	margin-left: 10upx;
}
.search{
	width: 70%;
	height: 70upx;
	background-color: #f8f8f8;
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
	width: 46upx;
	height: 46upx;
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
	color: #aaaaaa;
}
.menu .active{
	font-weight: bold;
	position: relative;	
	color: #40CCCB;
}
.menu .active::before{
	content: '';
	width: 52upx;
	height: 4upx;
	background-color: #40CCCB;
	position: absolute;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);
}
</style>
