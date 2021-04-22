<template>
	<view>
		<view class="aline"></view>
		<view id="header">
		    <image src="../../static/u164.png" class="back"></image>
			<view style="display: flex;align-items: center;font-size: 25upx;">
				<image src="../../static/u331.png" style="width: 54upx;height: 54upx;margin-right: 10upx;"></image>
				<span>于新亮</span>
			</view>
			<view class="shop">店铺</view>
		</view>
		<view class="main" id="content" :style="{bottom:isshow==true?'600upx':'100upx'}" @click="nadd">
			<view class="bubble left">
				<view class="wrap">
					<view class="content">你好?</view>
				</view>
				<image src="../../static/u331.png" style="position:absolute;top:50upx;left:25upx;transform: translateY(-50%);"></image>
			</view>
			  <view class="bubble right">
				  <view class="wrap">
					  <view class="content">近日，网曝一组杨烁与一女子的聊天记录，男方被指出轨。这到底是怎么回事呢？杨烁否认聊天截图说了什么？杨烁否认聊天截图事件始末。下面来看一下。</view>
				  </view>
				  <image src="../../static/u331.png" style="position:absolute;top:50upx;right:25upx;transform: translateY(-50%);"></image>
			  </view>
			  <view class="bubble left">
				  <view class="wrap">
					  <view class="content">干嘛呢?</view>
				  </view>
				  <image src="../../static/u331.png" style="position:absolute;top:50upx;left:25upx;transform: translateY(-50%);"></image>
			  </view>
			  <view class="bubble right">
				  <view class="wrap">
					  <view class="content">在上班呀，你呢？</view>
				  </view>
				  <image src="../../static/u331.png" style="position:absolute;top:50upx;right:25upx;transform: translateY(-50%);"></image>
			  </view>
			  <view style="width:430upx;height:160upx;">
				<view>
					<view style="width:430upx;height:160upx;background:white;position:absolute;right:120upx;border-radius:20upx;display:flex;">
						  <span style="width:65%;height:100%;margin:20upx">
							<p>米兰 皮质双人床</p>
							  <p style="color:rgb(64,204,203)">￥6880.00</p>
						  </span>
						  <span style="width:35%;height:100%;">
							  <img src="../../static/u291.jpg" style="width:100%;height:100%;border-radius:0 20upx 20upx 0;">
						</span>
						<image src="../../static/u331.png" style="position:absolute;top:0;right:-100upx;width: 80upx;height: 80upx;"></image>
					</view>
					
	
				</view>
			  </view>
			  
			   <view class="bubble right" >
				   <view class="wrap" >
					   <view class="content" style="background:white;font-size:25upx;max-width:500upx;">
						   <p style="font-size:36upx;margin-bottom:0.25rem;">于新亮的装修信息</p>
						   <p style="display: flex;align-items: center;">
							   <span style="width:150upx;display: block;">房屋所在城市</span>
							   <span style="margin-left: 20upx;">
								   <span>吉林</span>
								   <span>长春</span>
							   </span>
						   </p>
						   <p style="display: flex;align-items: center;">
							   <span style="width:150upx;">户型</span>
							   <span style="margin-left: 20upx;">
								   <span style="margin-right: 20upx;">2室</span>
								   <span style="margin-right: 20upx;">1厅</span>
								   <span style="margin-right: 20upx;">1厨</span>
								   <span style="margin-right: 20upx;">1卫</span>
							 </span>
						   </p>
						   <p style="display: flex;align-items: center;">
							   <span style="width:150upx;display: block;">建筑面积</span>
							   <span style="margin-left: 20upx;">
								   <span>50m²</span>
							   </span>
						   </p>
						   <p style="display: flex;align-items: center;">
							   <span style="width:150upx;display: block;">房屋状态</span>
							   <span style="margin-left: 20upx;">
								   <span>毛坯</span>
							   </span>
						   </p>
						  <p style="display: flex;align-items: center;">
							   <span style="width:150upx;">常住人口</span>
							   <span style="margin-left: 20upx;">
								   <span style="margin-right: 20upx;">2成人</span>
								   <span style="margin-right: 20upx;">1老人</span>
								   <span style="margin-right: 20upx;">1小孩</span>
							 </span>
						  </p>
						  <p style="display: flex;align-items: center;">
							   <span style="width:150upx;display: block;">装修预算</span>
							   <span style="margin-left: 20upx;">
								   <span>50万元(包含设计费)</span>
							   </span>
						  </p>
						  <p style="display: flex;align-items: center;">
							   <span style="width:150upx;display: block;">开始装修时间</span>
							   <span style="margin-left: 20upx;">
								   <span>2019年6月</span>
							   </span>
						  </p>
						   <p style="display: flex;align-items: center;">
							   <span style="width:150upx;display: block;">计划入住时间</span>
							   <span style="margin-left: 20upx;">
								   <span>2020年8月</span>
							   </span>
						   </p>
						   <p style="display: flex;align-items: center;">
							   <span style="width:150upx;display: block;">手机号</span>
							   <span style="margin-left: 20upx;">
								   <span>13512547845</span>
							   </span>
						   </p>
	
					   </view>
				   </view>
				   <image src="../../static/u331.png" style="position:absolute;top:10upx;right:20upx;"></image>
			   </view>
		</view>
		<view class="footer" :style="{bottom:isshow==1||isshow==2?'500upx':'0'}">
			<input />
			<image src="../../static/u1171.png" @click="look"></image>
			<image src="../../static/u1191.png" @click="add"></image>
		</view>
		<view class="fcontent" v-if="isshow==1">
			<view style="display: flex;flex-direction: column;align-items: center;" v-for="(item,index) in 6" :key="index">
				<image src="../../static/zp.png"></image>
				<text>我的相册</text>
			</view>		
		</view>		
		<view class="look" v-if="isshow==2" >
			<view style="display: flex;flex-direction: column;align-items: center;">
				<image src="../../static/tgood.png"></image>
				<text style="margin-top: 20upx;">点赞</text>
			</view>
			<view style="display: flex;flex-direction: column;align-items: center;">
				<image src="../../static/tsad.png"></image>
				<text style="margin-top: 20upx;">悲伤</text>
			</view>
			<view style="display: flex;flex-direction: column;align-items: center;">
				<image src="../../static/thaha.png"></image>
				<text style="margin-top: 20upx;">哈哈哈</text>
			</view>
			<view style="display: flex;flex-direction: column;align-items: center;">
				<image src="../../static/tlove.png"></image>
				<text style="margin-top: 20upx;">喜爱</text>
			</view>
			<view style="display: flex;flex-direction: column;align-items: center;">
				<image src="../../static/tcheer.png"></image>
				<text style="margin-top: 20upx;">欢呼</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isshow:0,
			}
		},
		methods: {
			add(){
				this.isshow = 1
			},
			look(){
				this.isshow = 2
			},
			nadd(){
				this.isshow = false
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
body{
      background: rgb(235,235,235);
    }
    #header{
      width:100%;
      height: 110upx;
      margin: 0 auto;
      background: white;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 30upx;
      position: fixed;
      top:var(--status-bar-height);
      left:0;
      right:0;
      z-index: 200;
    }
    .back{
      width:20upx;
      height: 26upx;
    }
	.shop{
		width: 80upx;
		height: 42upx;
		line-height: 40upx;
		text-align: center;
		font-size: 25upx;
		color: #40cccc;
		border: 1px solid #40CCCC;
		border-radius: 20upx;
	}
    .title{
      display: flex;
      align-items: center;
      font-size: 1rem;
    }
    .h-right{
      width:3rem;
      height: 1.5rem;
      line-height: 1.5rem;
      text-align: center;
      color: rgb(64,204,203);
      border:0.1rem solid rgb(64,204,203);
      font-size: 0.8rem;
      font-weight: 600;
      border-radius: 1rem;
    }
    .main{
      position: fixed;
      top:110upx;
      bottom: 600upx;
      width:100%;
      background: rgb(235,235,235);
      overflow: scroll;
      padding-top: 1.5rem;
    }
    .footer{
      position: fixed;
      bottom: 500upx;
      left:0;
      background: rgb(244,244,246);
      width: 100%;
      height: auto;
	  display: flex;
	  align-items: center;
	  padding: 20upx;
	  box-sizing: border-box;
    }
	.footer input{
		border-radius: 15upx;
		padding: 0 25upx;
		box-sizing: border-box;
		font-size: 25upx;
		width: 580upx;
		word-wrap: break-word;
		outline: none;
		border: none;
		background-color: white;
		height: 60upx;
	}
	.footer image{
		width: 50upx;
		height: 50upx;
		margin-left: 20upx;
	}
	.fcontent,.look{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 500upx;
		background: rgb(244,244,246);
		padding:0 50upx 50upx;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		flex-wrap: wrap;
	}
	.fcontent image,
	.look image{
		width: 110upx;
		height: 110upx;
		display: block;
		margin: auto;
		margin-top: 25upx;
	}
	.fcontent text,
	.look text{
		margin-top: 20upx;
		font-size: 25upx;
		color: #3a3a3a;
	}
	.fcontent view,
	.look view{
		margin-right: 60upx;
	}
	.fcontent view:nth-child(4n),
	.look view:nth-child(4n){
		margin-right: 0;
	}
    .icon{
      width: 1.5rem;
      height: 1.5rem;
      margin-left: 0.5rem;
      margin-right: 0.5rem;
    }
    .bubble {
      padding: 6px;
      overflow: hidden;
      position: relative;
    }
    .bubble:after {
      clear: both;
      content: '';
    }

    .bubble a.avatar > image {
      width: 100%;
      height: 100%;
    }
    .bubble.left a.avatar {
      float: left;
    }
    .bubble.right a.avatar {
      float: right;
    }
    .bubble .content {
      width: auto;
      padding: 25upx;
      font-size: 16upx;
      border-radius: 6px;
      word-wrap: break-word;
      max-width: 500upx;
      position: relative;
      display: inline-block;
    }

    .bubble.left {
      text-align: left;
    }
    .bubble.right {
      text-align: right;
    }
    .bubble.left .wrap {
		margin-left: 110upx;
    }
    .bubble.left .content {
        background: #fafafa;
        border-color: #c6c6c6;
    }
	.bubble image{
		width: 80upx;
		height: 80upx;
	}
    .bubble.right .wrap {
      margin-right: 110upx;

    }
    .bubble.right .content {
      background: #b3e866;
      border-color: #9ab96b;
      text-align: left;
    }
    .icon3{
      display: flex;
      align-items: center;
      width:100%;
      height: 2.75rem;
    }
    .emoji{
      width:100%;
      height: 14rem;
      background: rgb(235,235,235);
      padding: 1.5rem;
      display: none;
      box-sizing: border-box;
    }
    .flexwrap{
        display: flex;
        flex-wrap: wrap;
    }
      .tianjia{
        width:100%;
        height: 9rem;
        background: rgb(235,235,235);
        padding: 1.5rem 1.5rem;
          display: none;
      }
    .em1{
      width:25%;
      height: 46%;
      font-size: 0.9rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 1rem;

    }
    .em1 image{
      width:60px;
      height: 60px;
    }
    .tj1{
      width:16%;
      height: 40%;
      margin-right: 1.5rem;
    text-align: center;
      font-size: 0.6rem;

    }
    .tianjia image{
      width:100%;
      height: 100%;
    }
</style>
