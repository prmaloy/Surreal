(this.webpackJsonpsurreal=this.webpackJsonpsurreal||[]).push([[8],{237:function(e,t,n){e.exports=n.p+"static/media/img-8.3fd0f477.jpg"},238:function(e,t,n){e.exports=n.p+"static/media/img-10.34bee1aa.jpg"},239:function(e,t,n){e.exports=n.p+"static/media/img-6.c512e8fb.jpg"},36:function(e,t,n){"use strict";var a=n(8),s=n(9),i=n(11),r=n(10),o=n(0),c=n.n(o),l=n(41),u=n(42),d=function(e){Object(i.a)(n,e);var t=Object(r.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(l.a,null,c.a.createElement(u.a,{lg:"12"},c.a.createElement("div",{className:"header-title text-center"},this.props.subtitle&&c.a.createElement("p",{className:"text-uppercase text-muted mb-2"},this.props.subtitle),c.a.createElement("h2",{className:!0===this.props.isLight?"text-uppercase text-white":"text-uppercase"},this.props.title),c.a.createElement("div",{className:"title-border mt-3"}),c.a.createElement("p",{className:!0===this.props.isLight?"title-desc text-white-50 mt-3":"title-desc text-muted mt-3"},this.props.desc)))))}}]),n}(o.Component);t.a=d},41:function(e,t,n){"use strict";var a=n(1),s=n(3),i=n(0),r=n.n(i),o=n(4),c=n.n(o),l=n(33),u=n.n(l),d=n(32),h=c.a.oneOfType([c.a.number,c.a.string]),m={tag:d.tagPropType,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool,xs:h,sm:h,md:h,lg:h,xl:h},p={tag:"div",widths:["xs","sm","md","lg","xl"]},v=function(e){var t=e.className,n=e.cssModule,i=e.noGutters,o=e.tag,c=e.form,l=e.widths,h=Object(s.a)(e,["className","cssModule","noGutters","tag","form","widths"]),m=[];l.forEach((function(t,n){var a=e[t];if(delete h[t],a){var s=!n;m.push(s?"row-cols-"+a:"row-cols-"+t+"-"+a)}}));var p=Object(d.mapToCssModules)(u()(t,i?"no-gutters":null,c?"form-row":"row",m),n);return r.a.createElement(o,Object(a.a)({},h,{className:p}))};v.propTypes=m,v.defaultProps=p,t.a=v},42:function(e,t,n){"use strict";var a=n(1),s=n(3),i=n(0),r=n.n(i),o=n(4),c=n.n(o),l=n(33),u=n.n(l),d=n(32),h=c.a.oneOfType([c.a.number,c.a.string]),m=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:h,offset:h})]),p={tag:d.tagPropType,xs:m,sm:m,md:m,lg:m,xl:m,className:c.a.string,cssModule:c.a.object,widths:c.a.array},v={tag:"div",widths:["xs","sm","md","lg","xl"]},f=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},E=function(e){var t=e.className,n=e.cssModule,i=e.widths,o=e.tag,c=Object(s.a)(e,["className","cssModule","widths","tag"]),l=[];i.forEach((function(t,a){var s=e[t];if(delete c[t],s||""===s){var i=!a;if(Object(d.isObject)(s)){var r,o=i?"-":"-"+t+"-",h=f(i,t,s.size);l.push(Object(d.mapToCssModules)(u()(((r={})[h]=s.size||""===s.size,r["order"+o+s.order]=s.order||0===s.order,r["offset"+o+s.offset]=s.offset||0===s.offset,r)),n))}else{var m=f(i,t,s);l.push(m)}}})),l.length||l.push("col");var h=Object(d.mapToCssModules)(u()(t,l),n);return r.a.createElement(o,Object(a.a)({},c,{className:h}))};E.propTypes=p,E.defaultProps=v,t.a=E},429:function(e,t,n){"use strict";n.r(t);var a=n(8),s=n(9),i=n(14),r=n(11),o=n(10),c=n(0),l=n.n(c),u=n(55),d=n(44),h=n(41),m=n(42),p=n(71),v=n(84),f=n(72),E=n(36),b=n(237),g=n.n(b),x=n(238),y=n.n(x),T=n(239),I=n.n(T),j=function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(e){var s;return Object(a.a)(this,n),(s=t.call(this,e)).state={items:[{id:1,image:g.a,title:"Brandon Patchet",subtitle:"Accountant",desc:"Traveling - it leaves you speechless, then turns you into a story teller"},{id:2,image:y.a,title:"Tim Walance",subtitle:"Entrepreneur",desc:"My mother wanted to take a rare vacation and Anna helped us put an itinerary together that worked for us.  To quote my mother 'She thought of everything!'"},{id:3,image:I.a,title:"Chad Mooney",subtitle:"Business Owner",desc:"The journey changes you. It leaves marks on your memory, on your consciousness, on your heart, and on your body. You take something with you. Hopefully, you leave something good behind."}],activeIndex:0},s.onExiting=s.onExiting.bind(Object(i.a)(s)),s.onExited=s.onExited.bind(Object(i.a)(s)),s.next=s.next.bind(Object(i.a)(s)),s.previous=s.previous.bind(Object(i.a)(s)),s.goToIndex=s.goToIndex.bind(Object(i.a)(s)),s}return Object(s.a)(n,[{key:"onExiting",value:function(){this.animating=!0}},{key:"onExited",value:function(){this.animating=!1}},{key:"next",value:function(){if(!this.animating){var e=this.state.activeIndex===this.state.items.length-1?0:this.state.activeIndex+1;this.setState({activeIndex:e})}}},{key:"previous",value:function(){if(!this.animating){var e=0===this.state.activeIndex?this.state.items.length-1:this.state.activeIndex-1;this.setState({activeIndex:e})}}},{key:"goToIndex",value:function(e){this.animating||this.setState({activeIndex:e})}},{key:"componentDidMount",value:function(){for(var e=document.getElementsByClassName("carousel-indicators")[0].getElementsByTagName("li"),t=[],n=0;n<this.state.items.length;n++)t[n]=document.createElement("img"),t[n].className="testi-img img-fluid rounded mx-auto d-block",t[n].src=this.state.items[n].image,e[n].appendChild(t[n])}},{key:"render",value:function(){var e=this,t=this.state.items.map((function(t,n){return l.a.createElement(u.a,{key:n+1,onExiting:e.onExiting(),onExited:e.onExited()},l.a.createElement("div",{className:"testimonial-box text-center mt-4"},l.a.createElement("div",{className:"testimonial-title p-2 rounded"},l.a.createElement("p",{className:" text-white mt-4"},t.desc)),l.a.createElement("i",{className:"mdi mdi-format-quote-close text-primary display-3"}),l.a.createElement("h5",{className:"text-white f-18"},t.title),l.a.createElement("p",{className:"text-white-50 mb-0"},t.subtitle)))}));return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"section bg-testimonial",id:"testimonial"},l.a.createElement("div",{className:"bg-overlay"}),l.a.createElement(d.a,null,l.a.createElement(E.a,{title:"TESTIMONIALS",desc:"We believe that travel should be an experience. A journey that will enrich your life, open your eyes to diversity and leave you fulfilled.",isLight:!0}),l.a.createElement(h.a,{className:"mt-5 pt-2"},l.a.createElement(m.a,{lg:12},l.a.createElement(p.a,{activeIndex:this.state.activeIndex,next:this.next,previous:this.previous},l.a.createElement(v.a,{items:this.state.items,activeIndex:this.state.activeIndex,onClickHandler:this.goToIndex}),t,l.a.createElement(f.a,{direction:"prev",onClickHandler:this.previous},l.a.createElement("span",{className:"carousel-control-prev-icon"}),l.a.createElement("span",{className:"sr-only"},"Previous")),l.a.createElement(f.a,{direction:"next",onClickHandler:this.next},l.a.createElement("span",{className:"carousel-control-next-icon"}),l.a.createElement("span",{className:"sr-only"},"Next"))))))))}}]),n}(c.Component);t.default=j},55:function(e,t,n){"use strict";var a=n(37),s=n(1),i=n(3),r=n(35),o=n(2),c=n(0),l=n.n(c),u=n(4),d=n.n(u),h=n(33),m=n.n(h),p=n(66),v=n(32),f=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={startAnimation:!1},n.onEnter=n.onEnter.bind(Object(r.a)(n)),n.onEntering=n.onEntering.bind(Object(r.a)(n)),n.onExit=n.onExit.bind(Object(r.a)(n)),n.onExiting=n.onExiting.bind(Object(r.a)(n)),n.onExited=n.onExited.bind(Object(r.a)(n)),n}Object(o.a)(t,e);var n=t.prototype;return n.onEnter=function(e,t){this.setState({startAnimation:!1}),this.props.onEnter(e,t)},n.onEntering=function(e,t){var n=e.offsetHeight;return this.setState({startAnimation:!0}),this.props.onEntering(e,t),n},n.onExit=function(e){this.setState({startAnimation:!1}),this.props.onExit(e)},n.onExiting=function(e){this.setState({startAnimation:!0}),e.dispatchEvent(new CustomEvent("slide.bs.carousel")),this.props.onExiting(e)},n.onExited=function(e){e.dispatchEvent(new CustomEvent("slid.bs.carousel")),this.props.onExited(e)},n.render=function(){var e=this,t=this.props,n=t.in,a=t.children,r=t.cssModule,o=t.slide,c=t.tag,u=t.className,d=Object(i.a)(t,["in","children","cssModule","slide","tag","className"]);return l.a.createElement(p.Transition,Object(s.a)({},d,{enter:o,exit:o,in:n,onEnter:this.onEnter,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}),(function(t){var n=e.context.direction,s=t===v.TransitionStatuses.ENTERED||t===v.TransitionStatuses.EXITING,i=(t===v.TransitionStatuses.ENTERING||t===v.TransitionStatuses.EXITING)&&e.state.startAnimation&&("right"===n?"carousel-item-left":"carousel-item-right"),o=t===v.TransitionStatuses.ENTERING&&("right"===n?"carousel-item-next":"carousel-item-prev"),d=Object(v.mapToCssModules)(m()(u,"carousel-item",s&&"active",i,o),r);return l.a.createElement(c,{className:d},a)}))},t}(l.a.Component);f.propTypes=Object(a.a)({},p.Transition.propTypes,{tag:v.tagPropType,in:d.a.bool,cssModule:d.a.object,children:d.a.node,slide:d.a.bool,className:d.a.string}),f.defaultProps=Object(a.a)({},p.Transition.defaultProps,{tag:"div",timeout:v.TransitionTimeouts.Carousel,slide:!0}),f.contextTypes={direction:d.a.string},t.a=f},71:function(e,t,n){"use strict";var a=n(35),s=n(2),i=n(0),r=n.n(i),o=n(4),c=n.n(o),l=n(33),u=n.n(l),d=n(55),h=n(32),m=function(e){function t(t){var n;return(n=e.call(this,t)||this).handleKeyPress=n.handleKeyPress.bind(Object(a.a)(n)),n.renderItems=n.renderItems.bind(Object(a.a)(n)),n.hoverStart=n.hoverStart.bind(Object(a.a)(n)),n.hoverEnd=n.hoverEnd.bind(Object(a.a)(n)),n.handleTouchStart=n.handleTouchStart.bind(Object(a.a)(n)),n.handleTouchEnd=n.handleTouchEnd.bind(Object(a.a)(n)),n.touchStartX=0,n.touchStartY=0,n.state={activeIndex:n.props.activeIndex,direction:"right",indicatorClicked:!1},n}Object(s.a)(t,e);var n=t.prototype;return n.getChildContext=function(){return{direction:this.state.direction}},n.componentDidMount=function(){"carousel"===this.props.ride&&this.setInterval(),document.addEventListener("keyup",this.handleKeyPress)},t.getDerivedStateFromProps=function(e,t){var n=null,a=t.activeIndex,s=t.direction,i=t.indicatorClicked;return e.activeIndex!==a&&(e.activeIndex===a+1?s="right":e.activeIndex===a-1?s="left":e.activeIndex<a?s=i?"left":"right":e.activeIndex!==a&&(s=i?"right":"left"),n={activeIndex:e.activeIndex,direction:s,indicatorClicked:!1}),n},n.componentDidUpdate=function(e,t){t.activeIndex!==this.state.activeIndex&&this.setInterval(this.props)},n.componentWillUnmount=function(){this.clearInterval(),document.removeEventListener("keyup",this.handleKeyPress)},n.setInterval=function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){void 0===e&&(e=this.props),this.clearInterval(),e.interval&&(this.cycleInterval=setInterval((function(){e.next()}),parseInt(e.interval,10)))})),n.clearInterval=function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){clearInterval(this.cycleInterval)})),n.hoverStart=function(){var e;("hover"===this.props.pause&&this.clearInterval(),this.props.mouseEnter)&&(e=this.props).mouseEnter.apply(e,arguments)},n.hoverEnd=function(){var e;("hover"===this.props.pause&&this.setInterval(),this.props.mouseLeave)&&(e=this.props).mouseLeave.apply(e,arguments)},n.handleKeyPress=function(e){this.props.keyboard&&(37===e.keyCode?this.props.previous():39===e.keyCode&&this.props.next())},n.handleTouchStart=function(e){this.props.enableTouch&&(this.touchStartX=e.changedTouches[0].screenX,this.touchStartY=e.changedTouches[0].screenY)},n.handleTouchEnd=function(e){if(this.props.enableTouch){var t=e.changedTouches[0].screenX,n=e.changedTouches[0].screenY,a=Math.abs(this.touchStartX-t);a<Math.abs(this.touchStartY-n)||a<40||(t<this.touchStartX?this.props.next():this.props.previous())}},n.renderItems=function(e,t){var n=this,a=this.props.slide;return r.a.createElement("div",{className:t},e.map((function(e,t){var s=t===n.state.activeIndex;return r.a.cloneElement(e,{in:s,slide:a})})))},n.render=function(){var e=this,t=this.props,n=t.cssModule,a=t.slide,s=t.className,i=Object(h.mapToCssModules)(u()(s,"carousel",a&&"slide"),n),o=Object(h.mapToCssModules)(u()("carousel-inner"),n),c=this.props.children.filter((function(e){return null!==e&&void 0!==e&&"boolean"!==typeof e}));if(c.every((function(e){return e.type===d.a})))return r.a.createElement("div",{className:i,onMouseEnter:this.hoverStart,onMouseLeave:this.hoverEnd},this.renderItems(c,o));if(c[0]instanceof Array){var l=c[0],m=c[1],p=c[2];return r.a.createElement("div",{className:i,onMouseEnter:this.hoverStart,onMouseLeave:this.hoverEnd},this.renderItems(l,o),m,p)}var v=c[0],f=r.a.cloneElement(v,{onClickHandler:function(t){"function"===typeof v.props.onClickHandler&&e.setState({indicatorClicked:!0},(function(){return v.props.onClickHandler(t)}))}}),E=c[1],b=c[2],g=c[3];return r.a.createElement("div",{className:i,onMouseEnter:this.hoverStart,onMouseLeave:this.hoverEnd,onTouchStart:this.handleTouchStart,onTouchEnd:this.handleTouchEnd},f,this.renderItems(E,o),b,g)},t}(r.a.Component);m.propTypes={activeIndex:c.a.number,next:c.a.func.isRequired,previous:c.a.func.isRequired,keyboard:c.a.bool,pause:c.a.oneOf(["hover",!1]),ride:c.a.oneOf(["carousel"]),interval:c.a.oneOfType([c.a.number,c.a.string,c.a.bool]),children:c.a.array,mouseEnter:c.a.func,mouseLeave:c.a.func,slide:c.a.bool,cssModule:c.a.object,className:c.a.string,enableTouch:c.a.bool},m.defaultProps={interval:5e3,pause:"hover",keyboard:!0,slide:!0,enableTouch:!0},m.childContextTypes={direction:c.a.string},t.a=m},72:function(e,t,n){"use strict";var a=n(0),s=n.n(a),i=n(4),r=n.n(i),o=n(33),c=n.n(o),l=n(32),u=function(e){var t=e.direction,n=e.onClickHandler,a=e.cssModule,i=e.directionText,r=e.className,o=Object(l.mapToCssModules)(c()(r,"carousel-control-"+t),a),u=Object(l.mapToCssModules)(c()("carousel-control-"+t+"-icon"),a),d=Object(l.mapToCssModules)(c()("sr-only"),a);return s.a.createElement("a",{className:o,style:{cursor:"pointer"},role:"button",tabIndex:"0",onClick:function(e){e.preventDefault(),n()}},s.a.createElement("span",{className:u,"aria-hidden":"true"}),s.a.createElement("span",{className:d},i||t))};u.propTypes={direction:r.a.oneOf(["prev","next"]).isRequired,onClickHandler:r.a.func.isRequired,cssModule:r.a.object,directionText:r.a.string,className:r.a.string},t.a=u},84:function(e,t,n){"use strict";var a=n(0),s=n.n(a),i=n(4),r=n.n(i),o=n(33),c=n.n(o),l=n(32),u=function(e){var t=e.items,n=e.activeIndex,a=e.cssModule,i=e.onClickHandler,r=e.className,o=Object(l.mapToCssModules)(c()(r,"carousel-indicators"),a),u=t.map((function(e,t){var r=Object(l.mapToCssModules)(c()({active:n===t}),a);return s.a.createElement("li",{key:""+(e.key||Object.values(e).join("")),onClick:function(e){e.preventDefault(),i(t)},className:r})}));return s.a.createElement("ol",{className:o},u)};u.propTypes={items:r.a.array.isRequired,activeIndex:r.a.number.isRequired,cssModule:r.a.object,onClickHandler:r.a.func.isRequired,className:r.a.string},t.a=u}}]);
//# sourceMappingURL=8.a3c168b0.chunk.js.map