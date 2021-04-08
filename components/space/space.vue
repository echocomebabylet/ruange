<template>
	<view class="cont">
		<scroll-view scroll-y="true" class="space-list" :style="{height:theight+'px'}">
			<!-- <uni-collapse accordion="true">
				<uni-collapse-item title="客厅" style="font-size: 36upx;font-weight: bold;">
					<view style="padding: 30rpx;display: flex;align-items: center;justify-content: space-between;border-bottom: 1upx solid #F7F7F7;">
						<text style="font-size: 22upx;font-weight: normal;">全部</text>
						<image src="../../static/u85.png" class="img"></image>
					</view>
					<view style="padding: 30rpx;display: flex;align-items: center;justify-content: space-between;border-bottom: 1upx solid #F7F7F7;">
						<text style="font-size: 22upx;font-weight: normal;">茶几</text>
						<image src="../../static/u85.png" class="img"></image>
					</view>
					<view style="padding: 30rpx;display: flex;align-items: center;justify-content: space-between;border-bottom: 1upx solid #F7F7F7;">
						<text style="font-size: 22upx;font-weight: normal;">床</text>
						<image src="../../static/u85.png" class="img"></image>
					</view>
				</uni-collapse-item>	
			</uni-collapse> -->
			<view class="dress">
				<text class="ordering">客厅</text>
				<view class="time">
					<text :class="{'oactive':isOactive==1}" @click.stop="orderselect(1)">沙发</text>
					<text :class="{'oactive':isOactive==2}" @click.stop="orderselect(2)">桌子</text>
					<text :class="{'oactive':isOactive==3}" @click.stop="orderselect(3)">电视柜</text>
					<text :class="{'oactive':isOactive==4}" @click.stop="orderselect(4)">椅子</text>
				</view>
				<text class="ordering">卧室</text>
				<view class="time">
					<text :class="{'nactive':isNactive==1}" @click.stop="numselect(1)">课桌</text>
					<text :class="{'nactive':isNactive==2}" @click.stop="numselect(2)">床</text>
					<text :class="{'nactive':isNactive==3}" @click.stop="numselect(3)">衣柜</text>
					<text :class="{'nactive':isNactive==4}" @click.stop="numselect(4)">床头柜</text>					
					<text :class="{'nactive':isNactive==5}" @click.stop="numselect(5)">地毯</text>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import uniCollapse from '@/components/uni-collapse/uni-collapse.vue'
	import uniCollapseItem from '@/components/uni-collapse-item/uni-collapse-item.vue'
	export default {
		data() {
			return {
				isNactive:1,
				isOactive:1
			}
		},
		props:['sheight','theight'],
		methods: {
			orderselect(index){
				this.isOactive = index
			},
			numselect(index){
				this.isNactive = index
			},
		},
		components: {
			uniCollapse,
			uniCollapseItem
		}
	}
</script>

<style>
	.space-list {
		height: 1150upx;
		width: 100%;
	}

	.uni-collapse-cell {
		padding: 0 50upx 0 100upx;
		color: #727272;
	}

	.img {
		width: 16upx;
		height: 24upx;
	}
	.dress{
		background-color: white;
	}
	.ordering{
		display: block;
		width: 100%;
		padding: 30upx 0 30upx 40upx;
		box-sizing: border-box;
		font-size: 30upx;
		font-weight: bold;
	}
	.dress .time{
		display: flex;
		flex-wrap: wrap;
	}
	.dress .time text{
		width: 150upx;
		height: 60upx;
		background-color: #f3f5f4;
		font-size: 22upx;
		text-align: center;
		line-height: 60upx;
		border-radius: 15upx;
		margin-left: 30upx;
		margin-bottom: 30upx;
		font-weight: bold;
	}
	.oactive,.nactive{
		background-color: #40CCCB !important;
		color: white;
	}
</style>
