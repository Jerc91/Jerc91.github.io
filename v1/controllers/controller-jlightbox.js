(function(){function t(){var t=[{src:"views/view-jlightbox.html",then:myApp.main.fnSetHTML,query:"#wrapper"},{src:"views/jlightbox/jlightbox-party.html",then:function(t){o=t.data}}];get(t).then(e)}function e(){myApp.main.fnShowPage(),document.querySelector("#btnShowMain").addEventListener("click",i,!1)}function i(t){t.preventDefault(),j.jlightbox.fnInit(),j.jlightbox.fnShow(o);var e=document.querySelector("#lightbox");setTimeout(function(){e.classList.add("active")},800),setTimeout(function(){e.classList.add("lights")},1600),setTimeout(function(){e.classList.add("move")},2400),$(e).find(".contentLB div").click("click",n)}function n(t){t.preventDefault();var e="active";this.classList.contains(e)||(this.style.transform="scale(6)",this.style.opacity=0,this.classList.add(e),setTimeout(function(t){j.tools.fnDeleteTag(t);for(var e=document.querySelector("#lightbox .contentLB"),i=e.querySelectorAll("div:not(.lMain)"),n=[],o=0;o<i.length;o++)n.push(i[o].className.substring(1,i[o].className.length));var l=Math.floor(Math.random()*i.length);e.querySelector(".titleLights").className="t"+n[l]+" titleLights"},1e3,this))}var o,l={js:["controllers/controller-jlightbox.js"],ns:["myApp.jlightbox"]};this.fnInit=t,myApp.main.currentInfo=l}).call(myApp.fnAddNS("jlightbox"));var jlightbox=myApp.jlightbox;jlightbox.fnInit();