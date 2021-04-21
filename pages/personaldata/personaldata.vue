<template>
	<view>
		<view class="aline"></view>
		<view class="nav">
			<view style="width: 40upx;height: 40upx;" @click="back">
				<image src="../../static/u164.png"></image>
			</view>
			<text>个人资料</text>
			<text style="color: white;">返</text>
		</view>
		<view class="list">
			<view class="cont" @click="gethead">
				<text>头像</text>
				<view style="display: flex;align-items: center;">
					<image :src="headurl" class="head"></image>
					<image src="../../static/u8.png" class="enter"</image>
				</view>
			</view>
			<view class="cont" @click="nickname">
				<text>昵称</text>
				<view style="display: flex;align-items: center;">
					<text style="color: #a0a0a0;">{{username}}</text>
					<image src="../../static/u8.png" class="enter"></image>
				</view>
			</view>
			<view class="cont" @click="sign">
				<text>签名</text>
				<view style="display: flex;align-items: center;">
					<text style="white-space: nowrap;width:200upx;overflow: hidden;text-overflow: ellipsis;text-align: right;">{{autograph}}</text>
					<image src="../../static/u8.png" class="enter"></image>
				</view>
			</view>
			<view class="cont" @click="show1 = true">
				<text>生日</text>
				<view style="display: flex;align-items: center;">
					<text style="color: #a0a0a0;">{{year1}}{{month1}}{{day1}}</text>
					<image src="../../static/u8.png" class="enter"></image>
				</view>
				<u-picker mode="time" v-model="show1" :params="params" @confirm="time"></u-picker>
			</view>
			
			<view class="cont" @click="show = true">
				<text>性别</text>
				<view style="display: flex;align-items: center;">
					<text style="color: #a0a0a0;">{{gender}}</text>
					<image src="../../static/u8.png" class="enter"></image>
				</view>
				<u-picker v-model="show" mode="selector" :range="selectorsexObj" range-key="cateName" @confirm="sex"></u-picker>
			</view>
			<view class="cont" @click="show2 = true">
				<text>风格喜好</text>
				<view style="display: flex;align-items: center;">
					<text style="color: #a0a0a0;">{{likes}}</text>
					<image src="../../static/u8.png" class="enter"></image>
				</view>
				<u-picker v-model="show2" mode="selector" :range="selectorlikeObj" range-key="name" @confirm="like"></u-picker>
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
				user_id:'',
				info:'',
				username:'',
				birthday:'',
				headurl:'',
				autograph:'',
				gender:'',
				gender_id:3,
				birthday_time:'',
				show:false,
				show1:false,
				show2:false,
				year1:'',
				month1:'',
				day1:'',
				params: {
					year: true,
					month: true,
					day: true,
					hour: false,
					minute: false,
					second: false,
					timestamp: true
				},
				selectorsexObj: [
					{
						cateName: '男',
						id: 1
					},
					{
						cateName: '女',
						id: 2
					},
					{
						cateName: '保密',
						id: 3
					}
				],
				likes:'',
				likes_id:'',
				selectorlikeObj: []
			}
		},
		onShow(){
			
		},
		
		onLoad(){
			uni.request({
				url:helper.websiteUrl+"service_style",
				header:{"user-token":"6a109faf305513d443337ddb1ad4cb9b"},
				method:"post",
				data:{},
				success: (res) => {
					console.log(res.data.data)
					if(res.data.code==200){
						this.selectorlikeObj = res.data.data
						uni.getStorage({
							key:'userinfo',
							success:(res)=>{
								console.log(res)
								this.username = res.data.username;
								this.headurl = helper.websiteUrl+res.data.headurl;
								this.gender_id = res.data.gender
								if(res.data.gender == 1){
									this.gender = '男'
								}else if(res.data.gender == 2){
									this.gender = '女'
								}else{
									this.gender = '保密'
								}
								if(res.data.birthday!='' && res.data.birthday!=null){
									console.log('判断了'+res.data.birthday * 1000)
									var nowdate = new Date(res.data.birthday * 1000);
									this.year1 =  nowdate.getFullYear()+'-'
									this.month1 =  nowdate.getMonth()+1+'-'
									this.day1 =  nowdate.getDate()
								}
								var stylelist = this.selectorlikeObj
								console.log('11'+stylelist)
								for (var i=0;i<stylelist.length;i++) {
									if(stylelist[i].id == res.data.style){
										this.likes = stylelist[i].name
										this.likes_id = stylelist[i].id
										break;
									}
								}
								this.style = res.data.style
								this.user_id = res.data.id
								this.autograph = res.data.autograph;
								// this.likes = this.selectorlikeObj[res.data.style].name
								console.log(this.style)
							}
						})
					}else{
						this.callback(res.data.msg);
					}
				}
			});
			
			
		},
		methods: {
			getdata(data){
				uni.request({
					url:helper.websiteUrl+"user_updateinfo",
					header:{"user-token":"6a109faf305513d443337ddb1ad4cb9b"},
					method:"post",
					data:data,
					success: (res) => {
						if(res.data.code==200){
							uni.setStorage({
								key:'userinfo',
								data:res.data.data,
								success:()=>{
									console.log(1)
								}
							});
						}else{
							this.callback(res.data.msg);
						}
						console.log(res)
						return
						
					}
				});
			},
			back(){
				uni.switchTab({
				    url: '/pages/my/my'
				});
				
			},
			nickname(){
				uni.navigateTo({
				    url: '../nickname/nickname'
				});
			},
			sign(){
				uni.navigateTo({
				    url: '../sign/sign'
				});
			},
			sex(data){
				this.gender=this.selectorsexObj[data].cateName
				this.gender_id=this.selectorsexObj[data].data
				
				this.getdata({'user_id':this.user_id,'gender':this.selectorsexObj[data].id})
			},
			like(data){
				this.likes=this.selectorlikeObj[data].name;
				this.likes_id=this.selectorlikeObj[data].id
				this.getdata({'user_id':this.user_id,'style':this.selectorlikeObj[data].id})
			},
			time(data){
				this.year1 = data.year+'-';
				this.month1 = data.month+'-';
				this.day1 = data.day;
				var birthdays = this.year1+this.month1+this.day1
				// this.birthday_time = new Date(birthdays) / 1000;
				// console.log('生日'+this.birthday_time)
				var ce = new Date(birthdays) / 1000;
				this.getdata({'user_id':this.user_id,'birthday':ce})
				// this.getdata()
			},
			gethead(){
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
								  that.getdata({'user_id':that.user_id,'headurl':obj.data})
								  uni.redirectTo({
								      url: '../personaldata/personaldata'
								  });
							  }
						})
				        
				    }
				});
				// uni.previewImage(OBJECT)

			},
			callback(Error){
				 console.log("name",Error);
				this.$refs.uToast.show({
					title: Error,
					type: 'default',
					// url: '../tellogin/tellogin'
				})
				 
			},
		},
		
	}
</script>

<style>
.aline{
	 height: var(--status-bar-height);
	  width: 100%;
	  background-color: white;
}
page{
	background-color: #F2F2F2;
}
.nav{
	padding: 0 45upx;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 30upx;
	height: 130upx;
	background-color: white;
}
.nav image{
	width: 24upx;
	height: 38upx;
}
.list{
	background-color: white;
	font-size: 30upx;
	margin-top: 20upx;
}
.list .cont{
	padding: 45upx;
	box-sizing: border-box;
	border-bottom: 1upx solid #F7F7F7;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.list .head{
	width: 70upx;
	height: 70upx;
	border-radius: 50%;
}
.list .enter{
	width: 10upx;
	height: 20upx;
	margin-left: 20upx;
}

</style>
