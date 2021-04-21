<template>
	<view>
		<view class="aline"></view>
		<view class="nav">
			<view style="width: 40upx;height: 40upx;" @click="back">
				<image src="../../static/u164.png"></image>
			</view>
			<text style="font-weight: bold;">沙发</text>
			<text style="color: white;">返</text>
		</view>
		<view style="width: 100%;display: flex;align-items: center;justify-content: space-around;height: 100upx;position: fixed;top: 130upx;left: 0;background-color: white;z-index: 100;">
			<view style="display: flex;align-items: center;font-size: 30upx;" @click="nav(1)">
				<text :style="isactive==1?'color:#40cccb':'color:black'">风格</text>
				<image src="../../static/down.png" style="width: 20upx;height: 10upx;margin-left: 10upx;" v-if="isactive!==1"></image>
				<image src="../../static/uup.png" style="width: 20upx;height: 10upx;margin-left: 10upx;" v-if="isactive==1"></image>
			</view>
			<view style="display: flex;align-items: center;font-size: 30upx;" @click="nav(2)">
				<text :style="isactive==2?'color:#40cccb':'color:black'">分类</text>
				<image src="../../static/down.png" style="width: 20upx;height: 10upx;margin-left: 10upx;" v-if="isactive!==2"></image>
				<image src="../../static/uup.png" style="width: 20upx;height: 10upx;margin-left: 10upx;" v-if="isactive==2"></image>
			</view>
			<view style="display: flex;align-items: center;font-size: 30upx;" @click="nav(3)">
				<text :style="isactive==3?'color:#40cccb':'color:black'">排序</text>
				<image src="../../static/down.png" style="width: 20upx;height: 10upx;margin-left: 10upx;" v-if="isactive!==3"></image>
				<image src="../../static/uup.png" style="width: 20upx;height: 10upx;margin-left: 10upx;" v-if="isactive==3"></image>
			</view>
			<view style="display: flex;align-items: center;font-size: 30upx;" @click="open">
				<text>筛选</text>
				<image src="../../static/u1009.png" style="width: 25upx;height: 30upx;margin-left: 10upx;"></image>
				<image src="../../static/ushai.png" style="width: 25upx;height: 30upx;margin-left: 10upx;" v-if="isactive==4"></image>
			</view>
		</view>
		<view style="height: 270upx;"></view>
		<view style="width: 100%;height: 100%;position: fixed;top: 230upx;left: 0;background-color: rgba(0,0,0,0.5);z-index: 1000;" v-if="islist">
			<view class="slot-content" style="background-color: #FFFFFF;" v-if="isactive==1">
				<scroll-view scroll-y="true" style="height: 500rpx;font-size: 30upx;font-weight: bold;padding: 0 40upx;box-sizing: border-box;">
					<view style="margin: 20upx 0;">全部</view>
					<view style="margin: 20upx 0;">北欧</view>
					<view style="margin: 20upx 0;">欧美</view>
					<view style="margin: 20upx 0;">简约</view>
					<view style="margin: 20upx 0;">田园</view>
					<view style="margin: 20upx 0;">欧式</view>
					<view style="margin: 20upx 0;">欧式</view>
					<view style="margin: 20upx 0;">欧式</view>
					<view style="margin: 20upx 0;">欧式</view>
					<view style="margin: 20upx 0;">欧式</view>
					<view style="margin: 20upx 0;">欧式</view>
					<view style="margin: 20upx 0;">欧式</view>
				</scroll-view>
			</view>
			<view class="slot-content" style="background-color: #FFFFFF;" v-if="isactive==2">
				<scroll-view scroll-y="true" style="height: 500upx;">
					<view style="padding: 0 40upx;box-sizing: border-box;" v-for="(index,item) in 5" :key="index">
						<view style="font-weight: bold;font-size: 30upx;margin: 20upx 0;">沙发类</view>
						<view style="display: flex;justify-content: space-between;align-items: center;flex-wrap: wrap;">
							<view style="width: 220upx;height: 64upx;line-height: 64upx;text-align: center;font-size: 26upx;background-color: #f2f2f2;border-radius: 50upx;margin-bottom: 15upx;">皮质沙发</view>
							<view style="width: 220upx;height: 64upx;line-height: 64upx;text-align: center;font-size: 26upx;background-color: #f2f2f2;border-radius: 50upx;margin-bottom: 15upx;">皮质沙发</view>
							<view style="width: 220upx;height: 64upx;line-height: 64upx;text-align: center;font-size: 26upx;background-color: #f2f2f2;border-radius: 50upx;margin-bottom: 15upx;">皮质沙发</view>
							<view style="width: 220upx;height: 64upx;line-height: 64upx;text-align: center;font-size: 26upx;background-color: #f2f2f2;border-radius: 50upx;margin-bottom: 15upx;">皮质沙发</view>
							<view style="width: 220upx;height: 64upx;line-height: 64upx;text-align: center;font-size: 26upx;background-color: #f2f2f2;border-radius: 50upx;margin-bottom: 15upx;">皮质沙发</view>
							<view style="width: 220upx;height: 64upx;"></view>
						</view>
					</view>
				</scroll-view>
				<view style="display: flex;align-items: center;justify-content: space-between;padding: 20upx 0;">
					<u-button style="width: 40%;">重置</u-button>
					<u-button @click="closeDropdown" style="width: 40%;background-color: #40CCCB;color: white;border-radius: 50upx;">确定</u-button>
				</view>
			</view>
			<view class="slot-content" style="background-color: #FFFFFF;" v-if="isactive==3">
				<scroll-view scroll-y="true" style="height: 200upx;font-size: 30upx;font-weight: bold;padding: 0 40upx;box-sizing: border-box;">
					<view style="margin-top: 20upx;">默认排序</view>
					<view style="margin-top: 20upx;">价格由高到低</view>
					<view style="margin-top: 20upx;">价格由低到高</view>
				</scroll-view>
			</view>
		</view>
		<u-popup v-model="show" mode="right" @close="close" @open="open1">
			<scroll-view scroll-y="true" :style="{height:h+'px'}" style="padding: 40upx 30upx 80upx;box-sizing: border-box;width: 560upx;">
				<view style="margin-bottom: 20upx;">
					<view style="display: flex;justify-content: space-between;align-items: center;">
						<text>材质</text>
						<view style="display: flex;align-items: center;" >
							<text @click="opendetail" style="color: #92969c;">{{isshow==true?'展开':'收起'}}</text>
							<image src="../../static/right.png" style="width: 15upx;height: 20upx;margin-left: 10upx;" v-if="isshow==true"></image>
							<image src="../../static/uopen.png" style="width: 20upx;height: 10upx;margin-left: 10upx;" v-if="isshow==false"></image>
						</view>
					</view>
					<view style="display: flex;flex-wrap: wrap;justify-content: space-between;font-size: 24upx;height: 180upx;" :style="isshow==true?'overflow:hidden':'height:auto'">
						<view style="width: 48%;height: 74upx;line-height: 74upx;text-align: center;background-color: #f7f7f7;margin-top: 20upx;">棉麻混纺</view>
						<view style="width: 48%;height: 74upx;line-height: 74upx;text-align: center;background-color: #f7f7f7;margin-top: 20upx;">棉麻混纺</view>
						<view style="width: 48%;height: 74upx;line-height: 74upx;text-align: center;background-color: #f7f7f7;margin-top: 20upx;">棉麻混纺</view>
						<view style="width: 48%;height: 74upx;line-height: 74upx;text-align: center;background-color: #f7f7f7;margin-top: 20upx;">棉麻混纺</view>
						<view style="width: 48%;height: 74upx;line-height: 74upx;text-align: center;background-color: #f7f7f7;margin-top: 20upx;">棉麻混纺</view>
						<view style="width: 48%;height: 74upx;line-height: 74upx;text-align: center;background-color: #f7f7f7;margin-top: 20upx;">棉麻混纺</view>
						<view style="width: 48%;height: 74upx;line-height: 74upx;text-align: center;background-color: #f7f7f7;margin-top: 20upx;">棉麻混纺</view>
						<view></view>
					</view>
				</view>
				<view style="margin-bottom: 20upx;">
					<view style="display: flex;justify-content: space-between;align-items: center;">
						<text>款式</text>
						<view style="display: flex;align-items: center;" >
							<text @click="opendetail" style="color: #92969c;">{{isshow==true?'展开':'收起'}}</text>
							<image src="../../static/right.png" style="width: 15upx;height: 20upx;margin-left: 10upx;" v-if="isshow==true"></image>
							<image src="../../static/uopen.png" style="width: 20upx;height: 10upx;margin-left: 10upx;" v-if="isshow==false"></image>
						</view>
					</view>
					<view style="display: flex;flex-wrap: wrap;justify-content: space-between;font-size: 24upx;height: 180upx;" :style="isshow==true?'overflow:hidden':'height:auto'">
						<view style="width: 48%;height: 74upx;line-height: 74upx;text-align: center;background-color: #f7f7f7;margin-top: 20upx;">棉麻混纺</view>
						<view style="width: 48%;height: 74upx;line-height: 74upx;text-align: center;background-color: #f7f7f7;margin-top: 20upx;">棉麻混纺</view>
						<view style="width: 48%;height: 74upx;line-height: 74upx;text-align: center;background-color: #f7f7f7;margin-top: 20upx;">棉麻混纺</view>
						<view style="width: 48%;height: 74upx;line-height: 74upx;text-align: center;background-color: #f7f7f7;margin-top: 20upx;">棉麻混纺</view>
						<view style="width: 48%;height: 74upx;line-height: 74upx;text-align: center;background-color: #f7f7f7;margin-top: 20upx;">棉麻混纺</view>
						<view style="width: 48%;height: 74upx;line-height: 74upx;text-align: center;background-color: #f7f7f7;margin-top: 20upx;">棉麻混纺</view>
						<view style="width: 48%;height: 74upx;line-height: 74upx;text-align: center;background-color: #f7f7f7;margin-top: 20upx;">棉麻混纺</view>"
						<view></view>
					</view>
				</view>
				<view style="margin-bottom: 20upx;">
					<view style="display: flex;justify-content: space-between;align-items: center;">
						<text>尺寸</text>
						<view style="display: flex;align-items: center;" >
							<text @click="opendetail" style="color: #92969c;">{{isshow==true?'展开':'收起'}}</text>
							<image src="../../static/right.png" style="width: 15upx;height: 20upx;margin-left: 10upx;" v-if="isshow==true"></image>
							<image src="../../static/uopen.png" style="width: 20upx;height: 10upx;margin-left: 10upx;" v-if="isshow==false"></image>
						</view>
					</view>
					<view style="display: flex;flex-wrap: wrap;justify-content: space-between;font-size: 24upx;height: 180upx;" :style="isshow==true?'overflow:hidden':'height:auto'">
						<view style="width: 48%;height: 74upx;line-height: 74upx;text-align: center;background-color: #f7f7f7;margin-top: 20upx;">棉麻混纺</view>
						<view style="width: 48%;height: 74upx;line-height: 74upx;text-align: center;background-color: #f7f7f7;margin-top: 20upx;">棉麻混纺</view>
						<view style="width: 48%;height: 74upx;line-height: 74upx;text-align: center;background-color: #f7f7f7;margin-top: 20upx;">棉麻混纺</view>
						<view style="width: 48%;height: 74upx;line-height: 74upx;text-align: center;background-color: #f7f7f7;margin-top: 20upx;">棉麻混纺</view>
						<view style="width: 48%;height: 74upx;line-height: 74upx;text-align: center;background-color: #f7f7f7;margin-top: 20upx;">棉麻混纺</view>
						<view style="width: 48%;height: 74upx;line-height: 74upx;text-align: center;background-color: #f7f7f7;margin-top: 20upx;">棉麻混纺</view>
						<view style="width: 48%;height: 74upx;line-height: 74upx;text-align: center;background-color: #f7f7f7;margin-top: 20upx;">棉麻混纺</view>
						<view></view>
					</view>
				</view>
				<view>
					<view>价格区间</view>
					<view style="display: flex;align-items: center;justify-content: space-between;">
						<input style="width: 48%;height: 74upx;line-height: 74upx;text-align: center;background-color: #f7f7f7;margin-top: 20upx;font-size: 26upx;" placeholder="最低价"/>
						<view style="font-size: 40upx;">-</view>
						<input style="width: 48%;height: 74upx;line-height: 74upx;text-align: center;background-color: #f7f7f7;margin-top: 20upx;font-size: 26upx;" placeholder="最高价"/>
					</view>
				</view>
			</scroll-view>
			<view style="width: 100%;height: 90upx;display: flex;position: fixed;bottom: 0;left: 0;">
				<view style="width: 50%;line-height: 90upx;text-align: center;background-color: white;">清空</view>
				<view style="width: 50%;line-height: 90upx;text-align: center;color: white;background-color: #40CCCB;">确定</view>
			</view>
		</u-popup>
		<view style="display: flex;flex-wrap: wrap;justify-content: space-between;padding: 0 30upx;">
			<view  style="width: 330upx;margin-bottom: 20upx;" v-for="(index,item) in 10" :key="index">
				<image src="../../static/u25.png" style="width: 100%;height: 330upx;"></image>
				<view style="font-size: 20upx;color: #bebebe;margin: 10upx 0 0;">ZUOCHI 佐弛</view>
				<view style="font-size: 20upx;color: #bebebe;">现代布艺沙发</view>
				<view style="display: flex;justify-content: space-between;font-size: 20upx;margin-top: 10upx;">
					<text>￥5210.00</text>
					<view style="width: 65upx;height: 40upx;line-height: 35upx;text-align: center;border: 1upx solid #bebebe;border-radius: 10upx;">相似</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				isshow: true,
				islist: false,
				isactive: '',
			}
		},
		methods: {
			opendetail(){
				this.isshow = !this.isshow;
			},
			open(){
				this.show = true;
				this.isactive = ''
			},
			nav(index){
				this.islist = true;
				this.isactive = index;
			},
			open1(){
				this.islist = false
			}
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
	 z-index: 100;
	 background-color: white;
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
	font-size: 36upx;
	height: 130upx;
	width: 100%;
	position: fixed;
	top: var(--status-bar-height);
	left: 0;
	z-index: 1000;
	background-color: white;
}
.nav image{
	width: 24upx;
	height: 38upx;
}
uni-button:after{
	border-radius: 120upx;
}
.uicon-arrow-down[data-v-e232780e]:before{
	content: '' !important;
}
.u-collapse-head[data-v-2cbdd55e]{
	padding: 0 !important;
}
</style>
