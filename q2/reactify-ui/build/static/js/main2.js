(this["webpackJsonpreactify-ui"]=this["webpackJsonpreactify-ui"]||[]).push([[0],{113:function(e,t,a){var n={"./cancel.svg":114,"./checked.svg":115};function r(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=o,e.exports=r,r.id=113},114:function(e,t,a){e.exports=a.p+"static/media/cancel.6791a224.svg"},115:function(e,t,a){e.exports=a.p+"static/media/checked.55bdf69c.svg"},203:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"callApi",(function(){return B})),a.d(n,"clearData",(function(){return X})),a.d(n,"updateReducer",(function(){return Y})),a.d(n,"loader",(function(){return K}));var r=a(0),o=a.n(r),s=a(23),i=a.n(s),c=(a(96),a(6)),l=a(7),u=a(9),p=a(8),h=a(12),m=a(21),d=a(48),f=a(32),b=a(30),g=(a(83),a(110),function(e){return e&&e.trim()}),E=function(){var e=localStorage.getItem("token");return e||(e=sessionStorage.getItem("token")),e},v=function(e,t){w(),t?localStorage.setItem("token",e):sessionStorage.setItem("token",e)},w=function(){localStorage.removeItem("token"),sessionStorage.removeItem("token")},y=[{url:"/shop_list",option:"Shop List",when:["OrgAdmin"]},{url:"/login",option:"Logout",when:["OrgAdmin","ShopAdmin","Cashier"]}],k=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.cName?"d-common-btn "+this.props.cName:"d-common-btn";return this.props.noDClass&&(e=this.props.cName),o.a.createElement("button",{id:this.props.id,className:e,onClick:"submit"===this.props.type?null:this.props.onClick,tabIndex:this.props.tabIndex},this.props.children?this.props.children:this.props.title)}}]),a}(r.Component),O=(r.Component,function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={errMsg:"",hasErr:!1},e}return Object(l.a)(a,[{key:"hasRequiredError",value:function(){return this.props.showError&&this.props.required&&!(this.props.value&&("number"===typeof this.props.value||this.props.value.trim()))}},{key:"getClass",value:function(){var e=this.props.cName?"d-common-input "+this.props.cName:"d-common-input";return e=this.hasRequiredError()?e+" d-common-input-error":e,e=this.props.readonly?e+" readonly":e}},{key:"onChange",value:function(e){var t,a,n=!1;switch(this.props.iType){case"num":t=/^[0-9\b]+$/;break;case"email":t=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,a="Please enter valid email id",n=!0;break;case"mobilenum":t=/^[0][1-9]\d{9}$|^[1-9]\d{9}$/,a="Please enter 10 digit number",n=!0;break;case"Otp":t=/^\d{4}[1-9]*$/,a="Please enter valid otp",n=!0;break;case"pincode":t=/^[1-9][0-9]{5}$/,a="Please enter 6 digit pincode",n=!0;break;case"int":t=/^\d*[1-9]\d*$/,a="Please enter a number",n=!0;break;case"only1num":t=/^([1-9]|1[0])$/,a="Please enter only one digit",n=!0;break;case"textfiled":t=/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,a="Please enter your name in charater",n=!0;break;case"notspace":t=/^(\w+\S+)$/,a="Please enter valid input",n=!0}t.test(e.target.value)?(this.setState({errMsg:"",hasErr:!1}),this.props.onChange(e)):this.setState({errMsg:a,hasErr:!0}),!n&&e.target.value||this.props.onChange(e)}},{key:"render",value:function(){var e=this;return this.props.value&&this.props.iType&&this.state.hasErr&&function(e,t){var a;switch(e){case"mobilenum":a=/^[0][1-9]\d{9}$|^[1-9]\d{9}$/;break;case"pincode":a=/^[1-9][0-9]{5}$/;break;case"Otp":a=/^\d{4}[1-9]*$/;break;case"text":a=/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;break;case"int":a=/^\d*[1-9]\d*$/;break;case"only1num":a=/^([1-9]|1[0])$/;break;case"notspace":a=/^(\w+\S+)$/;break;case"email":default:a=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/}return t&&a.test(t)&&t.trim()}(this.props.iType,this.props.value)&&this.setState({errMsg:"",hasErr:!1}),o.a.createElement(o.a.Fragment,null,this.props.label&&!this.props.noLabel&&o.a.createElement(C,{title:this.props.label+(this.props.required?"*":""),cName:"d-common-input-label"}),o.a.createElement("input",{type:this.props.type,id:this.props.id,list:this.props.list,className:this.getClass(),placeholder:this.props.placeholder,value:this.props.value,onChange:function(t){return e.props.iType?e.onChange(t):e.props.onChange(t)},tabIndex:this.props.tabIndex,onFocus:function(t){return e.props.onFocus?e.props.onFocus(t,!0):null},onBlur:function(t){return e.props.onFocus?e.props.onFocus(t):null},autoFocus:this.props.autoFocus,accept:this.props.accept}),!this.state.hasErr&&this.hasRequiredError()&&!this.props.noLabel&&o.a.createElement(C,{cName:"d-common-label-error",title:this.props.label+" is required"}),this.props.iType&&this.state.hasErr&&this.state.errMsg&&!this.props.noLabel&&o.a.createElement(C,{cName:"d-common-label-error",title:this.state.errMsg}))}}]),a}(r.Component)),C=(r.Component,r.Component,r.Component,r.Component,function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement("label",{className:this.props.cName?"d-common-label "+this.props.cName:"d-common-label",onClick:this.props.onClick?this.props.onClick:null},this.props.children?this.props.children:this.props.title)}}]),a}(r.Component)),j=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement(m.b,{id:this.props.id,className:this.props.cName,to:this.props.to,target:this.props.target,onClick:this.props.onClick?function(t){return e.props.onClick(t)}:null},this.props.children?this.props.children:this.props.title)}}]),a}(r.Component),N=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement("span",{className:this.props.cName?"d-common-span "+this.props.cName:"d-common-span",onClick:this.props.onClick?this.props.onClick:null},this.props.children?this.props.children:this.props.title)}}]),a}(r.Component),S=(r.Component,r.Component,r.Component,r.Component,function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{id:this.props.id,style:this.props.style,className:this.props.cName,onClick:this.props.onClick?function(t){return e.props.onClick(t)}:null},this.props.children)}}]),a}(r.Component)),M=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement("img",{id:this.props.id,className:this.props.cName?"d-common-img "+this.props.cName:"d-common-img",src:this.props.isUrl?this.props.src:a(113)("./"+this.props.src),alt:this.props.alt,height:this.props.height,width:this.props.width,onClick:this.props.onClick?function(t){return e.props.onClick(t)}:null})}}]),n}(r.Component),x=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t={content:{margin:"auto",width:this.props.width,height:this.props.height,borderRadius:"20px",boxShadow:"0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.19)"},overlay:{zIndex:99,backgroundColor:"rgba(0, 0, 0, 0.4)"}},a=this.props.isSuccess?"checked.svg":"cancel.svg";return o.a.createElement(d,{isOpen:!0,contentLabel:"D2b Confirmation",style:t,onRequestClose:!this.props.close&&function(){return e.props.closeModal()},ariaHideApp:!1},o.a.createElement(S,{cName:"d-common-modal"},o.a.createElement(S,{cName:"d-common-modal-header"},o.a.createElement(C,{cName:"d-common-modal-title",title:this.props.title}),!this.props.close&&o.a.createElement(S,{onClick:function(){return e.props.closeModal()}},o.a.createElement(b.a,{icon:f.c}))),o.a.createElement(S,{cName:"d-common-modal-content text-center"},!this.props.close&&this.props.title||this.props.isConfirm?o.a.createElement(o.a.Fragment,null,o.a.createElement(M,{src:a,width:"70px",height:"70px"}),o.a.createElement(C,{title:this.props.confirmMsg})):this.props.children),this.props.isConfirm&&o.a.createElement(S,{cName:"footer text-center"},o.a.createElement(k,{onClick:function(){return e.props.closeModal(!0)}},o.a.createElement(b.a,{icon:f.b}),o.a.createElement(N,{title:"Yes"})),o.a.createElement(k,{onClick:function(){return e.props.closeModal()}},o.a.createElement(b.a,{icon:f.a}),o.a.createElement(N,{title:"No"}))),this.props.isDeleteMes&&o.a.createElement(S,{cName:"footer text-center"},o.a.createElement(k,{onClick:function(){return e.props.delData()}},"Ok"),o.a.createElement(k,{onClick:function(){return e.props.closeModal()}},"Cancel")),this.props.isMultipleLogin&&o.a.createElement(S,{cName:"footer text-center"},o.a.createElement(k,{onClick:function(){return e.props.multiplelogin()}},"Ok"))))}}]),a}(r.Component),_=(r.Component,function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(S,{cName:"lds-default"},o.a.createElement(S,null),o.a.createElement(S,null),o.a.createElement(S,null),o.a.createElement(S,null),o.a.createElement(S,null),o.a.createElement(S,null),o.a.createElement(S,null),o.a.createElement(S,null),o.a.createElement(S,null),o.a.createElement(S,null),o.a.createElement(S,null),o.a.createElement(S,null)),o.a.createElement(S,{cName:"d-common-spinner"}))}}]),a}(r.Component)),A=function(e){var t=e.columns.map((function(t,a){return o.a.createElement("th",{key:a},e.displayColumns[t])}));return o.a.createElement("thead",{className:"fixedHeader"},t,e.isEdit&&o.a.createElement("th",null,"Edit"),e.isDelete&&o.a.createElement("th",null,"Delete"))},R=function(e){if(0===e.data.length)return o.a.createElement("tbody",{className:"scrollContent"},o.a.createElement("tr",null,o.a.createElement("td",{className:"loading-data",colSpan:e.columns.length+2},e.isLoading?"Loading.....":" No Data Available ")));var t=e.data.map((function(t,a){return o.a.createElement(o.a.Fragment,null,o.a.createElement("tr",{key:a,className:e.rowHightlight?"table-highlight":""},e.columns.map((function(e,n){var r="userrole"===e?t[e].name:t[e];return"is_active"===e?o.a.createElement("td",{key:n},t.is_active?"Active":"In Active"):"offdays"===e?o.a.createElement("td",{key:n},t[e]+" "):o.a.createElement("td",{key:n},"sno"===e?a+1:r)})),o.a.createElement("td",null,o.a.createElement(C,{cName:"table-label "+(t.is_active?"":"label-readonly"),onClick:function(){return e.editRow(t,a)}},"Edit")),e.isDelete&&o.a.createElement("td",null,o.a.createElement(C,{cName:"table-label "+(!t.is_active||e.nDel&&t._id===e.nDel?"label-readonly":""),onClick:function(){return e.deleteRow(a)}},"Delete")),o.a.createElement("td",null,o.a.createElement(k,{cName:t.is_active?"":"readonly",onClick:function(){return e.editRow(t,a)}},"Edit")),e.isDelete&&o.a.createElement("td",null,o.a.createElement(k,{cName:t.is_active?"":"readonly",onClick:function(){return e.deleteRow(a)}},"Delete"))))}));return o.a.createElement("tbody",{className:"scrollContent"},t)},D=(r.Component,function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={heading:""},e}return Object(l.a)(a,[{key:"componentWillReceiveProps",value:function(){var e=this.props.children.find((function(e){return e.props.path===window.location.pathname}));e&&this.state.active!==e.props.title&&this.setState({heading:e.props.title})}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,this.state.heading&&o.a.createElement(S,{cName:"heading"},this.state.heading),o.a.createElement(S,{cName:"main-container"},o.a.createElement(S,{cName:"main-content"},this.props.children)))}}]),a}(r.Component)),L=a(22),$=a(18),P="LOGIN",F="LOGOUT",T="LOADER",I="CLEAR_DATA",q="CLEAR_DATA",z="REGISTER",U="http://localhost:8000/",W="login",Z="register",V=a(25),G=a.n(V),H=a(38),J=function(e,t,a,n){var r=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,s=r?e:U+e,i={"Content-Type":"application/json","access-token":E()};3===o?delete i["Content-Type"]:t=JSON.stringify(t);var c=fetch(s,{method:a,headers:i,body:t}).then((function(e){return n?e.blob():e.json()})).then((function(e){if(n){var t=window.URL.createObjectURL(e),a=document.createElement("a");a.download="d2b.csv",a.href=t,a.click(),a.href=""}return e})).catch((function(e){throw new Error("Something went wrong")}));return c},B=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"POST",n=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return function(){var r=Object(H.a)(G.a.mark((function r(o){var s,i,c,l,u,p;return G.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:i=!1,c=!1,l=!1,u=!0,r.t0=e,r.next=r.t0===P?4:r.t0===z?7:10;break;case 4:return s=W,l=!0,r.abrupt("break",12);case 7:return s=Z,l=!0,r.abrupt("break",12);case 10:return o({type:q}),r.abrupt("break",12);case 12:return r.prev=12,u&&o({type:T,payload:!0}),p=null,r.next=17,J(s,t,a,i,c,n);case 17:p=r.sent,console.log("response",p),403===p.status?o({type:F}):200===p.status?(l&&o({type:I}),o({type:e,payload:p})):o({type:e,payload:p}),u&&o({type:T,payload:!1}),r.next=27;break;case 23:r.prev=23,r.t1=r.catch(12),console.log(r.t1),u&&o({type:T,payload:!1});case 27:case"end":return r.stop()}}),r,null,[[12,23]])})));return function(e){return r.apply(this,arguments)}}()},X=function(e){return function(){var t=Object(H.a)(G.a.mark((function t(a){return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a({type:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},Y=function(e,t){return function(){var a=Object(H.a)(G.a.mark((function a(n){return G.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:n({type:e,payload:t});case 1:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},K=function(e){return function(t){switch(e){case"show":t({type:T,payload:!0});break;default:t({type:T,payload:!1})}}},Q=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:"",showError:!1,showModal:!1,modalMsg:"",showinnerModal:!1,options:[{option:"Select Role",value:""}],comp_id:"",showPass:!1,roles:{OrgAdmin:"/shop_list",ShopAdmin:"/counter_list",Cashier:"/queue"}},e.onChange=function(t){e.setState(Object(L.a)({},t.target.id,t.target.value))},e.onCheckChange=function(t){e.setState(Object(L.a)({},t.target.id,t.target.checked))},e.closeModal=function(){e.setState({showModal:!1,modalMsg:"",showError:!1})},e}return Object(l.a)(a,[{key:"onSubmit",value:function(e){e.preventDefault(),this.setState({showError:!0}),this.isValid()&&(this.props.callApi(P,{email:this.state.email,password:this.state.password}),this.setState({showError:!1,modalMsg:""}))}},{key:"isValid",value:function(){return g(this.state.email)&&g(this.state.password)}},{key:"componentDidMount",value:function(){this.props.auth&&this.props.auth.token&&this.props.history.push(this.state.roles[this.props.auth.data[0].role])}},{key:"componentWillReceiveProps",value:function(e){this.props.auth!==e.auth&&e.auth&&(99===e.auth.status?e.auth.data.length>1&&this.setState({showinnerModal:!0}):200===e.auth.status&&e.auth.data?(v(e.auth.data.token,this.state.isLocal),this.props.history.push(this.state.roles[e.auth.data.role_name])):e.auth.message&&this.setState({showModal:!0,modalMsg:e.auth.message,isSuccess:!1}))}},{key:"render",value:function(){var e=this;return o.a.createElement(S,{cName:"login"},this.state.showModal&&!this.props.loading&&o.a.createElement(x,{width:"400px",height:"200px",closeModal:this.closeModal,title:this.state.modalMsg,isSuccess:!this.state.showError}),o.a.createElement(S,{cName:"login-wrapper"},o.a.createElement(S,{cName:"login-wrapper-heading d-common-label"},"Login"),o.a.createElement("form",{onSubmit:function(t){return e.onSubmit(t)}},o.a.createElement(S,{cName:"row form-group"},o.a.createElement(O,{iType:"email",label:"Enter Email",id:"email",value:this.state.email,required:!0,onChange:this.onChange,showError:this.state.showError,autoFocus:!0})),o.a.createElement(S,{cName:"row form-group"},o.a.createElement(O,{type:"password",label:"Enter Password",id:"password",value:this.state.password,required:!0,onChange:this.onChange,showError:this.state.showError})),o.a.createElement(S,{cName:"row submit-row"},o.a.createElement(k,{cName:"form-control submit-button-md",title:"Login"})))))}}]),a}(r.Component),ee=Object($.b)((function(e){return{auth:e.store.auth,loading:e.store.loader}}),n)(Object(h.g)(Q)),te=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={first_name:"",last_name:"",email:"",password:"",showError:!1,showModal:!1,modalMsg:"",showinnerModal:!1,options:[{option:"Select Role",value:""}],comp_id:"",showPass:!1,roles:{OrgAdmin:"/shop_list",ShopAdmin:"/counter_list",Cashier:"/queue"}},e.onChange=function(t){e.setState(Object(L.a)({},t.target.id,t.target.value))},e.onCheckChange=function(t){e.setState(Object(L.a)({},t.target.id,t.target.checked))},e.closeModal=function(){e.setState({showModal:!1,modalMsg:"",showError:!1})},e}return Object(l.a)(a,[{key:"onSubmit",value:function(e){e.preventDefault(),this.setState({showError:!0}),this.isValid()&&(this.props.callApi(z,{email:this.state.email,password:this.state.password,first_name:this.state.first_name,last_name:this.state.last_name}),this.setState({showError:!1,modalMsg:""}))}},{key:"isValid",value:function(){return g(this.state.email)&&g(this.state.password)}},{key:"componentDidMount",value:function(){this.props.auth&&this.props.auth.token&&this.props.history.push(this.state.roles[this.props.auth.data[0].role])}},{key:"componentWillReceiveProps",value:function(e){this.props.auth!==e.auth&&e.auth&&(99===e.auth.status?e.auth.data.length>1&&this.setState({showinnerModal:!0}):200===e.auth.status&&e.auth.data?(v(e.auth.data.token,this.state.isLocal),this.props.history.push(this.state.roles[e.auth.data.role_name])):e.auth.message&&this.setState({showModal:!0,modalMsg:e.auth.message,isSuccess:!1}))}},{key:"render",value:function(){var e=this;return o.a.createElement(S,{cName:"login"},this.state.showModal&&!this.props.loading&&o.a.createElement(x,{width:"400px",height:"200px",closeModal:this.closeModal,title:this.state.modalMsg,isSuccess:!this.state.showError}),o.a.createElement(S,{cName:"login-wrapper"},o.a.createElement(S,{cName:"login-wrapper-heading d-common-label"},"Register"),o.a.createElement("form",{onSubmit:function(t){return e.onSubmit(t)}},o.a.createElement(S,{cName:"row form-group"},o.a.createElement(O,{type:"text",label:"First Name",id:"first_name",value:this.state.first_name,required:!0,onChange:this.onChange,showError:this.state.showError,autoFocus:!0})),o.a.createElement(S,{cName:"row form-group"},o.a.createElement(O,{type:"text",label:"Last Name",id:"last_name",value:this.state.last_name,required:!0,onChange:this.onChange,showError:this.state.showError,autoFocus:!0})),o.a.createElement(S,{cName:"row form-group"},o.a.createElement(O,{iType:"email",label:"Enter Email",id:"email",value:this.state.email,required:!0,onChange:this.onChange,showError:this.state.showError,autoFocus:!0})),o.a.createElement(S,{cName:"row form-group"},o.a.createElement(O,{type:"password",label:"Enter Password",id:"password",value:this.state.password,required:!0,onChange:this.onChange,showError:this.state.showError})),o.a.createElement(S,{cName:"row submit-row"},o.a.createElement(k,{cName:"form-control submit-button-md",title:"Register"})))))}}]),a}(r.Component),ae=Object($.b)((function(e){return{auth:e.store.auth,loading:e.store.loader}}),n)(Object(h.g)(te)),ne=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={menu:[],active:"/counter_list"},e.logout=function(){e.setState({menu:[],active:""}),w(),e.props.updateReducer(F)},e.onClick=function(t){"/login"===t.target.id?e.logout():e.setState({active:t.target.id})},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;if(E()&&this.props.auth&&this.props.auth.data){var t=y.filter((function(t){return-1!==t.when.indexOf(e.props.auth.data.role_name)}));t.length&&this.setState({menu:t,active:t[0].url})}else this.props.updateReducer(I)}},{key:"componentWillReceiveProps",value:function(e){if(this.props.auth!==e.auth&&e.auth&&e.auth.data){var t=y.filter((function(t){return-1!==t.when.indexOf(e.auth.data.role_name)}));t.length&&this.setState({menu:t,active:t[0].url})}}},{key:"render",value:function(){var e=this,t=-1!=window.location.href.indexOf("login");return o.a.createElement(S,{cName:"login-header"},o.a.createElement(S,{cName:"row"},o.a.createElement(S,{cName:"links menu-links app-title"},0===this.state.menu.length&&(t?o.a.createElement(j,{cName:"active",to:"/register",title:"Register"}):o.a.createElement(j,{cName:"active",to:"/login",title:"Login"})),this.state.menu.map((function(t,a){return o.a.createElement(j,{key:a,cName:e.state.active===t.url?"active":"",id:t.url,to:t.url,title:t.option,onClick:e.onClick})})))))}}]),a}(r.Component),re=Object($.b)((function(e){return{auth:e.store.auth}}),n)(Object(h.g)(ne)),oe=function(){return o.a.createElement(S,{cName:"login-footer"},o.a.createElement(S,{cName:"row app-title"},"JioHaptik Assignment"))},se=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.updateReducer(T,!1)}},{key:"render",value:function(){return o.a.createElement(S,{className:"App"},this.props.showLoader&&o.a.createElement(_,null),o.a.createElement(S,{cName:"d-common-app"},o.a.createElement(re,null),o.a.createElement(S,{cName:"content"},E()&&this.props.auth&&200===this.props.auth.status?o.a.createElement(h.d,null,o.a.createElement(D,null,o.a.createElement(h.a,{from:"*",to:"/"})),o.a.createElement(h.a,{from:"*",to:"/"})):o.a.createElement(h.d,null,o.a.createElement(D,null,o.a.createElement(h.b,{path:"/login",component:ee}),o.a.createElement(h.b,{path:"/register",component:ae})))),o.a.createElement(oe,null)))}}]),a}(r.Component),ie=Object($.b)((function(e){return{auth:e.store.auth,showLoader:e.store.loader}}),n)(Object(h.g)(se));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ce=a(87),le=a(17),ue=a(54),pe=a(88),he=a.n(pe),me=a(89),de=a.n(me),fe=a(19),be={loader:!1,auth:{data:[],message:null,status:null}},ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return Object(fe.a)(Object(fe.a)({},e),{},{loader:t.payload});case P:return Object(fe.a)(Object(fe.a)({},e),{},{auth:t.payload});case F:return Object(fe.a)(Object(fe.a)({},e),{},{auth:be.auth});case I:return Object(fe.a)(Object(fe.a)({},e),be);default:return e}},Ee=a(90),ve=Object(le.c)({store:ge}),we={key:"root",storage:he.a,stateReconciler:de.a,blacklist:["utilityLayout","serverStatus"]},ye=Object(ue.a)(we,ve),ke=window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_||le.d,Oe=Object(le.e)(ye,ke(Object(le.a)((function(e){return function(e){return function(t){return e(t)}}}),Ee.a))),Ce=Object(ue.b)(Oe),je=o.a.createElement(m.a,null,o.a.createElement($.a,{store:Oe},o.a.createElement(ce.PersistGate,{persistor:Ce},o.a.createElement(ie,null))));i.a.render(je,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},91:function(e,t,a){e.exports=a(203)},96:function(e,t,a){}},[[91,1,2]]]);
//# sourceMappingURL=main.894e92bd.chunk.js.map