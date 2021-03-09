const websiteUrl = 'http://uniapp.ruange.com.cn/';  
const now = Date.now || function () {  
  return new Date().getTime();  
};  
const isArray = Array.isArray || function (obj) {  
  return obj instanceof Array;  
};  
const callback = function(error){
	return uni.showToast({
		title: error,
		icon: "none",
		duration: 2000,
	})
}

const network = function(){
	return uni.showToast({
		title: '请检查网络连接',
		icon: "none",
		duration: 2000,
	})
}
const getuserinfo = function(){
	
}
const getimgurl = function(url){
	return "http://uniapp.ruange.com.cn/"+url
}

export default {  
  websiteUrl,  
  now,  
  isArray,
  callback:callback,
  network:network,
  getimgurl:getimgurl,
  getuserinfo:getuserinfo,
  // toast: toast,
  
}
