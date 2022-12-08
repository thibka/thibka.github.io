(()=>{"use strict";class e{constructor(t={}){t.container?(this.container="string"==typeof t.container?document.querySelector(t.container):t.container,this.position_type="absolute"):(this.container=document.body,this.position_type="fixed"),this.propReferences=[],this.folders=[],t.isFolder?this._folderConstructor(t.folderOptions):(this.name=null!=t&&"string"==typeof t.name?t.name:"",this.backgroundColor=t.color||null,this.container==document.body?this.maxHeight=window.innerHeight:this.maxHeight=Math.min(this.container.clientHeight,window.innerHeight),t.maxHeight&&(this.initMaxHeight=t.maxHeight,this.maxHeight=Math.min(this.initMaxHeight,this.maxHeight)),this.screenCorner=this._parseScreenCorner(t.position),this instanceof e&&("number"!=typeof e[e.instanceCounter]?e[e.instanceCounter]=0:e[e.instanceCounter]++),this.instanceId=e[e.instanceCounter],this.wrapperWidth=t.width||290,this.stylesheet=document.createElement("style"),this.stylesheet.setAttribute("type","text/css"),this.stylesheet.setAttribute("id","lm-gui-stylesheet"),document.head.append(this.stylesheet),0==this.instanceId&&this._addStyles(`\n.p-gui {\n    position: ${this.position_type};\n    top: 0;\n    left: 0;\n    transform: translate3d(0,0,0);\n    padding-top: 21px;\n    background: #2e2e2e;\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    font-family: Verdana, Arial, sans-serif;\n    width: 290px;\n    overflow: auto;\n    box-shadow: 0 0 2px black;\n    box-sizing: border-box;\n    z-index: 99999;\n    user-select: none;\n    border-bottom-right-radius: 3px;\n    border-bottom-left-radius: 3px;\n    cursor: auto;\n}\n\n.p-gui * {\n    font-size: 11px;\n}\n\n.p-gui::-webkit-scrollbar,\n.p-gui *::-webkit-scrollbar {\n    width: 10px;\n}\n\n.p-gui::-webkit-scrollbar-track,\n.p-gui *::-webkit-scrollbar-track {\n    background: #2f2f2f; \n    border-radius: 3px;\n}\n\n.p-gui::-webkit-scrollbar-thumb,\n.p-gui *::-webkit-scrollbar-thumb {\n    background: #757576; \n    border-radius: 10px;\n    box-sizing: border-box;\n    border: 1px solid #2f2f2f;\n}\n\n.p-gui--collapsed {\n    height: 0;\n    padding: 21px 10px 0 10px;\n    overflow: hidden;\n}\n\n.p-gui__header {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 20px;\n    background-color: rgba(0, 0, 0, .8);\n    border-bottom: 1px solid #484848;\n    cursor: grab;\n    color: grey;\n    font-size: 10px;\n    line-height: 20px;\n    padding-left: 8px;\n    box-sizing: border-box;\n    touch-action: none;\n}\n\n.p-gui__header-close {\n    width: 20px;\n    height: 20px;\n    position: absolute;\n    top: 0;\n    right: 0;\n    cursor: pointer;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUAQMAAAC3R49OAAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAABFJREFUCNdjIAb8//8BjIkAAOrOBd3TR0jRAAAAAElFTkSuQmCC);\n    background-size: 50% 50%;\n    background-position: center;\n    background-repeat: no-repeat; \n}\n\n.p-gui--collapsed .p-gui__header-close {\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUAQMAAAC3R49OAAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAABVJREFUCNdjYEhgIIj///8AwsSoBQD43QydY5mb0QAAAABJRU5ErkJggg==);\n}\n\n.p-gui__image-container {\n    width: 100%;\n    display: grid;\n    grid-template-columns: repeat(auto-fill, 32%);\n    justify-content: space-between;\n    padding: 0 2%;\n}\n\n.p-gui__image {\n    aspect-ratio: 1 / 1;\n    background-size: cover;\n    cursor: pointer;\n    position: relative;\n    margin-top: 1px;\n    margin-bottom: 19px;\n}\n\n.p-gui__image-text {\n    position: absolute;\n    bottom: -15px;\n    color: #eee;\n    text-shadow: 0 -1px 0 #111;\n    white-space: nowrap;\n    width: 100%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.p-gui__button, \n.p-gui__switch,\n.p-gui__list,\n.p-gui__vector2,\n.p-gui__color {\n    width: 100%;\n    padding: 7px;\n    color: white;\n    border-bottom: 1px solid #00ff89;\n    cursor: pointer;\n    position: relative;\n    box-sizing: border-box;\n    margin-bottom: 3px;\n}\n\n.p-gui__button,\n.p-gui__switch {\n    margin-right: 2px;\n    margin-left: 2px;\n    border: 1px solid rgba(0,0,0,.5);\n    border-bottom: 1px solid #00ff89;\n    border-radius: 2px;\n    background: rgba(0, 0, 0, .3);\n    background: linear-gradient(180deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 5%, rgba(0,0,0,0) 95%, rgba(0,0,0,0.3) 100%);\n}\n\n.p-gui__button:hover,\n.p-gui__switch:hover {\n    background: rgba(0, 0, 0, .3);\n}\n\n.p-gui__folder .p-gui__button,\n.p-gui__folder .p-gui__switch {\n    margin-right: 0;\n    margin-left: 0;\n}\n\n.p-gui__vector2 {\n    background: transparent;\n    border-bottom: 1px solid #ff9999;\n    aspect-ratio: 1;\n    padding-bottom: 0;\n}\n\n.p-gui__vector2-area {\n    position: relative;\n    background: rgba(0, 0, 0, .3);\n    margin-top: 8px;\n    width: 100%;\n    height: calc(100% - 28px);\n    touch-action: none;\n}\n\n.p-gui__vector2-line {\n    position: absolute;\n    background: white;\n    opacity: .3;\n    pointer-events: none;\n}\n\n.p-gui__vector2-line-x {\n    width: 100%;\n    height: 1px;\n    left: 0;\n    top: 50%;\n    transform: translateY(-50%);\n}\n\n.p-gui__vector2-line-y {\n    width: 1px;\n    height: 100%;\n    top: 0;\n    left: 50%;\n    transform: translateX(-50%);\n}\n\n.p-gui__vector2-dot {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    background: #d5d5d5;\n    border: 2px solid #ff9999;\n    transform: translate(-50%, -50%);\n    pointer-events: none;\n}\n\n.p-gui__switch-checkbox {\n    width: 5px;\n    height: 5px;\n    background-color: rgba(0, 0, 0, .5);\n    position: absolute;\n    top: 0;\n    right: 8px;\n    bottom: 0;\n    margin: auto;\n    border-radius: 50%;\n    pointer-events: none;\n}\n\n.p-gui__switch-checkbox--active {\n    background-color: #00ff89;\n    box-shadow: 0 0 5px #00ff89;\n}\n\n.p-gui__list,\n.p-gui__color {\n    cursor: default;\n}\n\n.p-gui__list-dropdown,\n.p-gui__color-picker {\n    position: absolute;\n    right: 5px;\n    top: 0;\n    bottom: 0;\n    margin: auto;\n    height: 21px;\n    cursor: pointer;\n}\n\n.p-gui__list-dropdown {\n    background: rgba(0,0,0,.25);\n    color: white;\n    border: 1px solid rgba(0,0,0,.5);\n    border-radius: 3px;\n    padding: 0 12px;\n    top: -1px;\n}\n\n.p-gui__color-picker {\n    -webkit-appearance: none;\n    padding: 0;\n    background-color: transparent;\n    border: 1px solid #222222;\n}\n\n.p-gui__color-picker::-webkit-color-swatch-wrapper {\n    padding: 0;\n}\n.p-gui__color-picker::-webkit-color-swatch {\n    border: none;\n}\n\n.p-gui__slider {\n    width: 100%;\n    margin-bottom: 8px;\n    padding: 7px;\n    color: white;\n    position: relative;\n    min-height: 14px;\n}\n\n.p-gui__slider-ctrl {\n    -webkit-appearance: none;\n    padding: 0;\n    font: inherit;\n    outline: none;\n    opacity: .8;\n    background: #00a1ff;\n    box-sizing: border-box;\n    cursor: pointer;\n    position: absolute;\n    bottom: -4px; /* 5px height -1px de dépassement du curseur */\n    right: 0;\n    height: 5px;\n    width: 100%;\n    margin: 0;\n}\n\n/* la zone de déplacement */\n.p-gui__slider-ctrl::-webkit-slider-runnable-track {\n    height: 13px;\n    border: none;\n    border-radius: 0;\n    background-color: transparent;  /* supprimé définie sur l'input */\n}\n\n/* Curseur */\n.p-gui__slider-ctrl::-webkit-slider-thumb {\n    -webkit-appearance: none;       /* également nécessaire sur le curseur */\n    width: 15px;\n    height: 7px;\n    border: none;             /* pris en compte sur Webkit et Edge */\n    background: white;       /* pris en compte sur Webkit only */\n    position: relative;\n    top: 3px;\n    border-radius: 1px;\n}\n\n.p-gui__slider-value,\n.p-gui__vector-value {\n    display: inline-block;\n    position: absolute;\n    right: 7px;\n}\n\n.p-gui__folder {\n    width: 100%;\n    position: relative;\n    background: #434343;\n    overflow: auto;\n    margin-bottom: 3px;\n    display: flex;\n    flex-wrap: wrap;\n    border-left: 2px solid grey;\n    padding: 0 3px;\n}\n\n.p-gui__folder--first {\n    margin-top: 0;\n}\n\n.p-gui__folder--closed {\n    height: 22px;\n    overflow: hidden;\n}\n\n.p-gui__folder-header {\n    padding: 5px;\n    background-color: rgba(0, 0, 0, .5);\n    color: white;\n    cursor: pointer;\n    width: 100%;\n    margin: 0 -2px 2px -3px;\n}\n\n.p-gui__folder-header:hover {\n    background-color: rgba(0, 0, 0, .75);\n}\n\n.p-gui__folder-arrow {\n    width: 8px;\n    height: 8px;\n    display: inline-block;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAHlBMVEUAAAD///////////////////////////////////8kfJuVAAAACXRSTlMA9Z1fCdMo1yxEJnA0AAAAK0lEQVQI12PABlRgjKkJUMZMYRhjpgqMAZSEMICSaIzpDWiKhdENhEhgAgATSg5jyWnYewAAAABJRU5ErkJggg==);\n    background-size: contain;\n    margin-right: 5px;\n    transform: rotate(90deg)\n}\n\n.p-gui__folder--closed .p-gui__folder-arrow {\n    transform: rotate(0deg);\n}\n`),this._styleInstance(),this._addWrapper(),this.wrapper.setAttribute("data-corner-x",this.screenCorner.x),this.wrapper.setAttribute("data-corner-y",this.screenCorner.y),0!=t.autoRepositioning&&window.addEventListener("resize",this._handleResize.bind(this)),this._handleResize(),this.hasBeenDragged=!1,1==t.draggable&&this._makeDraggable(),this.closed=!1,t.closed&&this.toggleClose())}_styleInstance(){let e=this._getScrollbarWidth(this.container);if("left"==this.screenCorner.x?this.xOffset=0:this.xOffset=this.container.clientWidth-this.wrapperWidth-e,this.instanceId>0){let e=this.container.querySelectorAll(".p-gui");for(let t=0;t<e.length;t++)this.screenCorner.y==e[t].dataset.cornerY&&("left"==this.screenCorner.x&&"left"==e[t].dataset.cornerX?this.xOffset+=e[t].offsetWidth:"right"==this.screenCorner.x&&"right"==e[t].dataset.cornerX&&(this.xOffset-=e[t].offsetWidth))}this.yOffset=0,this.position={prevX:this.xOffset,prevY:this.yOffset,x:this.xOffset,y:this.yOffset},this._addStyles(`#p-gui-${this.instanceId} {\n            width: ${this.wrapperWidth}px;\n            max-height: ${this.maxHeight}px;\n            transform: translate3d(${this.xOffset}px,${this.yOffset}px,0);\n            ${"top"==this.screenCorner.y?"":"top: auto; bottom: 0;"}\n            ${this.backgroundColor?"background: "+this.backgroundColor+";":""}\n        }`)}_folderConstructor(e){this.wrapper=e.wrapper}_parseScreenCorner(e){let t={x:"right",y:"top"};return null==e||("string"!=typeof e&&console.error("[perfect-gui] Position must be a string."),e.includes("left")&&(t.x="left"),e.includes("bottom")&&(t.y="bottom")),t}_getScrollbarWidth(e){return e===document.body?window.innerWidth-document.documentElement.clientWidth:e.offsetWidth-e.clientWidth}_handleResize(){if(this.container==document.body?this.maxHeight=window.innerHeight:this.maxHeight=Math.min(this.container.clientHeight,window.innerHeight),this.initMaxHeight&&(this.maxHeight=Math.min(this.initMaxHeight,this.maxHeight)),this.wrapper.style.maxHeight=this.maxHeight+"px",this.hasBeenDragged)return;let e=this._getScrollbarWidth(this.container);if(this.xOffset="left"==this.screenCorner.x?0:this.container.clientWidth-this.wrapperWidth-e,this.instanceId>0){let e=this.container.querySelectorAll(`.p-gui:not(#${this.wrapper.id}):not([data-dragged])`);for(let t=0;t<e.length&&!(parseInt(e[t].id.replace("p-gui-",""))>this.instanceId);t++)this.screenCorner.y==e[t].dataset.cornerY&&("left"==this.screenCorner.x&&"left"==e[t].dataset.cornerX?this.xOffset+=e[t].offsetWidth:"right"==this.screenCorner.x&&"right"==e[t].dataset.cornerX&&(this.xOffset-=e[t].offsetWidth))}this.position={prevX:this.xOffset,prevY:this.yOffset,x:this.xOffset,y:this.yOffset},this.wrapper.style.transform=`translate3d(${this.position.x}px, ${this.position.y}px, 0)`}_createElement(e){e.el=e.el||"div";var t=document.createElement(e.el);if(e.id&&(t.id=e.id),e.class&&(t.className=e.class),e.inline&&(t.style=e.inline),e.href&&(t.href=e.href),e.onclick&&(t.onclick=e.onclick),e.onchange&&(t.onchange=e.onchange),e.textContent&&(t.textContent=e.textContent),e.innerHTML&&(t.innerHTML=e.innerHTML),e.type&&(t.type=e.type),e.value&&(t.value=e.value),e.customAttributes)for(var n in e.customAttributes)t.setAttribute(n,e.customAttributes[n]);return e.parent=e.parent?e.parent:this.wrapper,e.parent.append(t),t}_addStyles(e){this.stylesheet.innerHTML+=e}_addWrapper(){this.wrapper=this._createElement({parent:this.container,id:"p-gui-"+this.instanceId,class:"p-gui"}),this.header=this._createElement({parent:this.wrapper,class:"p-gui__header",textContent:this.name,inline:this.backgroundColor?"border-color: "+this.backgroundColor+";":""}),this._createElement({parent:this.header,class:"p-gui__header-close",onclick:this.toggleClose.bind(this)})}button(e,t){"string"!=typeof e&&(e="object"==typeof e&&e?.hasOwnProperty("name")?e.name:" "),""===e&&(e=" "),this.imageContainer=null,"function"!=typeof t&&(t=()=>{}),this._createElement({class:"p-gui__button",textContent:e,onclick:t})}image(e={},t){if("object"!=typeof e)throw Error(`[GUI] image() first parameter must be an object. Received: ${typeof e}.`);let n;if("string"!=typeof e.path)throw null==typeof e.path?Error("[GUI] image() path must be provided."):Error("[GUI] image() path must be a string.");n=e.path;let i,r=n.replace(/^.*[\\\/]/,"");i=null==e.name?r:"string"==typeof e.name&&e.name||" ",this.imageContainer||(this.imageContainer=this._createElement({class:"p-gui__image-container"}));var o=this._createElement({class:"p-gui__image",inline:`background-image: url(${n})`,parent:this.imageContainer});this._createElement({parent:o,class:"p-gui__image-text",textContent:i}),"function"==typeof t&&(o.onclick=()=>t({path:n,text:i}))}slider(e={},t){if("object"!=typeof e)throw Error(`[GUI] slider() first parameter must be an object. Received: ${typeof e}.`);let n="string"==typeof e.name&&e.name||" ",i=!1,r=null,o=e.obj||e.object,s=e.prop||e.property,a="number"==typeof e.value?e.value:null,p=e.min??0,l=e.max??1,c=e.step||(l-p)/100;if(null!==a)null==s&&null==o||console.warn('[GUI] slider() "obj" and "property" parameters are ignored when a "value" parameter is used.');else if(null!=s&&null!=o){if("string"!=typeof s)throw Error(`[GUI] slider() "prop" (or "property") parameter must be an string. Received: ${typeof s}.`);if("object"!=typeof o)throw Error(`[GUI] slider() "obj" (or "object") parameter must be an object. Received: ${typeof o}.`);" "==n&&(n=s),r=this.propReferences.push(o[s])-1,i=!0}else(null!=s&&null==o||null==s&&null==o)&&console.warn('[GUI] slider() "obj" and "prop" parameters must be used together.'),a=(l-p)/2;this.imageContainer=null;var h=this._createElement({class:"p-gui__slider",textContent:n}),d=this._createElement({parent:h,el:"input",class:"p-gui__slider-ctrl",customAttributes:{type:"range",min:p,max:l,step:c,value:i?o[s]:a}}),g=this._createElement({parent:h,class:"p-gui__slider-value",textContent:String(i?o[s]:a)});d.addEventListener("input",(()=>{g.textContent=d.value,i&&(o[s]=d.value),"function"==typeof t&&t(parseFloat(d.value))})),i&&Object.defineProperty(o,s,{set:e=>{this.propReferences[r]=e,d.value=e,g.textContent=String(e)},get:()=>this.propReferences[r]})}toggle(e={},t){if("object"!=typeof e)throw Error(`[GUI] toggle() first parameter must be an object. Received: ${typeof e}.`);let n="string"==typeof e.name&&e.name||" ",i=!0===e.value;this.imageContainer=null;let r=this._createElement({class:"p-gui__switch",onclick:e=>{let n=e.target.childNodes[1],i=!0;n.classList.contains("p-gui__switch-checkbox--active")&&(i=!1),n.classList.toggle("p-gui__switch-checkbox--active"),"function"==typeof t&&t(i)},textContent:n}),o=i?" p-gui__switch-checkbox--active":"";this._createElement({parent:r,class:"p-gui__switch-checkbox"+o})}list(e={},t){if("object"!=typeof e)throw Error(`[GUI] list() first parameter must be an object. Received: ${typeof e}.`);let n="string"==typeof e.name?e.name:" ",i=Array.isArray(e.values)?e.values:null;t="function"==typeof t?t:null,this.imageContainer=null;let r=this._createElement({class:"p-gui__list",textContent:n}),o=this._createElement({parent:r,el:"select",class:"p-gui__list-dropdown",onchange:e=>{t&&t(e.target.value)}});i.forEach((e=>{this._createElement({parent:o,el:"option",customAttributes:{value:e},textContent:e})}))}options(e,t){if("object"!=typeof e)throw Error(`[GUI] options() first parameter must be an object. Received: ${typeof e}.`);this.list(e,t)}vector2(e={},t){if("object"!=typeof e)throw Error(`[GUI] vector2() first parameter must be an object. Received: ${typeof e}.`);let n="string"==typeof e.name&&e.name||" ";const i=e.x.min??0,r=e.x.max??1,o=e.y.min??0,s=e.y.max??1,a=e.x.obj||e.x.object,p=e.x.prop||e.x.property,l=this.propReferences.push(a[p])-1,c=e.y.obj||e.y.object,h=e.y.prop||e.y.property,d=this.propReferences.push(c[h])-1;t="function"==typeof t?t:null,this.imageContainer=null;const g=this._createElement({class:"p-gui__vector2",textContent:n}),u=this._createElement({parent:g,class:"p-gui__vector-value",textContent:a[p]+", "+c[h]}),f=this._createElement({parent:g,el:"div",class:"p-gui__vector2-area",onclick:e=>{a[p]=parseFloat(this._mapLinear(e.offsetX,0,f.clientWidth,i,r).toFixed(2)),c[h]=parseFloat(this._mapLinear(e.offsetY,0,f.clientHeight,s,o).toFixed(2)),t&&t(a[p],a[h])}});let b=!1;f.addEventListener("pointerdown",(e=>{b=!0})),f.addEventListener("pointerup",(()=>{b=!1})),f.addEventListener("pointermove",(e=>{b&&(a[p]=parseFloat(this._mapLinear(e.offsetX,0,f.clientWidth,i,r).toFixed(2)),c[h]=parseFloat(this._mapLinear(e.offsetY,0,f.clientHeight,s,o).toFixed(2)),t&&t(a[p],a[h]))})),this._createElement({parent:f,class:"p-gui__vector2-line p-gui__vector2-line-x"}),this._createElement({parent:f,class:"p-gui__vector2-line p-gui__vector2-line-y"});const m=this._createElement({parent:f,class:"p-gui__vector2-dot"});m.style.left=this._mapLinear(a[p],i,r,0,f.clientWidth)+"px",m.style.top=this._mapLinear(c[h],o,s,f.clientHeight,0)+"px",Object.defineProperty(a,p,{set:e=>{this.propReferences[l]=e,m.style.left=this._mapLinear(e,i,r,0,f.clientWidth)+"px",u.textContent=String(e)+", "+c[h]},get:()=>this.propReferences[l]}),Object.defineProperty(c,h,{set:e=>{this.propReferences[d]=e,m.style.top=this._mapLinear(e,o,s,f.clientHeight,0)+"px",u.textContent=a[p]+", "+String(e)},get:()=>this.propReferences[d]})}color(e={},t){if("object"!=typeof e)throw Error(`[GUI] color() first parameter must be an object. Received: ${typeof e}.`);let n,i="string"==typeof e.name&&e.name||" ";"string"==typeof e.value&&(7!=e.value.length||"#"!=e.value[0]?console.error(`[GUI] color() 'value' parameter must be an hexadecimal string in the format "#ffffff". Received: "${e.value}".`):n=e.value),n||(n="#000000");const r=this._createElement({el:"div",class:"p-gui__color",textContent:i}),o=this._createElement({parent:r,el:"input",class:"p-gui__color-picker",type:"color",value:n});"function"==typeof t&&o.addEventListener("input",(()=>{t(o.value)}))}folder(t={}){let n="boolean"==typeof t.closed&&t.closed,i=t.name||"",r=t.color||null,o=t.maxHeight||null;this.imageContainer=null;let s="p-gui__folder";0==this.folders.length&&(s+=" p-gui__folder--first"),n&&(s+=" p-gui__folder--closed");let a=r?`background-color: ${r};`:"";a+=o?`max-height: ${o}px;`:"";let p=this._createElement({class:s,inline:a}),l=(this._createElement({innerHTML:`<span class="p-gui__folder-arrow"></span>${i}`,class:"p-gui__folder-header",onclick:function(){this.parentNode.classList.toggle("p-gui__folder--closed")},parent:p}),new e({isFolder:!0,folderOptions:{wrapper:p}}));return this.folders.push(l),l}_makeDraggable(){var e=this;function t(t){t.preventDefault(),e.hasBeenDragged||(e.hasBeenDragged=!0,e.wrapper.setAttribute("data-dragged","true")),e.position.x=e.position.initX+t.clientX-e.position.prevX,e.position.y=e.position.initY+t.clientY-e.position.prevY,e.wrapper.style.transform="translate3d("+e.position.x+"px,"+e.position.y+"px,0)"}this.header.addEventListener("pointerdown",(function(n){n.preventDefault(),e.position.initX=e.position.x,e.position.initY=e.position.y,e.position.prevX=n.clientX,e.position.prevY=n.clientY,document.addEventListener("pointermove",t)})),this.header.addEventListener("pointerup",(function(e){document.removeEventListener("pointermove",t)}))}toggleClose(){this.closed=!this.closed,this.wrapper.classList.toggle("p-gui--collapsed")}kill(){this.wrapper.remove()}_mapLinear(e,t,n,i,r){return i+(e-t)*(r-i)/(n-t)}}let t=new e({name:"test"}),n={x:.5,y:.5},i={x:.5,y:.5},r=t.folder({name:"folder",maxHeight:100});for(let e=0;e<10;e++)r.button("Button "+e,(()=>{}));let o=t.folder({name:"subfolder"});for(let e=0;e<20;e++)o.button("Button "+e,(()=>{}));o.vector2({name:"vector2",x:{obj:n,prop:"x",min:-30,max:30},y:{obj:n,prop:"y",min:-30,max:30}},(()=>{}));let s=o.folder({name:"subfolder"});s.color({name:"color",value:"#ff0000"},(()=>{})),s.vector2({name:"vector2",x:{obj:i,prop:"x",min:0,max:1},y:{obj:i,prop:"y",min:0,max:1}},(()=>{})),s.folder({name:"okok"})})();