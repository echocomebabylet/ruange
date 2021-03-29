<template>
	<view>
		<view class="nav">
			<view style="width: 40upx;height: 40upx;" @click="back">
				<image src="../../static/u164.png"></image>
			</view>
			<text>已结束的预约</text>
			<text style="color: white;">返回</text>
		</view>
		<view class="list" v-for="(item,index) in datalist" :key="index" @click="appointmentdetail(item.id)">
			<view style="display: flex;justify-content: space-between;padding: 35upx 10upx;box-sizing: border-box;border-bottom: 1upx solid #F7F7F7;">
				<view style="display: flex;align-items: center;">
					<image :src="getimgurl(item.userimg)" style="width: 85upx;height: 85upx;border-radius: 50%;"></image>
					<view style="display: flex;flex-direction: column;margin-left: 20upx;">
						<text style="font-weight: bold;">{{item.name}}</text>
						<text style="margin-top: 10upx;">在：{{item.address}}</text>
					</view>
				</view>
				<text v-if="item.status==4">取消体验</text>
				<text v-if="item.status==3">体验完成</text>
			</view>
			<view style="padding: 35upx 10upx;box-sizing: border-box;">
				<view style="margin-bottom: 20upx;display: flex;align-items: center;">
					<image src="../../static/u711.png" style="width: 20upx;height: 20upx;margin-right: 20upx;"></image>
					<text>{{item.maketime}}</text>
				</view>
				<view style="display: flex;align-items: center;">
					<image src="../../static/u7132.png" style="width: 20upx;height: 20upx;margin-right: 20upx;" ></image>
					<text>{{item.makenum}}人</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userinfo:[],
				datalist:[],
				page:1,
				pagesize:10,
				click_is:true
			}
		},
		onLoad() {
			this.getdata()
		},
		onReachBottom() {
			let _self = this
			if(_self.click_is==true){
				_self.page = _self.page+1
				_self.getdata()
			}
			
		},
		methods: {
			getuserinfo(){
				return new Promise((resolve, reject) => {
					uni.getStorage({
						key:'userinfo',
						success:(res)=>{
							this.userinfo = res.data
							resolve('suc');
						},fail() {
							resolve('err');
						}
					})
				})
				
			},
			async getdata(){
				await this.getuserinfo()
				let _self = this
				console.log(_self.userinfo.id)
				uni.request({
					url:_self.common.websiteUrl+"experhome_custormers_getover",
					header:{"user-token":"6a109faf305513d443337ddb1ad4cb9b"},
					method:"post",
					data:{'user_id':_self.userinfo.id,'page':_self.page,'pagesize':_self.pagesize},
					success: (res) => {
						if(res.data.code==200){
							_self.datalist =res.data.data;
						}else{
							_self.click_is = false;
							_self.common.callback('暂无更多')
						}
					},fail() {
						_self.click_is = false;
						_self.common.network()
					}
				});
				console.log(this.userinfo.id)
			},
			getimgurl(image){
				return this.common.websiteUrl+image
			},
			appointmentdetail(id){
				uni.navigateTo({
				    url: '../waitreview/waitreview?id='+id
				});
			},
			back(){
				uni.navigateTo({
				    url: '../myappointment/myappointment'
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
</style>
