<template>
	<view>
		<view class="cont">
			<view class="local">
				<text style="font-size: 34upx;font-weight: bold;margin-left: 15upx;">北京</text>
				<view class="num">
					<text>本地有<text style="font-weight: bold;color: black;">{{homeinfo}}</text>位体验家</text>
					<image src="../../static/u351.png"></image>
				</view>
				<image src="../../static/u349.png" class="bg"></image>
			</view>
			<!-- 体验家列表 -->
			<view class="home-list" v-for="(item,index) in experienceinfo" :key="index">
				<view class="location">
					<image :src="getimgurl(item.coverimg)"></image>
					<view>
						<image src="../../static/u318.png" style="width: 22upx;height: 25upx;margin-top: 5upx;"></image>
						<text>{{item.kms}}km</text>
						<text>{{item.quarters}}</text>
					</view>
				</view>
				<view class="intro">
					<view class="info">
						<view>
							<text>{{item.name}}</text>
							<text style="font-size: 20upx;color: #b1b1b1;font-weight: normal;">{{item.style_name}}·一居室loft·{{item.measure}}m²·21人体验过</text>
						</view>
						<image :src="getimgurl(item.headimg)"></image>
					</view>
					<view class="detail">
						<view style="display: flex;align-items: center;justify-content: space-between;">
							<text class="tab">家具体验</text>
							<text class="tab-tit">{{item.title}}</text>
						</view>
						<view class="tab-cont">
							<image src="../../static/u315.png"></image>
							<text class="tab-intro"><text style="color: white;">jian</text>{{item.content}}</text>
							<text class="check">查看详情</text>
						</view> 
					</view>
					<view class="order">
						<view>
							<image src="../../static/u316.png"></image>
							<text>随时可约</text>
						</view>
						<view style="margin: 20upx 0;">
							<image src="../../static/u318.png" style="height: 30upx;"></image>
							<text style="color: #557faf;">{{item.address}}·{{item.quarters}}</text>
							<image src="../../static/u320.png" style="width: 12upx;height:20upx;margin-left: 15upx;"></image>
						</view>
						<view>
							<image src="../../static/u321.png"></image>
							<text>{{item.tel}}:</text>
							<text class="thank">感谢户主的热情招待感谢户主的热情招待感谢户主的热情招待</text>
						</view>
					</view>
				</view>
				<view class="select1">
					<view>
						<image src="../../static/u324.png"></image>
						<text>收藏</text>
					</view>
					<view>
						<image src="../../static/u325.png"></image>
						<text>商品清单</text>
					</view>
					<view>
						<image src="../../static/u326.png"></image>
						<text>预约</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		props:['experienceinfo','homeinfo'],
		methods: {
			getimgurl(image){
				return"http://uniapp.ruange.com.cn/"+image
			},
		}
	}
</script>

<style>
@import url("../../css/experiencer.css");
</style>
