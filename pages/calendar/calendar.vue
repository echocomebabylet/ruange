<template>
	<view>
		<u-calendar v-model="show" :min-date="todaytime" max-date="3120-09-09" :mode="mode" :exper_id="exper_id" ></u-calendar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show:true,
				exper_id:0,
				todaytime:'',
				mode:'date',
			}
		},
		onLoad(options) {
			console.log(options)
			this.exper_id = parseInt(options.id)
			this.getTime()
		},
		methods: {
			getTime(){
			
				var date = new Date(),
				year = date.getFullYear(),
				month = date.getMonth() + 1,
				day = date.getDate(),
				hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours(),
				minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(),
				second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
				month >= 1 && month <= 9 ? (month = "0" + month) : "";
				day >= 0 && day <= 9 ? (day = "0" + day) : "";
				var timer = year + '-' + month + '-' + day ;
				this.todaytime = timer
				// return timer;
			},
		}
	}
</script>

<style>
page{
	background: transparent;
}
</style>
