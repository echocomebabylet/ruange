<template>
	<view>
		<view class="aline"></view>
		<view class="nav">
			<text>用灵感装点您的生活</text>
			<image src="../../static/gouwuchu_icon@2x.png"></image>
		</view>
		<!-- <swiper next-margin="600rpx">
			<swiper-item style="margin-left: 50upx;" v-for="(item,index) in 8" :key="index" @click="nav(index)">
				<text :class="isactive==index?'active':''">推荐</text>
			</swiper-item>
		</swiper> -->
		<vgt-tab :list="list"></vgt-tab>
	</view>
</template>

<script>
	import vgtTab from '@/components/vgt-tab/vgt-tab.vue'
	export default {
		data() {
			return {
				isactive:1,
				list: [
						'推荐',
						'书房',
						'儿童房',
						'卧室',
						'推荐',
						'书房',
						'儿童房',
						'卧室',
						'推荐',
						'书房',
						'儿童房',
						'卧室',
					]
			}
		},
		 components: {
			'vgt-tab': vgtTab
		},
		methods: {
			nav(index){
				this.isactive = index
			},
			 onClickItem(res){
				 this.current=res.currentIndex;
			} 
		}
	}
</script>

<style>
.aline{
	 height: var(--status-bar-height);
	  width: 100%;
	  position: fixed;
	  top: 0;
	  left: 0;
	  z-index: 100;
	  background-color: white;
}
.nav{
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 40upx;
	box-sizing:border-box;
	font-size: 35upx;
	font-weight: bold;
	position: fixed;
	top: var(--status-bar-height);
	left: 0;
	width: 100%;
	background-color: white;
	z-index: 100;
}
.nav image{
	width: 50upx;
	height: 45upx;
}
swiper{
	font-size: 30upx;
	font-weight: bold;
	color: #b9b9b9;
}
swiper text{
	display: block;
	width: 120upx;
	height: 60upx;
	line-height: 60upx;
	text-align: center;
}
.active{
	display: block;
	width: 120upx;
	height: 60upx;
	line-height: 60upx;
	text-align: center;
	background-color: #40CCCB;
	border-radius: 50upx;
	color: white;
}
</style>
