(function(){function a(){fnGetFile.call(p,[{src:"views/view-jslide.html",mime:"text",fnCall:j.tools.fnBind,query:"#wrapper"},{src:"views/jslide/view-movies.html",mime:"text",fnCall:function(){p=this.data}},{src:s.js[1]},{src:s.js[2]},{src:s.js[3]},{src:s.js[4]}],b)}function b(){var a={sort_by:"popularity.desc",page:1,query:""};theMovieDb.common.api_key="eed2b8cfb00d33f1a2fa105f098f6aef",theMovieDb.common.base_uri="http"+q+"://api.themoviedb.org/3/",theMovieDb.discover.getMovies(a,c,function(){}),setTimeout(function(){j.jspinner.fnUnBlockUI(),fnDeleteWorkers(jslide.workers),setTimeout(function(){document.querySelector("body").removeAttribute("style")},500)},500),myApp.main.fnResizeContent(!0);var b=document.querySelector("#btnMoveLeft");b.addEventListener("click",function(){k.fnMoveLeft()},!1);var d=document.querySelector("#btnMoveRight");d.addEventListener("click",function(){l.fnMoveRight()},!1);var e=document.querySelector("#slOption");e.addEventListener("change",function(){m.fnMoveTo(this.value)},!1)}function c(a){a&&(a=JSON.parse(a),a.results.forEach(function(a){a.pathImage=r,a.backdrop_path||(a.backdrop_path=a.backdrop_path||Shows.config.noImage,a.pathImage=""),a.original_name=a.title,o.push(a)}));for(var b=document.querySelectorAll(".loading"),c=0;c<b.length;c++)j.tools.fnDeleteTag(b[c]);$(".movies > div").fadeOut("fast",function(){$(this).remove()});var e=Enumerable.From(o).Skip(0).Take(9).ToArray();document.querySelector(".movies").innerHTML+=Hogan.compile(p).render({result:e});for(var f=document.querySelectorAll(".movies li:not(.actor)"),c=0;c<f.length;c++)f[c].dataset.type="movies",f[c].addEventListener("mouseover",d,!1);0==$(".movies li").length&&$(".movies").append("<div>No hay resultados</div>"),window.addEventListener("resize",g,!1),g()}function d(a){var b=this;b.classList.contains("load")||this.info||(b.classList.add("load"),b.innerHTML+='<span class="loading"></div>',e({id:b.dataset.id,fnCall:f,control:b,type:b.dataset.type}))}function e(a){theMovieDb[a.type].getById({id:a.id,append_to_response:"credits,season/1"},function(b){a.fnCall.call(a.control,JSON.parse(b))},function(){})}function f(a){var b=this;a.pathImage=r,a.type=b.dataset.type,a.seasons&&(a.seasons=a.seasons.slice(1,a.seasons.length)),b.info=a;var c=b.querySelector(".actors"),d=b.querySelector(".loading");if(d&&d.parentNode.removeChild(d),a.credits&&a.credits.cast){var e=document.createDocumentFragment(),f=3;a.credits.cast.length<3&&(f=a.credits.cast.length);for(var g=0;f>g;g++){var h=document.createElement("li");h.innerHTML=a.credits.cast[g].name,e.appendChild(h)}c.appendChild(e),b.classList.remove("load")}}function g(){var a={s:1,m:2,l:3},b=myApp.main.fnGetSize(!0);(!n||n&&n!=b)&&(n=b,t.maxElementsShow=a[n]),t.width=document.querySelector(".methods").offsetWidth,u.width=document.querySelector("#fnInit .jslide").offsetWidth,v.width=document.querySelector("#fnMoveLeft .jslide").offsetWidth,w.width=document.querySelector("#fnMoveRight .jslide").offsetWidth,x.width=document.querySelector("#fnMoveTo .jslide").offsetWidth,h=h||j.jslide.fnGetInstance(),h.fnInit(t),i=i||j.jslide.fnGetInstance(),i.fnInit(u),k=k||j.jslide.fnGetInstance(),k.fnInit(v),l=l||j.jslide.fnGetInstance(),l.fnInit(w),m=m||j.jslide.fnGetInstance(),m.fnInit(x)}var h,i,k,l,m,n,o=[],p={},q=ssl?"s":"",r="http"+q+"://image.tmdb.org/t/p/w500/",s={js:["controllers/controller-jtools.js","assets/js/controls/jslide.js","assets/js/vendor/themoviedb.min.js","assets/js/vendor/linq.min.js","assets/js/vendor/hogan-3.0.1.min.js"],ns:["myApp.jslide","theMovieDb","Enumerable","Hogan"]},t={buttons:!0,list:9,maxElementsShow:3,name:"main",qSlide:".jslide",qWrapper:".wrapperMovies"},u={buttons:!0,list:12,maxElementsShow:4,name:"fnInit",qSlide:".jslide",qWrapper:"#fnInit"},v={buttons:!0,list:12,maxElementsShow:4,name:"fnMoveLeft",qSlide:".jslide",qWrapper:"#fnMoveLeft"},w={buttons:!0,list:12,maxElementsShow:4,name:"fnMoveRight",qSlide:".jslide",qWrapper:"#fnMoveRight"},x={buttons:!0,list:12,maxElementsShow:1,name:"fnMoveTo",qSlide:".jslide",qWrapper:"#fnMoveTo"};this.fnInit=a,myApp.main.currentInfo=s}).call(myApp.fnAddNS("jslide"));var jslide=myApp.jslide;jslide.fnInit();