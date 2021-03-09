<template>
	<view>
		<view class="nav">
			<view style="width: 40upx;height: 40upx;" @click="back">
				<image src="../../static/u164.png"></image>
			</view>
			<text v-if="datalist.quart" style="font-weight: bold;">{{datalist.quart.name}}</text>
			<text style="font-size: 24upx;">重设户型</text>
		</view>
		<view style="height: 600upx;background-color: white;position: relative;">
			<image v-if="datalist.hometype" :src="getimgurl(datalist.hometype.img_url)" style="width: 500upx;height: 370upx;position: absolute;top: 50%;left: 50%;transform: translateX(-50%) translateY(-50%);"></image>
		</view>
		<view class="info">
			<view style="font-size: 32upx;font-weight: bold;">
				<text v-if="datalist.quart">{{datalist.quart.name}}</text>
				<text style="margin-left: 40upx;" v-if="datalist.hometype">{{datalist.hometype.measarea}}方</text>
			</view>
			<view style="display: flex;align-items: center;font-size: 24upx;margin: 20upx 0;">
				<image src="../../static/u446.png" style="width: 24upx;height: 30upx;"></image>
				<text v-if="datalist.quart" style="color: #b8b8b8;margin-left: 10upx;">{{datalist.quart.address}}{{datalist.quart.name}}</text>
			</view>
			<view style="font-size: 28upx;color: #aaaaaa;display: flex;align-items: center;">
				<text>户型体验家：<text style="color: #40CCCB;" v-if="datalist.exper_num">{{datalist.exper_num}}</text></text>
			</view>
		</view>
		<view style="padding: 20upx;width: 100%;background-color: white;margin-top: 20upx;font-size: 22upx;font-weight: bold;" v-if="datalist.hometype">面积：{{datalist.hometype.measarea}}m²</view>
		<view style="padding: 20upx;width: 100%;background-color: white;margin-top: 20upx;font-size: 22upx;font-weight: bold;" v-if="datalist.hometype">格局：{{datalist.hometype.pattern}}</view>
		<view style="padding: 20upx;width: 100%;background-color: white;margin-top: 20upx;font-size: 22upx;font-weight: bold;" v-if="datalist.quart">地址：{{datalist.quart.address}}{{datalist.quart.name}}</view>
		<text style="font-size: 26upx;margin: 50upx 0 30upx 20upx;display: block;font-weight: bold;">相关体验家</text>
		<view class="guess" v-for="(item,index) in datalist.exper_list" :key="index">
			<image :src="getimgurl(item.coverimg)"></image>
			<view>
				<text>{{item.name}}{{item.measure}}方</text>
				<text style="font-size: 24upx;margin: 30upx 0 50upx;color: #aeaeae;">{{item.name}}|{{item.measure}}方|{{item.measure}}方户型</text>
				<text style="font-weight: bold;color: #40CCCB;">￥685000</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				datalist:[]
			}
		},
		onLoad(options){
			this.getdata(11)
			console.log(options.typeid)
		},
		methods: {
			getimgurl(image){
				return"http://uniapp.ruange.com.cn/"+image
			},
			back(){
				uni.navigateTo({
				    url: '../myhousetyperesult/myhousetyperesult'
				});
			},
			getdata(data){
				uni.request({
					url:this.common.websiteUrl+"house_index_homedef",
					header:{"user-token":"6a109faf305513d443337ddb1ad4cb9b"},
					method:"post",
					data:{
						'hometypeid':data
					},
					success: (res) => {
						this.datalist = res.data.data
						console.log(res)
					}
				});
			}
		}
	}
</script>

<style>
page{
	background-color: #F2F2F2;
	padding-top: 130upx;
	box-sizing: border-box;
}
.nav{
	padding: 0 45upx;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 32upx;
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
.info{
	background-color: white;
	margin-top: 20upx;
	padding: 20upx 20upx 80upx;
	box-sizing: border-box;
}
.guess{
	display: flex;
	width: 100%;
	align-items: center;
	height: 240upx;
	margin-bottom: 20upx;
	font-size: 30upx;
}
.guess image{
	width: 50%;
	height: 100%;
}
.guess view{
	width: 50%;
	padding: 30upx;
	box-sizing: border-box;
	height: 100%;
	background-color: white;
	display: flex;
	flex-direction: column;
}
</style>
