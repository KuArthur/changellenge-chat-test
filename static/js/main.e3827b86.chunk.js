(this["webpackJsonpchangellenge-chat-test"]=this["webpackJsonpchangellenge-chat-test"]||[]).push([[0],[,,,,,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"\u0418\u0432\u0430\u043d \u0418\u0432\u0430\u043d\u043e\u0432","img":"/img/user1.png"},{"id":2,"name":"\u0410\u043d\u043d\u0430 \u0410\u043d\u043d\u043e\u0432\u043d\u0430","img":"/img/user2.png"}]')},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(1),r=n.n(s),a=n(7),c=n.n(a),i=(n(15),n(2)),u=n.n(i),o=n(3),l=n(4),j=(n(17),n(5)),f=n.n(j),d=(n(18),n(19),n(0));function h(e){var t=e.user,n=e.handleClick,s=e.isSelected;return Object(d.jsxs)("div",{className:f()("User",s?"User-selected":""),onClick:function(){return n(t)},children:[Object(d.jsx)("img",{className:"User--photo",src:"/changellenge-chat-test"+t.img,alt:""}),Object(d.jsx)("span",{className:"User--name",children:t.name})]})}function b(e){var t=e.users,n=e.onUserSelect,r=e.selectedUser,a=Object(s.useState)(!1),c=Object(l.a)(a,2),i=c[0],u=c[1],o=function(){u(!i)};return Object(d.jsxs)("div",{className:"UsersList",children:[Object(d.jsxs)("div",{className:"UsersList--title",onClick:o,children:[Object(d.jsx)("span",{children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0434\u0440\u0443\u0437\u0435\u0439:"}),r&&Object(d.jsx)("span",{className:"Userlist--username",children:r.name})]}),Object(d.jsx)("div",{className:f()("UsersList--users",i?"UsersList--users-active":""),children:t.map((function(e){return Object(d.jsx)("div",{className:"UsersList--user",onClick:o,children:Object(d.jsx)(h,{user:e,isSelected:r&&e.id===r.id,handleClick:n},e.id)})}))})]})}n(21);var p=n.p+"static/media/user.a3d9eecd.svg";function m(e){var t=e.messages;return Object(d.jsx)("div",{className:"MessagesList",children:t.map((function(e,t){return Object(d.jsxs)("div",{className:"MessagesList--message",children:[Object(d.jsx)("p",{className:"MessagesList--text",children:e}),Object(d.jsx)("img",{className:"MessagesList--photo",src:p,alt:""})]},t)}))})}n(22);function v(e){var t=e.onSendMessage,n=e.onTextChange,s=e.value;return Object(d.jsx)("div",{className:"Controller",children:Object(d.jsx)("form",{onSubmit:function(e){t(),e.preventDefault()},children:Object(d.jsxs)("div",{className:"Controller--wrap",children:[Object(d.jsx)("input",{onChange:function(e){n(e.target.value)},value:s,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",className:"Controller--input"}),Object(d.jsx)("button",{className:"Controller--button"})]})})})}n(23);function O(e){var t=e.link,n=e.href;return Object(d.jsx)("a",{className:"Link",href:n,children:t})}var x=n(8),g=n(9),k=n(10),N=new(function(){function e(){Object(x.a)(this,e),this.messages={}}return Object(g.a)(e,[{key:"getUserList",value:function(){var e=Object(o.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",k);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"getUserHistory",value:function(){var e=Object(o.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.abrupt("return",this.messages[t]||[]);case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"sendMessage",value:function(){var e=Object(o.a)(u.a.mark((function e(t,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log({userId:t,messageText:n}),this.messages[t]=(this.messages[t]||[]).concat(n);case 2:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()}]),e}());var C=function(){var e=Object(s.useState)(""),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object(s.useState)([]),c=Object(l.a)(a,2),i=c[0],j=c[1],f=Object(s.useState)([]),h=Object(l.a)(f,2),p=h[0],x=h[1],g=Object(s.useState)(),k=Object(l.a)(g,2),C=k[0],U=k[1];Object(s.useEffect)((function(){(function(){var e=Object(o.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.getUserList();case 2:t=e.sent,j(t),U(t[0]);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(s.useEffect)((function(){(function(){var e=Object(o.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("undefined"!==typeof C){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,N.getUserHistory(C.id);case 4:t=e.sent,x(t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),r("")}),[C]);var w=function(){var e=Object(o.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,N.sendMessage(C.id,n);case 4:return e.next=6,N.getUserHistory(C.id);case 6:t=e.sent,x(t),r("");case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(o.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(C.id!==t.id){e.next=2;break}return e.abrupt("return");case 2:U(t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"Chat",children:[Object(d.jsx)("div",{className:"Chat--link-exit",children:Object(d.jsx)(O,{link:"\u0412\u044b\u0445\u043e\u0434",href:"#"})}),Object(d.jsxs)("div",{className:"Chat--container",children:[Object(d.jsx)("div",{className:"Chat--userList",children:Object(d.jsx)(b,{selectedUser:C,users:i,onUserSelect:y})}),Object(d.jsxs)("div",{className:"Chat--messageControl",children:[Object(d.jsx)(m,{messages:p}),Object(d.jsx)(v,{onTextChange:function(e){r(e)},onSendMessage:w,value:n})]})]})]})},U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),s(e),r(e),a(e),c(e)}))};c.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(C,{})}),document.getElementById("root")),U()}],[[24,1,2]]]);
//# sourceMappingURL=main.e3827b86.chunk.js.map