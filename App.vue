<script>
export default {
	onLaunch: function() {
		console.log('App Launch');
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style lang="scss">
@import "uview-ui/index.scss";
/* 解决头条小程序组件内引入字体不生效的问题 */
/* #ifdef MP-TOUTIAO */
@font-face {
	font-family: uniicons;
	src: url('/static/uni.ttf');
}
body{
	-webkit-text-size-adjust : 100% ;
	 -moz-text-size-adjust : 100% ;
	 -ms-text-size-adjust : 100% ;
	 text-size-adjust : 100%;
}
/* #endif */
</style>
