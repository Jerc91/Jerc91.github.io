(function(){function a(){var a=[{src:"views/view-jmain.html",mime:"text",fnCall:j.tools.fnBind,query:"#wrapper"}],c=[{src:"views/jmain/jmain-arrays.html",mime:"text",fnCall:j.tools.fnBind,query:".methods .arrays"},{src:"views/jmain/jmain-nodos.html",mime:"text",fnCall:j.tools.fnBind,query:".methods .nodes"},{src:"views/jmain/jmain-namespace.html",mime:"text",fnCall:j.tools.fnBind,query:".methods .namespace"},{src:"views/jmain/jmain-peticiones.html",mime:"text",fnCall:j.tools.fnBind,query:".methods .peticiones"},{src:"views/jmain/jmain-tools.html",mime:"text",fnCall:j.tools.fnBind,query:".methods .tools"},{src:i.js[0]}];fnGetFile.call(jmain,a,function(){fnGetFile.call(jmain,c,b)})}function b(){myApp.main.fnResizeContent(!0),document.querySelector("#btnColors").addEventListener("click",e,!1),window.addEventListener("resize",c,!1),c(),setTimeout(function(){j.jspinner.fnUnBlockUI(),fnDeleteWorkers(jmain.workers),setTimeout(function(){document.querySelector("body").removeAttribute("style")},500)},500);for(var a=document.querySelectorAll("[data-slide]"),b=0;b<a.length;b++)a[b].setAttribute("href","javascript:void(0)"),a[b].addEventListener("click",function(){var a=parseInt(this.dataset.slide);g.fnMoveTo(a);var b=document.querySelector(".jslide > li:nth-child("+(a+1)+") h3.title");myApp.main.fnShowContent.call(b,null,100)},!1)}function c(){var a={s:"M 17 70 A 45, 45 0 0 1 125, 70",m:"M 10 84 A 45, 45 0 0 1 140, 84",l:"M 4 90 A 45, 45 0 0 1 160, 90"},b=d();if(!f||f&&f!=b){f=b;var c=document.querySelector("#general");c&&c.setAttribute("d",a[f])}h.width=document.querySelector(".methods").offsetWidth,g=g||j.jslide.fnGetInstance(),g.fnInit(h)}function d(){var a,b={s:360,m:767,l:1429},c=document.body.offsetWidth+13;for(var d in b)if(c<=b[d]){a=d;break}return a||"l"}function e(){function a(){e+=1,10==e&&(fnDeleteWorkers(jmain.workers),e=0,myApp.main.fnResizeContent())}var b="assets/img/color-",c=document.querySelector(".colors"),d=new Array(10),e=0;c.innerHTML="";for(var f=0;f<d.length;f++){var g={src:b+f+".jpg",mime:"img",fnCall:function(){var b=document.createElement("img");b.src=this.data,b.dataset.name=this.name,c.appendChild(b),b.addEventListener("load",a,!1)}};d[f]=g}d[5].cache=!1,fnGetFile.call(jmain,d)}var f,g,h={leftToRight:!0,list:[0,1,2,3,4],maxElementsShow:1,name:"main",qSlide:".jslide",qWrapper:".methods",fnCall:function(){var a=document.querySelectorAll(".methods .content");Array.prototype.slice.call(a).forEach(function(a){a.style.marginTop="-"+a.offsetHeight+"px"})}},i={js:["assets/js/controls/jslide.js","controllers/controller-jmain.js","jslide-main"],ns:["myApp.jmain","j.jslide"]};this.fnInit=a,myApp.main.currentInfo=i}).call(myApp.fnAddNS("jmain"));var jmain=myApp.jmain;jmain.fnInit();