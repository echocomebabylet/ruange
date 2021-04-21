<template>
	<view>
		<view class="aline"></view>
		<view class="nav">
			<image src="../../static/u164.png"></image>
			<text style="margin-left: 20upx;">选择取消原因</text>
			<text style="color: white;">返</text>
		</view>
		<view class="list">
			<view style="padding: 30upx 0;box-sizing: border-box;">
				<text>临时有事改变行程，已与体验家协商</text>
				<view>
					<image src="../../static/u498.png" v-if="isactive!=1" @click="select(1)"></image>
					<image src="../../static/u32.png" v-if="isactive==1" @click="select(1)"></image>
				</view>
			</view>
			<view style="padding: 30upx 0;box-sizing: border-box;">
				<text>体验家时间不便，另行预约</text>
				<view>
					<image src="../../static/u498.png" v-if="isactive!=2" @click="select(2)"></image>
					<image src="../../static/u32.png" v-if="isactive==2" @click="select(2)"></image>
				</view>
			</view>
			<view style="padding: 30upx 0;box-sizing: border-box;">
				<text>预约了其他体验家</text>
				<view>
					<image src="../../static/u498.png" v-if="isactive!=3" @click="select(3)"></image>
					<image src="../../static/u32.png" v-if="isactive==3" @click="select(3)"></image>
				</view>
			</view>
			<view style="padding: 30upx 0;box-sizing: border-box;">
				<text>路途不便，找不到地方</text>
				<view>
					<image src="../../static/u498.png" v-if="isactive!=4" @click="select(4)"></image>
					<image src="../../static/u32.png" v-if="isactive==4" @click="select(4)"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isactive:0,
				id:0,
				userinfo:[]
			}
		},
		onLoad(options) {
			this.id = options.id
		},
		methods: {
			select(id){
				
				let _self = this
				_self.isactive = id
				let reason = ''
				if(id == 1){
					reason = '临时有事改变行程，已与体验家协商'
				}else if(id==2){
					reason = '体验家时间不便，另行预约'
				}else if(id==3){
					reason = '预约了其他体验家'
				}else if(id==4){
					reason = '路途不便，找不到地方'
				}
				uni.request({
					url:_self.common.websiteUrl+"experhome_custormers_pinglun",
					header:{"user-token":"6a109faf305513d443337ddb1ad4cb9b"},
					method:"post",
					data:{
						'id':_self.id,
						'status':4,
						'reason':reason
						},
					success: (res) => {
						if(res.data.code==200){
							_self.common.callback('取消成功')
							setTimeout(()=>{
								uni.navigateTo({
								    url: '../waitreview/waitreview?id='+_self.id
								});
							},1000)
							 
						}else{
							_self.common.network()
						}
					},fail() {
						_self.common.network()
					}
				});
			}
		}
	}
</script>

<style>
.aline{
	 height: var(--status-bar-height);
	  width: 100%;
	  background-color: white;
}
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
