(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-swiper-dot/uni-swiper-dot"],{"08d4":function(t,e,n){"use strict";n.r(e);var o=n("9058"),i=n("6050");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("b7de");var s,d=n("f0c5"),u=Object(d["a"])(i["default"],o["b"],o["c"],!1,null,"83b61be8",null,!1,o["a"],s);e["default"]=u.exports},6050:function(t,e,n){"use strict";n.r(e);var o=n("aac6"),i=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e["default"]=i.a},"62e3":function(t,e,n){},9058:function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return o}));var i=function(){var t=this,e=t.$createElement;t._self._c},r=[]},aac6:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={name:"UniSwiperDot",props:{info:{type:Array,default:function(){return[]}},current:{type:Number,default:0},dotsStyles:{type:Object,default:function(){return{}}},mode:{type:String,default:"default"},field:{type:String,default:""}},data:function(){return{dots:{width:8,height:8,bottom:10,color:"#fff",backgroundColor:"rgba(0, 0, 0, .3)",border:"1px rgba(0, 0, 0, .3) solid",selectedBackgroundColor:"#333",selectedBorder:"1px rgba(0, 0, 0, .9) solid"}}},watch:{dotsStyles:function(t){this.dots=Object.assign(this.dots,this.dotsStyles)},mode:function(t){"indexes"===t?(this.dots.width=20,this.dots.height=20):(this.dots.width=8,this.dots.height=8)}},created:function(){"indexes"===this.mode&&(this.dots.width=20,this.dots.height=20),this.dots=Object.assign(this.dots,this.dotsStyles)}};e.default=o},b7de:function(t,e,n){"use strict";var o=n("62e3"),i=n.n(o);i.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-swiper-dot/uni-swiper-dot-create-component',
    {
        'components/uni-swiper-dot/uni-swiper-dot-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('5486')['createComponent'](__webpack_require__("08d4"))
        })
    },
    [['components/uni-swiper-dot/uni-swiper-dot-create-component']]
]);