(this["webpackJsonpreact-note"]=this["webpackJsonpreact-note"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(8),o=n.n(a),r=(n(13),n(2)),i=(n(14),n(0)),l=function(){return Object(i.jsxs)("div",{className:"attribution",children:["Challenge by ",Object(i.jsx)("a",{href:"https://www.frontendmentor.io?ref=challenge",target:"_blank",rel:"noreferrer",children:"Frontend Mentor"}),". Coded by ",Object(i.jsx)("a",{href:"https://github.com/IevgeniiaAbdulina/Note-React#screenshot",children:"Ievgeniia Abdulina"}),"."]})},d=function(e){var t=e.toggleColorMode,n=e.colorMode;return Object(i.jsxs)("div",{className:"header",children:[Object(i.jsx)("h1",{className:"title",children:"T O D O"}),Object(i.jsx)("div",{className:"color-theme ".concat(n),onClick:t})]})},s=n(3),u=n(4),j=function(e){var t=e.handleChange,n=e.handleSubmit,c=e.newNote,a=e.colorMode;return Object(i.jsx)("div",{className:"new-note ".concat(a),children:Object(i.jsx)("form",{onSubmit:function(e){return n(e)},children:Object(i.jsx)("input",{className:"container ".concat(a),type:"text",placeholder:"Create a new note...",value:c,onChange:function(e){return t(e)}})})})},b=function(e){var t=e.note,n=e.index,c=e.completeHandler,a=e.deleteHandler,o=e.colorMode,r=e.onDragStart,l=e.onDragOver,d=e.onDrop,s=e.onDragLeave,u=e.classNameDnD;return Object(i.jsxs)("div",{className:"note ".concat(o," ").concat(u),draggable:"true",onDragStart:r,onDragOver:l,onDrop:d,"data-position":n,onDragLeave:s,children:[Object(i.jsxs)("div",{className:"wrapper",children:[Object(i.jsx)("div",{onClick:c,className:"mark ".concat(t.completed?"completed":"uncompleted"," ").concat(o)}),Object(i.jsx)("div",{className:"title-note ".concat(o),children:t.title})]}),Object(i.jsx)("div",{onClick:a,className:"btn-delete"})]})},O=function(e){var t=e.getFilter,n=e.colorMode,a=Object(c.useState)("all"),o=Object(r.a)(a,2),l=o[0],d=o[1],s=function(e){d(e),t(e)};return Object(i.jsxs)("div",{className:"notes-filter container ".concat(n),children:[Object(i.jsx)("div",{onClick:function(){return s("all")},className:"notes-all ".concat("all"===l?"selected":""," ").concat(n),children:"All"}),Object(i.jsx)("div",{onClick:function(){return s("active")},className:"notes-active ".concat("active"===l?"selected":""," ").concat(n),children:"Active"}),Object(i.jsx)("div",{onClick:function(){return s("completed")},className:"notes-completed ".concat("completed"===l?"selected":""," ").concat(n),children:"Completed"})]})},m=function(e){var t=e.colorMode,n=Object(c.useState)(""),a=Object(r.a)(n,2),o=a[0],l=a[1],d=Object(c.useState)([]),m=Object(r.a)(d,2),f=m[0],g=m[1],v=Object(c.useState)([]),h=Object(r.a)(v,2),p=h[0],x=h[1],N=Object(c.useState)(0),D=Object(r.a)(N,2),w=D[0],k=D[1],C=Object(c.useState)(0),M=Object(r.a)(C,2),S=M[0],F=M[1];Object(c.useEffect)((function(){x(f)}),[f]),Object(c.useEffect)((function(){return T(),window.addEventListener("resize",T),function(){window.removeEventListener("resize",T)}}),[w]),Object(c.useEffect)((function(){y()}),[p,S]);var T=function(){var e="undefined"!==typeof window?window.innerWidth:0;k(e)},L=function(e){"active"===e?x(Object(u.a)(f.filter((function(e){return!1===e.completed})))):"completed"===e?x(Object(u.a)(f.filter((function(e){return!0===e.completed})))):"all"===e&&x(Object(u.a)(f))},y=function(){F(p.filter((function(e){return!1===e.completed})).length)},E=function(){g(f.filter((function(e){return!1===e.completed})))},A={draggedFrom:null,draggedTo:null,isDragging:!1,originalOrder:[],updatedOrder:[]};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(j,{handleChange:function(e){l(e.target.value)},handleSubmit:function(e){e.preventDefault(),g([].concat(Object(u.a)(f),[{title:o,completed:!1,id:Math.floor(1e3*Math.random())}])),l("")},newNote:o,colorMode:t}),function(){var e=Object(c.useState)(A),n=Object(r.a)(e,2),a=n[0],o=n[1],l=function(e){var t=Number(e.currentTarget.dataset.position);o(Object(s.a)(Object(s.a)({},a),{},{draggedFrom:t,isDragging:!0,originalOrder:p})),e.dataTransfer.setData("text/html","")},d=function(e){e.preventDefault();var t=a.originalOrder,n=a.draggedFrom,c=Number(e.currentTarget.dataset.position),r=t[n],i=t.filter((function(e,t){return t!==n}));t=[].concat(Object(u.a)(i.slice(0,c)),[r],Object(u.a)(i.slice(c))),c!==a.draggedTo&&o(Object(s.a)(Object(s.a)({},a),{},{updatedOrder:t,draggedTo:c}))},j=function(e){x(a.updatedOrder),o(Object(s.a)(Object(s.a)({},a),{},{draggedFrom:null,draggedTo:null,isDragging:!1}))},m=function(){o(Object(s.a)(Object(s.a)({},a),{},{draggedTo:null}))};return Object(i.jsxs)("div",{className:"note-list container ".concat(t),children:[p.map((function(e,n){return Object(i.jsx)(b,{note:e,completeHandler:function(){return function(e){g(f.map((function(t){return t.id===e.id?Object(s.a)(Object(s.a)({},t),{},{completed:!t.completed}):t})))}(e)},deleteHandler:function(){return function(e){g(f.filter((function(t){return t.id!==e.id})))}(e)},colorMode:t,index:n,onDragStart:l,onDragOver:d,onDrop:j,onDragLeave:m,classNameDnD:"".concat(a&&a.draggedTo===Number(n)?"drop-area":"")},n)})),Object(i.jsxs)("div",{className:"notes-details ".concat(t),children:[Object(i.jsxs)("div",{className:"note-left",children:[S," Note left"]}),w>480&&Object(i.jsx)("div",{className:"layout-desktop",children:Object(i.jsx)(O,{getFilter:L,colorMode:t})}),Object(i.jsx)("div",{className:"clear-completed ".concat(t),onClick:E,children:"Clear completed"})]})]})}(),w<480&&Object(i.jsx)("div",{className:"layout-mobile",children:Object(i.jsx)(O,{getFilter:L,colorMode:t})})]})},f=function(){return Object(i.jsx)("div",{className:"reorder-notes",children:"Drag and drop to reorder list"})};var g=function(){var e=Object(c.useState)("dark-mode"),t=Object(r.a)(e,2),n=t[0],a=t[1],o=document.body;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(d,{toggleColorMode:function(){"light-mode"===n?(a("dark-mode"),o.classList.remove("light-mode"),o.classList.add("dark-mode")):"dark-mode"===n&&(a("light-mode"),o.classList.remove("dark-mode"),o.classList.add("light-mode"))},colorMode:n}),Object(i.jsx)(m,{colorMode:n}),Object(i.jsx)(f,{}),Object(i.jsx)(l,{})]})};o.a.render(Object(i.jsx)(g,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.65808e1a.chunk.js.map