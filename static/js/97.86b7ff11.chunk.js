(this["webpackJsonpvuexy-reactt-admin-dashboard"]=this["webpackJsonpvuexy-reactt-admin-dashboard"]||[]).push([[97],{1103:function(e,a){!function(e){var a=e.util.clone(e.languages.javascript);e.languages.jsx=e.languages.extend("markup",a),e.languages.jsx.tag.pattern=/<\/?(?:[\w.:-]+\s*(?:\s+(?:[\w.:$-]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s{'">=]+|\{(?:\{(?:\{[^}]*\}|[^{}])*\}|[^{}])+\}))?|\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}))*\s*\/?)?>/i,e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/i,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">]+)/i,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.insertBefore("inside","attr-name",{spread:{pattern:/\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}/,inside:{punctuation:/\.{3}|[{}.]/,"attr-value":/\w+/}}},e.languages.jsx.tag),e.languages.insertBefore("inside","attr-value",{script:{pattern:/=(?:\{(?:\{(?:\{[^}]*\}|[^}])*\}|[^}])+\})/i,inside:{"script-punctuation":{pattern:/^=(?={)/,alias:"punctuation"},rest:e.languages.jsx},alias:"language-javascript"}},e.languages.jsx.tag);var t=function e(a){return a?"string"==typeof a?a:"string"==typeof a.content?a.content:a.content.map(e).join(""):""};e.hooks.add("after-tokenize",(function(a){"jsx"!==a.language&&"tsx"!==a.language||function a(n){for(var l=[],r=0;r<n.length;r++){var c=n[r],s=!1;if("string"!=typeof c&&("tag"===c.type&&c.content[0]&&"tag"===c.content[0].type?"</"===c.content[0].content[0].content?0<l.length&&l[l.length-1].tagName===t(c.content[0].content[1])&&l.pop():"/>"===c.content[c.content.length-1].content||l.push({tagName:t(c.content[0].content[1]),openedBraces:0}):0<l.length&&"punctuation"===c.type&&"{"===c.content?l[l.length-1].openedBraces++:0<l.length&&0<l[l.length-1].openedBraces&&"punctuation"===c.type&&"}"===c.content?l[l.length-1].openedBraces--:s=!0),(s||"string"==typeof c)&&0<l.length&&0===l[l.length-1].openedBraces){var m=t(c);r<n.length-1&&("string"==typeof n[r+1]||"plain-text"===n[r+1].type)&&(m+=t(n[r+1]),n.splice(r+1,1)),0<r&&("string"==typeof n[r-1]||"plain-text"===n[r-1].type)&&(m=t(n[r-1])+m,n.splice(r-1,1),r--),n[r]=new e.Token("plain-text",m,null,m)}c.content&&"string"!=typeof c.content&&a(c.content)}}(a.tokens)}))}(Prism)},2033:function(e,a,t){"use strict";t.r(a);var n=t(12),l=t(13),r=t(15),c=t(14),s=t(0),m=t.n(s),o=t(136),i=t(66),g=t(1102),u=t(260),d=t(262),b=t(263),E=t(259),p=t(257),v=t(258),f=t(261),B=t(268),h=t(269),N=t(350),T=t(3),y=t.n(T),w=t(320),k=t(427),j=m.a.createElement("pre",null,m.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport {Badge} from "reactstrap"\n\nclass BadgeContextual extends React.Component {\n\n  render() {\n    return(\n      <Badge color="primary">Primary</Badge>\n      <Badge color="success">Success</Badge>\n      <Badge color="info">Info</Badge>\n      <Badge color="danger">Danger</Badge>\n      <Badge color="warning">Warning</Badge>\n      <Badge color="dark">Dark</Badge>\n    )\n  }\n}\nexport default BadgeContextual\n')),z=m.a.createElement("pre",null,m.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport {Badge} from "reactstrap"\n\nclass BadgeGlow extends React.Component {\n\n  render() {\n    return(\n      <Badge className="badge-glow" color="primary">Primary</Badge>\n      <Badge className="badge-glow" color="success">Success</Badge>\n      <Badge className="badge-glow" color="info">Info</Badge>\n      <Badge className="badge-glow" color="danger">Danger</Badge>\n      <Badge className="badge-glow" color="warning">Warning</Badge>\n      <Badge className="badge-glow" color="dark">Dark</Badge>\n    )\n  }\n}\nexport default BadgeGlow\n')),x=m.a.createElement("pre",null,m.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport {Badge} from "reactstrap"\n\nclass BadgeLight extends React.Component {\n\n  render() {\n    return(\n      <Badge color="light-primary">Primary</Badge>\n      <Badge color="light-success">Success</Badge>\n      <Badge color="light-info">Info</Badge>\n      <Badge color="light-danger">Danger</Badge>\n      <Badge color="light-warning">Warning</Badge>\n    )\n  }\n}\nexport default BadgeLight\n')),C=m.a.createElement("pre",null,m.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport {Badge} from "reactstrap"\nimport {\n  Facebook,\n  Instagram,\n  GitHub,\n  Twitter,\n  Sun\n} from "react-feather"\n\nclass BadgeIcons extends React.Component {\n\n  render() {\n    return(\n      <Badge color="primary" className="mr-1 mb-1">\n        <Facebook size={12} />\n        <span>Primary</span>\n      </Badge>\n      <Badge color="success" className="mr-1 mb-1">\n        <Instagram size={12} />\n        <span>Success</span>\n      </Badge>\n      <Badge color="info" className="mr-1 mb-1">\n        <Twitter size={12} />\n        <span>Info</span>\n      </Badge>\n      <Badge color="danger" className="mr-1 mb-1">\n        <GitHub size={12} />\n        <span>Danger</span>\n      </Badge>\n      <Badge color="warning" className="mr-1 mb-1">\n        <Sun size={12} />\n        <span>Warning</span>\n      </Badge>\n    )\n  }\n}\nexport default BadgeIcons\n')),O=m.a.createElement("pre",null,m.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport {Badge} from "reactstrap"\nimport {\n  Facebook,\n  Instagram,\n  GitHub,\n  Twitter,\n  Sun\n} from "react-feather"\nclass BadgeSquareIcons extends React.Component {\n\n  render() {\n    return(\n      <Badge color="primary" className="mr-1 mb-1 badge-square">\n        <Facebook size={12} />\n        <span>Primary</span>\n      </Badge>\n      <Badge color="success" className="mr-1 mb-1 badge-square">\n        <Instagram size={12} />\n        <span>Success</span>\n      </Badge>\n      <Badge color="info" className="mr-1 mb-1 badge-square">\n        <Twitter size={12} />\n        <span>Info</span>\n      </Badge>\n      <Badge color="danger" className="mr-1 mb-1 badge-square">\n        <GitHub size={12} />\n        <span>Danger</span>\n      </Badge>\n      <Badge color="warning" className="mr-1 mb-1 badge-square">\n        <Sun size={12} />\n        <span>Warning</span>\n      </Badge>\n    )\n  }\n}\nexport default BadgeSquareIcons\n')),I=m.a.createElement("pre",null,m.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport {Badge} from "reactstrap"\nimport {\n  Facebook,\n  Instagram,\n  GitHub,\n  Twitter,\n  Sun\n} from "react-feather"\n\nclass BadgeIconsOnly extends React.Component {\n\n  render() {\n    return(\n      <Badge color="primary" className="mr-1 mb-1">\n        <Facebook size={12} />\n      </Badge>\n      <Badge color="success" className="mr-1 mb-1">\n        <Instagram size={12} />\n      </Badge>\n      <Badge color="info" className="mr-1 mb-1">\n        <Twitter size={12} />\n      </Badge>\n      <Badge color="danger" className="mr-1 mb-1">\n        <GitHub size={12} />\n      </Badge>\n      <Badge color="warning" className="mr-1 mb-1">\n        <Sun size={12} />\n      </Badge>\n    )\n  }\n}\nexport default BadgeIconsOnly\n')),S=m.a.createElement("pre",null,m.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport {Badge} from "reactstrap"\nimport {\n  Link\n} from "react-feather"\n\nclass BadgeLink extends React.Component {\n\n  render() {\n    return(\n      <Badge href="#" color="primary">\n        <Link size={12} />\n        Link Badge\n      </Badge>\n    )\n  }\n}\nexport default BadgeLink\n')),R=m.a.createElement("pre",null,m.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport {Badge} from "reactstrap"\n\nclass BadgeBlock extends React.Component {\n\n  render() {\n    return(\n      <Badge color="primary" className="block">\n        Block Badge\n      </Badge>\n    )\n  }\n}\nexport default BadgeBlock\n')),F=m.a.createElement("pre",null,m.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport {Badge} from "reactstrap"\n\nclass BadgeSizes extends React.Component {\n\n  render() {\n    return(\n      <Badge color="primary" className="badge-xl">\n        <span>Extra Large</span>\n      </Badge>\n      <Badge color="primary" className="badge-lg">\n        <span>Large</span>\n      </Badge>\n      <Badge color="primary" className="badge-md">\n        <span>Medium</span>\n      </Badge>\n      <Badge color="primary" className="badge-sm">\n        <span>Small</span>\n      </Badge>\n    )\n  }\n}\nexport default BadgeSizes\n')),q=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,r=new Array(l),c=0;c<l;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return m.a.createElement(m.a.Fragment,null,m.a.createElement(u.a,null,m.a.createElement(d.a,null,m.a.createElement(b.a,null,"Contextual variations"),m.a.createElement("div",{className:"views"},m.a.createElement(E.a,{tabs:!0},m.a.createElement(p.a,null,m.a.createElement(v.a,{className:y()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},m.a.createElement(w.a,{size:15}))),m.a.createElement(p.a,null,m.a.createElement(v.a,{className:y()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},m.a.createElement(k.a,{size:15})))))),m.a.createElement(f.a,null,m.a.createElement("p",null,"Use attribute ",m.a.createElement("code",null,"color")," with ",m.a.createElement("code",null,"Badge")," tag to create badge with diffrent colors."),m.a.createElement(B.a,{activeTab:this.state.activeTab},m.a.createElement(h.a,{tabId:"1"},m.a.createElement(N.a,{color:"primary",className:"mr-1 mb-1"},"Primary"),m.a.createElement(N.a,{color:"success",className:"mr-1 mb-1"},"Success"),m.a.createElement(N.a,{color:"info",className:"mr-1 mb-1"},"Info"),m.a.createElement(N.a,{color:"danger",className:"mr-1 mb-1"},"Danger"),m.a.createElement(N.a,{color:"warning",className:"mr-1 mb-1"},"Warning"),m.a.createElement(N.a,{color:"dark",className:"mr-1 mb-1"},"Dark")),m.a.createElement(h.a,{className:"component-code",tabId:"2"},j)))))}}]),t}(m.a.Component),D=t(450),L=t(473),A=t(566),P=t(464),W=t(547),$=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,r=new Array(l),c=0;c<l;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return m.a.createElement(m.a.Fragment,null,m.a.createElement(u.a,null,m.a.createElement(d.a,null,m.a.createElement(b.a,null,"Icons variations"),m.a.createElement("div",{className:"views"},m.a.createElement(E.a,{tabs:!0},m.a.createElement(p.a,null,m.a.createElement(v.a,{className:y()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},m.a.createElement(w.a,{size:15}))),m.a.createElement(p.a,null,m.a.createElement(v.a,{className:y()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},m.a.createElement(k.a,{size:15})))))),m.a.createElement(f.a,null,m.a.createElement(B.a,{activeTab:this.state.activeTab},m.a.createElement(h.a,{tabId:"1"},m.a.createElement(N.a,{color:"primary",className:"mr-1 mb-1"},m.a.createElement(D.a,{size:12}),m.a.createElement("span",null,"Primary")),m.a.createElement(N.a,{color:"success",className:"mr-1 mb-1"},m.a.createElement(L.a,{size:12}),m.a.createElement("span",null,"Success")),m.a.createElement(N.a,{color:"info",className:"mr-1 mb-1"},m.a.createElement(A.a,{size:12}),m.a.createElement("span",null,"Info")),m.a.createElement(N.a,{color:"danger",className:"mr-1 mb-1"},m.a.createElement(P.a,{size:12}),m.a.createElement("span",null,"Danger")),m.a.createElement(N.a,{color:"warning",className:"mr-1 mb-1"},m.a.createElement(W.a,{size:12}),m.a.createElement("span",null,"Warning"))),m.a.createElement(h.a,{className:"component-code",tabId:"2"},C)))))}}]),t}(m.a.Component),G=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,r=new Array(l),c=0;c<l;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return m.a.createElement(m.a.Fragment,null,m.a.createElement(u.a,null,m.a.createElement(d.a,null,m.a.createElement(b.a,null,"Square Badges"),m.a.createElement("div",{className:"views"},m.a.createElement(E.a,{tabs:!0},m.a.createElement(p.a,null,m.a.createElement(v.a,{className:y()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},m.a.createElement(w.a,{size:15}))),m.a.createElement(p.a,null,m.a.createElement(v.a,{className:y()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},m.a.createElement(k.a,{size:15})))))),m.a.createElement(f.a,null,m.a.createElement("p",null,"Use class ",m.a.createElement("code",null,".badge-square")," with ",m.a.createElement("code",null,"Badge")," tag to create a square badge."),m.a.createElement(B.a,{activeTab:this.state.activeTab},m.a.createElement(h.a,{tabId:"1"},m.a.createElement(N.a,{color:"primary",className:"mr-1 mb-1 badge-square"},m.a.createElement(D.a,{size:12}),m.a.createElement("span",null,"Primary")),m.a.createElement(N.a,{color:"success",className:"mr-1 mb-1 badge-square"},m.a.createElement(L.a,{size:12}),m.a.createElement("span",null,"Success")),m.a.createElement(N.a,{color:"info",className:"mr-1 mb-1 badge-square"},m.a.createElement(A.a,{size:12}),m.a.createElement("span",null,"Info")),m.a.createElement(N.a,{color:"danger",className:"mr-1 mb-1 badge-square"},m.a.createElement(P.a,{size:12}),m.a.createElement("span",null,"Danger")),m.a.createElement(N.a,{color:"warning",className:"mr-1 mb-1 badge-square"},m.a.createElement(W.a,{size:12}),m.a.createElement("span",null,"Warning"))),m.a.createElement(h.a,{className:"component-code",tabId:"2"},O)))))}}]),t}(m.a.Component),U=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,r=new Array(l),c=0;c<l;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return m.a.createElement(m.a.Fragment,null,m.a.createElement(u.a,null,m.a.createElement(d.a,null,m.a.createElement(b.a,null,"Icon Only"),m.a.createElement("div",{className:"views"},m.a.createElement(E.a,{tabs:!0},m.a.createElement(p.a,null,m.a.createElement(v.a,{className:y()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},m.a.createElement(w.a,{size:15}))),m.a.createElement(p.a,null,m.a.createElement(v.a,{className:y()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},m.a.createElement(k.a,{size:15})))))),m.a.createElement(f.a,null,m.a.createElement(B.a,{activeTab:this.state.activeTab},m.a.createElement(h.a,{tabId:"1"},m.a.createElement(N.a,{color:"primary",className:"mr-1 mb-1"},m.a.createElement(D.a,{size:12})),m.a.createElement(N.a,{color:"success",className:"mr-1 mb-1"},m.a.createElement(L.a,{size:12})),m.a.createElement(N.a,{color:"info",className:"mr-1 mb-1"},m.a.createElement(A.a,{size:12})),m.a.createElement(N.a,{color:"danger",className:"mr-1 mb-1"},m.a.createElement(P.a,{size:12})),m.a.createElement(N.a,{color:"warning",className:"mr-1 mb-1"},m.a.createElement(W.a,{size:12}))),m.a.createElement(h.a,{className:"component-code",tabId:"2"},I)))))}}]),t}(m.a.Component),H=t(477),_=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,r=new Array(l),c=0;c<l;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return m.a.createElement(m.a.Fragment,null,m.a.createElement(u.a,null,m.a.createElement(d.a,null,m.a.createElement(b.a,null,"Link Badge"),m.a.createElement("div",{className:"views"},m.a.createElement(E.a,{tabs:!0},m.a.createElement(p.a,null,m.a.createElement(v.a,{className:y()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},m.a.createElement(w.a,{size:15}))),m.a.createElement(p.a,null,m.a.createElement(v.a,{className:y()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},m.a.createElement(k.a,{size:15})))))),m.a.createElement(f.a,null,m.a.createElement("p",null,"Use ",m.a.createElement("code",null,'href="#"')," attribute to use badge as a link."),m.a.createElement(B.a,{activeTab:this.state.activeTab},m.a.createElement(h.a,{tabId:"1",className:"d-flex justify-content-center"},m.a.createElement(N.a,{color:"primary",href:"#",className:"mr-1 mb-1"},m.a.createElement(H.a,{size:12}),m.a.createElement("span",null,"Link Badge"))),m.a.createElement(h.a,{className:"component-code",tabId:"2"},S)))))}}]),t}(m.a.Component),M=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,r=new Array(l),c=0;c<l;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return m.a.createElement(m.a.Fragment,null,m.a.createElement(u.a,null,m.a.createElement(d.a,null,m.a.createElement(b.a,null,"Block Badge"),m.a.createElement("div",{className:"views"},m.a.createElement(E.a,{tabs:!0},m.a.createElement(p.a,null,m.a.createElement(v.a,{className:y()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},m.a.createElement(w.a,{size:15}))),m.a.createElement(p.a,null,m.a.createElement(v.a,{className:y()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},m.a.createElement(k.a,{size:15})))))),m.a.createElement(f.a,null,m.a.createElement("p",null,"Use ",m.a.createElement("code",null,".block")," class to make badge display as block."),m.a.createElement(B.a,{activeTab:this.state.activeTab},m.a.createElement(h.a,{tabId:"1",className:"w-100 d-flex justify-content-center"},m.a.createElement(N.a,{color:"primary",className:"block"},m.a.createElement("span",null,"Block Badge"))),m.a.createElement(h.a,{className:"component-code",tabId:"2"},R)))))}}]),t}(m.a.Component),J=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,r=new Array(l),c=0;c<l;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return m.a.createElement(m.a.Fragment,null,m.a.createElement(u.a,null,m.a.createElement(d.a,null,m.a.createElement(b.a,null,"Sizes"),m.a.createElement("div",{className:"views"},m.a.createElement(E.a,{tabs:!0},m.a.createElement(p.a,null,m.a.createElement(v.a,{className:y()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},m.a.createElement(w.a,{size:15}))),m.a.createElement(p.a,null,m.a.createElement(v.a,{className:y()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},m.a.createElement(k.a,{size:15})))))),m.a.createElement(f.a,null,m.a.createElement("p",null,"Use ",m.a.createElement("code",null,".badge-[sm/md/lg/xl]")," class to change badge size."),m.a.createElement(B.a,{activeTab:this.state.activeTab},m.a.createElement(h.a,{tabId:"1"},m.a.createElement(N.a,{color:"primary",className:"badge-xl mr-1 mb-1"},m.a.createElement("span",null,"Extra Large")),m.a.createElement(N.a,{color:"primary",className:"badge-lg mr-1 mb-1"},m.a.createElement("span",null,"Large")),m.a.createElement(N.a,{color:"primary",className:"badge-md mr-1 mb-1"},m.a.createElement("span",null,"Medium")),m.a.createElement(N.a,{color:"primary",className:"badge-sm mr-1 mb-1"},m.a.createElement("span",null,"Small"))),m.a.createElement(h.a,{className:"component-code",tabId:"2"},F)))))}}]),t}(m.a.Component),Z=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,r=new Array(l),c=0;c<l;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return m.a.createElement(m.a.Fragment,null,m.a.createElement(u.a,null,m.a.createElement(d.a,null,m.a.createElement(b.a,null,"Badge Glow"),m.a.createElement("div",{className:"views"},m.a.createElement(E.a,{tabs:!0},m.a.createElement(p.a,null,m.a.createElement(v.a,{className:y()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},m.a.createElement(w.a,{size:15}))),m.a.createElement(p.a,null,m.a.createElement(v.a,{className:y()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},m.a.createElement(k.a,{size:15})))))),m.a.createElement(f.a,null,m.a.createElement("p",null,"Use class ",m.a.createElement("code",null,"badge-glow")," with ",m.a.createElement("code",null,"Badge")," tag to add glow effect to your badge"),m.a.createElement(B.a,{activeTab:this.state.activeTab},m.a.createElement(h.a,{tabId:"1"},m.a.createElement(N.a,{color:"primary",className:"badge-glow mr-1 mb-1"},"Primary"),m.a.createElement(N.a,{color:"success",className:"badge-glow mr-1 mb-1"},"Success"),m.a.createElement(N.a,{color:"info",className:"badge-glow mr-1 mb-1"},"Info"),m.a.createElement(N.a,{color:"danger",className:"badge-glow mr-1 mb-1"},"Danger"),m.a.createElement(N.a,{color:"warning",className:"badge-glow mr-1 mb-1"},"Warning"),m.a.createElement(N.a,{color:"dark",className:"badge-glow mb-1"},"Dark")),m.a.createElement(h.a,{className:"component-code",tabId:"2"},z)))))}}]),t}(m.a.Component),K=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,r=new Array(l),c=0;c<l;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return m.a.createElement(m.a.Fragment,null,m.a.createElement(u.a,null,m.a.createElement(d.a,null,m.a.createElement(b.a,null,"Light Badges"),m.a.createElement("div",{className:"views"},m.a.createElement(E.a,{tabs:!0},m.a.createElement(p.a,null,m.a.createElement(v.a,{className:y()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},m.a.createElement(w.a,{size:15}))),m.a.createElement(p.a,null,m.a.createElement(v.a,{className:y()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},m.a.createElement(k.a,{size:15})))))),m.a.createElement(f.a,null,m.a.createElement("p",null,"Use attribute ",m.a.createElement("code",null,'color="light-COLOR_NAME"')," with"," ",m.a.createElement("code",null,"Badge")," tag to create badge with diffrent colors."),m.a.createElement(B.a,{activeTab:this.state.activeTab},m.a.createElement(h.a,{tabId:"1"},m.a.createElement(N.a,{color:"light-primary",className:"badge-glow mr-1 mb-1"},"Primary"),m.a.createElement(N.a,{color:"light-success",className:"badge-glow mr-1 mb-1"},"Success"),m.a.createElement(N.a,{color:"light-info",className:"badge-glow mr-1 mb-1"},"Info"),m.a.createElement(N.a,{color:"light-danger",className:"badge-glow mr-1 mb-1"},"Danger"),m.a.createElement(N.a,{color:"light-warning",className:"badge-glow mr-1 mb-1"},"Warning")),m.a.createElement(h.a,{className:"component-code",tabId:"2"},x)))))}}]),t}(m.a.Component),Q=t(1104),V=t.n(Q),X=(t(1103),function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"componentDidMount",value:function(){V.a.highlightAll()}},{key:"render",value:function(){return m.a.createElement(m.a.Fragment,null,m.a.createElement(g.a,{breadCrumbTitle:"Badges",breadCrumbParent:"Components",breadCrumbActive:"Badges"}),m.a.createElement(o.a,null,m.a.createElement(i.a,{sm:"12"},m.a.createElement(q,null)),m.a.createElement(i.a,{sm:"12"},m.a.createElement(Z,null)),m.a.createElement(i.a,{sm:"12"},m.a.createElement(K,null)),m.a.createElement(i.a,{sm:"12"},m.a.createElement($,null)),m.a.createElement(i.a,{sm:"12"},m.a.createElement(G,null)),m.a.createElement(i.a,{sm:"12"},m.a.createElement(U,null))),m.a.createElement(o.a,null,m.a.createElement(i.a,{md:"6",sm:"12"},m.a.createElement(_,null)),m.a.createElement(i.a,{md:"6",sm:"12"},m.a.createElement(M,null))),m.a.createElement(o.a,null,m.a.createElement(i.a,{sm:"12"},m.a.createElement(J,null))))}}]),t}(m.a.Component));a.default=X}}]);
//# sourceMappingURL=97.86b7ff11.chunk.js.map