(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/settlement/settlement"],{"4e54":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uToast:function(){return n.e("uview-ui/components/u-toast/u-toast").then(n.bind(null,"523c"))}},a=function(){var t=this,e=t.$createElement;t._self._c},o=[]},"6b62":function(t,e,n){},ac26:function(t,e,n){"use strict";n.r(e);var i=n("f1db"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},bf04:function(t,e,n){"use strict";n.r(e);var i=n("4e54"),a=n("ac26");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("c750e");var s,u=n("f0c5"),c=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],s);e["default"]=c.exports},c750e:function(t,e,n){"use strict";var i=n("6b62"),a=n.n(i);a.a},d3c4:function(t,e,n){"use strict";(function(t){n("904b");i(n("66fd"));var e=i(n("bf04"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("5486")["createPage"])},f1db:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("142e"));function a(t){return t&&t.__esModule?t:{default:t}}var o={data:function(){return{isactive:0,user_id:"",name:"",myphoto:"",phone:"",qqnum:"",webchatnum:"",email:"",personalinfo:"",idcard:"",cardphoto:"",city:"",issubmit:!0,isphoto:!0}},onLoad:function(){var e=this;t.getSystemInfo({success:function(t){e.windowHeight=t.windowHeight}}),t.onWindowResize((function(t){t.size.windowHeight+200<e.windowHeight?e.issubmit=!1:e.issubmit=!0}))},methods:{callback:function(t){console.log("name",t),this.$refs.uToast.show({title:t,type:"default"})},back:function(){t.switchTab({url:"/pages/my/my"})},select:function(t){this.isactive=t},intro:function(t){this.personalinfo=t.detail.value},namecont:function(t){this.name=t.detail.value},phonecont:function(t){this.phone=t.detail.value},qqnumcont:function(t){this.qqnum=t.detail.value},webchatnumcont:function(t){this.webchatnum=t.detail.value},emailcont:function(t){this.email=t.detail.value},citycont:function(t){this.city=t.detail.value},idcardcont:function(t){this.idcard=t.detail.value},photo:function(){var e=this;t.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album"],success:function(n){t.uploadFile({url:i.default.websiteUrl+"service_uploadimg",filePath:n.tempFilePaths[0],header:{"user-token":"6a109faf305513d443337ddb1ad4cb9b"},name:"images",success:function(t){console.log(t);var n=JSON.parse(t.data);console.log("1"+n.data),e.isphoto=!1,e.myphoto=i.default.websiteUrl+n.data}})}})},submit:function(){var e=this;if(""!=this.name&&0!=this.isactive&&""!=this.phone&&""!=this.myphoto)if(""!==this.phone){var n=/^1[3456789]\d{9}$/;n.test(this.phone)?t.request({url:i.default.websiteUrl+"designer_authen",header:{"user-token":"6a109faf305513d443337ddb1ad4cb9b"},method:"post",data:{user_id:this.user_id,servicearea:this.isactive,name:this.name,phone:this.phone,qqnum:this.qqnum,webchatnum:this.webchatnum,email:this.email,personalinfo:this.personalinfo,idcard:this.idcard},success:function(n){e.callback("提交成功"),setTimeout((function(){t.switchTab({url:"/pages/my/my"})}),1e3)}}):this.callback("请输入有效的手机号码")}else this.callback("手机号码不能为空");else this.callback("请将必填写信息补全")}}};e.default=o}).call(this,n("5486")["default"])}},[["d3c4","common/runtime","common/vendor"]]]);