"use strict";(self.webpackChunkmain_bt5=self.webpackChunkmain_bt5||[]).push([[3697],{63697:function(e,s,n){n.r(s);var a=n(4942),r=n(1413),l=n(74165),c=n(15861),d=n(29439),t=n(59434),i=n(72791),o=n(38645),h=n(16871),x=n(25211),m=n(67303),j=(n(5462),n(49693)),u=n(80184);s.default=function(){var e=(0,i.useState)("2"),s=(0,d.Z)(e,2),n=s[0],p=s[1],f=(0,i.useState)({name:"",email:"",address:"",password:"",txnPassword:"",phone:"",country:"India"}),v=(0,d.Z)(f,2),w=v[0],I=v[1],g=(0,h.UO)().userId;console.log(g);var N=(0,t.I0)(),b=(0,t.v9)((function(e){return e.userProfileManageReducer})).data;console.log(b),(0,i.useEffect)((function(){N((0,j.mM)(g))}),[N,g]);var y=function(e){n!==e&&p(e)},_=function(){var e=(0,c.Z)((0,l.Z)().mark((function e(s){return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N((0,j.Xo)({id:s,formData:w}));case 3:I({name:"",email:"",address:"",password:"",txnPassword:"",phone:"",country:"India"}),m.Am.success("User profile updated successfully."),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),m.Am.error("Failed to update user profile. Please try again.");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(s){return e.apply(this,arguments)}}(),C=function(e){var s=e.target,n=s.name,l=s.value;I((0,r.Z)((0,r.Z)({},w),{},(0,a.Z)({},n,l)))};return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(x.X2,{children:(0,u.jsx)(x.JX,{xs:"12",md:"12",lg:"12",children:(0,u.jsxs)(x.Zb,{children:[(0,u.jsxs)(x.JL,{tabs:!0,children:[(0,u.jsx)(x.LY,{children:(0,u.jsx)(x.OL,{className:"2"===n?"active bg-transparent":"cursor-pointer",onClick:function(){y("2")},children:"Profile"})}),(0,u.jsx)(x.LY,{children:(0,u.jsx)(x.OL,{className:"3"===n?"active bg-transparent":"cursor-pointer",onClick:function(){y("3")},children:"Edit Profile"})})]}),(0,u.jsxs)(x.I5,{activeTab:n,children:[(0,u.jsx)(x.Jm,{tabId:"2",children:(0,u.jsx)(x.X2,{children:(0,u.jsx)(x.JX,{sm:"12",children:(0,u.jsxs)("div",{className:"p-4",children:[(0,u.jsxs)(x.X2,{children:[(0,u.jsxs)(x.JX,{md:"3",xs:"6",className:"border-end",children:[(0,u.jsx)("strong",{children:"Full Name"}),(0,u.jsx)("br",{}),(0,u.jsx)("p",{className:"text-muted",children:b&&b.name})]}),(0,u.jsxs)(x.JX,{md:"3",xs:"6",className:"border-end",children:[(0,u.jsx)("strong",{children:"Mobile"}),(0,u.jsx)("br",{}),(0,u.jsx)("p",{className:"text-muted",children:b&&b.phone})]}),(0,u.jsxs)(x.JX,{md:"3",xs:"6",className:"border-end",children:[(0,u.jsx)("strong",{children:"Email"}),(0,u.jsx)("br",{}),(0,u.jsx)("p",{className:"text-muted",children:b&&b.email})]}),(0,u.jsxs)(x.JX,{md:"3",xs:"6",className:"border-end",children:[(0,u.jsx)("strong",{children:"Document"}),(0,u.jsx)("br",{}),b&&(0,u.jsx)("div",{style:{width:"80px"},children:(0,u.jsx)(o.Z,{small:"https://octtaview.com/uploads/".concat(b.aadhaar),large:"https://octtaview.com/uploads/".concat(b.aadhaar),alt:"screenshot"})})]})]}),(0,u.jsx)("h4",{className:"font-medium mt-4",children:(0,u.jsx)("strong",{children:" Detailed view"})}),(0,u.jsx)("hr",{}),(0,u.jsxs)("h5",{className:"mt-4",children:["Wallet Amount ",(0,u.jsx)("span",{className:"float-end",children:b&&b.totalIncome})]}),(0,u.jsx)("hr",{}),(0,u.jsxs)("h5",{className:"mt-4",children:["DailyBonus ",(0,u.jsx)("span",{className:"float-end",children:b&&b.dailyBonus})]}),(0,u.jsx)("hr",{}),(0,u.jsxs)("h5",{className:"mt-4",children:["LevelRoi ",(0,u.jsx)("span",{className:"float-end",children:b&&b.levelRoi})]}),(0,u.jsx)("hr",{}),(0,u.jsxs)("h5",{className:"mt-4",children:["capitalAmount ",(0,u.jsx)("span",{className:"float-end",children:b&&b.capitalAmount})]}),(0,u.jsx)("hr",{}),(0,u.jsxs)("h5",{className:"mt-4",children:["Direct Income ",(0,u.jsx)("span",{className:"float-end",children:b&&b.directIncome})]}),(0,u.jsx)("hr",{}),(0,u.jsx)(x.Ex,{color:"warning",value:100})]})})})}),(0,u.jsx)(x.Jm,{tabId:"3",children:(0,u.jsx)(x.X2,{children:(0,u.jsx)(x.JX,{sm:"12",children:(0,u.jsx)("div",{className:"p-4",children:(0,u.jsxs)(x.l0,{children:[(0,u.jsxs)(x.cw,{children:[(0,u.jsx)(x.__,{children:"Full Name"}),(0,u.jsx)(x.II,{type:"name",name:"username",value:w.name,placeholder:b&&b.name,onChange:C})]}),(0,u.jsxs)(x.cw,{children:[(0,u.jsx)(x.__,{children:"Email"}),(0,u.jsx)(x.II,{type:"email",name:"email",value:w.email,placeholder:b&&b.email,onChange:C})]}),(0,u.jsxs)(x.cw,{children:[(0,u.jsx)(x.__,{children:"Address"}),(0,u.jsx)(x.II,{type:"text",name:"address",value:w.address,placeholder:b&&b.address,onChange:C})]}),(0,u.jsxs)(x.cw,{children:[(0,u.jsx)(x.__,{children:"Change Password"}),(0,u.jsx)(x.II,{type:"text",name:"password",value:w.password,placeholder:"******",onChange:C})]}),(0,u.jsxs)(x.cw,{children:[(0,u.jsx)(x.__,{children:"Change Txn Password"}),(0,u.jsx)(x.II,{type:"text",name:"txnPassword",value:w.txnPassword,placeholder:"******",onChange:C})]}),(0,u.jsxs)(x.cw,{children:[(0,u.jsx)(x.__,{children:"Phone No"}),(0,u.jsx)(x.II,{type:"text",name:"phone",value:w.phone,placeholder:b&&b.phone,onChange:C})]}),(0,u.jsxs)(x.cw,{children:[(0,u.jsx)(x.__,{children:"Select Country"}),(0,u.jsxs)(x.II,{type:"select",name:"country",value:w.country,onChange:C,children:[(0,u.jsx)("option",{value:"USA",children:"USA"}),(0,u.jsx)("option",{value:"India",children:"India"}),(0,u.jsx)("option",{value:"America",children:"America"})]})]}),(0,u.jsx)(x.zx,{color:"primary",onClick:function(){return _(b&&b.id)},children:"Update Profile"})]})})})})})]})]})})})})}}}]);
//# sourceMappingURL=3697.332eff5a.chunk.js.map