(()=>{"use strict";class e{constructor(t={}){if(t.container?(this.container="string"==typeof t.container?document.querySelector(t.container):t.container,this.position_type="absolute"):(this.container=document.body,this.position_type="fixed"),this.propReferences=[],t.isFolder)this._folderConstructor(t.folderOptions);else{if(this.name=null!=t&&"string"==typeof t.name?t.name:"",this.color=t.color||null,this instanceof e&&("number"!=typeof e[e.instanceCounter]?e[e.instanceCounter]=0:e[e.instanceCounter]++),this.instanceId=e[e.instanceCounter],this.wrapperWidth=t.width||290,this.stylesheet=document.createElement("style"),this.stylesheet.setAttribute("type","text/css"),this.stylesheet.setAttribute("id","lm-gui-stylesheet"),document.head.append(this.stylesheet),0==this.instanceId&&this._addStyles(`\n.p-gui {\n    position: ${this.position_type};\n    top: 0;\n    left: 0;\n    transform: translate3d(0,0,0);\n    padding-top: 21px;\n    background: #2e2e2e;\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    font-family: Verdana, Arial, sans-serif;\n    width: 290px;\n    overflow: auto;\n    box-shadow: 0 0 5px black;\n    box-sizing: border-box;\n    z-index: 99999;\n    user-select: none;\n    border-bottom-right-radius: 3px;\n    border-bottom-left-radius: 3px;\n}\n\n.p-gui--collapsed {\n    height: 0;\n    padding: 21px 10px 0 10px;\n    overflow: hidden;\n}\n\n.p-gui__header {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 20px;\n    background-color: rgba(0, 0, 0, .8);\n    border-bottom: 1px solid #484848;\n    cursor: grab;\n    color: grey;\n    font-size: 10px;\n    line-height: 20px;\n    padding-left: 8px;\n    box-sizing: border-box;\n}\n\n.p-gui__header-close {\n    width: 20px;\n    height: 20px;\n    position: absolute;\n    top: 0;\n    right: 0;\n    cursor: pointer;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUAQMAAAC3R49OAAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAABFJREFUCNdjIAb8//8BjIkAAOrOBd3TR0jRAAAAAElFTkSuQmCC);\n    background-size: 50% 50%;\n    background-position: center;\n    background-repeat: no-repeat; \n}\n\n.p-gui--collapsed .p-gui__header-close {\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUAQMAAAC3R49OAAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAABVJREFUCNdjYEhgIIj///8AwsSoBQD43QydY5mb0QAAAABJRU5ErkJggg==);\n}\n\n.p-gui__image-container {\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.p-gui__image {\n    width: calc(33.33% - 10px);\n    aspect-ratio: 1 / 1;\n    background-size: cover;\n    margin: 1px 5px 19px 5px;\n    cursor: pointer;\n    position: relative;\n}\n\n.p-gui__image-text {\n    position: absolute;\n    bottom: -15px;\n    color: #eee;\n    font-size: 11px;\n    text-shadow: 0 -1px 0 #111;\n    white-space: nowrap;\n}\n\n.p-gui__button, \n.p-gui__switch,\n.p-gui__list,\n.p-gui__vector2 {\n    width: 100%;\n    padding: 7px;\n    font-size: 11px;\n    color: white;\n    border-bottom: 1px solid #00ff89;\n    cursor: pointer;\n    position: relative;\n    box-sizing: border-box;\n    margin-bottom: 3px;\n}\n\n.p-gui__button,\n.p-gui__switch {\n    margin-right: 2px;\n    margin-left: 2px;\n    border: 1px solid rgba(0,0,0,.5);\n    border-bottom: 1px solid #00ff89;\n    border-radius: 2px;\n    background: rgba(0, 0, 0, .3);\n    background: linear-gradient(180deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 5%, rgba(0,0,0,0) 95%, rgba(0,0,0,0.3) 100%);\n}\n\n.p-gui__button:hover,\n.p-gui__switch:hover {\n    background: rgba(0, 0, 0, .3);\n}\n\n.p-gui__folder .p-gui__button,\n.p-gui__folder .p-gui__switch {\n    margin-right: 0;\n    margin-left: 0;\n}\n\n.p-gui__vector2 {\n    background: transparent;\n    border-bottom: 1px solid #ff9999;\n    aspect-ratio: 1;\n    padding-bottom: 0;\n}\n\n.p-gui__vector2-area {\n    position: relative;\n    background: rgba(0, 0, 0, .3);\n    margin-top: 8px;\n    width: 100%;\n    height: calc(100% - 28px);\n}\n\n.p-gui__vector2-line {\n    position: absolute;\n    background: white;\n    opacity: .3;\n    pointer-events: none;\n}\n\n.p-gui__vector2-line-x {\n    width: 100%;\n    height: 1px;\n    left: 0;\n    top: 50%;\n    transform: translateY(-50%);\n}\n\n.p-gui__vector2-line-y {\n    width: 1px;\n    height: 100%;\n    top: 0;\n    left: 50%;\n    transform: translateX(-50%);\n}\n\n.p-gui__vector2-dot {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    background: #d5d5d5;\n    border: 2px solid #ff9999;\n    transform: translate(-50%, -50%);\n    pointer-events: none;\n}\n\n.p-gui__list {\n    cursor: default;\n}\n\n.p-gui__switch-checkbox {\n    width: 5px;\n    height: 5px;\n    background-color: rgba(0, 0, 0, .5);\n    position: absolute;\n    top: 0;\n    right: 8px;\n    bottom: 0;\n    margin: auto;\n    border-radius: 50%;\n    pointer-events: none;\n}\n\n.p-gui__switch-checkbox--active {\n    background-color: #00ff89;\n    box-shadow: 0 0 5px #00ff89;\n}\n\n.p-gui__list-dropdown {\n    position: absolute;\n    right: 5px;\n    top: 0;\n    bottom: 0;\n    margin: auto;\n    height: 18px;\n    cursor: pointer;\n}\n\n.p-gui__slider {\n    width: 100%;\n    margin-bottom: 8px;\n    padding: 7px;\n    font-size: 11px;\n    color: white;\n    position: relative;\n    min-height: 14px;\n}\n\n.p-gui__slider-ctrl {\n    -webkit-appearance: none;\n    padding: 0;\n    font: inherit;\n    outline: none;\n    opacity: .8;\n    background: #00a1ff;\n    box-sizing: border-box;\n    cursor: pointer;\n    position: absolute;\n    bottom: -4px; /* 5px height -1px de dépassement du curseur */\n    right: 0;\n    height: 5px;\n    width: 100%;\n    margin: 0;\n}\n\n/* la zone de déplacement */\n.p-gui__slider-ctrl::-webkit-slider-runnable-track {\n    height: 13px;\n    border: none;\n    border-radius: 0;\n    background-color: transparent;  /* supprimé définie sur l'input */\n}\n\n/* Curseur */\n.p-gui__slider-ctrl::-webkit-slider-thumb {\n    -webkit-appearance: none;       /* également nécessaire sur le curseur */\n    width: 15px;\n    height: 7px;\n    border: none;             /* pris en compte sur Webkit et Edge */\n    background: white;       /* pris en compte sur Webkit only */\n    position: relative;\n    top: 3px;\n    border-radius: 1px;\n}\n\n.p-gui__slider-value,\n.p-gui__vector-value {\n    display: inline-block;\n    position: absolute;\n    right: 7px;\n}\n\n.p-gui__folder {\n    width: 100%;\n    position: relative;\n    background: #434343;\n    overflow: hidden;\n    margin-bottom: 3px;\n    padding-bottom: 1px;\n    display: flex;\n    flex-wrap: wrap;\n    border-left: 2px solid grey;\n    padding: 0 3px;\n}\n\n.p-gui__folder--first {\n    margin-top: 0;\n}\n\n.p-gui__folder--closed {\n    height: 22px;\n}\n\n.p-gui__folder-header {\n    padding: 5px;\n    font-size: 11px;\n    background-color: rgba(0, 0, 0, .5);\n    color: white;\n    cursor: pointer;\n    width: 100%;\n    margin: 0 -2px 2px -3px;\n}\n\n.p-gui__folder-header:hover {\n    background-color: rgba(0, 0, 0, .75);\n}\n\n.p-gui__folder-arrow {\n    width: 8px;\n    height: 8px;\n    display: inline-block;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAHlBMVEUAAAD///////////////////////////////////8kfJuVAAAACXRSTlMA9Z1fCdMo1yxEJnA0AAAAK0lEQVQI12PABlRgjKkJUMZMYRhjpgqMAZSEMICSaIzpDWiKhdENhEhgAgATSg5jyWnYewAAAABJRU5ErkJggg==);\n    background-size: contain;\n    margin-right: 5px;\n    transform: rotate(90deg)\n}\n\n.p-gui__folder--closed .p-gui__folder-arrow {\n    transform: rotate(0deg);\n}\n`),this.screenCorner=this._parseScreenCorner(t.position),this.xOffset="left"==this.screenCorner.x?0:this.container.clientWidth-this.wrapperWidth,this.instanceId>0){let e=this.container.querySelectorAll(".p-gui");for(let t=0;t<e.length;t++)this.screenCorner.y==e[t].dataset.cornerY&&("left"==this.screenCorner.x&&"left"==e[t].dataset.cornerX?this.xOffset+=e[t].offsetWidth:"right"==this.screenCorner.x&&"right"==e[t].dataset.cornerX&&(this.xOffset-=e[t].offsetWidth))}this.yOffset=0,this.position={prevX:this.xOffset,prevY:this.yOffset,x:this.xOffset,y:this.yOffset},t.maxHeight?this.maxHeight=t.maxHeight:this.maxHeight=Math.min(this.container.clientHeight,window.innerHeight),window.addEventListener("resize",(()=>{this.maxHeight=Math.min(t.maxHeight||"",Math.min(this.container.clientHeight,window.innerHeight))})),this._addStyles(`#p-gui-${this.instanceId} {\n            width: ${this.wrapperWidth}px;\n            max-height: ${this.maxHeight}px;\n            transform: translate3d(${this.xOffset}px,${this.yOffset}px,0);\n            ${"top"==this.screenCorner.y?"":"top: auto; bottom: 0;"}\n            ${this.color?"background: "+this.color+";":""}\n        }`),0!=t.autoRepositioning&&window.addEventListener("resize",this._handleResize.bind(this)),this._addWrapper(),this.wrapper.setAttribute("data-corner-x",this.screenCorner.x),this.wrapper.setAttribute("data-corner-y",this.screenCorner.y),this.hasBeenDragged=!1,1==t.draggable&&this._makeDraggable(),this.closed=!1,t.closed&&this.toggleClose(),this.folders=[]}}_folderConstructor(e){this.wrapper=e.wrapper}_parseScreenCorner(e){let t={x:"left",y:"top"};return null==e||("string"!=typeof e&&console.error("[perfect-gui] The position option must be a string."),e.includes("right")&&(t.x="right"),e.includes("bottom")&&(t.y="bottom")),t}_handleResize(){if(!this.hasBeenDragged){if(this.xOffset="left"==this.screenCorner.x?0:this.container.clientWidth-this.wrapperWidth,this.instanceId>0){let e=this.container.querySelectorAll(`.p-gui:not(#${this.wrapper.id}):not([data-dragged])`);for(let t=0;t<e.length&&!(parseInt(e[t].id.replace("p-gui-",""))>this.instanceId);t++)this.screenCorner.y==e[t].dataset.cornerY&&("left"==this.screenCorner.x&&"left"==e[t].dataset.cornerX?this.xOffset+=e[t].offsetWidth:"right"==this.screenCorner.x&&"right"==e[t].dataset.cornerX&&(this.xOffset-=e[t].offsetWidth))}this.position={prevX:this.xOffset,prevY:this.yOffset,x:this.xOffset,y:this.yOffset},this.wrapper.style.transform=`translate3d(${this.position.x}px, ${this.position.y}px, 0)`}}_createElement(e){e.el=e.el?e.el:"div";var t=document.createElement(e.el);if(e.id&&(t.id=e.id),e.class&&(t.className=e.class),e.inline&&(t.style=e.inline),e.href&&(t.href=e.href),e.onclick&&(t.onclick=e.onclick),e.onchange&&(t.onchange=e.onchange),e.textContent&&(t.textContent=e.textContent),e.innerHTML&&(t.innerHTML=e.innerHTML),e.customAttributes)for(var n in e.customAttributes)t.setAttribute(n,e.customAttributes[n]);return e.parent=e.parent?e.parent:this.wrapper,e.parent.append(t),t}_addStyles(e){this.stylesheet.innerHTML+=e}_addWrapper(){this.wrapper=this._createElement({parent:this.container,id:"p-gui-"+this.instanceId,class:"p-gui"}),this.header=this._createElement({parent:this.wrapper,class:"p-gui__header",textContent:this.name,inline:this.color?"border-color: "+this.color+";":""}),this._createElement({parent:this.header,class:"p-gui__header-close",onclick:this.toggleClose.bind(this)})}button(e,t){let n={text:e,callback:t};this._checkMandatoryParams({text:"string",callback:"function"},n),this.imageContainer=null,this._createElement({class:"p-gui__button",onclick:n.callback,textContent:n.text})}image(e,t,n){let i={text:e,path:t,callback:n};this._checkMandatoryParams({text:"string",path:"string",callback:"function"},i),this.imageContainer||(this.imageContainer=this._createElement({class:"p-gui__image-container"}));var o=this._createElement({class:"p-gui__image",inline:`background-image: url(${i.path})`,parent:this.imageContainer});this._createElement({parent:o,class:"p-gui__image-text",textContent:i.text}),o.onclick=()=>i.callback({path:i.path,text:i.text})}slider(e,t){let n,i,o=!1,r=null;const a=e.min??0,s=e.max??1,l=e.step||(s-a)/100;"number"==typeof e.value?this._checkMandatoryParams({value:"number"},e):(n=e.obj||e.object,i=e.prop||e.property,this._checkMandatoryParams({object:"object",prop:"string"},{object:n,prop:i}),r=this.propReferences.push(n[i])-1,o=!0),this.imageContainer=null;var c=this._createElement({class:"p-gui__slider",textContent:e.name||i}),p=this._createElement({parent:c,el:"input",class:"p-gui__slider-ctrl",customAttributes:{type:"range",min:a,max:s,step:l,value:o?n[i]:e.value}}),h=this._createElement({parent:c,class:"p-gui__slider-value",textContent:String(o?n[i]:e.value)});p.addEventListener("input",(()=>{h.textContent=p.value,o&&(n[i]=p.value),"function"==typeof t&&t(parseFloat(p.value))})),o&&Object.defineProperty(n,i,{set:e=>{this.propReferences[r]=e,p.value=e,h.textContent=String(e)},get:()=>this.propReferences[r]})}toggle(e,t,n){let i={text:e,state:t,callback:n};this._checkMandatoryParams({text:"string",state:"boolean",callback:"function"},i),this.imageContainer=null;let o=this._createElement({class:"p-gui__switch",onclick:e=>{let t=e.target.childNodes[1],n=!0;t.classList.contains("p-gui__switch-checkbox--active")&&(n=!1),t.classList.toggle("p-gui__switch-checkbox--active"),i.callback(n)},textContent:i.text}),r=t?" p-gui__switch-checkbox--active":"";this._createElement({parent:o,class:"p-gui__switch-checkbox"+r})}list(e,t,n){let i={text:e,list:t,callback:n};this._checkMandatoryParams({text:"string",list:"object",callback:"function"},i),this.imageContainer=null;let o=this._createElement({class:"p-gui__list",textContent:i.text}),r=this._createElement({parent:o,el:"select",class:"p-gui__list-dropdown",onchange:e=>{i.callback(e.target.value)}});t.forEach((e=>{this._createElement({parent:r,el:"option",customAttributes:{value:e},textContent:e})}))}vector2(e,t,n){this._checkMandatoryParams({text:"string",data:"object"},{text:e,data:t});const i=t.x.min??0,o=t.x.max??1,r=t.y.min??0,a=t.y.max??1,s=t.x.obj||t.x.object,l=t.x.prop||t.x.property,c=this.propReferences.push(s[l])-1,p=t.y.obj||t.y.object,h=t.y.prop||t.y.property,d=this.propReferences.push(p[h])-1;this.imageContainer=null;const g=this._createElement({class:"p-gui__vector2",textContent:e}),u=this._createElement({parent:g,class:"p-gui__vector-value",textContent:s[l]+", "+p[h]}),m=this._createElement({parent:g,el:"div",class:"p-gui__vector2-area",onclick:e=>{s[l]=parseFloat(this._mapLinear(e.offsetX,0,m.clientWidth,i,o).toFixed(1)),p[h]=parseFloat(this._mapLinear(e.offsetY,0,m.clientHeight,a,r).toFixed(1))}});this._createElement({parent:m,class:"p-gui__vector2-line p-gui__vector2-line-x"}),this._createElement({parent:m,class:"p-gui__vector2-line p-gui__vector2-line-y"});const b=this._createElement({parent:m,class:"p-gui__vector2-dot"});b.style.left=this._mapLinear(s[l],i,o,0,m.clientWidth)+"px",b.style.top=this._mapLinear(p[h],r,a,m.clientHeight,0)+"px",Object.defineProperty(s,l,{set:e=>{this.propReferences[c]=e,b.style.left=this._mapLinear(e,i,o,0,m.clientWidth)+"px",u.textContent=String(e)+", "+p[h]},get:()=>this.propReferences[c]}),Object.defineProperty(p,h,{set:e=>{this.propReferences[d]=e,b.style.top=this._mapLinear(e,r,a,m.clientHeight,0)+"px",u.textContent=s[l]+", "+String(e)},get:()=>this.propReferences[d]})}folder(t={}){let n="boolean"==typeof t.closed&&t.closed,i=t.name||"",o=t.color||null;this.imageContainer=null;let r="p-gui__folder";0==this.folders.length&&(r+=" p-gui__folder--first"),n&&(r+=" p-gui__folder--closed");let a=this._createElement({class:r,inline:o?`background-color: ${o};`:null}),s=(this._createElement({innerHTML:`<span class="p-gui__folder-arrow"></span>${i}`,class:"p-gui__folder-header",onclick:function(){this.parentNode.classList.toggle("p-gui__folder--closed")},parent:a}),new e({isFolder:!0,folderOptions:{wrapper:a}}));return this.folders.push(s),s}_checkMandatoryParams(e,t){var n=[];for(var i in e)typeof t[i]==e[i]||n.push(i);n.length>0&&n.forEach((e=>{throw Error(`[GUI] Missing '${e}' parameter`)}))}_makeDraggable(){var e=this;function t(t){t.preventDefault(),e.hasBeenDragged||(e.hasBeenDragged=!0,e.wrapper.setAttribute("data-dragged","true")),e.position.x=e.position.initX+t.clientX-e.position.prevX,e.position.y=e.position.initY+t.clientY-e.position.prevY,e.wrapper.style.transform="translate3d("+e.position.x+"px,"+e.position.y+"px,0)"}this.header.addEventListener("mousedown",(function(n){n.preventDefault(),e.position.initX=e.position.x,e.position.initY=e.position.y,e.position.prevX=n.clientX,e.position.prevY=n.clientY,document.addEventListener("mousemove",t)})),this.header.addEventListener("mouseup",(function(e){document.removeEventListener("mousemove",t)}))}toggleClose(){this.closed=!this.closed,this.wrapper.classList.toggle("p-gui--collapsed")}kill(){this.wrapper.remove()}_mapLinear(e,t,n,i,o){return i+(e-t)*(o-i)/(n-t)}}function t(){for(var e="0123456789ABCDEF".split(""),t="#",n=0;n<6;n++)t+=e[Math.round(15*Math.random())];return t}const n="#container-4",i="#container-5";!function(){const n={x:0},i=document.querySelector("#container-1 .element"),o=new e({name:"Basics",container:"#container-1",draggable:!0});o.button("Button",(()=>{i.style.backgroundColor=t(),i.style.backgroundImage="none"})),o.slider({name:"Slider (simple callback)",value:1},(e=>{i.style.opacity=e})),o.slider({name:"Slider 2 (object binding)",obj:n,prop:"x",min:-30,max:30,step:.1}),o.toggle("Switch",!0,(e=>{e?i.classList.remove("round"):i.classList.add("round")})),o.list("List",["red","pink","yellow","blue"],(e=>{i.style.backgroundColor=e,i.style.backgroundImage="none"})),o.image("Image 1","https://images.unsplash.com/photo-1485254767195-60704c46702e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=512&q=80",(e=>{i.style.backgroundImage=`url(${e.path})`,document.querySelector("#container-1 .note").textContent="Photo by Joel Filipe on Unsplash"})),o.image("Image 2","https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=512&q=80",(e=>{i.style.backgroundImage=`url(${e.path})`,document.querySelector("#container-1 .note").textContent="Photo by Milad Fakurian on Unsplash"})),function e(){i.style.transform=`translateX(${n.x}px)`,requestAnimationFrame(e)}()}(),function(){const t={x:0,y:0},n=document.querySelector("#container-vectors .element");new e({name:"Vectors",container:"#container-vectors"}).vector2("Position",{x:{object:t,prop:"x",min:-50,max:50},y:{object:t,prop:"y",min:-50,max:50}}),function e(){n.style.transform=`translate(${t.x}px, ${-t.y}px)`,requestAnimationFrame(e)}()}(),function(){const n=document.querySelector("#container-2 .element");new e({name:"GUI 1",width:200,container:"#container-2"}).button("By the way, buttons can handle multiple lines of text.",(()=>{n.style.backgroundColor=t()})),new e({name:"GUI 2",width:200,container:"#container-2"}).button("Button",(()=>n.style.backgroundColor=t())),new e({name:"GUI 3",position:"top right",container:"#container-2"}).button("Button",(()=>n.style.backgroundColor=t())),new e({name:"GUI 4",position:"right bottom",container:"#container-2"}).button("Button",(()=>n.style.backgroundColor=t()))}(),function(){const n=document.querySelector("#container-3 .element"),i=new e({name:"Folders",container:"#container-3"});let o=i.folder({name:"Folder 1"});o.button("Random color",(()=>{n.style.backgroundColor=t()})),o.slider({name:"Size",value:1},(e=>{n.style.transform=`scale(${e})`})),i.folder({name:"Folder 2",closed:!0}).button("Random color",(()=>{n.style.backgroundColor=t()}))}(),function(){const t=new e({container:n,name:"GUI 1 (drag me!)",width:500,draggable:!0});t.button("Custom width using the `width` option",(()=>{})),new e({container:n,name:"GUI 2 (drag me!)",close:!0,draggable:!0,position:"bottom left"}).button("gui_1.toggleClose();",(()=>{t.toggleClose()}));const i=new e({container:n,name:"GUI 3 (closed, scrollable)",closed:!0});let o=i.folder({name:"folder",color:"#33329f"});for(let e=0;e<3;e++)o.button("btn "+e,(()=>{}));let r=i.folder({name:"folder",color:"#9f3293"});for(let e=0;e<3;e++)r.button("btn "+e,(()=>{}));for(let e=0;e<10;e++)i.button("btn "+e,(()=>{}));new e({container:n,position:"bottom right",name:"GUI 4 (custom color)",color:"#226666"}).button("lorem",(()=>{}))}(),function(){const t=[];let n=new e({container:i,name:"GUI 1"});n.button("Create GUI panel",(()=>{t[t.length]=new e({container:i,name:"Created GUI",position:"bottom left",width:150})})),n.button("Kill GUI panel",(()=>{const e=t.length-1;e>=0&&(t[e].wrapper.remove(),t[e]=null,t.splice(e,1))}))}()})();