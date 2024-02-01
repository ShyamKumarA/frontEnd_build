"use strict";(self.webpackChunkmain_bt5=self.webpackChunkmain_bt5||[]).push([[8429],{68429:function(s,e,r){r.r(e),r.d(e,{default:function(){return j}});var n=r(25211),a=r(29439),d=r(72791),c=r(59434),i=r(43504),l=r(59202),o=r(1413),t=r(18814),h=r(80184),m=function(s){var e=s.click,r=(0,c.I0)(),i=(0,d.useState)({name:"",phone:"",email:"",address:"",password:"",confirmPassword:"",txnPassword:"",confirmTxnPassword:""}),m=(0,a.Z)(i,2),x=m[0],j=m[1];return(0,h.jsxs)(n.l0,{onSubmit:function(s){if(s.preventDefault(),x.password===x.confirmPassword&&x.txnPassword===x.confirmTxnPassword){var n={username:x.name,phone:x.phone,email:x.email,address:x.address,password:x.password,transactionPassword:x.txnPassword,confirmPassword:x.confirmPassword,confirmTxnPassword:x.confirmTxnPassword};r((0,l.cn)(n)),j({name:"",phone:"",email:"",address:"",password:"",confirmPassword:"",txnPassword:"",confirmTxnPassword:""}),e()}else alert("Passwords do not match.")},children:[(0,h.jsxs)(n.fe,{children:[(0,h.jsxs)(n.X2,{children:[(0,h.jsx)(n.JX,{md:6,className:"text-center",children:(0,h.jsx)("img",{src:t,className:"rounded-circle",alt:t,width:"100"})}),(0,h.jsxs)(n.JX,{md:6,children:[(0,h.jsxs)(n.cw,{children:[(0,h.jsx)(n.__,{for:"firstName",children:"Name"}),(0,h.jsx)(n.II,{className:"form-control",type:"text",name:"username",id:"firstname",value:x.name,onChange:function(s){return j((0,o.Z)((0,o.Z)({},x),{},{name:s.target.value}))},required:!0})]}),(0,h.jsxs)(n.cw,{children:[(0,h.jsx)(n.__,{for:"phone",children:"Phone"}),(0,h.jsx)(n.II,{className:"form-control",type:"phone",name:"phone",id:"phone",value:x.phone,onChange:function(s){return j((0,o.Z)((0,o.Z)({},x),{},{phone:s.target.value}))}})]})]})]}),(0,h.jsxs)(n.X2,{children:[(0,h.jsx)(n.JX,{md:6,children:(0,h.jsxs)(n.cw,{children:[(0,h.jsx)(n.__,{for:"email",children:"Email"}),(0,h.jsx)(n.II,{className:"form-control",type:"email",name:"email",id:"email",value:x.email,onChange:function(s){return j((0,o.Z)((0,o.Z)({},x),{},{email:s.target.value}))}})]})}),(0,h.jsx)(n.JX,{md:6,children:(0,h.jsxs)(n.cw,{children:[(0,h.jsx)(n.__,{for:"address",children:"Address"}),(0,h.jsx)(n.II,{className:"form-control",type:"text",name:"address",id:"address",value:x.address,onChange:function(s){return j((0,o.Z)((0,o.Z)({},x),{},{address:s.target.value}))}})]})})]}),(0,h.jsxs)(n.X2,{children:[(0,h.jsx)(n.JX,{md:6,children:(0,h.jsxs)(n.cw,{children:[(0,h.jsx)(n.__,{for:"password",children:"Password"}),(0,h.jsx)(n.II,{className:"form-control",type:"password",name:"password",id:"password",value:x.password,onChange:function(s){return j((0,o.Z)((0,o.Z)({},x),{},{password:s.target.value}))}})]})}),(0,h.jsx)(n.JX,{md:6,children:(0,h.jsxs)(n.cw,{children:[(0,h.jsx)(n.__,{for:"email",children:"Txn Password"}),(0,h.jsx)(n.II,{className:"form-control",type:"password",name:"txnPassword",id:"txnPassword",value:x.txnPassword,onChange:function(s){return j((0,o.Z)((0,o.Z)({},x),{},{txnPassword:s.target.value}))}})]})})]}),(0,h.jsxs)(n.X2,{children:[(0,h.jsx)(n.JX,{md:6,children:(0,h.jsxs)(n.cw,{children:[(0,h.jsx)(n.__,{for:"address",children:"Confirm Password"}),(0,h.jsx)(n.II,{className:"form-control",type:"password",name:"confirmPassword",id:"confirmPassword",value:x.confirmPassword,onChange:function(s){return j((0,o.Z)((0,o.Z)({},x),{},{confirmPassword:s.target.value}))}})]})}),(0,h.jsx)(n.JX,{md:6,children:(0,h.jsxs)(n.cw,{children:[(0,h.jsx)(n.__,{for:"notes",children:"Confirm txnPassword"}),(0,h.jsx)(n.II,{className:"form-control",type:"password",name:"confirmTxnPassword",id:"confirmTxnPassword",value:x.confirmTxnPassword,onChange:function(s){return j((0,o.Z)((0,o.Z)({},x),{},{confirmTxnPassword:s.target.value}))}})]})})]})]}),(0,h.jsx)(n.mz,{children:(0,h.jsx)(n.zx,{color:"primary",type:"submit",disabled:0===x.name.length||0===x.confirmTxnPassword.length||x.password!==x.confirmPassword||x.txnPassword!==x.confirmTxnPassword,children:"Add Contact"})})]})},x=function(){var s=(0,c.I0)(),e=(0,c.v9)((function(s){return s.userListManageReducer})).data,r=(0,d.useState)("child1"),o=(0,a.Z)(r,2),t=o[0],x=o[1];(0,d.useEffect)((function(){s((0,l.Ai)())}),[s]);var j=d.useState(!1),u=(0,a.Z)(j,2),f=u[0],w=u[1],p=function(){w(!f)};return(0,h.jsxs)(n.Zb,{children:[(0,h.jsx)(n.eW,{children:(0,h.jsxs)("div",{className:"d-flex align-items-center justify-content-between",children:[(0,h.jsx)("div",{children:(0,h.jsx)(n.ll,{tag:"h4",children:"Users Overview"})}),(0,h.jsx)("div",{className:"mt-4 mt-md-0",children:(0,h.jsxs)(n.II,{type:"select",className:"custom-select",value:t,onChange:function(s){return x(s.target.value)},children:[(0,h.jsx)("option",{value:"child1",children:"Level 1"}),(0,h.jsx)("option",{value:"child2",children:"Level 2"}),(0,h.jsx)("option",{value:"child3",children:"Level 3"})]})})]})}),(0,h.jsx)(n.eW,{className:"bg-light d-flex align-items-center justify-content-between",children:(0,h.jsx)("div",{className:"mt-4 mt-md-0",children:(0,h.jsx)("div",{className:"p-3 border-bottom",children:(0,h.jsx)(n.zx,{color:"danger",block:!0,onClick:p,children:"Add New"})})})}),(0,h.jsx)("div",{className:"table-responsive",children:(0,h.jsxs)(n.iA,{className:"text-nowrap align-middle mb-0",hover:!0,children:[(0,h.jsx)("thead",{children:(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{children:"#"}),(0,h.jsx)("th",{children:"Name"}),(0,h.jsx)("th",{children:"Package"}),(0,h.jsx)("th",{children:"Mobile"}),(0,h.jsx)("th",{children:"Sponser"}),(0,h.jsx)("th",{children:"Action"}),(0,h.jsx)("th",{children:"Details"})]})}),(0,h.jsx)("tbody",{children:e&&function(){if(!e)return[];switch(t){case"child1":return e.child1||[];case"child2":return e.child2||[];case"child3":return e.child3||[];default:return[]}}().map((function(s,e){return(0,h.jsxs)("tr",{className:"border-top",children:[(0,h.jsx)("td",{children:(0,h.jsx)("h6",{className:"mb-0",children:e+1})}),(0,h.jsx)("td",{children:(0,h.jsx)("h6",{className:"mb-0",children:s.username})}),(0,h.jsx)("td",{children:(0,h.jsx)("h6",{className:"mb-0",children:s.packageName})}),(0,h.jsx)("td",{children:(0,h.jsx)("h6",{className:"mb-0",children:s.phone})}),(0,h.jsx)("td",{children:(0,h.jsx)("h6",{className:"mb-0",children:s.ownSponserId})}),(0,h.jsx)("td",{children:(0,h.jsx)(i.rU,{to:"/users-tree-list/".concat(s._id),className:"hidden xs:block ml-2",children:(0,h.jsx)(n.zx,{className:"btn",color:"success",children:"View Tree"})})}),(0,h.jsx)("td",{children:(0,h.jsx)(i.rU,{to:"/user-profile/".concat(s._id),className:"hidden xs:block ml-2",children:(0,h.jsx)(n.zx,{className:"btn ",color:"info",children:"View Details"})})})]},s._id)}))})]})}),(0,h.jsxs)(n.u_,{isOpen:f,toggle:p,size:"md",children:[(0,h.jsx)(n.xB,{toggle:p,children:"Add Contact"}),(0,h.jsx)(m,{click:p})]})]})},j=function(){return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(n.X2,{children:(0,h.jsx)(n.JX,{lg:"12",children:(0,h.jsx)(x,{})})})})}}}]);
//# sourceMappingURL=8429.f7764d92.chunk.js.map