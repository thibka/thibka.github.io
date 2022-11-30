(()=>{var e={500:(e,t,n)=>{var r=function(e){var t=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,n=0,r={},i={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(t){return t instanceof o?new o(t.type,e(t.content),t.alias):Array.isArray(t)?t.map(e):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function e(t,n){var r,o;switch(n=n||{},i.util.type(t)){case"Object":if(o=i.util.objId(t),n[o])return n[o];for(var a in r={},n[o]=r,t)t.hasOwnProperty(a)&&(r[a]=e(t[a],n));return r;case"Array":return o=i.util.objId(t),n[o]?n[o]:(r=[],n[o]=r,t.forEach((function(t,i){r[i]=e(t,n)})),r);default:return t}},getLanguage:function(e){for(;e;){var n=t.exec(e.className);if(n)return n[1].toLowerCase();e=e.parentElement}return"none"},setLanguage:function(e,n){e.className=e.className.replace(RegExp(t,"gi"),""),e.classList.add("language-"+n)},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(r){var e=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(r.stack)||[])[1];if(e){var t=document.getElementsByTagName("script");for(var n in t)if(t[n].src==e)return t[n]}return null}},isActive:function(e,t,n){for(var r="no-"+t;e;){var i=e.classList;if(i.contains(t))return!0;if(i.contains(r))return!1;e=e.parentElement}return!!n}},languages:{plain:r,plaintext:r,text:r,txt:r,extend:function(e,t){var n=i.util.clone(i.languages[e]);for(var r in t)n[r]=t[r];return n},insertBefore:function(e,t,n,r){var o=(r=r||i.languages)[e],a={};for(var s in o)if(o.hasOwnProperty(s)){if(s==t)for(var l in n)n.hasOwnProperty(l)&&(a[l]=n[l]);n.hasOwnProperty(s)||(a[s]=o[s])}var c=r[e];return r[e]=a,i.languages.DFS(i.languages,(function(t,n){n===c&&t!=e&&(this[t]=a)})),a},DFS:function e(t,n,r,o){o=o||{};var a=i.util.objId;for(var s in t)if(t.hasOwnProperty(s)){n.call(t,s,t[s],r||s);var l=t[s],c=i.util.type(l);"Object"!==c||o[a(l)]?"Array"!==c||o[a(l)]||(o[a(l)]=!0,e(l,n,s,o)):(o[a(l)]=!0,e(l,n,null,o))}}},plugins:{},highlightAll:function(e,t){i.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var r={callback:n,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};i.hooks.run("before-highlightall",r),r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),i.hooks.run("before-all-elements-highlight",r);for(var o,a=0;o=r.elements[a++];)i.highlightElement(o,!0===t,r.callback)},highlightElement:function(t,n,r){var o=i.util.getLanguage(t),a=i.languages[o];i.util.setLanguage(t,o);var s=t.parentElement;s&&"pre"===s.nodeName.toLowerCase()&&i.util.setLanguage(s,o);var l={element:t,language:o,grammar:a,code:t.textContent};function c(e){l.highlightedCode=e,i.hooks.run("before-insert",l),l.element.innerHTML=l.highlightedCode,i.hooks.run("after-highlight",l),i.hooks.run("complete",l),r&&r.call(l.element)}if(i.hooks.run("before-sanity-check",l),(s=l.element.parentElement)&&"pre"===s.nodeName.toLowerCase()&&!s.hasAttribute("tabindex")&&s.setAttribute("tabindex","0"),!l.code)return i.hooks.run("complete",l),void(r&&r.call(l.element));if(i.hooks.run("before-highlight",l),l.grammar)if(n&&e.Worker){var p=new Worker(i.filename);p.onmessage=function(e){c(e.data)},p.postMessage(JSON.stringify({language:l.language,code:l.code,immediateClose:!0}))}else c(i.highlight(l.code,l.grammar,l.language));else c(i.util.encode(l.code))},highlight:function(e,t,n){var r={code:e,grammar:t,language:n};if(i.hooks.run("before-tokenize",r),!r.grammar)throw new Error('The language "'+r.language+'" has no grammar.');return r.tokens=i.tokenize(r.code,r.grammar),i.hooks.run("after-tokenize",r),o.stringify(i.util.encode(r.tokens),r.language)},tokenize:function(e,t){var n=t.rest;if(n){for(var r in n)t[r]=n[r];delete t.rest}var i=new l;return c(i,i.head,e),s(e,i,t,i.head,0),function(e){for(var t=[],n=e.head.next;n!==e.tail;)t.push(n.value),n=n.next;return t}(i)},hooks:{all:{},add:function(e,t){var n=i.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=i.hooks.all[e];if(n&&n.length)for(var r,o=0;r=n[o++];)r(t)}},Token:o};function o(e,t,n,r){this.type=e,this.content=t,this.alias=n,this.length=0|(r||"").length}function a(e,t,n,r){e.lastIndex=t;var i=e.exec(n);if(i&&r&&i[1]){var o=i[1].length;i.index+=o,i[0]=i[0].slice(o)}return i}function s(e,t,n,r,l,u){for(var g in n)if(n.hasOwnProperty(g)&&n[g]){var d=n[g];d=Array.isArray(d)?d:[d];for(var h=0;h<d.length;++h){if(u&&u.cause==g+","+h)return;var f=d[h],m=f.inside,b=!!f.lookbehind,x=!!f.greedy,y=f.alias;if(x&&!f.pattern.global){var _=f.pattern.toString().match(/[imsuy]*$/)[0];f.pattern=RegExp(f.pattern.source,_+"g")}for(var v=f.pattern||f,w=r.next,A=l;w!==t.tail&&!(u&&A>=u.reach);A+=w.value.length,w=w.next){var k=w.value;if(t.length>e.length)return;if(!(k instanceof o)){var F,C=1;if(x){if(!(F=a(v,A,e,b))||F.index>=e.length)break;var E=F.index,j=F.index+F[0].length,$=A;for($+=w.value.length;E>=$;)$+=(w=w.next).value.length;if(A=$-=w.value.length,w.value instanceof o)continue;for(var S=w;S!==t.tail&&($<j||"string"==typeof S.value);S=S.next)C++,$+=S.value.length;C--,k=e.slice(A,$),F.index-=A}else if(!(F=a(v,0,k,b)))continue;E=F.index;var I=F[0],L=k.slice(0,E),O=k.slice(E+I.length),R=A+k.length;u&&R>u.reach&&(u.reach=R);var B=w.prev;if(L&&(B=c(t,B,L),A+=L.length),p(t,B,C),w=c(t,B,new o(g,m?i.tokenize(I,m):I,y,I)),O&&c(t,w,O),C>1){var U={cause:g+","+h,reach:R};s(e,t,n,w.prev,A,U),u&&U.reach>u.reach&&(u.reach=U.reach)}}}}}}function l(){var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,this.head=e,this.tail=t,this.length=0}function c(e,t,n){var r=t.next,i={value:n,prev:t,next:r};return t.next=i,r.prev=i,e.length++,i}function p(e,t,n){for(var r=t.next,i=0;i<n&&r!==e.tail;i++)r=r.next;t.next=r,r.prev=t,e.length-=i}if(e.Prism=i,o.stringify=function e(t,n){if("string"==typeof t)return t;if(Array.isArray(t)){var r="";return t.forEach((function(t){r+=e(t,n)})),r}var o={type:t.type,content:e(t.content,n),tag:"span",classes:["token",t.type],attributes:{},language:n},a=t.alias;a&&(Array.isArray(a)?Array.prototype.push.apply(o.classes,a):o.classes.push(a)),i.hooks.run("wrap",o);var s="";for(var l in o.attributes)s+=" "+l+'="'+(o.attributes[l]||"").replace(/"/g,"&quot;")+'"';return"<"+o.tag+' class="'+o.classes.join(" ")+'"'+s+">"+o.content+"</"+o.tag+">"},!e.document)return e.addEventListener?(i.disableWorkerMessageHandler||e.addEventListener("message",(function(t){var n=JSON.parse(t.data),r=n.language,o=n.code,a=n.immediateClose;e.postMessage(i.highlight(o,i.languages[r],r)),a&&e.close()}),!1),i):i;var u=i.util.currentScript();function g(){i.manual||i.highlightAll()}if(u&&(i.filename=u.src,u.hasAttribute("data-manual")&&(i.manual=!0)),!i.manual){var d=document.readyState;"loading"===d||"interactive"===d&&u&&u.defer?document.addEventListener("DOMContentLoaded",g):window.requestAnimationFrame?window.requestAnimationFrame(g):window.setTimeout(g,16)}return i}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=r),void 0!==n.g&&(n.g.Prism=r),r.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},r.languages.javascript=r.languages.extend("clike",{"class-name":[r.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp("(^|[^\\w$])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][\\dA-Fa-f]+(?:_[\\dA-Fa-f]+)*n?|\\d+(?:_\\d+)*n|(?:\\d+(?:_\\d+)*(?:\\.(?:\\d+(?:_\\d+)*)?)?|\\.\\d+(?:_\\d+)*)(?:[Ee][+-]?\\d+(?:_\\d+)*)?)(?![\\w$])"),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),r.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,r.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp("((?:^|[^$\\w\\xA0-\\uFFFF.\"'\\])\\s]|\\b(?:return|yield))\\s*)/(?:(?:\\[(?:[^\\]\\\\\r\n]|\\\\.)*\\]|\\\\.|[^/\\\\\\[\r\n])+/[dgimyus]{0,7}|(?:\\[(?:[^[\\]\\\\\r\n]|\\\\.|\\[(?:[^[\\]\\\\\r\n]|\\\\.|\\[(?:[^[\\]\\\\\r\n]|\\\\.)*\\])*\\])*\\]|\\\\.|[^/\\\\\\[\r\n])+/[dgimyus]{0,7}v[dgimyus]{0,7})(?=(?:\\s|/\\*(?:[^*]|\\*(?!/))*\\*/)*(?:$|[\r\n,.;:})\\]]|//))"),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:r.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:r.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:r.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:r.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:r.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),r.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:r.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),r.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),r.languages.markup&&(r.languages.markup.tag.addInlined("script","javascript"),r.languages.markup.tag.addAttribute("on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)","javascript")),r.languages.js=r.languages.javascript}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{"use strict";n(500);class e{constructor(t={}){t.container?(this.container="string"==typeof t.container?document.querySelector(t.container):t.container,this.position_type="absolute"):(this.container=document.body,this.position_type="fixed"),this.propReferences=[],t.isFolder?this._folderConstructor(t.folderOptions):(this.name=null!=t&&"string"==typeof t.name?t.name:"",this.backgroundColor=t.color||null,this.maxHeight=Math.min(this.container.clientHeight,window.innerHeight),t.maxHeight&&(this.initMaxHeight=t.maxHeight,this.maxHeight=Math.min(this.initMaxHeight,this.maxHeight)),this.screenCorner=this._parseScreenCorner(t.position),this instanceof e&&("number"!=typeof e[e.instanceCounter]?e[e.instanceCounter]=0:e[e.instanceCounter]++),this.instanceId=e[e.instanceCounter],this.wrapperWidth=t.width||290,this.stylesheet=document.createElement("style"),this.stylesheet.setAttribute("type","text/css"),this.stylesheet.setAttribute("id","lm-gui-stylesheet"),document.head.append(this.stylesheet),0==this.instanceId&&this._addStyles(`\n.p-gui {\n    position: ${this.position_type};\n    top: 0;\n    left: 0;\n    transform: translate3d(0,0,0);\n    padding-top: 21px;\n    background: #2e2e2e;\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    font-family: Verdana, Arial, sans-serif;\n    width: 290px;\n    overflow: auto;\n    box-shadow: 0 0 2px black;\n    box-sizing: border-box;\n    z-index: 99999;\n    user-select: none;\n    border-bottom-right-radius: 3px;\n    border-bottom-left-radius: 3px;\n}\n\n.p-gui--collapsed {\n    height: 0;\n    padding: 21px 10px 0 10px;\n    overflow: hidden;\n}\n\n.p-gui__header {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 20px;\n    background-color: rgba(0, 0, 0, .8);\n    border-bottom: 1px solid #484848;\n    cursor: grab;\n    color: grey;\n    font-size: 10px;\n    line-height: 20px;\n    padding-left: 8px;\n    box-sizing: border-box;\n    touch-action: none;\n}\n\n.p-gui__header-close {\n    width: 20px;\n    height: 20px;\n    position: absolute;\n    top: 0;\n    right: 0;\n    cursor: pointer;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUAQMAAAC3R49OAAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAABFJREFUCNdjIAb8//8BjIkAAOrOBd3TR0jRAAAAAElFTkSuQmCC);\n    background-size: 50% 50%;\n    background-position: center;\n    background-repeat: no-repeat; \n}\n\n.p-gui--collapsed .p-gui__header-close {\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUAQMAAAC3R49OAAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAABVJREFUCNdjYEhgIIj///8AwsSoBQD43QydY5mb0QAAAABJRU5ErkJggg==);\n}\n\n.p-gui__image-container {\n    width: 100%;\n    display: grid;\n    grid-template-columns: repeat(auto-fill, 32%);\n    justify-content: space-between;\n    padding: 0 2%;\n}\n\n.p-gui__image {\n    aspect-ratio: 1 / 1;\n    background-size: cover;\n    cursor: pointer;\n    position: relative;\n    margin-top: 1px;\n    margin-bottom: 19px;\n}\n\n.p-gui__image-text {\n    position: absolute;\n    bottom: -15px;\n    color: #eee;\n    font-size: 11px;\n    text-shadow: 0 -1px 0 #111;\n    white-space: nowrap;\n    width: 100%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.p-gui__button, \n.p-gui__switch,\n.p-gui__list,\n.p-gui__vector2,\n.p-gui__color {\n    width: 100%;\n    padding: 7px;\n    font-size: 11px;\n    color: white;\n    border-bottom: 1px solid #00ff89;\n    cursor: pointer;\n    position: relative;\n    box-sizing: border-box;\n    margin-bottom: 3px;\n}\n\n.p-gui__button,\n.p-gui__switch {\n    margin-right: 2px;\n    margin-left: 2px;\n    border: 1px solid rgba(0,0,0,.5);\n    border-bottom: 1px solid #00ff89;\n    border-radius: 2px;\n    background: rgba(0, 0, 0, .3);\n    background: linear-gradient(180deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 5%, rgba(0,0,0,0) 95%, rgba(0,0,0,0.3) 100%);\n}\n\n.p-gui__button:hover,\n.p-gui__switch:hover {\n    background: rgba(0, 0, 0, .3);\n}\n\n.p-gui__folder .p-gui__button,\n.p-gui__folder .p-gui__switch {\n    margin-right: 0;\n    margin-left: 0;\n}\n\n.p-gui__vector2 {\n    background: transparent;\n    border-bottom: 1px solid #ff9999;\n    aspect-ratio: 1;\n    padding-bottom: 0;\n}\n\n.p-gui__vector2-area {\n    position: relative;\n    background: rgba(0, 0, 0, .3);\n    margin-top: 8px;\n    width: 100%;\n    height: calc(100% - 28px);\n}\n\n.p-gui__vector2-line {\n    position: absolute;\n    background: white;\n    opacity: .3;\n    pointer-events: none;\n}\n\n.p-gui__vector2-line-x {\n    width: 100%;\n    height: 1px;\n    left: 0;\n    top: 50%;\n    transform: translateY(-50%);\n}\n\n.p-gui__vector2-line-y {\n    width: 1px;\n    height: 100%;\n    top: 0;\n    left: 50%;\n    transform: translateX(-50%);\n}\n\n.p-gui__vector2-dot {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    background: #d5d5d5;\n    border: 2px solid #ff9999;\n    transform: translate(-50%, -50%);\n    pointer-events: none;\n}\n\n.p-gui__switch-checkbox {\n    width: 5px;\n    height: 5px;\n    background-color: rgba(0, 0, 0, .5);\n    position: absolute;\n    top: 0;\n    right: 8px;\n    bottom: 0;\n    margin: auto;\n    border-radius: 50%;\n    pointer-events: none;\n}\n\n.p-gui__switch-checkbox--active {\n    background-color: #00ff89;\n    box-shadow: 0 0 5px #00ff89;\n}\n\n.p-gui__list,\n.p-gui__color {\n    cursor: default;\n}\n\n.p-gui__list-dropdown,\n.p-gui__color-picker {\n    position: absolute;\n    right: 5px;\n    top: 0;\n    bottom: 0;\n    margin: auto;\n    height: 21px;\n    cursor: pointer;\n}\n\n.p-gui__list-dropdown {\n    background: rgba(0,0,0,.25);\n    color: white;\n    border: 1px solid rgba(0,0,0,.5);\n    border-radius: 3px;\n    padding: 0 12px;\n    top: -1px;\n}\n\n.p-gui__color-picker {\n    -webkit-appearance: none;\n    padding: 0;\n    background-color: transparent;\n    border: 1px solid #222222;\n}\n\n.p-gui__color-picker::-webkit-color-swatch-wrapper {\n\tpadding: 0;\n}\n.p-gui__color-picker::-webkit-color-swatch {\n\tborder: none;\n}\n\n.p-gui__slider {\n    width: 100%;\n    margin-bottom: 8px;\n    padding: 7px;\n    font-size: 11px;\n    color: white;\n    position: relative;\n    min-height: 14px;\n}\n\n.p-gui__slider-ctrl {\n    -webkit-appearance: none;\n    padding: 0;\n    font: inherit;\n    outline: none;\n    opacity: .8;\n    background: #00a1ff;\n    box-sizing: border-box;\n    cursor: pointer;\n    position: absolute;\n    bottom: -4px; /* 5px height -1px de dépassement du curseur */\n    right: 0;\n    height: 5px;\n    width: 100%;\n    margin: 0;\n}\n\n/* la zone de déplacement */\n.p-gui__slider-ctrl::-webkit-slider-runnable-track {\n    height: 13px;\n    border: none;\n    border-radius: 0;\n    background-color: transparent;  /* supprimé définie sur l'input */\n}\n\n/* Curseur */\n.p-gui__slider-ctrl::-webkit-slider-thumb {\n    -webkit-appearance: none;       /* également nécessaire sur le curseur */\n    width: 15px;\n    height: 7px;\n    border: none;             /* pris en compte sur Webkit et Edge */\n    background: white;       /* pris en compte sur Webkit only */\n    position: relative;\n    top: 3px;\n    border-radius: 1px;\n}\n\n.p-gui__slider-value,\n.p-gui__vector-value {\n    display: inline-block;\n    position: absolute;\n    right: 7px;\n}\n\n.p-gui__folder {\n    width: 100%;\n    position: relative;\n    background: #434343;\n    overflow: hidden;\n    margin-bottom: 3px;\n    display: flex;\n    flex-wrap: wrap;\n    border-left: 2px solid grey;\n    padding: 0 3px;\n}\n\n.p-gui__folder--first {\n    margin-top: 0;\n}\n\n.p-gui__folder--closed {\n    height: 22px;\n}\n\n.p-gui__folder-header {\n    padding: 5px;\n    font-size: 11px;\n    background-color: rgba(0, 0, 0, .5);\n    color: white;\n    cursor: pointer;\n    width: 100%;\n    margin: 0 -2px 2px -3px;\n}\n\n.p-gui__folder-header:hover {\n    background-color: rgba(0, 0, 0, .75);\n}\n\n.p-gui__folder-arrow {\n    width: 8px;\n    height: 8px;\n    display: inline-block;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAHlBMVEUAAAD///////////////////////////////////8kfJuVAAAACXRSTlMA9Z1fCdMo1yxEJnA0AAAAK0lEQVQI12PABlRgjKkJUMZMYRhjpgqMAZSEMICSaIzpDWiKhdENhEhgAgATSg5jyWnYewAAAABJRU5ErkJggg==);\n    background-size: contain;\n    margin-right: 5px;\n    transform: rotate(90deg)\n}\n\n.p-gui__folder--closed .p-gui__folder-arrow {\n    transform: rotate(0deg);\n}\n`),this._styleInstance(),this._addWrapper(),this.wrapper.setAttribute("data-corner-x",this.screenCorner.x),this.wrapper.setAttribute("data-corner-y",this.screenCorner.y),0!=t.autoRepositioning&&window.addEventListener("resize",this._handleResize.bind(this)),this._handleResize(),this.hasBeenDragged=!1,1==t.draggable&&this._makeDraggable(),this.closed=!1,t.closed&&this.toggleClose(),this.folders=[])}_styleInstance(){let e=this._getScrollbarWidth(this.container);if("left"==this.screenCorner.x?this.xOffset=0:this.xOffset=this.container.clientWidth-this.wrapperWidth-e,this.instanceId>0){let e=this.container.querySelectorAll(".p-gui");for(let t=0;t<e.length;t++)this.screenCorner.y==e[t].dataset.cornerY&&("left"==this.screenCorner.x&&"left"==e[t].dataset.cornerX?this.xOffset+=e[t].offsetWidth:"right"==this.screenCorner.x&&"right"==e[t].dataset.cornerX&&(this.xOffset-=e[t].offsetWidth))}this.yOffset=0,this.position={prevX:this.xOffset,prevY:this.yOffset,x:this.xOffset,y:this.yOffset},this._addStyles(`#p-gui-${this.instanceId} {\n            width: ${this.wrapperWidth}px;\n            max-height: ${this.maxHeight}px;\n            transform: translate3d(${this.xOffset}px,${this.yOffset}px,0);\n            ${"top"==this.screenCorner.y?"":"top: auto; bottom: 0;"}\n            ${this.backgroundColor?"background: "+this.backgroundColor+";":""}\n        }`)}_folderConstructor(e){this.wrapper=e.wrapper}_parseScreenCorner(e){let t={x:"right",y:"top"};return null==e||("string"!=typeof e&&console.error("[perfect-gui] Position must be a string."),e.includes("left")&&(t.x="left"),e.includes("bottom")&&(t.y="bottom")),t}_getScrollbarWidth(e){return e===document.body?window.innerWidth-document.documentElement.clientWidth:e.offsetWidth-e.clientWidth}_handleResize(){if(this.maxHeight=Math.min(this.initMaxHeight,Math.min(this.container.clientHeight,window.innerHeight)),this.hasBeenDragged)return;let e=this._getScrollbarWidth(this.container);if(this.xOffset="left"==this.screenCorner.x?0:this.container.clientWidth-this.wrapperWidth-e,this.instanceId>0){let e=this.container.querySelectorAll(`.p-gui:not(#${this.wrapper.id}):not([data-dragged])`);for(let t=0;t<e.length&&!(parseInt(e[t].id.replace("p-gui-",""))>this.instanceId);t++)this.screenCorner.y==e[t].dataset.cornerY&&("left"==this.screenCorner.x&&"left"==e[t].dataset.cornerX?this.xOffset+=e[t].offsetWidth:"right"==this.screenCorner.x&&"right"==e[t].dataset.cornerX&&(this.xOffset-=e[t].offsetWidth))}this.position={prevX:this.xOffset,prevY:this.yOffset,x:this.xOffset,y:this.yOffset},this.wrapper.style.transform=`translate3d(${this.position.x}px, ${this.position.y}px, 0)`}_createElement(e){e.el=e.el||"div";var t=document.createElement(e.el);if(e.id&&(t.id=e.id),e.class&&(t.className=e.class),e.inline&&(t.style=e.inline),e.href&&(t.href=e.href),e.onclick&&(t.onclick=e.onclick),e.onchange&&(t.onchange=e.onchange),e.textContent&&(t.textContent=e.textContent),e.innerHTML&&(t.innerHTML=e.innerHTML),e.type&&(t.type=e.type),e.value&&(t.value=e.value),e.customAttributes)for(var n in e.customAttributes)t.setAttribute(n,e.customAttributes[n]);return e.parent=e.parent?e.parent:this.wrapper,e.parent.append(t),t}_addStyles(e){this.stylesheet.innerHTML+=e}_addWrapper(){this.wrapper=this._createElement({parent:this.container,id:"p-gui-"+this.instanceId,class:"p-gui"}),this.header=this._createElement({parent:this.wrapper,class:"p-gui__header",textContent:this.name,inline:this.backgroundColor?"border-color: "+this.backgroundColor+";":""}),this._createElement({parent:this.header,class:"p-gui__header-close",onclick:this.toggleClose.bind(this)})}button(e,t){"string"!=typeof e&&(e="object"==typeof e&&e?.hasOwnProperty("name")?e.name:" "),""===e&&(e=" "),this.imageContainer=null,"function"!=typeof t&&(t=()=>{}),this._createElement({class:"p-gui__button",textContent:e,onclick:t})}image(e={},t){if("object"!=typeof e)throw Error(`[GUI] image() first parameter must be an object. Received: ${typeof e}.`);let n;if("string"!=typeof e.path)throw null==typeof e.path?Error("[GUI] image() path must be provided."):Error("[GUI] image() path must be a string.");n=e.path;let r,i=n.replace(/^.*[\\\/]/,"");r=null==e.name?i:"string"==typeof e.name&&e.name||" ",this.imageContainer||(this.imageContainer=this._createElement({class:"p-gui__image-container"}));var o=this._createElement({class:"p-gui__image",inline:`background-image: url(${n})`,parent:this.imageContainer});this._createElement({parent:o,class:"p-gui__image-text",textContent:r}),"function"==typeof t&&(o.onclick=()=>t({path:n,text:r}))}slider(e={},t){if("object"!=typeof e)throw Error(`[GUI] slider() first parameter must be an object. Received: ${typeof e}.`);let n="string"==typeof e.name&&e.name||" ",r=!1,i=null,o=e.obj||e.object,a=e.prop||e.property,s="number"==typeof e.value?e.value:null,l=e.min??0,c=e.max??1,p=e.step||(c-l)/100;if(null!==s)null==a&&null==o||console.warn('[GUI] slider() "obj" and "property" parameters are ignored when a "value" parameter is used.');else if(null!=a&&null!=o){if("string"!=typeof a)throw Error(`[GUI] slider() "prop" (or "property") parameter must be an string. Received: ${typeof a}.`);if("object"!=typeof o)throw Error(`[GUI] slider() "obj" (or "object") parameter must be an object. Received: ${typeof o}.`);" "==n&&(n=a),i=this.propReferences.push(o[a])-1,r=!0}else(null!=a&&null==o||null==a&&null==o)&&console.warn('[GUI] slider() "obj" and "prop" parameters must be used together.'),s=(c-l)/2;this.imageContainer=null;var u=this._createElement({class:"p-gui__slider",textContent:n}),g=this._createElement({parent:u,el:"input",class:"p-gui__slider-ctrl",customAttributes:{type:"range",min:l,max:c,step:p,value:r?o[a]:s}}),d=this._createElement({parent:u,class:"p-gui__slider-value",textContent:String(r?o[a]:s)});g.addEventListener("input",(()=>{d.textContent=g.value,r&&(o[a]=g.value),"function"==typeof t&&t(parseFloat(g.value))})),r&&Object.defineProperty(o,a,{set:e=>{this.propReferences[i]=e,g.value=e,d.textContent=String(e)},get:()=>this.propReferences[i]})}toggle(e={},t){if("object"!=typeof e)throw Error(`[GUI] toggle() first parameter must be an object. Received: ${typeof e}.`);let n="string"==typeof e.name&&e.name||" ",r=!0===e.value;this.imageContainer=null;let i=this._createElement({class:"p-gui__switch",onclick:e=>{let n=e.target.childNodes[1],r=!0;n.classList.contains("p-gui__switch-checkbox--active")&&(r=!1),n.classList.toggle("p-gui__switch-checkbox--active"),"function"==typeof t&&t(r)},textContent:n}),o=r?" p-gui__switch-checkbox--active":"";this._createElement({parent:i,class:"p-gui__switch-checkbox"+o})}list(e={},t){if("object"!=typeof e)throw Error(`[GUI] list() first parameter must be an object. Received: ${typeof e}.`);let n="string"==typeof e.name?e.name:" ",r=Array.isArray(e.values)?e.values:null;t="function"==typeof t?t:null,this.imageContainer=null;let i=this._createElement({class:"p-gui__list",textContent:n}),o=this._createElement({parent:i,el:"select",class:"p-gui__list-dropdown",onchange:e=>{t&&t(e.target.value)}});r.forEach((e=>{this._createElement({parent:o,el:"option",customAttributes:{value:e},textContent:e})}))}options(e,t){if("object"!=typeof e)throw Error(`[GUI] options() first parameter must be an object. Received: ${typeof e}.`);this.list(e,t)}vector2(e={},t){if("object"!=typeof e)throw Error(`[GUI] vector2() first parameter must be an object. Received: ${typeof e}.`);let n="string"==typeof e.name&&e.name||" ";const r=e.x.min??0,i=e.x.max??1,o=e.y.min??0,a=e.y.max??1,s=e.x.obj||e.x.object,l=e.x.prop||e.x.property,c=this.propReferences.push(s[l])-1,p=e.y.obj||e.y.object,u=e.y.prop||e.y.property,g=this.propReferences.push(p[u])-1;t="function"==typeof t?t:null,this.imageContainer=null;const d=this._createElement({class:"p-gui__vector2",textContent:n}),h=this._createElement({parent:d,class:"p-gui__vector-value",textContent:s[l]+", "+p[u]}),f=this._createElement({parent:d,el:"div",class:"p-gui__vector2-area",onclick:e=>{s[l]=parseFloat(this._mapLinear(e.offsetX,0,f.clientWidth,r,i).toFixed(1)),p[u]=parseFloat(this._mapLinear(e.offsetY,0,f.clientHeight,a,o).toFixed(1)),t&&t(s[l],s[u])}});let m=!1;f.addEventListener("pointerdown",(e=>{m=!0})),f.addEventListener("pointerup",(()=>{m=!1})),f.addEventListener("pointermove",(e=>{m&&(s[l]=parseFloat(this._mapLinear(e.offsetX,0,f.clientWidth,r,i).toFixed(1)),p[u]=parseFloat(this._mapLinear(e.offsetY,0,f.clientHeight,a,o).toFixed(1)),t&&t(s[l],s[u]))})),this._createElement({parent:f,class:"p-gui__vector2-line p-gui__vector2-line-x"}),this._createElement({parent:f,class:"p-gui__vector2-line p-gui__vector2-line-y"});const b=this._createElement({parent:f,class:"p-gui__vector2-dot"});b.style.left=this._mapLinear(s[l],r,i,0,f.clientWidth)+"px",b.style.top=this._mapLinear(p[u],o,a,f.clientHeight,0)+"px",Object.defineProperty(s,l,{set:e=>{this.propReferences[c]=e,b.style.left=this._mapLinear(e,r,i,0,f.clientWidth)+"px",h.textContent=String(e)+", "+p[u]},get:()=>this.propReferences[c]}),Object.defineProperty(p,u,{set:e=>{this.propReferences[g]=e,b.style.top=this._mapLinear(e,o,a,f.clientHeight,0)+"px",h.textContent=s[l]+", "+String(e)},get:()=>this.propReferences[g]})}color(e={},t){if("object"!=typeof e)throw Error(`[GUI] color() first parameter must be an object. Received: ${typeof e}.`);let n,r="string"==typeof e.name&&e.name||" ";"string"==typeof e.value&&(7!=e.value.length||"#"!=e.value[0]?console.error(`[GUI] color() 'value' parameter must be an hexadecimal string in the format "#ffffff". Received: "${e.value}".`):n=e.value),n||(n="#000000");const i=this._createElement({el:"div",class:"p-gui__color",textContent:r}),o=this._createElement({parent:i,el:"input",class:"p-gui__color-picker",type:"color",value:n});"function"==typeof t&&o.addEventListener("input",(()=>{t(o.value)}))}folder(t={}){let n="boolean"==typeof t.closed&&t.closed,r=t.name||"",i=t.color||null;this.imageContainer=null;let o="p-gui__folder";0==this.folders.length&&(o+=" p-gui__folder--first"),n&&(o+=" p-gui__folder--closed");let a=this._createElement({class:o,inline:i?`background-color: ${i};`:null}),s=(this._createElement({innerHTML:`<span class="p-gui__folder-arrow"></span>${r}`,class:"p-gui__folder-header",onclick:function(){this.parentNode.classList.toggle("p-gui__folder--closed")},parent:a}),new e({isFolder:!0,folderOptions:{wrapper:a}}));return this.folders.push(s),s}_makeDraggable(){var e=this;function t(t){t.preventDefault(),e.hasBeenDragged||(e.hasBeenDragged=!0,e.wrapper.setAttribute("data-dragged","true")),e.position.x=e.position.initX+t.clientX-e.position.prevX,e.position.y=e.position.initY+t.clientY-e.position.prevY,e.wrapper.style.transform="translate3d("+e.position.x+"px,"+e.position.y+"px,0)"}this.header.addEventListener("pointerdown",(function(n){n.preventDefault(),e.position.initX=e.position.x,e.position.initY=e.position.y,e.position.prevX=n.clientX,e.position.prevY=n.clientY,document.addEventListener("pointermove",t)})),this.header.addEventListener("pointerup",(function(e){document.removeEventListener("pointermove",t)}))}toggleClose(){this.closed=!this.closed,this.wrapper.classList.toggle("p-gui--collapsed")}kill(){this.wrapper.remove()}_mapLinear(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}}const t=e;function r(){for(var e="0123456789ABCDEF".split(""),t="#",n=0;n<6;n++)t+=e[Math.round(15*Math.random())];return t}const i="#container-4",o="#container-5";let a=["probably not","maybe not so","almost","nearly"];a=a[Math.floor(Math.random()*a.length)],document.getElementById("subtitle-random").textContent=a,function(){const e={x:0},n=document.querySelector("#container-1 .element"),i=new t({name:"Basics",container:"#container-1",draggable:!0});i.button("Button",(()=>{n.style.backgroundColor=r(),n.style.backgroundImage="none"})),i.slider({name:"Slider (simple callback)",value:1},(e=>{n.style.opacity=e})),i.slider({name:"Slider 2 (object binding)",obj:e,prop:"x",min:-30,max:30,step:.1},(()=>{n.style.transform=`translateX(${e.x}px)`})),i.toggle({name:"Toggle",state:!0},(e=>{e?n.classList.remove("round"):n.classList.add("round")})),i.options({name:"List",values:["red","pink","yellow","blue"]},(e=>{n.style.backgroundImage="none",n.style.backgroundColor=e})),i.image({name:"Image 1",path:"https://raw.githubusercontent.com/thibka/thibka.github.io/master/perfect-gui/_data/img/DALL·E-2022-11-13-20.11.16---portrait-of-a-squirrel-in-an-officier-suit,-style-of-a-Rembrandt-painting.jpg"},(e=>{n.style.backgroundImage=`url(${e.path})`})),i.image({name:"Image 2",path:"https://raw.githubusercontent.com/thibka/thibka.github.io/master/perfect-gui/_data/img/DALL·E-2022-11-13-20.11.52---a-blonde-girl-riding-a-whale-in-the-style-of-hopper.jpg"},(e=>{n.style.backgroundImage=`url(${e.path})`})),i.image({name:"Image 3",path:"https://raw.githubusercontent.com/thibka/thibka.github.io/master/perfect-gui/_data/img/DALL·E-2022-11-13-20.13.55---1-blonde-haired-girl-with-her-orange-cat,-watching-the-whales-in-Tadoussac,-Canada.-In-the-style-of-an-oil-painting..jpg"},(e=>{n.style.backgroundImage=`url(${e.path})`})),i.color({name:"Color",value:"#06ff89"},(e=>{n.style.backgroundImage="none",n.style.backgroundColor=e}))}(),function(){const e=document.querySelector("#container-button .element");new t({container:"#container-button",draggable:!0}).button("Button",(()=>{e.style.backgroundColor=r()}))}(),function(){const e=document.querySelector("#container-slider .element"),n={x:0},r=new t({container:"#container-slider",draggable:!0});r.slider({name:"Simple slider (value & callback)",value:1},(t=>{e.style.opacity=t})),r.slider({name:"Slider with object binding",obj:n,prop:"x",min:-30,max:30},(()=>{e.style.transform=`translateX(${n.x}px)`}))}(),function(){const e=document.querySelector("#container-toggle .element");new t({container:"#container-toggle",draggable:!0}).toggle({name:"Toggle",value:!0},(t=>{t?e.classList.remove("round"):e.classList.add("round")}))}(),function(){const e=document.querySelector("#container-list .element");new t({container:"#container-list",draggable:!0}).list({name:"List",values:["red","pink","yellow","blue"]},(t=>{e.style.backgroundColor=t}))}(),function(){const e=document.querySelector("#container-image .element");new t({container:"#container-image",draggable:!0}).image({name:"Lorem ipsum",path:"https://raw.githubusercontent.com/thibka/thibka.github.io/master/perfect-gui/_data/img/DALL·E-2022-11-13-20.11.16---portrait-of-a-squirrel-in-an-officier-suit,-style-of-a-Rembrandt-painting.jpg"},(t=>{e.style.backgroundImage=`url( ${t.path} )`}))}(),function(){const e=document.querySelector("#container-color .element");new t({container:"#container-color",draggable:!0}).color({name:"Color",value:"#06ff89"},(t=>{e.style.backgroundColor=t}))}(),function(){const e={x:0,y:0},n=document.querySelector("#container-vector2 .element");new t({container:"#container-vector2"}).vector2({name:"Position",x:{obj:e,prop:"x",min:-50,max:50},y:{obj:e,prop:"y",min:-50,max:50}},((e,t)=>{n.style.transform=`translate(${e}px, ${-t}px)`}))}(),function(){const e=document.querySelector("#container-folder .element"),n=new t({name:"Folders",container:"#container-folder"});let i=n.folder({name:"Folder 1"});i.button("Button",(()=>{let t=r();e.style.backgroundColor=t})),i.slider({name:"Slider",value:1},(t=>{e.style.transform=`scale(${t})`})),n.folder({name:"Folder 2",color:"#993333"}).button("Button",(()=>{e.style.backgroundColor=r()})),n.folder({name:"Folder 3",closed:!0}).button("Button",(()=>{e.style.backgroundColor=r()}))}(),function(){const e=new t({container:"#container-toggleclose"});e.button("gui_2.toggleClose();",(()=>{n.toggleClose()}));const n=new t({container:"#container-toggleclose"});n.button("gui_1.toggleClose();",(()=>{e.toggleClose()}))}(),function(){const e=document.querySelector("#container-2 .element");new t({name:"GUI 1",width:200,container:"#container-2"}).button("By the way, buttons can handle multiple lines of text.",(()=>{e.style.backgroundColor=r()})),new t({name:"GUI 2",width:200,container:"#container-2"}).button("Button",(()=>e.style.backgroundColor=r())),new t({name:"GUI 3",position:"top left",container:"#container-2"}).button("Button",(()=>e.style.backgroundColor=r())),new t({name:"GUI 4",position:"right bottom",container:"#container-2"}).button("Button",(()=>e.style.backgroundColor=r()))}(),function(){new t({container:i,name:"GUI 1 (drag me!)",width:450,draggable:!0}).button("Custom width using the `width` option",(()=>{}));const e=new t({container:i,name:"GUI 2 (closed, scrollable)",closed:!0});let n=e.folder({name:"folder",color:"#33329f"});for(let e=0;e<3;e++)n.button("btn "+e,(()=>{}));let r=e.folder({name:"folder",color:"#9f3293"});for(let e=0;e<3;e++)r.button("btn "+e,(()=>{}));for(let t=0;t<10;t++)e.button("btn "+t,(()=>{}));new t({container:i,position:"bottom right",name:"GUI 3 (custom color)",color:"#226666"}).button("lorem",(()=>{}))}(),function(){const e=[];let n=new t({container:o,name:"GUI 1"});n.button("Create GUI panel",(()=>{e[e.length]=new t({container:o,name:"Created GUI",position:"bottom left",width:150,color:"red"})})),n.button("Kill GUI panel",(()=>{const t=e.length-1;t>=0&&(e[t].wrapper.remove(),e[t]=null,e.splice(t,1))}))}()})()})();