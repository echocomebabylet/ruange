<template>
	<view>
		<view class="nav">
			<view style="width: 40upx;height: 40upx;" @click="back">
				<image src="../../static/u164.png"></image>
			</view>
			<text>设置开放时间</text>
			<text style="color: white;">返回</text>
		</view>
		<view style="display: flex;flex-direction: column;align-items: center;background-color: white;">
			<view class="ing" v-if="!checked">不开放</view>
			<view class="ing" v-if="checked">开放中</view>
			<text style="font-size: 28upx;color: #b3b3b8;">可获得浏览奖励和体验奖励</text>
			<u-switch v-model="checked" active-color="#40cbbb" style="margin: 40upx 0;" @change="openclose"></u-switch>
		</view>
		<view style="margin-top: 20upx;background-color: white;padding: 0 25upx;box-sizing: border-box;">
			<view class="uni-form-item uni-column" style="background-color: white;padding-top: 20upx;">
			
				<text style="font-size: 23upx;color: #7e7f81;margin: 40upx 0;display: block;">访客可在您设置的时间段内发起申请，如不方便可以和他私下协商</text>
				<checkbox-group name="checkbox2" @change="choice_check" data-index="1">
					<label style="display: flex;align-items: center;justify-content: space-between;padding: 40upx 0;box-sizing: border-box;border-bottom: 1upx solid #F7F7F7;">
						<text style="font-size: 28upx;">工作日上午（08:00~12:00）</text>
						<view>
							<checkbox value="checkbox2" :checked="checked1" />
						</view>
					</label>
				</checkbox-group>
				<checkbox-group name="checkbox2" @change="choice_check" data-index="2">
					<label style="display: flex;align-items: center;justify-content: space-between;padding: 40upx 0;box-sizing: border-box;border-bottom: 1upx solid #F7F7F7;">
						<text style="font-size: 28upx;">工作日下午（13:00~21:00）</text>
						<view>
							<checkbox value="checkbox2" :checked="checked2"/>
						</view>
					</label>
				</checkbox-group>
				<checkbox-group name="checkbox2" @change="choice_check" data-index="3">
					<label style="display: flex;align-items: center;justify-content: space-between;padding: 40upx 0;box-sizing: border-box;border-bottom: 1upx solid #F7F7F7;">
						<text style="font-size: 28upx;">周末上午（08:00~12:00）</text>
						<view>
							<checkbox value="checkbox2" :checked="checked3"/>
						</view>
					</label>
				</checkbox-group>
				<checkbox-group name="checkbox2" @change="choice_check" data-index="4">
					<label style="display: flex;align-items: center;justify-content: space-between;padding: 40upx 0;box-sizing: border-box;border-bottom: 1upx solid #F7F7F7;">
						<text style="font-size: 28upx;">周末下午（18:00~21:00）</text>
						<view>
							<checkbox value="checkbox2" :checked="checked4"/>
						</view>
					</label>
				</checkbox-group>
			</view>
		</view>
	</view>
</template>

<script>
	import uniNumberBox from "@/components/uni-number-box/uni-number-box.vue"
	export default {
		data() {
			return {
				checked: false,
				checked1: false,
				checked2: false,
				checked3: false,
				checked4: false,
				userinfo:[],
				datalist:[],
				checklist:[]
			}
		},
		onLoad() {
			uni.getStorage({
				key:'userinfo',
				success:(res)=>{
					this.userinfo = res.data
				}
			})
			this.getdata()
		},
		methods: {
			choice_check(types){
				console.log(types)
				let _self = this
				if(_self.checked==false){
					return _self.common.callback('请先开放体验家')
				}
				if(types.detail.value.length>0){
					// 选中
					_self.checklist[parseInt(types.target.dataset.index)-1] = types.target.dataset.index
					uni.request({
						url:_self.common.websiteUrl+"experhome_owners_uptimes",
						header:{"user-token":"6a109faf305513d443337ddb1ad4cb9b"},
						method:"post",
						data:{'user_id':_self.userinfo.id,'type':_self.checklist.join(',')},
						success: (res) => {
							if(res.data.code==200){
								_self.common.callback('设置成功')
							}else{
								_self.checklist[parseInt(types.target.dataset.index)-1] = 0
								_self.common.network()
							}
						},fail() {
							_self.checklist[parseInt(types.target.dataset.index)-1] = 0
							_self.common.network()
						}
					});
					
					console.log(_self.checklist)
				}else{
					
					_self.checklist[parseInt(types.target.dataset.index)-1] = 0
					uni.request({
						url:_self.common.websiteUrl+"experhome_owners_uptimes",
						header:{"user-token":"6a109faf305513d443337ddb1ad4cb9b"},
						method:"post",
						data:{'user_id':_self.userinfo.id,'type':_self.checklist.join(',')},
						success: (res) => {
							if(res.data.code==200){
								_self.common.callback('设置成功')
							}else{
								_self.checklist[parseInt(types.target.dataset.index)-1] = types.target.dataset.index
								_self.common.network()
							}
						},fail() {
							_self.checklist[parseInt(types.target.dataset.index)-1] = types.target.dataset.index
							_self.common.network()
						}
					});
					console.log(_self.checklist)
				}
				
				
			},
			openclose(e){
				let _self = this
				let title = '';
				if(e==true){
					_self.checked = true
					title = '确认开放体验家吗?';
				}else{
					title = "关闭后预约时间需重新设定,是否确认关闭?"
					_self.checked = false
				}
				
				uni.showModal({
				    title: '温馨提示',
				    content: title,
				    success: function (res) {
				        if (res.confirm) {
				            uni.request({
				            	url:_self.common.websiteUrl+"experhome_owners_openclose",
				            	header:{"user-token":"6a109faf305513d443337ddb1ad4cb9b"},
				            	method:"post",
				            	data:{'user_id':_self.userinfo.id,'type':_self.checked},
				            	success: (res) => {
				            		if(res.data.code==200){
										if(res.data.data==6){
											_self.checked1 = false
											_self.checked2 = false
											_self.checked3 = false
											_self.checked4 = false
										}else{
											_self.checked1 = true
											_self.checked2 = true
											_self.checked3 = true
											_self.checked4 = true
										}
				            			_self.common.callback('设置成功')
				            		}else{
										_self.checked = true
				            			_self.common.network()
				            		}
				            	},fail() {
				            		_self.common.network()
				            	}
				            });
				        } else if (res.cancel) {
				            _self.checked = true
							console.log('取消')
				        }
				    }
				});
				console.log(e)
			},
			getdata(){
				let _self = this
				uni.request({
					url:_self.common.websiteUrl+"experhome_owners_settime",
					header:{"user-token":"6a109faf305513d443337ddb1ad4cb9b"},
					method:"post",
					data:{'user_id':_self.userinfo.id},
					success: (res) => {
						if(res.data.code==200){
							_self.datalist = res.data.data
							if(_self.datalist.makeapp==6){
								_self.checked = false
							}else{
								_self.checked = true
							}
							let timestr = _self.datalist.makeapp
							let time = timestr.split(',')
							_self.checklist = time
							console.log(time.indexOf('1'))
							if(time.indexOf('1')>=0){
								_self.checked1 = true
							}
							if(time.indexOf('2')>=0){
								_self.checked2 = true
							}
							if(time.indexOf('3')>=0){
								_self.checked3 = true
							}
							if(time.indexOf('4')>=0){
								_self.checked4 = true
							}
							
							
							console.log(time)
							console.log(res.data.data)
						}else{
							_self.common.network()
						}
					}
				});
			},
			back(){
				uni.navigateTo({
					url: '../visitmanagement/visitmanagement'
				});
			}
			
		},
		components:{
			uniNumberBox
		}
	}
</script>

<style>
page{
	background-color: #f2f2f2;
	padding-top: 130upx;
	box-sizing: border-box;
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
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1000;
}
.nav image{
	width: 24upx;
	height: 38upx;
}
.ing{
	width: 120upx;
	height: 120upx;
	background-color: #40CCCB;
	color: white;
	line-height: 110upx;
	text-align: center;
	font-size: 24upx;
	border-radius: 50%;
	border: 6upx solid #a3e7e7;
	margin: 30upx 0;
}
uni-checkbox /deep/ .uni-checkbox-input{
	border-radius: 50% !important;
}
uni-checkbox:not([disabled]) /deep/ .uni-checkbox-input:hover{
	border-color: #b8b8b8;
}
uni-checkbox /deep/ .uni-checkbox-input.uni-checkbox-input-checked{
	background-color: #40CCCB;
	border-color: #40CCCC !important;
	color: white !important;
}
</style>
