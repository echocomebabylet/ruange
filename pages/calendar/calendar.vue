<template>
	<view>
		<u-calendar v-model="show" :min-date="todaytime" max-date="3120-09-09" :mode="mode" :exper_id="exper_id" @aoligei='aoligei'></u-calendar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show:true
			}
		},
		methods: {
			
		}
	}
</script>

<style>
page{
	background: transparent;
}
</style>
