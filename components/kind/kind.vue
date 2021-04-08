<template>
	<view class="cont">
		<view class="category">
			<scroll-view class="menu-list" scroll-y="true" :style="{height:theight+'px'}">
				<text :class="{'active1':isactive==1}" @click="changekind(1)">定制柜类</text>
				<text :class="{'active1':isactive==2}" @click="changekind(2)">茶几</text>
				<text :class="{'active1':isactive==3}" @click="changekind(3)">沙发</text>
				<text>床</text>
				<text>椅凳</text>
				<text>柜类</text>
				<text>床垫</text>
				<text>装饰</text>
				<text>灯具灯饰</text>
				<text>收纳整理</text>
				<text>电器</text>
			</scroll-view>
			<view class="menu-cont">
				<image src="../../static/shangchuan@2x.png" class="kind-ad"></image>
				<scroll-view scroll-y="true" v-if="isactive==1" :style="{height:mheight+'px'}">
					<view class="kind-list">
						<view>
							<image src="../../static/1@2x.png"></image>
							<text>定制衣柜</text>
						</view>
						<view>
							<image src="../../static/2@2x.png"></image>
							<text>定制衣柜</text>
						</view>
						<view>
							<image src="../../static/3@2x.png"></image>
							<text>定制衣柜</text>
						</view>
						<view>
							<image src="../../static/4@2x.png"></image>
							<text>定制衣柜</text>
						</view>
						<view>
							<image src="../../static/5@2x.png"></image>
							<text>定制衣柜</text>
						</view>
						<view>
							<image src="../../static/6@2x.png"></image>
							<text>定制衣柜</text>
						</view>
						<view>
							<image src="../../static/1@2x.png"></image>
							<text>定制衣柜</text>
						</view>
						<view>
							<image src="../../static/2@2x.png"></image>
							<text>定制衣柜</text>
						</view>
						<view>
							<image src="../../static/3@2x.png"></image>
							<text>定制衣柜</text>
						</view>
					</view>
				</scroll-view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isactive:1,
				current:1
			}
		},
		props:['sheight','theight','mheight'],
		methods: {
			changekind(i){
				this.isactive = i
			}
		}
	}
</script>

<style>
@import url("../../css/kind.css");
</style>
