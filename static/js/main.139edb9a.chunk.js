(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{30:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var c=n(10),a=n(0),r=n(6),o=n(11),i=n(21),u=(n(30),n(5)),s=n(14),b=n(23),l=n(42),j={SAVE:"phonebook/save",DELETE:"phonebook/delete",UPDATE_FILTER:"phonebook/update-filter"},d=n(41),O=function(e){return e.phoneBook.items},m=function(e){return e.phoneBook.filter},p=Object(d.a)([O,m],(function(e,t){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))})),f=n(2),h={id:"",name:"",number:""},E=function(){var e=Object(o.d)(),t=Object(u.b)(),n=Object(a.useState)(h),r=Object(b.a)(n,2),i=r[0],d=r[1],m=i.name,p=i.number,E=Object(u.c)(O),x=function(e){return t({type:j.SAVE,payload:e})},v=function(e){d((function(t){return Object(c.a)(Object(c.a)({},t),{},Object(s.a)({},e.target.name,e.target.value))}))};return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={id:Object(l.a)(),name:m,number:Number(p)};E.some((function(e){return e.name===n.name}))?e.show("Contact is already in contscts."):x(n)},children:[Object(f.jsxs)("label",{children:[Object(f.jsx)("span",{children:"Name:"}),Object(f.jsx)("input",{type:"text",value:m,name:"name",onChange:v,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(f.jsx)("label",{children:Object(f.jsx)("input",{type:"tel",value:p,name:"number",onChange:v,pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})}),Object(f.jsx)("button",{type:"submit",children:"+ Add"})]})})},x=n(16),v=Object(x.a)({item:{display:"flex",marginBottom:10,alignItems:"flex-start"}}),g=function(e){var t=e.contactID,n=v(),c=Object(u.b)(),a=Object(u.c)(function(e){return function(t){return t.phoneBook.items.find((function(t){return t.id===e}))}}(t)),r=a.name,o=a.id,i=a.number;return Object(f.jsxs)("li",{className:n.item,children:[r,i,Object(f.jsx)("button",{id:o,type:"button",onClick:function(){return c({type:j.DELETE,payload:o})},children:"Delete"})]},o)},y=Object(x.a)({list:{listStyle:"none",margin:0,padding:10}}),T=function(){var e=y(),t=Object(u.c)(p);return Object(f.jsx)("ul",{className:e.list,children:t.map((function(e){return Object(f.jsx)(g,{contactID:e.id})}))})},_=function(){var e=Object(u.b)(),t=Object(u.c)(m),n=function(t){return e({type:j.UPDATE_FILTER,payload:t})};return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("span",{children:"Find:"}),Object(f.jsx)("input",{type:"text",value:t,name:"filter",onChange:function(e){var t=e.target.value;console.log(t),n(t)}}),Object(f.jsx)(E,{}),Object(f.jsx)(T,{})]})},D=n(9),w=n(20),A={contacts:{items:[{id:1,name:"aaasssddd",number:3806778965412}],filter:""}},k=Object(D.a)({items:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A.contacts.items,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case j.SAVE:return[].concat(Object(w.a)(e),[c]);case j.DELETE:return Object(w.a)(e.filter((function(e){var t=e.id;return c!==t})));default:return e}},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A.contacts.filter,t=arguments.length>1?arguments[1]:void 0,n=t.payload;switch(t.type){case j.UPDATE_FILTER:return n;default:return e}}}),C=Object(D.a)({phoneBook:k}),L=Object(D.b)(C,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),S={position:o.b.BOTTOM_CENTER,timeout:5e3,offset:"30px",transition:o.c.SCALE},I=function(){return Object(f.jsx)(o.a,Object(c.a)(Object(c.a)({template:i.a},S),{},{children:Object(f.jsx)(u.a,{store:L,children:Object(f.jsx)(_,{})})}))};Object(r.render)(Object(f.jsx)(I,{}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.139edb9a.chunk.js.map