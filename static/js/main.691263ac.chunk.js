(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(21)},17:function(e,t,a){},19:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(10),i=a.n(r),o=(a(17),a(7)),u=a(2),s=a(3),c=a(6),h=a(4),m=a(5),d=a(1),p=(a(19),a(8)),y=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).state={height:0,width:0,grid:null,trees:[],lumber:[],ground:[],counter:0,running:!1,looper:null},a.pause=a.pause.bind(Object(d.a)(Object(d.a)(a))),a.play=a.play.bind(Object(d.a)(Object(d.a)(a))),a.everyMinute=a.everyMinute.bind(Object(d.a)(Object(d.a)(a))),a.resetInput=a.resetInput.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.input.split(/\n/).map(function(e){return e.split("")}),t=[],a=[],n=[],l=!0,r=!1,i=void 0;try{for(var o,u=e.entries()[Symbol.iterator]();!(l=(o=u.next()).done);l=!0){var s=o.value,c=Object(p.a)(s,2),h=c[0],m=c[1],d=!0,y=!1,v=void 0;try{for(var b,g=m.entries()[Symbol.iterator]();!(d=(b=g.next()).done);d=!0){var E=b.value,f=Object(p.a)(E,2),C=f[0],j=f[1];"|"===j?t.push({x:C,y:h}):"#"===j?a.push({x:C,y:h}):"."===j&&n.push({x:C,y:h})}}catch(O){y=!0,v=O}finally{try{d||null==g.return||g.return()}finally{if(y)throw v}}}}catch(O){r=!0,i=O}finally{try{l||null==u.return||u.return()}finally{if(r)throw i}}this.setState({counter:0,grid:e,lumber:a,ground:n,trees:t,running:!0,height:e.length,width:e[0].length});var x=setInterval(this.everyMinute,80);this.setState({looper:x})}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.looper)}},{key:"resetInput",value:function(){clearInterval(this.state.looper),this.setState({counter:0,input:null,height:0,width:0,grid:null,trees:[],lumber:[],ground:[],running:!1}),this.props.handleInputChange(null)}},{key:"pause",value:function(){clearInterval(this.state.looper),this.setState({running:!1})}},{key:"play",value:function(){var e=setInterval(this.everyMinute,80);this.setState({looper:e,running:!0})}},{key:"has_surrounding_trees",value:function(e,t,a){var n=0,l=!0,r=!1,i=void 0;try{for(var o,u=e[Symbol.iterator]();!(l=(o=u.next()).done);l=!0){var s=o.value;if("|"===a[s.y][s.x]&&(n+=1),n>=t)return!0}}catch(c){r=!0,i=c}finally{try{l||null==u.return||u.return()}finally{if(r)throw i}}return!1}},{key:"has_surrounding_lumber",value:function(e,t,a){var n=0,l=!0,r=!1,i=void 0;try{for(var o,u=e[Symbol.iterator]();!(l=(o=u.next()).done);l=!0){var s=o.value;if("#"===a[s.y][s.x]&&(n+=1),n>=t)return!0}}catch(c){r=!0,i=c}finally{try{l||null==u.return||u.return()}finally{if(r)throw i}}return!1}},{key:"get_surrounding",value:function(e){var t=[],a=e.x,n=e.y;return n>0&&t.push({y:n-1,x:a}),n>0&&a<this.state.width-1&&t.push({y:n-1,x:a+1}),a<this.state.width-1&&t.push({y:n,x:a+1}),n<this.state.height-1&&a<this.state.width-1&&t.push({y:n+1,x:a+1}),n<this.state.height-1&&t.push({y:n+1,x:a}),n<this.state.height-1&&a>0&&t.push({y:n+1,x:a-1}),a>0&&t.push({y:n,x:a-1}),n>0&&a>0&&t.push({y:n-1,x:a-1}),t}},{key:"everyMinute",value:function(){var e=this;this.setState(function(t,a){var n=new Array(t.height).fill(null).map(function(e){return new Array(t.width).fill(".")}),l=[],r=[],i=[],o=!0,u=!1,s=void 0;try{for(var c,h=t.ground[Symbol.iterator]();!(o=(c=h.next()).done);o=!0){var m=c.value,d=e.get_surrounding(m);e.has_surrounding_trees(d,3,t.grid)?(l.push(m),n[m.y][m.x]="|"):i.push(m)}}catch(I){u=!0,s=I}finally{try{o||null==h.return||h.return()}finally{if(u)throw s}}var p=!0,y=!1,v=void 0;try{for(var b,g=t.trees[Symbol.iterator]();!(p=(b=g.next()).done);p=!0){var E=b.value,f=e.get_surrounding(E);e.has_surrounding_lumber(f,3,t.grid)?(r.push(E),n[E.y][E.x]="#"):(l.push(E),n[E.y][E.x]="|")}}catch(I){y=!0,v=I}finally{try{p||null==g.return||g.return()}finally{if(y)throw v}}var C=!0,j=!1,x=void 0;try{for(var O,k=t.lumber[Symbol.iterator]();!(C=(O=k.next()).done);C=!0){var w=O.value,S=e.get_surrounding(w,t.grid);e.has_surrounding_lumber(S,1,t.grid)&&e.has_surrounding_trees(S,1,t.grid)?(r.push(w),n[w.y][w.x]="#"):i.push(w)}}catch(I){j=!0,x=I}finally{try{C||null==k.return||k.return()}finally{if(j)throw x}}return{counter:t.counter+1,trees:l,lumber:r,ground:i,grid:n}})}},{key:"render",value:function(){var e,t,a=this;return e=this.state.running?l.a.createElement("button",{onClick:this.pause}," Pause "):l.a.createElement("button",{onClick:this.play}," Play "),this.state.grid&&("display-text"===this.props.display?t=this.state.grid.map(function(e,t){return l.a.createElement("tr",{key:t}," ",e.map(function(e,t){return l.a.createElement("td",{key:t,style:{color:a.props.customText[e]}},e)}))}):"display-emoji"===this.props.display?t=this.state.grid.map(function(e,t){return l.a.createElement("tr",{key:t}," ",e.map(function(e,t){return l.a.createElement("td",{key:t},l.a.createElement("span",null,a.props.customEmoji[e]))}))}):"display-solid-color"===this.props.display&&(t=this.state.grid.map(function(e,t){return l.a.createElement("tr",{key:t}," ",e.map(function(e,t){return l.a.createElement("td",{key:t,style:{background:a.props.customColor[e]}})}))}))),l.a.createElement("div",{className:"grid"},l.a.createElement("div",{className:"flex-apart"},l.a.createElement("div",{className:"grid-control"},l.a.createElement("button",{onClick:this.resetInput}," Reset Input "),e),l.a.createElement("p",{className:"counter"},this.state.counter)),l.a.createElement("table",null,l.a.createElement("tbody",null,t)))}}]),t}(n.Component),v=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).state={text:"",valid:!1,empty:!0},a.handleChange=a.handleChange.bind(Object(d.a)(Object(d.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(d.a)(Object(d.a)(a))),a.useDefault=a.useDefault.bind(Object(d.a)(Object(d.a)(a))),a.resetText=a.resetText.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"validateInput",value:function(e){return/^([\|\.#]+\n*)+$/.test(e)}},{key:"resetText",value:function(){this.setState({text:"",valid:!1,empty:!0})}},{key:"useDefault",value:function(){this.setState({valid:!0,text:"..##..#|#..#.#.||........|||...#..|....||......|..\n##.#.#....##..###...##|#...|...||.#...#|.|.#...#|.\n....##|....|#.........#|..|......#...##.#..|....##\n###...||#|.......#|..#.#||...|....|......||..|..|.\n......||.|.....#.#####.#.#.|...|##....#...#.......\n#..|..#.|.......#......#.#|.........|##....##.||#.\n|##..#|...|.#.....#..|.||#.|..##..#...||#.#.|.....\n...|.#.|....||...#.||#|...|..#.#........|.|||....#\n..|||#.|...#.##.||.......#.|.#.|..|#|..|.|##.#...#\n|#...#.....#...#...#||..|.......|.|..|.##..#.#..#.\n......||...#.#||...|.||.|#.|..##|.||....#..##.##..\n#|........#|...|#.|.||#||...#..|#...#...##.|.|....\n|#.||..##|#.|.|....#.#.......|.#.|.|.#.....#.|....\n....###.|.#...|#.|##.||....|#.#....#...|...||.|..#\n.....#..#|..|#.#..###..#.|#.....###.|......#|.#.|.\n||.##....|....#..||#.#....|.##.|...#.|##..........\n#|#.#..|..|#....#.#.|..||...|..........#|.........\n.#|.##..|.|.|..#|...|..|..|.#....|#|.....#|.#...|.\n|....|.|..#..#|..#.###.|||......|.###..|..........\n#|#.#.......|...|||.||##.....##..||...|..##...##..\n.|||...#.|....##....#..#..........|..#..........|.\n.#....#...#..##....#.#......||...##....|...#..|.|.\n|||....||#....|...|.....#.#..||.|.|..#..|...||....\n###...|#|...|...||.##.#....|.....##....#|#.#|#||.#\n..#.|....#|.|..#......#..|..|#|....#.......#.|#..|\n.##..|#.|......|..#.##..#.#....|#.....#...|.....#.\n.|.|.....|..|..|..........|....#..##..#|.##.|..||#\n|..#.|.|..#......#||...||.#..#..|.......|.#.|.....\n|....|.#..#||....|#.#|....#|..#|.#.|##.....|.||.#.\n....|#.||.#..#....||||..|.|#.|#...|..|#.#.#|#..###\n#....#.#..|..#|.|.|..||.#......|......|.|......#|#\n|##|......||.#...#......#.|..||....|.#..........#.\n##...|...#.....#...|.#..||...|.#|.##...|.#...#.|..\n...|..||...#.#....#|.#...###......#|#.|.|.#|.....#\n.#||...##....|...##.#|.#.#..#.........#..#....||#.\n....#.....|..|.|..#|.......|.|..#....#|.#......#.#\n........#.|....#..|..|..|...|.|#|.#.#......#|..||.\n...#...#..#.||#|||...#.|........|#.#|........###.#\n###..#.|..|...||..||......|##.||...#.|.|##.|.#|##|\n|#||||#|..|..|..||.....#|.#....#..#......#...##.||\n...#..|..###.#.|..|#.||..|.#.||....#|#|##...#..|.#\n.##.#..|#|##.|...#..|.##..|.#||.#.|#..#....##.....\n.#.#.|......|....#.....|||.||...#.#.||.|.||#|.#..|\n.....#.#..|.|##.....|.|#|.##.#...|..#......##.|...\n##.#.#.##|.#.||#..|.|.|.|.|#.##.|#.|...#......#||.\n.....|..#......#.#..|##||||..|..#...#|#...|#...|##\n....#..|..|.|...|.|...|#....#.#.|.#..||...|#.||...\n...|..|||.#|.||.|#.##.|....#|.||.......#...#.|...#\n....#.|.||||.....##........#.......#....|#|##....#\n.#.|#||...|..|...|..|...##.#||...||......#.||##..#"})}},{key:"handleChange",value:function(e){this.setState({text:e.target.value,valid:this.validateInput(e.target.value),empty:!e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.onInputChange(this.state.text)}},{key:"render",value:function(){var e;return e=this.state.empty||this.state.valid?"":"Input not valid",l.a.createElement("div",{className:"input-box"},l.a.createElement("form",{className:"input-form",onSubmit:this.handleSubmit},l.a.createElement("h3",null," Paste AoC input from ",l.a.createElement("a",{href:"https://adventofcode.com/2018/day/18"},"day 18")," into text box "),l.a.createElement("textarea",{rows:"25",value:this.state.text,onChange:this.handleChange}),l.a.createElement("br",null),l.a.createElement("span",null,e),l.a.createElement("br",null),l.a.createElement("button",{type:"submit",className:"full-btn",disabled:!this.state.valid},"Submit"),l.a.createElement("div",{className:"flex-apart"},l.a.createElement("button",{type:"button",className:"half-btn",onClick:this.useDefault},"Use Default Input"),l.a.createElement("button",{type:"reset",className:"half-btn",onClick:this.resetText},"Clear Input"))))}}]),t}(n.Component),b=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).state={input:null,display:"display-text",groundText:"#CCCCCC",lumberText:"#333333",treeText:"#666666",groundColor:"#ecd9a3",lumberColor:"#51371c",treeColor:"#008f00",groundEmoji:"\u3030\ufe0f",lumberEmoji:"\u26fa\ufe0f",treeEmoji:"\ud83c\udf32"},a.handleInputChange=a.handleInputChange.bind(Object(d.a)(Object(d.a)(a))),a.handleDisplayChange=a.handleDisplayChange.bind(Object(d.a)(Object(d.a)(a))),a.handleCustomChange=a.handleCustomChange.bind(Object(d.a)(Object(d.a)(a))),a.handleEmoji=a.handleEmoji.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"handleEmoji",value:function(e){this.setState(Object(o.a)({},e.target.name,e.target.value))}},{key:"handleCustomChange",value:function(e){this.setState(Object(o.a)({},e.target.name,e.target.value))}},{key:"handleDisplayChange",value:function(e){this.setState({display:e.target.value})}},{key:"handleInputChange",value:function(e){this.setState({input:e})}},{key:"render",value:function(){var e,t;return e=this.state.input?l.a.createElement(y,{input:this.state.input,handleInputChange:this.handleInputChange,display:this.state.display,customText:{"#":this.state.lumberText,"|":this.state.treeText,".":this.state.groundText},customEmoji:{"#":this.state.lumberEmoji,"|":this.state.treeEmoji,".":this.state.groundEmoji},customColor:{"#":this.state.lumberColor,"|":this.state.treeColor,".":this.state.groundColor}}):l.a.createElement(v,{onInputChange:this.handleInputChange}),"display-text"===this.state.display?t=l.a.createElement("form",{className:"custom-select"},l.a.createElement("label",{htmlFor:"ground-text"},"Ground: "),l.a.createElement("input",{type:"color",value:this.state.groundText,id:"ground-text",name:"groundText",onChange:this.handleCustomChange}),l.a.createElement("label",{htmlFor:"tree-text"},"Tree: "),l.a.createElement("input",{type:"color",value:this.state.treeText,id:"tree-text",name:"treeText",onChange:this.handleCustomChange}),l.a.createElement("label",{htmlFor:"lumber-text"},"Lumber: "),l.a.createElement("input",{type:"color",value:this.state.lumberText,id:"lumber-text",name:"lumberText",onChange:this.handleCustomChange})):"display-emoji"===this.state.display?t=l.a.createElement("form",{className:"custom-select"},l.a.createElement("label",{htmlFor:"ground-emoji"},"Ground: "),l.a.createElement("select",{value:this.state.groundEmoji,id:"ground-emoji",name:"groundEmoji",onChange:this.handleEmoji},l.a.createElement("option",{value:"\u3030\ufe0f"},"\u3030\ufe0f"),l.a.createElement("option",{value:"\u27b0"},"\u27b0"),l.a.createElement("option",{value:"\u27bf"},"\u27bf"),l.a.createElement("option",{value:"\ud83c\udf00"},"\ud83c\udf00"),l.a.createElement("option",{value:"\u2757\ufe0f"},"\u2757\ufe0f"),l.a.createElement("option",{value:"\u274c"},"\u274c"),l.a.createElement("option",{value:"\ud83d\udca9"},"\ud83d\udca9"),l.a.createElement("option",{value:"\u2601\ufe0f"},"\u2601\ufe0f"),l.a.createElement("option",{value:"\u2764\ufe0f"},"\u2764\ufe0f"),l.a.createElement("option",{value:"\u26a0\ufe0f"},"\u26a0\ufe0f")),l.a.createElement("label",{htmlFor:"tree-emoji"},"Tree: "),l.a.createElement("select",{value:this.state.treeEmoji,id:"tree-emoji",name:"treeEmoji",onChange:this.handleEmoji},l.a.createElement("option",{value:"\ud83c\udf32"},"\ud83c\udf32"),l.a.createElement("option",{value:"\ud83c\udf84"},"\ud83c\udf84"),l.a.createElement("option",{value:"\ud83c\udf33"},"\ud83c\udf33"),l.a.createElement("option",{value:"\ud83c\udf34"},"\ud83c\udf34"),l.a.createElement("option",{value:"\ud83c\udf35"},"\ud83c\udf35"),l.a.createElement("option",{value:"\ud83c\udf31"},"\ud83c\udf31"),l.a.createElement("option",{value:"\ud83c\udf44"},"\ud83c\udf44"),l.a.createElement("option",{value:"\ud83c\udf38"},"\ud83c\udf38"),l.a.createElement("option",{value:"\ud83c\udf3b"},"\ud83c\udf3b"),l.a.createElement("option",{value:"\ud83e\udd96"},"\ud83e\udd96")),l.a.createElement("label",{htmlFor:"lumber-emoji"},"Lumber: "),l.a.createElement("select",{value:this.state.lumberEmoji,id:"lumber-emoji",name:"lumberEmoji",onChange:this.handleEmoji},l.a.createElement("option",{value:"\u26fa\ufe0f"},"\u26fa\ufe0f"),l.a.createElement("option",{value:"\ud83c\udfd5"},"\ud83c\udfd5"),l.a.createElement("option",{value:"\ud83d\udea7 "},"\ud83d\udea7"),l.a.createElement("option",{value:"\ud83d\uddff"},"\ud83d\uddff"),l.a.createElement("option",{value:"\ud83d\ude80"},"\ud83d\ude80"),l.a.createElement("option",{value:"\ud83c\udf31"},"\ud83c\udf31"),l.a.createElement("option",{value:"\ud83d\udd25"},"\ud83d\udd25"),l.a.createElement("option",{value:"\ud83d\udca5"},"\ud83d\udca5"),l.a.createElement("option",{value:"\u2b50\ufe0f"},"\u2b50\ufe0f"),l.a.createElement("option",{value:"\u26a1\ufe0f "},"\u26a1\ufe0f"," "))):"display-solid-color"===this.state.display&&(t=l.a.createElement("form",{className:"custom-select"},l.a.createElement("label",{htmlFor:"ground-text"},"Ground: "),l.a.createElement("input",{type:"color",value:this.state.groundColor,id:"ground-color",name:"groundColor",onChange:this.handleCustomChange}),l.a.createElement("label",{htmlFor:"tree-color"},"Tree: "),l.a.createElement("input",{type:"color",value:this.state.treeColor,id:"tree-color",name:"treeColor",onChange:this.handleCustomChange}),l.a.createElement("label",{htmlFor:"lumber-color"},"Lumber: "),l.a.createElement("input",{type:"color",value:this.state.lumberColor,id:"lumber-color",name:"lumberColor",onChange:this.handleCustomChange}))),l.a.createElement("div",{className:"App"},l.a.createElement("h1",null,"AOC 2018 Day 18 Visualiser ",l.a.createElement("span",{role:"img"},"\ud83c\udf1f ")),l.a.createElement("div",{className:"customiser"},l.a.createElement("h3",null,"Customise display"),l.a.createElement("form",{className:"display-options"},l.a.createElement("input",{type:"radio",id:"display-text",name:"display",value:"display-text",checked:"display-text"===this.state.display,onChange:this.handleDisplayChange}),l.a.createElement("label",{htmlFor:"display-text"},"Text"),l.a.createElement("input",{type:"radio",id:"display-emoji",name:"display",value:"display-emoji",checked:"display-emoji"===this.state.display,onChange:this.handleDisplayChange}),l.a.createElement("label",{htmlFor:"display-emoji"},"Emoji"),l.a.createElement("input",{type:"radio",id:"display-solid-color",name:"display",value:"display-solid-color",checked:"display-solid-color"===this.state.display,onChange:this.handleDisplayChange}),l.a.createElement("label",{htmlFor:"display-solid-color"},"Colored Squares")),t),l.a.createElement("div",null," ",e," "))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,2,1]]]);
//# sourceMappingURL=main.691263ac.chunk.js.map