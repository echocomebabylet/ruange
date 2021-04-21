<template>
	<view>
		<view class="aline"></view>
		<view class="nav">
			<view style="width: 50upx;height: 40upx;" @click="back">
				<image src="../../static/u18.png"></image>
			</view>
			<text>评价({{datalist.comments_num}})</text>
			<text style="color: white;">回</text>
		</view>
		<view class="assess">
			<view style="display: flex;align-items: center;">
				<image src="../../static/u321.png" style="width: 30upx;height: 24upx;"></image>
				<text style="font-size: 27upx;margin-left: 20upx;">{{datalist.comments_num}}条评论</text>
			</view>
			<text style="font-size: 22upx;color: #afafaf;">好评度<text style="color: #40CCCB;margin-left: 20upx;">{{datalist.comments_praise}}</text></text>
		</view>
		<view style="height: 270upx"></view>
		<view class="cont" v-for="(item,index) in datalist.comments" :key="index">
			<view style="display: flex;justify-content: space-between;align-items: center;">
				<view class="head">
					<image :src="getimgurl(item.headurl)"></image>
					<text>{{item.username}}</text>
				</view>
				<view class="star">
					<image :src="item.stars>=1?'../../static/u370.png':'../../static/u373.png'"></image>
					<image :src="item.stars>=2?'../../static/u370.png':'../../static/u373.png'"></image>
					<image :src="item.stars>=3?'../../static/u370.png':'../../static/u373.png'"></image>
					<image :src="item.stars>=4?'../../static/u370.png':'../../static/u373.png'"></image>
					<image :src="item.stars>=5?'../../static/u370.png':'../../static/u373.png'"></image>
				</view>
			</view>
			<view style="margin-top: 20upx;">{{item.evaluate}}</view>
			<view style="margin-top: 15upx;color: #bebebe;">{{item.maketime}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:0,
				datalist:[],
				page:1,
				pagesize:10,
				click_is:true
			}
		},
		onLoad(options) {
			this.id = options.id
			this.getdata()
		},
		methods: {
			getdata(){
				let  that = this
				uni.request({
					url:that.common.websiteUrl+"experhome_owners_commentslist",
					header:{"user-token":"6a109faf305513d443337ddb1ad4cb9b"},
					method:"post",
					data:{
							'exper_id':that.id,
							'page':that.page,
							'pagesize':that.pagesize
							// 'id':that.id
						},
					success: (res) => {
						if(res.data.code==200){
							that.datalist =res.data.data
						}else{
							that.click_is = false
						}
						console.log(res.data.data)
					},fail() {
						that.click_is = false
						that.common.network()
					}
				});
				console.log('评论')
			},
			onReachBottom() {
				let _self = this
				if(_self.click_is==true){
					_self.page = _self.page+1
					_self.getdata()
				}
				
			},
			back(){
				uni.navigateTo({
				    url: '../experiencedetail/experiencedetail'
				});
			},
			getimgurl(image){
				return this.common.websiteUrl+image
			},
		}
	}
</script>

<style>
.aline{
	 height: var(--status-bar-height);
	  width: 100%;
	  position: fixed;
	  top: 0;
	  left: 0;
	  background-color: white;
	  z-index: 100;
}
page{
	box-sizing: border-box;
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
	top: var(--status-bar-height);
	left: 0;
	z-index: 1000;
}
.nav image{
	width: 50upx;
	height: 40upx;
}
.assess{
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 22upx 70upx;
	box-sizing: border-box;
	position: fixed;
	top: 200upx;
	left: 0;
	background-color: white;
	z-index: 1000;
	width: 100%;
}
.cont{
	padding: 22upx 25upx;
	font-size: 23upx;
	box-sizing: border-box;
	border-top: 1upx solid #F7F7F7;
}
.head{
	display: flex;
	align-items: center;
}
.head image{
	width: 50upx;
	height: 50upx;
	margin-right: 20upx;
	border-radius: 50%;
}
.star image{
	width: 20upx;
	height: 20upx;
	margin-left: 10upx;
}
</style>
