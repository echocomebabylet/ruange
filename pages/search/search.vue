<template>
	<view>
		<view class="aline"></view>
		<view class="search">
			<image src="../../static/u293.png"></image>
			<input placeholder="请输入您要搜索的内容" />
			<text>取消</text>
		</view>
		<view class="both">
			<text>大家都在找</text>
			<view style="font-weight: bold;display: flex;align-items: center;margin-top: 40upx;">
				<view style="padding: 15upx 25upx;box-sizing: border-box;background-color: #dddddd;border-radius: 15upx;margin-right: 20upx;">沙发</view>
				<view style="padding: 15upx 25upx;box-sizing: border-box;background-color: #dddddd;border-radius: 15upx;margin-right: 20upx;">沙发</view>
				<view style="padding: 15upx 25upx;box-sizing: border-box;background-color: #dddddd;border-radius: 15upx;margin-right: 20upx;">沙发</view>
				<view style="padding: 15upx 25upx;box-sizing: border-box;background-color: #dddddd;border-radius: 15upx;margin-right: 20upx;">沙发</view>
			</view>
		</view>
		<view class="history">
			<text style="margin-bottom: 25upx;display: block;">历史搜索</text>
			<view v-for="(item,index) in 5" :key="index">
				<text>木椅</text>
				<image src="../../static/u309.png"></image>
			</view>
			<text style="width: 100%;text-align: center;margin-top: 40upx;display: block;">清空搜索历史</text>
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
			// myhousetyperesult(){
			// 	uni.navigateTo({
			// 	    url: '../myhousetyperesult/myhousetyperesult'
			// 	});
			// }
		}
	}
</script>

<style>
.aline{
	 height: var(--status-bar-height);
	  width: 100%;
	  background-color: white;
}
.search{
	display: flex;
	align-items: center;
	padding: 45upx 45upx 25upx;
	box-sizing: border-box;
	border-bottom: 2upx solid #F7F7F7;
	background-color: white;
}
.search image{
	width: 45upx;
	height: 45upx;
}
.search input{
	width: 80%;
	font-size: 28upx;
	margin-left: 10upx;
	padding-left: 20upx;
	height: 54upx;
	box-sizing: border-box;
	border-bottom: 1upx solid #F7F7F7;
}
.search text{
	font-size: 28upx;
	margin-left: 20upx;
}
.both{
	padding: 25upx 20upx;
	box-sizing: border-box;
	font-size: 24upx;
}
.history{
	padding: 25upx 20upx;
	box-sizing: border-box;
	font-size: 24upx;
}
.history view{
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 25upx 0;
	box-sizing: border-box;
	border-bottom: 1upx solid #F7F7F7;
}
.history image{
	width: 25upx;
	height: 25upx;
}
</style>
