(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/sign/sign"],{"0f7c":function(t,e,a){"use strict";var n=a("b671"),u=a.n(n);u.a},"289d":function(t,e,a){"use strict";(function(t){a("904b");n(a("66fd"));var e=n(a("c175"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("5486")["createPage"])},"67ef":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=u(a("142e"));function u(t){return t&&t.__esModule?t:{default:t}}var o={data:function(){return{autograph:"",user_id:""}},onShow:function(){var e=this;t.getStorage({key:"userinfo",success:function(t){console.log(t),e.autograph=t.data.autograph,e.user_id=t.data.id}})},methods:{back:function(){t.navigateTo({url:"../personaldata/personaldata"})},callback:function(t){console.log("name",t),this.$refs.uToast.show({title:t,type:"default"})},sign:function(t){this.autograph=t.detail.value},save:function(){var e=this;console.log(this.user_id),t.request({url:n.default.websiteUrl+"user_updateinfo",header:{"user-token":"6a109faf305513d443337ddb1ad4cb9b"},method:"post",data:{user_id:this.user_id,autograph:this.autograph},success:function(a){console.log(a),200==a.data.code?t.setStorage({key:"userinfo",data:a.data.data,success:function(){e.callback("保存成功")}}):e.callback(a.data.msg)}})}}};e.default=o}).call(this,a("5486")["default"])},b671:function(t,e,a){},c175:function(t,e,a){"use strict";a.r(e);var n=a("ea25"),u=a("c750");for(var o in u)"default"!==o&&function(t){a.d(e,t,(function(){return u[t]}))}(o);a("0f7c");var c,r=a("f0c5"),s=Object(r["a"])(u["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],c);e["default"]=s.exports},c750:function(t,e,a){"use strict";a.r(e);var n=a("67ef"),u=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=u.a},ea25:function(t,e,a){"use strict";a.d(e,"b",(function(){return u})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return n}));var n={uToast:function(){return a.e("uview-ui/components/u-toast/u-toast").then(a.bind(null,"523c"))}},u=function(){var t=this,e=t.$createElement;t._self._c},o=[]}},[["289d","common/runtime","common/vendor"]]]);