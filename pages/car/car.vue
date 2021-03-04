<template>
	<view>
		<view class="nav">
			<image src="../../static/u18.png"></image>
			<text>购物车</text>
			<text style="color: white;">返回</text>
		</view>
		<view class="product-list" v-for="(arr,index) in list" :key="index">
			 <view class="uni-form-item uni-column" style="background-color: white;">
				<checkbox-group name="checkbox1" >
					<label>
						<view @click="qx_space(index)">
							<checkbox value="checkbox1" :checked="arr.checked"/>
							<text style="font-size: 30upx;font-weight: bold;margin-left: 20upx;">{{arr.name}}</text>
						</view>
						<text style="font-size: 26upx;font-weight: bold;margin-left: 10upx;">￥2680.00</text>
					</label>
				</checkbox-group>
			</view>
			<view class="uni-form-item uni-column" style="margin-top: 20upx;background-color: white;" v-for="(items,indexs) in arr.list" :key="indexs">
				<checkbox-group >
					<label style="border-bottom: 1upx solid #F7F7F7;">
						
						<view style="display: flex;align-items: center;">
							<checkbox value="checkbox1" :checked="items.checked" @click="dx_son(index,indexs)"/>
							<view class="info">
								<text style="color: #626262;">{{items.pro_brand_name}}</text>
								<text style="margin-bottom: 40upx;">{{items.pro_name}}</text>
								<text v-for="(item,index) in items.paralist" :key="index">{{item}}</text>
							</view>
						</view>
						<view class="intro">
							<image :src="getimgurl(items.pro_img)"></image>
						</view>
					</label>
					<view class="total">
						<text style="font-size: 26upx;">单价<text style="color: #40CCCB;margin-left: 20upx;">￥{{items.pro_price}}</text></text>
						<uni-number-box :min="0" :max="9" v-model="items.pro_num"></uni-number-box>
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
					<checkbox-group name="checkbox" >
						<label>
							<view style="font-size: 30upx;color: #b4b4b4;" @click="qx()">
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
				list:[],
				pronum:'',
				proprice:'',
				aount:''
			}
		},
		onLoad(){
			console.log('非常ok')
			this.getdata()
		},
		methods: {
			qx_space(key){
				var status = false
				if(this.list[key].checked == false){
					status = true
				}else{
					status = false
				}
				this.list[key].checked = status
				for (var i=0; i<this.list[key]['list'].length; i++) {
					this.list[key]['list'][i].checked = status
				}
				setTimeout(()=>{
					this.qx_jc()
				},50)
				console.log('看这里'+key)
			},
			dx_son(key,key1){
				if(this.list[key]['list'][key1].checked == false){
					this.list[key]['list'][key1].checked = true
				}else{
					this.list[key]['list'][key1].checked = false
				}
				var lens = 0
				for (var i=0;i<this.list[key]['list'].length;i++) {
					if(this.list[key]['list'][i].checked == true){
						lens++
					}
					
				}
				if(this.list[key]['list'].length == lens){
					this.list[key].checked = true
				}else{
					this.list[key].checked = false
				}
				setTimeout(()=>{
					this.qx_jc()
					
				},50)
				
			},
			qx_jc(){
				var status = true
				for (var i = 0; i < this.list.length; i++) {
					var dat = this.list[i]
					for (var is = 0; is < dat.list.length; is++) {
						if(this.list[i]['list'][is].checked == false){
							status = false;
							break;
						}
					}
				}
				this.allchecked = status
			},
			
			qx(){
				var status = false;
				if(this.allchecked == false){
					status = true
					this.allchecked = true
				}else{
					status = false;
					this.allchecked = false
				}
				for (var i = 0; i < this.list.length; i++) {
					var dat = this.list[i]
					this.list[i].checked = status
					for (var is = 0; is < dat.list.length; is++) {
						this.list[i]['list'][is].checked = status
					}
				}
			},
			 getimgurl(image){
			 	return"http://uniapp.ruange.com.cn/"+image
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
								console.log(res.data.data);
								console.log(res);
								this.list = res.data.data
								for (var i = 0; i < this.list.length; i++) {
									var dats= this.list[i]
									for (var is = 0; is < dats.list.length; is++) {
										this.pronum = dats.list[is].pro_num
										this.proprice = dats.list[is].pro_price
									}
									this.aount += this.pronum*this.proprice
								}
								console.log(this.pronum)
								console.log(this.proprice)
								console.log(this.aount)
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