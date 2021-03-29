<template>
	<view>
		<view class="nav">
			<view style="width: 50upx;height: 40upx;" @click="back">
				<image src="../../static/u18.png"></image>
			</view>
			<text>预约体验家</text>
			<text style="color: white;">返</text>
		</view>
		<view style="padding: 45upx 30upx;box-sizing: border-box;border-bottom: 1upx solid #F7F7F7;">
			<text style="font-size: 28upx;margin: 0 0 45upx;display: block;">确认位置</text>
			<text style="font-size: 24upx;display: block;color: #bbbbbb;">{{datalist.address}}</text>
			<text style="font-size: 24upx;margin: 24upx 0;display: block;color: #bbbbbb;">距离大约{{datalist.distance}}km</text>
			<view class="page-body">
				<view class="page-section page-section-gap">
					<map v-if="lat" style="width: 100%;height: 260upx;" :latitude="lat" :longitude="lon" :markers="covers">
					</map>
				</view>
			</view>
		</view>
		<view style="padding: 35upx 30upx;box-sizing: border-box;border-bottom: 1upx solid #F7F7F7;font-size: 28upx;display: flex;justify-content: space-between;align-items: center;" @click="show = true">
			<text>选择时间</text>
			<view style="display: flex;align-items: center;">
				<text style="color: #bbbbbb;">{{choicetime}}</text>
				<image src="../../static/u8.png" style="width: 10upx;height: 20upx;margin-left: 10upx;"></image>
			</view>
			<u-calendar v-model="show" :min-date="todaytime" max-date="3120-09-09" :mode="mode" :exper_id="exper_id" @aoligei='aoligei'></u-calendar>
		</view>
		<view style="padding: 35upx 30upx;box-sizing: border-box;border-bottom: 1upx solid #F7F7F7;font-size: 28upx;display: flex;justify-content: space-between;align-items: center;">
			<text>体验方式</text>
			<view style="display: flex;align-items: center;font-size: 22upx;">
				<view style="width: 120upx;height: 40upx;line-height: 40upx;text-align: center;background-color: #f2f2f2;border-radius: 5upx;" :class="{'active':isactive==1}" @click="select(1)">线下体验</view>
				<view style="width: 120upx;height: 40upx;line-height: 40upx;text-align: center;background-color: #f2f2f2;margin-left: 20upx;border-radius: 5upx;" :class="{'active':isactive==2}" @click="select(2)">视频体验</view>
			</view>
		</view>
		<view style="padding: 35upx 30upx;box-sizing: border-box;border-bottom: 1upx solid #F7F7F7;font-size: 28upx;">
			<text>预留信息</text>
			<view style="display: flex;align-items: center;justify-content: space-between;margin: 45upx 0;color: #bbb;">
				<text>称呼</text>
				<input v-model="name" placeholder="请输入对您的称呼" />
			</view>
			<view style="display: flex;align-items: center;justify-content: space-between;color: #bbb;">
				<text>手机号码</text>
				<input v-model="phone" placeholder="请输入您的手机号码" />
			</view>
			<view style="display: flex;align-items: center;justify-content: space-between;color: #bbb;margin-top: 45upx;">
				<text>体验人数</text>
				<uni-number-box @change="setusernum" :min="0" :max="9"></uni-number-box>
			</view>
		</view>
		<view v-if="!datalist.auth_is" style="padding: 35upx 30upx;box-sizing: border-box;border-bottom: 1upx solid #F7F7F7;font-size: 28upx;display: flex;justify-content: space-between;align-items: center;" @click="names">
			<view style="display: flex;flex-direction: column;">
				<text>实名认证</text>
				<text style="font-size: 26upx;color: #bbb;">人脸多因子识别</text>
			</view>
			<view style="display: flex;align-items: center;">
				<text style="color: #c66966;">待认证</text>
				<image src="../../static/u8.png" style="width: 10upx;height: 20upx;margin-left: 10upx;"></image>
			</view>
		</view>
		<view style="padding: 35upx 30upx 200upx;box-sizing: border-box;font-size: 28upx;">
			<view style="display: flex;flex-direction: column;margin-bottom: 20upx;">
				<text>上传照片</text>
				<text style="font-size: 26upx;color: #bbb;">上传本人照片让体验家一眼认出你</text>
			</view>
			<view @click="upimg" style="width: 100%;height: 530upx;border: 3upx solid #F7F7F7;">
				<image v-if="userimg==''" src="../../static/u1530.png" style="width: 86upx;height: 80upx;margin: 225upx auto;display: block;"></image>
				<image v-if="userimg!=''" :src="sbimg" style="width: 100%;height: 100%;"></image>
			</view>
		</view>
		<view class="btn" @click="qr">确认预约</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				todaytime:'',
				isactive:1,
				show:false,
				mode:'date',
				id:0, // 使用 marker点击事件 需要填写id
				title: 'map',
				latitude: 39.909,
				longitude: 116.39742,
				covers: [{
					latitude: 39.909,
					longitude: 116.39742,
					iconPath: '../../../static/location.png'
					}, {
					latitude: 39.90,
					longitude: 116.39,
					iconPath: '../../../static/location.png'
				}],
				lon:'',
				lat:'',
				exper_id:0,
				userinfo:[],
				datalist:[],
				name:'',
				phone:'',
				usernum:1,
				userimg:'',
				sbimg:'../../static/u1530.png',
				// type:1,
				makeapp:0,
				maketime:'2020-02-02',
				choicetime:'请选择'
			}
		},
		onShow() {
			console.log('嘿嘿')
		},
		onLoad(options) {
			options.id = 5
			this.exper_id = options.id
			this.getTime()
			this.getdata()
		},
		methods: {
			getTime(){
			
				var date = new Date(),
				year = date.getFullYear(),
				month = date.getMonth() + 1,
				day = date.getDate(),
				hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours(),
				minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(),
				second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
				month >= 1 && month <= 9 ? (month = "0" + month) : "";
				day >= 0 && day <= 9 ? (day = "0" + day) : "";
				var timer = year + '-' + month + '-' + day ;
				this.todaytime = timer
				// return timer;
			},
			aoligei(e){
				this.choicetime = e
			},
			upimg(){
				let _self = this
				uni.chooseImage({
				    count: 1,
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album'], //从相册选择
				    success: function (res) {
						 const tempFilePaths = res.tempFilePaths;
						 uni.uploadFile({
							url : _self.common.websiteUrl+"service_uploadimg",
							header:{"user-token":"6a109faf305513d443337ddb1ad4cb9b"},
							filePath: tempFilePaths[0],
							name: 'images',
							formData: {
							    'compress': true
							},
							success: (res)=> {
								var res = JSON.parse(res.data)
								console.log(res)
								_self.userimg = res.data
								_self.sbimg = _self.common.getimgurl(res.data)
								_self.common.callback('上传成功')
							},fail(){
								_self.common.network()
							}
						 });
				    },error : function(e){
				     console.log(e);
				    }
				});
			},
			select(index){
				this.isactive = index
			},
			back(){
				uni.navigateBack({
				    delta: 1
				});
			},
			setusernum(e){
				this.usernum = e
			},
			qr(){
				let _self = this
				if(_self.name==''){
					return _self.common.callback('请输入姓名')
				}
				
				var reg=/^1[3456789]\d{9}$/;
				if(!reg.test(_self.phone)){
					return _self.common.callback('请输入有效的手机号码');
				}
				
				if(_self.userimg==''){
					return _self.common.callback('请上传本人照片')
				}
				
				if(_self.choicetime=='未选择'){
					return _self.common.callback('请选择预约时间')
				}
				uni.request({
					url:_self.common.websiteUrl+"experhome_owners_makeapp",
					header:{"user-token":"6a109faf305513d443337ddb1ad4cb9b"},
					method:"post",
					data:{
							'user_id':_self.userinfo.id,
							'exper_id':_self.exper_id,
							'name':_self.name,
							'phone':_self.phone,
							'makenum':_self.usernum,
							'maketype':_self.isactive,
							'makeapp':_self.datalist.makeapp,
							'userimg':_self.userimg,
							'maketime':_self.choicetime,
							// 'name':_self.name,
						},
					success: (res) => {
						if(res.data.code==200){
							_self.common.callback('预约成功')
							setTimeout(() => {
								_self.back()
							}, 2000);
						}
					},fail() {
						_self.common.network()
					}
				});
				
				
			},
			get_loacal(){
				return new Promise((resolve,reject)=>{
					
					uni.getLocation({
						type: 'wgs84',
						geocode:true,//设置该参数为true可直接获取经纬度及城市信息
						success:(res) =>{
							this.lon = res.longitude
							this.lat = res.latitude
							console.log(this.lon)
							resolve('suc')
						},
						fail: function () {
							uni.showToast({
								title: '获取地址失败，将导致部分功能不可用',
								icon:'none'
							});
							resolve('err')
						}
					});
					uni.getStorage({
						key: 'userinfo',
						success:(res)=>{
							this.userinfo = res.data
						}
					});	
				})
			},
			async getdata(){
				
				var that = this
				await that.get_loacal()
				
				uni.request({
					url:that.common.websiteUrl+"experhome_owners_exper_def",
					header:{"user-token":"6a109faf305513d443337ddb1ad4cb9b"},
					method:"post",
					data:{
							'user_id':that.userinfo.id,
							'exper_id':that.exper_id,
							'lon':that.lon,
							'lat':that.lat
						},
					success: (res) => {
						that.datalist = res.data.data
						console.log(that.datalist)
					},fail() {
						that.common.network()
					}
				});
			
				
				
			},
			names(){
				uni.navigateTo({
				    url: '../namecertification/namecertification'
				});
			}
		}
	}
</script>

<style>
page{
	padding-top: 130upx;
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
	top: 0;
	left: 0;
	z-index: 1000;
	border-bottom: 1upx solid #F7F7F7;
}
.nav image{
	width: 50upx;
	height: 40upx;
}
.active{
	background-color: #40CCCB !important;
	color: white;
}
input{
	font-size: 28upx;
	text-align: right;
}
.uni-numbox /deep/ .uni-numbox__plus,
.uni-numbox /deep/ .uni-numbox__minus,
.uni-numbox /deep/ .uni-numbox__value{
	border-style: none !important;
	color: black !important;
	background-color: white !important;
}
.btn{
	width: 90%;
	height: 110upx;
	line-height: 110upx;
	background-color: #40CCCB;
	color: white;
	font-size: 30upx;
	font-weight: bold;
	text-align: center;
	position: fixed;
	bottom: 10upx;
	left: 50%;
	transform: translateX(-50%);
	border-radius: 15upx;
	box-shadow: 5upx 5upx 10upx 0 rgba(0,0,0,0.4);
}
</style>
