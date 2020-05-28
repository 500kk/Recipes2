(this["webpackJsonpvuexy-reactt-admin-dashboard"]=this["webpackJsonpvuexy-reactt-admin-dashboard"]||[]).push([[54],{1105:function(e,t,a){"use strict";var n=a(12),l=a(13),r=a(15),s=a(14),i=a(0),o=a.n(i),c=a(136),m=a(66),u=function(e){Object(r.a)(a,e);var t=Object(s.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement(c.a,{className:"mb-2"},o.a.createElement(m.a,{sm:"12",className:"ml-50"},o.a.createElement("p",{className:"font-medium-5 mt-1 extension-title","data-tour":"extension-title"},this.props.title),this.props.link?o.a.createElement("a",{href:this.props.link,target:"_blank",rel:"noopener noreferrer"},this.props.subTitle):o.a.createElement("p",{className:"text-primary"},this.props.subTitle)))}}]),a}(o.a.Component);t.a=u},1297:function(e,t){},1414:function(e,t){},1415:function(e,t){},1979:function(e,t,a){},2017:function(e,t,a){"use strict";a.r(t);var n=a(12),l=a(13),r=a(15),s=a(14),i=a(0),o=a.n(i),c=a(1105),m=a(136),u=a(66),d=a(260),h=a(261),p=a(86),E=a(641),f=a(636),w=a(270),g=a(264),b=a(265),v=a(639),C=a(307),x=a(266),y=a(3),S=a.n(y),k=a(1413),N=a.n(k),L=a(194),R=a(492),j=a(330),F=a(197),O=(a(1979),function(e){Object(r.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,r=new Array(l),s=0;s<l;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={data:[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",website:"hildegard.org"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",website:"anastasia.net"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",website:"ramiro.info"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",website:"kale.biz"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",website:"demarco.info"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",website:"ola.org"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",website:"elvis.io"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",website:"jacynthe.com"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",website:"conrad.com"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",website:"ambrose.net"}],filteredData:[],dataToExport:[],value:"",modal:!1,fileName:"",fileFormat:"xlsx",selectedRows:[],selectAll:!1},e.toggleModal=function(){e.setState({modal:!e.state.modal})},e.handleFilter=function(t){var a=e.state.data,n=[],l=t.target.value;e.setState({value:l}),l.length&&(n=a.filter((function(e){var t=e.name.toLowerCase().startsWith(l.toLowerCase())||e.email.toLowerCase().startsWith(l.toLowerCase())||e.website.toLowerCase().startsWith(l.toLowerCase())||e.id.toString().toLowerCase().startsWith(l.toLowerCase()),a=e.name.toLowerCase().includes(l.toLowerCase())||e.email.toLowerCase().includes(l.toLowerCase())||e.website.toLowerCase().includes(l.toLowerCase())||e.id.toString().toLowerCase().includes(l.toLowerCase());return t||(!t&&a?a:null)})),e.setState({value:l,filteredData:n}))},e.handleExport=function(){e.toggleModal();var t=e.state.dataToExport;e.state.data.map((function(a){return e.state.selectedRows.includes(a.id)?t.push(a):null})),e.setState({dataToExport:t});var a=e.state.fileName.length&&e.state.fileFormat.length?"".concat(e.state.fileName,".").concat(e.state.fileFormat):"excel-sheet.xlsx",n=N.a.utils.json_to_sheet(t),l=N.a.utils.book_new();N.a.utils.book_append_sheet(l,n,"test"),N.a.writeFile(l,a)},e.handleSelect=function(t){var a=e.state.selectedRows;if(a.includes(t)){if(!a.includes(t))return null;a.splice(a.indexOf(t),1)}else a.push(t);e.setState({selectedRows:a})},e.handleSelectAll=function(){var t=e.state.selectedRows,a=e.state.data;if(t.length<a.length){t=a.map((function(e){return e.id}))}else{if(t.length!==a.length)return null;t=[]}e.setState({selectedRows:t})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=(this.state.value?this.state.filteredData:this.state.data).map((function(t){return o.a.createElement("tr",{key:t.id,className:S()({selected:e.state.selectedRows.includes(t.id)})},o.a.createElement("td",null,o.a.createElement(F.a,{size:"sm",color:"primary",icon:o.a.createElement(L.a,{className:"vx-icon",size:12}),label:"",checked:e.state.selectedRows.includes(t.id),onChange:function(){return e.handleSelect(t.id)}})),o.a.createElement("td",null,t.email),o.a.createElement("td",null,t.name),o.a.createElement("td",null,t.website),o.a.createElement("td",null,t.id))})),a=this.state.selectedRows.length!==this.state.data.length&&this.state.selectedRows.length?R.a:L.a;return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,{title:"XLSX",subTitle:"Xlsx is a parser and writer for various spreadsheet formats",link:"https://github.com/AdeleD/react-paginate"}),o.a.createElement(m.a,{className:"export-component"},o.a.createElement(u.a,{sm:"12"},o.a.createElement(d.a,null,o.a.createElement(h.a,null,o.a.createElement(m.a,null,o.a.createElement(u.a,{sm:"12"},o.a.createElement("div",{className:"d-flex flex-wrap justify-content-between"},o.a.createElement(p.a.Ripple,{color:"primary",onClick:this.toggleModal},"Export Selected"),o.a.createElement("div",{className:"filter position-relative has-icon-left"},o.a.createElement(E.a,{type:"text",value:this.state.value,onChange:function(t){return e.handleFilter(t)}}),o.a.createElement("div",{className:"form-control-position"},o.a.createElement(j.a,{size:15}))))),o.a.createElement(u.a,{sm:"12"},o.a.createElement(f.a,{className:"table-hover-animation mt-2",responsive:!0},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,o.a.createElement(F.a,{size:"sm",color:"primary",icon:o.a.createElement(a,{className:"vx-icon",size:12}),checked:this.state.selectedRows.length,onChange:function(t){return e.handleSelectAll()}})),o.a.createElement("th",null,"Email"),o.a.createElement("th",null,"Name"),o.a.createElement("th",null,"Website"),o.a.createElement("th",null,"Rank"))),o.a.createElement("tbody",null,t)))))))),o.a.createElement(w.a,{isOpen:this.state.modal,toggle:this.toggleModal,className:"modal-dialog-centered"},o.a.createElement(g.a,{toggle:this.toggleModal},"Export To Excel"),o.a.createElement(b.a,null,o.a.createElement(v.a,null,o.a.createElement(E.a,{type:"text",value:this.state.fileName,onChange:function(t){return e.setState({fileName:t.target.value})},placeholder:"Enter File Name"})),o.a.createElement(v.a,null,o.a.createElement(C.a,{type:"select",id:"selectFileFormat",name:"customSelect",value:this.state.fileFormat,onChange:function(t){return e.setState({fileFormat:t.target.value})}},o.a.createElement("option",null,"xlsx"),o.a.createElement("option",null,"csv"),o.a.createElement("option",null,"txt")))),o.a.createElement(x.a,null,o.a.createElement(p.a,{color:"primary",onClick:this.handleExport},"Export"),o.a.createElement(p.a,{color:"flat-danger",onClick:this.toggleModal},"Cancel"))))}}]),a}(o.a.Component));t.default=O}}]);
//# sourceMappingURL=54.674386e9.chunk.js.map