(this.webpackJsonpsurreal=this.webpackJsonpsurreal||[]).push([[10],{105:function(e,a,t){"use strict";var n=t(1),s=t(3),o=t(0),i=t.n(o),r=t(4),l=t.n(r),c=t(33),u=t.n(c),d=t(32),p={light:l.a.bool,dark:l.a.bool,full:l.a.bool,fixed:l.a.string,sticky:l.a.string,color:l.a.string,role:l.a.string,tag:d.tagPropType,className:l.a.string,cssModule:l.a.object,expand:l.a.oneOfType([l.a.bool,l.a.string])},v=function(e){var a,t=e.expand,o=e.className,r=e.cssModule,l=e.light,c=e.dark,p=e.fixed,v=e.sticky,g=e.color,f=e.tag,h=Object(s.a)(e,["expand","className","cssModule","light","dark","fixed","sticky","color","tag"]),m=Object(d.mapToCssModules)(u()(o,"navbar",function(e){return!1!==e&&(!0===e||"xs"===e?"navbar-expand":"navbar-expand-"+e)}(t),((a={"navbar-light":l,"navbar-dark":c})["bg-"+g]=g,a["fixed-"+p]=p,a["sticky-"+v]=v,a)),r);return i.a.createElement(f,Object(n.a)({},h,{className:m}))};v.propTypes=p,v.defaultProps={tag:"nav",expand:!1},a.a=v},106:function(e,a,t){"use strict";var n=t(1),s=t(3),o=t(0),i=t.n(o),r=t(4),l=t.n(r),c=t(33),u=t.n(c),d=t(32),p={tag:d.tagPropType,className:l.a.string,cssModule:l.a.object},v=function(e){var a=e.className,t=e.cssModule,o=e.tag,r=Object(s.a)(e,["className","cssModule","tag"]),l=Object(d.mapToCssModules)(u()(a,"navbar-brand"),t);return i.a.createElement(o,Object(n.a)({},r,{className:l}))};v.propTypes=p,v.defaultProps={tag:"a"},a.a=v},107:function(e,a,t){"use strict";var n=t(1),s=t(3),o=t(0),i=t.n(o),r=t(4),l=t.n(r),c=t(33),u=t.n(c),d=t(32),p={tag:d.tagPropType,type:l.a.string,className:l.a.string,cssModule:l.a.object,children:l.a.node},v=function(e){var a=e.className,t=e.cssModule,o=e.children,r=e.tag,l=Object(s.a)(e,["className","cssModule","children","tag"]),c=Object(d.mapToCssModules)(u()(a,"navbar-toggler"),t);return i.a.createElement(r,Object(n.a)({"aria-label":"Toggle navigation"},l,{className:c}),o||i.a.createElement("span",{className:Object(d.mapToCssModules)("navbar-toggler-icon",t)}))};v.propTypes=p,v.defaultProps={tag:"button",type:"button"},a.a=v},108:function(e,a,t){"use strict";var n=t(1),s=t(3),o=t(0),i=t.n(o),r=t(4),l=t.n(r),c=t(33),u=t.n(c),d=t(32),p={tabs:l.a.bool,pills:l.a.bool,vertical:l.a.oneOfType([l.a.bool,l.a.string]),horizontal:l.a.string,justified:l.a.bool,fill:l.a.bool,navbar:l.a.bool,card:l.a.bool,tag:d.tagPropType,className:l.a.string,cssModule:l.a.object},v=function(e){var a=e.className,t=e.cssModule,o=e.tabs,r=e.pills,l=e.vertical,c=e.horizontal,p=e.justified,v=e.fill,g=e.navbar,f=e.card,h=e.tag,m=Object(s.a)(e,["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"]),b=Object(d.mapToCssModules)(u()(a,g?"navbar-nav":"nav",!!c&&"justify-content-"+c,function(e){return!1!==e&&(!0===e||"xs"===e?"flex-column":"flex-"+e+"-column")}(l),{"nav-tabs":o,"card-header-tabs":f&&o,"nav-pills":r,"card-header-pills":f&&r,"nav-justified":p,"nav-fill":v}),t);return i.a.createElement(h,Object(n.a)({},m,{className:b}))};v.propTypes=p,v.defaultProps={tag:"ul",vertical:!1},a.a=v},109:function(e,a,t){"use strict";var n=t(1),s=t(3),o=t(0),i=t.n(o),r=t(4),l=t.n(r),c=t(33),u=t.n(c),d=t(32),p={tag:d.tagPropType,active:l.a.bool,className:l.a.string,cssModule:l.a.object},v=function(e){var a=e.className,t=e.cssModule,o=e.active,r=e.tag,l=Object(s.a)(e,["className","cssModule","active","tag"]),c=Object(d.mapToCssModules)(u()(a,"nav-item",!!o&&"active"),t);return i.a.createElement(r,Object(n.a)({},l,{className:c}))};v.propTypes=p,v.defaultProps={tag:"li"},a.a=v},110:function(e,a,t){"use strict";var n=t(1),s=t(3),o=t(35),i=t(2),r=t(0),l=t.n(r),c=t(4),u=t.n(c),d=t(33),p=t.n(d),v=t(32),g={tag:v.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),disabled:u.a.bool,active:u.a.bool,className:u.a.string,cssModule:u.a.object,onClick:u.a.func,href:u.a.any},f=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(o.a)(t)),t}Object(i.a)(a,e);var t=a.prototype;return t.onClick=function(e){this.props.disabled?e.preventDefault():("#"===this.props.href&&e.preventDefault(),this.props.onClick&&this.props.onClick(e))},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,o=e.active,i=e.tag,r=e.innerRef,c=Object(s.a)(e,["className","cssModule","active","tag","innerRef"]),u=Object(v.mapToCssModules)(p()(a,"nav-link",{disabled:c.disabled,active:o}),t);return l.a.createElement(i,Object(n.a)({},c,{ref:r,onClick:this.onClick,className:u}))},a}(l.a.Component);f.propTypes=g,f.defaultProps={tag:"a"},a.a=f},198:function(e,a,t){e.exports=t.p+"static/media/logolight.2c738040.svg"},199:function(e,a,t){e.exports=t.p+"static/media/logodark.3a6f4396.svg"},434:function(e,a,t){"use strict";t.r(a);var n=t(8),s=t(9),o=t(11),i=t(10),r=t(0),l=t.n(r),c=t(105),u=t(44),d=t(106),p=t(107),v=t(83),g=t(108),f=t(109),h=t(110),m=t(14),b=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(e){var s;return Object(n.a)(this,t),(s=a.call(this,e)).scrollSection=function(){var e;s.scrollTargetIds.forEach((function(a,t){e=document.getElementById(a).offsetTop-(s.headerBackground?document.querySelector("div[data-nav='list']").scrollHeight:0),window.pageYOffset>=e&&window.pageYOffset<e+document.getElementById(a).scrollHeight?(s.getNavLinkElement(a).classList.add(s.activeNavClass),s.getNavLinkElement(a).parentNode.classList.add(s.activeNavClass),s.clearOtherNavLinkActiveStyle(a)):(s.getNavLinkElement(a).classList.remove(s.activeNavClass),s.getNavLinkElement(a).parentNode.classList.remove(s.activeNavClass)),window.innerHeight+window.pageYOffset>=document.body.scrollHeight&&t===s.scrollTargetIds.length-1&&(s.getNavLinkElement(a).classList.add(s.activeNavClass),s.getNavLinkElement(a).parentNode.classList.add(s.activeNavClass),s.clearOtherNavLinkActiveStyle(a))}))},s.props=e,s.scrollTargetIds=s.props.scrollTargetIds,s.activeNavClass=s.props.activeNavClass,s.scrollDuration=Number(s.props.scrollDuration)||1e3,s.headerBackground="true"===s.props.headerBackground,s.props.router&&"HashRouter"===s.props.router?(s.homeDefaultLink="#/",s.hashIdentifier="#/#"):(s.homeDefaultLink="/",s.hashIdentifier="#"),s.scrollSection.bind(Object(m.a)(s)),s}return Object(s.a)(t,[{key:"easeInOutQuad",value:function(e,a,t,n){return(e/=n/2)<1?t/2*e*e+a:-t/2*(--e*(e-2)-1)+a}},{key:"scrollTo",value:function(e,a,t){var n=this,s=a-e,o=0;!function a(){o+=10;var i=n.easeInOutQuad(o,e,s,t);window.scrollTo(0,i),o<t&&setTimeout(a,10)}()}},{key:"getNavLinkElement",value:function(e){return document.querySelector("a[href='".concat(this.hashIdentifier).concat(e,"']"))}},{key:"getNavToSectionID",value:function(e){return e.includes(this.hashIdentifier)?e.replace(this.hashIdentifier,""):""}},{key:"componentDidMount",value:function(){var e=this;document.querySelector("a[href='".concat(this.homeDefaultLink,"']"))&&document.querySelector("a[href='".concat(this.homeDefaultLink,"']")).addEventListener("click",(function(a){a.preventDefault(),e.scrollTo(window.pageYOffset,0,e.scrollDuration),window.location.hash=""})),document.querySelector("div[data-nav='list']").querySelectorAll("a").forEach((function(a){a.addEventListener("click",(function(t){t.preventDefault();var n=e.getNavToSectionID(a.getAttribute("href"));if(n){var s=document.getElementById(n).offsetTop-(e.headerBackground?document.querySelector("div[data-nav='list']").scrollHeight:0);e.scrollTo(window.pageYOffset,s,e.scrollDuration)}else e.scrollTo(window.pageYOffset,0,e.scrollDuration)}))})),window.addEventListener("scroll",this.scrollSection,!0)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollSection,!0)}},{key:"clearOtherNavLinkActiveStyle",value:function(e){var a=this;this.scrollTargetIds.forEach((function(t,n){t!==e&&(a.getNavLinkElement(t).classList.remove(a.activeNavClass),a.getNavLinkElement(t).parentNode.classList.remove(a.activeNavClass))}))}},{key:"render",value:function(){return l.a.createElement("div",{"data-nav":"list",className:this.props.className},this.props.children)}}]),t}(r.Component),E=t(198),N=t.n(E),O=t(199),y=t.n(O),T=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(e){var s;return Object(n.a)(this,t),(s=a.call(this,e)).toggle=function(){s.setState({isOpenMenu:!s.state.isOpenMenu})},s.state={isOpenMenu:!1},s}return Object(s.a)(t,[{key:"render",value:function(){var e=this.props.navItems.map((function(e){return e.idnm}));return l.a.createElement(l.a.Fragment,null,l.a.createElement(c.a,{expand:"lg",fixed:"top",className:"navbar-custom sticky sticky-dark "+this.props.navClass},l.a.createElement(u.a,null,l.a.createElement(d.a,{className:"logo text-uppercase",href:"/"},!0===this.props.imglight?l.a.createElement("img",{src:N.a,alt:"",className:"logo-light",height:"50"}):l.a.createElement("img",{src:y.a,alt:"",className:"logo-dark",height:"55"})),l.a.createElement(p.a,{onClick:this.toggle},l.a.createElement("i",{className:"mdi mdi-menu"})),l.a.createElement(v.a,{id:"navbarCollapse",isOpen:this.state.isOpenMenu,navbar:!0},l.a.createElement(b,{scrollTargetIds:e,scrollDuration:"800",headerBackground:"true",activeNavClass:"active",className:"navbar-collapse"},l.a.createElement(g.a,{navbar:!0,className:"ml-auto navbar-center",id:"mySidenav"},this.props.navItems.map((function(e,a){return l.a.createElement(f.a,{key:a},l.a.createElement(h.a,{href:"#"+e.idnm,className:"Home"===e.navheading?"active":""}," ",e.navheading))}))))))))}}]),t}(r.Component);a.default=T},83:function(e,a,t){"use strict";var n,s=t(1),o=t(3),i=t(35),r=t(2),l=t(37),c=t(0),u=t.n(c),d=t(4),p=t.n(d),v=t(33),g=t.n(v),f=t(66),h=t(32),m=Object(l.a)({},f.Transition.propTypes,{isOpen:p.a.bool,children:p.a.oneOfType([p.a.arrayOf(p.a.node),p.a.node]),tag:h.tagPropType,className:p.a.node,navbar:p.a.bool,cssModule:p.a.object,innerRef:p.a.oneOfType([p.a.func,p.a.string,p.a.object])}),b=Object(l.a)({},f.Transition.defaultProps,{isOpen:!1,appear:!1,enter:!0,exit:!0,tag:"div",timeout:h.TransitionTimeouts.Collapse}),E=((n={})[h.TransitionStatuses.ENTERING]="collapsing",n[h.TransitionStatuses.ENTERED]="collapse show",n[h.TransitionStatuses.EXITING]="collapsing",n[h.TransitionStatuses.EXITED]="collapse",n);function N(e){return e.scrollHeight}var O=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={height:null},["onEntering","onEntered","onExit","onExiting","onExited"].forEach((function(e){t[e]=t[e].bind(Object(i.a)(t))})),t}Object(r.a)(a,e);var t=a.prototype;return t.onEntering=function(e,a){this.setState({height:N(e)}),this.props.onEntering(e,a)},t.onEntered=function(e,a){this.setState({height:null}),this.props.onEntered(e,a)},t.onExit=function(e){this.setState({height:N(e)}),this.props.onExit(e)},t.onExiting=function(e){e.offsetHeight;this.setState({height:0}),this.props.onExiting(e)},t.onExited=function(e){this.setState({height:null}),this.props.onExited(e)},t.render=function(){var e=this,a=this.props,t=a.tag,n=a.isOpen,i=a.className,r=a.navbar,c=a.cssModule,d=a.children,p=(a.innerRef,Object(o.a)(a,["tag","isOpen","className","navbar","cssModule","children","innerRef"])),v=this.state.height,m=Object(h.pick)(p,h.TransitionPropTypeKeys),b=Object(h.omit)(p,h.TransitionPropTypeKeys);return u.a.createElement(f.Transition,Object(s.a)({},m,{in:n,onEntering:this.onEntering,onEntered:this.onEntered,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}),(function(a){var n=function(e){return E[e]||"collapse"}(a),o=Object(h.mapToCssModules)(g()(i,n,r&&"navbar-collapse"),c),p=null===v?null:{height:v};return u.a.createElement(t,Object(s.a)({},b,{style:Object(l.a)({},b.style,{},p),className:o,ref:e.props.innerRef}),d)}))},a}(c.Component);O.propTypes=m,O.defaultProps=b,a.a=O}}]);
//# sourceMappingURL=10.5fe288d7.chunk.js.map