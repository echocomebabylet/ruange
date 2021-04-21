<template>
	<view>
		<view class="aline"></view>
		<view class="nav">
			<view style="width: 40upx;height: 40upx;" @click="back">
				<image src="../../static/u164.png"></image>
			</view>
			<text>软阁孵化室-认证入驻软阁</text>
			<text style="color: white;">返</text>
		</view>
		<view style="height: 180upx;"></view>
		<view class="list">
			<view class="photo" @click="photo" :style="isphoto==true?'background:#40cccb':'background:#fff'">
				<image v-if="isphoto==true" src="../../static/u306.png" style="margin: 60upx auto 0;"></image>
				<image v-if="isphoto==false" :src="myphoto" style="width: 100%;height: 100%;border-radius: 50%;z-index: 100;display: block;"></image>
			</view>
			<text style="display: block;width: 400upx;text-align: center;color: #fd837c;margin: 0 auto 40upx;">*请设置本人正面五官清晰的照片（勿戴墨镜）</text>
			<view style="padding: 22upx 0;box-sizing: border-box;border-bottom: 1upx solid #F7F7F7;display: flex;justify-content: space-between;align-items: center;">
				<text>勾选主要服务领域<text style="color: red;">*</text></text>
			</view>
			<view style="padding: 22upx 0;box-sizing: border-box;border-bottom: 1upx solid #F7F7F7;display: flex;justify-content: space-between;align-items: center;" @click="select(1)">
				<text>室内设计师</text>
				<image src="../../static/u317.png" style="width: 30upx;height: 30upx;" v-if="isactive==1"></image>
			</view>
			<view style="padding: 22upx 0;box-sizing: border-box;border-bottom: 1upx solid #F7F7F7;display: flex;justify-content: space-between;align-items: center;" @click="select(2)">
				<text>软装设计师</text>
				<image src="../../static/u317.png" style="width: 30upx;height: 30upx;" v-if="isactive==2"></image>
			</view>
			<view style="padding: 22upx 0;box-sizing: border-box;border-bottom: 1upx solid #F7F7F7;display: flex;justify-content: space-between;align-items: center;" @click="select(3)">
				<text>全屋设计师</text>
				<image src="../../static/u317.png" style="width: 30upx;height: 30upx;" v-if="isactive==3"></image>
			</view>
			<view style="padding: 22upx 0;box-sizing: border-box;border-bottom: 1upx solid #F7F7F7;display: flex;justify-content: space-between;align-items: center;" @click="select(4)">
				<text>品牌入驻</text>
				<image src="../../static/u317.png" style="width: 30upx;height: 30upx;" v-if="isactive==4"></image>
			</view>
			<view style="margin-top: 40upx;">
				<view style="padding: 22upx 0;box-sizing: border-box;border-bottom: 1upx solid #F7F7F7;display: flex;justify-content: space-between;align-items: center;">
					<text>个人信息</text>
				</view>
				<view style="padding: 22upx 0;box-sizing: border-box;border-bottom: 1upx solid #F7F7F7;display: flex;justify-content: space-between;align-items: center;">
					<text>姓名<text style="color: red;">*</text></text>
					<input placeholder="填写姓名" style="text-align: right;font-size: 28upx;" @input="namecont"/>
				</view>
				<view style="padding: 22upx 0;box-sizing: border-box;border-bottom: 1upx solid #F7F7F7;display: flex;justify-content: space-between;align-items: center;">
					<text>手机号码<text style="color: red;">*</text></text>
					<input placeholder="填写接单手机号" style="text-align: right;font-size: 28upx;" @input="phonecont"/>
				</view>
				<view style="padding: 22upx 0;box-sizing: border-box;border-bottom: 1upx solid #F7F7F7;display: flex;justify-content: space-between;align-items: center;">
					<text>QQ</text>
					<input placeholder="填写QQ号" style="text-align: right;font-size: 28upx;" @input="qqnumcont"/>
				</view>
				<view style="padding: 22upx 0;box-sizing: border-box;border-bottom: 1upx solid #F7F7F7;display: flex;justify-content: space-between;align-items: center;">
					<text>微信</text>
					<input placeholder="填写微信号" style="text-align: right;font-size: 28upx;" @input="webchatnumcont"/>
				</view>
				<view style="padding: 22upx 0;box-sizing: border-box;border-bottom: 1upx solid #F7F7F7;display: flex;justify-content: space-between;align-items: center;">
					<text>邮箱</text>
					<input placeholder="填写常用邮箱" style="text-align: right;font-size: 28upx;" @input="emailcont"/>
				</view>
				<view style="padding: 22upx 0;box-sizing: border-box;border-bottom: 1upx solid #F7F7F7;display: flex;justify-content: space-between;align-items: center;">
					<text>所在城市</text>
					<input placeholder="填写所在城市" style="text-align: right;font-size: 28upx;" @input="citycont"/>
				</view>
				<view style="padding: 22upx 0;box-sizing: border-box;border-bottom: 1upx solid #F7F7F7;display: flex;justify-content: space-between;align-items: center;">
					<text>个人介绍</text>
				</view>
				<textarea placeholder="可以是一段简单的自我介绍~" class="intro" @input="intro"></textarea>
				<view style="padding: 22upx 0;box-sizing: border-box;border-bottom: 1upx solid #F7F7F7;display: flex;justify-content: space-between;align-items: center;">
					<text>认证信息</text>
				</view>
				<view style="padding: 22upx 0;box-sizing: border-box;border-bottom: 1upx solid #F7F7F7;display: flex;justify-content: space-between;align-items: center;">
					<text>身份证号</text>
					<input placeholder="填写您的身份证号" style="text-align: right;font-size: 28upx;" @input="idcardcont"/>
				</view>
				<view class="upload">
					<image src="../../static/u346.png"></image>
					<text>点击上传认证照片</text>
				</view>
			</view>
		</view>
		<view class="submit" @click="submit" v-if="issubmit==true">提交申请</view>
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	import helper from '../../common/common.js';
	export default {
		data() {
			return {
				isactive:0,
				user_id:'',
				name:'',
				myphoto:'',
				phone:'',
				qqnum:'',
				webchatnum:'',
				email:'',
				personalinfo:'',
				idcard:'',
				cardphoto:'',
				city:'',
				issubmit:true,
				isphoto:true,
			}
		},
		onLoad() {
		    uni.getSystemInfo({
		        success: (res)=> {
		            this.windowHeight = res.windowHeight;
		        }
		    });    
		    uni.onWindowResize((res) => {
		        if(res.size.windowHeight+200 < this.windowHeight){
		            this.issubmit = false
		        }else{
		            this.issubmit = true
		        }
		    })
		},
		methods: {
			callback(Error){
				 console.log("name",Error);
				this.$refs.uToast.show({
					title: Error,
					type: 'default',
					// url: '../tellogin/tellogin'
				})
				 
			},
			back(){
				uni.switchTab({
				    url: '/pages/my/my'
				});
			},
			select(index){
				this.isactive = index
			},
			intro(e){
				this.personalinfo = e.detail.value
			},
			namecont(e){
				this.name = e.detail.value
			},
			phonecont(e){
				this.phone = e.detail.value
			},
			qqnumcont(e){
				this.qqnum = e.detail.value
			},
			webchatnumcont(e){
				this.webchatnum = e.detail.value
			},
			emailcont(e){
				this.email = e.detail.value
			},
			citycont(e){
				this.city = e.detail.value
			},
			idcardcont(e){
				this.idcard = e.detail.value
			},
			photo(){
				var that = this;
				uni.chooseImage({
				    count: 1, //默认9
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album'], //从相册选择
				    success: function (res) {
						 uni.uploadFile({
							  url:helper.websiteUrl+"service_uploadimg",		//post请求的地址
							  filePath:res.tempFilePaths[0],
							  header:{"user-token":"6a109faf305513d443337ddb1ad4cb9b"},
							  name:'images',	
							  success: (uploadFileRes) => {
								  console.log(uploadFileRes)
								   var obj = JSON.parse(uploadFileRes.data);
								   console.log("1"+obj.data)
									that.isphoto = false;
									that.myphoto = helper.websiteUrl+obj.data;
							  }
						})
				        
				    }
				});
			},
			submit(){
				if(this.name == '' || this.isactive == 0 || this.phone == '' || this.myphoto == ''){
					  this.callback('请将必填写信息补全');
					  return
				}else{
					if (this.phone !== '') {
						  var reg=/^1[3456789]\d{9}$/;
						  if(!reg.test(this.phone)){
							this.callback('请输入有效的手机号码');
							return
						  }
							 
					}else{
						this.callback('手机号码不能为空');
						return
					}
				}
				
				uni.request({
					url:helper.websiteUrl+"designer_authen",
					header:{"user-token":"6a109faf305513d443337ddb1ad4cb9b"},
					method:"post",
					data:{
						'user_id':this.user_id,
						'servicearea':this.isactive,
						'name':this.name,
						'phone':this.phone,
						'qqnum':this.qqnum,
						'webchatnum':this.webchatnum,
						'email':this.email,
						'personalinfo':this.personalinfo,
						'idcard':this.idcard,
					},
					success: (res) => {
						this.callback('提交成功');
						setTimeout(() => {
							uni.switchTab({
								url: '/pages/my/my'
							});
						}, 1000);
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
	  position: fixed;
	  top: 0;
	  left: 0;
	  z-index: 100;
	  background-color: white;
}
page{
	padding-bottom: 120upx;
	background-color: #F2F2F2;
	box-sizing: border-box;
}
.nav{
	padding: 0 35upx;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 30upx;
	height: 130upx;
	background-color: white;
	width: 100%;
	position: fixed;
	top: var(--status-bar-height);
	left: 0;
	z-index: 1000;
}
.nav image{
	width: 24upx;
	height: 38upx;
}
.list{
	background-color: white;
	padding: 0 35upx;
	box-sizing: border-box;
	font-size: 28upx;
	overflow: hidden;
}
.photo{
	width: 215upx;
	height: 215upx;
	border-radius: 50%;
	background-color: #40CCCB;
	margin: 60upx auto 30upx;
	overflow: hidden;
}
.photo image{
	width: 100upx;
	height: 95upx;
	display: block;
}
.intro{
	width: 100%;
	padding: 20upx 10upx;
	border: 1upx solid #F7F7F7;
	color: #b2b2b2;
	margin-bottom: 40upx;
}
.upload{
	width: 540upx;
	height: 380upx;
	background-color: #e6e4e5;
	margin: 40upx auto;
	overflow: hidden;
	text-align: center;
}
.upload image{
	width: 70upx;
	height: 70upx;
	display: block;
	margin: 110upx auto 30upx;
}
.submit{
	width: 100%;
	height: 120upx;
	line-height: 120upx;
	text-align: center;
	font-size: 30upx;
	background-color: #40CCCB;
	color: white;
	position: fixed;
	bottom: 0;
	left: 0;
	z-index: 1000;
}
</style>
