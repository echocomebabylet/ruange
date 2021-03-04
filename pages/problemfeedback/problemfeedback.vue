<template>
	<view>
		<view class="nav">
			<view style="width: 40upx;height: 40upx;" @click="back">
				<image src="../../static/u164.png"></image>
			</view>
			<text>问题反馈</text>
			<text style="color: white;">返</text>
		</view>
		<view style="padding: 0 35upx;box-sizing: border-box;margin-top: 40upx;">
			<text>问题描述</text>
			<textarea placeholder="请把您目前遇到的问题写出来~" @input="content1"></textarea>
			<text style="margin-top: 50upx;display: block;">联系方式</text>
			<input placeholder="请填写您的微信、手机号或者邮箱等等" @input="content2" type="number"/>
		</view>
		<view class="submit" @click="submit" v-if="issubmit==true">提交反馈</view>
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	import helper from '../../common/common.js';
	export default {
		data() {
			return {
				content:'',
				contact_info:'',
				issubmit:true,
				windowHeight: ''
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
			back(){
				uni.switchTab({
				    url: '/pages/my/my'
				});
			},
			content1(e){
				this.content = e.detail.value;
			},
			content2(e){
				this.content_info = e.detail.value;
			},
			callback(Error){
				 console.log("name",Error);
				this.$refs.uToast.show({
					title: Error,
					type: 'default',
					// url: '../tellogin/tellogin'
				})
				 
			},
			submit(){
				if(this.content == ''){
					this.callback('内容不能为空');
					return
				}else{
					uni.request({
						url:helper.websiteUrl+"service_feelback",
						header:{"user-token":"6a109faf305513d443337ddb1ad4cb9b"},
						method:"post",
						data:{
							'content':this.content,
							'contact_info':this.contact_info
						},
						success: (res) => {
							console.log(res)
							if(res.data.code==200 && this.content != ''){
								this.callback('提交成功');
								setTimeout(() => {
									uni.switchTab({
										url: '/pages/my/my'
									});
								}, 1000);
							}else{
								this.callback('提交失败');
							}
							return
							
						}
					});
				}
				
				
			}
		}
	}
</script>

<style>
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
text{
	font-size: 26upx;
	font-weight: bold;
}
textarea{
	width: 100%;
	margin: auto;
	height: 390upx;
	background-color: #f9f9f9;
	margin-top: 20upx;
	padding: 10upx 20upx;
	box-sizing: border-box;
	font-size: 26upx;
}
input{
	width: 100%;
	height: 80upx;
	font-size: 26upx;
	padding-left: 20upx;
	box-sizing: border-box;
	background-color: #f9f9f9;
	margin-top: 20upx;
}
.submit{
	width: 90%;
	height: 90upx;
	line-height: 90upx;
	text-align: center;
	color: white;
	background-color: #40CCCB;
	font-size: 30upx;
	font-weight: bold;
	position: fixed;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);
}
</style>
