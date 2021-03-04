<template>
	<view>
		<view class="nav">
			<image src="../../static/u164.png"></image>
			<text style="margin-left: 20upx;">选择取消原因</text>
			<text style="color: white;">返</text>
		</view>
		<view class="list">
			<view style="padding: 30upx 0;box-sizing: border-box;" v-for="(item,index) in 5" :key="index">
				<text>临时有事改变行程</text>
				<view>
					<image src="../../static/u498.png" v-if="isactive==true" @click="select"></image>
					<image src="../../static/u32.png" v-if="isactive==false" @click="select"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isactive:true
			}
		},
		methods: {
			select(){
				this.isactive = !this.isactive
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
	margin-top: 20upx;
	background-color: white;
	padding: 0 30upx;
	box-sizing: border-box;
}
.list view{
	border-bottom: 1upx solid #F7F7F7;
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 24upx;
}
.list image{
	width: 42upx;
	height: 42upx;
}
</style>
