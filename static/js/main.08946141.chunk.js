(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],[,,,,,,,,,,,,function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(5),a=c(1),i=c(4),s=c.n(i),o=c(6),r=c(2),d=(c(12),c(0)),l=function(e){return Object(d.jsx)("button",{id:e.id,className:"button",onClick:e.onClick,children:Object(d.jsx)("span",{className:"content",children:e.children})})},u=(c(14),function(e){return Object(a.useEffect)((function(){var t=function(t){"Escape"===t.key&&e.closeRequest()};return document.addEventListener("keydown",t),document.getElementById("close-".concat(e.id)).onclick=function(){e.closeRequest()},function(){document.removeEventListener("keydown",t)}}),[]),Object(d.jsxs)("div",{id:e.id,className:"modal visible",children:[Object(d.jsx)("header",{children:Object(d.jsx)("i",{id:"close-".concat(e.id),className:"fi fi-rr-angle-left"})}),Object(d.jsx)("section",{children:e.children})]})}),j=(c(15),function(e){Object(a.useEffect)((function(){var t=document.getElementById("input-".concat(e.id));null!==t&&t.focus()}));var t=function(t){t&&t.city&&e.onSubmit({cityName:t.city.value})};return Object(d.jsxs)("form",{id:e.id,className:"city-form",onSubmit:function(e){e.preventDefault(),t(e.currentTarget)},children:[Object(d.jsx)("input",{id:"input-".concat(e.id),name:"city",type:"text",placeholder:"Ciudad (nombre en ingl\xe9s)"}),Object(d.jsx)(l,{id:"button-".concat(e.id),onClick:function(){var c=document.getElementById(e.id);t(c)},children:"Aceptar"}),Object(d.jsx)("input",{type:"submit",className:"invisible"})]})}),m=(c(16),function(e){return Object(d.jsxs)("svg",{className:"loading",width:"30",height:"30",children:[Object(d.jsx)("circle",{cx:"50%",cy:"50%",r:"12",strokeWidth:"4",stroke:"#A1DAF7",fill:"none"}),Object(d.jsx)("circle",{className:"animated-circle",cx:"50%",cy:"50%",r:"12",strokeWidth:"4",stroke:"#0080C8",fill:"none"})]})}),b=(c(17),function(e){Object(a.useEffect)((function(){setTimeout((function(){var t=document.getElementById(e.id);if(null!==t){t.classList.add("end");var c=t.querySelector(".popup-animation");null!==c&&c.classList.add("end")}}),200)}));return Object(d.jsx)("div",{id:e.id,className:"popup-error",children:Object(d.jsx)("div",{className:"popup-animation",children:Object(d.jsxs)("section",{className:"popup-body",children:[Object(d.jsx)("header",{className:"popup-header",children:e.title}),Object(d.jsx)("section",{className:"popup-content",children:e.content}),Object(d.jsx)("footer",{className:"popup-footer",children:Object(d.jsx)("button",{className:"popup-close",onClick:function(){var t=document.getElementById(e.id);if(null!==t){t.classList.remove("end");var c=t.querySelector(".popup-animation");null!==c&&(c.classList.remove("end"),setTimeout((function(){e.closeRequest()}),250))}},children:"Cerrar"})})]})})})}),p=(c(18),{top:[98,106,120],bottom:[58,63,80]}),f={top:[50,54,66],bottom:[22,23,28]},h=function(e){var t=Object(a.useState)(!1),c=Object(r.a)(t,2),n=c[0],i=c[1],h=Object(a.useState)(!1),O=Object(r.a)(h,2),x=O[0],y=O[1],v=Object(a.useState)("parana"),N=Object(r.a)(v,2),g=N[0],k=N[1],E=Object(a.useState)(null),w=Object(r.a)(E,2),L=w[0],q=w[1],B=function(){var e=Object(o.a)(s.a.mark((function e(){var t,c,n,a,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://api.weatherapi.com/v1/forecast.json","?key=").concat("9de9e15c101a44b9b6c40544212011","&q=").concat(g,"&days=2&aqi=").concat("no","&lang=").concat("es"),{});case 2:if(200!==(t=e.sent).status){e.next=12;break}return e.next=6,t.json();case 6:for(c=e.sent,n=new Array(2),a=0;a<2;++a)o=c.forecast.forecastday[a],n[a]={condition:o.day.condition.text,maxTemperature:o.day.maxtemp_c,minTemperature:o.day.mintemp_c,chanceOfRain:o.day.daily_chance_of_rain,icon:o.day.condition.icon};q({name:c.location.name,country:c.location.country,condition:c.current.condition.text,isDay:1===c.current.is_day,temperature:c.current.temp_c,precipitation:c.current.precip_mm,cloud:c.current.cloud,forecast:n}),e.next=13;break;case 12:i(!0);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){B()}),[g]),Object(a.useEffect)((function(){if(null!==L){var e,t=document.getElementById("rain-container"),c=document.getElementById("weather");L.isDay?(e=p,c.classList.remove("night"),c.classList.add("day")):(e=f,c.classList.remove("day"),c.classList.add("night"));var n=L.cloud/100,a="".concat(e.top[0],",").concat(e.top[1],",").concat(e.top[2]),i="".concat(e.bottom[0],",").concat(e.bottom[1],",").concat(e.bottom[2]);t.style.background="linear-gradient(180deg, rgba(".concat(a,", ").concat(n,"), rgba(").concat(i,", ").concat(n,"))")}})),Object(a.useEffect)((function(){null!==L&&(document.getElementById("change-city").onclick=function(){y(!0)})}),[L]),null!==L?Object(d.jsxs)("div",{id:"weather",className:"weather day",children:[Object(d.jsxs)("div",{id:"rain-container",className:"rain",children:[Object(d.jsxs)("header",{children:[Object(d.jsx)("span",{className:"city-name",children:L.name}),Object(d.jsx)("span",{className:"country",children:L.country})]}),Object(d.jsxs)("section",{children:[Object(d.jsxs)("div",{className:"temperature",children:[Object(d.jsx)("span",{className:"ammount",children:L.temperature}),Object(d.jsx)("span",{className:"unit",children:"\xb0C"})]}),Object(d.jsxs)("span",{className:"condition-container",children:[Object(d.jsx)("span",{className:"condition",children:L.condition}),Object(d.jsxs)("div",{className:"precipitation",children:[Object(d.jsx)("i",{className:"fi fi-rr-raindrops"}),Object(d.jsxs)("span",{children:[L.forecast[0].chanceOfRain,"%"]})]})]})]}),Object(d.jsxs)("footer",{children:[Object(d.jsx)("div",{className:"forecast-container",children:L.forecast.map((function(e,t){return Object(d.jsxs)("div",{className:"forecastday",children:[Object(d.jsxs)("div",{className:"left",children:[Object(d.jsx)("img",{src:e.icon,alt:e.condition}),Object(d.jsx)("span",{className:"day",children:0===t?"Hoy":"Ma\xf1ana"}),Object(d.jsx)("span",{className:"condition",children:e.condition})]}),Object(d.jsxs)("div",{className:"right",children:[Object(d.jsxs)("span",{className:"max-temperature",children:[e.maxTemperature,"\xb0"]}),Object(d.jsx)("span",{className:"slash",children:"/"}),Object(d.jsxs)("span",{className:"min-temperature",children:[e.minTemperature,"\xb0"]})]})]},"forecastday-".concat(t))}))}),Object(d.jsx)("div",{className:"button-container",children:Object(d.jsx)(l,{id:"change-city",children:"Cambiar ciudad"})})]})]}),x?Object(d.jsx)(u,{id:"modal-change-city",closeRequest:function(){y(!1)},children:Object(d.jsx)(j,{id:"form-change-city",onSubmit:function(e){y(!1),k((function(t){return e.cityName}))}})}):null,n?Object(d.jsx)(b,{id:"search-city-error",title:Object(d.jsx)("h2",{children:"\xa1Ups! Algo sali\xf3 mal"}),content:Object(d.jsx)("p",{children:"No se encontr\xf3 la ciudad especificada."}),closeRequest:function(){i(!1)}}):null]}):Object(d.jsx)("div",{className:"loading-container",children:Object(d.jsx)(m,{})})},O=h,x=(c(19),function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(O,{})})});n.render(Object(d.jsx)(x,{}),document.getElementById("app"))}],[[20,1,2]]]);
//# sourceMappingURL=main.08946141.chunk.js.map