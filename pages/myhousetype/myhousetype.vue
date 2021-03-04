<template>
	<view>
		<view class="nav">
			<view style="width: 40upx;height: 40upx;" @click="back">
				<image src="../../static/u164.png"></image>
			</view>
			<text>我的户型</text>
			<text style="color: white;">返</text>
		</view>
		<view  class="disable" v-if="isdisable==1">
			<image src="../../static/u284.png"></image>
			<text style="text-align: center;width: 100%;display: block;">您还没有关联的户型哦！</text>
		</view>
		<view class="list" v-if="isdisable==2" v-for="(item,index) in 5" :key="index" @longpress="logoTime">
			<image src="../../static/u3242.png"></image>
			<view style="display: flex;flex-direction: column;">
				<text style="font-size: 32upx;margin-bottom: 20upx;">恒大嘉园107方</text>
				<text style="margin-bottom: 10upx;">恒大嘉园|107方|107方户型</text>
				<text>两室两厅</text>
				<view>默认户型</view>
			</view>
			<!-- 删除 -->
			<view class="del" v-if="isdel">
				<view>删除</view>
			</view>
		</view>
		<view class="add" @click="addhousetype">新增户型</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isdisable:2,
				isdel:false
			}
		},
		methods: {
			logoTime(){
				this.isdel = true
			},
			back(){
				uni.switchTab({
				    url: '/pages/my/my'
				});
			},
			addhousetype(){
				uni.navigateTo({
				    url: '../myhousetypesearch/myhousetypesearch'
				});
			}
		}
	}
</script>

<style>
page{
	padding-top: 130upx;
	padding-bottom: 80upx;
	box-sizing: border-box;
}
.nav{
	padding: 0 45upx;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 30upx;
	height: 130upx;
	background-color: white;
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1000;
	border-bottom: 1upx solid #F7F7F7;
}
.nav image{
	width: 24upx;
	height: 38upx;
}
.disable{
	width: 320upx;
	height: 320upx;
	position: absolute;
	top: 30%;
	left: 50%;
	transform: translateX(-50%);
	font-size: 26upx;
}
.disable image{
	width: 320upx;
	height: 230upx;
	margin-bottom: 40upx;
}
.list{
	padding: 60upx;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	border-bottom: 1upx solid #F7F7F7;
	font-size: 26upx;
	position: relative;
	background-color: white;
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
	color: white;
	background-color: #40CCCB;
	border-radius: 5upx;
	margin-top: 40upx;
	align-self: flex-end;
}
/* 删除 */
.del{
	width: 100%;
	height: 100%;
	background-color: rgba(0,0,0,0.5);
	border-radius: 20upx;
	position: absolute;
	top: 0;
	left: 0;
}
.del view{
	width: 120upx !important;
	height: 120upx !important;
	line-height: 120upx !important;
	text-align: center;
	font-size: 24upx !important;
	color: white;
	background-color: #40CCCB;
	border-radius: 50% !important;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translateX(-50%) translateY(-50%);
	margin-top: 0 !important;
}
.add{
	width: 90%;
	height: 84upx;
	line-height: 84upx;
	text-align: center;
	background-color: #40CCCB;
	color: white;
	font-size: 30upx;
	position: fixed;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);
	border-radius: 10upx;
}
</style>
