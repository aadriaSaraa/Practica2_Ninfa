(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"1a6d":function(t,r,e){},"277a":function(t,r,e){"use strict";e("1a6d")},f820:function(t,r,e){"use strict";e.r(r);var n=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{staticClass:"about"},[n("router-link",{attrs:{to:"/"}},[n("img",{attrs:{alt:"logotip",src:e("cf05")}})]),n("div",{staticClass:"container-md"},[n("b-card-group",{attrs:{columns:""}},t._l(t.proyectos,(function(t){return n("div",{key:t.id,attrs:{columns:""}},[n("Card5",{attrs:{autor:t.autor,srcimg:t.srcimg,alt:t.alt,titulo:t.titulo,texto:t.texto,url:t.url}})],1)})),0)],1)],1)},o=[];e("d3b7");function a(t,r,e,n,o,a,i){try{var s=t[a](i),c=s.value}catch(u){return void e(u)}s.done?r(c):Promise.resolve(c).then(n,o)}function i(t){return function(){var r=this,e=arguments;return new Promise((function(n,o){var i=t.apply(r,e);function s(t){a(i,n,o,s,c,"next",t)}function c(t){a(i,n,o,s,c,"throw",t)}s(void 0)}))}}e("96cf");var s=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("b-card",{staticClass:"mb-2",staticStyle:{"max-width":"20rem"},attrs:{title:t.titulo,"img-src":t.srcimg,"img-alt":t.alt,"img-top":"",footer:t.autor,tag:"proyecto"}},[e("b-card-text",[t._v(" "+t._s(t.texto)+" ")]),e("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:"Ir a la página del proyecto",variant:"secondary",href:t.url}},[t._v("Ir a la web")])],1)],1)},c=[],u={props:["id","titulo","srcimg","alt","url"]},l=u,d=(e("277a"),e("2877")),f=Object(d["a"])(l,s,c,!1,null,"0846236d",null),p=f.exports, m="https://github.com/aadriaSaraa/Practica2_Ninfa/blob/main/info.json",v={props:{name:{type:String,default:"Colaboraciones"}},components:{Card5:p},data:function(){return{proyectos:[],githubPage:1,page:1,loading:!1,perPage:5}},mounted:function(){this.fetchData()},methods:{fetchData:function(){var t=this;return i(regeneratorRuntime.mark((function r(){var e,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,fetch(m);case 2:return e=r.sent,r.next=5,e.json();case 5:n=r.sent,t.proyectos=n,console.log(n);case 8:case"end":return r.stop()}}),r)})))()}}},g=v,h=Object(d["a"])(g,n,o,!1,null,null,null);r["default"]=h.exports}}]);
//# sourceMappingURL=about.d5bc839b.js.map
