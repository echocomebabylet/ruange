<template>
	<view class="cont">
		<scroll-view scroll-y="true" class="style-list" :style="{height:theight+'px'}">
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
	padding: 0 30upx;
	box-sizing: border-box;
}
.style-list text{
	display: block;
	height: 100upx;
	line-height: 100upx;
	width: 100%;
	padding-left: 120upx;
	box-sizing: border-box;
	font-size: 30upx;
	font-weight: bold;
	border-bottom: 1upx solid #eeeeee;
}
</style>
