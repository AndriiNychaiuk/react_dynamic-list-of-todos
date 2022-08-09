(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var s,a=c(5),n=c.n(a),l=c(2),i=c(1),o=(c(10),c(11),c(4)),d=c.n(o),r=c(0),j=function(e){var t=e.todo;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("td",{className:"is-vcentered",children:t.id}),Object(r.jsx)("td",{className:"is-vcentered",children:Object(r.jsx)("i",{className:d()("fas",{"fa-check-square has-text-success":t.completed,"fa-exclamation-triangle has-text-danger":!t.completed})})}),Object(r.jsx)("td",{className:"is-vcentered is-expanded",children:Object(r.jsx)("p",{className:d()({"has-text-danger":!t.completed},{"has-text-success":t.completed}),children:t.title})})]})},b=function(e){var t=e.todos,c=e.onSelectTodo,s=e.onSetModalVisibility;return Object(r.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("th",{children:"Title"}),Object(r.jsx)("th",{children:" "})]})}),Object(r.jsx)("tbody",{children:t.map((function(e){return Object(r.jsxs)("tr",{"data-cy":"todo",children:[Object(r.jsx)(j,{todo:e}),Object(r.jsx)("td",{className:"has-text-right is-vcentered",children:Object(r.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){c(e),s(!0)},children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:"far fa-eye"})})})})]},e.id)}))})]})};!function(e){e.all="all",e.active="active",e.completed="completed"}(s||(s={}));var h=function(e){var t=e.todos,c=e.onSetVisibleTodos,a=Object(i.useState)(""),n=Object(l.a)(a,2),o=n[0],d=n[1];return Object(i.useEffect)((function(){c(t.filter((function(e){return e.title.toLowerCase().includes(o.toLowerCase())})))}),[o]),Object(r.jsxs)("form",{className:"field has-addons",children:[Object(r.jsx)("p",{className:"control",children:Object(r.jsx)("span",{className:"select",children:Object(r.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){switch(e.target.value){case s.all:c(t);break;case s.active:c(t.filter((function(e){return!e.completed})));break;case s.completed:c(t.filter((function(e){return e.completed})))}},children:[Object(r.jsx)("option",{value:"all",children:"All"}),Object(r.jsx)("option",{value:"active",children:"Active"}),Object(r.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(r.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(r.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:o,onChange:function(e){var t=e.target;return d(t.value)}}),Object(r.jsx)("span",{className:"icon is-left",children:Object(r.jsx)("i",{className:"fas fa-magnifying-glass"})}),o.length>0&&Object(r.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(r.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){c(t),d("")}})})]})]})},u=(c(13),function(){return Object(r.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(r.jsx)("div",{className:"Loader__content"})})}),m=function(e){var t=e.selectedTodo,c=e.currentUser,s=e.onModalClosing;return Object(r.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(r.jsx)("div",{className:"modal-background"}),c?Object(r.jsxs)("div",{className:"modal-card",children:[Object(r.jsxs)("header",{className:"modal-card-head",children:[t&&Object(r.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t.id)}),Object(r.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:s})]}),Object(r.jsxs)("div",{className:"modal-card-body",children:[t&&Object(r.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),c&&Object(r.jsxs)("p",{className:"block","data-cy":"modal-user",children:[(null===t||void 0===t?void 0:t.completed)&&Object(r.jsx)("strong",{className:"has-text-success",children:"Done"}),!(null!==t&&void 0!==t&&t.completed)&&Object(r.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(r.jsx)("a",{href:"mailto:".concat(c.email),children:c.name})]})]})]}):Object(r.jsx)(u,{})]})};function O(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=1e3,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var x=function(){var e=Object(i.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],a=Object(i.useState)(null),n=Object(l.a)(a,2),o=n[0],d=n[1],j=Object(i.useState)(null),x=Object(l.a)(j,2),f=x[0],p=x[1],v=Object(i.useState)(!1),N=Object(l.a)(v,2),y=N[0],g=N[1],S=Object(i.useState)(c),k=Object(l.a)(S,2),C=k[0],T=k[1];Object(i.useEffect)((function(){var e;O("/todos").then((function(e){s(e),T(e)})),o&&(e=o.userId,O("/users/".concat(e))).then((function(e){return p(e)}))}),[o]);return 0===c.length?Object(r.jsx)(u,{}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"box",children:[Object(r.jsx)("h1",{className:"title",children:"Todos:"}),Object(r.jsx)("div",{className:"block",children:Object(r.jsx)(h,{todos:c,onSetVisibleTodos:T})}),Object(r.jsx)("div",{className:"block",children:Object(r.jsx)(b,{todos:C,onSelectTodo:d,onSetModalVisibility:g})})]})})}),y&&Object(r.jsx)(m,{selectedTodo:o,currentUser:f,onModalClosing:function(){d(null),p(null),g(!1)}})]})};n.a.render(Object(r.jsx)(x,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.f0179d8c.chunk.js.map