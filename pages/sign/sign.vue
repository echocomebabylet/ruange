<template>
	<view>
		<view class="aline"></view>
		<view class="nav">
			<view style="width: 40upx;height: 40upx;" @click="back">
				<image src="../../static/u164.png"></image>
			</view>
			<text>修改签名</text>
			<text></text>
		</view>
		<textarea maxlength="50" :value="autograph" @blur="sign"></textarea>
		<text style="font-size: 22upx;color: #b4b4b4;display: block;margin: 20upx 35upx;">签名最多50字</text>
		<view class="btn" @click="save">保存</view>
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	import helper from '../../common/common.js';
	export default {
		data() {
			return {
				autograph:'',
				user_id:''
			}
		},
		onShow(){
			uni.getStorage({
				key:'userinfo',
				success:(res)=>{
					console.log(res)
					this.autograph = res.data.autograph;
					this.user_id = res.data.id;
				}
			})
			
		},
		methods: {
			back(){
				uni.navigateTo({
				    url: '../personaldata/personaldata'
				});
			},
			callback(Error){
				 console.log("name",Error);
				this.$refs.uToast.show({
					title: Error,
					type: 'default',
					// url: '../tellogin/tellogin'
				})
				 
			},
			sign(e){
				// console.log(e)
				this.autograph = e.detail.value;
			},
			save(){
				console.log(this.user_id)
				uni.request({
					url:helper.websiteUrl+"user_updateinfo",
					header:{"user-token":"6a109faf305513d443337ddb1ad4cb9b"},
					method:"post",
					data:{
						'user_id':this.user_id,
						'autograph':this.autograph
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
.aline{
	 height: var(--status-bar-height);
	  width: 100%;
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
textarea{
	width: 100%;
	height: 280upx;
	background-color: white;
	margin-top: 20upx;
	resize: none;
}
.btn{
	width: 90%;
	height: 90upx;
	line-height: 90upx;
	color: white;
	background-color: #40CCCB;
	text-align: center;
	font-size: 28upx;
	margin: auto;
	border-radius: 15upx;
}
</style>
