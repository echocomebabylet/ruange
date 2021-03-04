<template>
	<view>
		<view class="nav">
			<view style="width: 40upx;height: 40upx;" @click="back">
				<image src="../../static/u164.png"></image>
			</view>
			<text>服务条款</text>
			<text style="color: white;">确</text>
		</view>
		<view class="list" style="margin-top: 20upx;" v-for="(item,index) in list" :key='index' @click="legalstatement(item.id,item.name)">
			<text>{{item.name}}</text>
			<image src="../../static/u62.png"></image>
		</view>
	</view>
</template>

<script>
	import helper from '../../common/common.js';
	export default {
		data() {
			return {
				list:[]
			}
		},
		onLoad(){
			this.getData();
		},
		methods: {
			back(){
				uni.navigateTo({
				    url: '../setup/setup'
				});
			},
			getData(){
				console.log('执行请求')
				uni.request({
					url:helper.websiteUrl+"base_serviceagree",
					header:{"user-token":"6a109faf305513d443337ddb1ad4cb9b"},
					method:"post",
					data:{},
					success: (res) => {
						console.log(res);
						// 将请求到的数据存放放到data中
						this.list = res.data.data;
					}
				});
			},
			legalstatement(e,name){
				console.log(name)
				uni.navigateTo({
				    url: '../legalstatement/legalstatement?id='+e+'&name='+name
				});
			}
		}
	}
</script>

<style>
page{
	background-color: #F2F2F2;
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
	padding: 26upx 35upx;
	box-sizing: border-box;
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 30upx;
	border-bottom: 1upx solid #F7F7F7;
}
.list view{
	display: flex;
	align-items: center;
}
.list image{
	width: 30upx;
	height: 30upx;
}
</style>
