"use strict";(self.webpackChunkmain_bt5=self.webpackChunkmain_bt5||[]).push([[9364],{29364:function(e,n,t){t.r(n),t.d(n,{default:function(){return h}});var c=t(25211),r=t(29439),l=t(72791),i=t(59434),s=t(39264),a=t(80184),d=function(){var e=(0,i.I0)(),n=(0,i.v9)((function(e){return e.walletWithdrawPendingManageReducer})).data,t=(0,i.v9)((function(e){return e.AcceptWalletWithdrawReducer})).data,d=(0,i.v9)((function(e){return e.RejectWalletWithdrawReducer})).data,h=(0,l.useState)(!1),o=(0,r.Z)(h,2),u=o[0],x=o[1],j=(0,l.useState)(!1),m=(0,r.Z)(j,2),f=m[0],g=m[1],v=(0,l.useState)(null),w=(0,r.Z)(v,2),p=w[0],b=w[1];(0,l.useEffect)((function(){e((0,s.PH)())}),[e,t,d]);var y=function(){x(!1)},C=function(){g(!1)};return(0,a.jsxs)(c.Zb,{children:[(0,a.jsx)(c.eW,{children:(0,a.jsxs)("div",{className:"d-flex align-items-center justify-content-between",children:[(0,a.jsx)("div",{children:(0,a.jsx)(c.ll,{tag:"h4",children:"Pending Wallet Withdrawal"})}),(0,a.jsx)("div",{className:"mt-4 mt-md-0",children:(0,a.jsxs)(c.II,{type:"select",className:"custom-select",children:[(0,a.jsx)("option",{value:"0",children:"Monthly"}),(0,a.jsx)("option",{value:"1",children:"Daily"}),(0,a.jsx)("option",{value:"2",children:"Weekly"}),(0,a.jsx)("option",{value:"3",children:"Yearly"})]})})]})}),(0,a.jsx)(c.eW,{className:"bg-light d-flex align-items-center justify-content-between"}),(0,a.jsx)("div",{className:"table-responsive",children:(0,a.jsxs)(c.iA,{className:"text-nowrap align-middle mb-0",hover:!0,children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"#"}),(0,a.jsx)("th",{children:"Name"}),(0,a.jsx)("th",{children:"Date"}),(0,a.jsx)("th",{children:"Phone"}),(0,a.jsx)("th",{children:"Amount"}),(0,a.jsx)("th",{children:"Wallet Url"}),(0,a.jsx)("th",{children:"Action"})]})}),(0,a.jsx)("tbody",{children:n&&n.userData.map((function(e,n){return(0,a.jsxs)("tr",{className:"border-top",children:[(0,a.jsx)("td",{children:(0,a.jsx)("h6",{className:"mb-0",children:n+1})}),(0,a.jsx)("td",{children:(0,a.jsx)("h6",{className:"mb-0",children:e.username})}),(0,a.jsx)("td",{children:(0,a.jsx)("h6",{className:"mb-0",children:(t=e.createdAt,new Date(t).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"}))})}),(0,a.jsx)("td",{children:e.phone}),(0,a.jsx)("td",{children:e.walletWithdrawAmount}),(0,a.jsx)("td",{children:e.walletWithdrawUrl}),(0,a.jsxs)("td",{children:[(0,a.jsx)(c.zx,{className:"btn m-2",onClick:function(){return n=e._id,b(n),void x(!0);var n},color:"success",children:"Accept"}),(0,a.jsx)(c.zx,{className:"btn",onClick:function(){return n=e._id,b(n),void g(!0);var n},color:"danger",children:"Reject"})]})]},e.email);var t}))})]})}),(0,a.jsxs)(c.u_,{isOpen:u,toggle:y,children:[(0,a.jsx)(c.xB,{toggle:y,children:"Confirm Acceptance"}),(0,a.jsx)(c.fe,{children:"Are you sure you want to accept this withdrawal?"}),(0,a.jsxs)(c.mz,{children:[(0,a.jsx)(c.zx,{color:"secondary",onClick:y,children:"Cancel"}),(0,a.jsx)(c.zx,{color:"success",onClick:function(){e((0,s.ah)(p)),x(!1)},children:"Confirm"})]})]}),(0,a.jsxs)(c.u_,{isOpen:f,toggle:C,children:[(0,a.jsx)(c.xB,{toggle:C,children:"Confirm Rejection"}),(0,a.jsx)(c.fe,{children:"Are you sure you want to reject this withdrawal?"}),(0,a.jsxs)(c.mz,{children:[(0,a.jsx)(c.zx,{color:"secondary",onClick:C,children:"Cancel"}),(0,a.jsx)(c.zx,{color:"danger",onClick:function(){e((0,s.A)(p)),g(!1)},children:"Confirm"})]})]})]})},h=function(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(c.X2,{children:(0,a.jsx)(c.JX,{lg:"12",children:(0,a.jsx)(d,{})})})})}}}]);
//# sourceMappingURL=9364.e84ba1ae.chunk.js.map