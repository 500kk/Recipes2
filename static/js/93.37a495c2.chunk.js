(this["webpackJsonpvuexy-reactt-admin-dashboard"]=this["webpackJsonpvuexy-reactt-admin-dashboard"]||[]).push([[93],{1103:function(e,a){!function(e){var a=e.util.clone(e.languages.javascript);e.languages.jsx=e.languages.extend("markup",a),e.languages.jsx.tag.pattern=/<\/?(?:[\w.:-]+\s*(?:\s+(?:[\w.:$-]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s{'">=]+|\{(?:\{(?:\{[^}]*\}|[^{}])*\}|[^{}])+\}))?|\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}))*\s*\/?)?>/i,e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/i,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">]+)/i,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.insertBefore("inside","attr-name",{spread:{pattern:/\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}/,inside:{punctuation:/\.{3}|[{}.]/,"attr-value":/\w+/}}},e.languages.jsx.tag),e.languages.insertBefore("inside","attr-value",{script:{pattern:/=(?:\{(?:\{(?:\{[^}]*\}|[^}])*\}|[^}])+\})/i,inside:{"script-punctuation":{pattern:/^=(?={)/,alias:"punctuation"},rest:e.languages.jsx},alias:"language-javascript"}},e.languages.jsx.tag);var t=function e(a){return a?"string"==typeof a?a:"string"==typeof a.content?a.content:a.content.map(e).join(""):""};e.hooks.add("after-tokenize",(function(a){"jsx"!==a.language&&"tsx"!==a.language||function a(n){for(var r=[],c=0;c<n.length;c++){var l=n[c],s=!1;if("string"!=typeof l&&("tag"===l.type&&l.content[0]&&"tag"===l.content[0].type?"</"===l.content[0].content[0].content?0<r.length&&r[r.length-1].tagName===t(l.content[0].content[1])&&r.pop():"/>"===l.content[l.content.length-1].content||r.push({tagName:t(l.content[0].content[1]),openedBraces:0}):0<r.length&&"punctuation"===l.type&&"{"===l.content?r[r.length-1].openedBraces++:0<r.length&&0<r[r.length-1].openedBraces&&"punctuation"===l.type&&"}"===l.content?r[r.length-1].openedBraces--:s=!0),(s||"string"==typeof l)&&0<r.length&&0===r[r.length-1].openedBraces){var o=t(l);c<n.length-1&&("string"==typeof n[c+1]||"plain-text"===n[c+1].type)&&(o+=t(n[c+1]),n.splice(c+1,1)),0<c&&("string"==typeof n[c-1]||"plain-text"===n[c-1].type)&&(o=t(n[c-1])+o,n.splice(c-1,1),c--),n[c]=new e.Token("plain-text",o,null,o)}l.content&&"string"!=typeof l.content&&a(l.content)}}(a.tokens)}))}(Prism)},2046:function(e,a,t){"use strict";t.r(a);var n=t(12),r=t(13),c=t(15),l=t(14),s=t(0),o=t.n(s),m=t(136),i=t(66),u=t(1102),p=t(260),g=t(262),v=t(263),E=t(259),b=t(257),d=t(258),f=t(261),h=t(268),N=t(269),T=t(3),A=t.n(T),x=t(320),y=t(427),j=t(464),C=t(350),w=function(e){Object(c.a)(t,e);var a=Object(l.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:A()("avatar ".concat(this.props.color?"bg-".concat(this.props.color):null,"  ").concat(this.props.className),{"avatar-sm":this.props.size&&"sm"===this.props.size,"avatar-lg":this.props.size&&"lg"===this.props.size,"avatar-xl":this.props.size&&"xl"===this.props.size})},!1===this.props.img||void 0===this.props.img?o.a.createElement("span",{className:A()("avatar-content",{"position-relative":this.props.badgeUp})},this.props.content?this.props.content:null,this.props.icon?o.a.createElement("div",{className:"avatar-icon"},this.props.icon):null,this.props.badgeUp?o.a.createElement(C.a,{color:this.props.badgeColor?this.props.badgeColor:"primary",className:"badge-sm badge-up",pill:!0},this.props.badgeText?this.props.badgeText:"0"):null):o.a.createElement("img",{src:this.props.img,alt:"avatarImg",height:this.props.imgHeight&&!this.props.size?this.props.imgHeight:32,width:this.props.imgWidth&&!this.props.size?this.props.imgWidth:32}),this.props.status?o.a.createElement("span",{className:"avatar-status-".concat(this.props.status)}):null)}}]),t}(o.a.Component),z=o.a.createElement("pre",null,o.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport Avatar from "./Avatar"\nimport { GitHub } from "react-feather"\nimport avatarImg from "../../../assets/img/portrait/small/avatar-s-20.jpg"\n\nclass AvatarDefault extends React.Component {\n\n  render() {\n    return(\n      <Avatar className="mr-1" icon={<GitHub />} />\n      <Avatar className="mr-1" content="LD" />\n      <Avatar className="mr-1" content="Luisd" />\n      <Avatar img={avatarImg} />\n    )}}\n\nexport default AvatarDefault\n')),k=o.a.createElement("pre",null,o.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport Avatar from "./Avatar"\nimport { GitHub } from "react-feather"\nimport avatarImg from "../../../assets/img/portrait/small/avatar-s-20.jpg"\n\nclass AvatarSizes extends React.Component {\n\n  render() {\n    return(\n        <Avatar className="mr-1" icon={<GitHub />} size="sm" />\n        <Avatar className="mr-1" content="LD" />\n        <Avatar className="mr-1" img={avatarImg} size="lg" />\n        <Avatar img={avatarImg} size="xl" />\n    )}\n}\nexport default AvatarSizes\n')),O=o.a.createElement("pre",null,o.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport Avatar from "./Avatar"\nclass AvatarColors extends React.Component {\n\n  render() {\n    return(\n      <Avatar color="primary" className="mr-1" content="R" />\n      <Avatar color="success" className="mr-1" content="E" />\n      <Avatar color="danger" className="mr-1" content="A" />\n      <Avatar color="info" className="mr-1" content="C" />\n      <Avatar color="warning" className="mr-1" content="T" />\n      <Avatar color="dark" content="X" />\n    )}\n}\nexport default AvatarColors\n')),I=o.a.createElement("pre",null,o.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport Avatar from "./Avatar"\nimport { Badge } from "reactstrap"\nimport { Facebook, Instagram, Twitter } from "react-feather"\n\nclass AvatarBadge extends React.Component {\n\n  render() {\n    return(\n      <Avatar className="mr-1" color="primary" icon={<Facebook />} badgeText="7" badgeColor="danger" badgeUp />\n      <Avatar className="mr-1" icon={<Twitter />} color="info" badgeText="6" badgeColor="danger" badgeUp />\n      <Avatar icon={<Instagram />} color="success" badgeText="6" badgeColor="danger" badgeUp />\n    )}\n}\nexport default AvatarBadge\n')),S=o.a.createElement("pre",null,o.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport Avatar from "./Avatar"\nimport {\n  Eye,\n  Code,\n  GitHub,\n  Calendar,\n  Inbox,\n  Camera,\n  Award\n} from "react-feather"\n\nclass AvatarIcons extends React.Component {\n\n  render() {\n    return(\n      <Avatar color="primary" className="mr-1" icon={<GitHub />} />\n      <Avatar color="success" className="mr-1" icon={<Calendar />} />\n      <Avatar color="danger" className="mr-1" icon={<Inbox />} />\n      <Avatar color="info" className="mr-1" icon={<Camera />} />\n      <Avatar color="warning" icon={<Award />} />\n    )}\n}\nexport default AvatarIcons\n')),U=o.a.createElement("pre",null,o.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport Avatar from "./Avatar"\nimport { GitHub } from "react-feather"\nimport avatarImg from "../../../assets/img/portrait/small/avatar-s-20.jpg"\n\nclass AvatarStatus extends React.Component {\n\n  render() {\n    return(\n      <Avatar className="mr-1" icon={<GitHub />} status="online" />\n      <Avatar className="mr-1" content="LD" status="offline" />\n      <Avatar className="mr-1" content="Luisd" status="away" />\n      <Avatar className="mr-1" img={avatarImg} status="busy" />\n    )\n  }\n}\nexport default AvatarStatus\n')),R=t(144),B=t.n(R),D=function(e){Object(c.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(e=a.call.apply(a,[this].concat(c))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,null,o.a.createElement(g.a,null,o.a.createElement(v.a,null,"Default"),o.a.createElement("div",{className:"views"},o.a.createElement(E.a,{tabs:!0},o.a.createElement(b.a,null,o.a.createElement(d.a,{className:A()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},o.a.createElement(x.a,{size:15}))),o.a.createElement(b.a,null,o.a.createElement(d.a,{className:A()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},o.a.createElement(y.a,{size:15})))))),o.a.createElement(f.a,null,o.a.createElement("p",null,"Use Vuexy's Avatar component and pass ",o.a.createElement("code",null,"icon")," or"," ",o.a.createElement("code",null,"content")," or ",o.a.createElement("code",null,"img")," to create an avatar."),o.a.createElement(h.a,{activeTab:this.state.activeTab},o.a.createElement(N.a,{tabId:"1"},o.a.createElement(w,{className:"mr-1",icon:o.a.createElement(j.a,null)}),o.a.createElement(w,{className:"mr-1",content:"LD"}),o.a.createElement(w,{className:"mr-1",content:"Luisd"}),o.a.createElement(w,{img:B.a})),o.a.createElement(N.a,{className:"component-code",tabId:"2"},z)))))}}]),t}(o.a.Component),H=function(e){Object(c.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(e=a.call.apply(a,[this].concat(c))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,null,o.a.createElement(g.a,null,o.a.createElement(v.a,null,"Sizes"),o.a.createElement("div",{className:"views"},o.a.createElement(E.a,{tabs:!0},o.a.createElement(b.a,null,o.a.createElement(d.a,{className:A()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},o.a.createElement(x.a,{size:15}))),o.a.createElement(b.a,null,o.a.createElement(d.a,{className:A()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},o.a.createElement(y.a,{size:15})))))),o.a.createElement(f.a,null,o.a.createElement("p",null,"Use ",o.a.createElement("code",null,"size=[sm | lg | xl]")," prop to change avatar's size."),o.a.createElement(h.a,{activeTab:this.state.activeTab},o.a.createElement(N.a,{tabId:"1"},o.a.createElement(w,{className:"mr-1",icon:o.a.createElement(j.a,null),size:"sm"}),o.a.createElement(w,{className:"mr-1",content:"LD"}),o.a.createElement(w,{className:"mr-1",img:B.a,size:"lg"}),o.a.createElement(w,{img:B.a,size:"xl"})),o.a.createElement(N.a,{className:"component-code",tabId:"2"},k)))))}}]),t}(o.a.Component),L=function(e){Object(c.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(e=a.call.apply(a,[this].concat(c))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,null,o.a.createElement(g.a,null,o.a.createElement(v.a,null,"Colors"),o.a.createElement("div",{className:"views"},o.a.createElement(E.a,{tabs:!0},o.a.createElement(b.a,null,o.a.createElement(d.a,{className:A()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},o.a.createElement(x.a,{size:15}))),o.a.createElement(b.a,null,o.a.createElement(d.a,{className:A()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},o.a.createElement(y.a,{size:15})))))),o.a.createElement(f.a,null,o.a.createElement("p",null,"Use prop"," ",o.a.createElement("code",null,"color=[primary | success | danger | info | warning | dark]")," ","to change background color of your avatar."),o.a.createElement(h.a,{activeTab:this.state.activeTab},o.a.createElement(N.a,{tabId:"1"},o.a.createElement(w,{color:"primary",className:"mr-1",content:"V"}),o.a.createElement(w,{color:"success",className:"mr-1",content:"U"}),o.a.createElement(w,{color:"danger",className:"mr-1",content:"E"}),o.a.createElement(w,{color:"info",className:"mr-1",content:"X"}),o.a.createElement(w,{color:"warning",className:"mr-1",content:"Y"}),o.a.createElement(w,{color:"dark",content:"X"})),o.a.createElement(N.a,{className:"component-code",tabId:"2"},O)))))}}]),t}(o.a.Component),$=t(450),F=t(566),G=t(473),_=function(e){Object(c.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(e=a.call.apply(a,[this].concat(c))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,null,o.a.createElement(g.a,null,o.a.createElement(v.a,null,"Badge"),o.a.createElement("div",{className:"views"},o.a.createElement(E.a,{tabs:!0},o.a.createElement(b.a,null,o.a.createElement(d.a,{className:A()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},o.a.createElement(x.a,{size:15}))),o.a.createElement(b.a,null,o.a.createElement(d.a,{className:A()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},o.a.createElement(y.a,{size:15})))))),o.a.createElement(f.a,null,o.a.createElement("p",null,"You can add notification label to avatar by passing"," ",o.a.createElement("code",null,"badgeUp"),"prop as true and ",o.a.createElement("code",null,"badgeText"),","," ",o.a.createElement("code",null,"badgeColor=[primary | success | danger | info | warning | dark]"),"."),o.a.createElement(h.a,{activeTab:this.state.activeTab},o.a.createElement(N.a,{tabId:"1"},o.a.createElement(w,{className:"mr-1",color:"primary",icon:o.a.createElement($.a,null),badgeText:"7",badgeColor:"danger",badgeUp:!0}),o.a.createElement(w,{className:"mr-1",color:"info",icon:o.a.createElement(F.a,null),badgeText:"6",badgeColor:"danger",badgeUp:!0}),o.a.createElement(w,{icon:o.a.createElement(G.a,null),color:"success",badgeText:"6",badgeColor:"danger",badgeUp:!0})),o.a.createElement(N.a,{className:"component-code",tabId:"2"},I)))))}}]),t}(o.a.Component),X=t(314),J=t(472),P=t(409),V=t(396),W=function(e){Object(c.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(e=a.call.apply(a,[this].concat(c))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,null,o.a.createElement(g.a,null,o.a.createElement(v.a,null,"Icons"),o.a.createElement("div",{className:"views"},o.a.createElement(E.a,{tabs:!0},o.a.createElement(b.a,null,o.a.createElement(d.a,{className:A()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},o.a.createElement(x.a,{size:15}))),o.a.createElement(b.a,null,o.a.createElement(d.a,{className:A()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},o.a.createElement(y.a,{size:15})))))),o.a.createElement(f.a,null,o.a.createElement("p",null,"Use prop ",o.a.createElement("code",null,"icon")," to create avatar with icon."),o.a.createElement(h.a,{activeTab:this.state.activeTab},o.a.createElement(N.a,{tabId:"1"},o.a.createElement(w,{color:"primary",className:"mr-1",icon:o.a.createElement(j.a,null)}),o.a.createElement(w,{color:"success",className:"mr-1",icon:o.a.createElement(X.a,null)}),o.a.createElement(w,{color:"danger",className:"mr-1",icon:o.a.createElement(J.a,null)}),o.a.createElement(w,{color:"info",className:"mr-1",icon:o.a.createElement(P.a,null)}),o.a.createElement(w,{color:"warning",icon:o.a.createElement(V.a,null)})),o.a.createElement(N.a,{className:"component-code",tabId:"2"},S)))))}}]),t}(o.a.Component),Y=function(e){Object(c.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(e=a.call.apply(a,[this].concat(c))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,null,o.a.createElement(g.a,null,o.a.createElement(v.a,null,"Status"),o.a.createElement("div",{className:"views"},o.a.createElement(E.a,{tabs:!0},o.a.createElement(b.a,null,o.a.createElement(d.a,{className:A()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},o.a.createElement(x.a,{size:15}))),o.a.createElement(b.a,null,o.a.createElement(d.a,{className:A()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},o.a.createElement(y.a,{size:15})))))),o.a.createElement(f.a,null,o.a.createElement("p",null,"use prop",o.a.createElement("code",null,"status=[online | offline | away | busy]")," to create avatar with status."),o.a.createElement(h.a,{activeTab:this.state.activeTab},o.a.createElement(N.a,{tabId:"1"},o.a.createElement(w,{className:"mr-1",icon:o.a.createElement(j.a,null),status:"online"}),o.a.createElement(w,{className:"mr-1",content:"LD",status:"offline"}),o.a.createElement(w,{className:"mr-1",content:"Luisd",status:"away"}),o.a.createElement(w,{className:"mr-1",img:B.a,status:"busy"})),o.a.createElement(N.a,{className:"component-code",tabId:"2"},U)))))}}]),t}(o.a.Component),Z=t(1104),M=t.n(Z),q=(t(1103),function(e){Object(c.a)(t,e);var a=Object(l.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"componentDidMount",value:function(){M.a.highlightAll()}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,{breadCrumbTitle:"Avatar",breadCrumbParent:"Extra Components",breadCrumbActive:"Avatar"}),o.a.createElement(m.a,{className:"match-height"},o.a.createElement(i.a,{xl:"6",lg:"12"},o.a.createElement(D,null)),o.a.createElement(i.a,{xl:"6",lg:"12"},o.a.createElement(H,null)),o.a.createElement(i.a,{xl:"6",lg:"12"},o.a.createElement(L,null)),o.a.createElement(i.a,{xl:"6",lg:"12"},o.a.createElement(_,null)),o.a.createElement(i.a,{xl:"6",lg:"12"},o.a.createElement(W,null)),o.a.createElement(i.a,{xl:"6",lg:"12"},o.a.createElement(Y,null))))}}]),t}(o.a.Component));a.default=q}}]);
//# sourceMappingURL=93.37a495c2.chunk.js.map