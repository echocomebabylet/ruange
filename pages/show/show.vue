<template>
	<view>
		<view class="nav">
			<text>SHOW</text>
			<image src="../../static/u46.png"></image>
		</view>
		<view class="select">
			<image src="../../static/u48.png"></image>
			<image src="../../static/u492.png"></image>
		</view>
		<!-- 热门设计 -->
		<view class="hot">
			<view class="tit">
				<text style="font-weight: bold;">热门设计</text>
				<text style="font-size: 23upx;font-weight: bold;">1<text style="font-size: 20upx;font-weight: normal;">/8</text></text>
			</view>
			<swiper class="swiper1" next-margin="60rpx" style="height: 550upx;">
				<swiper-item>
					<view style="margin-right: 20upx;">
						<image src="../../static/u512.jpg"></image>
						<text class="subject">气质与空间并存的空间气质与空间并存的空间气质与空间并存的空间</text>
						<view class="intro">
							<view>
								<image src="../../static/u286.png"></image>
								<text>2555</text>
							</view>
							<view>
								<image src="../../static/u288.png"></image>
								<text>2555</text>
							</view>
							<view>
								<image src="../../static/u285.png"></image>
								<text>2555</text>
							</view>
						</view>
					</view>
				</swiper-item>
				<swiper-item>
					<view style="margin-right: 20upx;">
						<image src="../../static/u512.jpg"></image>
						<text class="subject">气质与空间并存的空间气质与空间并存的空间气质与空间并存的空间</text>
						<view class="intro">
							<view>
								<image src="../../static/u286.png"></image>
								<text>2555</text>
							</view>
							<view>
								<image src="../../static/u288.png"></image>
								<text>2555</text>
							</view>
							<view>
								<image src="../../static/u285.png"></image>
								<text>2555</text>
							</view>
						</view>
					</view>
				</swiper-item>
				<swiper-item>
					<view style="margin-right: 20upx;">
						<image src="../../static/u512.jpg"></image>
						<text class="subject">气质与空间并存的空间气质与空间并存的空间气质与空间并存的空间</text>
						<view class="intro">
							<view>
								<image src="../../static/u286.png"></image>
								<text>2555</text>
							</view>
							<view>
								<image src="../../static/u288.png"></image>
								<text>2555</text>
							</view>
							<view>
								<image src="../../static/u285.png"></image>
								<text>2555</text>
							</view>
						</view>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<!-- 精彩案例 -->
		<view class=" choice">
			<view class="tit">
				<text style="font-weight: bold;">精选案例</text>
				<view>
					<text style="font-size: 23upx;font-weight: bold;">全部</text>
					<image src="../../static/u62.png"></image>
				</view>
			</view>
			<view class="list">
				<image src="../../static/u512.jpg"></image>
				<text class="cont">气质与空间并存的空间气质与空间并存的空间气质与空间并存的空间</text>
				<view class="info">
					<view>
						<image src="../../static/u286.png"></image>
						<text>2555</text>
					</view>
					<view>
						<image src="../../static/u288.png"></image>
						<text>2555</text>
					</view>
					<view>
						<image src="../../static/u285.png"></image>
						<text>2555</text>
					</view>
				</view>
			</view>
			<view class="list">
				<image src="../../static/u512.jpg"></image>
				<text class="cont">气质与空间并存的空间气质与空间并存的空间气质与空间并存的空间</text>
				<view class="info">
					<view>
						<image src="../../static/u286.png"></image>
						<text>2555</text>
					</view>
					<view>
						<image src="../../static/u288.png"></image>
						<text>2555</text>
					</view>
					<view>
						<image src="../../static/u285.png"></image>
						<text>2555</text>
					</view>
				</view>
			</view>
			<view class="list">
				<image src="../../static/u512.jpg"></image>
				<text class="cont">气质与空间并存的空间气质与空间并存的空间气质与空间并存的空间</text>
				<view class="info">
					<view>
						<image src="../../static/u286.png"></image>
						<text>2555</text>
					</view>
					<view>
						<image src="../../static/u288.png"></image>
						<text>2555</text>
					</view>
					<view>
						<image src="../../static/u285.png"></image>
						<text>2555</text>
					</view>				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		
		methods: {
			
		}
	}
</script>

<style>
.nav{
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 40upx;
	box-sizing: border-box;
	font-size: 32upx;
	font-weight: bold;
}
.nav image{
	width: 45upx;
	height: 45upx;
}
/* 热门设计 */
.select{
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 40upx 40upx 40upx;
	box-sizing: border-box;
	border-bottom: 1upx solid #F7F7F7;
}
.select image{
	width: 48%;
	height: 60upx;
}
.tit{
	padding: 30upx 40upx;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	font-size: 40upx;
	font-weight: 500;
	align-items: flex-end;
}
.tit image{
	width: 25upx;
	height: 25upx;
	vertical-align: middle;
	margin-left: 5upx;
}
/* 热门设计轮播 */
.swiper1{
	margin-bottom: 20upx;
	margin-left: 40upx;
}
.swiper1 image,
.list image{
	height: 365upx;
	width: 100%;
}
.swiper1 swiper-item{
	font-size: 30upx;
	margin-top: 50upx;
}
.swiper1 .subject,
.cont{
	display: block;
	font-size: 25upx;
	margin: 30upx 0;
	width: 80%;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
.swiper1 .intro,
.info{
	font-size: 20upx;
	color: #484848;
	display: flex;
	justify-content: space-around;
	padding: 0 40upx;
	align-items: center;
}
.swiper1 .intro view,
.info view{
	display: flex;
	align-items: center;
}
.swiper1 .intro image,
.info image{
	width: 27upx;
	height: 27upx;
	margin-right: 10upx;
}
.list{
	padding: 0 40upx 44upx 40upx;
	box-sizing: border-box;
	border-bottom: 1upx solid #F7F7F7;
	margin-bottom: 60upx;
}
.list:last-child{
	border: none;
	margin-bottom: 0;
}
</style>
