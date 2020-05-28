(this["webpackJsonpvuexy-reactt-admin-dashboard"]=this["webpackJsonpvuexy-reactt-admin-dashboard"]||[]).push([[94],{1103:function(e,a){!function(e){var a=e.util.clone(e.languages.javascript);e.languages.jsx=e.languages.extend("markup",a),e.languages.jsx.tag.pattern=/<\/?(?:[\w.:-]+\s*(?:\s+(?:[\w.:$-]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s{'">=]+|\{(?:\{(?:\{[^}]*\}|[^{}])*\}|[^{}])+\}))?|\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}))*\s*\/?)?>/i,e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/i,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">]+)/i,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.insertBefore("inside","attr-name",{spread:{pattern:/\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}/,inside:{punctuation:/\.{3}|[{}.]/,"attr-value":/\w+/}}},e.languages.jsx.tag),e.languages.insertBefore("inside","attr-value",{script:{pattern:/=(?:\{(?:\{(?:\{[^}]*\}|[^}])*\}|[^}])+\})/i,inside:{"script-punctuation":{pattern:/^=(?={)/,alias:"punctuation"},rest:e.languages.jsx},alias:"language-javascript"}},e.languages.jsx.tag);var t=function e(a){return a?"string"==typeof a?a:"string"==typeof a.content?a.content:a.content.map(e).join(""):""};e.hooks.add("after-tokenize",(function(a){"jsx"!==a.language&&"tsx"!==a.language||function a(n){for(var i=[],l=0;l<n.length;l++){var r=n[l],c=!1;if("string"!=typeof r&&("tag"===r.type&&r.content[0]&&"tag"===r.content[0].type?"</"===r.content[0].content[0].content?0<i.length&&i[i.length-1].tagName===t(r.content[0].content[1])&&i.pop():"/>"===r.content[r.content.length-1].content||i.push({tagName:t(r.content[0].content[1]),openedBraces:0}):0<i.length&&"punctuation"===r.type&&"{"===r.content?i[i.length-1].openedBraces++:0<i.length&&0<i[i.length-1].openedBraces&&"punctuation"===r.type&&"}"===r.content?i[i.length-1].openedBraces--:c=!0),(c||"string"==typeof r)&&0<i.length&&0===i[i.length-1].openedBraces){var d=t(r);l<n.length-1&&("string"==typeof n[l+1]||"plain-text"===n[l+1].type)&&(d+=t(n[l+1]),n.splice(l+1,1)),0<l&&("string"==typeof n[l-1]||"plain-text"===n[l-1].type)&&(d=t(n[l-1])+d,n.splice(l-1,1),l--),n[l]=new e.Token("plain-text",d,null,d)}r.content&&"string"!=typeof r.content&&a(r.content)}}(a.tokens)}))}(Prism)},2053:function(e,a,t){"use strict";t.r(a);var n=t(12),i=t(13),l=t(15),r=t(14),c=t(0),d=t.n(c),s=t(136),m=t(66),v=t(1102),o=t(260),u=t(262),E=t(263),g=t(259),p=t(257),b=t(258),N=t(261),f=t(268),h=t(269),x=t(3),T=t.n(x),y=t(320),j=t(427),C=d.a.createElement("pre",null,d.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\n\nclass DividerDefault extends React.Component {\n\n  render() {\n    return(\n      <div>\n        <p>\n          Ut enim ad minim veniam, quis nostrud exercitation ullamco\n          laboris nisi ut aliquip ex ea commodo consequat. Duis aute\n          irure dolor in reprehenderit in voluptate velit esse cillum\n          dolore eu fugiat nulla pariatur. Excepteur sint occaecat\n          cupidatat non proident, sunt in culpa qui officia deserunt\n          mollit anim id est laborum.\n        </p>\n        <hr />\n        <p>\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed\n          do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n        </p>\n      </div>\n    )\n  }\n}\nexport default DividerDefault\n')),k=d.a.createElement("pre",null,d.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\n\nclass DividerText extends React.Component {\n\n  render() {\n    return(\n      <div className="divider">\n        <div className="divider-text">My Text</div>\n      </div>\n    )\n  }\n}\nexport default DividerText\n')),D=d.a.createElement("pre",null,d.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\n\nclass DividerPosition extends React.Component {\n\n  render() {\n    return(\n      <div className="divider divider-left">\n        <div className="divider-text">Left</div>\n      </div>\n\n      <div className="divider divider-left-center">\n        <div className="divider-text">Left Center</div>\n      </div>\n\n      <div className="divider">\n        <div className="divider-text">Center(Default)</div>\n      </div>\n\n      <div className="divider divider-right-center">\n        <div className="divider-text">Right Center</div>\n      </div>\n\n      <div className="divider divider-right">\n        <div className="divider-text">Right</div>\n      </div>\n    )\n  }\n}\nexport default DividerPosition\n')),w=d.a.createElement("pre",null,d.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\n\nclass DividerColors extends React.Component {\n\n  render() {\n    return(\n      <div className="divider">\n        <div className="divider-text">Default</div>\n      </div>\n      <div className="divider divider-primary">\n        <div className="divider-text">Primary</div>\n      </div>\n      <div className="divider divider-success">\n        <div className="divider-text">Success</div>\n      </div>\n      <div className="divider divider-danger">\n        <div className="divider-text">Danger</div>\n      </div>\n      <div className="divider divider-info">\n        <div className="divider-text">Info</div>\n      </div>\n      <div className="divider divider-warning">\n        <div className="divider-text">Warning</div>\n      </div>\n      <div className="divider divider-light">\n        <div className="divider-text">Light</div>\n      </div>\n      <div className="divider divider-dark">\n        <div className="divider-text">Dark</div>\n      </div>\n    )\n  }\n}\nexport default DividerColors\n')),O=d.a.createElement("pre",null,d.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport {\n  ArrowDown,\n  Star,\n  Check,\n  XCircle,\n  Clock\n} from "react-feather"\nclass DividerIcons extends React.Component {\n\n  render() {\n    return(\n      <div className="divider divider-left">\n        <div className="divider-text">\n          <ArrowDown />\n        </div>\n      </div>\n\n      <div className="divider divider-left-center">\n        <div className="divider-text">\n          <Star />\n        </div>\n      </div>\n\n      <div className="divider">\n        <div className="divider-text">\n          <Check />\n        </div>\n      </div>\n\n      <div className="divider divider-right-center">\n        <div className="divider-text">\n          <XCircle />\n        </div>\n      </div>\n\n      <div className="divider divider-right">\n        <div className="divider-text">\n          <Clock />\n        </div>\n      </div>\n    )\n  }\n}\nexport default DividerIcons\n')),z=d.a.createElement("pre",null,d.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\n\nclass DividerStyle extends React.Component {\n\n  render() {\n    return(\n      <div>\n      <div className="divider divider-dotted">\n        <div className="divider-text">Dotted</div>\n      </div>\n\n      <div className="divider divider-dashed">\n        <div className="divider-text">Dashed</div>\n      </div>\n\n      <div className="divider">\n        <div className="divider-text">Solid</div>\n      </div>\n      </div>\n    )\n  }\n}\nexport default DividerStyle\n')),I=function(e){Object(l.a)(t,e);var a=Object(r.a)(t);function t(){var e;Object(n.a)(this,t);for(var i=arguments.length,l=new Array(i),r=0;r<i;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this;return d.a.createElement(d.a.Fragment,null,d.a.createElement(o.a,null,d.a.createElement(u.a,null,d.a.createElement(E.a,null,"Default"),d.a.createElement("div",{className:"views"},d.a.createElement(g.a,{tabs:!0},d.a.createElement(p.a,null,d.a.createElement(b.a,{className:T()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},d.a.createElement(y.a,{size:15}))),d.a.createElement(p.a,null,d.a.createElement(b.a,{className:T()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},d.a.createElement(j.a,{size:15})))))),d.a.createElement(N.a,null,d.a.createElement("p",null,"You can add a line to divide your section using"," ",d.a.createElement("code",null,"<hr />")," tag."),d.a.createElement(f.a,{activeTab:this.state.activeTab},d.a.createElement(h.a,{tabId:"1"},d.a.createElement("p",null,"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),d.a.createElement("hr",null),d.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")),d.a.createElement(h.a,{className:"component-code",tabId:"2"},C)))))}}]),t}(d.a.Component),S=function(e){Object(l.a)(t,e);var a=Object(r.a)(t);function t(){var e;Object(n.a)(this,t);for(var i=arguments.length,l=new Array(i),r=0;r<i;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this;return d.a.createElement(d.a.Fragment,null,d.a.createElement(o.a,null,d.a.createElement(u.a,null,d.a.createElement(E.a,null,"Text"),d.a.createElement("div",{className:"views"},d.a.createElement(g.a,{tabs:!0},d.a.createElement(p.a,null,d.a.createElement(b.a,{className:T()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},d.a.createElement(y.a,{size:15}))),d.a.createElement(p.a,null,d.a.createElement(b.a,{className:T()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},d.a.createElement(j.a,{size:15})))))),d.a.createElement(N.a,null,d.a.createElement("p",null,"Use class ",d.a.createElement("code",null,".divider")," as wrapper for"," ",d.a.createElement("code",null,".divider-text")," to create a divider text"),d.a.createElement(f.a,{activeTab:this.state.activeTab},d.a.createElement(h.a,{tabId:"1"},d.a.createElement("div",{className:"divider"},d.a.createElement("div",{className:"divider-text"},"My Text"))),d.a.createElement(h.a,{className:"component-code",tabId:"2"},k)))))}}]),t}(d.a.Component),R=function(e){Object(l.a)(t,e);var a=Object(r.a)(t);function t(){var e;Object(n.a)(this,t);for(var i=arguments.length,l=new Array(i),r=0;r<i;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this;return d.a.createElement(d.a.Fragment,null,d.a.createElement(o.a,null,d.a.createElement(u.a,null,d.a.createElement(E.a,null,"Text Position"),d.a.createElement("div",{className:"views"},d.a.createElement(g.a,{tabs:!0},d.a.createElement(p.a,null,d.a.createElement(b.a,{className:T()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},d.a.createElement(y.a,{size:15}))),d.a.createElement(p.a,null,d.a.createElement(b.a,{className:T()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},d.a.createElement(j.a,{size:15})))))),d.a.createElement(N.a,null,d.a.createElement("p",null,"Use class"," ",d.a.createElement("code",null,".divider-[left | left-center | right | right-center]")," ","with ",d.a.createElement("code",null,".divider")," to set text position."),d.a.createElement(f.a,{activeTab:this.state.activeTab},d.a.createElement(h.a,{tabId:"1"},d.a.createElement("div",{className:"divider divider-left"},d.a.createElement("div",{className:"divider-text"},"Left")),d.a.createElement("div",{className:"divider divider-left-center"},d.a.createElement("div",{className:"divider-text"},"Left Center")),d.a.createElement("div",{className:"divider"},d.a.createElement("div",{className:"divider-text"},"Center(Default)")),d.a.createElement("div",{className:"divider divider-right-center"},d.a.createElement("div",{className:"divider-text"},"Right Center")),d.a.createElement("div",{className:"divider divider-right"},d.a.createElement("div",{className:"divider-text"},"Right"))),d.a.createElement(h.a,{className:"component-code",tabId:"2"},D)))))}}]),t}(d.a.Component),A=function(e){Object(l.a)(t,e);var a=Object(r.a)(t);function t(){var e;Object(n.a)(this,t);for(var i=arguments.length,l=new Array(i),r=0;r<i;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this;return d.a.createElement(d.a.Fragment,null,d.a.createElement(o.a,null,d.a.createElement(u.a,null,d.a.createElement(E.a,null,"Colors"),d.a.createElement("div",{className:"views"},d.a.createElement(g.a,{tabs:!0},d.a.createElement(p.a,null,d.a.createElement(b.a,{className:T()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},d.a.createElement(y.a,{size:15}))),d.a.createElement(p.a,null,d.a.createElement(b.a,{className:T()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},d.a.createElement(j.a,{size:15})))))),d.a.createElement(N.a,null,d.a.createElement("p",null,"Use class ",d.a.createElement("code",null,".divider-[color-name]")," to change color of divider"),d.a.createElement(f.a,{activeTab:this.state.activeTab},d.a.createElement(h.a,{tabId:"1"},d.a.createElement("div",{className:"divider"},d.a.createElement("div",{className:"divider-text"},"Default")),d.a.createElement("div",{className:"divider divider-primary"},d.a.createElement("div",{className:"divider-text"},"Primary")),d.a.createElement("div",{className:"divider divider-success"},d.a.createElement("div",{className:"divider-text"},"Success")),d.a.createElement("div",{className:"divider divider-danger"},d.a.createElement("div",{className:"divider-text"},"Danger")),d.a.createElement("div",{className:"divider divider-info"},d.a.createElement("div",{className:"divider-text"},"Info")),d.a.createElement("div",{className:"divider divider-warning"},d.a.createElement("div",{className:"divider-text"},"Warning")),d.a.createElement("div",{className:"divider divider-light"},d.a.createElement("div",{className:"divider-text"},"Light")),d.a.createElement("div",{className:"divider divider-dark"},d.a.createElement("div",{className:"divider-text"},"Dark"))),d.a.createElement(h.a,{className:"component-code",tabId:"2"},w)))))}}]),t}(d.a.Component),q=t(386),$=t(545),L=t(194),B=t(587),F=t(420),P=function(e){Object(l.a)(t,e);var a=Object(r.a)(t);function t(){var e;Object(n.a)(this,t);for(var i=arguments.length,l=new Array(i),r=0;r<i;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this;return d.a.createElement(d.a.Fragment,null,d.a.createElement(o.a,null,d.a.createElement(u.a,null,d.a.createElement(E.a,null,"Icons"),d.a.createElement("div",{className:"views"},d.a.createElement(g.a,{tabs:!0},d.a.createElement(p.a,null,d.a.createElement(b.a,{className:T()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},d.a.createElement(y.a,{size:15}))),d.a.createElement(p.a,null,d.a.createElement(b.a,{className:T()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},d.a.createElement(j.a,{size:15})))))),d.a.createElement(N.a,null,d.a.createElement(f.a,{activeTab:this.state.activeTab},d.a.createElement(h.a,{tabId:"1"},d.a.createElement("div",{className:"divider divider-left"},d.a.createElement("div",{className:"divider-text"},d.a.createElement(q.a,null))),d.a.createElement("div",{className:"divider divider-left-center"},d.a.createElement("div",{className:"divider-text"},d.a.createElement($.a,null))),d.a.createElement("div",{className:"divider"},d.a.createElement("div",{className:"divider-text"},d.a.createElement(L.a,null))),d.a.createElement("div",{className:"divider divider-right-center"},d.a.createElement("div",{className:"divider-text"},d.a.createElement(B.a,null))),d.a.createElement("div",{className:"divider divider-right"},d.a.createElement("div",{className:"divider-text"},d.a.createElement(F.a,null)))),d.a.createElement(h.a,{className:"component-code",tabId:"2"},O)))))}}]),t}(d.a.Component),U=function(e){Object(l.a)(t,e);var a=Object(r.a)(t);function t(){var e;Object(n.a)(this,t);for(var i=arguments.length,l=new Array(i),r=0;r<i;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this;return d.a.createElement(d.a.Fragment,null,d.a.createElement(o.a,null,d.a.createElement(u.a,null,d.a.createElement(E.a,null,"Styles"),d.a.createElement("div",{className:"views"},d.a.createElement(g.a,{tabs:!0},d.a.createElement(p.a,null,d.a.createElement(b.a,{className:T()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},d.a.createElement(y.a,{size:15}))),d.a.createElement(p.a,null,d.a.createElement(b.a,{className:T()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},d.a.createElement(j.a,{size:15})))))),d.a.createElement(N.a,null,d.a.createElement("p",null,"use class ",d.a.createElement("code",null,".divider-[dotted | dashed]")," to change divider style. solid is default style you don't have to add any class for it."),d.a.createElement(f.a,{activeTab:this.state.activeTab},d.a.createElement(h.a,{tabId:"1"},d.a.createElement("div",{className:"divider divider-dotted"},d.a.createElement("div",{className:"divider-text"},"Dotted")),d.a.createElement("div",{className:"divider divider-dashed"},d.a.createElement("div",{className:"divider-text"},"Dashed")),d.a.createElement("div",{className:"divider"},d.a.createElement("div",{className:"divider-text"},"Solid"))),d.a.createElement(h.a,{className:"component-code",tabId:"2"},z)))))}}]),t}(d.a.Component),_=t(1104),M=t.n(_),J=(t(1103),function(e){Object(l.a)(t,e);var a=Object(r.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"componentDidMount",value:function(){M.a.highlightAll()}},{key:"render",value:function(){return d.a.createElement(d.a.Fragment,null,d.a.createElement(v.a,{breadCrumbTitle:"Divider",breadCrumbParent:"Extra Components",breadCrumbActive:"Divider"}),d.a.createElement(s.a,null,d.a.createElement(m.a,{sm:"12"},d.a.createElement(I,null)),d.a.createElement(m.a,{sm:"12"},d.a.createElement(S,null)),d.a.createElement(m.a,{sm:"12"},d.a.createElement(R,null)),d.a.createElement(m.a,{sm:"12"},d.a.createElement(A,null)),d.a.createElement(m.a,{sm:"12"},d.a.createElement(P,null)),d.a.createElement(m.a,{sm:"12"},d.a.createElement(U,null))))}}]),t}(d.a.Component));a.default=J}}]);
//# sourceMappingURL=94.af99140a.chunk.js.map