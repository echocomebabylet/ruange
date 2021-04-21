<template>
	<view>
		<view class="aline"></view>
		<view class="nav">
			<view style="width: 50upx;height: 50upx;" @click="pageback">
				<image src="../../static/u18.png"></image>
			</view>
			<text>评价晒图({{this.assessdata.comment_num}})</text>
			<text style="color: white;">返回</text>
		</view>
		<view class="assess-list" v-for="(item,index) in assessdata.comment" :key="index">
			<view class="user">
				<view>
					<image :src="getimgurl(item.headurl)" class="head"></image>
					<text>{{item.username}}</text>
				</view>
				<view class="star" v-if="item.star==1">
					<image src="../../static/u370.png"></image>
					<image src="../../static/u373.png"></image>
					<image src="../../static/u373.png"></image>
					<image src="../../static/u373.png"></image>
					<image src="../../static/u373.png"></image>
				</view>
				<view class="star" v-if="item.star==2">
					<image src="../../static/u370.png"></image>
					<image src="../../static/u370.png"></image>
					<image src="../../static/u373.png"></image>
					<image src="../../static/u373.png"></image>
					<image src="../../static/u373.png"></image>
				</view>
				<view class="star" v-if="item.star==3">
					<image src="../../static/u370.png"></image>
					<image src="../../static/u370.png"></image>
					<image src="../../static/u370.png"></image>
					<image src="../../static/u373.png"></image>
					<image src="../../static/u373.png"></image>
				</view>
				<view class="star" v-if="item.star==4">
					<image src="../../static/u370.png"></image>
					<image src="../../static/u370.png"></image>
					<image src="../../static/u370.png"></image>
					<image src="../../static/u370.png"></image>
					<image src="../../static/u373.png"></image>
				</view>
				<view class="star" v-if="item.star==5">
					<image src="../../static/u370.png"></image>
					<image src="../../static/u370.png"></image>
					<image src="../../static/u370.png"></image>
					<image src="../../static/u370.png"></image>
					<image src="../../static/u370.png"></image>
				</view>
			</view>
			<view class="content">{{item.content}}</view>
			<view class="assessimg">
				<image :src="getimgurl(items)" v-for="(items,index) in item.imglist" :key="index"></image>
			</view>
			<text style="font-size: 20upx;color: #a5a5a5;">{{item.time}}</text>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				assessid:'',
				page:1,
				Pagesize:10,
				assessdata:[]
				
			}
		},
		onReachBottom() {
			this.page = this.page+=1
			console.log(this.page)
			this.getassess()
		},
		onLoad(options){
			this.assessid = options.id
			this.getassess(options.id)
		},
		methods: {
			getimgurl(image){
				return"http://uniapp.ruange.com.cn/"+image
			},
			pageback(){
				uni.navigateTo({
				    url: '../productdetail/productdetail'
				});
			},
			getassess(id){
				uni.request({
					url:this.common.websiteUrl+"product_comment_index",
					header:{"user-token":"6a109faf305513d443337ddb1ad4cb9b"},
					method:"post",
					data:{
						'id':1,
						'page':this.page,
						'pagesize':this.pagesize
					},
					success: (res) => {
						console.log(res.data);
						// 将请求到的数据存放放到data中
						this.assessdata = res.data.data;
						for(var i = 0 ; i < res.data.data.comment.length ; i++){
							this.assessdata.comment[i].imglist = res.data.data.comment[i].imglist.split("|")
							var nowdate = new Date(res.data.data.comment[i].time * 1000);
							this.assessdata.comment[i].time = nowdate.getFullYear()+'-'+nowdate.getMonth()+1+'-'+nowdate.getDate()
						}
						
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
	  background-color: white !important;
	  z-index: 100;
	  position: fixed;
	  top: 0;
	  left: 0;
}
page {
	background-color: #F2F2F2;
	box-sizing: border-box;
}

.nav {
	width: 100%;
	height: 120upx;
	background-color: white;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 30upx;
	box-sizing: border-box;
	position: fixed;
	top: var(--status-bar-height);
	left: 0;
	font-size: 30upx;
	z-index: 100;
}

.nav image {
	width: 50upx;
	height: 50upx;
}
.assess-list{
	padding: 40upx 30upx 30upx;
	box-sizing: border-box;
	border-top: 1upx solid #F7F7F7;
	background-color: white;
}
.user{
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.user view{
	display: flex;
	align-items: center;
	font-size: 24upx;
}
.user .head{
	width: 50upx;
	height: 50upx;
	border-radius: 50%;
	margin-right: 10upx;
}
.user .star image{
	width: 24upx;
	height: 24upx;
	margin-left: 10upx;
}
.content{
	width: 100%;
	font-size: 24upx;
	margin: 30upx 0;
}
.assessimg{
	width: 380upx;
	margin-left: 90upx;
}
.assessimg image{
	width: 49%;
	height: 180upx;
}
.assessimg image:nth-child(2n-1){
	margin-right: 5upx;
}
</style>
