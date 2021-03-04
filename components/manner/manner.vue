<template>
	<view class="cont">
		<scroll-view :scroll-y="sheight" class="style-list" :style="{height:theight+'px'}">
			<text>北欧</text>
			<text>北欧</text>
			<text>北欧</text>
			<text>北欧</text>
			<text>北欧</text>
			<text>北欧</text>
			<text>北欧</text>
			<text>北欧</text>
			<text>北欧</text>
			<text>北欧</text>
			<text>北欧</text>
			<text>北欧</text>
			<text>北欧</text>
			<text>北欧</text>
			<text>北欧</text>
			<text>北欧</text>
			<text>北欧</text>
			<text>北欧</text>
			<text>北欧</text>
			<text>北欧</text>
			<text>北欧</text>
			<text>北欧</text>
			<text>北欧</text>
			<text>北欧</text>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		props:['sheight','theight'],
		methods: {
			
		}
	}
</script>

<style>
.style-list{
	height: 1150upx;
	width: 100%;
}
.style-list text{
	display: block;
	height: 100upx;
	line-height: 100upx;
	width: 100%;
	padding-left: 120upx;
	box-sizing: border-box;
	font-size: 34upx;
	color: #727272;
	border-bottom: 1upx solid #F7F7F7;
	font-weight: bold;
}
</style>
