<template>
	<view>
		<view class="nav">
			<view style="width: 45upx;height: 45upx;margin-right: 20rpx;" @click="back">
				<image src="../../static/u18.png"></image>
			</view>
			<text>手机号登录</text>
		</view>
		<view class="tel">
			<text>+86</text>
			<input placeholder="输入手机号" @input="input"/>
		</view>
		<view class="code">
			<view style="border-bottom: 1upx solid #F7F7F7;">
				<input placeholder="输入验证码" @input="phoneinput"/>
			</view>
			<!-- <text>发送验证码</text> -->
			<u-toast ref="uToast"></u-toast>
			<u-verification-code :seconds="seconds" @end="end" @start="start" ref="uCode" @change="codeChange"></u-verification-code>
			<u-button @tap="getCode" style="width: 40%;background-color: #40CCCB;color: white;">{{tips}}</u-button>
		</view>
		<view class="btn" @click="login">登录</view>
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	import helper from '../../common/common.js';
	export default {
		data() {
			return {
				phonedata:'',
				datas:'',
				codedata:'',
				tips: '',
				// refCode: null,
				seconds: 60,
				timer:''
			}
		},
		methods: {
			codeChange(text) {
				this.tips = text;
			},
			getCode() {
				if (this.phonedata !== '') {
					  var reg=/^1[3456789]\d{9}$/;
					  if(!reg.test(this.phonedata)){
						this.callback('请输入有效的手机号码');
					  }else{
						  if(this.$refs.uCode.canGetCode) {
						  	// 模拟向后端请求验证码
						  	uni.showLoading({
						  		title: '正在获取验证码'
						  	})
						  	this.timer =setTimeout(() => {
						  		uni.hideLoading();
						  		// 这里此提示会被this.start()方法中的提示覆盖
						  		this.$u.toast('验证码已发送');
						  		// 通知验证码组件内部开始倒计时
						  		this.$refs.uCode.start();
						  	}, 2000);
						  }else {
						  	this.$u.toast('倒计时结束后再发送');
						  }
					  }
				}else{
					this.callback('手机号码不能为空');
				}
				console.log('执行请求')
				console.log(this.phonedata)
				uni.request({
					url:helper.websiteUrl+"base_sendalsms",
					header:{"user-token":"6a109faf305513d443337ddb1ad4cb9b"},
					method:"post",
					data:{
						'phone':this.phonedata
					},
					success: (res) => {
						console.log(res.data);
						// 将请求到的数据存放放到data中
						this.datas = res.data.data;
						if(res.data.code == 304){
							this.callback('验证码过于频繁');
							uni.hideLoading();
							clearInterval(this.timer)
						}
					}
				});
			},
			back(){
				uni.navigateTo({
				    url: '../login/login'
				});
			},
			end() {
				this.$u.toast('倒计时结束');
			},
			start() {
				this.$u.toast('验证码已发送');
			},
			
			input(e){
				this.phonedata = e.detail.value
			},
			phoneinput(e){
				this.codedata = e.detail.value
			},
			callback(Error){
				 console.log("name",Error);
				this.$refs.uToast.show({
					title: Error,
					type: 'default',
					// url: '../tellogin/tellogin'
				})
				 
			},
			login(){
				if (this.phonedata !== '') {
					  var reg=/^1[3456789]\d{9}$/;
					  if(!reg.test(this.phonedata)){
						this.callback('请输入有效的手机号码');
					  }else{
						console.log(this.codedata)
						  if(this.datas == this.codedata){
							  uni.showLoading({
							  	title: '正在加载...'
							  })
						  	uni.request({
						  		url:helper.websiteUrl+"user_phonelogin",
						  		header:{"user-token":"6a109faf305513d443337ddb1ad4cb9b"},
						  		method:"post",
						  		data:{'phone':this.phonedata},
						  		success: (res) => {
						  			console.log(res.data);
									// 发送到im系统绑定本人uid
						  			uni.sendSocketMessage({
						  			    data: '{"type":"binduid","data":"'+res.data.data.id+'"}'
						  			});
									
						  			// 将请求到的数据存放放到data中
						  			uni.setStorage({
						  				key:'userinfo',
						  				data:res.data.data,
						  				success:()=>{}
						  			});
									this.set_alias()
						  			this.$refs.uToast.show({
						  				title: '登录成功',
						  				type: 'default',
						  				url: '/pages/my/my',
						  				isTab:true
						  			})
						  		}
						  	});
						  }else if(this.codedata == ''){
							  this.callback('请输入验证码');
						  }else if(this.datas !==this.codedata ){
							  this.callback('验证码错误');
						}
					  }
				}else{
					this.callback('手机号码不能为空');
				}
				
				
					
			},
			set_alias(){
				jyJPush.setJYJPushAlias({
					userAlias: 'testAlias22'
				}, result => {
					console.log(JSON.stringify(result));
					uni.showToast({
						icon: 'none',
						title: JSON.stringify(result)
					})
				});
			}
		}
	}
</script>

<style>
.nav{
	display: flex;
	align-items: center;
	padding: 50upx 30upx;
	box-sizing: border-box;
	font-size: 35upx;
	font-weight: bold;
}
.nav image{
	width: 45upx;
	height: 45upx;
	margin-right: 20upx;
}
.tel{
	display: flex;
	align-items: center;
	font-size: 28upx;
	font-weight: bold;
	color: #b1b1b1;
	width: 90%;
	margin: auto;
	padding-bottom: 30upx;
	box-sizing: border-box;
	border-bottom: 1upx solid #F7F7F7;
	margin-top: 150upx;
}
.tel input{
	width: 80%;
	margin-left: 20upx;	
	font-size: 28upx;
	font-weight: normal;
	outline: none;
	border: none;
}
.code{
	width: 90%;
	margin: auto;
	display: flex;
	align-items: center;
	margin-top: 40upx;
	justify-content: space-between;
}
.code view{
	padding: 40upx 0;
	box-sizing: border-box;
	width: 50%;
}
.code input{
	width: 100%;
	margin-left: 20upx;	
	font-size: 28upx;
}
.code text{
	display: block;
	width: 40%;
	height: 110upx;
	line-height: 110upx;
	font-size: 29upx;
	text-align: center;
	border-radius: 10upx;
	color: white;
	background-color: #40CCCB;
}
.btn{
	width: 90%;
	margin: auto;
	margin-top: 80upx;
	height: 110upx;
	line-height: 110upx;
	font-size: 29upx;
	text-align: center;
	border-radius: 10upx;
	color: white;
	background-color: #40CCCB;
}
</style>
