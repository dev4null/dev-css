(function(e){function t(t){for(var a,s,c=t[0],r=t[1],l=t[2],u=0,p=[];u<c.length;u++)s=c[u],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&p.push(i[s][0]),i[s]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);d&&d(t);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,c=1;c<n.length;c++){var r=n[c];0!==i[r]&&(a=!1)}a&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},i={app:0},o=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/dev-css/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var d=r;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0cda":function(e,t,n){},"2eba":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("0cda");var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"root"}},[n("div",{class:e.cssClasses},[n("router-view",{attrs:{name:"layout",title:e.title,"is-x-small":e.screen.isXSmall,"is-large":e.screen.isLarge},scopedSlots:e._u([{key:"footer",fn:function(){},proxy:!0}])},[n("div",{staticClass:"content"},[n("router-view",{attrs:{name:"content"}})],1)])],1)])},o=[],s=(n("4de4"),n("d3b7"),n("b64b"),n("99af"),n("159b"),{XSmall:"(max-width: 599.99px)",Small:"(min-width: 600px) and (max-width: 959.99px)",Medium:"(min-width: 960px) and (max-width: 1279.99px)",Large:"(min-width: 1280px)"}),c=[],r=window.matchMedia(s.XSmall),l=window.matchMedia(s.Small),d=window.matchMedia(s.Medium),u=window.matchMedia(s.Large);[r,l,d,u].forEach((function(e){e.addListener((function(){c.forEach((function(e){return e()}))}))}));var p=function(){return{"screen-x-small":r.matches,"screen-small":l.matches,"screen-medium":d.matches,"screen-large":u.matches}},m=function(e){return c.push(e)},f=function(e){c=c.filter((function(t){return t!==e}))};function h(){var e=p();return{isXSmall:e["screen-x-small"],isLarge:e["screen-large"],cssClasses:Object.keys(e).filter((function(t){return e[t]}))}}var C={name:"app",data:function(){return{title:this.$appInfo.title,screen:h()}},computed:{cssClasses:function(){return["app"].concat(this.screen.cssClasses)}},methods:{screenSizeChanged:function(){this.screen=h()}},mounted:function(){m(this.screenSizeChanged)},beforeDestroy:function(){f(this.screenSizeChanged)},components:{}},g=C,x=(n("5c0b"),n("2877")),b=Object(x["a"])(g,i,o,!1,null,null,null),v=b.exports,w=n("8c4f"),y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",{staticClass:"content-block"},[e._v("Home")]),n("div",{staticClass:"content-block"},[n("div",{staticClass:"dx-card responsive-paddings"},[n("div",{staticClass:"logos-container"},[n("svg",{staticClass:"devextreme-logo",attrs:{viewBox:"0 0 200 34",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M21.269 16.6304C21.269 21.9331 20.1851 25.9907 18.0171 28.8032C15.8638 31.6011 12.7583 33 8.70068 33H0.834473V0.875977H9.42578C13.1611 0.875977 16.0688 2.26025 18.1489 5.02881C20.229 7.78271 21.269 11.6499 21.269 16.6304ZM15.1387 16.8062C15.1387 9.62842 13.1611 6.03955 9.20605 6.03955H6.81104V27.7705H8.74463C10.9272 27.7705 12.5386 26.8623 13.5786 25.0459C14.6187 23.2148 15.1387 20.4683 15.1387 16.8062ZM33.7504 33.4395C30.6889 33.4395 28.2719 32.3555 26.4994 30.1875C24.7416 28.0049 23.8627 24.9214 23.8627 20.937C23.8627 16.894 24.661 13.7373 26.2577 11.4668C27.8544 9.19629 30.081 8.06104 32.9374 8.06104C35.6034 8.06104 37.7055 9.03516 39.2436 10.9834C40.7816 12.917 41.5507 15.6343 41.5507 19.1353V22.2554H29.7953C29.8393 24.438 30.286 26.064 31.1356 27.1333C31.9853 28.188 33.1571 28.7153 34.6513 28.7153C36.5556 28.7153 38.5038 28.1221 40.496 26.9355V31.7476C38.621 32.8755 36.3725 33.4395 33.7504 33.4395ZM32.8935 12.5654C32.0585 12.5654 31.37 13.0122 30.828 13.9058C30.286 14.7847 29.9711 16.1543 29.8832 18.0146H35.8158C35.7865 16.2275 35.5155 14.8726 35.0028 13.9497C34.4901 13.0269 33.787 12.5654 32.8935 12.5654ZM48.429 33L42.035 8.52246H48.0994L51.2195 22.6948C51.3514 23.354 51.5052 24.3208 51.681 25.5952C51.8714 26.855 51.9886 27.7632 52.0325 28.3198H52.1204C52.1351 27.8804 52.1937 27.2505 52.2962 26.4302C52.4134 25.6099 52.5306 24.8555 52.6478 24.167C52.7649 23.4785 53.8929 18.2637 56.0315 8.52246H62.096L55.68 33H48.429ZM78.5324 33H64.0524V0.875977H78.5324V6.03955H70.029V13.686H77.9172V18.8716H70.029V27.7705H78.5324V33ZM86.1798 20.4976L80.0714 8.52246H86.1358L89.3878 15.9932L92.398 8.52246H98.4186L92.2662 20.4976L98.6822 33H92.5738L89.1021 25.1777L85.8722 33H79.7857L86.1798 20.4976ZM109.12 28.4956C109.94 28.4956 110.827 28.2905 111.779 27.8804V32.4507C110.827 33.1099 109.398 33.4395 107.494 33.4395C105.37 33.4395 103.795 32.8096 102.77 31.5498C101.745 30.2754 101.232 28.3711 101.232 25.8369V13.1587H98.8589V10.5439L101.913 8.43457L103.407 3.24902H107.143V8.52246H111.581V13.1587H107.143V26.0347C107.143 27.6753 107.802 28.4956 109.12 28.4956ZM124.744 8.06104C125.461 8.06104 126.164 8.1709 126.853 8.39062L126.172 14.0596C125.762 13.9131 125.227 13.8398 124.568 13.8398C123.147 13.8398 122.056 14.4038 121.294 15.5317C120.532 16.645 120.151 18.271 120.151 20.4097V33H114.307V8.52246H119.119L119.778 12.3457H119.975C120.62 10.8076 121.323 9.70898 122.085 9.0498C122.847 8.39062 123.733 8.06104 124.744 8.06104ZM137.598 33.4395C134.537 33.4395 132.12 32.3555 130.347 30.1875C128.59 28.0049 127.711 24.9214 127.711 20.937C127.711 16.894 128.509 13.7373 130.106 11.4668C131.702 9.19629 133.929 8.06104 136.785 8.06104C139.451 8.06104 141.554 9.03516 143.092 10.9834C144.63 12.917 145.399 15.6343 145.399 19.1353V22.2554H133.643C133.687 24.438 134.134 26.064 134.984 27.1333C135.833 28.188 137.005 28.7153 138.499 28.7153C140.404 28.7153 142.352 28.1221 144.344 26.9355V31.7476C142.469 32.8755 140.221 33.4395 137.598 33.4395ZM136.742 12.5654C135.907 12.5654 135.218 13.0122 134.676 13.9058C134.134 14.7847 133.819 16.1543 133.731 18.0146H139.664C139.635 16.2275 139.364 14.8726 138.851 13.9497C138.338 13.0269 137.635 12.5654 136.742 12.5654ZM172.668 33V18.4102C172.668 14.8213 171.781 13.0269 170.009 13.0269C168.72 13.0269 167.797 13.6714 167.24 14.9604C166.684 16.2349 166.405 18.2856 166.405 21.1128V33H160.517V18.4102C160.517 14.8213 159.616 13.0269 157.814 13.0269C156.554 13.0269 155.639 13.6641 155.068 14.9385C154.496 16.2129 154.211 18.3149 154.211 21.2446V33H148.366V8.52246H153.002L153.705 11.6646H154.079C154.665 10.4194 155.463 9.51123 156.474 8.93994C157.499 8.354 158.591 8.06104 159.748 8.06104C162.736 8.06104 164.728 9.47461 165.724 12.3018H165.944C167.189 9.47461 169.189 8.06104 171.943 8.06104C174.111 8.06104 175.751 8.82275 176.864 10.3462C177.992 11.8696 178.556 14.0962 178.556 17.0259V33H172.668ZM191.433 33.4395C188.372 33.4395 185.955 32.3555 184.182 30.1875C182.424 28.0049 181.546 24.9214 181.546 20.937C181.546 16.894 182.344 13.7373 183.941 11.4668C185.537 9.19629 187.764 8.06104 190.62 8.06104C193.286 8.06104 195.388 9.03516 196.926 10.9834C198.464 12.917 199.233 15.6343 199.233 19.1353V22.2554H187.478C187.522 24.438 187.969 26.064 188.818 27.1333C189.668 28.188 190.84 28.7153 192.334 28.7153C194.238 28.7153 196.187 28.1221 198.179 26.9355V31.7476C196.304 32.8755 194.055 33.4395 191.433 33.4395ZM190.576 12.5654C189.741 12.5654 189.053 13.0122 188.511 13.9058C187.969 14.7847 187.654 16.1543 187.566 18.0146H193.499C193.469 16.2275 193.198 14.8726 192.686 13.9497C192.173 13.0269 191.47 12.5654 190.576 12.5654Z",fill:"#F05B41"}})]),n("svg",{staticClass:"plus",attrs:{viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M21.6309 13.3433H13.1714V21.8027H8.73291V13.3433H0.229492V8.88281H8.73291V0.379395H13.1714V8.88281H21.6309V13.3433Z",fill:"#BCBCBC"}})]),n("svg",{staticClass:"vue-logo",attrs:{viewBox:"0 0 180 62",xmlns:"http://www.w3.org/2000/svg"}},[n("polygon",{staticStyle:{fill:"#41B782"},attrs:{points:"44.3,0 36,14.3 27.7,0 0,0 36,62 72,0 "}}),n("polygon",{staticStyle:{fill:"#35495E"},attrs:{points:"44.3,0 36,14.3 27.7,0 14.4,0 36,37.2 57.6,0 "}}),n("g",[n("path",{staticStyle:{fill:"#35495E"},attrs:{d:"M77.2,15c0-0.4,0.2-0.8,0.7-1c0.5-0.3,0.9-0.4,1.4-0.4c0.7,0,1.1,0.3,1.3,0.8l7.2,24.4L95,14.4\n              c0.2-0.5,0.6-0.8,1.2-0.8c0.5,0,1,0.1,1.4,0.4c0.4,0.3,0.7,0.6,0.7,1c0,0,0,0.1,0,0.1c0,0.1,0,0.1,0,0.2l-8.3,27.3\n              c-0.3,0.8-1,1.2-2.1,1.2s-1.8-0.4-2.1-1.2l-8.4-27.3C77.2,15.2,77.2,15.1,77.2,15z"}}),n("path",{staticStyle:{fill:"#35495E"},attrs:{d:"M99.8,36V25.4c0-0.3,0.2-0.6,0.5-0.9c0.3-0.2,0.7-0.4,1.2-0.4c0.4,0,0.8,0.1,1.2,0.4\n              s0.5,0.5,0.5,0.8V36c0,1.2,0.5,2.3,1.4,3.3c0.9,1,2,1.5,3.3,1.5c1.3,0,2.4-0.5,3.3-1.5c0.9-1,1.4-2.1,1.4-3.3V25.3\n              c0-0.3,0.2-0.6,0.5-0.8c0.3-0.2,0.7-0.4,1.2-0.4c0.5,0,0.9,0.1,1.2,0.3c0.3,0.2,0.5,0.5,0.5,0.8V36c0,2.1-0.8,3.9-2.4,5.5\n              c-1.6,1.6-3.5,2.4-5.7,2.4c-2.2,0-4.1-0.8-5.7-2.4C100.6,40,99.8,38.1,99.8,36z"}}),n("path",{staticStyle:{fill:"#35495E"},attrs:{d:"M119.9,35.9v-4.3c0-2.1,0.8-3.9,2.4-5.5c1.6-1.5,3.5-2.3,5.8-2.3c2.1,0,4,0.7,5.5,2.1\n              s2.3,3.2,2.3,5.4c0,0.8-0.1,1.4-0.3,1.9s-0.5,0.8-0.9,1c-0.4,0.2-0.8,0.3-1.1,0.4s-0.8,0.1-1.4,0.1h-9v1.2c0,1.5,0.5,2.7,1.6,3.6\n              c1.1,0.9,2.5,1.4,4.2,1.4c0.9,0,1.7-0.1,2.4-0.4c0.7-0.3,1.2-0.5,1.6-0.8c0.4-0.3,0.7-0.4,1-0.4c0.4,0,0.7,0.2,1,0.5\n              c0.3,0.3,0.4,0.7,0.4,1c0,0.6-0.6,1.3-1.9,1.9c-1.2,0.7-2.8,1-4.6,1c-2.7,0-4.9-0.7-6.6-2.2S119.9,38.3,119.9,35.9z M123.3,32.5\n              h7.6c0.7,0,1.2-0.1,1.4-0.3c0.2-0.2,0.4-0.5,0.4-1c0-1.2-0.5-2.3-1.4-3.2c-0.9-0.9-2-1.4-3.3-1.4c-1.3,0-2.4,0.4-3.3,1.3\n              c-0.9,0.9-1.4,1.9-1.4,3.2V32.5z"}}),n("path",{staticStyle:{fill:"#35495E"},attrs:{d:"M138.8,41.9c0-0.5,0.2-1,0.6-1.4c0.4-0.4,0.9-0.6,1.5-0.6c0.6,0,1.1,0.2,1.5,0.6\n              c0.4,0.4,0.6,0.8,0.6,1.4c0,0.5-0.2,1-0.6,1.4s-0.9,0.6-1.5,0.6c-0.6,0-1.1-0.2-1.5-0.6S138.8,42.4,138.8,41.9z"}}),n("path",{staticStyle:{fill:"#35495E"},attrs:{d:"M143,51.4c0-0.5,0.1-0.8,0.4-1.1c0.3-0.3,0.6-0.4,1-0.4c1.1,0,1.8-0.4,2.1-1.2\n              c0.3-0.8,0.5-2,0.5-3.6V25.3c0-0.4,0.2-0.6,0.5-0.9c0.3-0.2,0.7-0.3,1.2-0.3c0.5,0,0.9,0.1,1.2,0.3c0.3,0.2,0.5,0.5,0.5,0.9v19.9\n              c0,2.4-0.5,4.3-1.4,5.7c-0.9,1.4-2.3,2.1-4.2,2.1C143.6,53,143,52.4,143,51.4z M147.2,18.2c-0.4-0.4-0.6-0.9-0.6-1.4\n              c0-0.5,0.2-1,0.6-1.4c0.4-0.4,0.9-0.6,1.5-0.6c0.6,0,1.1,0.2,1.5,0.6c0.4,0.4,0.6,0.8,0.6,1.4c0,0.5-0.2,1-0.6,1.4\n              c-0.4,0.4-0.9,0.6-1.5,0.6C148.1,18.8,147.6,18.6,147.2,18.2z"}}),n("path",{staticStyle:{fill:"#35495E"},attrs:{d:"M154.1,40.8c0-0.4,0.1-0.7,0.3-1c0.2-0.3,0.5-0.5,0.8-0.5c0.2,0,0.5,0.2,0.9,0.5s1,0.7,1.8,1\n              c0.8,0.3,1.7,0.5,2.7,0.5c1.4,0,2.4-0.2,3-0.7s0.9-1.1,0.9-1.9c0-0.9-0.3-1.6-1-2.2c-0.7-0.5-1.5-0.9-2.5-1.2c-1-0.3-2-0.6-3-0.9\n              s-1.8-0.9-2.5-1.7c-0.7-0.8-1-1.8-1-3.1c0-1.5,0.6-2.9,1.7-4c1.1-1.1,2.8-1.7,5.1-1.7c1.4,0,2.8,0.2,4,0.7c1.2,0.4,1.8,0.9,1.8,1.5\n              c0,0.3-0.1,0.7-0.4,1.1c-0.3,0.4-0.6,0.6-1,0.6c-0.1,0-0.6-0.2-1.6-0.6c-0.9-0.4-1.9-0.6-2.8-0.6c-1.3,0-2.2,0.3-2.8,0.9\n              c-0.6,0.6-0.9,1.3-0.9,2c0,0.8,0.3,1.4,1,1.8c0.7,0.4,1.5,0.8,2.5,1c1,0.2,2,0.6,3,0.9c1,0.4,1.8,1,2.5,1.8c0.7,0.9,1,2,1,3.4\n              c0,1.7-0.6,3-1.8,4c-1.2,1-2.9,1.5-5,1.5c-1.9,0-3.4-0.3-4.8-1C154.7,42.2,154.1,41.5,154.1,40.8z"}})])])])])])])},V=[],_=(n("a318"),{}),S=Object(x["a"])(_,y,V,!1,null,null,null),O=S.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",{staticClass:"content-block"},[e._v("Tasks")]),n("dx-data-grid",{staticClass:"dx-card wide-card",attrs:{"data-source":e.dataSourceConfig,"focused-row-index":0,"show-borders":!1,"focused-row-enabled":!0,"column-auto-width":!0,"column-hiding-enabled":!0}},[n("dx-paging",{attrs:{"page-size":10}}),n("dx-pager",{attrs:{"show-page-size-selector":!0,"show-info":!0}}),n("dx-filter-row",{attrs:{visible:!0}}),n("dx-column",{attrs:{"data-field":"Task_ID",width:90,"hiding-priority":2}}),n("dx-column",{attrs:{"data-field":"Task_Subject",caption:"Subject",width:190,"hiding-priority":8}}),n("dx-column",{attrs:{"data-field":"Task_Status",caption:"Status","hiding-priority":6}}),n("dx-column",{attrs:{"data-field":"Task_Priority",caption:"Priority","hiding-priority":5}},[n("dx-lookup",{attrs:{"display-expr":"name","value-expr":"value","data-source":e.priorities}})],1),n("dx-column",{attrs:{"data-field":"ResponsibleEmployee.Employee_Full_Name",caption:"Assigned To","allow-sorting":!1,"hiding-priority":7}}),n("dx-column",{attrs:{"data-field":"Task_Start_Date",caption:"Start Date","data-type":"date","hiding-priority":3}}),n("dx-column",{attrs:{"data-field":"Task_Due_Date",caption:"Due Date","data-type":"date","hiding-priority":4}}),n("dx-column",{attrs:{"data-field":"Task_Priority",caption:"Priority",name:"Priority","hiding-priority":1}}),n("dx-column",{attrs:{"data-field":"Task_Completion",caption:"Completion","hiding-priority":0}})],1)],1)},M=[],H=(n("493c"),n("d30a")),D=n.n(H),T=[{name:"High",value:4},{name:"Urgent",value:3},{name:"Normal",value:2},{name:"Low",value:1}],L={data:function(){return{priorities:T}},created:function(){this.dataSourceConfig={store:{type:"odata",key:"Task_ID",url:"https://js.devexpress.com/Demos/DevAV/odata/Tasks"},expand:"ResponsibleEmployee",select:["Task_ID","Task_Subject","Task_Start_Date","Task_Due_Date","Task_Status","Task_Priority","Task_Completion","ResponsibleEmployee/Employee_Full_Name"]}},components:{DxDataGrid:D.a,DxColumn:H["DxColumn"],DxFilterRow:H["DxFilterRow"],DxLookup:H["DxLookup"],DxPager:H["DxPager"],DxPaging:H["DxPaging"]}},E=L,j=Object(x["a"])(E,k,M,!1,null,null,null),P=j.exports,$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",{staticClass:"content-block"},[e._v("Tabs")]),n("div",{staticStyle:{"padding-left":"50px"}},[n("DxTabs",{attrs:{"data-source":e.longtabs,width:800,"scroll-by-content":!0,"show-nav-buttons":!0,"focus-state-enabled":!1,selectedIndex:2,"hover-state-enabled":!1}}),n("br"),n("DxTabs",{attrs:{"data-source":e.longtabs,width:1200,"scroll-by-content":!0,"show-nav-buttons":!1,"focus-state-enabled":!1,selectedIndex:2,"hover-state-enabled":!1}})],1)])},z=[],B=n("3c7a"),Z=n.n(B),I={data:function(){return{longtabs:[{html:"Перетащите новую вкладку",disabled:"true"},{text:"Классификаторы"},{text:"Менеджеры"},{text:"Коммуникации"},{text:"Адреса и телефоны"},{text:"Все продукты"},{text:"Лиды"}]}},components:{DxTabs:Z.a}},R=I,F=Object(x["a"])(R,$,z,!1,null,null,null),X=F.exports,A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"side-nav-outer-toolbar"},[n("header-toolbar",{staticClass:"layout-header",attrs:{"menu-toggle-enabled":!0,"toggle-menu-func":e.toggleMenu,title:e.title}}),n("dx-drawer",{staticClass:"layout-body",attrs:{position:"before",template:"menu",opened:e.menuOpened,"opened-state-mode":e.drawerOptions.menuMode,"reveal-mode":e.drawerOptions.menuRevealMode,"min-size":e.drawerOptions.minMenuSize,shading:e.drawerOptions.shaderEnabled,"close-on-outside-click":e.drawerOptions.closeOnOutsideClick},on:{"update:opened":function(t){e.menuOpened=t}},scopedSlots:e._u([{key:"menu",fn:function(){return[n("side-nav-menu",{attrs:{"compact-mode":!e.menuOpened},on:{click:e.handleSideBarClick}})]},proxy:!0}])},[n("dx-scroll-view",{ref:"scrollViewRef",staticClass:"with-footer"},[e._t("default"),e._t("footer")],2)],1)],1)},N=[],G=n("f87d"),J=n.n(G),U=n("5a1f"),q=n.n(U),K=[{text:"Home",path:"/home",icon:"home"},{text:"Examples",icon:"folder",items:[{text:"Tabs",path:"/tabs"},{text:"Grid",path:"/grid"}]}],Q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"header-component"},[n("dx-toolbar",{staticClass:"header-toolbar"},[n("dx-item",{attrs:{visible:e.menuToggleEnabled,location:"before","css-class":"menu-button"},scopedSlots:e._u([{key:"default",fn:function(){return[n("dx-button",{attrs:{icon:"menu","styling-mode":"text"},on:{click:e.toggleMenuFunc}})]},proxy:!0}])}),e.title?n("dx-item",{attrs:{location:"before","css-class":"header-title dx-toolbar-label"}},[[n("div",[e._v(e._s(e.title))])]],2):e._e()],1)],1)},W=[],Y=n("6191"),ee=n.n(Y),te=n("d158"),ne=n.n(te),ae={props:{menuToggleEnabled:Boolean,title:String,toggleMenuFunc:Function},created:function(){},data:function(){return{}},methods:{},components:{DxButton:ee.a,DxToolbar:ne.a,DxItem:te["DxItem"]}},ie=ae,oe=(n("b39f"),Object(x["a"])(ie,Q,W,!1,null,null,null)),se=oe.exports,ce=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"dx-swatch-additional side-navigation-menu",on:{click:e.forwardClick}},[e._t("default"),n("div",{staticClass:"menu-container"},[n("dx-tree-view",{ref:e.treeViewRef,attrs:{items:e.items,"key-expr":"path","selection-mode":"single","focus-state-enabled":!1,"expand-event":"click",width:"100%"},on:{"item-click":e.handleItemClick}})],1)],2)},re=[],le=n("5530"),de=(n("d81d"),n("ac1f"),n("00b4"),n("8dc9")),ue=n.n(de),pe="treeViewRef",me=p()["screen-large"],fe=K.map((function(e){return e.path&&!/^\//.test(e.path)&&(e.path="/".concat(e.path)),Object(le["a"])(Object(le["a"])({},e),{},{expanded:me})})),he={props:{compactMode:Boolean},data:function(){return{treeViewRef:pe,items:fe}},methods:{forwardClick:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this.$emit("click",t)},handleItemClick:function(e){if(e.itemData.path&&!this.compactMode){this.$router.push(e.itemData.path);var t=e.event;t.stopPropagation()}},updateSelection:function(){this.treeView&&(this.treeView.selectItem(this.$route.path),this.treeView.expandItem(this.$route.path))}},mounted:function(){this.treeView=this.$refs[pe]&&this.$refs[pe].instance,this.updateSelection(),this.compactMode&&this.treeView.collapseAll()},watch:{$route:function(){this.updateSelection()},compactMode:function(){this.compactMode?this.treeView.collapseAll():this.updateSelection()}},components:{DxTreeView:ue.a}},Ce=he,ge=(n("6819"),Object(x["a"])(Ce,ce,re,!1,null,null,null)),xe=ge.exports,be={props:{title:String,isXSmall:Boolean,isLarge:Boolean},methods:{toggleMenu:function(e){var t=e.event;t.stopPropagation(),this.menuOpened&&(this.menuTemporaryOpened=!1),this.menuOpened=!this.menuOpened},handleSideBarClick:function(){!1===this.menuOpened&&(this.menuTemporaryOpened=!0),this.menuOpened=!0}},data:function(){return{menuOpened:this.isLarge,menuTemporaryOpened:!1,menuItems:K}},computed:{drawerOptions:function(){var e=!this.isLarge;return{menuMode:this.isLarge?"shrink":"overlap",menuRevealMode:this.isXSmall?"slide":"expand",minMenuSize:this.isXSmall?0:60,menuOpened:this.isLarge,closeOnOutsideClick:e,shaderEnabled:e}},headerMenuTogglerEnabled:function(){return this.isXSmall},scrollView:function(){return this.$refs["scrollViewRef"].instance}},watch:{isLarge:function(){this.menuTemporaryOpened||(this.menuOpened=this.isLarge)},$route:function(){!this.menuTemporaryOpened&&this.isLarge||(this.menuOpened=!1,this.menuTemporaryOpened=!1),this.scrollView.scrollTo(0)}},components:{DxDrawer:J.a,DxScrollView:q.a,HeaderToolbar:se,SideNavMenu:xe}},ve=be,we=(n("9adc"),Object(x["a"])(ve,A,N,!1,null,null,null)),ye=we.exports;a["default"].use(w["a"]);var Ve=new w["a"]({routes:[{path:"/home",name:"home",components:{layout:ye,content:O}},{path:"/grid",name:"grid",components:{layout:ye,content:P}},{path:"/tabs",name:"tabs",components:{layout:ye,content:X}},{path:"/",redirect:"/home"},{path:"*",redirect:"/home"}]});Ve.beforeEach((function(e,t,n){n()}));var _e=Ve,Se={title:"DevExtreme App"},Oe=n("9e40"),ke=n("0218");a["default"].config.productionTip=!1,a["default"].prototype.$appInfo=Se,Object(Oe["a"])(ke),Object(Oe["b"])("ru"),new a["default"]({router:_e,render:function(e){return e(v)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},6819:function(e,t,n){"use strict";n("8dcd")},"6c93":function(e,t,n){},"8a80":function(e,t,n){},"8dcd":function(e,t,n){},"9adc":function(e,t,n){"use strict";n("6c93")},"9c0c":function(e,t,n){},a318:function(e,t,n){"use strict";n("2eba")},b39f:function(e,t,n){"use strict";n("8a80")}});
//# sourceMappingURL=app.62c6ddc2.js.map