<template>
	<view>
		<view class="nav">
			<view style="width: 40upx;height: 40upx;" @click="back">
				<image src="../../static/u164.png"></image>
			</view>
			<text>搜索户型</text>
			<text style="color: white;">返</text>
		</view>
		<view class="search">
			<view>
				<image src="../../static/u293.png" style="width: 42upx;height: 42upx;margin-right: 20upx;"></image>
				<input placeholder="搜索户型" style="width: 90%;font-size: 24upx;" :value="content" @input="searchresults" @confirm="searchresults"/>
				<image src="../../static/u323.png" style="width: 30upx;height: 30upx;" @click="close"></image>
			</view>
		</view>
		<view class="list" v-for="(item,index) in datalist" :key="index" @click.stop="myhousetypedetail(index)">
			<image :src="getimgurl(item.img_url)"></image>
			<view style="display: flex;flex-direction: column;">
				<text style="font-size: 32upx;margin-bottom: 20upx;">{{item.name}}{{item.measarea}}方</text>
				<text style="margin-bottom: 10upx;">{{item.name}}|{{item.measarea}}方|{{item.measarea}}方户型</text>
				<text>{{item.pattern}}</text>
				<view :class="item.suibian==true?'active':''" @click.stop="select(index)">{{item.suibian==false?'关联户型':'已关联户型'}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isactive:-1,
				result:'',
				page:1,
				pagesize:10,
				datalist:[],
				id:'',
				cont:1,
				content:''
			}
		},
		onLoad(options){
			this.result = options.searchresult
			this.getdata(options.searchresult)
		},
		onReachBottom() {
			this.page = this.page+=1
			console.log(this.page)
			this.getdata()
			this.cont=1
		},
		methods: {
			getimgurl(image){
				return"http://uniapp.ruange.com.cn/"+image
			},
			
			select(index){
				console.log(this.id)
				this.datalist[index].suibian = !this.datalist[index].suibian
				if(this.datalist[index].suibian==true){
					uni.request({
						url:this.common.websiteUrl+"house_index_add",
						header:{"user-token":"6a109faf305513d443337ddb1ad4cb9b"},
						method:"post",
						data:{
							'user_id':this.id,
							'hometype':this.datalist[index].id
						},
						success: (res) => {
							console.log('关联成功')
						}
					});	
				}else{
					uni.request({
						url:this.common.websiteUrl+"house_index_delhome",
						header:{"user-token":"6a109faf305513d443337ddb1ad4cb9b"},
						method:"post",
						data:{
							'user_id':this.id,
							'hometype':this.datalist[index].id
						},
						success: (res) => {
							console.log('关联取消')
						}
					});	
				}
				
				
			},
			searchresults(e){
				this.page = 1
				this.getdata(e.detail.value)
				console.log(e.detail.value)
				this.cont=2
				this.content = e.detail.value
			},
			close(){
				this.content=''
				this.getdata()
			},
			back(){
				uni.navigateTo({
				    url: '../myhousetypesearch/myhousetypesearch'
				});
			},
			myhousetypedetail(index){
				uni.navigateTo({
				    url: '../myhousetypedetail/myhousetypedetail?typeid='+this.datalist[index].id
				});
			},
			getdata(data){
				uni.getStorage({
					key:'userinfo',
					success:(res)=>{
						console.log('进来了')
						this.id=res.data.id
						uni.request({
							url:this.common.websiteUrl+"house_index_index",
							header:{"user-token":"6a109faf305513d443337ddb1ad4cb9b"},
							method:"post",
							data:{
								'search_value':data,
								'page':this.page,
								'pagesize':this.pagesize,
								'user_id':this.id
							},
							success: (res) => {
								if(res.data.code==200){
									// console.log(res.data.data)
									this.datalist = this.datalist.concat(res.data.data)
									console.log(this.datalist)
								}else{
									if(this.cont==1){
										this.callback('暂无更多户型')
									}else{
										this.callback('暂无更多户型')
										this.datalist=[]	
									}
								}
							}
						});
						
					}
				})
				
			},
			callback(value){
				uni.showToast({
					title:value,
					icon:'none'
				})
			},
		}
	}
</script>

<style>
page{
	padding-top: 240upx;
	box-sizing: border-box;
	background-color: #F2F2F2;
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
}
.nav image{
	width: 24upx;
	height: 38upx;
}
.list{
	background-color: white;
	padding: 60upx;
	box-sizing: border-box;
	display: flex;
	margin-bottom: 20upx;
	align-items: center;
	font-size: 26upx;
}
.list image{
	width: 270upx;
	height: 240upx;
	margin-right: 40upx;
}
.list view view{
	width: 180upx;
	height: 50upx;
	line-height: 50upx;
	text-align: center;
	font-size: 22upx;
	border-radius: 5upx;
	margin-top: 40upx;
	align-self: flex-end;
	border: 1upx solid #F7F7F7;
}
.active{
	width: 180upx;
	height: 50upx;
	line-height: 50upx;
	text-align: center;
	font-size: 22upx;
	border-radius: 5upx;
	margin-top: 40upx;
	align-self: flex-end;
	background-color: #40CCCB;
	color: white;
	border: none !important;
}
.search{
	padding: 30upx;
	box-sizing: border-box;
	background-color: white;
	width: 100%;
	position: fixed;
	top: 130upx;
	left: 0;
	z-index: 1000;
}
.search view{
	width: 100%;
	height: 66upx;
	background-color: #f5f5f5;
	border-radius: 40upx;
	display: flex;
	align-items: center;
	padding: 0 20upx;
}
</style>
