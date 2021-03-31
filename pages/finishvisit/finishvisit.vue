<template>
	<view>
		<view class="nav">
			<view style="width: 40upx;height: 40upx;" @click="back">
				<image src="../../static/u164.png"></image>
			</view>
			<text>已结束</text>
			<text style="color: white;">返回</text>
		</view>
		<view class="list" v-for="(item,index) in datalist" :key="index">
			<view style="display: flex;justify-content: space-between;padding: 35upx 10upx;box-sizing: border-box;border-bottom: 1upx solid #F7F7F7;">
				<view style="display: flex;align-items: center;">
					<image :src="getimgurl(item.userimg)" style="width: 85upx;height: 85upx;border-radius: 50%;"></image>
					<view style="display: flex;flex-direction: column;margin-left: 20upx;">
						<text style="font-weight: bold;">{{item.name}}</text>
						<view style="margin: 10upx 0;">
							<image v-for="(item,index) in item.stars" src="../../static/u370.png" style="width: 25upx;height: 25upx;margin-right: 10upx;"></image>
						<!-- 	<image src="../../static/u370.png" style="width: 25upx;height: 25upx;margin-right: 10upx;"></image>
							<image src="../../static/u370.png" style="width: 25upx;height: 25upx;margin-right: 10upx;"></image>
							<image src="../../static/u373.png" style="width: 25upx;height: 25upx;margin-right: 10upx;"></image>
							<image src="../../static/u373.png" style="width: 25upx;height: 25upx;"></image> -->
						</view>
						<text>在：{{item.city_name}}</text>
					</view>
				</view>
				<text style="color: #40CCCB;" v-if="item.stars">已评价</text>
				<text style="color: #adadad;" v-if="!item.stars">待评价</text>
			</view>
			<view style="padding: 35upx 10upx;box-sizing: border-box;">
				<view style="margin-bottom: 20upx;display: flex;align-items: center;">
					<image src="../../static/u711.png" style="width: 20upx;height: 20upx;margin-right: 20upx;"></image>
					<text>{{item.maketime}}</text>
				</view>
				<view style="display: flex;align-items: center;margin-bottom: 15upx;">
					<image src="../../static/u7132.png" style="width: 20upx;height: 20upx;margin-right: 20upx;" ></image>
					<text>{{item.makenum}}人</text>
				</view>
				<view style="display: flex;align-items: center;margin-bottom: 15upx;"  v-if="item.stars">
					<image src="../../static/u591.png" style="width: 20upx;height: 20upx;margin-right: 20upx;" ></image>
					<text>{{item.evaluate}}</text>
				</view>
				<view style="display: flex;align-items: center;margin-bottom: 15upx;">
					<image src="../../static/u432.png" style="width: 20upx;height: 20upx;margin-right: 20upx;" ></image>
					<text>{{item.opencode}}</text>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				page:1,
				pagesize:6,
				userinfo:[],
				datalist:[],
				click_is:true
			}
		},
		onLoad() {
			
			this.getdata()
		},
		methods: {
			get_userinfo(){
				return new Promise((resolve,reject)=>{
					uni.getStorage({
						key: 'userinfo',
						success:(res)=>{
							this.userinfo = res.data
							resolve('suc')
						},fail() {
							resolve('err')
						}
					});	
					
				})
			},
			async getdata(){
				let _self = this
				await _self.get_userinfo()
				// let _self = this
				uni.request({
					url:_self.common.websiteUrl+"experhome_owners_finish",
					header:{"user-token":"6a109faf305513d443337ddb1ad4cb9b"},
					method:"post",
					data:{'user_id':_self.userinfo.id,'page':_self.page,'pagesize':_self.pagesize},
					success: (res) => {
						if(res.data.code==200){
							_self.datalist = _self.datalist.concat(res.data.data);
						}else{
							_self.click_is = false
							_self.common.callback('暂无更多')
						}
					}
				});
				console.log('开始了')
			},
			getimgurl(image){
				return this.common.websiteUrl+image
			},
			back(){
				uni.navigateTo({
				    url: '../visitmanagement/visitmanagement'
				});
			}
		}
	}
</script>

<style>
page{
	background-color: #f2f2f2;
	padding-top: 130upx;
	box-sizing: border-box;
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
	margin-top: 20upx;
	padding: 0 20upx;
	box-sizing: border-box;
	background-color: white;
	font-size: 24upx;
}
.btn{
	width: 144upx;
	height: 48upx;
	border: 1upx solid #40CCCB;
	color: #40CCCB;
	line-height: 45upx;
	text-align: center;
	font-size: 25upx;
	border-radius: 30upx;
}
.contact{
	width: 144upx;
	height: 48upx;
	border: 1upx solid #bbbbbb;
	color: #bbbbbb;
	line-height: 45upx;
	text-align: center;
	font-size: 25upx;
	border-radius: 30upx;
	margin-right: 20upx;
}

</style>
