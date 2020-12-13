(this["webpackJsonpd3-tree-map"]=this["webpackJsonpd3-tree-map"]||[]).push([[0],{53:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(1),c=a.n(r),o=a(14),i=a.n(o),s=(a(53),a(2)),l=a.n(s),d=a(15),u=a(12),g=(a.p,a(55),a(4)),h={Action:"seagreen",Drama:"mediumpurple",Adventure:"maroon",Family:"red",Animation:"hotpink",Comedy:"purple",Biography:"fuchsia","Product Design":"mediumpurple","Tabletop Games":"seagreen","Gaming Hardware":"maroon","Video Games":"red",Sound:"purple",Television:"fuchsia","Narrative Film":"green",Web:"lime",Hardware:"olive",Games:"gray","3D Printing":"navy",Technology:"blue",Wearables:"teal",Sculpture:"yellowgreen",Apparel:"orange",Food:"lightseagreen",Art:"dodgerblue",Gadgets:"tomato",Drinks:"rebeccapurple",2600:"blueviolet",Wii:"brown",NES:"burlywood",GB:"cadetblue",DS:"chocolate",X360:"coral",PS3:"cornflowerblue",PS2:"tan",SNES:"crimson",GBA:"steelblue",PS4:"darkblue","3DS":"darkcyan",N64:"darkgoldenrod",PS:"darkgray",XB:"darkkhaki",PC:"darkmagenta",PSP:"darkolivegreen",XOne:"darkorange"};function p(e){var t=e.data,a=g.a(t).sum((function(e){return e.value})),c=t.children.map((function(e){return e.name}));return Object(r.useEffect)((function(){var e=g.b("#tooltip");g.c(".tile").on("mouseover",(function(t){e.attr("data-value",t.target.dataset.value).html("".concat(t.target.dataset.name,"<br/>").concat(t.target.dataset.category,"<br/>").concat(t.target.dataset.value)).style("top",t.screenY-10+"px").style("left",t.screenX+10+"px").style("background","#f5f9cd").style("line-height","1.5").style("border-radius","5px").style("opacity",.9).style("font-size","13px").style("padding","15px")})).on("mouseout",(function(){e.style("opacity",0)}))}),[]),Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{id:"title",children:"Tree Map"}),Object(n.jsx)("h3",{id:"description",children:t.name}),Object(n.jsx)("svg",{width:1060,height:570,children:Object(n.jsx)("g",{transform:"translate(0,0)",children:g.d().size([1060,570]).padding(2)(a)&&Object(n.jsxs)(n.Fragment,{children:[console.log(a.leaves()),console.log(t),a.leaves().map((function(e){if(e.data.name)return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("rect",{className:"tile",x:e.x0,y:e.y0,width:e.x1-e.x0,height:e.y1-e.y0,stroke:h[e.data.category],"data-name":e.data.name,"data-category":e.data.category,"data-value":e.value,style:{fill:h[e.data.category]},children:[e.data.category,e.data.name]},e.value),Object(n.jsx)("text",{children:e.data.name.split(/(?=[A-Z][^A-Z])/g).map((function(t,a){return Object(n.jsx)("tspan",{x:e.x0+5,y:e.y0+15+10*a,fontSize:"0.6em",fill:"white",children:t},"".concat(t,"-").concat(a))}))})]})}))]})})}),Object(n.jsx)("div",{id:"tooltip",style:{position:"absolute",opacity:0,zIndex:10}}),Object(n.jsx)("svg",{id:"legend",width:"750",height:"700",children:c.slice(0).map((function(e,t){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("rect",{className:"legend-item",width:"20",height:"20",x:t<5?30:t<10?230:t<15?430:630,y:t<5?30*(t+1):t<10?30*(t-4):t<15?30*(t-9):30*(t-14),style:{fill:h[e]}}),Object(n.jsx)("text",{x:t<5?60:t<10?260:t<15?460:660,y:t<5?30*(t+1.5):t<10?30*(t-3.5):t<15?30*(t-8.5):30*(t-13.5),children:e})]})}))})]})}function j(e){return fetch(e).then((function(e){return e.json().then((function(e){return e}))})).catch((function(e){return console.log(e)}))}var b=function(){var e=Object(r.useState)(null),t=Object(u.a)(e,2),a=t[0],c=t[1],o=Object(r.useState)("https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/movie-data.json"),i=Object(u.a)(o,2),s=i[0],g=i[1],h="https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map",b="movie-data.json",m="kickstarter-funding-data.json",f="video-game-sales-data.json";return Object(r.useEffect)((function(){Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c(null),!s.length){e.next=6;break}return e.next=4,j(s);case 4:t=e.sent,c(t);case 6:case"end":return e.stop()}}),e)})))()}),[s]),Object(n.jsxs)("div",{className:"App",children:[Object(n.jsxs)("header",{style:{flexDirection:"row"},className:"App-header",children:[Object(n.jsx)("button",{onClick:function(){return g("".concat(h,"/").concat(b))},children:"Movie Data"}),Object(n.jsx)("button",{onClick:function(){return g("".concat(h,"/").concat(m))},children:"Kickstarter Data"}),Object(n.jsx)("button",{onClick:function(){return g("".concat(h,"/").concat(f))},children:"Video Game Data"})]}),a&&Object(n.jsx)(p,{data:a})]})},m=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,57)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),c(e),o(e)}))};i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(b,{})}),document.getElementById("root")),m()}},[[56,1,2]]]);
//# sourceMappingURL=main.c2096f7b.chunk.js.map