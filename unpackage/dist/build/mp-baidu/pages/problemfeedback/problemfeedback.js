(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/problemfeedback/problemfeedback"],{"38c9":function(t,n,e){"use strict";var o=e("a378"),c=e.n(o);c.a},"5e8e":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=c(e("142e"));function c(t){return t&&t.__esModule?t:{default:t}}var i={data:function(){return{content:"",contact_info:"",issubmit:!0,windowHeight:""}},onLoad:function(){var n=this;t.getSystemInfo({success:function(t){n.windowHeight=t.windowHeight}}),t.onWindowResize((function(t){t.size.windowHeight+200<n.windowHeight?n.issubmit=!1:n.issubmit=!0}))},methods:{back:function(){t.switchTab({url:"/pages/my/my"})},content1:function(t){this.content=t.detail.value},content2:function(t){this.content_info=t.detail.value},callback:function(t){console.log("name",t),this.$refs.uToast.show({title:t,type:"default"})},submit:function(){var n=this;""!=this.content?t.request({url:o.default.websiteUrl+"service_feelback",header:{"user-token":"6a109faf305513d443337ddb1ad4cb9b"},method:"post",data:{content:this.content,contact_info:this.contact_info},success:function(e){console.log(e),200==e.data.code&&""!=n.content?(n.callback("提交成功"),setTimeout((function(){t.switchTab({url:"/pages/my/my"})}),1e3)):n.callback("提交失败")}}):this.callback("内容不能为空")}}};n.default=i}).call(this,e("5486")["default"])},7413:function(t,n,e){"use strict";e.r(n);var o=e("f530"),c=e("954d");for(var i in c)"default"!==i&&function(t){e.d(n,t,(function(){return c[t]}))}(i);e("38c9");var u,a=e("f0c5"),s=Object(a["a"])(c["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],u);n["default"]=s.exports},"954d":function(t,n,e){"use strict";e.r(n);var o=e("5e8e"),c=e.n(o);for(var i in o)"default"!==i&&function(t){e.d(n,t,(function(){return o[t]}))}(i);n["default"]=c.a},a378:function(t,n,e){},e538:function(t,n,e){"use strict";(function(t){e("904b");o(e("66fd"));var n=o(e("7413"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("5486")["createPage"])},f530:function(t,n,e){"use strict";e.d(n,"b",(function(){return c})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return o}));var o={uToast:function(){return e.e("uview-ui/components/u-toast/u-toast").then(e.bind(null,"523c"))}},c=function(){var t=this,n=t.$createElement;t._self._c},i=[]}},[["e538","common/runtime","common/vendor"]]]);