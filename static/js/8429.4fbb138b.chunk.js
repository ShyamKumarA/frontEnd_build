"use strict";(self.webpackChunkmain_bt5=self.webpackChunkmain_bt5||[]).push([[8429],{68429:function(s,e,n){n.r(e),n.d(e,{default:function(){return j}});var r=n(25211),a=n(29439),d=n(72791),c=n(59434),i=n(43504),l=n(59202),t=n(1413),o=n(18814),h=n(80184),m=function(s){var e=s.click,n=(0,c.I0)(),i=(0,c.v9)((function(s){return s.contactsReducer.contacts})),m=(0,d.useState)({name:"",phone:"",email:"",address:"",password:"",confirmPassword:"",txnPassword:"",confirmTxnPassword:""}),x=(0,a.Z)(m,2),j=x[0],u=x[1];return(0,h.jsxs)(r.l0,{onSubmit:function(s){if(s.preventDefault(),j.password===j.confirmPassword&&j.txnPassword===j.confirmTxnPassword){var r={username:j.name,phone:j.phone,email:j.email,address:j.address,password:j.password,transactionPassword:j.txnPassword,confirmPassword:j.confirmPassword,confirmTxnPassword:j.confirmTxnPassword};n((0,l.cn)(r)),u({name:"",phone:"",email:"",address:"",password:"",confirmPassword:"",txnPassword:"",confirmTxnPassword:""}),e()}else alert("Passwords do not match.")},children:[(0,h.jsxs)(r.fe,{children:[(0,h.jsxs)(r.X2,{children:[(0,h.jsx)(r.JX,{md:6,className:"text-center",children:(0,h.jsx)("img",{src:o,className:"rounded-circle",alt:i.length,width:"100"})}),(0,h.jsxs)(r.JX,{md:6,children:[(0,h.jsxs)(r.cw,{children:[(0,h.jsx)(r.__,{for:"firstName",children:"Name"}),(0,h.jsx)(r.II,{className:"form-control",type:"text",name:"username",id:"firstname",value:j.name,onChange:function(s){return u((0,t.Z)((0,t.Z)({},j),{},{name:s.target.value}))},required:!0})]}),(0,h.jsxs)(r.cw,{children:[(0,h.jsx)(r.__,{for:"phone",children:"Phone"}),(0,h.jsx)(r.II,{className:"form-control",type:"phone",name:"phone",id:"phone",value:j.phone,onChange:function(s){return u((0,t.Z)((0,t.Z)({},j),{},{phone:s.target.value}))}})]})]})]}),(0,h.jsxs)(r.X2,{children:[(0,h.jsx)(r.JX,{md:6,children:(0,h.jsxs)(r.cw,{children:[(0,h.jsx)(r.__,{for:"email",children:"Email"}),(0,h.jsx)(r.II,{className:"form-control",type:"email",name:"email",id:"email",value:j.email,onChange:function(s){return u((0,t.Z)((0,t.Z)({},j),{},{email:s.target.value}))}})]})}),(0,h.jsx)(r.JX,{md:6,children:(0,h.jsxs)(r.cw,{children:[(0,h.jsx)(r.__,{for:"address",children:"Address"}),(0,h.jsx)(r.II,{className:"form-control",type:"text",name:"address",id:"address",value:j.address,onChange:function(s){return u((0,t.Z)((0,t.Z)({},j),{},{address:s.target.value}))}})]})})]}),(0,h.jsxs)(r.X2,{children:[(0,h.jsx)(r.JX,{md:6,children:(0,h.jsxs)(r.cw,{children:[(0,h.jsx)(r.__,{for:"password",children:"Password"}),(0,h.jsx)(r.II,{className:"form-control",type:"password",name:"password",id:"password",value:j.password,onChange:function(s){return u((0,t.Z)((0,t.Z)({},j),{},{password:s.target.value}))}})]})}),(0,h.jsx)(r.JX,{md:6,children:(0,h.jsxs)(r.cw,{children:[(0,h.jsx)(r.__,{for:"email",children:"Txn Password"}),(0,h.jsx)(r.II,{className:"form-control",type:"password",name:"txnPassword",id:"txnPassword",value:j.txnPassword,onChange:function(s){return u((0,t.Z)((0,t.Z)({},j),{},{txnPassword:s.target.value}))}})]})})]}),(0,h.jsxs)(r.X2,{children:[(0,h.jsx)(r.JX,{md:6,children:(0,h.jsxs)(r.cw,{children:[(0,h.jsx)(r.__,{for:"address",children:"Confirm Password"}),(0,h.jsx)(r.II,{className:"form-control",type:"password",name:"confirmPassword",id:"confirmPassword",value:j.confirmPassword,onChange:function(s){return u((0,t.Z)((0,t.Z)({},j),{},{confirmPassword:s.target.value}))}})]})}),(0,h.jsx)(r.JX,{md:6,children:(0,h.jsxs)(r.cw,{children:[(0,h.jsx)(r.__,{for:"notes",children:"Confirm txnPassword"}),(0,h.jsx)(r.II,{className:"form-control",type:"password",name:"confirmTxnPassword",id:"confirmTxnPassword",value:j.confirmTxnPassword,onChange:function(s){return u((0,t.Z)((0,t.Z)({},j),{},{confirmTxnPassword:s.target.value}))}})]})})]})]}),(0,h.jsx)(r.mz,{children:(0,h.jsx)(r.zx,{color:"primary",type:"submit",disabled:0===j.name.length||0===j.confirmTxnPassword.length||j.password!==j.confirmPassword||j.txnPassword!==j.confirmTxnPassword,children:"Add Contact"})})]})},x=function(){var s=(0,c.I0)(),e=(0,c.v9)((function(s){return s.userListManageReducer})).data,n=(0,d.useState)("child1"),t=(0,a.Z)(n,2),o=t[0],x=t[1];(0,d.useEffect)((function(){s((0,l.Ai)())}),[s]);var j=d.useState(!1),u=(0,a.Z)(j,2),f=u[0],w=u[1],p=function(){w(!f)};return(0,h.jsxs)(r.Zb,{children:[(0,h.jsx)(r.eW,{children:(0,h.jsxs)("div",{className:"d-flex align-items-center justify-content-between",children:[(0,h.jsx)("div",{children:(0,h.jsx)(r.ll,{tag:"h4",children:"Users Overview"})}),(0,h.jsx)("div",{className:"mt-4 mt-md-0",children:(0,h.jsxs)(r.II,{type:"select",className:"custom-select",value:o,onChange:function(s){return x(s.target.value)},children:[(0,h.jsx)("option",{value:"child1",children:"Child 1"}),(0,h.jsx)("option",{value:"child2",children:"Child 2"}),(0,h.jsx)("option",{value:"child3",children:"Child 3"})]})})]})}),(0,h.jsxs)(r.eW,{className:"bg-light d-flex align-items-center justify-content-between",children:[(0,h.jsxs)("div",{children:[(0,h.jsx)("h3",{children:"March 2022"}),(0,h.jsx)("h5",{className:"fw-light mb-0 text-muted",children:"Report for this month"})]}),(0,h.jsx)("div",{className:"mt-4 mt-md-0",children:(0,h.jsx)("div",{className:"p-3 border-bottom",children:(0,h.jsx)(r.zx,{color:"danger",block:!0,onClick:p,children:"Add New"})})})]}),(0,h.jsx)("div",{className:"table-responsive",children:(0,h.jsxs)(r.iA,{className:"text-nowrap align-middle mb-0",hover:!0,children:[(0,h.jsx)("thead",{children:(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{children:"#"}),(0,h.jsx)("th",{children:"Name"}),(0,h.jsx)("th",{children:"Package"}),(0,h.jsx)("th",{children:"Mobile"}),(0,h.jsx)("th",{children:"Sponser"}),(0,h.jsx)("th",{children:"Action"}),(0,h.jsx)("th",{children:"Details"})]})}),(0,h.jsx)("tbody",{children:e&&function(){if(!e)return[];switch(o){case"child1":return e.child1||[];case"child2":return e.child2||[];case"child3":return e.child3||[];default:return[]}}().map((function(s,e){return(0,h.jsxs)("tr",{className:"border-top",children:[(0,h.jsx)("td",{children:(0,h.jsx)("h6",{className:"mb-0",children:e+1})}),(0,h.jsx)("td",{children:(0,h.jsx)("h6",{className:"mb-0",children:s.username})}),(0,h.jsx)("td",{children:(0,h.jsx)("h6",{className:"mb-0",children:s.packageName})}),(0,h.jsx)("td",{children:(0,h.jsx)("h6",{className:"mb-0",children:s.phone})}),(0,h.jsx)("td",{children:(0,h.jsx)("h6",{className:"mb-0",children:s.ownSponserId})}),(0,h.jsx)("td",{children:(0,h.jsx)(i.rU,{to:"/users-tree-list/".concat(s._id),className:"hidden xs:block ml-2",children:(0,h.jsx)(r.zx,{className:"btn",color:"success",children:"View Tree"})})}),(0,h.jsx)("td",{children:(0,h.jsx)(i.rU,{to:"/user-profile/".concat(s._id),className:"hidden xs:block ml-2",children:(0,h.jsx)(r.zx,{className:"btn ",color:"info",children:"View Details"})})})]},s._id)}))})]})}),(0,h.jsxs)(r.u_,{isOpen:f,toggle:p,size:"md",children:[(0,h.jsx)(r.xB,{toggle:p,children:"Add Contact"}),(0,h.jsx)(m,{click:p})]})]})},j=function(){return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(r.X2,{children:(0,h.jsx)(r.JX,{lg:"12",children:(0,h.jsx)(x,{})})})})}}}]);
//# sourceMappingURL=8429.4fbb138b.chunk.js.map