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
<<<<<<< HEAD
	},
	onLoad:function(){
		console.log('APP load')
	},
	methods: {
		connect(){
			console.log('尝试连接')
			return new Promise((resolve,reject)=>{
				uni.connectSocket({
				    url: 'ws://39.104.28.171:8282', 
				    complete: (data)=> {
						resolve(data)
					}
				});
			})
			// 连接远程TCP并返回当前设备clickid
			
		},
		async websocket(){
			// 监听TCP连接成功，发送用户id进行绑定，无用户信息则登陆后绑定
			uni.onSocketOpen(function (res) {
			  console.log('WebSocket连接已打开！');
				uni.getStorage({
					key: 'userinfo',
					success:(res)=>{
						uni.sendSocketMessage({
						    data: '{"type":"binduid","data":"'+res.data.id+'"}'
						});
					}
				});	
			});
			
			uni.onSocketError(function (res) {
			  console.log('WebSocket连接打开失败10秒后重试打开,连到他关闭APP');
			  setTimeout(()=>{
				  this.connect()
			  },10000)
			});
		
			
			uni.onSocketMessage(function (res) {
			  console.log('收到服务器内容：' + res.data);
			});
			var myclickid = this.connect()
			// console.log('连接远程服务器')
		}
		
=======
>>>>>>> 0afe181971bf699cb1ded54d5bc50dfc354f6fb9
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
@font-face {
	font-family: 'pingfang';
	src: url(./static/PingFangMedium.ttf);
}
body{
	-webkit-text-size-adjust : 100% ;
	 -moz-text-size-adjust : 100% ;
	 -ms-text-size-adjust : 100% ;
	 text-size-adjust : 100%;
}
/* #endif */
</style>
