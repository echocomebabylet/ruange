<template>
	<view>
		<view>
			<view style="z-index: 100;position: absolute;width: 100%;height: 100%;background-color: white;" v-if="iswhite==true"></view>
			<view class="cont">
				<image src="../../static/5200.png" class="bg"></image>
				<view class="content">
					<view style="display: flex;justify-content: space-between;align-items: center;">
						<view style="width: 50upx;height: 50upx;" @click="back">
							<image src="../../static/u722.png" style="width: 50upx;height: 50upx;"></image>
						</view>
						<view style="display: flex;align-items: center;">
							<view style="display: flex;flex-direction: column;align-items: center;margin-right: 25upx;">
								<image src="../../static/u1502.png" style="width: 50upx;height: 50upx;"></image>
								<text style="color: white;font-size: 30upx;">清单</text>
							</view>
							<view style="display: flex;flex-direction: column;align-items: center;margin-right: 25upx;">
								<image src="../../static/u149.png" style="width: 50upx;height: 50upx;"></image>
								<text style="color: white;font-size: 30upx;">搭配</text>
							</view>
							<view style="display: flex;flex-direction: column;align-items: center;margin-right: 25upx;">
								<image src="../../static/u148.png" style="width: 50upx;height: 50upx;"></image>
								<text style="color: white;font-size: 30upx;">扫一扫</text>
							</view>
							<view style="display: flex;flex-direction: column;align-items: center;margin-right: 25upx;">
								<image src="../../static/u146.png" style="width: 50upx;height: 50upx;"></image>
								<text style="color: white;font-size: 30upx;">保存</text>
							</view>
							<view style="display: flex;flex-direction: column;align-items: center;">
								<image src="../../static/u1822.png" style="width: 50upx;height: 50upx;"></image>
								<text style="color: white;font-size: 30upx;">分享</text>
							</view>
						</view>
					</view>
					<view style="display: flex;flex-direction: column;margin-top: 200upx;">
						<image src="../../static/u16.png" style="align-self: flex-end;width: 130upx;height: 130upx;" @click="selectsence"></image>
						<image src="../../static/u1522.png" style="align-self: flex-end;width: 130upx;height: 130upx;margin-top: 20upx;" @click="selectproduct"></image>
					</view>
				</view>
			</view>
		</view>
		<!-- 客厅卧室厨房 -->
		<view class="scene" :class="{'sceneactive':isscene}">
			<view class="p" style="padding: 40upx 20upx;box-sizing: border-box;display: flex;align-items: center;justify-content: space-between;border-bottom: 3upx solid #c2c2c2;">
				<view style="width: 40upx;height: 40upx;" @click="closesence">
					<image src="../../static/u251.png" style="width: 40upx;height: 40upx;"></image>
				</view>
				<text style="font-size: 30upx;">客厅</text>
				<text></text>
			</view>
			<view style="display: flex;width: 100%;">
				<scroll-view style="width: 20%;" :scroll-y="true" :style="{height:h2-h+'px'}" class="a">
					<view style="display: flex;flex-direction: column;align-items: center;padding: 30upx 0;box-sizing: border-box;" :class="{'active':isactive==1}" @click="sence(1)">
						<image src="../../static/u5562.png" style="width: 35upx;height: 35upx;"></image>
						<text style="font-size: 25upx;font-weight: bold;">客厅</text>
					</view>
					<view style="display: flex;flex-direction: column;align-items: center;padding: 30upx 0;box-sizing: border-box;" :class="{'active':isactive==2}" @click="sence(2)">
						<image src="../../static/u54.png" style="width: 35upx;height: 35upx;"></image>
						<text style="font-size: 25upx;font-weight: bold;">卧室</text>
					</view>
					<view style="display: flex;flex-direction: column;align-items: center;padding: 30upx 0;box-sizing: border-box;" :class="{'active':isactive==3}" @click="sence(3)">
						<image src="../../static/u57.png" style="width: 35upx;height: 35upx;"></image>
						<text style="font-size: 25upx;font-weight: bold;">厨房</text>
					</view>
				</scroll-view>
				<scroll-view :scroll-y="true" :style="{height:h2-h+'px'}" style="width: 80%;padding: 0 20upx 0 0;box-sizing: border-box;display: flex;flex-direction: column;" v-if="isactive==1">
					<view style="width: 100%;height: 170upx;margin-top: 20upx;" :class="{'active1':isactive1==1}" @click="sence1(1)">
						<image src="../../static/u56.png" style="width: 100%;height: 100%;"></image>
					</view>
					<view style="width: 100%;height: 170upx;margin-top: 20upx;" :class="{'active1':isactive1==2}" @click="sence1(2)">
						<image src="../../static/u56.png" style="width: 100%;height: 100%;"></image>
					</view>
					<view style="width: 100%;height: 170upx;margin-top: 20upx;" :class="{'active1':isactive1==3}" @click="sence1(3)">
						<image src="../../static/u56.png" style="width: 100%;height: 100%;"></image>
					</view>
					<view style="width: 100%;height: 170upx;margin-top: 20upx;" :class="{'active1':isactive1==4}" @click="sence1(4)">
						<image src="../../static/u56.png" style="width: 100%;height: 100%;"></image>
					</view>
				</scroll-view>
				<scroll-view :scroll-y="true" :style="{height:h2-h+'px'}" style="width: 80%;padding: 0 20upx 0 0;box-sizing: border-box;display: flex;flex-direction: column;" v-if="isactive==2">
					<view style="width: 100%;height: 170upx;margin-top: 20upx;" :class="{'active1':isactive1==1}" @click="sence1(1)">
						<image src="../../static/u56.png" style="width: 100%;height: 100%;"></image>
					</view>
					<view style="width: 100%;height: 170upx;margin-top: 20upx;" :class="{'active1':isactive1==2}" @click="sence1(2)">
						<image src="../../static/u56.png" style="width: 100%;height: 100%;"></image>
					</view>
					<view style="width: 100%;height: 170upx;margin-top: 20upx;" :class="{'active1':isactive1==3}" @click="sence1(3)">
						<image src="../../static/u56.png" style="width: 100%;height: 100%;"></image>
					</view>
					<view style="width: 100%;height: 170upx;margin-top: 20upx;" :class="{'active1':isactive1==4}" @click="sence1(4)">
						<image src="../../static/u56.png" style="width: 100%;height: 100%;"></image>
					</view>
				</scroll-view>
				<scroll-view :scroll-y="true" :style="{height:h2-h+'px'}" style="width: 80%;padding: 0 20upx 0 0;box-sizing: border-box;display: flex;flex-direction: column;" v-if="isactive==3">
					<view style="width: 100%;height: 170upx;margin-top: 20upx;" :class="{'active1':isactive1==1}" @click="sence1(1)">
						<image src="../../static/u56.png" style="width: 100%;height: 100%;"></image>
					</view>
					<view style="width: 100%;height: 170upx;margin-top: 20upx;" :class="{'active1':isactive1==2}" @click="sence1(2)">
						<image src="../../static/u56.png" style="width: 100%;height: 100%;"></image>
					</view>
					<view style="width: 100%;height: 170upx;margin-top: 20upx;" :class="{'active1':isactive1==3}" @click="sence1(3)">
						<image src="../../static/u56.png" style="width: 100%;height: 100%;"></image>
					</view>
					<view style="width: 100%;height: 170upx;margin-top: 20upx;" :class="{'active1':isactive1==4}" @click="sence1(4)">
						<image src="../../static/u56.png" style="width: 100%;height: 100%;"></image>
					</view>
				</scroll-view>
			</view>
		</view>
		
		<!-- 窗帘横向 -->
		<view class="product" :class="{'productactive':isproduct}">
			<view style="padding: 40upx 20upx;box-sizing: border-box;display: flex;align-items: center;justify-content: space-between;border-bottom: 3upx solid #c2c2c2;">
				<view style="width: 40upx;height: 40upx;" @click="closeproduct">
					<image src="../../static/u251.png" style="width: 40upx;height: 40upx;"></image>
				</view>
				<text style="font-size: 30upx;">窗帘</text>
				<text></text>
			</view>
			<scroll-view class="p1" :style="{height:h2-h1-h3+'px'}" :scroll-y="true" style="width: 100%;padding: 20upx 30upx;box-sizing: border-box;display: flex;flex-direction: column;">
				<view v-for="(item,index) in 5" :key="index">
					<view style="width: 90%;height: 100upx;line-height: 100upx;text-align: center;font-size: 30upx;font-weight: bold;box-shadow: 2upx 2upx 1upx 1upx rgba(0,0,0,0.1);margin: auto;border-radius: 10upx;">樱花布艺</view>
					<image src="../../static/u679.png" style="width: 100%;height: 300upx;margin-top: 20upx;"></image>
					<image src="../../static/u679.png" style="width: 100%;height: 300upx;margin-top: 20upx;"></image>
					<image src="../../static/u679.png" style="width: 100%;height: 300upx;margin-top: 20upx;"></image>
					<image src="../../static/u679.png" style="width: 100%;height: 300upx;margin-top: 20upx;"></image>
				</view>
			</scroll-view>
		</view>
		<!-- 窗帘横向 -->
		<view class="select" :class="{'selectactive':isselect}">
			<view style="width: 40upx;height: 40upx;margin:0 30upx" @click="closeselect">
				<image src="../../static/u251.png" style="width: 40upx;height: 40upx;"></image>
			</view>
			<view style="display: flex;flex-direction: column;align-items: center;margin-right: 30upx;" v-for="(item,index) in 5" :key="index" @click="selectproduct">
				<image src="../../static/u1292.png" style="width: 50upx;height: 50upx;"></image>
				<text style="font-size: 25upx;margin-top: 10upx;">窗帘</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isactive:1,
				isactive1:1,
				isscene:false,
				iswhite:true,
				isproduct:false,
				isselect:false,
				h2:'',
				h3:'',
				h1:'',
				h:''
			}
		},
		onReady(){
			uni.getSystemInfo({
				 success:  (res) => {   
					this.h2 = res.windowWidth
				}
			}),
			this.getNodesInfo();
		},
		onLoad(){
			
			uni.showLoading({
				title:"加载中..."
			})
			setTimeout(()=>{
				// plus.screen.unlockOrientation();
				plus.screen.lockOrientation('landscape-primary');
				this.iswhite = false;
				uni.hideLoading();
				plus.navigator.setFullscreen(true);
			},1200)
		},
		
		methods: {
			sence(index){
				this.isactive = index
			},
			sence1(index){
				this.isactive1 = index
			},
			selectsence(){
				this.isscene = true
			},
			closesence(){
				this.isscene = false
			},
			closeproduct(){
				this.isproduct = false;
			},
			closeselect(){
				this.isproduct = false;
				this.isselect = false;
			},
			back(){
				plus.screen.unlockOrientation();
				plus.screen.lockOrientation("portrait-primary");
				uni.switchTab({
				    url: '/pages/my/my'
				});
				plus.navigator.setFullscreen(false);
			},
			selectproduct(){
				this.isproduct = true;
				this.isselect = true;
			},
			getNodesInfo(){
				let info2 = uni.createSelectorQuery().select(".p");
				info2.boundingClientRect().exec((res)=>{
					this.h = res[0].height;
				})
				// console.log(this.h)
				let info1 = uni.createSelectorQuery().select(".p1");
				info1.boundingClientRect().exec((res)=>{
					this.h1 = res[0].height;
				})
				let info3 = uni.createSelectorQuery().select(".select");
				info3.boundingClientRect().exec((res)=>{
					this.h3 = res[0].width;
				})
			}
		}
	}
</script>

<style>

.cont .bg{
	position: absolute;
	width: 100%;
	height: 100%;
}
.content{
	position: absolute;
	width: 100%;
	height: 100%;
	padding: 35upx 25upx;
	box-sizing: border-box;
}
.scene{
	position: fixed;
	top: 0;
	right: 0;
	width: 0;
	height: 100%;
	background-color: white;
	transition: width 0.2s; 
}
.active{
	position: relative;
}
.active::before{
	content: '';
	width: 5upx;
	height: 100%;
	background-color: #40CCCB;
	position: absolute;
	top: 0;
	left: 0;
}
.active1{
	border: 4upx solid #40CCCB;
}
.sceneactive{
	width: 40%;
	transition: width 0.2s; 
}
.product{
	position: fixed;
	top: 0;
	right: 0;
	width: 0;
	height: 100%;
	background-color: white;
	transition: width 0.2s; 
}
.productactive{
	width: 35%;
	transition: width 0.2s; 
}
.select{
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 0;
	background-color: white;
	transition: height 0.2s; 
	display: flex;
	align-items: center;
	overflow: hidden;
}
.selectactive{
	height: 20%;
	transition: height 0.2s; 
}
</style>
