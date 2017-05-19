exports.ids=[8],exports.modules={5:function(e,t){e.exports=require("react-css-modules")},9:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(14),u=r(a),o="http://127.0.0.1/my-store/index.php/Home/Store/",c="http://127.0.0.1/my-store/index.php/Home/Address/",d="http://127.0.0.1/my-store/index.php/Home/My/",i={url:"",data:{},async:!0,type:"get",server:o},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};e=l({},i,e),u.default.ajax({url:e.server+e.url,data:e.data,async:e.async,type:e.type,dataType:"json"}).then(function(e){console.log(e),t(e.data)})},s=100;t.default={myInfoInit:function(e){var t={server:d,url:"getMyInfo"};f(t,e)},indexInit:function(e){var t={url:"index"};f(t,e)},getMorePro:function(e,t,n){var r={url:"scrollLoadPro",data:{count:t,load_num:n}};f(r,e)},getProList:function(e){var t={url:"proList",async:!1};f(t,e)},addAddress:function(e,t,n,r){var l={server:c,url:"add",type:"post",data:{consignee:t,tel:n,address:r}};f(l,e)},setDefaultAddress:function(e,t){var n={server:c,url:"choose",data:{id:e}};f(n,t)},getMyAddresses:function(e,t){return setTimeout(function(){var t={server:c,async:!1,url:"showList"};f(t,e)},t||s)},getDefaultAddress:function(e,t,n){return setTimeout(function(){var t={server:c,url:"getDefaultAddress",async:!1};f(t,e)},t||s)},getProducts:function(e,t,n){return setTimeout(function(){var t={url:"getCartList",async:!1};f(t,e)},t||s)},getProDetails:function(e,t,n){return setTimeout(function(){var n={url:"getProDetail",data:{pid:t},async:!1};f(n,e)},n||s)},collectionProduct:function(e,t){var n={url:"collection",data:{pid:e},async:!1};f(n,cb)},addCartProduct:function(e,t,n){return setTimeout(function(){var n={url:"addCartProduct",data:{cid:e}};f(n,t)},n||s)},delCartProduct:function(e,t,n){return setTimeout(function(){var n={url:"delCartProduct",data:{cid:e}};f(n,t)},n||s)},removeCartProById:function(e,t){var n={url:"deleteCartById",data:{cid:e},type:"get"};f(n,t)},settleCart:function(e,t){var n={url:"settleCart",data:{cart_ids:e.join(",")}};f(n,t)},addCart:function(e,t,n,r){var l={url:"addProductToCart",data:{pid:e,did:t,num:n}};f(l,r)},handleSubmitOrder:function(e,t){var n={url:"orderSave",data:{postscript:e},type:"post",async:!1};f(n,t)}},e.exports=t.default},11:function(e,t){e.exports=require("react-weui")},41:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function l(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}Object.defineProperty(t,"__esModule",{value:!0}),t.myInfoInit=void 0;var a=n(8),u=l(a),o=n(9),c=r(o),d=function(e){return{type:u.MY_INIT,data:e}};t.myInfoInit=function(){return function(e){c.default.myInfoInit(function(t){e(d(t))})}}},141:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(1),a=r(l),u=n(171),o=r(u),c=n(5),d=r(c),i=n(11),f=r(i),s=n(6),m=f.default.TabBar,p=f.default.TabBarItem,y=f.default.TabBarIcon,v=f.default.TabBarLabel,E=f.default.Cells,_=f.default.Cell,h=f.default.CellBody,b=f.default.CellFooter,g=f.default.CellHeader,P=function(e){var t=e.info;return a.default.createElement("div",{styleName:"my-wrap"},a.default.createElement("div",{styleName:"user"},a.default.createElement("div",{styleName:"set-btn"},a.default.createElement("p",null,"设置")),a.default.createElement("div",{styleName:"user-photo"},a.default.createElement("input",{type:"file",id:"headimgurl",name:"headimgurl"}),a.default.createElement("img",{src:t.headimgurl})),a.default.createElement("div",{styleName:"user-nick"},a.default.createElement("p",{styleName:"nick",id:"J_myNick"},t.name),a.default.createElement("p",{styleName:"level3"}))),a.default.createElement("section",{styleName:"user-behavior"},a.default.createElement("ul",{"data-spm":"1"},a.default.createElement("li",null,a.default.createElement("a",{href:"#"},a.default.createElement("p",null,"41"),a.default.createElement("p",null,"收藏的宝贝"))),a.default.createElement("li",null,a.default.createElement("a",{href:"#"},a.default.createElement("p",null,"17"),a.default.createElement("p",null,"收藏的店铺"))),a.default.createElement("li",null,a.default.createElement("a",{href:"#"},a.default.createElement("p",null,"42"),a.default.createElement("p",null,"我的足迹"))))),a.default.createElement(m,{style:{position:"initial"}},a.default.createElement(p,null,a.default.createElement(s.Link,{to:"home"},a.default.createElement(y,null,a.default.createElement("img",{src:"http://mystore-1251466962.cosgz.myqcloud.com/icon_nav_button.png"})),a.default.createElement(v,null,"代付款"))),a.default.createElement(p,null,a.default.createElement(s.Link,{to:"cart"},a.default.createElement(y,null,a.default.createElement("img",{src:"http://mystore-1251466962.cosgz.myqcloud.com/icon_nav_button.png"})),a.default.createElement(v,null,"代付款"))),a.default.createElement(p,null,a.default.createElement(s.Link,{to:"search"},a.default.createElement(y,null,a.default.createElement("img",{src:"http://mystore-1251466962.cosgz.myqcloud.com/icon_nav_button.png"})),a.default.createElement(v,null,"代付款"))),a.default.createElement(p,null,a.default.createElement(y,null,a.default.createElement("img",{src:"http://mystore-1251466962.cosgz.myqcloud.com/icon_nav_button.png"})),a.default.createElement(v,null,"代付款")),a.default.createElement(p,null,a.default.createElement(y,null,a.default.createElement("img",{src:"http://mystore-1251466962.cosgz.myqcloud.com/icon_nav_button.png"})),a.default.createElement(v,null,"代付款"))),a.default.createElement(E,null,a.default.createElement(s.Link,{to:"qrcode"},a.default.createElement(_,{access:!0},a.default.createElement(g,null,a.default.createElement("img",{src:"http://mystore-1251466962.cosgz.myqcloud.com/icon_nav_button.png",style:{width:"25px"}})),a.default.createElement(h,null,"二维码"),a.default.createElement(b,null)))))};t.default=(0,d.default)(P,o.default),e.exports=t.default},142:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function l(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),d=n(1),i=l(d),f=n(141),s=l(f),m=n(41),p=r(m),y=n(13),v=function(e){function t(){return a(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),c(t,[{key:"componentWillMount",value:function(){var e=this.props.init;e()}},{key:"render",value:function(){var e=this.props.info;return i.default.createElement("div",null,i.default.createElement(s.default,{info:e}))}}]),t}(d.Component),E=function(e){return{info:e.my.info}},_=function(e){return{init:function(){e(p.myInfoInit())}}};t.default=(0,y.connect)(E,_)(v),e.exports=t.default},171:function(e,t){e.exports={"my-wrap":"_2t_VIAkS",myWrap:"_2t_VIAkS",user:"saXpU1th","set-btn":"_8UZXAfPA",setBtn:"_8UZXAfPA","user-photo":"t65otLR0",userPhoto:"t65otLR0","user-nick":"DnG4-Ch4",userNick:"DnG4-Ch4",nick:"i-08viwC",level3:"_3IB5l3Ly",level:"c4m3Jrtp","user-behavior":"naj0VLdy",userBehavior:"naj0VLdy","order-act":"_2M-ySb9j",orderAct:"_2M-ySb9j",sub:"_35yVW_T9",number:"_3Sy6Pbi6"}}};