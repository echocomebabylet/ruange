<template>
	<view>
		<view class="nav">
			<view style="width: 40upx;height: 40upx;" @click="back">
				<image src="../../static/u164.png"></image>
			</view>
			<text style="font-weight: bold;margin-left: 30upx;">收货地址</text>
			<text style="font-size: 20upx;" @click="addaddress">添加新地址</text>
		</view>
		<view v-if="isactive==1" class="nothing">
			<image src="../../static/u721.png"></image>
			<text>深夜那一抹灯光的温暖，是家的方向</text>
			<text>留下家的方向，让优品置于家中</text>
		</view>
		<view v-if="isactive==2" class="something">
			<u-swipe-action :show="item.show" :index="index" 
			v-for="(item, index) in listdata" :key="item.id" 
			@click="click" @open="open" :options="options" style="padding: 20upx 30upx;box-sizing: border-box;font-size: 24upx;">
				<view style="display: flex;justify-content: space-between;align-items: center;">
					<text style="font-size: 28upx;">收货人：{{item.name}}</text>
					<text style="font-weight: bold;">{{item.phone}}</text>
				</view>
				<view style="display: flex;align-items: center;margin-top: 20upx;justify-content: space-between;">
					<view style="display: flex;align-items: center;">
						<view style="width: 66upx;height: 44upx;line-height: 44upx;text-align: center;background-color: black;color: white;margin-right: 10upx;" v-if="item.status==1?isstatus==false:isstatus==true">默认</view>
						<text>收货地址：{{item.province}}{{item.city}}{{item.area}}{{item.street}}</text>
					</view>
					<image src="../../static/change.png" style="width: 20upx;height: 20upx;" v-bind:id="item.id" @click="revise" ></image>
				</view>
			</u-swipe-action>
		</view>
	</view>
</template>

<script>
	import helper from '../../common/common.js';
	export default {
		data() {
			return {
				options: [
					{
						text: '删除',
						style: {
							backgroundColor: '#dd524d'
						}
					}
				],
				isactive:1,
				user_id:'',
				id:'',
				isstatus:false,
				show:true,
				listdata:[]
			}
		},
		methods: {
			addaddress(){
				uni.navigateTo({
				    url: '../addingaddress/addingaddress'
				});
			},
			revise:function(e){
				let addressid = e.target.id
				uni.navigateTo({
				    url: '../addingaddress/addingaddress?addressid='+addressid
				});
			},
			click(index, index1) {
				this.listdata.splice(index, 1);
				this.$u.toast(`已删除`);
				console.log(this.id)
				uni.request({
					url:helper.websiteUrl+"base_shipaddressdel",
					header:{"user-token":"6a109faf305513d443337ddb1ad4cb9b"},
					method:"post",
					data:{
						'user_id':this.user_id,
						'id':this.id,
					},
					success: (res) => {
						console.log(111111)
						uni.redirectTo({
						    url: '../receivingaddress/receivingaddress'
						});
					}
				});
			},
			open(index) {
				this.listdata[index].show = true;
				this.listdata.map((val, idx) => {
					if(index != idx) this.listdata[idx].show = false;
				});
				this.id = this.listdata[index].id;
			}
		},
		onLoad(){
			uni.getStorage({
				key:'userinfo',
				success:(res)=>{
					console.log(res.data)
					this.user_id = res.data.id;
				}
			})
		},
		onShow(){
			var that = this
			uni.request({
				url:helper.websiteUrl+"base_shipaddresslist",
				header:{"user-token":"6a109faf305513d443337ddb1ad4cb9b"},
				method:"post",
				data:{
					'user_id':that.user_id,
					'show':that.show,
					'id':that.id,
				},
				success: (res) => {
					that.listdata = res.data.data;
					if(that.listdata.length > 0){
						that.isactive = 2
					}else{
						that.isactive = 1
					}
				}
			});
		}
	}
</script>

<style>
.nav{
	padding: 0 30upx;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 32upx;
	height: 130upx;
	background-color: white;
	border-bottom: 1upx solid #F7F7F7;
}
.nav image{
	width: 24upx;
	height: 38upx;
}
.nothing{
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translateX(-50%) translateY(-50%);
	font-size: 28upx;
	color: #cacaca;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
}
.nothing image{
	width: 155upx;
	height: 155upx;
	margin-bottom: 50upx;
}
</style>
