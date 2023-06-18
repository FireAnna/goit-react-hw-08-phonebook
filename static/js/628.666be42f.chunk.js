"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[628],{6628:function(n,e,t){t.r(e),t.d(e,{default:function(){return y}});var a=t(9439),c=t(2791),r=t(9434),s=t(3871),o=t(5044),i="ContactForm_form__tJ0TV",u="ContactForm_title__mrJBn",l="ContactForm_input__0+AYW",d="ContactForm_btn__AdbvE",m=t(184),f=function(){var n=(0,r.I0)(),e=(0,c.useState)(""),t=(0,a.Z)(e,2),f=t[0],h=t[1],_=(0,c.useState)(""),p=(0,a.Z)(_,2),x=p[0],j=p[1],v=(0,r.v9)((function(n){return n.contacts.contacts.items}));return(0,m.jsxs)("form",{className:i,onSubmit:function(e){e.preventDefault(),v.find((function(n){return n.name.toLowerCase()===f.toLowerCase()}))?alert("".concat(f," is already in contacts")):(n((0,s.uK)({id:(0,o.ZP)(),name:f,number:x})),h(""),j(""))},children:[(0,m.jsxs)("label",{children:[(0,m.jsx)("p",{className:u,children:"Name"}),(0,m.jsx)("input",{className:l,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",value:f,onChange:function(n){h(n.target.value)},title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",placeholder:"Type contact name...",required:!0})]}),(0,m.jsxs)("label",{children:[(0,m.jsx)("p",{className:u,children:"Number"}),(0,m.jsx)("input",{className:l,type:"tel",name:"number",value:x,onChange:function(n){j(n.target.value)},pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",placeholder:"Type contact phone...",required:!0})]}),(0,m.jsx)("button",{className:d,children:"Add contact"})]})},h="ContactList_ul__mAnOS",_="ContactList_li__No53k",p="ContactList_btn__AlJuz",x=function(){var n=(0,r.I0)(),e=(0,r.v9)((function(n){return n.contacts.contacts.items})),t=(0,r.v9)((function(n){return n.contacts.filter})),a=(0,r.v9)((function(n){return n.contacts.contacts.isLoading}));return(0,c.useEffect)((function(){n((0,s.yF)())}),[n,t]),t?(0,m.jsxs)("ul",{className:h,children:[a?(0,m.jsx)("p",{children:"Loading..."}):null,null===e||void 0===e?void 0:e.filter((function(n){return n.name.toLowerCase().includes(t.toLowerCase())})).map((function(e){var t=e.id,a=e.name,c=e.number;return(0,m.jsxs)("li",{className:_,children:[(0,m.jsxs)("p",{children:[a,": ",c]}),(0,m.jsx)("button",{className:p,onClick:function(){n((0,s.GK)(t))},children:"Delete"})]},t)}))]}):(0,m.jsxs)("ul",{className:h,children:[a?(0,m.jsx)("p",{children:"Loading..."}):null,null===e||void 0===e?void 0:e.map((function(e){var t=e.id,a=e.name,c=e.number;return(0,m.jsxs)("li",{className:_,children:[(0,m.jsxs)("p",{children:[a,": ",c]}),(0,m.jsx)("button",{className:p,onClick:function(){n((0,s.GK)(t))},children:"Delete"})]},t)}))]})},j=t(9467),v="Filter_title__9GOmX",b="Filter_input__ZoFLt",C=function(){var n=(0,r.v9)((function(n){return n.filter})),e=(0,r.I0)();return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("p",{className:v,children:"Find contacts by name"}),(0,m.jsx)("input",{className:b,type:"text",name:"filter",value:n,onChange:function(n){return e((0,j.W1)(n.target.value))}})]})},N="ContactPage_container__wo62g",g="ContactPage_title__ugb9r",y=function(){return(0,m.jsxs)("div",{className:N,children:[(0,m.jsx)("h1",{className:g,children:"Phonebook"}),(0,m.jsx)(f,{}),(0,m.jsx)("h2",{className:g,children:"Contacts"}),(0,m.jsx)(C,{}),(0,m.jsx)(x,{})]})}},5044:function(n,e,t){function a(n){return n&&"object"===typeof n&&"default"in n?n:{default:n}}var c=a(t(2791)),r="id",s=0;function o(n){return s++,"".concat(n||r).concat(s)}var i=function(n,e){for(var t=[],a=0;a<n;a++)t.push(o(e));return t};function u(n){var e=c.default.useRef();return c.default.useEffect((function(){e.current=n})),e.current}e.ZP=o}}]);
//# sourceMappingURL=628.666be42f.chunk.js.map