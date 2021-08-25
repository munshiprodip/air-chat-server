(this["webpackJsonpair-chat"]=this["webpackJsonpair-chat"]||[]).push([[0],{107:function(e,t,c){},128:function(e,t,c){},129:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(29),r=c.n(s),i=c(3),o=c(18),l=c(4),j=c(68),d=c.n(j),u=(c(107),c(0)),h=function(e){var t=e.children;return Object(u.jsx)("div",{className:"app",children:t})},b=c(6),O=c.n(b),m=function(e){return{type:"SET_LOGGED_IN",payload:e}},p=function(e){return{type:"SET_LOGGED_OUT",payload:e}},v=function(e){return{type:"SET_LOADING",payload:e}},x=function(e){return{type:"SHOW_PROFILE",payload:e}},f=function(){return Object(u.jsx)("div",{className:"preloader",children:Object(u.jsxs)("p",{children:[Object(u.jsxs)("span",{children:[Object(u.jsx)("i",{className:"far fa-comment-alt"})," "]})," ","Loading ..."]})})};O.a.defaults.withCredentials=!0;var g=function(e){var t=e.children,c=Object(i.c)((function(e){return e.auth.pageLoading})),n=Object(i.b)();return Object(a.useEffect)((function(){O.a.get("".concat("https://air-chat-bd.herokuapp.com","/auth/get-login"),{withCredentials:!0}).then((function(e){var t=e.data.data.user;n(m(t)),n(v(!1))})).catch((function(e){n(p({})),n(v(!1))}))}),[n]),c?Object(u.jsx)(f,{}):t},N=function(e){var t=e.children;return Object(u.jsx)("div",{className:"container",children:t})},y=c(5),S=c(42),E=["children"],w=["children"],_=function(e){var t=e.children,c=Object(S.a)(e,E),a=Object(i.c)((function(e){return e.auth.isLoggedIn}));return Object(u.jsx)(l.b,Object(y.a)(Object(y.a)({},c),{},{render:function(e){var c=e.location;return a?t:Object(u.jsx)(l.a,{to:{pathname:"/login",state:{from:c}}})}}))},C=function(e){var t=e.children,c=Object(S.a)(e,w),a=Object(i.c)((function(e){return e.auth.isLoggedIn}));return Object(u.jsx)(l.b,Object(y.a)(Object(y.a)({},c),{},{render:function(e){var c=e.location;return a?Object(u.jsx)(l.a,{to:{pathname:"/home",state:{from:c}}}):t}}))},I=c(70),k=c(7),L=function(e){var t=e.receiver;e.typing;return Object(u.jsxs)("div",{className:"chat-nav",children:[Object(u.jsx)("div",{className:"avatar",children:Object(u.jsx)("img",{src:"".concat("https://air-chat-bd.herokuapp.com","/avaters/").concat(t.photoUrl),alt:"user"})}),Object(u.jsxs)("div",{className:"user-info",children:[Object(u.jsx)("p",{children:t.name}),Object(u.jsx)("small",{children:"online"})]})]})},T=function(){var e=Object(a.useState)([]),t=Object(k.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(!1),r=Object(k.a)(s,2),o=r[0],l=(r[1],Object(a.useState)("")),j=Object(k.a)(l,2),d=j[0],h=j[1],b=Object(i.c)((function(e){return e.chat})),m=b.activeConversation,p=b.receiver,v=b.messages,x=(b.chatOpen,Object(a.useRef)(null));Object(a.useEffect)((function(){x.current.scrollIntoView({behavior:"smooth"}),Q.on("message-sent",(function(e){e.conversation===m._id&&n([].concat(Object(I.a)(c),[e]))}))}),[m,c]);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(L,{receiver:p,typing:o}),Object(u.jsxs)("div",{className:"chat-body",children:[Object(u.jsxs)("div",{className:"message-container",children:[v.map((function(e){return Object(u.jsx)("div",{className:"".concat(e.sender===p._id?"messages":"messages message-right"),children:Object(u.jsx)("p",{children:e.text})},e._id)})),c.map((function(e){return Object(u.jsx)("div",{className:"".concat(e.sender===p._id?"messages":"messages message-right"),children:Object(u.jsx)("p",{children:e.text})},e._id)}))]}),Object(u.jsx)("div",{ref:x})]}),Object(u.jsx)("div",{className:"chat-footer",children:Object(u.jsx)("form",{style:{width:"100%"},onSubmit:function(e){if(e.preventDefault(),d.replace(/\s/g,"")){var t={conversation:m._id,receiver:p._id,text:d};O.a.post("/message/new-message",t).then((function(e){console.log(e),h("")})).catch((function(e){return console.log(e)}))}},children:Object(u.jsxs)("div",{className:"chat-form",children:[Object(u.jsx)("input",{onChange:function(e){return h(e.target.value)},type:"text",name:"",id:"",value:d}),Object(u.jsx)("button",{type:"submit",children:"Send"})]})})})]})},U=function(){return Object(u.jsxs)("div",{className:"chat-start",children:[Object(u.jsx)("div",{className:"chat-icon",children:Object(u.jsx)("i",{className:"far fa-comment-alt"})}),Object(u.jsx)("p",{children:"Start Conversation"})]})},D=function(){var e=Object(i.c)((function(e){return e.chat})).chatOpen;return Object(u.jsx)("div",{className:"content",children:e?Object(u.jsx)(T,{}):Object(u.jsx)(U,{})})},F=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.auth.loggedInUser}));return Object(u.jsxs)("div",{className:"sidebar",children:[Object(u.jsx)("div",{className:"close-button",children:Object(u.jsx)("i",{className:"fas fa-times",onClick:function(){return e(x())}})}),Object(u.jsxs)("div",{className:"profile-content",children:[Object(u.jsxs)("div",{className:"profile-details",children:[Object(u.jsx)("div",{className:"avatar",children:Object(u.jsx)("img",{src:"".concat("https://air-chat-bd.herokuapp.com","/avaters/").concat(t.photoUrl),alt:"user"})}),Object(u.jsx)("p",{className:"profile-name",children:t.name}),Object(u.jsx)("p",{className:"profile-mail",children:t.email})]}),Object(u.jsx)("div",{className:"profile-footer",children:Object(u.jsx)("button",{className:"btn-signout",onClick:function(){O.a.delete("".concat("https://air-chat-bd.herokuapp.com","/auth/logout")).then((function(t){e(p({}))})).catch((function(e){return console.log(e)}))},children:"Sign out"})})]})]})},G=function(e){var t=e.user;return Object(u.jsx)("div",{className:"".concat(t.isOnline?"online":""," avatar"),children:Object(u.jsx)("img",{src:"".concat("https://air-chat-bd.herokuapp.com","/avaters/").concat(t.photoUrl),alt:"user"})})},P=function(e){var t=e.user;return Object(u.jsxs)("div",{className:"chat-single",children:[Object(u.jsx)(G,{user:t}),Object(u.jsxs)("div",{className:"chat-info",children:[Object(u.jsxs)("h3",{children:[t.name,Object(u.jsx)("span",{style:{float:"right",fontSize:"10px"},children:"12:22 pm"})," "]}),Object(u.jsx)("p",{children:"I'm working on this project"})]})]})},R=function(){var e=Object(a.useState)([]),t=Object(k.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){O.a.get("".concat("https://air-chat-bd.herokuapp.com","/user/get-all-users")).then((function(e){var t=e.data.data.user;n(t)})).catch((function(e){return console.log(e)}))}),[]),Object(u.jsxs)("div",{className:"chat-history",children:[Object(u.jsx)("h3",{className:"sidebar-title",children:"Chat"}),c.map((function(e){return Object(u.jsx)(P,{user:e},e._id)}))]})},A=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.auth.loggedInUser}));return Object(u.jsxs)("div",{className:"sidebar-nav",children:[Object(u.jsx)("div",{className:"avatar online",onClick:function(){return e(x())},children:Object(u.jsx)("img",{src:"".concat("https://air-chat-bd.herokuapp.com","/avaters/").concat(t.photoUrl),alt:"user"})}),Object(u.jsx)("div",{className:"search",children:Object(u.jsxs)("div",{className:"input-group",children:[Object(u.jsx)("i",{className:"fa fa-search icon"}),Object(u.jsx)("input",{className:"input-field",type:"text",placeholder:"search"})]})})]})},V=function(){Object(i.c)((function(e){return e.auth.loggedInUser}));var e=Object(i.b)(),t=Object(a.useState)([]),c=Object(k.a)(t,2),n=c[0],s=c[1];Object(a.useEffect)((function(){O.a.get("".concat("https://air-chat-bd.herokuapp.com","/user/get-all-users")).then((function(e){var t=e.data.data.user;s(t)})).catch((function(e){return console.log(e)}))}),[]);return Object(u.jsxs)("div",{className:"sidebar",children:[Object(u.jsx)(A,{}),Object(u.jsxs)("div",{className:"sidebar-content",children:[Object(u.jsx)(R,{}),Object(u.jsxs)("div",{className:"chat-history",children:[Object(u.jsx)("h3",{className:"sidebar-title",children:"Users"}),n.map((function(t){return Object(u.jsxs)("div",{className:"chat-single",onClick:function(){return c=t._id,void O.a.post("".concat("https://air-chat-bd.herokuapp.com","/message/new-conversation"),{participant_id:c}).then((function(t){var c=t.data.data,a=c.receiver,n=c.messages,s=c.conversation;e({type:"SET_ACTIVE_CONVERSATION",payload:{receiver:a,messages:n,conversation:s}})})).catch((function(e){return console.log(e)}));var c},children:[Object(u.jsx)(G,{user:t}),Object(u.jsxs)("div",{className:"chat-info",children:[Object(u.jsxs)("h3",{children:[t.name,Object(u.jsx)("span",{style:{float:"right",fontSize:"10px"},children:"12:22 pm"})," "]}),Object(u.jsx)("p",{children:t.email})]})]},t._id)}))]})]})]})},H=function(){var e=Object(i.c)((function(e){return e.auth.showProfile}));return Object(u.jsxs)(u.Fragment,{children:[e?Object(u.jsx)(F,{}):Object(u.jsx)(V,{}),Object(u.jsx)(D,{})]})},M=c(22),W=c.n(M),z=c(32),J=c(21),B=c(33),q=function(){var e=Object(a.useState)(),t=Object(k.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)({email:"",password:""}),r=Object(k.a)(s,2),l=r[0],j=r[1],d=Object(i.b)(),h=function(e){j(Object(y.a)(Object(y.a)({},l),{},Object(J.a)({},e.target.name,e.target.value)))},b=function(){var e=Object(z.a)(W.a.mark((function e(t){var c,a,s;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,O.a.post("".concat("https://air-chat-bd.herokuapp.com","/auth/login"),l);case 4:c=e.sent,a=c.data.data.user,d(m(a)),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(1),s=e.t0.response.data.errors,console.log(s),n(Object(B.decoratErr)(s));case 14:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"sidebar"}),Object(u.jsx)("div",{className:"chat-start",children:Object(u.jsxs)("form",{className:"form-signup",onSubmit:b,children:[Object(u.jsx)("h3",{children:"Sign In"}),Object(u.jsx)("div",{className:"d-flex",children:Object(u.jsx)("input",{name:"email",className:"input-primary",type:"email",placeholder:"Email",onChange:h})}),Object(u.jsx)("small",{className:"input-error",children:null===c||void 0===c?void 0:c.email}),Object(u.jsx)("div",{className:"d-flex",children:Object(u.jsx)("input",{name:"password",className:"input-primary",type:"password",placeholder:"Password",onChange:h})}),Object(u.jsx)("small",{className:"input-error",children:null===c||void 0===c?void 0:c.password}),Object(u.jsx)("small",{className:"input-error",children:null===c||void 0===c?void 0:c.common}),Object(u.jsxs)("div",{className:"d-flex mt-20",children:[Object(u.jsx)("input",{className:"button-secondary",type:"reset",value:"Cancel"}),Object(u.jsx)("input",{className:"button-primary",type:"submit",value:"Login"})]}),Object(u.jsx)("div",{className:"d-flex",children:Object(u.jsxs)("div",{className:"form-footer",children:["Dont hav an account? ",Object(u.jsx)(o.b,{to:"/register",children:"Sign up"})," "]})})]})})]})},K=function(){var e=Object(a.useState)({}),t=Object(k.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(null),r=Object(k.a)(s,2),l=r[0],j=r[1],d=Object(a.useState)({}),h=Object(k.a)(d,2),b=h[0],p=h[1],v=Object(i.b)(),x=function(e){n(Object(y.a)(Object(y.a)({},c),{},Object(J.a)({},e.target.name,e.target.value)))},f=function(){var e=Object(z.a)(W.a.mark((function e(t){var a,n,s,r;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=new FormData,l&&a.append("photoUrl",l,l.name),Object.keys(c).forEach((function(e){a.append(e,c[e])})),e.prev=4,e.next=7,O.a.post("".concat("https://air-chat-bd.herokuapp.com","/auth/signup"),a);case 7:n=e.sent,console.log(n),s=n.data.data.user,v(m(s)),e.next=18;break;case 13:e.prev=13,e.t0=e.catch(4),r=e.t0.response.data.errors,console.log(r),p(Object(B.decoratErr)(r));case 18:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"sidebar"}),Object(u.jsx)("div",{className:"chat-start",children:Object(u.jsxs)("form",{className:"form-signup",onSubmit:f,children:[Object(u.jsx)("h3",{children:"Sign Up"}),Object(u.jsx)("div",{className:"d-flex",children:Object(u.jsx)("input",{name:"name",className:"input-primary",type:"text",placeholder:"Full Name",onChange:x})}),Object(u.jsx)("small",{className:"input-error",children:null===b||void 0===b?void 0:b.name}),Object(u.jsx)("div",{className:"d-flex",children:Object(u.jsx)("input",{name:"email",className:"input-primary",type:"email",placeholder:"Email",onChange:x})}),Object(u.jsx)("small",{className:"input-error",children:null===b||void 0===b?void 0:b.email}),Object(u.jsx)("div",{className:"d-flex",children:Object(u.jsx)("input",{name:"password",className:"input-primary",type:"password",placeholder:"Password",onChange:x})}),Object(u.jsx)("small",{className:"input-error",children:null===b||void 0===b?void 0:b.password}),Object(u.jsx)("div",{className:"d-flex",children:Object(u.jsxs)("select",{name:"gender",className:"input-primary",onChange:x,children:[Object(u.jsx)("option",{value:"",children:"Gender"}),Object(u.jsx)("option",{value:"Male",children:"Male"}),Object(u.jsx)("option",{value:"Female",children:"Female"}),Object(u.jsx)("option",{value:"Other",children:"Other"})]})}),Object(u.jsx)("small",{className:"input-error",children:null===b||void 0===b?void 0:b.gender}),Object(u.jsxs)("div",{className:"d-flex custom-file-group",children:[Object(u.jsx)("label",{htmlFor:"file-upload",className:"custom-file-upload",children:"Select Photo"}),Object(u.jsx)("input",{name:"avatars",id:"file-upload",className:"input-primary",type:"file",placeholder:"Select photo",onChange:function(e){j(e.target.files[0])}})]}),Object(u.jsx)("small",{className:"input-error",children:null===b||void 0===b?void 0:b.photoUrl}),Object(u.jsxs)("div",{className:"d-flex mt-20",children:[Object(u.jsx)("input",{className:"button-secondary",type:"reset",value:"Clear"}),Object(u.jsx)("input",{className:"button-primary",type:"submit",value:"Signup"})]}),Object(u.jsx)("div",{className:"d-flex",children:Object(u.jsxs)("div",{className:"form-footer",children:["Have an account? ",Object(u.jsx)(o.b,{to:"/login",children:"Sign in"})," "]})})]})})]})},Q=d()("/");var X=function(){return Object(u.jsx)(o.a,{children:Object(u.jsx)(N,{children:Object(u.jsx)(h,{children:Object(u.jsx)(g,{children:Object(u.jsxs)(l.d,{children:[Object(u.jsx)(C,{path:"/login",children:Object(u.jsx)(q,{})}),Object(u.jsx)(C,{path:"/register",children:Object(u.jsx)(K,{})}),Object(u.jsx)(_,{path:"/",children:Object(u.jsx)(H,{})})]})})})})})},Y=(c(128),c(34)),Z=c(69),$={pageLoading:!0,isLoggedIn:!1,loggedInUser:{},showProfile:!1},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LOGGED_IN":var c=Object(y.a)(Object(y.a)({},e),{},{isLoggedIn:!0,loggedInUser:t.payload});return c;case"SET_LOGGED_OUT":var a=Object(y.a)(Object(y.a)({},e),{},{isLoggedIn:!1,loggedInUser:{}});return a;case"SET_LOADING":var n=Object(y.a)(Object(y.a)({},e),{},{pageLoading:t.payload});return n;case"SHOW_PROFILE":var s=Object(y.a)(Object(y.a)({},e),{},{showProfile:!e.showProfile});return s;default:return e}},te={chatOpen:!1,activeConversation:{},receiver:{},messages:[]},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ACTIVE_CONVERSATION":var c={activeConversation:t.payload.conversation,receiver:t.payload.receiver,messages:t.payload.messages,chatOpen:!0};return c;case"RESET_CONVERSATION":var a={activeConversation:{},receiver:{},messages:{},chatOpen:!1};return a;default:return e}},ae=Object(Y.combineReducers)({auth:ee,chat:ce}),ne=Object(Y.createStore)(ae,Object(Z.composeWithDevTools)());r.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(i.a,{store:ne,children:Object(u.jsx)(X,{})})}),document.getElementById("root"))},33:function(e,t){e.exports={decoratErr:function(e){var t={};return Object.keys(e).forEach((function(c){return t[c]=e[c].msg})),t}}}},[[129,1,2]]]);
//# sourceMappingURL=main.8a75b95d.chunk.js.map