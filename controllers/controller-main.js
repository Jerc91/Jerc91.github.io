(function(){function fnInit(){var a=[{src:"views/header.html",mime:"text",fnCall:fnHeader,query:"#header"},{src:"assets/css/master.css",mime:"css"},{src:"assets/js/vendor/jquery-2.1.1.min.js"},{src:"assets/js/controls/jspinner.js"}],b=[{src:"controllers/controller-"+fnHash()+".js"}];fnGetFile.call(main,a,function(){fnGetFile.call(main,b,fnChangeController)})}function fnResizeContent(a){var b=document.querySelectorAll(".methods li h3.title");Array.prototype.slice.call(b).forEach(function(b){a&&b.addEventListener("click",fnShowContent,!1);var c=b.parentNode.querySelector(".content");c.style.marginTop="-"+c.offsetHeight+"px"})}function fnShowContent(a,b){var c=this,d=$(c).offset().top-(b||60);b?c.classList.add("active"):c.classList.toggle("active");var e=$("html, body");setTimeout(function(){e.animate({scrollTop:d},800,"swing")},300)}function fnChangeController(){for(var a,b=document.querySelectorAll("#menu a"),c=fnHash(null,!0),d=0;d<b.length;d++)b[d].addEventListener("click",function(){if(document.querySelector("#header nav").classList.remove("active"),this.dataset.controller){for(var a=0;a<b.length;a++)b[a].parentNode.classList.remove("active");this.parentNode.classList.add("active");try{PNotify&&PNotify.removeAll()}catch(a){}fnRemoveController(),fnGetFile({src:"controllers/controller-"+this.dataset.controller.toLowerCase()+".js"}),fnHash(this.dataset.controller);var c=document.querySelector("#header .content span");c.innerHTML=this.dataset.controller,ga("send",{hitType:"pageview",title:this.dataset.controller})}},!1),b[d].parentNode.classList.remove("active"),b[d].dataset.controller==c&&(a=b[d]);a.parentNode.classList.add("active"),window.addEventListener("scroll",function(){var a=document.getElementById("header");document.body.scrollTop>20||document.documentElement.scrollTop>20?a.classList.add("active"):a.classList.remove("active")},!1),fnDeleteWorkers(main.workers)}function fnRemoveController(){myApp.main.currentInfo.ns.forEach(function(ns){delete eval("(function() { delete "+ns+"; })")()}),myApp.main.currentInfo.js.forEach(function(a){j.tools.fnDeleteTag(document.querySelector('[data-name*="'+a+'"]'))});for(var jslides=document.querySelectorAll('[data-name*="jslide"]'),i=0;i<jslides.length;i++)j.tools.fnDeleteTag(jslides[i])}function fnHash(a,b){var c=location.hash||"JMain";return a?(location.hash="#!/"+a,void(document.title=a+" : JERC")):b?c.replace("#!/",""):c.replace("#!/","").toLowerCase()}function fnHeader(a){var b=document.querySelector(a);b.innerHTML=this.data;var c=document.createElement("div");c.classList.add("content");var d=document.createElement("i");d.setAttribute("class","fa fa-bars"),c.appendChild(d);var e=document.createElement("span");e.textContent+=fnHash(null,!0),c.appendChild(e),b.appendChild(c);var f=document.querySelector("#header .content i");f.addEventListener("click",function(){var a=document.querySelector("#header nav");a.classList.add("active")},!1),document.querySelector("#blocker").addEventListener("click",function(){document.querySelector("#menu").classList.remove("active")},!1)}function fnGetSize(a){var b,c={s:a?500:360,m:767,l:1429},d=document.body.offsetWidth+13;for(var e in c)if(d<=c[e]){b=e;break}return b||"l"}this.fnInit=fnInit,this.fnResizeContent=fnResizeContent,this.fnShowContent=fnShowContent,this.fnGetSize=fnGetSize}).call(myApp.fnAddNS("main"));var main=myApp.main;main.Title="main";