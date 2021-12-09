(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{22:function(e,t,c){},23:function(e,t,c){},30:function(e,t,c){"use strict";c.r(t);var a=c(1),o=c.n(a),s=c(15),n=c.n(s),l=(c(22),c(7)),i=(c(23),c(0));function r(){var e=Object(a.useState)({color:"black",backgroundColor:"white"}),t=Object(l.a)(e,2),c=t[0],o=t[1],s=Object(a.useState)("Enable Dark Mode"),n=Object(l.a)(s,2),r=n[0],d=n[1];return Object(i.jsxs)("div",{className:"container",style:c,children:[Object(i.jsx)("h1",{className:"my-3",children:"About Us"}),Object(i.jsxs)("div",{className:"accordion",id:"accordionExample",style:c,children:[Object(i.jsxs)("div",{className:"accordion-item",children:[Object(i.jsx)("h2",{className:"accordion-header",id:"headingOne",children:Object(i.jsx)("button",{className:"accordion-button",style:c,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",children:"Accordion Item #1"})}),Object(i.jsx)("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:Object(i.jsxs)("div",{className:"accordion-body",style:c,children:[Object(i.jsx)("strong",{children:"This is the first item's accordion body."})," It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(i.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(i.jsxs)("div",{className:"accordion-item",children:[Object(i.jsx)("h2",{className:"accordion-header",id:"headingTwo",children:Object(i.jsx)("button",{className:"accordion-button collapsed",style:c,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",children:"Accordion Item #2"})}),Object(i.jsx)("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample",children:Object(i.jsxs)("div",{className:"accordion-body",style:c,children:[Object(i.jsx)("strong",{children:"This is the second item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(i.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(i.jsxs)("div",{className:"accordion-item",children:[Object(i.jsx)("h2",{className:"accordion-header",id:"headingThree",children:Object(i.jsx)("button",{className:"accordion-button collapsed",style:c,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",children:"Accordion Item #3"})}),Object(i.jsx)("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample",children:Object(i.jsxs)("div",{className:"accordion-body",style:c,children:[Object(i.jsx)("strong",{children:"This is the third item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(i.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]})]}),Object(i.jsx)("div",{className:"container my-3",children:Object(i.jsx)("button",{type:"button",onClick:function(){"black"===c.color?(o({color:"white",backgroundColor:"black",border:"1px solid white"}),d("Enable Light Mode")):(o({color:"black",backgroundColor:"white"}),d("Enable Dark Mode"))},className:"btn btn-primary",children:r})})]})}var d=function(e){return e.alert&&Object(i.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(i.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)})," : ",Object(i.jsx)("strong",{children:e.alert.msg})]})},b=c(9);function h(e){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)(b.b,{className:"navbar-brand",to:"/",children:e.title}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(i.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(b.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(b.b,{className:"nav-link  active","aria-current":"page",to:"/about",children:e.aboutText})})]}),Object(i.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(i.jsx)("input",{className:"form-check-input",type:"checkbox",onClick:e.toggleMode,role:"switch",id:"flexSwitchCheckDefault"}),Object(i.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable Dark mode"})]}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(i.jsx)("input",{className:"form-check-input",type:"checkbox",onClick:e.toggleMode1,role:"switch",id:"flexSwitchCheckDefault"}),Object(i.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable Green  mode"})]}),Object(i.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(i.jsx)("input",{className:"form-check-input",type:"checkbox",onClick:e.toggleMode2,role:"switch",id:"flexSwitchCheckDefault"}),Object(i.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable Yellow  mode"})]})]})]})})})}function u(e){var t=Object(a.useState)(""),c=Object(l.a)(t,2),o=c[0],s=c[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"},children:[Object(i.jsx)("h1",{children:e.heading}),Object(i.jsx)("div",{className:"mb-3",children:Object(i.jsx)("textarea",{className:"form-control",id:"myBox",value:o,onChange:function(t){console.log("on change"),s(t.target.value),e.showAlert("Handle on change","success")},style:{backgroundColor:"light"===e.mode?"white":"gray",color:"dark"===e.mode?"white":"black"},rows:"8"})}),Object(i.jsx)("button",{className:"btn btn-".concat(e.button1," mx-1"),onClick:function(){console.log("upper was clicked"+o);var t=o.toUpperCase();s(t),e.showAlert("changed to uppercase","success")},children:"convert to upper case"}),Object(i.jsx)("button",{className:"btn btn-".concat(e.button1,"  mx-2"),onClick:function(){console.log("upper was clicked"+o);var t=o.toLowerCase();s(t),e.showAlert(" changed to lowercase","success")},children:"convert to lower case"}),Object(i.jsx)("button",{className:"btn btn-".concat(e.button1,"  mx-2"),onClick:function(){s(""),e.showAlert("ClearText","success")},children:"clear text"}),Object(i.jsx)("button",{className:"btn btn-".concat(e.button1,"  mx-2"),onClick:function(){var t=o.replace(/\s+/g," ").trim();s(t),e.showAlert("ClearSpaces","success")},children:"Remove Extra Space"}),Object(i.jsx)("button",{className:"btn btn-".concat(e.button1,"  mx-2"),onClick:function(){var t=o.match(/[0-9/A-Z/a-z/ /]/g).join("");s(t),e.showAlert("ClearSpaces","success")},children:"Remove symbol"}),Object(i.jsx)("button",{className:"btn btn-".concat(e.button1,"  mx-2"),onClick:function(){var t=o.match(/[0-9/ /]/g).join("");s(t),e.showAlert("Handle only number","success")},children:"only extract number"}),Object(i.jsx)("button",{className:"btn btn-".concat(e.button1,"  mx-2"),onClick:function(t){var c=document.getElementById("myBox");c.select(),navigator.clipboard.writeText(c.value),e.showAlert("copy text","success")},children:"copytext"})]}),Object(i.jsxs)("div",{className:"className my-3",style:{color:"dark"===e.mode?"white":"black"},children:[Object(i.jsx)("h1",{children:"your text survay"}),Object(i.jsxs)("p",{children:[o.split("").length," words and ",o.length," charater"]}),Object(i.jsxs)("p",{children:[.008*o.split(" ").length," mimut read"]}),Object(i.jsx)("h2",{children:"preview "}),Object(i.jsx)("p",{children:o.length>0?o:"enter something to preview your text"})]})]})}var j=c(2);var m=function(){var e=Object(a.useState)("light"),t=Object(l.a)(e,2),c=t[0],o=t[1],s=Object(a.useState)(null),n=Object(l.a)(s,2),m=n[0],x=n[1],g=Object(a.useState)("secondary"),p=Object(l.a)(g,2),O=p[0],v=p[1],y=function(e,t){x({msg:e,type:t}),setTimeout((function(){x(null)}),3e3)};return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(b.a,{children:[Object(i.jsx)(h,{title:"Textutils2",mode:c,toggleMode:function(){"light"===c?(v("dark"),o("dark"),document.body.style.backgroundColor="#0e1146",y("Dark mode has been enabled","success"),document.title="Textutils-Darkmode",setInterval((function(){document.title="Textutils is amazing"}),2e3),setInterval((function(){document.title="install textutils now"}),1500)):(v("secondary"),o("light"),document.body.style.backgroundColor="white",y("light mode has been enabled","success"),document.title="Textutils-Lightmode")},toggleMode1:function(){"light"===c?(v("success"),o("dark"),document.body.style.backgroundColor="green",y("Green mode has been enabled","success")):(v("secondary"),o("light"),document.body.style.backgroundColor="white",y("light mode has been enabled","success"))},toggleMode2:function(){"light"===c?(v("warning"),o("dark"),document.body.style.backgroundColor="yellow",y("Yellow mode has been enabled","success")):(v("secondary"),o("light"),document.body.style.backgroundColor="white",y("light mode has been enabled","success"))},aboutText:"About"}),Object(i.jsx)(d,{alert:m}),Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)(j.c,{children:[Object(i.jsx)(j.a,{exact:!0,path:"/about",children:Object(i.jsx)(r,{})}),Object(i.jsx)(j.a,{exact:!0,path:"/",children:Object(i.jsx)(u,{heading:"enter the text to analysis below",showAlert:y,button1:O,mode:c})})]})})]})})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,31)).then((function(t){var c=t.getCLS,a=t.getFID,o=t.getFCP,s=t.getLCP,n=t.getTTFB;c(e),a(e),o(e),s(e),n(e)}))};n.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(m,{})}),document.getElementById("root")),x()}},[[30,1,2]]]);
//# sourceMappingURL=main.17a25875.chunk.js.map