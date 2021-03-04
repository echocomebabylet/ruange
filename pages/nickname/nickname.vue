<template>
	<view>
		<view class="nav">
			<view style="width: 40upx;height: 40upx;" @click="back">
				<image src="../../static/u164.png"></image>
			</view>
			<text>设置昵称</text>
			<text style="font-size: 26upx;" @click="sure">确定</text>
		</view>
		<input placeholder="请输入您的昵称" :value="username" @blur="name"/>
		<text class="cont">4-24个字符，可由中英文、数字、_组成</text>
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	import helper from '../../common/common.js';
	export default {
		data() {
			return {
				username:'',
				user_id:''
			}
		},
		onShow(){
			uni.getStorage({
				key:'userinfo',
				success:(res)=>{
					console.log(res)
					this.username = res.data.username;
					this.user_id = res.data.id;
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
				uni.navigateTo({
				    url: '../personaldata/personaldata'
				});
			},
			name(e){
				// console.log(e)
				this.username = e.detail.value;
			},
			sure(){
				console.log(this.user_id)
				uni.request({
					url:helper.websiteUrl+"user_updateinfo",
					header:{"user-token":"6a109faf305513d443337ddb1ad4cb9b"},
					method:"post",
					data:{
						'user_id':this.user_id,
						'username':this.username
					},
					success: (res) => {
						console.log(res)
						if(res.data.code==200){
							uni.setStorage({
								key:'userinfo',
								data:res.data.data,
								success:()=>{
									this.callback('保存成功');
								}
							});
						}else{
							this.callback(res.data.msg);
						}
						
					}
				});
				
			}
			
		}
	}
</script>

<style>
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
	border-bottom: 1upx solid #F7F7F7;
}
.nav image{
	width: 24upx;
	height: 38upx;
}
input{
	width: 100%;
	padding-left: 20upx;
	height: 70upx;
	box-sizing: border-box;
	font-size: 26upx;
	background-color: white;
}
.cont{
	font-size: 22upx;
	color: #aeaeae;
	display: block;
	margin: 20upx;
}
</style>
