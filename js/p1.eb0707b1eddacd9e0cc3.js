(()=>{"use strict";const e=document.createElement("textarea");e.classList.add("textarea"),e.autofocus=!0,e.rows=12,e.addEventListener("blur",(()=>{e.focus()}));const t=e,a={Backquote:["`","~","ё","Ё"],Digit1:["1","!","1","!"],Digit2:["2","@","2",'"'],Digit3:["3","#","3","№"],Digit4:["4","$","4",";"],Digit5:["5","%","5","%"],Digit6:["6","^","6",":"],Digit7:["7","&","7","?"],Digit8:["8","*","8","*"],Digit9:["9","(","9","("],Digit0:["0",")","0",")"],Minus:["-","_","-","+"],Equal:["=","+","=","+"],Backspace:["Back","Back","Back","Back"],Tab:["Tab","Tab","Tab","Tab"],KeyQ:["q","Q","й","Й"],KeyW:["w","W","ц","Ц"],KeyE:["e","E","у","У"],KeyR:["r","R","к","К"],KeyT:["t","T","е","Е"],KeyY:["y","Y","н","Н"],KeyU:["u","U","г","Г"],KeyI:["i","I","ш","Ш"],KeyO:["o","O","щ","Щ"],KeyP:["p","P","з","З"],BracketLeft:["[","{","х","Х"],BracketRight:["]","}","ъ","Ъ"],Delete:["Del","Del","Del","Del"],CapsLock:["CapsLock","CapsLock","CapsLock","CapsLock"],KeyA:["a","A","ф","Ф"],KeyS:["s","S","ы","Ы"],KeyD:["d","D","в","В"],KeyF:["f","F","а","А"],KeyG:["g","G","п","П"],KeyH:["h","H","р","Р"],KeyJ:["j","J","о","О"],KeyK:["k","K","л","Л"],KeyL:["l","L","д","Д"],Semicolon:[";",":","ж","Ж"],Quote:["'",'"',"э","Э"],Backslash:["\\","|","\\","/"],Enter:["Enter","Enter","Enter","Enter"],ShiftLeft:["Shift","Shift","Shift","Shift"],KeyZ:["z","Z","я","Я"],KeyX:["x","X","ч","Ч"],KeyC:["c","C","с","С"],KeyV:["v","V","м","М"],KeyB:["b","B","и","И"],KeyN:["n","N","т","Т"],KeyM:["m","M","ь","Ь"],Comma:[",","<","б","Б"],Period:[".",">","ю","Ю"],Slash:["/","?",".",","],ArrowUp:["↑","↑","↑","↑"],ShiftRight:["Shift","Shift","Shift","Shift"],ControlLeft:["Ctrl","Ctrl","Ctrl","Ctrl"],MetaLeft:["Win","Win","Win","Win"],AltLeft:["Alt","Alt","Alt","Alt"],Space:[" "," "," "," "],AltRight:["Alt","Alt","Alt","Alt"],ArrowLeft:["←","←","←","←"],ArrowDown:["↓","↓","↓","↓"],ArrowRight:["→","→","→","→"],ControlRight:["Ctrl","Ctrl","Ctrl","Ctrl"]},l=Object.entries(a);function i(e,t){const a=document.querySelectorAll(".key"),i=+e+("ru"===t?2:0);l.forEach(((e,t)=>{a[t].innerHTML=e[1][i]}))}const s=document.createElement("div"),n=Object.entries(a);let c=localStorage.getItem("leng")?localStorage.getItem("leng"):"en";localStorage.setItem("leng",c);let o=!1,r=!1,u=!1,d=!1,v=!1;s.classList.add("keybord"),n.forEach((e=>{const t=e[0],a=e[1][0],l=document.createElement("div");l.classList.add("key"),l.dataset.key=t,l.innerText=a,s.append(l)})),document.addEventListener("DOMContentLoaded",(()=>{c=localStorage.getItem("leng")?localStorage.getItem("leng"):"en",i(o,c)})),document.addEventListener("beforeunload",(()=>{localStorage.setItem("leng",c)})),document.addEventListener("mousedown",(e=>{const t=e.target,a=document.querySelector(".textarea"),l=a.selectionStart;if(e.target.classList.contains("key")){if("CapsLock"===t.dataset.key&&u)return o=!o,u=!1,i(o,c),void setTimeout((()=>{t.classList.remove("active")}),100);if(!t.classList.contains("active")){if(("ShiftLeft"===t.dataset.key||"ShiftRight"===t.dataset.key)&&r)return document.querySelectorAll(".key").forEach((e=>{"CapsLock"!==e.dataset.key&&e.classList.remove("active")})),r=!1,o=!o,void i(o,c);if((v&&"ControlLeft"!==t.dataset.key&&"ControlRight"!==t.dataset.key||d&&("AltRight"!==t.dataset.key||"AltLeft"!==t.dataset.key))&&(v=!1,d=!1,document.querySelectorAll(".key").forEach((e=>{"CapsLock"!==e.dataset.key&&"ShiftLeft"!==e.dataset.key&&"ShiftRight"!==t.dataset.key&&e.classList.remove("active")}))),e.target.classList.add("active"),"ShiftLeft"===t.dataset.key||"ShiftRight"===t.dataset.key)return r=!0,o=!o,void i(o,c);if("CapsLock"===t.dataset.key)return u=!0,o=!o,void i(o,c);if("Backspace"===t.dataset.key){let e="";const t=a.selectionEnd;if(0===l&&t===a.value.length)return void(a.value=e);if(0===l)return;if(a.value.length===l)e=a.value.slice(0,a.value.length-1);else if(t!==l)return e=a.value.slice(0,l)+a.value.slice(t),a.value=e,a.focus(),a.selectionStart=l,void(a.selectionEnd=l);return e=a.value.slice(0,l-1)+a.value.slice(l),a.value=e,a.focus(),a.selectionStart=l-1,void(a.selectionEnd=l-1)}if("Delete"===t.dataset.key){let e="";const t=a.selectionEnd;if(0===l&&t===a.value.length)return void(a.value=e);if(a.value.length===l)return;if(0===l)e=a.value.slice(1,a.value.length);else{if(t!==l)return e=a.value.slice(0,l)+a.value.slice(t),a.value=e,a.focus(),a.selectionStart=l,void(a.selectionEnd=l);e=a.value.slice(0,l)+a.value.slice(l+1)}return a.value=e,a.focus(),a.selectionStart=l,void(a.selectionEnd=l)}if("Enter"===t.dataset.key)return a.value.length===l?a.value+="\n":a.value=`${a.value.slice(0,l)}\n${a.value.slice(l)}`,a.selectionStart=l+1,void(a.selectionEnd=l+1);if("Tab"===t.dataset.key)return a.value.length===l?a.value+="\t":a.value=`${a.value.slice(0,l)}\t${a.value.slice(l)}`,a.selectionStart=l+1,void(a.selectionEnd=l+1);if("Space"===t.dataset.key)return a.value.length===l?a.value+=" ":a.value=`${a.value.slice(0,l)} ${a.value.slice(l)}`,a.selectionStart=l+1,void(a.selectionEnd=l+1);"MetaLeft"!==t.dataset.key&&("AltRight"!==t.dataset.key&&"AltLeft"!==t.dataset.key?"ControlLeft"!==t.dataset.key&&"ControlRight"!==t.dataset.key?(a.value.length===l?a.value+=`${t.innerText}`:a.value=a.value.slice(0,l)+t.innerText+a.value.slice(l),a.selectionStart=l+1,a.selectionEnd=l+1):(d=!0,v&&(c="en"===c?"ru":"en",localStorage.setItem("leng",c),i(o,c),document.querySelectorAll(".key").forEach((e=>{"CapsLock"!==e.dataset.key&&"ShiftLeft"!==e.dataset.key&&"ShiftRight"!==t.dataset.key&&e.classList.remove("active")})))):(v=!0,d&&(c="en"===c?"ru":"en",localStorage.setItem("leng",c),i(o,c),document.querySelectorAll(".key").forEach((e=>{"CapsLock"!==e.dataset.key&&"ShiftLeft"!==e.dataset.key&&"ShiftRight"!==t.dataset.key&&e.classList.remove("active")})))))}}})),document.addEventListener("mouseup",(e=>{e.target.classList.contains("key")&&"CapsLock"!==e.target.dataset.key&&("ShiftLeft"!==e.target.dataset.key&&"ShiftRight"!==e.target.dataset.key||r&&(r=!1,o=!o,i(o,c)),v=!1,d=!1,setTimeout((()=>{e.target.classList.remove("active")}),100))})),document.addEventListener("mouseout",(e=>{e.target.classList.contains("key")&&"ShiftLeft"!==e.target.dataset.key&&"ShiftRight"!==e.target.dataset.key&&"CapsLock"!==e.target.dataset.key&&"AltRight"!==e.target.dataset.key&&"AltLeft"!==e.target.dataset.key&&"ControlLeft"!==e.target.dataset.key&&"ControlRight"!==e.target.dataset.key&&e.target.classList.remove("active")})),document.addEventListener("keydown",(e=>{e.preventDefault();const{code:t}=e,a=document.querySelectorAll(".key"),l=document.querySelector(".textarea"),s=l.selectionStart,n=[...a].filter((e=>e.dataset.key===t)),f=n[0];if(n.length){if("CapsLock"===f.dataset.key&&u)return o=!o,u=!1,i(o,c),void setTimeout((()=>{f.classList.remove("active")}),100);if(!f.classList.contains("active")){if(("ShiftLeft"===f.dataset.key||"ShiftRight"===f.dataset.key)&&r)return a.forEach((e=>{"CapsLock"!==e.dataset.key&&e.classList.remove("active")})),r=!1,o=!o,void i(o,c);if(f.classList.add("active"),"ShiftLeft"===f.dataset.key||"ShiftRight"===f.dataset.key)return r=!0,o=!o,void i(o,c);if("CapsLock"===f.dataset.key)return u=!0,o=!o,void i(o,c);if("Backspace"===f.dataset.key){let e="";const t=l.selectionEnd;if(0===s&&t===l.value.length)return void(l.value=e);if(0===s)return;if(l.value.length===s)e=l.value.slice(0,l.value.length-1);else if(t!==s)return e=l.value.slice(0,s)+l.value.slice(t),l.value=e,l.focus(),l.selectionStart=s,void(l.selectionEnd=s);return e=l.value.slice(0,s-1)+l.value.slice(s),l.value=e,l.focus(),l.selectionStart=s-1,void(l.selectionEnd=s-1)}if("Delete"===f.dataset.key){let e="";const t=l.selectionEnd;if(0===s&&t===l.value.length)return void(l.value=e);if(l.value.length===s)return;if(0===s)e=l.value.slice(1,l.value.length);else{if(t!==s)return e=l.value.slice(0,s)+l.value.slice(t),l.value=e,l.focus(),l.selectionStart=s,void(l.selectionEnd=s);e=l.value.slice(0,s)+l.value.slice(s+1)}return l.value=e,l.focus(),l.selectionStart=s,void(l.selectionEnd=s)}if("Enter"===f.dataset.key)return l.value.length===s?l.value+="\n":l.value=`${l.value.slice(0,s)}\n${l.value.slice(s)}`,l.selectionStart=s+1,void(l.selectionEnd=s+1);if("Tab"===f.dataset.key)return l.value.length===s?l.value+="\t":l.value=`${l.value.slice(0,s)}\t${l.value.slice(s)}`,l.selectionStart=s+1,void(l.selectionEnd=s+1);if("Space"===f.dataset.key)return l.value.length===s?l.value+=" ":l.value=`${l.value.slice(0,s)} ${l.value.slice(s)}`,l.selectionStart=s+1,void(l.selectionEnd=s+1);if("MetaLeft"!==f.dataset.key){if("AltRight"===f.dataset.key||"AltLeft"===f.dataset.key)return v=!0,void(d&&(c="en"===c?"ru":"en",i(o,c),localStorage.setItem("leng",c)));if("ControlLeft"===f.dataset.key||"ControlRight"===f.dataset.key)return d=!0,void(v&&(c="en"===c?"ru":"en",localStorage.setItem("leng",c),i(o,c)));l.value.length===s?l.value+=`${f.innerText}`:l.value=l.value.slice(0,s)+f.innerText+l.value.slice(s),l.selectionStart=s+1,l.selectionEnd=s+1}}}})),document.addEventListener("keyup",(e=>{e.preventDefault();const{code:t}=e,a=[...document.querySelectorAll(".key")].filter((e=>e.dataset.key===t)),l=a[0];a.length&&"CapsLock"!==l.dataset.key&&("ShiftLeft"!==l.dataset.key&&"ShiftRight"!==l.dataset.key||r&&(r=!1,o=!o,i(o,c)),v=!1,d=!1,setTimeout((()=>{l.classList.remove("active")}),100))}));const f=s,y=document.createElement("div");y.innerHTML='<ul class="list">\n<li class="list__item">Keyboard for Windows</li>\n<li class="list__item">Change lenguage — alt + ctrl</li>\n<li class="list__item">Mouse click on shift, hold and move the mouse — shift will be active</li>\n<li class="list__item">Mouse click with hold on alt (ctrl) and click on ctrl (alt) — switch language</li>\n<li class="list__item">Text can be selected and several characters can be deleted using del or backspace</li>\n</ul>';const k=y;document.body.innerHTML="<div class='main-container'></div>";const g=document.querySelector(".main-container");g.append(t),g.append(f),g.append(k)})();