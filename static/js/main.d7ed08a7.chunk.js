(this.webpackJsonpemployeedirectory=this.webpackJsonpemployeedirectory||[]).push([[0],{41:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(2),r=c(12),a=c.n(r),l=c(13),o=c(14),h=c(17),i=c(16);var j=function(e){return Object(n.jsxs)("table",{className:"table table-striped",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"col",children:"Image"}),Object(n.jsx)("th",{scope:"col",children:"Name "}),Object(n.jsx)("th",{scope:"col",children:"Phone"}),Object(n.jsx)("th",{scope:"col",children:"Email"}),Object(n.jsx)("th",{scope:"col",children:"DOB"})]})}),Object(n.jsx)("tbody",{children:e.results.map((function(e,t){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:Object(n.jsx)("img",{alt:"Employee",src:e.picture.thumbnail})}),Object(n.jsxs)("td",{children:[e.name.first," ",e.name.last]}),Object(n.jsx)("td",{children:e.phone}),Object(n.jsx)("td",{children:e.email}),Object(n.jsx)("td",{children:e.dob.date.substring(0,10)})]},t)}))})]})},u=c(15),d=c.n(u),b=function(){return d.a.get("https://randomuser.me/api/?results=200&nat=us")};var p=function(e){return Object(n.jsx)("form",{children:Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"search",children:"Search:"}),Object(n.jsx)("input",{onChange:e.handleInputChange,value:e.search,name:"search",type:"text",className:"form-control",placeholder:"Search for an employee",id:"search"})]})})},O=function(e){Object(h.a)(c,e);var t=Object(i.a)(c);function c(){var e;Object(l.a)(this,c);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={search:"",results:[],filteredResults:[]},e.handleInputChange=function(t){t.preventDefault(),console.log(t),e.setState({search:t.target.value})},e}return Object(o.a)(c,[{key:"componentDidMount",value:function(){var e=this;b().then((function(t){e.setState({results:t.data.results,filteredResults:t.data.results})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(p,{handleInputChange:this.handleInputChange,value:this.state.search}),Object(n.jsx)(j,{results:this.state.results})]})}}]),c}(s.Component);var m=function(){return Object(n.jsx)(O,{})};c(40);a.a.render(Object(n.jsx)(m,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.d7ed08a7.chunk.js.map