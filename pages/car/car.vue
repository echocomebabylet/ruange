<template>
	<view>
		<view class="nav">
			<image src="../../static/u18.png"></image>
			<text>购物车</text>
			<text style="color: white;">返回</text>
		</view>
		<view class="product-list">
			 <view class="uni-form-item uni-column" style="background-color: white;">
				<checkbox-group name="checkbox1">
					<label>
						<view>
							<checkbox value="checkbox1" :checked="checked"/>
							<text style="font-size: 30upx;font-weight: bold;margin-left: 20upx;">卧室</text>
						</view>
						<text style="font-size: 26upx;font-weight: bold;margin-left: 10upx;">￥2680.00</text>
					</label>
				</checkbox-group>
			</view>
			<view class="uni-form-item uni-column" style="margin-top: 20upx;background-color: white;">
				<checkbox-group>
					<label style="border-bottom: 1upx solid #F7F7F7;">
						<view style="display: flex;align-items: center;">
							<checkbox value="checkbox1" :checked="checked"/>
							<view class="info">
								<text style="color: #626262;">知礼双人床</text>
								<text>简约软包布艺靠背床</text>
								<text style="margin-top: 40upx;">款式：原木色</text>
								<text>规格：206.5cm长*209cm宽*103cm高</text>
							</view>
						</view>
						<view class="intro">
							<image src="../../static/u677.png"></image>
						</view>
					</label>
					<view class="total">
						<text style="font-size: 26upx;">单价<text style="color: #40CCCB;margin-left: 20upx;">￥2680.00</text></text>
						<uni-number-box :min="0" :max="9"></uni-number-box>
					</view>
				</checkbox-group>
			</view>
			<view class="uni-form-item uni-column" style="margin-top: 20upx;background-color: white;">
				<checkbox-group>
					<label style="border-bottom: 1upx solid #F7F7F7;">
						<view style="display: flex;align-items: center;">
							<checkbox value="checkbox1" :checked="checked"/>
							<view class="info">
								<text style="color: #626262;">知礼双人床</text>
								<text>简约软包布艺靠背床</text>
								<text style="margin-top: 40upx;">款式：原木色</text>
								<text>规格：206.5cm长*209cm宽*103cm高</text>
							</view>
						</view>
						<view class="intro">
							<image src="../../static/u677.png"></image>
						</view>
					</label>
					<view class="total">
						<text style="font-size: 26upx;">单价<text style="color: #40CCCB;margin-left: 20upx;">￥2680.00</text></text>
						<uni-number-box :min="0" :max="9"></uni-number-box>
					</view>
				</checkbox-group>
			</view>
		</view>
		
		<view class="footer">
			<view class="coupon" @click="coupon()">
				<view>
					<text>你有一张<text style="color: #40CCCB;">650元</text></text>
					<text style="margin-left: 30upx;">优惠券<text style="color: #40CCCB;">即将过期，查看全部优惠券</text></text>
				</view>
				<image src="../../static/u169.png"></image>
			</view>
			<view class="add">
				<view class="uni-form-item uni-column">
					<checkbox-group name="checkbox"  @change="selectedall()">
						<label>
							<view style="font-size: 30upx;color: #b4b4b4;">
								<checkbox value="checkbox1" :checked="allchecked"/>
								<text>全选</text>
							</view>
						</label>
					</checkbox-group>
				</view>
				<view style="display: flex;">
					<view class="money">
						<text>合计</text>
						<text style="font-size: 25upx;color: #40CCCB;margin-top: 10upx;">￥2860.00</text>
					</view>
					<view class="amount">领券结算(4)</view>
				</view>
			</view>
		</view>
		<!-- 购物券隐藏部分 -->
		<view class="coupon-list" v-if="iscoupon==true">
			<view class="cont">
				<view class="coupon-nav">
					<text></text>
					<text>优惠券</text>
					<image src="../../static/u259.png" @click="close()"></image>
				</view>
				<view class="coupon-select">
					<text :class="{'cactive':isactive==1}" @click="couponselect(1)">当前可用</text>
					<text :class="{'cactive':isactive==2}" @click="couponselect(2)">凑单可用</text>
				</view>
				<scroll-view :scroll-y="true" v-if="isuse==1">
					<view style="display: flex;align-items: center;margin-bottom: 20upx;">
						<view class="reduction">
							<image src="../../static/u267.png" v-if="isreceive==1"></image>
							<image src="../../static/u260.png" v-if="isreceive==2"></image>
							<view>
								<text style="font-weight: bold;">￥300</text>
								<text style="font-size: 20upx;margin-top: 20upx;">满3500.00可用</text>
							</view>
						</view>
						<view class="receive">
							<text style="font-size: 32upx;margin: 25upx 0;">沙发品类卷</text>
							<text style="font-size: 20upx;color: #9b9b9b;">有限期至2019.05.05</text>
							<view @click="receive()" v-if="isreceive==1">领取</view>
							<view v-if="isreceive==2" style="background-color: #a2a2a2;">已领取</view>
						</view>
					</view>
					<view style="display: flex;align-items: center;margin-bottom: 20upx;">
						<view class="reduction">
							<image src="../../static/u267.png" v-if="isreceive==1"></image>
							<image src="../../static/u260.png" v-if="isreceive==2"></image>
							<view>
								<text style="font-weight: bold;">￥300</text>
								<text style="font-size: 20upx;margin-top: 20upx;">满3500.00可用</text>
							</view>
						</view>
						<view class="receive">
							<text style="font-size: 32upx;margin: 25upx 0;">沙发品类卷</text>
							<text style="font-size: 20upx;color: #9b9b9b;">有限期至2019.05.05</text>
							<view @click="receive()" v-if="isreceive==1">领取</view>
							<view v-if="isreceive==2" style="background-color: #a2a2a2;">已领取</view>
						</view>
					</view>
					<view style="display: flex;align-items: center;margin-bottom: 20upx;">
						<view class="reduction">
							<image src="../../static/u267.png" v-if="isreceive==1"></image>
							<image src="../../static/u260.png" v-if="isreceive==2"></image>
							<view>
								<text style="font-weight: bold;">￥300</text>
								<text style="font-size: 20upx;margin-top: 20upx;">满3500.00可用</text>
							</view>
						</view>
						<view class="receive">
							<text style="font-size: 32upx;margin: 25upx 0;">沙发品类卷</text>
							<text style="font-size: 20upx;color: #9b9b9b;">有限期至2019.05.05</text>
							<view @click="receive()" v-if="isreceive==1">领取</view>
							<view v-if="isreceive==2" style="background-color: #a2a2a2;">已领取</view>
						</view>
					</view>
					<view style="display: flex;align-items: center;margin-bottom: 20upx;">
						<view class="reduction">
							<image src="../../static/u267.png" v-if="isreceive==1"></image>
							<image src="../../static/u260.png" v-if="isreceive==2"></image>
							<view>
								<text style="font-weight: bold;">￥300</text>
								<text style="font-size: 20upx;margin-top: 20upx;">满3500.00可用</text>
							</view>
						</view>
						<view class="receive">
							<text style="font-size: 32upx;margin: 25upx 0;">沙发品类卷</text>
							<text style="font-size: 20upx;color: #9b9b9b;">有限期至2019.05.05</text>
							<view @click="receive()" v-if="isreceive==1">领取</view>
							<view v-if="isreceive==2" style="background-color: #a2a2a2;">已领取</view>
						</view>
					</view>
					<view style="display: flex;align-items: center;margin-bottom: 20upx;">
						<view class="reduction">
							<image src="../../static/u267.png" v-if="isreceive==1"></image>
							<image src="../../static/u260.png" v-if="isreceive==2"></image>
							<view>
								<text style="font-weight: bold;">￥300</text>
								<text style="font-size: 20upx;margin-top: 20upx;">满3500.00可用</text>
							</view>
						</view>
						<view class="receive">
							<text style="font-size: 32upx;margin: 25upx 0;">沙发品类卷</text>
							<text style="font-size: 20upx;color: #9b9b9b;">有限期至2019.05.05</text>
							<view @click="receive()" v-if="isreceive==1">领取</view>
							<view v-if="isreceive==2" style="background-color: #a2a2a2;">已领取</view>
						</view>
					</view>
				</scroll-view>
				<scroll-view :scroll-y="true" v-if="isuse==2">
					<view style="display: flex;align-items: center;margin-bottom: 20upx;">
						<view class="reduction">
							<image src="../../static/u267.png" v-if="isreceive==1"></image>
							<image src="../../static/u260.png" v-if="isreceive==2"></image>
							<view>
								<text style="font-weight: bold;">￥300</text>
								<text style="font-size: 20upx;margin-top: 20upx;">满3500.00可用</text>
							</view>
						</view>
						<view class="bill">
							<view>
								<text style="font-size: 32upx;margin: 25upx 0;">沙发品类卷</text>
								<text style="font-size: 20upx;color: #9b9b9b;">有限期至2019.05.05</text>
							</view>
							<view>
								<text class="billing">去凑单</text>
								<text style="font-size: 20upx;color: #9b9b9b;">还差<text style="color: #40CCCB;">136.21元</text>可用</text>
							</view>
						</view>
					</view>
					<view style="display: flex;align-items: center;margin-bottom: 20upx;">
						<view class="reduction">
							<image src="../../static/u267.png" v-if="isreceive==1"></image>
							<image src="../../static/u260.png" v-if="isreceive==2"></image>
							<view>
								<text style="font-weight: bold;">￥300</text>
								<text style="font-size: 20upx;margin-top: 20upx;">满3500.00可用</text>
							</view>
						</view>
						<view class="bill">
							<view>
								<text style="font-size: 32upx;margin: 25upx 0;">沙发品类卷</text>
								<text style="font-size: 20upx;color: #9b9b9b;">有限期至2019.05.05</text>
							</view>
							<view>
								<text class="billing">去凑单</text>
								<text style="font-size: 20upx;color: #9b9b9b;">还差<text style="color: #40CCCB;">136.21元</text>可用</text>
							</view>
						</view>
					</view>
					<view style="display: flex;align-items: center;margin-bottom: 20upx;">
						<view class="reduction">
							<image src="../../static/u267.png" v-if="isreceive==1"></image>
							<image src="../../static/u260.png" v-if="isreceive==2"></image>
							<view>
								<text style="font-weight: bold;">￥300</text>
								<text style="font-size: 20upx;margin-top: 20upx;">满3500.00可用</text>
							</view>
						</view>
						<view class="bill">
							<view>
								<text style="font-size: 32upx;margin: 25upx 0;">沙发品类卷</text>
								<text style="font-size: 20upx;color: #9b9b9b;">有限期至2019.05.05</text>
							</view>
							<view>
								<text class="billing">去凑单</text>
								<text style="font-size: 20upx;color: #9b9b9b;">还差<text style="color: #40CCCB;">136.21元</text>可用</text>
							</view>
						</view>
					</view>
					<view style="display: flex;align-items: center;margin-bottom: 20upx;">
						<view class="reduction">
							<image src="../../static/u267.png" v-if="isreceive==1"></image>
							<image src="../../static/u260.png" v-if="isreceive==2"></image>
							<view>
								<text style="font-weight: bold;">￥300</text>
								<text style="font-size: 20upx;margin-top: 20upx;">满3500.00可用</text>
							</view>
						</view>
						<view class="bill">
							<view>
								<text style="font-size: 32upx;margin: 25upx 0;">沙发品类卷</text>
								<text style="font-size: 20upx;color: #9b9b9b;">有限期至2019.05.05</text>
							</view>
							<view>
								<text class="billing">去凑单</text>
								<text style="font-size: 20upx;color: #9b9b9b;">还差<text style="color: #40CCCB;">136.21元</text>可用</text>
							</view>
						</view>
					</view>
					<view style="display: flex;align-items: center;margin-bottom: 20upx;">
						<view class="reduction">
							<image src="../../static/u267.png" v-if="isreceive==1"></image>
							<image src="../../static/u260.png" v-if="isreceive==2"></image>
							<view>
								<text style="font-weight: bold;">￥300</text>
								<text style="font-size: 20upx;margin-top: 20upx;">满3500.00可用</text>
							</view>
						</view>
						<view class="bill">
							<view>
								<text style="font-size: 32upx;margin: 25upx 0;">沙发品类卷</text>
								<text style="font-size: 20upx;color: #9b9b9b;">有限期至2019.05.05</text>
							</view>
							<view>
								<text class="billing">去凑单</text>
								<text style="font-size: 20upx;color: #9b9b9b;">还差<text style="color: #40CCCB;">136.21元</text>可用</text>
							</view>
						</view>
					</view>
				</scroll-view>
				<view class="sure">确定</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniNumberBox from "@/components/uni-number-box/uni-number-box.vue"
	export default {
		data() {
			return {
				allchecked:false,
				checked:false,
				isactive:1,
				isreceive:1,
				isuse:1,
				iscoupon:false,
				id:'',
				listdata:[]
			}
		},
		onLoad(){
			this.getdata()
		},
		methods: {
			selectedall:function(){
				 this.allchecked=!this.allchecked;
				 if(this.allchecked){
					 this.checked=true
				 }else{
					this.checked=false
				 }
			 },
			 couponselect(index){
				 this.isactive = index;
				 this.isuse = index
			 },
			 receive(){
				 this.isreceive = 2;
			 },
			 coupon(){
				 this.iscoupon = true
			 },
			 close(){
				 this.iscoupon = false
			 },
			 getdata(){
				 uni.getStorage({
				 	key:'userinfo',
				 	success:(res)=>{
				 		console.log('获取到了')
				 		console.log(res.data.id)
				 		this.id = res.data.id
				 		uni.request({
				 			url:this.common.websiteUrl+"user_cart_index",
				 			header:{"user-token":"6a109faf305513d443337ddb1ad4cb9b"},
				 			method:"post",
				 			data:{
				 				'user_id':res.data.id
				 			},
				 			success: (res) => {
								// console.log(this.listdata)
								Object.keys(res.data.data).forEach((item, index,key) => {
								   console.log(item);
								   console.log(index);
								   this.list = key
								   this.listdata = res.data.data[key]
								   console.log(this.listdata);
								   console.log(this.list);
								})
				 			}
				 		});
				 	},fail:()=>{
				 		console.log(22222222)
				 	}
				 })
			 }
		},
		components:{
			uniNumberBox
		}
	}
</script>

<style lang="scss">
@import url("../../css/car.css");
</style>
