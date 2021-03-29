<template>
	<view>
		<view class="nav">
			<view style="width: 40upx;height: 40upx;" @click="back">
				<image src="../../static/u164.png"></image>
			</view>
			<text>我的预约</text>
			<text style="color: white;">返</text>
		</view>
		<!-- 等待体验 -->
		<view class="wait">
			<text style="font-size: 38upx;font-weight: bold;" v-if="datalist.wait_exper">等待体验({{datalist.wait_exper.length}})</text>
			<view v-if="!datalist.wait_exper"   style="font-size: 30upx;">
				<text style="margin: 50upx 0 30upx;display: block;">今日没有已预约的体验</text>
				<view style="display: flex;align-items: center;">
					<text style="margin-right: 20upx;color: #40CCCB;">现在就去</text>
					<image src="../../static/u112.png" style="width: 46upx;height: 46upx;"></image>
				</view>
			</view>
			<view v-if="datalist.wait_exper" @click="waitreview(item.id)" v-for="(item,index) in datalist.wait_exper" :key="index" style="display: flex;justify-content: space-between;padding: 30upx 0;box-sizing: border-box;border-bottom: 1upx solid #F7F7F7;">
				<view style="display: flex;">
					<image :src="getimgurl(item.userimg)" style="width: 84upx;height: 84upx;border-radius: 50%;"></image>
					<view style="display: flex;flex-direction: column;margin-left: 20upx;font-size: 24upx;">
						<text style="font-size: 28upx;">{{item.maketime}}</text>
						<text style="margin: 20upx 0;">{{item.name}}</text>
						<text>{{item.address}}</text>
					</view>
				</view>
				<image src="../../static/u8.png" style="width: 12upx;height: 22upx;align-self: center;"></image>
			</view>
		</view>
		<!-- 等待审核 -->
		<view class="wait">
			<text style="font-size: 38upx;font-weight: bold;" v-if="datalist.wait">等待审核({{datalist.wait.length}})</text>
			<view v-for="(item,index) in datalist.wait" :key="index" @click="waitreview(item.id)" style="display: flex;justify-content: space-between;padding: 30upx 0;box-sizing: border-box;border-bottom: 1upx solid #F7F7F7;">
				<view style="display: flex;">
					<image :src="getimgurl(item.userimg)" style="width: 84upx;height: 84upx;border-radius: 50%;"></image>
					<view style="display: flex;flex-direction: column;margin-left: 20upx;font-size: 24upx;">
						<text style="font-size: 28upx;">{{item.maketime}}</text>
						<text style="margin: 20upx 0;">{{item.name}}</text>
						<text>{{item.address}}</text>
					</view>
				</view>
				<image src="../../static/u8.png" style="width: 12upx;height: 22upx;align-self: center;"></image>
			</view>
		</view>
		<!-- 等待评价 -->
		<view class="wait">
			<text style="font-size: 38upx;font-weight: bold;" v-if="datalist.wait_eval">等待评价({{datalist.wait_eval.length}})</text>
			<view v-for="(item,index) in datalist.wait_eval" :key="index" @click="waitreview(item.id)" style="display: flex;justify-content: space-between;padding: 30upx 0;box-sizing: border-box;border-bottom: 1upx solid #F7F7F7;">
				<view style="display: flex;">
					<image :src="getimgurl(item.userimg)" style="width: 84upx;height: 84upx;border-radius: 50%;"></image>
					<view style="display: flex;flex-direction: column;margin-left: 20upx;font-size: 24upx;">
						<text style="font-size: 28upx;">{{item.maketime}}</text>
						<text style="margin: 20upx 0;">{{item.name}}</text>
						<text>{{item.address}}</text>
					</view>
				</view>
				<image src="../../static/u8.png" style="width: 12upx;height: 22upx;align-self: center;"></image>
			</view>
		</view>
		<!-- 已结束的预约 -->
		<view class="wait" @click="finishappointment">
			<text style="font-size: 38upx;font-weight: bold;">已结束的预约({{datalist.wait_over}})</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				iswait:1,
				userinfo:[],
				datalist:[],
				
			}
		},
		onLoad() {
			uni.getStorage({
				key:'userinfo',
				success:(res)=>{
					this.userinfo = res.data
				}
			})
			this.getdata()
		},
		methods: {
			getdata(){
				let _self = this
				console.log(_self.userinfo.id)
				uni.request({
					url:_self.common.websiteUrl+"experhome_custormers_index",
					header:{"user-token":"6a109faf305513d443337ddb1ad4cb9b"},
					method:"post",
					data:{'user_id':_self.userinfo.id,},
					success: (res) => {
						if(res.data.code==200){
							_self.datalist =res.data.data;
						}else{
							_self.common.callback('暂无更多')
						}
					}
				});
				console.log(this.userinfo.id)
			},
			assess(){
				uni.navigateTo({
				    url: '../waitassess/waitassess'
				});
			},
			getimgurl(image){
				return this.common.websiteUrl+image
			},
			experiencebegin(){
				uni.navigateTo({
				    url: '../experiencebegin/experiencebegin'
				});
			},
			waitreview(id){
				uni.navigateTo({
				    url: '../waitreview/waitreview?id='+id
				});
			},
			finishappointment(){
				uni.navigateTo({
				    url: '../finishappointment/finishappointment'
				});
			},
			back(){
				uni.switchTab({
				    url: '/pages/my/my'
				});
			}
		}
	}
</script>

<style>
page{
	padding-top: 130upx;
	box-sizing: border-box;
	background-color: #F2F2F2;
}
.nav{
	padding: 0 45upx;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 30upx;
	height: 130upx;
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1000;
	background-color: white;
}
.nav image{
	width: 24upx;
	height: 38upx;
}
.wait{
	background-color: white;
	padding: 40upx 30upx;
	box-sizing: border-box;
	margin-top: 20upx;
}

</style>
