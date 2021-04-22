<template>
	<view>
		<view class="aline"></view>
		<view class="nav">
			<view style="width: 40upx;height: 40upx;" @click="back">
				<image src="../../static/u164.png"></image>
			</view>
			<text>新增收货地址</text>
			<text style="font-size: 25upx;" @click="sure">确定</text>
		</view>
		<view style="padding: 0 30upx;box-sizing: border-box;">
			<input placeholder="收货人姓名" style="border-bottom: 1upx solid #F7F7F7;margin-top: 30upx;" @input="nameinput" :value="name"/>
			<input placeholder="手机号码"  @input="phoneinput" :value="phone"/>
			<input placeholder="省、市、区":value="cont" style="border-bottom: 1upx solid #F7F7F7;margin-top: 30upx;"  @click="show=true" @input="areainput"/>
			<u-select v-model="show" mode="mutil-column-auto" :list="list"  @confirm="confirm"></u-select>
			<input placeholder="街道地区"  @input="streetinput" :value="street"/>
			<view style="margin: 100upx 0 20upx;font-weight: bold;">设为默认地址</view>
			<view style="display: flex;justify-content: space-between;align-items: center;">
				<text style="font-size: 25upx;color: #a9a9a9;">注：每天下单时自动使用该地址</text>
				<u-switch v-model="checked" active-color="#40cbbb" @change="change"></u-switch>
			</view>
		</view>
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	import helper from '../../common/common.js';
	export default {
		data() {
			return {
				checked: false,
				name:'',
				phone:'',
				user_id:'',
				show:false,
				province:'',
				city:'',
				area:'',
				street:'',
				cont:'',
				list:[],
				addresslist:[],
				statu:'',
				addressid:'',
				edit:0
			}
		},
		onLoad(options){
			if(options.addressid){
				this.addressid= options.addressid
				this.get_details(options.addressid)
				this.edit=1
			}
				
			console.log(this.addressid)
			uni.getStorage({
				key:'userinfo',
				success:(res)=>{
					this.user_id = res.data.id;
				}
			})
			uni.request({
				url:helper.websiteUrl+"service_pca",
				header:{"user-token":"6a109faf305513d443337ddb1ad4cb9b"},
				method:"post",
				data:{},
				success: (res) => {
					console.log(res.data.data)
					this.list = res.data.data
				}
			});
		},
		methods: {
			get_details(id){
				uni.request({
					url:this.common.websiteUrl+"base_shipaddresssee",
					header:{"user-token":"6a109faf305513d443337ddb1ad4cb9b"},
					method:"post",
					data:{
						'id':id
					},
					success: (res) => {
						console.log(res.data.data)
						this.addresslist = res.data.data;
						this.name = this.addresslist.name;
						this.phone = this.addresslist.phone;
						this.province = this.addresslist.province;
						this.city = this.addresslist.city;
						this.area = this.addresslist.area;
						this.street = this.addresslist.street;
						this.cont = this.province+this.city+this.area;
						this.statu = parseInt(this.addresslist.status);
						if(this.statu==1){
							this.checked=true
						}else{
							this.checked=false
						}
					}
				});
			},
			change(status) {
				if(status == true){
					this.statu = 1
				}else{
					this.statu = 2
				}
			},
			confirm(res){
				this.province = res[0].label
				this.city = res[1].label
				this.area = res[2].label
				this.cont=this.province+this.city+this.area
				
			},
			nameinput(e){
				this.name = e.detail.value
			},
			phoneinput(e){
				this.phone = e.detail.value	
			},
			streetinput(e){
				this.street = e.detail.value
			},
			callback(Error){
				 console.log("name",Error);
				this.$refs.uToast.show({
					title: Error,
					type: 'default',
					// url: '../tellogin/tellogin'
				})
				 
			},
			sure(){
				if(this.name == '' || this.phone == '' || this.province == '' || this.city == '' || this.area == '' || this.street ==''){
					this.callback('请将信息填写完整');
					return
				}else{
					if (this.phone !== '') {
						  var reg=/^1[3456789]\d{9}$/;
						  if(!reg.test(this.phone)){
							this.callback('请输入有效的手机号码');
						  }else{
							  if(this.edit==1){
								  uni.request({
								  	url:helper.websiteUrl+"base_shipaddressedit",
								  	header:{"user-token":"6a109faf305513d443337ddb1ad4cb9b"},
								  	method:"post",
								  	data:{
								  		'name':this.name,
								  		'phone':this.phone,
								  		'user_id':this.user_id,
								  		'id':this.addressid,
								  		'city':this.city,
								  		'area':this.area,
								  		'street':this.street,
								  		'status':this.statu,
								  	},
								  	success: (res) => {
										console.log(this.addressid)
								  		uni.redirectTo({
								  		    url: '../receivingaddress/receivingaddress'
								  		});
								  	}
								  });
							  }else{
								  uni.request({
								  	url:helper.websiteUrl+"base_shipaddressadd",
								  	header:{"user-token":"6a109faf305513d443337ddb1ad4cb9b"},
								  	method:"post",
								  	data:{
								  		'name':this.name,
								  		'phone':this.phone,
								  		'user_id':this.user_id,
										'id':this.addressid,
								  		'city':this.city,
								  		'area':this.area,
								  		'street':this.street,
								  		'status':this.statu,
								  	},
								  	success: (res) => {
								  		uni.redirectTo({
								  		    url: '../receivingaddress/receivingaddress'
								  		});
								  	}
								  });
							  }
								
						  }
					}
					
				}
					
				
			}
		}
	}
</script>

<style>
.aline{
	 height: var(--status-bar-height);
	  width: 100%;
	  z-index: 100;
	  background-color: white;
	  position: fixed;
	  top: 0;
	  left: 0;
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
	font-weight: bold;
	border-bottom: 1upx solid #F7F7F7;
}
.nav image{
	width: 24upx;
	height: 38upx;
}
input{
	font-size: 28upx;
	height: 60upx;
	width: 100%;
}
</style>
