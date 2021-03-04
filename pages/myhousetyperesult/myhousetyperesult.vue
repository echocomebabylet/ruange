<template>
	<view>
		<view class="nav">
			<view style="width: 40upx;height: 40upx;" @click="back">
				<image src="../../static/u164.png"></image>
			</view>
			<text>搜索户型</text>
			<text style="color: white;">返</text>
		</view>
		<view class="search">
			<view>
				<image src="../../static/u293.png" style="width: 42upx;height: 42upx;margin-right: 20upx;"></image>
				<input placeholder="搜索户型" style="width: 90%;font-size: 24upx;"/>
				<image src="../../static/u323.png" style="width: 30upx;height: 30upx;"></image>
			</view>
		</view>
		<view class="list" v-for="(item,index) in 5" :key="index" @click="myhousetypedetail">
			<image src="../../static/u3242.png"></image>
			<view style="display: flex;flex-direction: column;">
				<text style="font-size: 32upx;margin-bottom: 20upx;">恒大嘉园107方</text>
				<text style="margin-bottom: 10upx;">恒大嘉园|107方|107方户型</text>
				<text>两室两厅</text>
				<view v-if="isactive==false" @click="select">关联户型</view>
				<view class="active" v-if="isactive==true" @click="select">已关联户型</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isactive:false
			}
		},
		methods: {
			select(){
				this.isactive = !this.isactive
			},
			back(){
				uni.navigateTo({
				    url: '../myhousetypesearch/myhousetypesearch'
				});
			},
			myhousetypedetail(){
				uni.navigateTo({
				    url: '../myhousetypedetail/myhousetypedetail'
				});
			}
		}
	}
</script>

<style>
page{
	padding-top: 240upx;
	box-sizing: border-box;
	background-color: #F2F2F2;
}
.nav{
	padding: 0 45upx;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 32upx;
	font-weight: bold;
	height: 130upx;
	background-color: white;
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1000;
}
.nav image{
	width: 24upx;
	height: 38upx;
}
.list{
	background-color: white;
	padding: 60upx;
	box-sizing: border-box;
	display: flex;
	margin-bottom: 20upx;
	align-items: center;
	font-size: 26upx;
}
.list image{
	width: 270upx;
	height: 240upx;
	margin-right: 40upx;
}
.list view view{
	width: 180upx;
	height: 50upx;
	line-height: 50upx;
	text-align: center;
	font-size: 22upx;
	border-radius: 5upx;
	margin-top: 40upx;
	align-self: flex-end;
	border: 1upx solid #F7F7F7;
}
.active{
	width: 180upx;
	height: 50upx;
	line-height: 50upx;
	text-align: center;
	font-size: 22upx;
	border-radius: 5upx;
	margin-top: 40upx;
	align-self: flex-end;
	background-color: #40CCCB;
	color: white;
	border: none !important;
}
.search{
	padding: 30upx;
	box-sizing: border-box;
	background-color: white;
	width: 100%;
	position: fixed;
	top: 130upx;
	left: 0;
	z-index: 1000;
}
.search view{
	width: 100%;
	height: 66upx;
	background-color: #f5f5f5;
	border-radius: 40upx;
	display: flex;
	align-items: center;
	padding: 0 20upx;
}
</style>
