(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(3),s=a(6),c=a(7),o=(a(14),a(1)),l=a(9),d=a.n(l),u=a(0),m=function(e){var t=e.user,a=t.email,n=t.name;return Object(u.jsx)("a",{className:"UserInfo",href:"mailto:".concat(a),children:n})},j=function(e){var t=e.todo,a=t.id,n=t.title,i=t.completed,r=t.user,s=d()("TodoInfo",{"TodoInfo TodoInfo--completed":i});return Object(u.jsxs)("article",{"data-id":a,className:s,children:[Object(u.jsx)("h2",{className:"TodoInfo__title",children:n}),r&&Object(u.jsx)(m,{user:r})]})},b=function(e){var t=e.todos;return Object(u.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(u.jsx)(j,{todo:e},e.id)}))})},h=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}];function O(e){return h.find((function(t){return t.id===e}))||null}var f=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(c.a)(Object(c.a)({},e),{},{user:O(e.userId)})})),p=Object(s.a)(f),x=function(){var e=Object(o.useState)(""),t=Object(r.a)(e,2),a=t[0],n=t[1],i=Object(o.useState)(0),c=Object(r.a)(i,2),l=c[0],d=c[1],m=Object(o.useState)(!1),j=Object(r.a)(m,2),f=j[0],x=j[1],v=Object(o.useState)(!1),y=Object(r.a)(v,2),S=y[0],N=y[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Add todo form"}),Object(u.jsxs)("form",{action:"/api/users",method:"POST",onSubmit:function(e){if(e.preventDefault(),0===l||""===a)return x(""===a),void N(0===l);var t={id:Math.max.apply(Math,Object(s.a)(p.map((function(e){return e.id}))))+1,title:a,userId:l,completed:!1,user:O(l)};p.push(t),n(""),d(0)},children:[Object(u.jsxs)("div",{className:"field",children:[Object(u.jsx)("label",{htmlFor:"title",children:"Title: "}),Object(u.jsx)("input",{type:"text",id:"title","data-cy":"titleInput",placeholder:"Enter a title",value:a,onChange:function(e){n(e.target.value),x(!1)}}),f&&Object(u.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(u.jsxs)("div",{className:"field",children:[Object(u.jsx)("label",{htmlFor:"select",children:"User: "}),Object(u.jsxs)("select",{id:"select","data-cy":"userSelect",value:l,onChange:function(e){d(Number(e.target.value)),N(!1)},children:[Object(u.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),h.map((function(e){return Object(u.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),S&&Object(u.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(u.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(u.jsx)(b,{todos:p})]})};i.a.render(Object(u.jsx)(x,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.298edbcd.chunk.js.map